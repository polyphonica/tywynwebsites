export default function OfferPageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="grain border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
        <p className="mono-label mb-5 text-brass">{eyebrow}</p>
        <h1 className="text-balance max-w-2xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          {description}
        </p>
      </div>
    </section>
  );
}
