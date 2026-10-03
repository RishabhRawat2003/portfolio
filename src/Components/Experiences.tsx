"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CURRENT_STATUS, EXPERIENCES, OPEN_TO } from "@/data/portfolio";
import { Container, EASE, Reveal, SectionHeader, Serif } from "./ui";

export const ExperienceSection: React.FC = () => {
  return (
    <Container className="py-28 sm:py-36">
      <SectionHeader
        index="03"
        label="Experience"
        title={
          <>
            Where I&apos;ve been <Serif>building.</Serif>
          </>
        }
      />

      <ol className="border-b border-line">
        {EXPERIENCES.map((exp, i) => (
          <motion.li
            key={exp.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
            className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-8"
          >
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-muted">
                  {exp.start} — {exp.end}
                </p>
                {exp.current && (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Current
                  </span>
                )}
              </div>

              <div className="md:col-span-9">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-line">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      sizes="44px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{exp.title}</h3>
                    <p className="text-sm text-muted">{exp.company}</p>
                  </div>
                </div>
                <p className="mt-5 max-w-3xl leading-relaxed text-muted">{exp.description}</p>
                <p className="mt-5 font-mono text-xs leading-relaxed text-subtle">
                  {exp.skills.join("  ·  ")}
                </p>
              </div>
          </motion.li>
        ))}
      </ol>

      <Reveal className="mt-16 grid gap-8 rounded-3xl bg-card p-8 sm:p-10 md:grid-cols-12">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent md:col-span-3">
          Right now
        </p>
        <div className="md:col-span-9">
          <p className="text-lg leading-relaxed">{CURRENT_STATUS}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {OPEN_TO.map((label) => (
              <span key={label} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                {label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Container>
  );
};
