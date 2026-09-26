import type { Testimonial } from "@/data/projects";

export default function TestimonialQuote({
  testimonial,
  language = "en",
}: {
  testimonial: Testimonial;
  language?: "en" | "de";
}) {
  const german = language === "de" ? testimonial.de : undefined;
  const { name, organisation } = testimonial;
  const quote = german?.quote ?? testimonial.quote;
  const role = german ? german.role : testimonial.role;
  const credit = [role, organisation].filter(Boolean).join(", ");
  const [open, close] = german ? ["\u201e", "\u201c"] : ["\u201c", "\u201d"];

  return (
    <figure className="border-l-2 border-accent pl-6 sm:pl-8">
      <blockquote className="font-display text-xl leading-snug text-ink sm:text-2xl">
        <p>
          {open}
          {quote}
          {close}
        </p>
      </blockquote>
      <figcaption className="mono-label mt-5 text-ink-soft">
        {name ? (
          <>
            <span className="text-ink">{name}</span> — {credit}
          </>
        ) : (
          credit
        )}
      </figcaption>
    </figure>
  );
}
