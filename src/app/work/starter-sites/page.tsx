import type { Metadata } from "next";
import OfferPageHero from "@/components/OfferPageHero";
import ProjectCard from "@/components/ProjectCard";
import ClosingCta from "@/components/ClosingCta";
import TestimonialQuote from "@/components/TestimonialQuote";
import { projectDetails, starterSitesProjects } from "@/data/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/work/starter-sites" },
  title: "Starter sites — Tywyn Websites",
  description:
    "Websites built on a proven starter template and customised for music teachers, ensembles, and small businesses.",
};

export default function StarterSitesPage() {
  const testimonials = projectDetails.flatMap((detail) =>
    detail.testimonial &&
    starterSitesProjects.some((project) => project.slug === detail.slug)
      ? [detail.testimonial]
      : [],
  );

  return (
    <>
      <OfferPageHero
        eyebrow="Offer 01 — Starter sites"
        title="A proven foundation, made yours."
        description="Your site starts from a tried-and-tested template, then is customised with your content, images, and look. That keeps it quick to launch and fixed in price, with an optional monthly retainer for hosting, backups, and small edits. The price is agreed in a free, no-obligation video call before any work starts."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {starterSitesProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {testimonials.length > 0 && (
          <div className="mt-16 flex max-w-3xl flex-col gap-12">
            {testimonials.map((testimonial) => (
              <TestimonialQuote
                key={testimonial.quote}
                testimonial={testimonial}
              />
            ))}
          </div>
        )}
      </section>
      <ClosingCta prompt="Have a project like this?" />
    </>
  );
}
