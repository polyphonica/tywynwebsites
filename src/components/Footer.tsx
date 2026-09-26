import Link from "next/link";
import ContactLink from "./ContactLink";
import LanguageSwitch from "./LanguageSwitch";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono-label text-ink-soft">
          © {new Date().getFullYear()} Tywyn Websites
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Link
            href="/work/starter-sites"
            className="mono-label text-ink-soft transition-colors hover:text-accent"
          >
            Starter sites
          </Link>
          <Link
            href="/work/custom-apps"
            className="mono-label text-ink-soft transition-colors hover:text-accent"
          >
            Custom apps
          </Link>
          <ContactLink
            label="Get in touch"
            className="mono-label text-ink-soft transition-colors hover:text-accent"
          />
          <LanguageSwitch className="mono-label text-ink-soft transition-colors hover:text-accent" />
        </div>
      </div>
    </footer>
  );
}
