import Link from "next/link";

export default function ClosingCta({ prompt }: { prompt: string }) {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
        <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
          {prompt}
        </h2>
        <Link href="/contact" className="btn-primary shrink-0">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
