"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUsers, FiBriefcase, FiUser, FiFolder,
  FiCpu, FiCloud, FiDatabase, FiExternalLink, // added FiExternalLink
} from "react-icons/fi";
import {
  SiNestjs, SiPostgresql, SiMysql,
  SiDocker, SiRedis, SiRabbitmq,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  title: string;
  description: string;
  tech: string[];
  date: string;
  role?: string;
  status?: string;
  client?: string;
  company?: string;
  team?: string;
  duration?: string;
  featured?: boolean;
  url?: string; // new optional field
}

interface Projects {
  personal: Project[];
  collaborative: Project[];
  freelancing: Project[];
}

type Tab = keyof Projects;

interface TabDef {
  id: Tab;
  Icon: IconType;
  label: string;
  accent: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const TABS: TabDef[] = [
  { id: "personal",      Icon: FiUser,      label: "Personal",   accent: "#00e5ff" },
  { id: "collaborative", Icon: FiUsers,     label: "Team",       accent: "#bf5af2" },
  { id: "freelancing",   Icon: FiBriefcase, label: "Freelance",  accent: "#ff375f" },
];

const PROJECTS: Projects = {
  personal: [
    {
      title: "DbPulse",
      description:
        "A desktop app built with Electron that tracks every query hitting your database (MongoDB, PostgreSQL, MySQL). See which API triggers how many queries, execution time, method, duration, and the exact query log. DbPulse gives you full visibility: which API triggered which query, execution time, full query logs — all per API call. Desktop + agent architecture. Available for Windows, Linux, and Mac.",
      tech: ["React", "Electron", "NodeJS", "Socket.io", "Mongoose", "PostgreSQL", "MySQL", "npm", "pip", "Maven"],
      date: "2026",
      featured: true,
      status: "Cross‑platform (Win, Mac, Linux)",
      url: "https://dbpulse-beta.vercel.app/", // added link
      // role intentionally omitted
    },
  ],
  collaborative: [
    // ... (all existing projects, unchanged)
    {
      title: "ISKCON Wave City Website",
      description:
        "Full-stack platform for a global religious organisation. Features include an admin dashboard (React + Tailwind), automatic YouTube livestream updates via API, and a secure CSR donation system with payment gateway integration.",
      tech: ["React", "Tailwind", "NodeJS", "MongoDB", "AWS EC2"],
      role: "Full Stack Developer",
      date: "2025",
      featured: true,
    },
    {
      title: "LLM-Powered Backend System",
      description:
        "Architected a scalable backend using NodeJS and MongoDB that integrates OpenAI APIs. The system parses emails, performs contextual analysis with LLMs, and generates intelligent reports. RabbitMQ orchestrates background tasks.",
      tech: ["NodeJS", "MongoDB", "OpenAI", "RabbitMQ", "Redis", "AWS S3"],
      role: "Backend Developer",
      date: "2025",
    },
    {
      title: "Skywall – E-commerce for Televisions",
      description:
        "End-to-end e-commerce platform with NestJS backend, PostgreSQL database, and Redis caching. Implemented secure payment gateways, bulk order support, and product inventory management.",
      tech: ["React", "NestJS", "PostgreSQL", "Redis", "Tailwind", "AWS EC2"],
      role: "Full Stack Developer",
      date: "2025",
    },
    {
      title: "Kisan Kumbh – AgriTech Event Platform",
      description:
        "Built a comprehensive platform for agritech events featuring exhibitors, sponsors, and slot booking with payment integration. Used NestJS and MySQL in the backend, and Tailwind for the frontend.",
      tech: ["React", "NodeJS", "MySQL", "Tailwind"],
      role: "Full Stack Developer",
      date: "2025",
    },
    {
      title: "TaxRishi – Tax Solutions Platform",
      description:
        "Feature-rich tax services website with complex business logic calculators. Built with React and Tailwind. Added all types of taxes, including GST, VAT, and Excise with Calculators. Used React Context API for state management.",
      tech: ["React", "Tailwind"],
      role: "Frontend Developer",
      date: "2024",
    },
    {
      title: "Mentor Sudhir – Personal Portfolio",
      description:
        "Crafted a visually engaging personal portfolio with smooth animations and responsive design. Utilized React and Tailwind for the frontend, and used React Context API for state management.",
      tech: ["React", "Tailwind"],
      role: "Frontend Developer",
      date: "2025",
    },
    {
      title: "KDSure – Real Estate Listings",
      description:
        "Developed a sleek frontend for property listings with animated maps and filtering. Optimized for mobile responsiveness. Built with React and Tailwind. Implemented React Context API for state management.",
      tech: ["React", "Tailwind"],
      role: "Full Stack Developer",
      date: "2024",
    },
    {
      title: "Elevate Edge – Startup & Bootcamp Platform",
      description:
        "Platform for masterclasses and bootcamps with user authentication, event booking, and mentor profiles. Used MongoDB, ExpressJS, NodeJS and React for the backend, and Tailwind for the frontend.",
      tech: ["React", "NodeJS", "MongoDB", "Tailwind", "ExpressJS"],
      role: "Full Stack Developer",
      date: "2025",
    },
    {
      title: "Bharatronix – Electronics E-commerce",
      description:
        "Backend development for an electronics e-commerce platform. Built scalable APIs with NodeJs, managed MongoDB schemas, and implemented business logic using BullMQ for order processing.",
      tech: ["NodeJS", "MongoDb", "AWS S3", "Geolocation", "BullMQ"],
      role: "Backend Developer",
      date: "2025",
    },
  ],
  freelancing: [
    // ... (all existing projects, unchanged)
    {
      title: "Neev Global Solution",
      description:
        "Developed a full-stack platform for Neev Global Solutions, a multi-domain business group focused on product marketing, property listings, startup promotions, commercial vehicle sales/rentals, and jaggery exports. Built scalable user and admin dashboards along with a robust lead management system, enabling admins to track, manage, and seamlessly assign leads to team members for efficient conversion.",
      tech: ["NodeJs", "MongoDB", "ExpressJS", "Tailwind", "NextJS", "BullMQ", "Render"],
      role: "FullStack Developer",
      team: "2 member",
      date: "2026",
    },
    {
      title: "Stay Unfiltered",
      description:
        "Built a scalable mental wellness platform serving individuals and organizations, enabling companies to offer employee wellness programs and users to access personalized therapy plans. Implemented secure payment integration, goal-based progress tracking between therapists and users, and an automated therapist matching system based on real-time availability. Developed a robust admin dashboard to manage users, therapists, and platform operations efficiently.",
      tech: ["NextJS", "NodeJs", "MongoDB", "ExpressJS", "Tailwind", "Razorpay", "OAuth"],
      role: "FullStack Developer",
      team: "4 member",
      date: "2025",
    },
    {
      title: "NexMentor – NEET Mentorship Platform",
      description:
        "Architected and led full-stack development of a scalable EdTech platform serving 5k+ users. Delivered personalized dashboards for students, mentors, and admins, integrated secure payment gateway for seamless transactions, and built real-time chat using WebSockets. Implemented scheduled email notifications for reminders and notifications.",
      tech: ["React", "NodeJs", "MongoDB", "ExpressJS", "Render", "OAuth", "Razorpay"],
      role: "Full Stack Lead",
      team: "2 member",
      date: "2025",
    },
    {
      title: "MyCampus Safari – Campus Tour Platform",
      description:
        "Built a platform for campus tours with itinerary creation, email notifications, and payment integration. Backend uses NodeJS, MongoDB, and Cloudinary for image uploads. Frontend uses React, Tailwind, and React Context API for state management.",
      tech: ["React", "NodeJS", "MongoDB", "Tailwind", "Cloudinary"],
      role: "Full Stack Developer",
      team: "3 members",
      date: "2025",
    },
  ],
};

// ─── Tech icon helper ─────────────────────────────────────────────────────────

interface TechIconInfo {
  Icon: IconType;
  color: string;
}

function getTechIconInfo(tech: string): TechIconInfo | null {
  const t = tech.toLowerCase();
  if (t.includes("nest")) return { Icon: SiNestjs, color: "#e0234e" };
  if (t.includes("postgres")) return { Icon: SiPostgresql, color: "#336791" };
  if (t.includes("mysql")) return { Icon: SiMysql, color: "#f29111" };
  if (t.includes("docker")) return { Icon: SiDocker, color: "#2496ed" };
  if (t.includes("redis")) return { Icon: SiRedis, color: "#ff4438" };
  if (t.includes("rabbit")) return { Icon: SiRabbitmq, color: "#ff6600" };
  if (t.includes("aws")) return { Icon: FaAws, color: "#ff9900" };
  if (t.includes("lambda")) return { Icon: FiCloud, color: "#bf5af2" };
  if (t.includes("s3")) return { Icon: FiDatabase, color: "#47a248" };
  if (t.includes("bull")) return { Icon: FiCpu, color: "#00e5ff" };
  return null;
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index: number;
  accent: string;
}

const ProjectCard = ({ project, index, accent }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    className="group relative flex flex-col rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-white/[0.12]"
    style={{ background: "rgba(255,255,255,0.025)" }}
  >
    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: `radial-gradient(circle at 50% 0%, ${accent}0c, transparent 65%)` }}
    />

    {/* Featured badge */}
    {project.featured && (
      <div className="absolute top-4 right-4 z-10">
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-medium border"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: accent,
            borderColor: `${accent}40`,
            background: `${accent}12`,
          }}
        >
          featured
        </span>
      </div>
    )}

    <div className="p-5 flex flex-col flex-1 relative z-10">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
          style={{ background: `${accent}14` }}
        >
          <FiFolder size={15} style={{ color: accent }} />
        </div>
        <div>
          <h3
            className="text-sm font-bold text-white/85 leading-snug group-hover:text-white transition-colors"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {project.title}
          </h3>
          <span
            className="text-[10px] mt-0.5 block"
            style={{
              color: `${accent}99`,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {project.date}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/45 text-xs leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Meta pills */}
      {(project.status || project.team || project.duration) && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.status && (
            <span className="px-2 py-0.5 rounded-full text-[10px] border border-[#bf5af2]/20 text-[#bf5af2]/70"
              style={{ background: "rgba(191,90,242,0.06)" }}>
              {project.status}
            </span>
          )}
          {project.team && (
            <span className="px-2 py-0.5 rounded-full text-[10px] border border-[#00e5ff]/20 text-[#00e5ff]/60"
              style={{ background: "rgba(0,229,255,0.06)" }}>
              {project.team}
            </span>
          )}
          {project.duration && (
            <span className="px-2 py-0.5 rounded-full text-[10px] border border-white/10 text-white/35"
              style={{ background: "rgba(255,255,255,0.04)" }}>
              {project.duration}
            </span>
          )}
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((tech) => {
          const info = getTechIconInfo(tech);
          return (
            <div
              key={tech}
              className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] border border-white/[0.06] text-white/40 hover:text-white/70 hover:border-white/[0.12] transition-colors"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {info && <info.Icon size={10} style={{ color: info.color }} />}
              <span>{tech}</span>
            </div>
          );
        })}
      </div>

      {/* Footer – show link if url exists, else role */}
      <div
        className="flex justify-between items-center pt-3 border-t border-white/[0.05]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <div className="flex items-center gap-2">
          {project.client && (
            <span className="text-[10px] text-[#bf5af2]/60">{project.client}</span>
          )}
          {project.company && (
            <span className="text-[10px] text-[#00e5ff]/60">{project.company}</span>
          )}
        </div>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] text-[#00e5ff]/70 hover:text-[#00e5ff] transition-colors"
          >
            <FiExternalLink size={10} />
            Visit
          </a>
        ) : (
          project.role && <span className="text-[10px] text-white/25">{project.role}</span>
        )}
      </div>
    </div>
  </motion.div>
);

