import React, { useEffect, useRef, useState } from "react";

const reduced =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

interface SplitHeadingProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;       // ms before first word starts
  stagger?: number;     // ms between each word
  threshold?: number;   // IntersectionObserver threshold
  once?: boolean;       // only animate once
}

export const SplitHeading: React.FC<SplitHeadingProps> = ({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
  stagger = 55,
  threshold = 0.15,
  once = true,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(reduced);
  const words = children.split(" ");

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once, threshold]);

  return (
    <Tag ref={ref as React.RefObject<any>} className={`${className} overflow-hidden`} aria-label={children}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          aria-hidden="true"
          style={{ marginRight: "0.28em" }}
        >
          <span
            style={{
              display: "inline-block",
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transition: reduced
                ? "none"
                : `transform 750ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * stagger}ms, opacity 600ms ease ${delay + i * stagger}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default SplitHeading;
