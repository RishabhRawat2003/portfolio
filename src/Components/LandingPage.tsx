"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { HERO_STACK, PROFILE, STATS } from "@/data/portfolio";
import { Container, EASE, Serif } from "./ui";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const LandingPage: React.FC = () => {
  return (
    <Container className="flex flex-col justify-between pb-12 pt-32 sm:pt-40 lg:min-h-[100svh]">
      <div className="grid items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <motion.div
            {...fadeUp(0)}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for work · Remote friendly
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="text-[clamp(2.75rem,7vw,5.75rem)] font-medium leading-[0.98] tracking-[-0.035em]"
          >
            Software engineer building <Serif>scalable</Serif> backends &amp;{" "}
            <Serif>thoughtful</Serif> web products.
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            I&apos;m {PROFILE.name}, a full-stack developer with 2+ years shaping web
            ecosystems — from fast, accessible frontends to cloud-native backends with
            queues, caches and real-time systems.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              Let&apos;s work together
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-fg"
            >
              See my work
              <FiArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="hidden lg:col-span-4 lg:block"
        >
          <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-card">
            <Image
              src="/rishabh.png"
              alt={`${PROFILE.name} — Software Engineer`}
              fill
              priority
              sizes="(min-width: 1024px) 360px, 0px"
              className="object-cover object-top grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.45 }}
        className="mt-20 border-t border-line pt-8"
      >
        <div className="grid grid-cols-3 gap-6">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-medium tracking-tight sm:text-5xl">{value}</p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 font-mono text-xs leading-relaxed text-muted">
          <span className="text-subtle">Stack — </span>
          {HERO_STACK.join("  ·  ")}
        </p>
      </motion.div>
    </Container>
  );
};

export default LandingPage;
