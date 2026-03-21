"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  FiMail, FiLinkedin, FiGithub, FiFileText,
  FiBriefcase, FiUser, FiSend,
} from "react-icons/fi";
import { toast } from "react-toastify";

// ─── Types ────────────────────────────────────────────────────────────────────

type SubjectOption = "" | "hire" | "freelance" | "collab" | "other";

interface FormData {
  name: string;
  email: string;
  subject: SubjectOption;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL;

const SUBJECT_OPTIONS: { value: SubjectOption; label: string }[] = [
  { value: "hire",      label: "Full-time Position" },
  { value: "freelance", label: "Freelance Project" },
  { value: "collab",    label: "Collaboration" },
  { value: "other",     label: "Other Inquiry" },
];

const INITIAL_FORM: FormData = { name: "", email: "", subject: "", message: "" };

// ─── InputField ──────────────────────────────────────────────────────────────

interface InputFieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

const InputField = ({ id, label, error, children }: InputFieldProps) => (
  <div>
    <label
      htmlFor={id}
      className="block text-xs mb-2"
      style={{
        color: "rgba(255,255,255,0.4)",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {label}
    </label>
    {children}
    {error && (
      <p
        id={`${id}-error`}
        className="text-[11px] mt-1.5"
        style={{ color: "#ff375f", fontFamily: "'JetBrains Mono', monospace" }}
      >
        ✕ {error}
      </p>
    )}
  </div>
);

// ─── ContactSection ───────────────────────────────────────────────────────────

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors]     = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.name.trim())                              e.name    = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!formData.subject)                                  e.subject = "Subject is required";
    if (!formData.message.trim())                           e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "subject" ? (value as SubjectOption) : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // shared input class/style
  const inputBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "10px",
    color: "rgba(255,255,255,0.8)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    width: "100%",
    padding: "10px 14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');

        .contact-input:focus { border-color: rgba(0,229,255,0.35) !important; }
        .contact-input.err   { border-color: rgba(255,55,95,0.5)  !important; }
        .contact-input::placeholder { color: rgba(255,255,255,0.2); }
        .contact-select option { background: #0d1117; color: rgba(255,255,255,0.8); }
      `}</style>

      <section
        id="contact"
        className="py-28 text-white"
        style={{ background: "#060810", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* ── Heading ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto text-center mb-16"
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
              Get In Touch
            </h2>
            <p className="text-white/40 text-base">
              Let&apos;s discuss how I can help bring your ideas to life
            </p>
          </motion.div>

          {/* ── Grid ─────────────────────────────────────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* ── Left — channels ──────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5"
            >
              {/* Career */}
              <ChannelCard accent="#00e5ff" Icon={FiBriefcase} title="Career Opportunities">
                <p className="text-white/40 text-sm mb-5 leading-relaxed">
                  Looking for a dedicated full-stack developer to join your team?
                </p>
                <a
                  href="mailto:rajputrishabh359@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm border transition-colors duration-200 hover:border-[#00e5ff]/40 hover:text-[#00e5ff]"
                  style={{
                    borderColor: "rgba(0,229,255,0.2)",
                    color: "#00e5ff",
                    background: "rgba(0,229,255,0.06)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                  }}
                >
                  <FiFileText size={13} />
                  Schedule Discussion
                </a>
              </ChannelCard>

              {/* Collaboration */}
              <ChannelCard accent="#bf5af2" Icon={FiUser} title="Project Collaboration">
                <p className="text-white/40 text-sm mb-5 leading-relaxed">
                  Have an open-source idea or side project? Let&apos;s build together.
                </p>
                <a
                  href="https://github.com/RishabhRawat2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm border transition-colors duration-200"
                  style={{
                    borderColor: "rgba(191,90,242,0.2)",
                    color: "#bf5af2",
                    background: "rgba(191,90,242,0.06)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                  }}
                >
                  <FiGithub size={13} />
                  GitHub Profile
                </a>
              </ChannelCard>

              {/* Direct connect */}
              <ChannelCard accent="#ff375f" Icon={FiMail} title="Direct Connect">
                <p className="text-white/40 text-sm mb-5 leading-relaxed">
                  Prefer a direct line? Reach me on LinkedIn or via email.
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      href: "https://www.linkedin.com/in/rishabh-rawat-371453228/",
                      Icon: FiLinkedin,
                      label: "LinkedIn",
                      accent: "#00e5ff",
                    },
                    {
                      href: "mailto:rajputrishabh359@gmail.com",
                      Icon: FiMail,
                      label: "Email",
                      accent: "#bf5af2",
                    },
                  ].map(({ href, Icon, label, accent }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs transition-colors duration-200"
                      style={{
                        borderColor: `${accent}20`,
                        color: accent,
                        background: `${accent}0a`,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  ))}
                </div>
              </ChannelCard>
            </motion.div>

            {/* ── Right — form ──────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/[0.06] p-6 sm:p-8"
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.05]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span
                  className="ml-3 text-[11px] text-white/20"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  contact.form
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* Name */}
                <InputField id="name" label="// your_name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rishabh Rawat"
                    aria-invalid={!!errors.name}
                    aria-describedby="name-error"
                    className={`contact-input${errors.name ? " err" : ""}`}
                    style={inputBase}
                  />
                </InputField>

                {/* Email */}
                <InputField id="email" label="// email_address" error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                    className={`contact-input${errors.email ? " err" : ""}`}
                    style={inputBase}
                  />
                </InputField>

                {/* Subject */}
                <InputField id="subject" label="// subject" error={errors.subject}>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-invalid={!!errors.subject}
                    aria-describedby="subject-error"
                    className={`contact-input contact-select${errors.subject ? " err" : ""}`}
                    style={{
                      ...inputBase,
                      color: formData.subject
                        ? "rgba(255,255,255,0.8)"
                        : "rgba(255,255,255,0.2)",
                    }}
                  >
                    <option value="" disabled>Select a subject</option>
                    {SUBJECT_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </InputField>

                {/* Message */}
                <InputField id="message" label="// message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    aria-invalid={!!errors.message}
                    aria-describedby="message-error"
                    className={`contact-input${errors.message ? " err" : ""}`}
                    style={{ ...inputBase, resize: "none" }}
                  />
                </InputField>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                  className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-opacity"
                  style={{
                    background: "linear-gradient(135deg, #00e5ff, #bf5af2)",
                    color: "#060810",
                    opacity: isSubmitting ? 0.6 : 1,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  <FiSend size={14} />
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </motion.button>

              </form>
            </motion.div>
          </div>

          {/* ── CTA footer ───────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-white/30 text-sm mb-4">
              Want to see my full qualifications?
            </p>
            <motion.a
              href="/Rishabh_Rawat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm border transition-colors duration-200"
              style={{
                borderColor: "rgba(0,229,255,0.2)",
                color: "#00e5ff",
                background: "rgba(0,229,255,0.06)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <FiFileText size={14} />
              Download Resume
            </motion.a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

// ─── ChannelCard ──────────────────────────────────────────────────────────────

interface ChannelCardProps {
  accent: string;
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  title: string;
  children: React.ReactNode;
}

const ChannelCard = ({ accent, Icon, title, children }: ChannelCardProps) => (
  <motion.div
    whileHover={{ y: -3 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    className="group relative rounded-2xl border border-white/[0.06] p-6 overflow-hidden transition-all duration-300 hover:border-white/[0.12]"
    style={{ background: "rgba(255,255,255,0.025)" }}
  >
    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: `radial-gradient(circle at 0% 50%, ${accent}0c, transparent 65%)` }}
    />
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${accent}14` }}
        >
          <Icon size={15} style={{ color: accent }} />
        </div>
        <h3
          className="text-sm font-bold text-white/75"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h3>
      </div>
      {children}
    </div>
  </motion.div>
);

export default ContactSection;