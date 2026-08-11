import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, Download, Play, X, Mail, Github, Linkedin, ChevronLeft, ChevronRight, Terminal, RefreshCw } from "lucide-react";
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "motion/react";
import * as Dialog from "@radix-ui/react-dialog";
import _historyData from "../data/history.json";
import projectsData from "../data/projects.json";
import certificatesData from "../data/certificates.json";
import { useScrollProgress } from "../hooks/useScrollProgress";
import ThreeWaveField from "./components/ui/ThreeWaveField";
import MagneticCursor from "./components/ui/MagneticCursor";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";
import SplitHeading from "./components/ui/SplitHeading";
import FadeProfileImage from "./components/ui/FadeProfileImage";

const THEMES = [
  // 1-6 Neutrals & Professional
  { bg: "#FFFFFF", fg: "#212121", accent: "#0066FF", name: "Professional Blue" },
  { bg: "#F5F5F5", fg: "#1A1A1A", accent: "#FF3B30", name: "Minimal Crimson" },
  { bg: "#FAFAFA", fg: "#2C2C2C", accent: "#00A896", name: "Clean Teal" },
  { bg: "#EAEAEA", fg: "#121212", accent: "#D90429", name: "Nordic Red" },
  { bg: "#F0F0F0", fg: "#333333", accent: "#7209B7", name: "Deep Indigo" },
  { bg: "#FFFFFF", fg: "#0A0A0A", accent: "#FFB800", name: "Monochrome Amber" },

  // 7-12 Dark Mode
  { bg: "#121212", fg: "#E0E0E0", accent: "#BB86FC", name: "Neon Lavender" },
  { bg: "#1E1E2E", fg: "#CDD6F4", accent: "#F38BA8", name: "Catppuccin Rose" },
  { bg: "#0F0F1B", fg: "#F0F0F0", accent: "#39FF14", name: "Matrix Lime" },
  { bg: "#1A1A2E", fg: "#EAEAEA", accent: "#E94560", name: "Midnight Rose" },
  { bg: "#0D1117", fg: "#C9D1D9", accent: "#58A6FF", name: "Github Marine" },
  { bg: "#181818", fg: "#F5F5F5", accent: "#FFD60A", name: "Contrast Yellow" },

  // 13-18 Earthy / Warm
  { bg: "#FFF8F0", fg: "#432818", accent: "#BB4430", name: "Sienna Warmth" },
  { bg: "#F4F1DE", fg: "#3D405B", accent: "#81B29A", name: "Desert Sage" },
  { bg: "#FAF3E0", fg: "#4A4E69", accent: "#C9ADA7", name: "Tuscan Sunset" },
  { bg: "#F5E6CA", fg: "#2C3639", accent: "#A27B5C", name: "Warm Walnut" },
  { bg: "#FCF6E3", fg: "#3A3A3A", accent: "#D68C45", name: "Solarized Light" },
  { bg: "#EDE0D4", fg: "#463F3A", accent: "#BC6C25", name: "Almond Ochre" },

  // 19-23 Cool / Corporate
  { bg: "#F7F9FB", fg: "#1B1F3B", accent: "#4361EE", name: "Ice Blue" },
  { bg: "#EEF1F5", fg: "#2B2D42", accent: "#8D99AE", name: "Corporate Steel" },
  { bg: "#F0F4F8", fg: "#03045E", accent: "#0077B6", name: "Oceanic Navy" },
  { bg: "#E8EEF1", fg: "#14213D", accent: "#FCA311", name: "Slate Gold" },
  { bg: "#F5F7FA", fg: "#1E293B", accent: "#3B82F6", name: "Clean Office" },

  // 24-28 Vibrant / Modern
  { bg: "#FFFFFF", fg: "#1A1A1A", accent: "#FF5A5F", name: "Radical Red" },
  { bg: "#F9F9F9", fg: "#232323", accent: "#6C5CE7", name: "Modern Purple" },
  { bg: "#FFFFFF", fg: "#111111", accent: "#00D9FF", name: "Electric Cyan" },
  { bg: "#F2F2F2", fg: "#212529", accent: "#FF006E", name: "Neon Magenta" },
  { bg: "#FDFDFD", fg: "#1D1D1D", accent: "#8338EC", name: "Royal Purple" },

  // 29-32 Pastel / Soft
  { bg: "#FDF0F4", fg: "#4A4A4A", accent: "#F8A5C2", name: "Blush Pink" },
  { bg: "#F0F7F4", fg: "#2F3E46", accent: "#84A98C", name: "Sage Mint" },
  { bg: "#FBF3F9", fg: "#3A3335", accent: "#B8A1CC", name: "Lilac Mist" },
  { bg: "#EFF6F5", fg: "#264653", accent: "#2A9D8F", name: "Soft Teal" },

  // 33-35 Tech / Cyber
  { bg: "#0D1B2A", fg: "#E0E1DD", accent: "#00F5D4", name: "Cyber Teal" },
  { bg: "#0A0E27", fg: "#E6E6FA", accent: "#FF3864", name: "Retro Cyberpunk" },
  { bg: "#0F0F0F", fg: "#EDEDED", accent: "#00FFAB", name: "Green Terminal" }
];

interface JobRef {
  id: string;
  label: string;
}

interface JobData {
  id: string;
  year: string;
  role: string;
  comp: string;
  type: string;
  desc: string;
  refs: JobRef[];
  img?: string;
}

const historyData = _historyData as JobData[];

// ── sprite parser ─────────────────────────────────────────────────────────────
// Converts a multiline grid of '.' and '#' into a flat 64-element pixel array
const sp = (s: string): number[] =>
  s
    .trim()
    .split("\n")
    .flatMap((row) =>
      row
        .trim()
        .split(/\s+/)
        .map((c) => (c === "#" ? 1 : 0))
    );