// ─── EmptyState ───────────────────────────────────────────────────────────────

const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="col-span-full"
  >
    <div
      className="relative rounded-2xl border border-white/[0.06] p-16 text-center overflow-hidden"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 30%, rgba(0,229,255,0.05), transparent 60%)" }}
      />
      <div className="relative z-10">
        <div
          className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center border border-white/[0.06]"
          style={{ background: "rgba(0,229,255,0.06)" }}
        >
          <FiFolder size={28} style={{ color: "#00e5ff" }} />
        </div>
        <h3
          className="text-lg font-bold text-white/70 mb-2"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Projects in Progress
        </h3>
        <p className="text-white/35 text-sm max-w-md mx-auto leading-relaxed">
          Currently building exciting new projects. Stay tuned for innovative solutions
          leveraging modern backend and cloud technologies.
        </p>
      </div>
    </div>
  </motion.div>
);

// ─── ProjectsSection ──────────────────────────────────────────────────────────

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("collaborative");

  const activeTabDef = TABS.find((t) => t.id === activeTab)!;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

      <section
        id="projects"
        className="py-28 text-white"
        style={{ background: "#060810", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto text-center mb-14"
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
              Project Portfolio
            </h2>
            <p className="text-white/40 text-base">
              Technical solutions across different engagement models
            </p>
          </motion.div>

          {/* Tab navigation */}
          <div className="flex justify-center mb-12">
            <div
              className="flex gap-1 p-1 rounded-2xl border border-white/[0.06]"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {TABS.map(({ id, Icon, label, accent }) => {
                const isActive = activeTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: isActive ? accent : "rgba(255,255,255,0.35)",
                      background: isActive ? `${accent}10` : "transparent",
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="tab-bg"
                        className="absolute inset-0 rounded-xl border"
                        style={{ borderColor: `${accent}30`, background: `${accent}0c` }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                      />
                    )}
                    <Icon size={14} className="relative z-10" />
                    <span className="relative z-10">{label}</span>
                    <span
                      className="relative z-10 text-[10px] px-1.5 py-0.5 rounded-full border"
                      style={{
                        borderColor: isActive ? `${accent}30` : "rgba(255,255,255,0.08)",
                        color: isActive ? accent : "rgba(255,255,255,0.25)",
                        background: isActive ? `${accent}10` : "transparent",
                      }}
                    >
                      {PROJECTS[id].length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {PROJECTS[activeTab].length > 0 ? (
                PROJECTS[activeTab].map((project, i) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={i}
                    accent={activeTabDef.accent}
                  />
                ))
              ) : (
                <EmptyState />
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </>
  );
};

export default ProjectsSection;