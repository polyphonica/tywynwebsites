"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// On the German landing page, contact links go to its own German form
// instead of the English contact page.
export default function ContactLink({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const isGerman = usePathname().startsWith("/de");

  return isGerman ? (
    <Link href="/de#kontakt" lang="de" className={className}>
      Kontakt
    </Link>
  ) : (
    <Link href="/contact" className={className}>
      {label}
    </Link>
  );
}
