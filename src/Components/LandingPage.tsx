"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback, memo } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiDocker,
} from "react-icons/si";
import { FaCode, FaRocket, FaBriefcase, FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface StatCard {
  label: string;
  value: string;
  Icon: IconType;
  accent: string;
}

interface TechItem {
  Icon: IconType;
  label: string;
  color: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const STATS: StatCard[] = [
  { label: "Industry Experience", value: "2+ Yrs",  Icon: FaBriefcase, accent: "#00e5ff" },
  { label: "Coding Experience",   value: "3+ Yrs",  Icon: FaCode,      accent: "#bf5af2" },
  { label: "Freelance Projects",  value: "4+ Done", Icon: FaRocket,    accent: "#ff375f" },
];

const TECH_STACK: TechItem[] = [
  { Icon: SiReact,      label: "React",      color: "#61dafb" },
  { Icon: SiNextdotjs,  label: "Next.js",    color: "#ffffff" },
  { Icon: SiNodedotjs,  label: "Node.js",    color: "#68a063" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
  { Icon: SiMongodb,    label: "MongoDB",    color: "#47a248" },
  { Icon: SiPostgresql, label: "Postgres",   color: "#336791" },
  { Icon: FaAws,        label: "AWS",        color: "#ff9900" },
  { Icon: SiDocker,     label: "Docker",     color: "#2496ed" },
];

const TERMINAL_LINES: { prompt: string; cmd: string; out: string }[] = [
  { prompt: "~", cmd: "npm install scalable-solutions",        out: "✓ installed in 0.8s" },
  { prompt: "~", cmd: "git commit -m 'perf: lighthouse 100'",  out: "✓ main ← 3 files changed" },
  { prompt: "~", cmd: "docker compose up --build -d",          out: "✓ 3 containers running" },
  { prompt: "~", cmd: "curl https://rishabh.dev/hire-me",      out: "✓ 200 OK — let's talk" },
];

// ─── ScrollBar ────────────────────────────────────────────────────────────────

const ScrollBar = memo(function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg,#00e5ff,#bf5af2,#ff375f)",
      }}
    />
  );
});

// ─── GridBackground ───────────────────────────────────────────────────────────

const GridBackground = memo(function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #a0aec0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Ambient glows */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #00e5ff, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full opacity-[0.10]"
        style={{ background: "radial-gradient(circle, #bf5af2, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #ff375f, transparent 70%)" }}
      />
    </div>
  );
});

// ─── TechBadge ────────────────────────────────────────────────────────────────

const TechBadge = memo(function TechBadge({ Icon, label, color }: TechItem) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="group flex flex-col items-center gap-1 cursor-default select-none"
    >
      <div
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border border-white/5"
        style={{ background: `${color}14` }}
      >
        <Icon
          className="text-xl sm:text-2xl transition-colors duration-200"
          style={{ color }}
        />
      </div>
      <span className="text-[10px] font-mono text-white/30 group-hover:text-white/60 transition-colors">
        {label}
      </span>
    </motion.div>
  );
});

// ─── TerminalBlock ────────────────────────────────────────────────────────────

const TerminalBlock = memo(function TerminalBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="my-24 max-w-3xl mx-auto"
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 rounded-t-2xl border border-white/[0.08] border-b-0"
        style={{ background: "#0d1117" }}
      >
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] font-mono text-white/25">
          rishabh@dev:~/portfolio
        </span>
      </div>

      {/* Terminal body */}
      <div
        className="rounded-b-2xl border border-white/[0.08] border-t border-t-white/[0.04] p-5 space-y-3 font-mono text-sm"
        style={{ background: "#090d13" }}
      >
        {TERMINAL_LINES.map(({ prompt, cmd, out }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
          >
            <div className="flex items-start gap-2 flex-wrap">
              <span className="text-[#28c840] shrink-0">{prompt} $</span>
              <span className="text-[#e2e8f0] break-all">{cmd}</span>
            </div>
            <div className="text-[#00e5ff]/60 pl-5 text-xs mt-0.5">{out}</div>
          </motion.div>
        ))}

        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-[#bf5af2] flex items-center gap-2 pt-1 flex-wrap"
        >
          <span>~ $</span>
          <span>
            Ready to collaborate — let&apos;s build something extraordinary_
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
});

// ─── StatCards ────────────────────────────────────────────────────────────────

