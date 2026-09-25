import type { Metadata } from "next";
import OfferPageHero from "@/components/OfferPageHero";
import ProjectCard from "@/components/ProjectCard";
import ClosingCta from "@/components/ClosingCta";
import { customAppsProjects } from "@/data/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/work/custom-apps" },
  title: "Custom apps — Tywyn Websites",
  description:
    "Custom web applications with bookings, logins, marketplaces, scheduling, or payments.",
};

export default function CustomAppsPage() {
  return (
    <>
      <OfferPageHero
        eyebrow="Offer 02 — Custom apps"
        title="For anything a brochure site can't do."
        description="Bookings, logins, marketplaces, scheduling, payments — scoped project plus an ongoing support retainer. recorder-ed and Polyphonica are the same platform, reconfigured for two different real businesses."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {customAppsProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <ClosingCta prompt="Need something built, not just designed?" />
    </>
  );
}
