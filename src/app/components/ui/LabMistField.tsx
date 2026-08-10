import React, { useEffect, useRef } from "react";

interface LabMistFieldProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  maxAlpha: number;
  growth: number;
  phase: number;
}

export const LabMistField: React.FC<LabMistFieldProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    // Generate mist / smoke particles
    const particleCount = 45;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 90 + 50,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.3 - 0.1, // slow upward float
        alpha: Math.random() * 0.15,
        maxAlpha: Math.random() * 0.18 + 0.05,
        growth: (Math.random() - 0.5) * 0.05,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Ambient lab glow gradient in background
      const glowGrad = ctx.createRadialGradient(
        width * 0.3, height * 0.5, 10,
        width * 0.3, height * 0.5, width * 0.6
      );
      glowGrad.addColorStop(0, "rgba(0, 245, 212, 0.04)");
      glowGrad.addColorStop(0.5, "rgba(57, 255, 20, 0.02)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Render mist clouds
      particles.forEach((p) => {
        p.x += p.vx + Math.sin(time + p.phase) * 0.3;
        p.y += p.vy;
        p.radius += p.growth * 0.1;

        // Wrap boundaries
        if (p.y < -p.radius * 2) {
          p.y = height + p.radius;
          p.x = Math.random() * width;
        }
        if (p.x < -p.radius * 2) p.x = width + p.radius;
        if (p.x > width + p.radius * 2) p.x = -p.radius;

        // Oscillate radius & alpha slightly
        const currentAlpha = Math.sin(time * 0.5 + p.phase) * 0.04 + p.maxAlpha;

        // Draw radial mist puff
        const mistGrad = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, Math.max(10, p.radius)
        );
        mistGrad.addColorStop(0, `rgba(220, 240, 255, ${currentAlpha})`);
        mistGrad.addColorStop(0.4, `rgba(180, 220, 240, ${currentAlpha * 0.5})`);
        mistGrad.addColorStop(1, "rgba(180, 220, 240, 0)");

        ctx.fillStyle = mistGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(10, p.radius), 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle rising lab light specks (floating embers/spores)
      ctx.fillStyle = "rgba(0, 245, 212, 0.3)";
      for (let i = 0; i < 15; i++) {
        const sx = (Math.sin(time * 0.7 + i * 1.3) * 0.5 + 0.5) * width;
        const sy = ((time * 20 + i * 40) % height);
        ctx.beginPath();
        ctx.arc(sx, height - sy, 1 + (i % 2), 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none opacity-80 ${className}`}
      aria-hidden="true"
    />
  );
};

export default LabMistField;