const StatCards = memo(function StatCards() {
  return (
    <div className="grid sm:grid-cols-3 gap-4 my-20">
      {STATS.map(({ label, value, Icon, accent }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          className="relative group p-6 rounded-2xl border border-white/[0.06] overflow-hidden cursor-default"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 30% 40%, ${accent}18, transparent 70%)`,
            }}
          />
          <Icon
            className="text-2xl mb-4 relative z-10"
            style={{ color: accent }}
          />
          <p
            className="text-3xl font-bold text-white mb-1 relative z-10 tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {value}
          </p>
          <p className="text-sm text-white/40 relative z-10">{label}</p>
        </motion.div>
      ))}
    </div>
  );
});

// ─── Mouse parallax hook ──────────────────────────────────────────────────────

interface MousePos {
  x: number;
  y: number;
}

function useMouseParallax(): MousePos {
  const [pos, setPos] = useState<MousePos>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const onMove = useCallback((e: MouseEvent) => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 8,
        y: (e.clientY / window.innerHeight - 0.5) * -8,
      });
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [onMove]);

  return pos;
}

// ─── LandingPage ─────────────────────────────────────────────────────────────

export const LandingPage: React.FC = () => {
  const mouse = useMouseParallax();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  return (
    <>
      {/* Fonts — move this import into your layout.tsx / _document.tsx for prod */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');

        .grad-text {
          background: linear-gradient(135deg, #00e5ff 0%, #bf5af2 50%, #ff375f 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @keyframes pulse-ring {
          0%   { transform: scale(0.95); opacity: 0.7; }
          70%  { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        .pulse-ring { animation: pulse-ring 2.5s ease-out infinite; }

        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .cursor-block { animation: cursor-blink 1s step-end infinite; }
      `}</style>

      <div
        className="relative min-h-screen overflow-x-hidden text-white"
        style={{ background: "#060810", fontFamily: "'DM Sans', sans-serif" }}
      >
        <ScrollBar />
        <GridBackground />

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* ── HERO ─────────────────────────────────────────────────────────── */}
          <motion.section
            ref={heroRef}
            style={{ opacity: heroOpacity }}
            className="min-h-screen flex flex-col justify-center pt-24 pb-16"
          >
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* ── Left column ── */}
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Status pill */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 mb-8 rounded-full px-4 py-1.5 border border-[#00e5ff]/20"
                  style={{
                    background: "rgba(0,229,255,0.06)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]" />
                  </span>
                  <span className="text-[#00e5ff]/80">
                    available for work · remote friendly
                  </span>
                </motion.div>

                {/* Heading */}
                <h1
                  className="font-extrabold leading-[1.05] tracking-tight mb-4"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(2.4rem, 6vw, 4rem)",
                  }}
                >
                  <span className="text-white/90">Software</span>
                  <br />
                  <span className="grad-text">Engineer.</span>
                </h1>

                {/* Mono intro */}
                <div
                  className="rounded-xl border border-white/[0.06] p-4 mb-6 text-sm leading-relaxed"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    background: "#0d1117",
                  }}
                >
                  <span className="text-[#28c840]">$ </span>
                  <span className="text-white/80">echo </span>
                  <span className="text-[#ff375f]">
                    &quot;Hi, I&apos;m Rishabh Rawat&quot;
                  </span>
                  <br />
                  <span className="text-[#00e5ff]/60">
                    &gt;&gt; Full-stack craftsman · Scalability enthusiast
                  </span>
                  <br />
                  <span className="text-[#00e5ff]/40">
                    &gt;&gt; 2+ years shaping web ecosystems
                  </span>
                  <span
                    className="cursor-block inline-block w-[7px] h-[14px] ml-0.5 align-middle"
                    style={{ background: "rgba(0,229,255,0.6)" }}
                  />
                </div>

                <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                  I architect robust, high-performance web solutions with modern
                  stacks — from blazing-fast frontends to cloud-native backends.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-10">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm text-black"
                    style={{
                      background: "linear-gradient(135deg, #00e5ff, #bf5af2)",
                    }}
                  >
                    Let&apos;s Connect →
                  </motion.a>
                  <motion.a
                    href="/Rishabh_Rawat.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm border border-white/10 text-white/70 hover:border-white/20 hover:text-white transition-colors"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    📄 Download CV
                  </motion.a>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {TECH_STACK.map((tech) => (
                    <TechBadge key={tech.label} {...tech} />
                  ))}
                </div>
              </motion.div>

              {/* ── Right column — photo with mouse parallax ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  transform: `perspective(1000px) rotateY(${mouse.x}deg) rotateX(${mouse.y}deg)`,
                  transition: "transform 0.12s linear",
                  willChange: "transform",
                }}
                className="relative group hidden sm:block"
              >
                {/* Glow ring */}
                <div
                  className="absolute -inset-[2px] rounded-[22px] opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(135deg, #00e5ff30, #bf5af230, #ff375f30)",
                    filter: "blur(8px)",
                  }}
                />

                {/* Card frame */}
                <div
                  className="relative rounded-[20px] p-[1.5px] overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #00e5ff22, #bf5af222, #ff375f22)",
                  }}
                >
                  <div className="relative rounded-[18px] overflow-hidden bg-[#090d13]">
                    <Image
                      src="/rishabh.png"
                      alt="Rishabh Rawat — Software Engineer"
                      width={600}
                      height={800}
                      priority
                      className="w-full h-auto max-h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://placehold.co/600x800/090d13/00e5ff?text=Rishabh+Rawat";
                      }}
                    />
                    {/* Bottom gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, #060810 0%, transparent 45%)",
                      }}
                    />
                    {/* Name tag */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <div
                        className="rounded-xl px-4 py-2.5 border border-white/[0.08] backdrop-blur-md"
                        style={{
                          background: "rgba(6,8,16,0.7)",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        <p className="text-xs text-[#00e5ff]/60 mb-0.5">
                          // currently building
                        </p>
                        <p className="text-sm text-white/80">
                          Full-stack · Cloud · Open to work
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 rounded-full px-3 py-1.5 border border-[#bf5af2]/30"
                  style={{
                    background: "rgba(191,90,242,0.12)",
                    color: "#bf5af2",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.04em",
                  }}
                >
                  &lt;dev /&gt;
                </motion.div>
              </motion.div>

            </div>
          </motion.section>

          {/* ── TERMINAL ─────────────────────────────────────────────────────── */}
          <TerminalBlock />

          {/* ── STAT CARDS ───────────────────────────────────────────────────── */}
          <StatCards />

        </main>
      </div>
    </>
  );
};

export default LandingPage;