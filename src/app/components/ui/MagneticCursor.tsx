import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const reduced =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

export const MagneticCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Outer "follower" lags behind with spring
  const springX = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.6 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.6 });

  // Inner dot follows instantly
  const dotX = useSpring(cursorX, { stiffness: 800, damping: 30 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 30 });

  useEffect(() => {
    if (reduced) return;

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

    // Detect hoverable elements
    const interactables = "a, button, [role=button], input, select, textarea, label, [data-cursor-hover]";
    
    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    // Use event delegation via document
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

  if (reduced) return null;

  return (
    <>
      {/* Outer ring — lagging follower */}
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
          border: `${hovered ? 1 : 1.5}px solid var(--foreground)`,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: hidden ? 0 : 1,
          backgroundColor: hovered ? "var(--foreground)" : "transparent",
          mixBlendMode: hovered ? ("difference" as React.CSSProperties["mixBlendMode"]) : ("normal" as React.CSSProperties["mixBlendMode"]),
        }}
        animate={{
          width: clicked ? 18 : hovered ? 44 : 28,
          height: clicked ? 18 : hovered ? 44 : 28,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />

      {/* Inner dot — instant follower */}
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
          opacity: hidden ? 0 : hovered ? 0 : 1,
          width: clicked ? 3 : 5,
          height: clicked ? 3 : 5,
          backgroundColor: "var(--accent)",
        }}
      />
    </>
  );
};

export default MagneticCursor;
