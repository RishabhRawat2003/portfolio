"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio";
import { Container, EASE, Reveal, SectionHeader, Serif, Tag } from "./ui";

type Filter = ProjectCategory | "all";

const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  personal: "Personal",
  collaborative: "Team",
  freelancing: "Freelance",
};

// ─── Featured card (flagship product) ─────────────────────────────────────────

const FeaturedCard = ({ project }: { project: Project }) => (
  <Reveal>
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative grid overflow-hidden rounded-3xl border border-line bg-card p-8 transition-colors hover:border-fg sm:p-12 lg:grid-cols-12 lg:gap-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent opacity-10 blur-3xl transition-opacity duration-700 group-hover:opacity-20"
      />

      <div className="relative lg:col-span-8">
        <div className="mb-10 flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="rounded-full bg-accent px-3 py-1 text-white">Featured</span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {project.status ?? "Live"}
          </span>
          <span className="text-subtle">
            {project.date} · {CATEGORY_LABEL[project.category]}
          </span>
        </div>
        <h3 className="text-5xl font-medium tracking-tight sm:text-6xl">{project.title}</h3>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{project.description}</p>
        <div className="mt-8 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      <div className="relative mt-12 flex flex-col justify-between gap-10 border-t border-line pt-8 lg:col-span-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
        {project.metric && (
          <div>
            <p className="font-serif text-7xl italic leading-none text-accent sm:text-8xl">
              {project.metric.value}
            </p>
            <p className="mt-3 text-muted">{project.metric.label}</p>
          </div>
        )}
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity group-hover:opacity-85">
          Try {project.title}
          <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  </Reveal>
);

// ─── Spotlight card ───────────────────────────────────────────────────────────

const SpotlightCard = ({ project, index }: { project: Project; index: number }) => {
  const body = (
    <>
      <div className="mb-16 flex h-9 items-center justify-between font-mono text-xs text-muted">
        <span>
          {project.date} · {CATEGORY_LABEL[project.category]}
        </span>
        {project.url ? (
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-all group-hover:border-fg group-hover:bg-fg group-hover:text-bg">
            <FiArrowUpRight size={16} />
          </span>
        ) : (
          (project.team ?? project.role) && <span>{project.team ?? project.role}</span>
        )}
      </div>
      <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">{project.title}</h3>
      <p className="mt-4 flex-1 leading-relaxed text-muted">{project.description}</p>
      <div className="mt-8 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 6).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        {project.tech.length > 6 && <Tag>+{project.tech.length - 6}</Tag>}
      </div>
    </>
  );
  const className =
    "group flex h-full flex-col rounded-3xl border border-line bg-card p-7 transition-colors sm:p-9";

  return (
    <Reveal delay={index * 0.1}>
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${className} hover:border-fg`}
        >
          {body}
        </a>
      ) : (
        <div className={className}>{body}</div>
      )}
    </Reveal>
  );
};

// ─── Index row (expandable) ───────────────────────────────────────────────────

const ProjectRow = ({
  project,
  open,
  onToggle,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
}) => (
  <motion.li
    layout="position"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="border-b border-line"
  >
    <button
      onClick={onToggle}
      aria-expanded={open}
      className="group grid w-full grid-cols-[3.5rem_1fr_2rem] items-center gap-4 py-6 text-left sm:grid-cols-[4.5rem_1fr_12rem_6rem_2rem]"
    >
      <span className="font-mono text-xs text-muted">{project.date}</span>
      <span className="text-lg font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
        {project.title}
      </span>
      <span className="hidden text-sm text-muted sm:block">{project.role ?? "Creator"}</span>
      <span className="hidden font-mono text-xs text-muted sm:block">
        {CATEGORY_LABEL[project.category]}
      </span>
      <motion.span
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted group-hover:border-fg group-hover:text-fg"
      >
        <FiPlus size={14} />
      </motion.span>
    </button>

    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="overflow-hidden"
        >
          <div className="grid gap-6 pb-8 sm:grid-cols-[4.5rem_1fr] sm:gap-4">
            <span className="hidden sm:block" />
            <div className="max-w-3xl">
              <p className="leading-relaxed text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {(project.team || project.status || project.url) && (
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                  {project.team && <span>Team · {project.team}</span>}
                  {project.status && <span>{project.status}</span>}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-fg underline decoration-line underline-offset-4 hover:decoration-fg"
                    >
                      Visit live site <FiArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.li>
);

// ─── ProjectsSection ──────────────────────────────────────────────────────────

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  const featured = PROJECTS.find((p) => p.highlight);
  const spotlight = PROJECTS.filter((p) => p.featured && !p.highlight).slice(0, 2);
  const visible = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  const countFor = (id: Filter) =>
    id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === id).length;

  return (
    <Container className="py-28 sm:py-36">
      <SectionHeader
        index="02"
        label="Work"
        title={
          <>
            Selected projects, <Serif>shipped</Serif> to real users.
          </>
        }
      />

      {featured && <FeaturedCard project={featured} />}

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {spotlight.map((project, i) => (
          <SpotlightCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <div className="mt-28">
        <Reveal className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Project index
          </h3>
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter projects">
            {PROJECT_CATEGORIES.map(({ id, label }) => {
              const isActive = filter === id;
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setFilter(id);
                    setOpenTitle(null);
                  }}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "border-fg bg-fg text-bg"
                      : "border-line text-muted hover:border-fg hover:text-fg"
                  }`}
                >
                  {label}
                  <span className="ml-1.5 font-mono text-[11px] opacity-60">{countFor(id)}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="hidden grid-cols-[4.5rem_1fr_12rem_6rem_2rem] gap-4 border-b border-line pb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle sm:grid">
          <span>Year</span>
          <span>Project</span>
          <span>Role</span>
          <span>Type</span>
          <span />
        </div>

        <ul>
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <ProjectRow
                key={project.title}
                project={project}
                open={openTitle === project.title}
                onToggle={() =>
                  setOpenTitle((cur) => (cur === project.title ? null : project.title))
                }
              />
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </Container>
  );
};

export default ProjectsSection;
