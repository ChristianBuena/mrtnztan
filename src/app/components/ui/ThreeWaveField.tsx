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

    // ── point grid ────────────────────────────────────────────────────────────
    const COLS = 50;
    const ROWS = 30;
    const COUNT = COLS * ROWS;

    const positions = new Float32Array(COUNT * 3);
    const basePositions = new Float32Array(COUNT * 3);

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
      size: 2,
      sizeAttenuation: false,
      transparent: true,
      opacity: dark ? 0.07 : 0.048,
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

    // ── resize ────────────────────────────────────────────────────────────────
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
        window.removeEventListener("mousemove", onMouse);
      };
    }

    // ── animation loop ────────────────────────────────────────────────────────
    let rafId = 0;
    const t0 = performance.now();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const now = performance.now();
      const t = (now - t0) / 1000;
      const { scrollVelocity: vel, scrollProgress: sp } = stateRef.current;

      // Scroll velocity → amplitude boost (capped), calms near contact
      const velAmp = Math.min(vel * 0.004, 0.06);
      // Contact section: amplitude settles towards 0 when totalProgress → 1
      const calmFactor = sp > 0.85 ? 1 - ((sp - 0.85) / 0.15) : 1;
      const baseAmp = 0.018 * calmFactor;
      const amp = (baseAmp + velAmp) * calmFactor;

      const mAge = (now - mouse.t) / 1000;
      const pos = geometry.attributes.position as THREE.BufferAttribute;

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const idx = (r * COLS + c) * 3;
          const bx = basePositions[idx];
          const by = basePositions[idx + 1];

          // sine wave offset
          const wave = Math.sin(c * 0.4 + r * 0.4 + t * 0.38) * amp;

          // cursor ripple
          const dx = bx - mouse.x;
          const dy = by - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ripple =
            dist < 0.3 && mAge < 2
              ? (1 - dist / 0.3) * (1 - mAge / 2) * 0.04
              : 0;

          pos.array[idx + 1] = by + wave + ripple;
        }
      }
      pos.needsUpdate = true;

      // Point size: subtly scales with velocity
      material.size = Math.max(1.5, 2 + vel * 0.03);
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
