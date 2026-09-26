import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact — Tywyn Websites",
  description: "Get in touch about a starter site or a custom app.",
};

export default function ContactPage() {
  return (
    <section className="grain border-b border-rule">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 sm:pt-20 md:grid-cols-2">
        <div>
          <p className="mono-label mb-5 text-brass">Contact</p>
          <h1 className="text-balance max-w-md font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Tell me about the project.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Whether it&apos;s a starter site or something that needs
            bookings and payments, the first step is the same: a free,
            no-obligation video call. We&apos;ll talk through what you need,
            and I&apos;ll give you a clear price.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
