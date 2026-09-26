"use client";

import { usePathname } from "next/navigation";

// Hidden until focused: the first Tab on any page offers a jump past the nav.
export default function SkipLink() {
  const isGerman = usePathname().startsWith("/de");

  return (
    <a
      href="#main"
      lang={isGerman ? "de" : undefined}
      className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-4 focus:py-3 focus:text-ink focus:border focus:border-accent mono-label"
    >
      {isGerman ? "Zum Inhalt springen" : "Skip to content"}
    </a>
  );
}
