import type { Metadata } from "next";
import OfferPageHero from "@/components/OfferPageHero";
import ProjectCard from "@/components/ProjectCard";
import ClosingCta from "@/components/ClosingCta";
import { simpleSitesProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Simple sites — Tywyn Websites",
  description:
    "Straightforward websites for music teachers, ensembles, and small businesses.",
};

export default function SimpleSitesPage() {
  return (
    <>
      <OfferPageHero
        eyebrow="Offer 01 — Simple sites"
        title="A clear web presence, without the overhead."
        description="For teachers, ensembles, and small businesses who need a straightforward site — fixed-price build, with an optional monthly retainer for hosting, backups, and small edits."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {simpleSitesProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <ClosingCta prompt="Have a project like this?" />
    </>
  );
}
