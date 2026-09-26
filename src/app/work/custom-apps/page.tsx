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
        title="For anything a starter site can't do."
        description="Bookings, logins, courses, payments and refunds, running on your own site, with no booking-platform commission or subscriptions and no juggling of separate tools. Built on components already running real businesses, so you pay for what's specific to you, not for reinventing the basics. Scoped project plus an ongoing support retainer."
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
