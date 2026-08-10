import { useEffect, useRef, useState, useCallback } from "react";

export interface ScrollState {
  scrollY: number;
  totalProgress: number; // 0–1 across entire page
  velocity: number;      // absolute scroll speed in px/frame
  sectionProgress: (sectionId: string) => number; // 0–1 within a section
}

export function useScrollProgress(): ScrollState {
  const [scrollY, setScrollY] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);
  const [velocity, setVelocity] = useState(0);

  const lastScrollY = useRef(0);
  const rafId = useRef<number>(0);
  const scheduled = useRef(false);

  useEffect(() => {
    const tick = () => {
      scheduled.current = false;
      const sy = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, sy / maxScroll) : 0;
      const vel = Math.abs(sy - lastScrollY.current);

      lastScrollY.current = sy;
      setScrollY(sy);
      setTotalProgress(progress);
      setVelocity(vel);
    };

    const onScroll = () => {
      if (!scheduled.current) {
        scheduled.current = true;
        rafId.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const sectionProgress = useCallback((sectionId: string): number => {
    const el = document.getElementById(sectionId);
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    // 0 when top of element hits bottom of viewport
    // 1 when bottom of element hits top of viewport
    const total = rect.height + vh;
    const done = vh - rect.top;
    return Math.min(1, Math.max(0, done / total));
  }, [scrollY]); // eslint-disable-line react-hooks/exhaustive-deps

  return { scrollY, totalProgress, velocity, sectionProgress };
}
