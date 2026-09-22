import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ClosingCta from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "About — Tywyn Websites",
  description: "Recorder teacher and performer, QA and test-automation professional, web developer.",
};

export default function AboutPage() {
  return (
    <>
      <section className="grain border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
          <p className="mono-label mb-5 text-brass">About</p>
          <h1 className="text-balance max-w-2xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Two disciplines, one way of working.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,280px)_1fr] md:gap-14">
          <ImagePlaceholder label="Portrait photo" aspect="aspect-[4/5]" />
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink-soft">
            <p>
              I&apos;m Michael Piraner — a recorder teacher and performer
              working in early music and historical performance, and
              separately a QA and test-automation professional with hands-on
              experience in tools like Playwright.
            </p>
            <p>
              Most web builders who work with musicians and arts
              organisations don&apos;t understand that world from the
              inside. Most people who understand that world can&apos;t build
              a real platform. I sit in both places, which is why
              recorder-ed and Polyphonica are the same underlying system
              doing two different jobs for two real businesses.
            </p>
            <p>
              [Draft copy — replace with more detail on background,
              teaching, performing, and how the QA/test-automation
              experience shapes how projects get built and tested.]
            </p>
          </div>
        </div>
      </section>

      <ClosingCta prompt="Want to work together?" />
    </>
  );
}
