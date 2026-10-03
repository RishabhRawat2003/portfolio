"use client";

import axios from "axios";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";
import { PROFILE } from "@/data/portfolio";
import { Container, Reveal, SectionHeader, Serif } from "./ui";

// ─── Types ────────────────────────────────────────────────────────────────────

type SubjectOption = "" | "hire" | "freelance" | "collab" | "other";

interface FormData {
  name: string;
  email: string;
  subject: SubjectOption;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

// ─── Constants ────────────────────────────────────────────────────────────────

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL;

const SUBJECT_OPTIONS: { value: Exclude<SubjectOption, "">; label: string }[] = [
  { value: "hire", label: "Full-time position" },
  { value: "freelance", label: "Freelance project" },
  { value: "collab", label: "Collaboration" },
  { value: "other", label: "Something else" },
];

const INITIAL_FORM: FormData = { name: "", email: "", subject: "", message: "" };

const CHANNELS = [
  { label: "LinkedIn", note: "Career opportunities", href: PROFILE.linkedin },
  { label: "GitHub", note: "Open source & side projects", href: PROFILE.github },
  { label: "Resume", note: "Full qualifications (PDF)", href: PROFILE.resume },
];

const inputClass = (hasError?: string) =>
  `w-full border-b bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-subtle focus:border-fg ${
    hasError ? "border-red-500" : "border-line"
  }`;

// ─── Field ────────────────────────────────────────────────────────────────────

const Field = ({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div>
    <label htmlFor={id} className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-2 text-xs text-red-500">
        {error}
      </p>
    )}
  </div>
);

// ─── ContactSection ───────────────────────────────────────────────────────────

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!formData.subject) e.subject = "Pick a subject";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await axios.post(`${BACKEND}/contact`, formData);
      if (res.status === 200) {
        toast.success("Message sent successfully");
        setFormData(INITIAL_FORM);
        setErrors({});
      }
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const setField = <K extends keyof FormData>(name: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setField(name as "name" | "email" | "message", value);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <Container className="py-28 sm:py-36">
      <SectionHeader
        index="04"
        label="Contact"
        title={
          <>
            Have a project in mind? <Serif>Let&apos;s talk.</Serif>
          </>
        }
      />

      <div className="grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Email</p>
          <div className="mt-3 flex items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="break-all text-xl font-medium tracking-tight underline decoration-line underline-offset-8 transition-colors hover:decoration-fg sm:text-2xl"
            >
              {PROFILE.email}
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-fg hover:text-fg"
            >
              {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
            </button>
          </div>

          <ul className="mt-12 border-t border-line">
            {CHANNELS.map(({ label, note, href }) => (
              <li key={label} className="border-b border-line">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5"
                >
                  <span>
                    <span className="block text-lg tracking-tight">{label}</span>
                    <span className="text-sm text-muted">{note}</span>
                  </span>
                  <FiArrowUpRight
                    size={18}
                    className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={handleSubmit} noValidate className="space-y-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                  className={inputClass(errors.name)}
                />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                  className={inputClass(errors.email)}
                />
              </Field>
            </div>

            <fieldset>
              <legend className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                I&apos;m reaching out about
              </legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {SUBJECT_OPTIONS.map(({ value, label }) => {
                  const selected = formData.subject === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setField("subject", value)}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        selected
                          ? "border-fg bg-fg text-bg"
                          : "border-line text-muted hover:border-fg hover:text-fg"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              {errors.subject && <p className="mt-2 text-xs text-red-500">{errors.subject}</p>}
            </fieldset>

            <Field id="message" label="Message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity…"
                rows={4}
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
                className={`${inputClass(errors.message)} resize-none`}
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-7 py-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-85 disabled:opacity-50"
            >
              {isSubmitting ? "Sending…" : "Send message"}
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>
      </div>
    </Container>
  );
};

export default ContactSection;
