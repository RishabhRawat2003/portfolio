"use client";

import { ABOUT, PROFILE, SKILL_GROUPS } from "@/data/portfolio";
import { Container, Reveal, SectionHeader, Serif } from "./ui";

const FACTS = [
  { label: "Role", value: PROFILE.role },
  { label: "Status", value: "Open to work" },
  { label: "Experience", value: "2.5+ years professional" },
  { label: "Coding", value: "3.5+ years" },
];

const AboutPage: React.FC = () => {
  return (
    <Container className="py-28 sm:py-36">
      <SectionHeader
        index="01"
        label="About"
        title={
          <>
            Engineering systems that are <Serif>built to last.</Serif>
          </>
        }
      />

      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <dl className="divide-y divide-line border-y border-line">
            {FACTS.map(({ label, value }) => (
              <div key={label} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {label}
                </dt>
                <dd className="text-right text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <p className="text-xl leading-relaxed tracking-tight sm:text-2xl">{ABOUT.intro}</p>
          <div className="mt-10 rounded-2xl bg-card p-6">
            <p className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Current focus
            </p>
            <p className="leading-relaxed text-muted">{ABOUT.focus}</p>
          </div>
        </Reveal>
      </div>

      <div className="mt-28">
        <Reveal>
          <h3 className="mb-10 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Toolkit
          </h3>
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {SKILL_GROUPS.map(({ title, skills }, i) => (
            <Reveal key={title} delay={i * 0.08} className="border-t border-fg pt-5">
              <h4 className="mb-5 text-lg font-medium tracking-tight">{title}</h4>
              <ul className="space-y-2.5">
                {skills.map((skill) => (
                  <li key={skill} className="text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-32">
        <figure className="mx-auto max-w-4xl text-center">
          <blockquote className="font-serif text-3xl italic leading-snug sm:text-4xl md:text-5xl">
            &ldquo;{ABOUT.philosophy}&rdquo;
          </blockquote>
          <figcaption className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Development philosophy
          </figcaption>
        </figure>
      </Reveal>
    </Container>
  );
};

export default AboutPage;
