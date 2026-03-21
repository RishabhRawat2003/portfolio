"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

const sections = ["home", "about", "projects", "experience", "contact"] as const;
type Section = (typeof sections)[number];

// ─── Header ───────────────────────────────────────────────────────────────────

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Track scroll depth for header backdrop intensity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer — active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(section);
        },
        { rootMargin: "0px 0px -40% 0px", threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (id: Section) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .nav-grad {
          background: linear-gradient(135deg, #00e5ff, #bf5af2);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .resume-btn {
          background: linear-gradient(135deg, rgba(0,229,255,0.10), rgba(191,90,242,0.10));
          border: 1px solid rgba(0,229,255,0.20);
          transition: background 0.2s, border-color 0.2s;
        }
        .resume-btn:hover {
          background: linear-gradient(135deg, rgba(0,229,255,0.18), rgba(191,90,242,0.18));
          border-color: rgba(0,229,255,0.40);
        }
      `}</style>

      <motion.header
        ref={headerRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(6,8,16,0.88)"
            : "rgba(6,8,16,0.50)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(0,229,255,0.10)"
            : "1px solid transparent",
        }}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-3.5 flex items-center justify-between">

          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNavClick("home")}
            className="nav-grad text-lg sm:text-xl font-extrabold tracking-tight leading-none"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            RR
            <span className="text-white/30 font-normal text-sm ml-2 hidden sm:inline"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              /portfolio
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((section) => {
              const isActive = activeSection === section;
              return (
                <motion.button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative capitalize px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: isActive ? "#00e5ff" : "rgba(255,255,255,0.45)",
                    background: isActive ? "rgba(0,229,255,0.06)" : "transparent",
                  }}
                >
                  {section}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-1 left-4 right-4 h-[1.5px] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #00e5ff, #bf5af2)",
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Social icons — desktop + tablet */}
            <div className="hidden md:flex items-center gap-3">
              {[
                {
                  href: "https://github.com/RishabhRawat2003",
                  Icon: FiGithub,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/rishabh-rawat-371453228/",
                  Icon: FiLinkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, color: "#00e5ff" }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <motion.button
                onClick={() => handleNavClick("contact")}
                aria-label="Contact"
                whileHover={{ scale: 1.15, color: "#00e5ff" }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                <FiMail size={18} />
              </motion.button>
            </div>

            {/* Resume button */}
            <motion.a
              href="/Rishabh_Rawat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="resume-btn flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#00e5ff",
              }}
            >
              <FiFileText size={14} />
              Resume
            </motion.a>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setIsMenuOpen((v) => !v)}
              whileTap={{ scale: 0.92 }}
              aria-label="Toggle menu"
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 transition-colors hover:border-[#00e5ff]/30"
              style={{ color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.04)" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
              style={{
                background: "rgba(6,8,16,0.96)",
                borderTop: "1px solid rgba(0,229,255,0.08)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
                {sections.map((section, i) => {
                  const isActive = activeSection === section;
                  return (
                    <motion.button
                      key={section}
                      onClick={() => handleNavClick(section)}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="capitalize text-left w-full py-2.5 px-4 rounded-xl text-sm font-medium transition-colors duration-150 flex items-center gap-2"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: isActive ? "#00e5ff" : "rgba(255,255,255,0.45)",
                        background: isActive
                          ? "rgba(0,229,255,0.07)"
                          : "transparent",
                      }}
                    >
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "#00e5ff" }}
                        />
                      )}
                      {section}
                    </motion.button>
                  );
                })}

                {/* Mobile socials */}
                <div className="flex items-center gap-5 pt-3 px-4 border-t border-white/[0.06] mt-1">
                  {[
                    { href: "https://github.com/RishabhRawat2003",                     Icon: FiGithub,   label: "GitHub"   },
                    { href: "https://www.linkedin.com/in/rishabh-rawat-371453228/",    Icon: FiLinkedin, label: "LinkedIn" },
                  ].map(({ href, Icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.15 }}
                      className="transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                  <motion.button
                    onClick={() => handleNavClick("contact")}
                    aria-label="Contact"
                    whileHover={{ scale: 1.15 }}
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    <FiMail size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};