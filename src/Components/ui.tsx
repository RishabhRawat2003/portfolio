"use client";

import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1] as const;

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
}) {
  return (
    <Reveal className="mb-14 sm:mb-20">
      <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span>{label}</span>
      </div>
      <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}

export function Serif({ children }: { children: React.ReactNode }) {
  return <span className="font-serif font-normal italic tracking-normal">{children}</span>;
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
