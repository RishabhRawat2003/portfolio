import { PROFILE } from "@/data/portfolio";

const LINKS = [
  { label: "GitHub", href: PROFILE.github },
  { label: "LinkedIn", href: PROFILE.linkedin },
  { label: "Email", href: `mailto:${PROFILE.email}` },
  { label: "Resume", href: PROFILE.resume },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-4xl italic tracking-tight sm:text-5xl">{PROFILE.name}</p>
          <p className="mt-3 text-sm text-muted">
            © {year} · Crafted with care, one commit at a time.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
