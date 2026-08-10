import React, { useEffect, useRef, useState } from "react";

const PROFILES = [
  "/profile1.png",
  "/profile2.png",
  "/profile3.png",
  "/profile4.png",
];

interface PixelProfileImageProps {
  className?: string;
  heroDitherProgress?: number;
}

export const PixelProfileImage: React.FC<PixelProfileImageProps> = ({
  className = "",
  heroDitherProgress = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pixelScale, setPixelScale] = useState(1); // 1 = crisp, 0.05 = super blocky pixelated
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isTransitioningRef = useRef(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    PROFILES.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesRef.current[idx] = img;
      };
    });
  }, []);

  // Draw frame at specific pixelation scale
  const drawPixelated = (imgSrc: string, scale: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) return;

      // Disable smoothing for sharp pixelated look
      ctx.imageSmoothingEnabled = false;

      if (scale >= 0.98) {
        // Full resolution
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
      } else {
        // Pixelated step down
        const scaledW = Math.max(4, Math.floor(w * scale));
        const scaledH = Math.max(5, Math.floor(h * scale));

        // Offscreen tiny canvas draw
        const offCanvas = document.createElement("canvas");
        offCanvas.width = scaledW;
        offCanvas.height = scaledH;
        const offCtx = offCanvas.getContext("2d");
        if (offCtx) {
          offCtx.imageSmoothingEnabled = false;
          offCtx.drawImage(img, 0, 0, scaledW, scaledH);

          ctx.clearRect(0, 0, w, h);
          ctx.drawImage(offCanvas, 0, 0, scaledW, scaledH, 0, 0, w, h);
        }
      }
    };
  };

  // Perform pixelate transition to next image
  const triggerTransition = (targetIndex?: number) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const nextIdx = targetIndex !== undefined ? targetIndex : (currentIndex + 1) % PROFILES.length;
    
    // Pixelate OUT steps
    const outSteps = [1.0, 0.6, 0.3, 0.15, 0.06, 0.03];
    const inSteps = [0.03, 0.06, 0.15, 0.3, 0.6, 1.0];
    
    let step = 0;

    const animOut = setInterval(() => {
      if (step < outSteps.length) {
        setPixelScale(outSteps[step]);
        drawPixelated(PROFILES[currentIndex], outSteps[step]);
        step++;
      } else {
        clearInterval(animOut);
        // Switch image
        setCurrentIndex(nextIdx);
        let inStep = 0;
        const animIn = setInterval(() => {
          if (inStep < inSteps.length) {
            setPixelScale(inSteps[inStep]);
            drawPixelated(PROFILES[nextIdx], inSteps[inStep]);
            inStep++;
          } else {
            clearInterval(animIn);
            setPixelScale(1);
            isTransitioningRef.current = false;
          }
        }, 50);
      }
    }, 50);
  };

  // Sync initial render & window resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const updateCanvasSize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth || 400;
        canvas.height = canvas.parentElement.clientHeight || 500;
        drawPixelated(PROFILES[currentIndex], pixelScale);
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [currentIndex, pixelScale]);

  // Auto cycle profile images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      triggerTransition();
    }, 4500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      onClick={() => triggerTransition()}
      title="Click to cycle profile image with pixel transition!"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover grayscale contrast-110 group-hover:contrast-125 transition-all duration-300 block"
        style={{
          filter: heroDitherProgress > 0.15 ? `url(#dither) contrast(${1 + heroDitherProgress * 0.25})` : undefined,
        }}
      />

      {/* Pixel transition indicator overlay badge */}
      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur border border-border px-2 py-1 font-pixel text-[8px] tracking-widest text-accent uppercase rounded-sm shadow-md pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        PIXEL MODE [{currentIndex + 1}/4]
      </div>
    </div>
  );
};

export default PixelProfileImage;
