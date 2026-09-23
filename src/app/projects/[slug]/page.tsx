import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import ClosingCta from "@/components/ClosingCta";
import { tagStyle } from "@/lib/tagStyles";
import { getProjectDetail, projectDetails } from "@/data/projects";

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectDetail(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Tywyn Websites`,
    description: project.intro,
  };
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProjectDetail(slug);
  if (!project) notFound();

  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
          <Link
            href="/work/simple-sites"
            className="mono-label mb-8 inline-block text-ink-soft transition-colors hover:text-accent"
          >
            ← Back to work
          </Link>
          <p className="mono-label mb-5 text-brass">Case study</p>
          <h1 className="text-balance max-w-2xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {project.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className={`mono-label border px-2 py-1 ${tagStyle(i)}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Visit the live site ↗
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <ScreenshotGallery screenshots={project.screenshots} />
        <div className="mt-12 flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-ink-soft">
          {project.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <ClosingCta prompt="Have a project like this?" />
    </>
  );
}
