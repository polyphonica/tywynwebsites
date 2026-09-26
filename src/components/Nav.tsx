import Link from "next/link";
import ContactLink from "./ContactLink";
import LanguageSwitch from "./LanguageSwitch";

const links = [
  { href: "/work/starter-sites", label: "Starter sites" },
  { href: "/work/custom-apps", label: "Custom apps" },
  { href: "/prototypes", label: "Prototypes" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-tight text-ink"
        >
          Tywyn Websites
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mono-label text-ink-soft transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <ContactLink
            label="Contact"
            className="mono-label text-ink-soft transition-colors hover:text-accent"
          />
          <LanguageSwitch className="mono-label text-ink-soft transition-colors hover:text-accent" />
        </nav>
        <div className="flex items-center gap-5 md:hidden">
          <LanguageSwitch className="mono-label text-ink-soft transition-colors hover:text-accent" />
          <ContactLink label="Contact" className="btn-secondary" />
        </div>
      </div>
    </header>
  );
}
