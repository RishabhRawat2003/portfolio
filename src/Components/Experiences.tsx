"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Position {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

interface Experience {
  company: string;
  image: string;
  positions: Position[];
  current: boolean;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const EXPERIENCES: Experience[] = [
  {
    company: "PSquare Company",
    image:
      "https://res.cloudinary.com/rishabh09/image/upload/v1774091093/psquare_company_logo_bacpyp.jpg",
    current: true,
    positions: [
      {
        title: "Mern Stack Developer",
        startDate: "August 2025",
        endDate: "Present",
        description:
          "Architected and developed backend using Nodejs, NestJs and MongoDB. Implemented message queues with RabbitMQ , Socket IO for real-time updates. Used Redis for caching and session management, and AWS S3 for media storage.",
        skills: [
          "NestJS", "PostgreSQL", "Redis", "RabbitMQ", "MongoDB", "MySQL", "NodeJS",
          "AWS S3", "React", "Next.js", "TailwindCSS", "TypeScript", "EC2"
        ],
      },
    ],
  },
  {
    company: "TruwixTech Solutions Pvt. Ltd.",
    image:
      "https://res.cloudinary.com/rishabh09/image/upload/v1752990797/truwixLogo-D2MuqVTI_jqp9o0.svg",
    current: false,
    positions: [
      {
        title: "Software Developer",
        startDate: "January 2025",
        endDate: "July 2025",
        description:
          "Architected and developed scalable backend services using NodeJS, PostgreSQL, and Redis. Implemented message queues with RabbitMQ and integrated AWS S3 for media storage. Collaborated on frontend with React and Next.js, ensuring high performance and responsive design.",
        skills: [
          "NodeJS", "PostgreSQL", "Redis", "RabbitMQ", "MongoDB",
          "AWS S3", "React", "Next.js", "TailwindCSS", "TypeScript", "EC2"
        ],
      },
    ],
  },
  {
    company: "Campaigning Source.",
    image:
      "https://res.cloudinary.com/rishabh09/image/upload/v1752990797/logo-white_yosjt4.webp",
    current: false,
    positions: [
      {
        title: "Software Developer Trainee",
        startDate: "November 2024",
        endDate: "January 2025",
        description:
          "Developed full-stack applications using NodeJS and MongoDB. Built RESTful APIs and implemented authentication using JWT. Gained experience in React and TailwindCSS for frontend development. Collaborated on backend development using ExpressJS and TypeScript.",
        skills: [
          "NodeJS", "MongoDB", "ExpressJS",
          "TypeScript", "React", "TailwindCSS",
        ],
      },
    ],
  },
  {
    company: "Crazy WebDev Technologies.",
    image:
      "https://res.cloudinary.com/rishabh09/image/upload/v1753370055/crazywebdev_srrhkt.png",
    current: false,
    positions: [
      {
        title: "Software Developer Intern",
        startDate: "January 2024",
        endDate: "June 2024",
        description:
          "Contributed to full-stack projects using Node.js and MongoDB. Enhanced UI/UX with React and TailwindCSS, achieving a 20% increase in user engagement. Implemented authentication using JWT, ensuring secure access to sensitive data.",
        skills: [
          "MongoDB",
          "Node.js", "React", "TailwindCSS", "JavaScript",
        ],
      },
    ],
  },
];

const SUMMARY_STATS = [
  { label: "Industry Experience", value: "2+ Years" },
  { label: "Coding Experience", value: "3+ Years" },
  { label: "Freelance Projects", value: "4+ Completed" },
];

const STATUS_TAGS = [
  { label: "Full-time Roles", accent: "#00e5ff" },
  { label: "Contract Work", accent: "#bf5af2" },
  { label: "Freelance Projects", accent: "#ff375f" },
];

// ─── ExperienceSection ────────────────────────────────────────────────────────

export const ExperienceSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const exp = EXPERIENCES[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

      <section
        id="experience"
        className="py-28 text-white"
        style={{ background: "#060810", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* ── Heading ────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-3"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, #00e5ff 0%, #bf5af2 50%, #ff375f 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Professional Experience
            </h2>
            <p className="text-white/40 text-base max-w-xl mx-auto">
              My journey through the tech industry — roles, responsibilities, and skills acquired.
            </p>
          </motion.div>

          {/* ── Layout ─────────────────────────────────────────────────────── */}
          <div className="flex flex-col lg:flex-row gap-6">

            {/* ── Left sidebar ─────────────────────────────────────────────── */}
            <aside className="lg:w-[280px] shrink-0">
              <div
                className="rounded-2xl border border-white/[0.06] p-5 lg:sticky lg:top-6"
                style={{ background: "rgba(255,255,255,0.025)" }}
              >
                <p
                  className="text-[10px] text-white/30 mb-3 uppercase tracking-widest"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  // companies
                </p>

                <div className="flex flex-col gap-2 mb-6">
                  {EXPERIENCES.map((e, i) => {
                    const isActive = active === i;
                    return (
                      <motion.button
                        key={e.company}
                        onClick={() => setActive(i)}
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full text-left p-3 rounded-xl border transition-all duration-200 overflow-hidden"
                        style={{
                          borderColor: isActive ? "rgba(0,229,255,0.25)" : "rgba(255,255,255,0.05)",
                          background: isActive ? "rgba(0,229,255,0.06)" : "rgba(255,255,255,0.02)",
                        }}
                      >
                        {isActive && (
                          <div
                            className="absolute left-0 top-0 bottom-0 w-[2px] rounded-r-full"
                            style={{ background: "#00e5ff" }}
                          />
                        )}
                        <p
                          className="text-xs font-semibold leading-snug pl-1"
                          style={{
                            color: isActive ? "#00e5ff" : "rgba(255,255,255,0.45)",
                            fontFamily: "'Syne', sans-serif",
                          }}
                        >
                          {e.company}
                        </p>
                        <p
                          className="text-[10px] mt-0.5 pl-1"
                          style={{
                            color: isActive ? "rgba(0,229,255,0.5)" : "rgba(255,255,255,0.2)",
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {e.current ? "● current" : "○ previous"}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Summary stats */}
                <div
                  className="rounded-xl border border-white/[0.05] p-4"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <p
                    className="text-[10px] text-white/25 mb-3 uppercase tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    // total_exp
                  </p>
                  <div className="space-y-2.5">
                    {SUMMARY_STATS.map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center">
                        <span className="text-xs text-white/35">{label}</span>
                        <span
                          className="text-xs font-semibold text-white/70"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* ── Right content ─────────────────────────────────────────────── */}
            <div className="flex-1 min-w-0 flex flex-col gap-6">

              {/* Company header card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/[0.06] p-6"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  {/* Company header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center border border-white/[0.06] shrink-0 overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <Image
                        src={exp.image}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        className="object-contain w-10 h-10"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-white/85"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: exp.current ? "#28c840" : "rgba(255,255,255,0.2)",
                          }}
                        />
                        <span
                          className="text-[11px]"
                          style={{
                            color: exp.current ? "#28c840" : "rgba(255,255,255,0.3)",
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {exp.current ? "currently working" : "previously worked"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Positions timeline */}
                  <div className="relative pl-6 border-l border-white/[0.06] space-y-8">
                    {exp.positions.map((pos, idx) => (
                      <motion.div
                        key={pos.title}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="relative"
                      >
                        {/* Timeline dot */}
                        <div
                          className="absolute -left-[29px] top-1 w-4 h-4 rounded-full border-2 border-[#00e5ff] flex items-center justify-center"
                          style={{ background: "#060810" }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: "#00e5ff" }}
                          />
                        </div>

                        {/* Position card */}
                        <div
                          className="rounded-xl border border-white/[0.05] p-5 hover:border-white/[0.10] transition-all duration-300"
                          style={{ background: "rgba(255,255,255,0.02)" }}
                        >
                          {/* Title + date */}
                          <div className="flex flex-wrap justify-between gap-3 mb-4">
                            <h4
                              className="text-base font-bold text-white/85"
                              style={{ fontFamily: "'Syne', sans-serif" }}
                            >
                              {pos.title}
                            </h4>
                            <div
                              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.06] text-[11px] shrink-0"
                              style={{
                                color: "#00e5ff",
                                background: "rgba(0,229,255,0.06)",
                                fontFamily: "'JetBrains Mono', monospace",
                              }}
                            >
                              <FiCalendar size={10} />
                              {pos.startDate} – {pos.endDate}
                            </div>
                          </div>

                          <p className="text-white/45 text-sm leading-relaxed mb-5">
                            {pos.description}
                          </p>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-1.5">
                            {pos.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-0.5 rounded-lg text-[11px] border border-white/[0.06] text-white/40 hover:text-white/70 hover:border-white/[0.12] transition-colors"
                                style={{
                                  background: "rgba(255,255,255,0.03)",
                                  fontFamily: "'JetBrains Mono', monospace",
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Current status card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-[#00e5ff]/10 p-6 relative overflow-hidden"
                style={{ background: "rgba(0,229,255,0.03)" }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 0% 50%, rgba(0,229,255,0.06), transparent 60%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: "#00e5ff" }}
                    />
                    <h3
                      className="text-sm font-medium"
                      style={{
                        color: "#00e5ff",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      // current_status
                    </h3>
                  </div>

                  <p className="text-white/45 text-sm leading-relaxed mb-5">
                    Currently focused on mastering system design and cloud-native DevOps
                    infrastructure at scale. Open to exciting opportunities where I can build
                    high-performance, scalable systems, take on challenging engineering problems,
                    and contribute meaningfully to innovative, growth-driven teams.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {STATUS_TAGS.map(({ label, accent }) => (
                      <span
                        key={label}
                        className="px-3 py-1 rounded-full text-xs border"
                        style={{
                          color: accent,
                          borderColor: `${accent}30`,
                          background: `${accent}0c`,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};