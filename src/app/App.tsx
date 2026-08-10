import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, Download, Play, X, Mail, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as Dialog from "@radix-ui/react-dialog";
import _historyData from "../data/history.json";
import projectsData from "../data/projects.json";
import certificatesData from "../data/certificates.json";
import { useScrollProgress } from "../hooks/useScrollProgress";
import ThreeWaveField from "./components/ui/ThreeWaveField";

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
}> = ({ children, delay = 0, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVis(true); obs.disconnect(); }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(12px)",
        transition: `opacity 500ms ease-out ${delay}ms, transform 500ms ease-out ${delay}ms`,
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

  // ── scroll-driven state ───────────────────────────────────────────────────
  const { scrollY, totalProgress, velocity, sectionProgress } = useScrollProgress();

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
      `}</style>
      <DitherFilter />
      <Ledger active={activeSection} themeIdx={themeIdx} setThemeIdx={setThemeIdx} />

      <main className="flex flex-col w-full overflow-x-hidden">

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
              <Reveal delay={120}>
                <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter leading-none -ml-1 text-foreground">
                  TAN.
                </h1>
              </Reveal>
              <Reveal delay={180}>
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

          {/* portrait with parallax layers */}
          <Reveal delay={100}>
            <div className="relative group cursor-crosshair">
              {/* subject layer — moves with cursor */}
              <div
                style={{
                  transform: `translate(${parallax.x}px, ${parallax.y}px)`,
                  transition: reduced ? "none" : "transform 0.12s ease-out",
                }}
                className="relative"
              >
                <div className="absolute translate-x-3 translate-y-3 inset-0 bg-muted -z-10" />
                <img
                  src="/profile.png"
                  alt="SUBJECT: TAN — field photograph"
                  style={{
                    filter: reduced
                      ? undefined
                      : heroDitherProgress > 0.15
                        ? `url(#dither) contrast(${1 + heroDitherProgress * 0.25}) brightness(${1 - heroDitherProgress * 0.12})`
                        : undefined,
                    transition: "filter 0.3s ease-out",
                  }}
                  className="w-full grayscale contrast-110 object-cover aspect-[4/5] group-hover:[filter:url(#dither)] transition-all duration-500"
                />
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
                <button className="flex items-center gap-1.5 bg-foreground text-background px-3 py-1.5 font-pixel text-[8px] uppercase hover:bg-accent transition-colors">
                  <Play className="w-2.5 h-2.5" /> PLAY FIELD NOTE
                </button>
              </div>
            </div>
          </Reveal>
          </div>
        </section>

        <div className="max-w-6xl w-full mx-auto px-4 md:px-8 pb-10">
          <Divider from="FIELD NOTE / 001" to="RECORDS / 002" />
        </div>

        {/* records ────────────────────────────────────────────────────── */}
        <section className="w-full dark bg-background text-foreground py-16 md:py-24">
          <div id="RECORDS/002" className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <FieldMark sectionId="002" externalFrame={fieldMarkScrollFrame("002")} />
            <Reveal>
              <h2 className="text-5xl md:text-6xl font-pixel tracking-widest uppercase">RECORDS</h2>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certificatesData.map((cert, i) => {
              // Each card's rotate-in is staggered: section enters and cards tilt flat one by one
              const stagger = 0.15;
              const cardProgress = Math.min(1, Math.max(0, (recordsProgress - i * stagger) / (1 - i * stagger)));
              const rotateX = reduced ? 0 : (1 - cardProgress) * 4; // 4deg → 0deg
              return (
              <Reveal key={cert.n} delay={i * 70}>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <div
                      className="flex flex-col gap-3 group cursor-pointer"
                      style={{
                        transform: `perspective(800px) rotateX(${rotateX}deg)`,
                        transition: reduced ? "none" : "transform 0.1s ease-out",
                        transformOrigin: "top center",
                      }}
                    >
                      <div className="font-pixel text-[9px] text-muted-foreground">[{cert.n}]</div>
                      <div className="relative aspect-video border border-border bg-muted overflow-hidden">
                        <img
                          src={cert.img || `https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80&sig=${cert.sig}`}
                          alt={cert.name}
                          className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:[filter:url(#dither)] transition-all duration-500"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-sm leading-snug group-hover:text-accent transition-colors">{cert.name}</div>
                        <div className="font-pixel text-[9px] text-muted-foreground mt-0.5">
                          ISSUED BY — {cert.issuer}
                        </div>
                        <div className="flex items-center gap-2 font-pixel text-[9px] mt-1">
                          <span>{cert.year}</span>
                           <span className="border border-dashed border-accent bg-accent/5 text-accent font-pixel text-[8px] px-1.5 py-0.5 rounded-sm font-bold">VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50" />
                    <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border border-border bg-background p-6 shadow-xl">
                      <div className="relative aspect-video border border-border bg-muted overflow-hidden">
                        <img
                          src={cert.img || `https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80&sig=${cert.sig}`}
                          alt={cert.name}
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Dialog.Title className="text-lg font-medium tracking-tight">
                          {cert.name}
                        </Dialog.Title>
                        <Dialog.Description className="text-sm text-foreground/75 leading-relaxed">
                          {cert.desc}
                        </Dialog.Description>
                        <div className="flex items-center gap-4 mt-2 font-pixel text-[9px] text-muted-foreground">
                          <span>ISSUER: {cert.issuer}</span>
                          <span>YEAR: {cert.year}</span>
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
              </Reveal>
              );
            })}

          </div>
          </div>
        </section>

        <div className="max-w-6xl w-full mx-auto px-4 md:px-8 py-10">
          <Divider from="ARCHIVE ENTRY / 003" to="BUILT" />
        </div>

        {/* built ──────────────────────────────────────────────────────── */}
        <section className="w-full bg-background text-foreground py-16 md:py-24">
          <div id="BUILT" className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10 relative">
          {/* Three.js wave field — amplitude driven by scroll velocity */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <ThreeWaveField themeIdx={themeIdx} scrollVelocity={velocity} scrollProgress={totalProgress} />
          </div>

          <div className="relative flex flex-row-reverse items-start gap-4 text-right border-b border-border pb-8 mb-8">
            <FieldMark sectionId="003" externalFrame={fieldMarkScrollFrame("003")} />
            <div className="flex-1">
              <Reveal>
                <h2 className="text-5xl md:text-6xl font-medium tracking-tight">
                  BUILT / SELECTED WORK
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <p className="text-muted-foreground text-sm mt-1">
                  "Things that started as problems, ideas, or experiments and became software."
                </p>
              </Reveal>
            </div>
          </div>

          <div className="relative grid md:grid-cols-[160px_1fr] gap-8 border-t border-border pt-8">
            {/* index list */}
            <div className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
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
        </section>

        <div className="max-w-6xl w-full mx-auto px-4 md:px-8 py-10">
          <Divider from="RECORD / 004" to="LAB" />
        </div>

        {/* lab ────────────────────────────────────────────────────────── */}
        <section className="w-full dark bg-background text-foreground py-16 md:py-24">
          <div id="LAB" className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10">
          <div className="flex items-start gap-4">
            <FieldMark sectionId="005" externalFrame={fieldMarkScrollFrame("005")} />
            <div>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-mono font-medium tracking-tight uppercase">
                  LAB / EXPERIMENTS
                </h2>
              </Reveal>
              <Reveal delay={50}>
                <p className="font-mono text-sm opacity-70 mt-1">
                  "Not everything here is finished."
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-4">
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
                  className={`border border-border p-6 hover:bg-muted/20 transition-all duration-300 group ${hilite === lab.id ? "border-accent bg-muted/30" : ""
                    }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="font-pixel text-[9px] text-muted-foreground">
                      LAB / {lab.num}
                    </div>
                    <div
                      className={`font-pixel text-[8px] px-2 py-0.5 border border-dashed ${lab.accent
                        ? "border-accent bg-accent/5 text-accent font-bold"
                        : "text-foreground/70 border-border"
                        }`}
                    >
                      STATUS: {lab.status}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-1 group-hover:underline decoration-1 underline-offset-4">
                    {lab.name}
                  </h3>
                  <p className="font-pixel text-[9px] text-muted-foreground mb-4">{lab.cat}</p>
                  <div className="text-sm border-t border-border pt-4 text-foreground/75">
                    <span className="font-pixel text-[8px] text-muted-foreground uppercase mr-2">
                      {lab.label} —
                    </span>
                    {lab.note}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="border border-dashed border-border p-6">
              <div className="font-pixel text-[8px] text-muted-foreground mb-5 tracking-widest">
                EXPERIMENT LOG
              </div>
              <div className="font-pixel text-[9px] text-foreground/70 mb-3">EXPERIMENT / 014</div>
              <div
                className="grid gap-y-1.5 text-sm"
                style={{ gridTemplateColumns: "88px 1fr" }}
              >
                <span className="font-pixel text-[8px] text-muted-foreground uppercase mt-[3px]">
                  QUESTION —
                </span>
                <span className="text-foreground/75">
                  Can this model detect X reliably at night?
                </span>
                <span className="font-pixel text-[8px] text-muted-foreground uppercase mt-[3px]">
                  RESULT —
                </span>
                <span>Promising, ~80% on the test set.</span>
                <span className="font-pixel text-[8px] text-muted-foreground uppercase mt-[3px]">
                  NEXT —
                </span>
                <span className="text-foreground/75">Try against low-light footage.</span>
              </div>
            </div>
          </Reveal>
          </div>
        </section>

        <div className="max-w-6xl w-full mx-auto px-4 md:px-8 py-10">
          <Divider from="RECORD / 006" to="FIELD HISTORY" />
        </div>

        {/* field history ──────────────────────────────────────────────── */}
        <section className="w-full bg-background text-foreground py-16 md:py-24">
          <div id="FIELD-HISTORY" className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center text-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <FieldMark sectionId="007" externalFrame={fieldMarkScrollFrame("007")} />
            <Reveal>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight uppercase">FIELD HISTORY</h2>
            </Reveal>
          </div>

          {/* Self-drawing vertical timeline — scaleY bound to scroll progress through this section */}
          <div className="relative w-full">
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                width: 1,
                height: "100%",
                backgroundColor: "currentColor",
                opacity: 0.12,
                transformOrigin: "top center",
                transform: reduced ? "scaleY(1)" : `scaleY(${Math.min(1, historyProgress * 1.6)})`,
                transition: reduced ? "none" : "transform 0.05s linear",
                pointerEvents: "none",
              }}
            />
          <div className="grid md:grid-cols-3 gap-6 w-full text-left">
            {historyData.map((job, i) => (
              <Reveal key={job.year} delay={i * 80}>
                <div
                  id={job.id}
                  className={`border border-border p-6 h-full flex flex-col gap-3 transition-all duration-300 hover:bg-muted/10 ${hilite === job.id
                    ? "border-accent bg-muted/20"
                    : ""
                    }`}
                >
                  <div className="font-pixel text-[10px] tracking-widest text-muted-foreground flex justify-between items-center">
                    <span>{job.year}</span>
                    <span className="opacity-50">[{job.id.split('/').pop()}]</span>
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
                    <div className="mt-auto pt-4 flex items-center gap-2 flex-wrap">
                      <span className="font-pixel text-[8px] text-muted-foreground">
                        SEE ALSO —
                      </span>
                      {job.refs.map((r) => (
                        <Ref key={r.id} id={r.id} label={r.label} onClick={jump} />
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          </div>
          </div>
        </section>
      </main>

      {/* contact ── full-width dark section with Three.js wave field ───────── */}
      <section id="CONTACT" className="bg-primary text-primary-foreground relative overflow-hidden mt-28">
        <div className="absolute inset-0">
          <ThreeWaveField dark themeIdx={themeIdx} scrollVelocity={velocity} scrollProgress={totalProgress} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-28 md:py-40 flex flex-col items-start gap-10">
          <FieldMark sectionId="009" externalFrame={fieldMarkScrollFrame("009")} />
          <div>
            <div
              className="font-pixel text-[9px] tracking-widest opacity-40 mb-3"
              style={{
                opacity: reduced ? 0.4 : Math.max(0.1, contactTextProgress * 0.4),
                transform: reduced ? "none" : `translateY(${(1 - contactTextProgress) * 8}px)`,
                transition: reduced ? "none" : "opacity 0.1s, transform 0.1s",
              }}
            >
              CONTACT / 009
            </div>
            <h2
              className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-3"
              style={{
                opacity: reduced ? 1 : Math.max(0, contactTextProgress * 1.5 - 0.2),
                transform: reduced ? "none" : `translateY(${(1 - Math.min(1, contactTextProgress * 1.5)) * 16}px)`,
                transition: reduced ? "none" : "opacity 0.08s, transform 0.08s",
              }}
            >
              START A NEW FIELD NOTE.
            </h2>
            <p
              className="text-sm opacity-55"
              style={{
                opacity: reduced ? 0.55 : Math.max(0, (contactTextProgress - 0.4) * 0.9),
                transform: reduced ? "none" : `translateY(${(1 - Math.min(1, Math.max(0, (contactTextProgress - 0.4) / 0.6))) * 12}px)`,
                transition: reduced ? "none" : "opacity 0.08s, transform 0.08s",
              }}
            >"Have a problem worth exploring?"</p>
          </div>
          <div className="flex gap-6 mt-4">
            <a href="mailto:cmkbuena@gmail.com" target="_blank" rel="noreferrer" className="group flex items-center justify-center border-2 border-primary-foreground/30 w-16 h-16 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
              <Mail className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://github.com/ChristianBuena" target="_blank" rel="noreferrer" className="group flex items-center justify-center border-2 border-primary-foreground/30 w-16 h-16 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
              <Github className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://www.linkedin.com/in/mrtnztan/" target="_blank" rel="noreferrer" className="group flex items-center justify-center border-2 border-primary-foreground/30 w-16 h-16 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
              <Linkedin className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
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
