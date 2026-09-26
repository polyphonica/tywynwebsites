"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import ContactLink from "./ContactLink";

const linkClass =
  "mono-label block border-b border-rule py-4 text-ink transition-colors hover:text-accent";

export default function MobileMenu({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isGerman = usePathname().startsWith("/de");

  function close() {
    setOpen(false);
  }

  return (
    <div
      className="md:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          close();
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="btn-secondary"
        lang={isGerman ? "de" : undefined}
      >
        {isGerman ? "Menü" : "Menu"}
      </button>
      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 border-b border-rule bg-paper px-6 pb-4"
      >
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={close} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
          <li onClick={close}>
            <ContactLink label="Contact" className={linkClass} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
