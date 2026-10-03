"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { PROFILE } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = "home" | (typeof NAV)[number]["id"];

export const Header: React.FC = () => {
  const [active, setActive] = useState<SectionId>("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids: SectionId[] = ["home", ...NAV.map((n) => n.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 64 64" className="h-8 w-8 transition-transform duration-300 group-hover:-rotate-6" aria-hidden>
            <rect width="64" height="64" rx="16" className="fill-fg" />
            <g
              transform="translate(7 0) skewX(-10)"
              fill="none"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-bg"
            >
              <path d="M20 47V17" />
              <path d="M20 17h11a8.5 8.5 0 0 1 0 17H20" />
              <path d="M29 34l11 13" />
            </g>
            <circle cx="48.5" cy="44.5" r="4.5" className="fill-accent" />
          </svg>
          <span className="text-sm font-medium tracking-tight">{PROFILE.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative isolate rounded-full px-4 py-2 text-sm transition-colors ${
                  active === id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-card"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85 sm:flex"
          >
            Resume <FiArrowUpRight size={14} />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted md:hidden"
          >
            {open ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col px-5 pb-6 pt-2">
              {NAV.map(({ id, label }) => (
                <li key={id} className="border-b border-line last:border-none">
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-4 text-2xl tracking-tight ${
                      active === id ? "text-fg" : "text-muted"
                    }`}
                  >
                    {label}
                    <FiArrowUpRight size={18} />
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1 rounded-full bg-fg py-3 text-sm font-medium text-bg"
                >
                  Download resume <FiArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
