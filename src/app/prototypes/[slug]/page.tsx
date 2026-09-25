import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import ClosingCta from "@/components/ClosingCta";
import { tagStyle } from "@/lib/tagStyles";
import { getPrototype, prototypes } from "@/data/projects";

export function generateStaticParams() {
  return prototypes.map((prototype) => ({ slug: prototype.slug }));
}

export async function generateMetadata(
  props: PageProps<"/prototypes/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const prototype = getPrototype(slug);
  if (!prototype) return {};
  return {
    title: `${prototype.name} — Tywyn Websites`,
    description: prototype.summary,
    alternates: { canonical: `/prototypes/${slug}` },
  };
}

export default async function PrototypeDetailPage(
  props: PageProps<"/prototypes/[slug]">,
) {
  const { slug } = await props.params;
  const prototype = getPrototype(slug);
  if (!prototype) notFound();

  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
          <Link
            href="/prototypes"
            className="mono-label mb-8 inline-block text-ink-soft transition-colors hover:text-accent"
          >
            ← Back to prototypes
          </Link>
          <p className="mono-label mb-5 text-brass">Prototype</p>
          <h1 className="text-balance max-w-2xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {prototype.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {prototype.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {prototype.tags.map((tag, i) => (
              <span
                key={tag}
                className={`mono-label border px-2 py-1 ${tagStyle(i)}`}
              >
                {tag}
              </span>
            ))}
          </div>
          {prototype.liveUrl ? (
            <a
              href={prototype.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex"
            >
              Visit the prototype ↗
            </a>
          ) : (
            <p className="mono-label mt-8 text-brass">{prototype.status}</p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <ScreenshotGallery screenshots={prototype.screenshots} />
        <div className="mt-12 flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-ink-soft">
          {prototype.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <ClosingCta prompt="Curious what this could become?" />
    </>
  );
}
