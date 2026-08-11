import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const reduced =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

const isTouchDevice =
  typeof window !== "undefined"
    ? window.matchMedia("(pointer: coarse), (hover: none)").matches ||
      "ontouchstart" in window ||
      (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0)
    : false;

export const MagneticCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Fast snappy springs
  const springX = useSpring(cursorX, { stiffness: 450, damping: 24, mass: 0.2 });
  const springY = useSpring(cursorY, { stiffness: 450, damping: 24, mass: 0.2 });

  // Instant inner dot
  const dotX = useSpring(cursorX, { stiffness: 1200, damping: 35 });
  const dotY = useSpring(cursorY, { stiffness: 1200, damping: 35 });

  useEffect(() => {
    if (reduced || isTouchDevice) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setHidden(false);
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    const interactables = "a, button, [role=button], input, select, textarea, label, [data-cursor-hover]";
    
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest(interactables)) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (reduced || isTouchDevice) return null;

  return (
    <>
      {/* Outer spinning dashed reticle ring — always accent color like display button */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "9999px",
          border: "1.5px dashed var(--accent)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: hidden ? 0 : 0.9,
          boxShadow: "0 0 12px var(--accent)40",
        }}
        animate={{
          width: clicked ? 18 : hovered ? 48 : 34,
          height: clicked ? 18 : hovered ? 48 : 34,
          rotate: [0, 360],
        }}
        transition={{
          width: { type: "spring", stiffness: 500, damping: 25 },
          height: { type: "spring", stiffness: 500, damping: 25 },
          rotate: { repeat: Infinity, duration: hovered ? 3 : 8, ease: "linear" },
        }}
      />

      {/* Target reticle crosshairs on hover */}
      {hovered && (
        <motion.div
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 9999,
            width: 56,
            height: 56,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-2.5 bg-accent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-2.5 bg-accent" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-2.5 bg-accent" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[2px] w-2.5 bg-accent" />
        </motion.div>
      )}

      {/* Inner instant point marker with vibrant accent glow */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "9999px",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: hidden ? 0 : 1,
          width: clicked ? 6 : hovered ? 8 : 4,
          height: clicked ? 6 : hovered ? 8 : 4,
          backgroundColor: "var(--accent)",
          boxShadow: "0 0 10px var(--accent)",
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      />
    </>
  );
};

export default MagneticCursor;