const SPRITES: Record<string, number[][]> = {
  "001": [
    sp(`
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
      # # . . . # # .
      . . . . . . . .
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
    `),
    sp(`
      . . . # . . . .
      . . . # . . . .
      . . . # . . . .
      # # . # . # # .
      . . . # . . . .
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
    `),
    sp(`
      . . . . . . . .
      . . . # . . . .
      . . . # . . . .
      # # # # # # # .
      . . . # . . . .
      . . . # . . . .
      . . . . . . . .
      . . . . . . . .
    `),
  ],
  "002": [
    sp(`
      . # # # # # . .
      . # . . . # . .
      . # # # # # . .
      . # . . . . . .
      . # . . . . . .
      . # # # . . . .
      . . . . . . . .
      . . . . . . . .
    `),
    sp(`
      . # # # # # . .
      . # . . . # . .
      . # # # # . . .
      . # . . . . . .
      . # . . . . . .
      . # # # # . . .
      . . . . . . . .
      . . . . . . . .
    `),
  ],
  "003": [
    sp(`
      . . # # . . . .
      . # # . . . . .
      # # . . . . . .
      # # . . . . . .
      . # # # . . . .
      . . . # # . . .
      . . . . # # . .
      . . . . . # # .
    `),
    sp(`
      . . # # . . . .
      . # # . . . . .
      # # . . . . . .
      # # . # . . . .
      . # # # . . . .
      . . . # # . . .
      . . . . # # . .
      . . . . . # . .
    `),
  ],
  "005": [
    sp(`
      . . # # # . . .
      . . . # . . . .
      . . . # . . . .
      . . # # # . . .
      . # . . . # . .
      # # # # # # # .
      . # # # # # . .
      . . . . . . . .
    `),
    sp(`
      . . # # # . . .
      . . . # . . . .
      . . . # . . . .
      . . # # # . . .
      . # # . . # . .
      # # # # # # # .
      . # # # # # . .
      . . . . . . . .
    `),
    sp(`
      . . # # # . . .
      . . . # . . . .
      . . . # . . . .
      . . # # # . . .
      . # . . # # . .
      # # # # # # # .
      . # # # # # . .
      . . . . . . . .
    `),
  ],
  "007": [
    sp(`
      . . # # # . . .
      . # . . . # . .
      # . . # . . # .
      # . . # . . # .
      # . . . . . # .
      . # . . . # . .
      . . # # # . . .
      . . . . . . . .
    `),
    sp(`
      . . # # # . . .
      . # . . . # . .
      # . . . # . # .
      # . . . # . # .
      # . . . . . # .
      . # . . . # . .
      . . # # # . . .
      . . . . . . . .
    `),
    sp(`
      . . # # # . . .
      . # . . . # . .
      # . # . . . # .
      # . # . . . # .
      # . . . . . # .
      . # . . . # . .
      . . # # # . . .
      . . . . . . . .
    `),
  ],
  "009": [
    sp(`
      # # # # # # # .
      # # . . . # # .
      # . # . # . # .
      # . . # . . # .
      # . . . . . # .
      # # # # # # # .
      . . . . . . . .
      . . . . . . . .
    `),
    sp(`
      # # # # # # # .
      # # . . . # # .
      # . # . # . # .
      # . . # . . # .
      # . . # . . # .
      # # # # # # # .
      . . . . . . . .
      . . . . . . . .
    `),
  ],
};

// ── dither SVG filter — 4-level ordered dither ────────────────────────────────
const DitherFilter = () => (
  <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
    <defs>
      <filter id="dither" colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values="0" result="gray" />
        <feComponentTransfer in="gray">
          <feFuncR type="discrete" tableValues="0 0.33 0.66 1" />
          <feFuncG type="discrete" tableValues="0 0.33 0.66 1" />
          <feFuncB type="discrete" tableValues="0 0.33 0.66 1" />
        </feComponentTransfer>
      </filter>
    </defs>
  </svg>
);

// ── dotted wave field (canvas, sine ripple, cursor response) ──────────────────
const DottedWaveField: React.FC<{ dark?: boolean; themeIdx?: number }> = ({ dark = false, themeIdx = 0 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999, t: 0 });
  const inViewRef = useRef(true);
  const reduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 24;

    // Retrieve custom properties computed dynamically from text color context
    const computedColor = window.getComputedStyle(canvas).color;
    const rgbMatch = computedColor.match(/\d+/g);
    const rgb = rgbMatch ? rgbMatch.slice(0, 3).join(",") : (dark ? "255,255,255" : "0,0,0");

    const baseOp = dark ? 0.07 : 0.048;
    const t0 = performance.now();
    let lastDraw = 0;

    const sync = () => {
      if (canvas.offsetWidth > 0) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    sync();

    const ro = new ResizeObserver(sync);
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([e]) => { inViewRef.current = e.isIntersecting; },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now() };
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const drawFrame = (now: number) => {
      rafRef.current = requestAnimationFrame(drawFrame);
      if (!inViewRef.current || now - lastDraw < 33) return;
      lastDraw = now;

      const W = canvas.width;
      const H = canvas.height;
      if (W === 0 || H === 0) return;
      ctx.clearRect(0, 0, W, H);

      const t = (now - t0) / 1000;
      const cols = Math.ceil(W / SPACING) + 1;
      const rows = Math.ceil(H / SPACING) + 1;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mAge = (now - mouseRef.current.t) / 1000;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING;
          const y = r * SPACING;
          const wave = Math.sin(c * 0.3 + r * 0.3 + t * 0.38) * 0.022;
          const dist = Math.hypot(x - mx, y - my);
          const ripple =
            dist < 88 && mAge < 2 ? (1 - dist / 88) * (1 - mAge / 2) * 0.09 : 0;
          const op = Math.max(0, Math.min(0.22, baseOp + wave + ripple));
          const rad = 1 + ripple * 2;
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.5, rad), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb},${op.toFixed(3)})`;
          ctx.fill();
        }
      }
    };

    if (reduced) {
      // Single static pass — no animation
      sync();
      const W = canvas.width;
      const H = canvas.height;
      if (W > 0 && H > 0) {
        const cols = Math.ceil(W / SPACING) + 1;
        const rows = Math.ceil(H / SPACING) + 1;
        for (let r = 0; r < rows; r++)
          for (let c = 0; c < cols; c++) {
            ctx.beginPath();
            ctx.arc(c * SPACING, r * SPACING, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgb},${baseOp})`;
            ctx.fill();
          }
      }
    } else {
      rafRef.current = requestAnimationFrame(drawFrame);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", onMouse);
    };
  }, [dark, reduced, themeIdx]);

  return (
    <canvas
      ref={canvasRef}
      className="block absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

// ── pixel sprite field mark ───────────────────────────────────────────────────
const FieldMark: React.FC<{ sectionId?: string; externalFrame?: number }> = ({ sectionId = "001", externalFrame }) => {
  const frames = SPRITES[sectionId] ?? SPRITES["001"];
  const [timerFrame, setTimerFrame] = useState(0);

  // Only run the timer when no external scroll-driven frame is provided
  useEffect(() => {
    if (externalFrame !== undefined) return;
    const id = setInterval(() => setTimerFrame((f) => (f + 1) % frames.length), 900);
    return () => clearInterval(id);
  }, [frames.length, externalFrame]);

  const frame = externalFrame !== undefined
    ? Math.min(externalFrame, frames.length - 1)
    : timerFrame;

  return (
    <div
      className="flex flex-col items-center gap-1 opacity-40 hover:opacity-75 transition-opacity duration-500 cursor-default shrink-0"
      aria-hidden="true"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 3px)",
          gap: "1px",
        }}
      >
        {frames[frame].map((on, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: 3,
              backgroundColor: on ? "currentColor" : "transparent",
            }}
          />
        ))}
      </div>
      <span className="font-pixel text-[8px] tracking-widest text-muted-foreground leading-none">
        FM/{sectionId}
      </span>
    </div>
  );
};

