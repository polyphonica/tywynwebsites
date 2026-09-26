import Link from "next/link";

export default function OfferCard({
  eyebrow,
  title,
  description,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="card-frame group flex flex-col gap-5 p-8 sm:p-10"
    >
      <span className="mono-label text-brass">{eyebrow}</span>
      <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
        {title}
      </h3>
      <p className="flex-1 text-[1.02rem] leading-relaxed text-ink-soft">
        {description}
      </p>
      <span className="mono-label inline-flex items-center gap-2 text-ink transition-colors group-hover:text-accent">
        {cta}
        <span aria-hidden className="transition-transform motion-safe:group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
