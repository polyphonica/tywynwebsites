import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono-label text-ink-soft">
          © {new Date().getFullYear()} Tywyn Websites
        </p>
        <div className="flex gap-6">
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
          <Link
            href="/contact"
            className="mono-label text-ink-soft transition-colors hover:text-accent"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
