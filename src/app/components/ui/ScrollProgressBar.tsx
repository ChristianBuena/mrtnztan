import React from "react";

interface ScrollProgressBarProps {
  progress: number; // 0–1
  accentColor?: string;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  progress,
  accentColor,
}) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9998] h-[2px] pointer-events-none"
      style={{ backgroundColor: "transparent" }}
    >
      <div
        style={{
          width: `${progress * 100}%`,
          height: "100%",
          backgroundColor: accentColor || "var(--accent)",
          transition: "width 0.05s linear",
          boxShadow: `0 0 8px ${accentColor || "var(--accent)"}66`,
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
