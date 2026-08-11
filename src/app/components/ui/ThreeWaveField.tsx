import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeWaveFieldProps {
  dark?: boolean;
  themeIdx?: number;
  scrollVelocity?: number;   // drives wave amplitude intensification
  scrollProgress?: number;   // 0–1 total page progress (amplitude calm at 1)
}

const reduced =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

const ThreeWaveField: React.FC<ThreeWaveFieldProps> = ({
  dark = false,
  themeIdx = 0,
  scrollVelocity = 0,
  scrollProgress = 0,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    scrollVelocity,
    scrollProgress,
    dark,
    themeIdx,
  });

  // Keep latest props accessible inside RAF loop without re-initialising Three.js
  useEffect(() => {
    stateRef.current = { scrollVelocity, scrollProgress, dark, themeIdx };
  }, [scrollVelocity, scrollProgress, dark, themeIdx]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth || window.innerWidth, mount.clientHeight || 300);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── scene / camera ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -1, 1, 1, -1, 0.1, 10
    );
    camera.position.z = 1;

    // ── point grid (adaptive for mobile performance) ──────────────────────
    const isMobileScreen = window.innerWidth < 768;
    const COLS = isMobileScreen ? 45 : 80;
    const ROWS = isMobileScreen ? 25 : 45;
    const COUNT = COLS * ROWS;

    const positions = new Float32Array(COUNT * 3);
    const basePositions = new Float32Array(COUNT * 3);
    // Per-point phase offset for organic variation
    const phaseOffsets = new Float32Array(COUNT);

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const idx = (r * COLS + c) * 3;
        const x = (c / (COLS - 1)) * 2 - 1;
        const y = (r / (ROWS - 1)) * 2 - 1;
        positions[idx] = x;
        positions[idx + 1] = y;
        positions[idx + 2] = 0;
        basePositions[idx] = x;
        basePositions[idx + 1] = y;
        basePositions[idx + 2] = 0;
        phaseOffsets[r * COLS + c] = Math.random() * Math.PI * 2;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // colour based on dark/light
    const getColor = () => {
      const s = stateRef.current;
      return s.dark ? 0xffffff : 0x000000;
    };

    const material = new THREE.PointsMaterial({
      color: getColor(),
      size: isMobileScreen ? 2.0 : 2.5,
      sizeAttenuation: false,
      transparent: true,
      opacity: dark ? 0.10 : 0.065,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ── mouse ripple ──────────────────────────────────────────────────────────
    const mouse = { x: -9999, y: -9999, t: 0 };
    const onMouse = (e: MouseEvent) => {
      const r = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      mouse.t = performance.now();
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    // ── resize & visibility ───────────────────────────────────────────────────
    let isVisible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );
    io.observe(mount);

    const ro = new ResizeObserver(() => {
      if (!mount) return;
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    });
    ro.observe(mount);

    // ── static frame for reduced-motion ──────────────────────────────────────
    if (reduced) {
      renderer.render(scene, camera);
      return () => {
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        mount.removeChild(renderer.domElement);
        ro.disconnect();
        io.disconnect();
        window.removeEventListener("mousemove", onMouse);
      };
    }

    // ── animation loop ────────────────────────────────────────────────────────
    let rafId = 0;
    const t0 = performance.now();
    // Smoothed velocity for easing
    let smoothVel = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (!isVisible) return; // Pause when out of view

      const now = performance.now();
      const t = (now - t0) / 1000;
      const { scrollVelocity: vel, scrollProgress: sp } = stateRef.current;

      // Exponential smoothing for velocity
      smoothVel = smoothVel * 0.88 + vel * 0.12;

      // Scroll velocity → amplitude boost (more aggressive than before)
      const velAmp = Math.min(smoothVel * 0.007, 0.095);
      // Contact section: amplitude settles towards 0 when totalProgress → 1
      const calmFactor = sp > 0.88 ? 1 - ((sp - 0.88) / 0.12) : 1;
      const baseAmp = 0.028 * calmFactor;  // doubled from 0.018
      const amp = (baseAmp + velAmp) * calmFactor;

      const mAge = (now - mouse.t) / 1000;
      const pos = geometry.attributes.position as THREE.BufferAttribute;

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const idx = (r * COLS + c) * 3;
          const bx = basePositions[idx];
          const by = basePositions[idx + 1];
          const phi = phaseOffsets[r * COLS + c];

          // Two-axis wave with per-point phase variation — more organic
          const wave =
            Math.sin(c * 0.38 + r * 0.22 + t * 0.45 + phi) * amp * 0.7 +
            Math.sin(c * 0.15 - r * 0.35 + t * 0.28 + phi * 0.5) * amp * 0.4;

          // cursor ripple — wider radius, more pull
          const dx = bx - mouse.x;
          const dy = by - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ripple =
            dist < 0.45 && mAge < 2.5
              ? (1 - dist / 0.45) * (1 - mAge / 2.5) * 0.07
              : 0;

          // X axis also ripples slightly (adds a swirl feel)
          const rippleX =
            dist < 0.45 && mAge < 2.5
              ? (dy / (dist + 0.001)) * (1 - dist / 0.45) * (1 - mAge / 2.5) * 0.012
              : 0;

          pos.array[idx]     = bx + rippleX;
          pos.array[idx + 1] = by + wave + ripple;
        }
      }
      pos.needsUpdate = true;

      // Point size: more dynamic range with velocity
      material.size = Math.max(1.2, (isMobileScreen ? 2.0 : 2.5) + smoothVel * 0.05);
      // Opacity also pulses slightly with velocity
      material.opacity = dark
        ? Math.min(0.22, 0.10 + smoothVel * 0.003)
        : Math.min(0.16, 0.065 + smoothVel * 0.002);

      // Re-sync colour if theme changed
      material.color.set(getColor());

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", onMouse);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dark]); // Only reinitialise if dark mode toggles

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ThreeWaveField;
