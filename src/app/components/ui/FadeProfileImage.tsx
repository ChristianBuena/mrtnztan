import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const PROFILES = [
  "/profile1.png",
  "/profile2.png",
  "/profile3.png",
  "/profile4.png",
];

interface FadeProfileImageProps {
  className?: string;
  heroDitherProgress?: number;
}

const isTouchDevice =
  typeof window !== "undefined"
    ? window.matchMedia("(pointer: coarse), (hover: none)").matches ||
      "ontouchstart" in window ||
      (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0)
    : false;

export const FadeProfileImage: React.FC<FadeProfileImageProps> = ({
  className = "",
  heroDitherProgress = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Auto cycle profile images every 4 seconds automatically
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isFading]);

  const handleNext = () => {
    if (isFading) return;
    setIsFading(true);
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % PROFILES.length);

    setTimeout(() => {
      setIsFading(false);
    }, 900);
  };

  const filterStyle =
    heroDitherProgress > 0.15
      ? `url(#dither) contrast(${1 + heroDitherProgress * 0.25}) brightness(${1 - heroDitherProgress * 0.12})`
      : undefined;

  const handleClick = () => {
    if (isTouchDevice) return; // Automatic on mobile, no tap needed!
    handleNext();
  };

  return (
    <div
      className={`relative overflow-hidden group bg-neutral-900 aspect-[4/5] ${isTouchDevice ? "cursor-default" : "cursor-pointer"} ${className}`}
      onClick={handleClick}
      title={isTouchDevice ? "Auto-cycling profile photo" : "Click to cycle profile photo"}
    >
      {/* Base Layer: Previous photo (underneath, 100% visible, no white background bleed) */}
      <img
        src={PROFILES[prevIndex]}
        alt="Profile photo background base"
        style={{ filter: filterStyle }}
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 block"
      />

      {/* Top Layer: Current photo (fades smoothly over the base photo) */}
      <motion.img
        key={PROFILES[currentIndex]}
        src={PROFILES[currentIndex]}
        alt="Profile photo active"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        style={{ filter: filterStyle }}
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 group-hover:contrast-125 transition-all duration-300 block z-10"
      />

      {/* Cycle indicator overlay badge */}
      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur border border-border px-2 py-1 font-pixel text-[8px] tracking-widest text-foreground uppercase rounded-sm shadow-md pointer-events-none flex items-center gap-1.5 z-20">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        PHOTO [{currentIndex + 1}/4]
      </div>
    </div>
  );
};

export default FadeProfileImage;
