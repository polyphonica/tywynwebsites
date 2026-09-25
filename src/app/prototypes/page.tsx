import type { Metadata } from "next";
import OfferPageHero from "@/components/OfferPageHero";
import PrototypeCard from "@/components/PrototypeCard";
import ClosingCta from "@/components/ClosingCta";
import { prototypes } from "@/data/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/prototypes" },
  title: "Prototypes — Tywyn Websites",
  description: "Self-initiated app builds, on their way to becoming public demos.",
};

export default function PrototypesPage() {
  return (
    <>
      <OfferPageHero
        eyebrow="Prototypes"
        title="Self-initiated, not commissioned."
        description="These are apps built to explore ideas rather than paid client work — kept separate so they're never mistaken for a delivered project. Live demos are coming as each one is cleaned up for public viewing."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {prototypes.map((prototype) => (
            <PrototypeCard key={prototype.slug} prototype={prototype} />
          ))}
        </div>
      </section>
      <ClosingCta prompt="Curious what these could become?" />
    </>
  );
}
