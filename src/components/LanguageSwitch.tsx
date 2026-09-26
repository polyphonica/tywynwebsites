"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Only /de is German, so the switch always points at the other language's
// landing page rather than a translated version of the current page.
export default function LanguageSwitch({ className }: { className?: string }) {
  const isGerman = usePathname().startsWith("/de");

  return isGerman ? (
    <Link href="/" lang="en" hrefLang="en" className={className}>
      English
    </Link>
  ) : (
    <Link href="/de" lang="de" hrefLang="de" className={className}>
      Deutsch
    </Link>
  );
}