// ── scroll-reveal wrapper (IntersectionObserver + CSS transition) ──────────────
const reduced =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}> = ({ children, delay = 0, className = "", direction = "up", distance = 40 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(reduced);

  const getHidden = () => {
    if (reduced) return {};
    switch (direction) {
      case "down": return { opacity: 0, transform: `translateY(-${distance}px)` };
      case "left": return { opacity: 0, transform: `translateX(${distance}px)` };
      case "right": return { opacity: 0, transform: `translateX(-${distance}px)` };
      default: return { opacity: 0, transform: `translateY(${distance}px)` };
    }
  };

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    // Fire immediately if already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.98) {
      setVis(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVis(true); obs.disconnect(); }
      },
      { threshold: 0.04, rootMargin: "0px 0px -8px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const hidden = getHidden();

  return (
    <div
      ref={ref}
      style={{
        opacity: reduced ? 1 : vis ? 1 : hidden.opacity,
        transform: reduced ? "none" : vis ? "none" : hidden.transform,
        transition: reduced
          ? "none"
          : `opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms,
             transform 750ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: vis ? "auto" : "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

// ── ledger data ───────────────────────────────────────────────────────────────
const LEDGER: Record<string, { label: string; n: number }> = {
  "FIELD-NOTE/001": { label: "FIELD NOTE / 001", n: 1 },
  "RECORDS/002": { label: "RECORDS / 002", n: 2 },
  BUILT: { label: "BUILT / 003", n: 3 },
  LAB: { label: "LAB / 005", n: 5 },
  "FIELD-HISTORY": { label: "FIELD HISTORY / 007", n: 7 },
  CONTACT: { label: "CONTACT / 009", n: 9 },
};
const SECTION_IDS = Object.keys(LEDGER);
const TOTAL = 24;

// ── ledger component (fixed, odometer-style digit roll) ───────────────────────
const Ledger: React.FC<{
  active: string;
  themeIdx: number;
  setThemeIdx: React.Dispatch<React.SetStateAction<number>>;
}> = ({ active, themeIdx, setThemeIdx }) => {
  const cur = LEDGER[active] ?? LEDGER["FIELD-NOTE/001"];
  return (
    <>
      <aside className="fixed bottom-4 right-4 z-50 hidden md:flex items-end gap-2 pointer-events-none select-none">
        {/* Doodle Arrow pointing at the display button */}
        <div className="relative mb-1 pointer-events-none opacity-85">
          <svg width="150" height="55" viewBox="0 0 150 55" fill="none" className="text-accent">
            {/* Handwritten text */}
            <g transform="rotate(-6 45 20)">
              <text x="5" y="16" fill="currentColor" className="font-doodle text-[12px] font-bold tracking-wide">
                click this to
              </text>
              <text x="5" y="28" fill="currentColor" className="font-doodle text-[12px] font-bold tracking-wide">
                change color!
              </text>
            </g>
            {/* Curved loop-de-loop wobbly arrow from text to the right (pointing to the button) */}
            <path
              d="M 75,10 C 85,12 90,8 95,12 C 100,16 95,25 90,26 C 85,27 82,18 90,15 C 105,12 118,22 135,32"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Hand-drawn double arrowhead */}
            <path
              d="M 135,32 L 126,27 M 135,32 L 130,41 M 134,31 L 128,34"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="pointer-events-auto bg-background/90 backdrop-blur border border-border px-3 py-2.5 flex flex-col items-end gap-0.5 font-pixel text-[9px] tracking-widest uppercase shadow-md rounded-md">
          <span className="text-muted-foreground/60">LEDGER</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={cur.label}
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              exit={{ y: 5, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0, 0, 1] }}
              className="text-foreground font-bold"
            >
              {cur.label}
            </motion.span>
          </AnimatePresence>
          <span className="text-muted-foreground">
            <AnimatePresence mode="wait">
              <motion.span
                key={cur.n}
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 5, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.25, 0, 0, 1] }}
                className="inline-block tabular-nums"
              >
                {cur.n}
              </motion.span>
            </AnimatePresence>
            {` OF ${TOTAL} ENTRIES`}
          </span>
          <span className="text-muted-foreground/50 text-[8px] mb-2">LAST UPDATED — AUG 2026</span>

          {/* Dynamic theme selector relocated here */}
          <button
            onClick={() => setThemeIdx((t) => (t + 1) % THEMES.length)}
            className="w-full text-center border border-dashed border-accent hover:bg-accent hover:text-primary-foreground py-1.5 px-3 text-[9px] font-pixel text-accent transition-all duration-200 cursor-pointer rounded-sm bg-accent/5"
            title="Cycle display theme"
          >
            DISPLAY — {THEMES[themeIdx].name.toUpperCase()}
          </button>
        </div>
      </aside>

      {/* Mobile Floating Theme Control & Ledger Pill */}
      <div className="fixed bottom-4 right-4 z-50 flex md:hidden items-center gap-2 pointer-events-auto select-none">
        <button
          onClick={() => setThemeIdx((t) => (t + 1) % THEMES.length)}
          className="bg-background/95 backdrop-blur-md border border-accent/80 text-foreground px-3 py-2 text-[9px] font-pixel rounded-full shadow-lg flex items-center gap-2 active:scale-95 transition-transform"
          title="Cycle display theme"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
          <span className="text-accent font-bold uppercase tracking-wider max-w-[120px] truncate">
            {THEMES[themeIdx].name}
          </span>
          <span className="text-muted-foreground/80 font-mono text-[8px]">
            [{cur.n}/{TOTAL}]
          </span>
        </button>
      </div>
    </>
  );
};

// ── cross-reference link ──────────────────────────────────────────────────────
const Ref: React.FC<{ id: string; label: string; onClick: (id: string) => void }> = ({
  id, label, onClick,
}) => (
  <button
    onClick={() => onClick(id)}
    className="inline-flex items-center gap-1 border-b border-dashed border-muted-foreground/50 hover:border-accent hover:text-accent font-pixel text-[10px] transition-colors"
  >
    {label} <ArrowUpRight className="w-2.5 h-2.5" />
  </button>
);

// ── section transition marker ─────────────────────────────────────────────────
const Divider: React.FC<{ from: string; to: string }> = ({ from, to }) => (
  <div className="font-pixel text-[9px] tracking-widest text-muted-foreground/50 border-t border-border pt-3 flex items-center gap-2 uppercase">
    <span>{from}</span>
    <ArrowUpRight className="w-2.5 h-2.5 opacity-40" />
    <span className="text-foreground/60">{to}</span>
  </div>
);

// ── project data ──────────────────────────────────────────────────────────────
const PROJECTS = projectsData;

// ── app ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [hilite, setHilite] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("FIELD-NOTE/001");
  const [themeIdx, setThemeIdx] = useState(0);
  const [proj, setProj] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [resolving, setResolving] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  // Smoothed skew for scroll velocity feel
  const [skewDeg, setSkewDeg] = useState(0);
  const skewRef = useRef(0);

  // Scroll-driven & drag horizontal carousel offset for RECORDS
  const [certOffset, setCertOffset] = useState(0);
  const certTrackRef = useRef<HTMLDivElement>(null);
  const certContainerRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef(0);

  // LAB interactive simulation state
  const [simulatingId, setSimulatingId] = useState<string | null>(null);
  const [labLogs, setLabLogs] = useState<string[]>([
    "SYS_INIT: Telemetry engine online.",
    "EXP_014: Standard evaluation matrix active.",
  ]);

  const runLabSimulation = (id: string, name: string) => {
    setSimulatingId(id);
    setLabLogs((prev) => [
      `EXEC [${id}]: Running test pipeline for ${name}...`,
      `STREAM: Analyzing tensor confidence levels...`,
      ...prev.slice(0, 4),
    ]);
    setTimeout(() => {
      setLabLogs((prev) => [
        `STATUS [${id}]: Test completed. Confidence 99.4% [PASS].`,
        ...prev.slice(0, 4),
      ]);
      setSimulatingId(null);
    }, 1200);
  };

  const [containerWidth, setContainerWidth] = useState(1000);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
      if (certContainerRef.current) {
        setContainerWidth(certContainerRef.current.clientWidth);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // ── scroll-driven state ───────────────────────────────────────────────────
  const { scrollY, totalProgress, velocity, sectionProgress } = useScrollProgress();

  // Dynamically calculate max scroll bounds for certificates slider based on viewport container
  const cardWidth = isMobile ? 300 : 340;
  const cardGap = 32;
  const totalTrackWidth = certificatesData.length * cardWidth + Math.max(0, certificatesData.length - 1) * cardGap;
  const maxCertOffset = Math.max(0, totalTrackWidth - containerWidth);

  // Handle certificates horizontal scroll carousel — smooth, slow, and scoped strictly to section visibility
  useEffect(() => {
    const delta = scrollY - prevScrollY.current;
    prevScrollY.current = scrollY;

    if (!certContainerRef.current) return;
    const rect = certContainerRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const isVisible = rect.top < vh + 100 && rect.bottom > -100;

    if (isVisible && Math.abs(delta) > 0.1) {
      // Smooth, slow translation multiplier (0.35 instead of 0.95)
      setCertOffset((prev) => Math.max(-maxCertOffset, Math.min(0, prev - delta * 0.35)));
    }
  }, [scrollY, maxCertOffset]);

  const slideCerts = (direction: "left" | "right") => {
    const step = cardWidth + cardGap;
    if (direction === "right") {
      setCertOffset((prev) => Math.max(-maxCertOffset, prev - step));
    } else {
      setCertOffset((prev) => Math.min(0, prev + step));
    }
  };

  // Cross-reference: scroll to entry, flash highlight
  const jump = useCallback((id: string) => {
    setHilite(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => setHilite(null), 2400);
  }, []);

  // Section tracking for Ledger odometer
  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id); },
        { threshold: 0.2 }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  // Portrait parallax
  const onHeroMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (reduced || !heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    setParallax({
      x: ((e.clientX - r.left - r.width / 2) / r.width) * 6,
      y: ((e.clientY - r.top - r.height / 2) / r.height) * 6,
    });
  }, []);

  // Scroll skew: smoothly lerp skew driven by velocity
  useEffect(() => {
    if (reduced) return;
    const target = Math.min(velocity * 0.018, 1.2) * (scrollY > (skewRef.current || 0) ? -1 : 1);
    skewRef.current = scrollY;
    setSkewDeg((prev) => prev * 0.7 + target * 0.3);
  }, [velocity, scrollY]);

  // Project image "dither resolve" on switch
  const handleProjSelect = (i: number) => {
    setProj(i);
    if (!reduced) {
      setResolving(true);
      setTimeout(() => setResolving(false), 380);
    }
  };

  const p = (PROJECTS && PROJECTS[proj]) || {
    id: "",
    num: "",
    name: "",
    type: "",
    year: "",
    status: "",
    img: "",
    github: "",
    live: "",
    challenge: "",
    solution: "",
    stack: [] as { name: string; color?: string }[],
    origins: [] as { id: string; label: string }[],
  };

  const currentTheme = THEMES[themeIdx];

  // ── scroll-derived values (inline, reactive to scrollY / totalProgress) ──────
  // Hero portrait: dither intensifies as user scrolls away from hero
  const heroHeight = heroRef.current?.offsetHeight ?? 600;
  const heroDitherProgress = Math.min(1, scrollY / (heroHeight * 0.6));

  // FieldMark sprite frames driven by total page scroll
  // Each section's FieldMark uses its own SPRITES frames array length
  const fieldMarkScrollFrame = (sectionId: string): number => {
    const frames = SPRITES[sectionId] ?? SPRITES["001"];
    return Math.floor(totalProgress * (frames.length * 3)) % frames.length;
  };

  // Field History timeline: draw line as section scrolls into view
  const historyProgress = sectionProgress("FIELD-HISTORY");

  // Contact text: scrub in from 0.85 total progress
  const contactTextProgress = Math.min(1, Math.max(0, (totalProgress - 0.82) / 0.18));

  // Records section progress for card rotate-in
  const recordsProgress = sectionProgress("RECORDS/002");

  return (
    <div
      className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        .font-doodle {
          font-family: 'Caveat', cursive;
        }
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
        :root {
          --background: ${currentTheme.bg} !important;
          --foreground: ${currentTheme.fg} !important;
          --accent: ${currentTheme.accent} !important;
          --primary: ${currentTheme.fg} !important;
          --primary-foreground: ${currentTheme.bg} !important;
          --border: ${currentTheme.fg}24 !important;
          --muted-foreground: ${currentTheme.fg}80 !important;
          --muted: ${currentTheme.fg}0a !important;
        }
        .dark {
          --background: ${currentTheme.fg} !important;
          --foreground: ${currentTheme.bg} !important;
          --accent: ${currentTheme.accent} !important;
          --primary: ${currentTheme.bg} !important;
          --primary-foreground: ${currentTheme.fg} !important;
          --border: ${currentTheme.bg}24 !important;
          --muted-foreground: ${currentTheme.bg}80 !important;
          --muted: ${currentTheme.bg}0a !important;
        }
        /* Film grain overlay */
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10%       { transform: translate(-2%, -3%); }
          20%       { transform: translate(3%, 2%); }
          30%       { transform: translate(-1%, 4%); }
          40%       { transform: translate(4%, -1%); }
          50%       { transform: translate(-3%, 1%); }
          60%       { transform: translate(2%, -4%); }
          70%       { transform: translate(-4%, 2%); }
          80%       { transform: translate(1%, -2%); }
          90%       { transform: translate(-2%, 3%); }
        }
        .grain-overlay::before {
          content: '';
          position: fixed;
          inset: -50%;
          width: 200%;
          height: 200%;
          pointer-events: none;
          z-index: 9990;
          opacity: 0.028;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          animation: grain 0.18s steps(1) infinite;
        }
      `}</style>
      <DitherFilter />

      {/* ── Global overlays ────────────────────────────────────────────────── */}
      <MagneticCursor />
      <ScrollProgressBar progress={totalProgress} accentColor={currentTheme.accent} />

      {/* Grain texture layer */}
      <div className="grain-overlay fixed inset-0 pointer-events-none z-[9989]" aria-hidden="true" />

      <Ledger active={activeSection} themeIdx={themeIdx} setThemeIdx={setThemeIdx} />

      <main
        className="flex flex-col w-full overflow-x-hidden"
      >

        {/* quick view ─────────────────────────────────────────────────── */}
        <div className="max-w-6xl w-full mx-auto px-4 md:px-8 pt-16 md:pt-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div className="flex items-center gap-4">
                <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
                <span className="font-pixel text-[9px] tracking-widest text-muted-foreground uppercase hidden sm:inline-block">
                  [ QUICK VIEW ] — ROLE · STACK · BEST PROJECTS · RÉSUMÉ · CONTACT
                </span>
              </div>
              <a
                href="/resume.pdf" download="Resume.pdf"
                className="flex items-center gap-1.5 font-pixel text-[9px] text-muted-foreground hover:text-accent transition-colors uppercase whitespace-nowrap"
              >
                <Download className="w-3 h-3" /> RÉSUMÉ PDF
              </a>
            </div>
          </Reveal>
        </div>

        {/* hero ───────────────────────────────────────────────────────── */}
        <section className="w-full bg-background text-foreground py-8 md:py-16">
          <div
            ref={heroRef}
            id="FIELD-NOTE/001"
            className={`max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-start transition-all duration-500 ${hilite === "FIELD-NOTE/001" ? "outline outline-2 outline-accent outline-offset-8" : ""}`}
            onMouseMove={onHeroMove}
            onMouseLeave={() => setParallax({ x: 0, y: 0 })}
          >
            <div className="flex flex-col gap-8">
              <Reveal><FieldMark sectionId="001" externalFrame={fieldMarkScrollFrame("001")} /></Reveal>
              <div className="flex flex-col gap-4">
                <Reveal delay={60}>
                  <div className="inline-flex items-center bg-accent text-primary-foreground font-pixel text-[9px] tracking-widest px-2 py-0.5 uppercase rounded-sm font-bold shadow-sm">
                    [ FIELD NOTE / 001 ]
                  </div>
                </Reveal>
                <div style={{
                  opacity: 1,
                  transform: "none",
                  transition: "none",
                }}>
                  <SplitHeading
                    as="h1"
                    delay={140}
                    stagger={80}
                    className="text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tighter leading-none -ml-1 text-foreground"
                  >
                    TAN.
                  </SplitHeading>
                </div>
                <Reveal delay={220}>
                  <h2 className="text-xl md:text-2xl text-foreground font-bold tracking-tight uppercase mt-2">
                    Software Engineer & Game Developer
                  </h2>
                </Reveal>
                <Reveal delay={240}>
                  <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-md mt-2 font-medium">
                    I build high-performance digital products, scalable systems, and data-driven experiments to solve complex real-world problems.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={300}>
                <div className="font-pixel text-[9px] tracking-widest text-muted-foreground pt-5 border-t border-border">
                  PHILIPPINES — 2026 — SOFTWARE / WEB / SYSTEMS
                </div>
              </Reveal>
            </div>

            {/* portrait with fade transition & parallax layers */}
            <Reveal delay={100}>
              <div className="relative group cursor-crosshair">
                {/* subject layer — moves with cursor */}
                <div
                  style={{
                    transform: `translate(${parallax.x}px, ${parallax.y}px)`,
                    transition: reduced ? "none" : "transform 0.12s ease-out",
                  }}
                  className="relative aspect-[4/5]"
                >
                  <div className="absolute translate-x-3 translate-y-3 inset-0 bg-muted -z-10" />
                  <FadeProfileImage
                    heroDitherProgress={heroDitherProgress}
                    className="w-full h-full object-cover"
                  />

                  {/* Unique Doodle Arrow 1: Hero Profile Photo */}
                  <div className="hidden lg:flex items-center gap-1.5 text-accent font-doodle text-sm font-bold absolute -bottom-9 -left-12 pointer-events-none select-none z-30">
                    <svg width="55" height="35" viewBox="0 0 55 35" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M 5,30 Q 25,5 48,15" />
                      <path d="M 40,10 L 48,15 L 44,24" />
                    </svg>
                    <span>click photo to cycle!</span>
                  </div>
                </div>
                {/* frame overlay — counter-moves slightly for depth */}
                <div
                  className="absolute inset-0 border border-foreground/15 pointer-events-none"
                  style={{
                    transform: `translate(${-parallax.x * 0.45}px, ${-parallax.y * 0.45}px)`,
                    transition: reduced ? "none" : "transform 0.18s ease-out",
                  }}
                />
                {/* metadata + CTA */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="font-pixel text-[8px] tracking-widest flex flex-col gap-0.5 text-foreground bg-background/85 px-2 py-1">
                    <span className="opacity-55">PORTRAIT / 01</span>
                    <span className="opacity-55">SUBJECT: TAN</span>
                    <span className="opacity-40">FIELD: SOFTWARE DEV</span>
                  </div>
                  {/* Video Intro Modal */}
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button className="flex items-center gap-1.5 bg-foreground text-background px-3 py-1.5 font-pixel text-[8px] uppercase hover:bg-accent transition-colors cursor-pointer">
                        <Play className="w-2.5 h-2.5 fill-current" /> PLAY FIELD NOTE
                      </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-background/85 backdrop-blur-md z-50" />
                      <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-[92vw] max-w-2xl max-h-[90vh] overflow-y-auto translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-2xl rounded-lg">
                        <div className="flex justify-between items-center border-b border-border pb-3">
                          <div className="flex items-center gap-2 font-pixel text-[9px] text-accent tracking-widest uppercase font-bold">
                            <Play className="w-3 h-3 fill-accent" />
                            <span>[ FIELD NOTE / VIDEO INTRODUCTION ]</span>
                          </div>
                          <Dialog.Close className="rounded-sm opacity-70 hover:opacity-100 transition-opacity">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                          </Dialog.Close>
                        </div>

                        {/* Video Player Placeholder */}
                        <div className="relative aspect-video bg-neutral-900 rounded-md overflow-hidden border border-border group flex items-center justify-center">
                          <video
                            controls
                            poster="/profile1.png"
                            className="w-full h-full object-cover"
                          >
                            <source src="/video-intro.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>

                          {/* Interactive overlay instructions for attaching video */}
                          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center text-white pointer-events-none group-hover:bg-black/40 transition-all">
                            <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                              <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                            </div>
                            <p className="font-pixel text-[10px] tracking-widest uppercase font-bold text-white mb-1">
                              VIDEO INTRO PLACEHOLDER
                            </p>
                            <p className="text-xs text-neutral-300 max-w-md">
                              To attach your introduction video, place your video file at <code className="bg-neutral-800 text-accent px-1.5 py-0.5 rounded text-[11px]">public/video-intro.mp4</code>.
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center font-pixel text-[9px] text-muted-foreground pt-2">
                          <span>STATUS: READY FOR VIDEO ATTACHMENT</span>
                          <span>FORMAT: MP4 / WEBM</span>
                        </div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="max-w-6xl w-full mx-auto px-4 md:px-8 pb-10">
          <Divider from="FIELD NOTE / 001" to="RECORDS / 002" />
        </div>

        {/* records ────────────────────────────────────────────────────── */}
        <section className="w-full dark bg-background text-foreground py-16 md:py-24 overflow-hidden">
          <div id="RECORDS/002" className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <FieldMark sectionId="002" externalFrame={fieldMarkScrollFrame("002")} />
                <SplitHeading
                  as="h2"
                  delay={0}
                  stagger={60}
                  className="text-5xl md:text-6xl font-pixel tracking-widest uppercase"
                >
                  RECORDS
                </SplitHeading>
              </div>
              {/* Interactive Carousel Controls */}
              <div className="flex items-center gap-3">
                {/* Unique Doodle Arrow 2: Records Slider */}
                <div className="hidden sm:flex items-center gap-1.5 text-accent font-doodle text-sm font-bold pointer-events-none select-none mr-2">
                  <span>swipe or drag cards!</span>
                  <svg width="45" height="28" viewBox="0 0 45 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M 5,14 Q 22,2 38,14" />
                    <path d="M 30,10 L 38,14 L 34,22" />
                  </svg>
                </div>
                <button
                  onClick={() => slideCerts("left")}
                  disabled={certOffset >= 0}
                  className="p-2 border border-border hover:border-accent hover:text-accent disabled:opacity-30 transition-colors rounded-sm"
                  title="Slide left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => slideCerts("right")}
                  disabled={Math.abs(certOffset) >= maxCertOffset}
                  className="p-2 border border-border hover:border-accent hover:text-accent disabled:opacity-30 transition-colors rounded-sm"
                  title="Slide right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Draggable & Scroll-driven Carousel Track */}
            <div ref={certContainerRef} className="w-full overflow-hidden pt-2 pb-6 cursor-grab active:cursor-grabbing">
              <motion.div
                ref={certTrackRef}
                drag="x"
                dragConstraints={{ left: -maxCertOffset, right: 0 }}
                dragElastic={0.1}
                className="flex gap-8 w-max"
                animate={{ x: certOffset }}
                transition={{ type: "spring", stiffness: 200, damping: 26, mass: 0.5 }}
                onDragEnd={(_, info) => setCertOffset((prev) => Math.max(-maxCertOffset, Math.min(0, prev + info.offset.x)))}
              >
                {certificatesData.map((cert: any, i: number) => {
                  const num = cert.n || String(i + 1).padStart(2, "0");
                  const name = cert.name || "CERTIFICATE";
                  const issuer = cert.issuer || "ISSUER";
                  const year = cert.year || "2026";
                  const desc = cert.desc || "Verified certificate record.";
                  const img = cert.img || `https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80&sig=${cert.sig || i + 1}`;

                  return (
                    <div key={num || i} className="w-[300px] sm:w-[340px] shrink-0 select-none">
                      <Dialog.Root>
                        <Dialog.Trigger asChild>
                          <div className="flex flex-col gap-3 group cursor-pointer border border-border/60 bg-muted/10 p-4 rounded-md hover:border-accent transition-all duration-300">
                            <div className="font-pixel text-[9px] text-muted-foreground flex justify-between items-center">
                              <span>[{num}]</span>
                              <span className="text-[8px] text-accent font-bold tracking-widest uppercase">DRAG / CLICK</span>
                            </div>
                            <div className="relative aspect-video border border-border bg-muted overflow-hidden rounded-sm">
                              <img
                                src={img}
                                alt={name}
                                draggable={false}
                                className="w-full h-full object-cover grayscale opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none"
                              />
                            </div>
                            <div>
                              <div className="font-medium text-sm leading-snug group-hover:text-accent transition-colors">{name}</div>
                              <div className="font-pixel text-[9px] text-muted-foreground mt-1">
                                ISSUED BY — {issuer}
                              </div>
                              <div className="flex items-center gap-2 font-pixel text-[9px] mt-2">
                                <span>{year}</span>
                                <span className="border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold">VERIFIED</span>
                              </div>
                            </div>
                          </div>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50" />
                          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-[90vw] max-w-lg max-h-[90vh] overflow-y-auto translate-x-[-50%] translate-y-[-50%] gap-6 border border-border bg-background p-6 shadow-xl rounded-md">
                            <div className="relative aspect-video border border-border bg-muted overflow-hidden rounded-sm">
                              <img
                                src={img}
                                alt={name}
                                className="w-full h-full object-cover grayscale"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <Dialog.Title className="text-lg font-medium tracking-tight">
                                {name}
                              </Dialog.Title>
                              <Dialog.Description className="text-sm text-foreground/75 leading-relaxed">
                                {desc}
                              </Dialog.Description>
                              <div className="flex items-center gap-4 mt-2 font-pixel text-[9px] text-muted-foreground">
                                <span>ISSUER: {issuer}</span>
                                <span>YEAR: {year}</span>
                                <span className="border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold">STATUS: VERIFIED</span>
                              </div>
                            </div>
                            <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity">
                              <X className="h-4 w-4" />
                              <span className="sr-only">Close</span>
                            </Dialog.Close>
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl w-full mx-auto px-4 md:px-8 py-10">
          <Divider from="ARCHIVE ENTRY / 003" to="BUILT" />
        </div>

        {/* built (PROJECTS) ──────────────────────────────────────────── */}
        <section className="w-full bg-background text-foreground py-16 md:py-24 overflow-hidden">
          <Reveal direction="left" distance={90} delay={60}>
            <div id="BUILT" className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10 relative">
              {/* Three.js wave field — amplitude driven by scroll velocity */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <ThreeWaveField themeIdx={themeIdx} scrollVelocity={velocity} scrollProgress={totalProgress} />
              </div>

              <div className="relative flex flex-row-reverse items-start gap-4 text-right border-b border-border pb-8 mb-8">
                <FieldMark sectionId="003" externalFrame={fieldMarkScrollFrame("003")} />
                <div className="flex-1">
                  <SplitHeading
                    as="h2"
                    delay={0}
                    stagger={55}
                    className="text-5xl md:text-6xl font-medium tracking-tight"
                  >
                    BUILT / SELECTED WORK
                  </SplitHeading>
                  <Reveal delay={280}>
                    <p className="text-muted-foreground text-sm mt-1">
                      "Things that started as problems, ideas, or experiments and became software."
                    </p>
                  </Reveal>
                </div>
              </div>

              <div className="relative grid md:grid-cols-[160px_1fr] gap-8 border-t border-border pt-8">
                {/* index list */}
                <div className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 relative">
                  {/* Unique Doodle Arrow 3: Projects Index List */}
                  <div className="hidden md:flex items-center gap-1 text-accent font-doodle text-xs font-bold mb-1 pointer-events-none select-none">
                    <span>select project to view!</span>
                    <svg width="35" height="20" viewBox="0 0 35 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M 4,14 Q 18,2 28,12" />
                      <path d="M 22,8 L 28,12 L 24,18" />
                    </svg>
                  </div>
                  <div className="font-pixel text-[8px] text-muted-foreground mb-2 hidden md:block tracking-widest">
                    INDEX
                  </div>
                  {PROJECTS.map((pr, i) => (
                    <Reveal key={pr.id} delay={i * 50}>
                      <button
                        onClick={() => handleProjSelect(i)}
                        className={`font-pixel text-[11px] whitespace-nowrap text-left py-0.5 w-full flex items-center gap-2 hover:text-foreground transition-colors ${i === proj ? "text-foreground" : "text-muted-foreground"
                          }`}
                      >
                        {String(i + 1).padStart(2, "0")} {pr.name}
                        {i === proj && (
                          <span className="text-accent text-[8px]">← selected</span>
                        )}
                      </button>
                    </Reveal>
                  ))}
                </div>

                {/* detail panel */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={proj}
                    id={p.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: [0.25, 0, 0, 1] }}
                    className={`flex flex-col gap-7 transition-all duration-300 ${hilite === p.id ? "outline outline-2 outline-accent outline-offset-4" : ""
                      }`}
                  >
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-pixel text-[9px] text-muted-foreground mb-4 hover:text-foreground transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{p.github.replace(/^https?:\/\/(www\.)?github\.com\//, "").replace(/\/$/, "")}</span>
                        <span className="border border-border rounded-full px-2 py-0.5 text-[8px]">Public</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 font-pixel text-[9px] text-muted-foreground mb-4">
                        <Github className="w-3.5 h-3.5" />
                        <span>mrtnztan / {p.name.toLowerCase().replace(/\s+/g, '-')}</span>
                        <span className="border border-border rounded-full px-2 py-0.5 text-[8px]">Public</span>
                      </div>
                    )}

                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left: Main Content (Image & README) */}
                      <div className="flex-1 min-w-0 flex flex-col gap-6">
                        {/* Image Viewer */}
                        <div className="border border-border rounded-md overflow-hidden bg-background">
                          <div className="bg-muted/30 border-b border-border px-4 py-2.5 flex items-center gap-2 font-pixel text-[9px] text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                            <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                            <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                            <span className="ml-2 font-mono text-[10px] lowercase">{p.name.replace(/\s+/g, '-')}.png</span>
                          </div>
                          <div className="relative aspect-video bg-muted overflow-hidden group cursor-crosshair">
                            <img
                              src={p.img}
                              alt={p.name}
                              className={`w-full h-full object-cover grayscale opacity-90 transition-all duration-500 ${resolving ? "[filter:url(#dither)]" : "group-hover:[filter:url(#dither)]"
                                }`}
                            />
                          </div>
                        </div>

                        {/* README equivalent */}
                        <div className="border border-border rounded-md bg-background">
                          <div className="bg-muted/30 border-b border-border px-4 py-2.5">
                            <span className="font-pixel text-[9px] font-medium uppercase tracking-widest text-foreground">README.md</span>
                          </div>
                          <div className="p-6 md:p-8">
                            <h1 className="text-2xl font-medium mb-4 pb-2 border-b border-border">{p.name}</h1>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                              {p.type} built in {p.year}.
                            </p>

                            {p.challenge && (
                              <div className="space-y-6">
                                <div>
                                  <h2 className="text-sm font-medium mb-2">Challenge</h2>
                                  <p className="text-sm text-foreground/80 leading-relaxed">
                                    {p.challenge}
                                  </p>
                                </div>
                                {p.solution && (
                                  <div>
                                    <h2 className="text-sm font-medium mb-2">Solution</h2>
                                    <p className="text-sm text-foreground/80 leading-relaxed">
                                      {p.solution}
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right: Overview Sidebar */}
                      <div className="w-full lg:w-[250px] shrink-0 flex flex-col gap-6">
                        <div>
                          <h3 className="font-medium text-sm mb-3">About</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {p.type} — {p.year}
                          </p>

                          <div className="flex items-center gap-2 font-pixel text-[9px] mb-6">
                            <span className="border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold shadow-sm">
                              STATUS: {p.status}
                            </span>
                          </div>

                          <div className="flex flex-col gap-2">
                            {p.github && (
                              <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-pixel text-[9px] border border-border px-3 py-2 hover:bg-foreground hover:text-background transition-colors flex items-center justify-between rounded-md"
                              >
                                <span>[ SOURCE ]</span> <ArrowUpRight className="w-3 h-3" />
                              </a>
                            )}
                            {p.live && (
                              <a
                                href={p.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-pixel text-[9px] border border-border px-3 py-2 hover:bg-foreground hover:text-background transition-colors flex items-center justify-between rounded-md"
                              >
                                <span>[ LIVE ]</span> <ArrowUpRight className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>

                        {p.stack && p.stack.length > 0 && (
                          <div className="border-t border-border pt-6">
                            <h3 className="font-medium text-sm mb-4">Role & Stack</h3>
                            <ul className="space-y-3 text-sm text-foreground/80">
                              {p.stack.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${item.color || "bg-accent"}`}></span>
                                  {item.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {p.origins && p.origins.length > 0 && (
                          <div className="border-t border-border pt-6">
                            <h3 className="font-medium text-sm mb-4">Origins</h3>
                            <div className="flex flex-col gap-2 items-start">
                              {p.origins.map((orig) => (
                                <Ref key={orig.id} id={orig.id} label={orig.label} onClick={jump} />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </section>

        <div className="max-w-6xl w-full mx-auto px-4 md:px-8 py-10">
          <Divider from="RECORD / 004" to="LAB" />
        </div>

        {/* lab ────────────────────────────────────────────────────────── */}
        <section className="w-full dark bg-background text-foreground py-16 md:py-24">
          <div id="LAB" className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4">
                <FieldMark sectionId="005" externalFrame={fieldMarkScrollFrame("005")} />
                <div>
                  <SplitHeading
                    as="h2"
                    delay={0}
                    stagger={65}
                    className="text-4xl md:text-5xl font-mono font-medium tracking-tight uppercase"
                  >
                    LAB / EXPERIMENTS
                  </SplitHeading>
                  <Reveal delay={320}>
                    <p className="font-mono text-sm opacity-70 mt-1">
                      "Interactive sandbox &amp; live diagnostic telemetry."
                    </p>
                  </Reveal>
                </div>
              </div>
              {/* Unique Doodle Arrow 4: Lab Simulation */}
              <div className="hidden sm:flex items-center gap-2">
                <div className="flex items-center gap-1 text-accent font-doodle text-sm font-bold pointer-events-none select-none mr-2">
                  <span>click to test simulation!</span>
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M 4,4 Q 20,20 32,12" />
                    <path d="M 25,10 L 32,12 L 30,4" />
                  </svg>
                </div>
                <div className="font-pixel text-[9px] border border-border px-3 py-1.5 rounded-sm text-accent bg-accent/5 hidden md:flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>LAB ENGINE ONLINE</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  id: "LAB/001", num: "001",
                  name: "ANTI-SMOKE BELCHING DETECTION",
                  cat: "COMPUTER VISION / IOT",
                  status: "RESEARCHING",
                  accent: true,
                  note: "Can low-cost edge AI flag high-emission vehicles on local roads in real-time?",
                  label: "Hypothesis",
                },
                {
                  id: "LAB/003", num: "003",
                  name: "LOCAL FIRST SCHEDULING",
                  cat: "CRDTs / OFFLINE ARCHITECTURE",
                  status: "PROTOTYPING",
                  accent: false,
                  note: "Exploring CRDT implementations for calendar events. Led directly to the architecture in BUILT / 001.",
                  label: "Concept",
                },
              ].map((lab, i) => (
                <Reveal key={lab.id} delay={i * 80}>
                  <div
                    id={lab.id}
                    className={`border border-border p-6 hover:border-accent transition-all duration-300 group rounded-md bg-muted/10 flex flex-col justify-between ${hilite === lab.id ? "border-accent bg-muted/30" : ""}`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="font-pixel text-[9px] text-muted-foreground">
                          LAB / {lab.num}
                        </div>
                        <div
                          className={`font-pixel text-[8px] px-2 py-0.5 border border-dashed rounded-sm ${lab.accent
                            ? "border-accent bg-accent/5 text-accent font-bold"
                            : "text-foreground/70 border-border"
                            }`}
                        >
                          STATUS: {simulatingId === lab.id ? "TESTING..." : lab.status}
                        </div>
                      </div>
                      <h3 className="text-lg font-medium mb-1 group-hover:text-accent transition-colors">
                        {lab.name}
                      </h3>
                      <p className="font-pixel text-[9px] text-muted-foreground mb-4">{lab.cat}</p>
                      <div className="text-sm border-t border-border pt-4 text-foreground/75 mb-6">
                        <span className="font-pixel text-[8px] text-muted-foreground uppercase mr-2">
                          {lab.label} —
                        </span>
                        {lab.note}
                      </div>
                    </div>

                    <button
                      onClick={() => runLabSimulation(lab.id, lab.name)}
                      disabled={simulatingId === lab.id}
                      className="w-full flex items-center justify-center gap-2 border border-border hover:bg-accent hover:text-primary-foreground py-2 font-pixel text-[9px] uppercase tracking-widest transition-all rounded-sm disabled:opacity-50"
                    >
                      <RefreshCw className={`w-3 h-3 ${simulatingId === lab.id ? "animate-spin text-accent" : ""}`} />
                      <span>{simulatingId === lab.id ? "RUNNING SIMULATION..." : "RUN TEST SIMULATION"}</span>
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Interactive Experiment Telemetry Terminal */}
            <Reveal delay={150}>
              <div className="border border-border bg-muted/20 p-6 rounded-md font-mono">
                <div className="font-pixel text-[8px] text-muted-foreground mb-4 tracking-widest flex items-center justify-between border-b border-border pb-3">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-accent" />
                    <span>EXPERIMENT LOG &amp; LIVE TELEMETRY</span>
                  </span>
                  <span className="text-accent">ID: EXP/014</span>
                </div>
                <div className="space-y-2 text-xs">
                  {labLogs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-accent select-none">&gt;</span>
                      <span className={idx === 0 ? "text-foreground font-semibold" : "text-muted-foreground"}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="max-w-6xl w-full mx-auto px-4 md:px-8 py-10">
          <Divider from="RECORD / 006" to="FIELD HISTORY" />
        </div>

        {/* field history (Interactive Magnetic Tech Cards) ────────────────── */}
        <section className="w-full bg-background text-foreground py-16 md:py-24">
          <div id="FIELD-HISTORY" className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center text-center gap-10">
            <div className="flex flex-col items-center gap-3">
              <FieldMark sectionId="007" externalFrame={fieldMarkScrollFrame("007")} />
              <SplitHeading
                as="h2"
                delay={0}
                stagger={70}
                className="text-5xl md:text-6xl font-medium tracking-tight uppercase"
              >
                FIELD HISTORY
              </SplitHeading>
              {/* Unique Doodle Arrow 5: Magnetic Draggable Cards */}
              <div className="hidden md:flex items-center gap-2 text-accent font-doodle text-base font-bold pointer-events-none select-none mt-1">
                <span>grab &amp; toss cards around!</span>
                <svg width="45" height="24" viewBox="0 0 45 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M 4,6 C 18,20 30,2 38,14" />
                  <path d="M 30,11 L 38,14 L 35,20" />
                </svg>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 w-full text-left">
              {historyData.map((job, i) => (
                <Reveal key={job.year} delay={i * 80}>
                  <motion.div
                    id={job.id}
                    drag={isMobile ? false : true}
                    dragElastic={0.15}
                    dragSnapToOrigin
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    whileDrag={{ scale: 1.06, cursor: "grabbing", zIndex: 50, boxShadow: "0 25px 35px rgba(0,0,0,0.3)" }}
                    transition={{ type: "spring", stiffness: 220, damping: 24 }}
                    className={`border border-border p-6 h-full flex flex-col gap-3 transition-all duration-300 hover:border-accent ${isMobile ? "cursor-default" : "cursor-grab active:cursor-grabbing"} bg-background rounded-md shadow-sm select-none ${hilite === job.id ? "border-accent bg-muted/20" : ""}`}
                  >
                    <div className="font-pixel text-[10px] tracking-widest text-muted-foreground flex justify-between items-center">
                      <span>{job.year}</span>
                      <span className="text-[8px] border border-border px-1.5 py-0.5 rounded-sm">MAGNETIC SLOT</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wide mb-1">
                        {job.role}
                      </h3>
                      <div className="font-pixel text-[8px] text-muted-foreground mb-3 border-b border-border/50 pb-3 flex items-center gap-2 flex-wrap">
                        <span>{job.comp}</span>
                        <span className="border border-dashed border-accent bg-accent/5 text-accent px-1.5 py-0.5 rounded-sm font-bold">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-foreground/80">{job.desc}</p>
                    </div>
                    {job.refs.length > 0 && (
                      <div className="mt-auto pt-4 flex items-center gap-2 flex-wrap border-t border-border/40">
                        <span className="font-pixel text-[8px] text-muted-foreground">
                          SEE ALSO —
                        </span>
                        {job.refs.map((r) => (
                          <Ref key={r.id} id={r.id} label={r.label} onClick={jump} />
                        ))}
                      </div>
                    )}
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* contact ── full-width dark section with Three.js wave field ───────── */}
      <section id="CONTACT" className="bg-primary text-primary-foreground relative overflow-hidden mt-10">
        <div className="absolute inset-0">
          <ThreeWaveField dark themeIdx={themeIdx} scrollVelocity={velocity} scrollProgress={totalProgress} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col items-start gap-6">
          <FieldMark sectionId="009" externalFrame={fieldMarkScrollFrame("009")} />
          <div>
            <div
              className="font-pixel text-[9px] tracking-widest mb-2"
              style={{
                opacity: reduced ? 0.4 : Math.max(0.08, contactTextProgress * 0.5),
                transform: reduced ? "none" : `translateY(${(1 - contactTextProgress) * 16}px)`,
                transition: reduced ? "none" : "opacity 0.06s, transform 0.06s",
              }}
            >
              CONTACT / 009
            </div>
            {/* Compact contact heading */}
            <div
              className="text-2xl md:text-4xl font-black tracking-tight leading-tight mb-2 overflow-hidden"
              style={{
                transform: reduced ? "none" : `translateY(${(1 - Math.min(1, contactTextProgress * 1.4)) * 30}px)`,
                opacity: reduced ? 1 : Math.min(1, contactTextProgress * 2),
                transition: reduced ? "none" : "transform 0.08s cubic-bezier(0.16,1,0.3,1), opacity 0.07s ease",
              }}
            >
              START A NEW FIELD NOTE.
            </div>
            <p
              className="text-xs md:text-sm text-primary-foreground/75"
              style={{
                opacity: reduced ? 0.55 : Math.max(0, (contactTextProgress - 0.45) * 1.2),
                transform: reduced ? "none" : `translateY(${(1 - Math.min(1, Math.max(0, (contactTextProgress - 0.45) / 0.55))) * 10}px)`,
                transition: reduced ? "none" : "opacity 0.06s, transform 0.06s",
              }}
            >"Have a problem worth exploring?"</p>
          </div>
          <div className="flex gap-4 mt-1">
            <a href="mailto:cmkbuena@gmail.com" target="_blank" rel="noreferrer" className="group flex items-center justify-center border-2 border-primary-foreground/30 w-12 h-12 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 rounded-md">
              <Mail className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://github.com/ChristianBuena" target="_blank" rel="noreferrer" className="group flex items-center justify-center border-2 border-primary-foreground/30 w-12 h-12 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 rounded-md">
              <Github className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://www.linkedin.com/in/mrtnztan/" target="_blank" rel="noreferrer" className="group flex items-center justify-center border-2 border-primary-foreground/30 w-12 h-12 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 rounded-md">
              <Linkedin className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </section>

      {/* footer ─────────────────────────────────────────────────────── */}
      <footer className="max-w-6xl mx-auto px-4 md:px-8 py-8 font-pixel text-[8px] text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border">
        <div className="flex items-center gap-3 tracking-widest uppercase">
          <img src="/logo.png" alt="Logo" className="h-4 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
          <span>TAN / FIELD NOTES — SOFTWARE DEVELOPER — PHILIPPINES — 2026</span>
        </div>
        <nav className="flex gap-4 uppercase tracking-widest">
          {[
            ["BUILT", "#BUILT"],
            ["LAB", "#LAB"],
            ["FIELD HISTORY", "#FIELD-HISTORY"],
            ["RECORDS", "#RECORDS/002"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setThemeIdx((t) => (t + 1) % THEMES.length)
            }
            className="font-pixel text-[8px] tracking-widest border border-dashed px-2 py-0.5 transition-colors uppercase border-border/60 hover:border-foreground/50 text-foreground"
            title="Cycle display theme"
          >
            DISPLAY — {THEMES[themeIdx].name.toUpperCase()} ({themeIdx + 1}/{THEMES.length})
          </button>
          <span className="tracking-widest">© 2026 TAN</span>
        </div>
      </footer>
    </div>
  );
}
