import Link from "next/link";
import OfferCard from "@/components/OfferCard";
import ProjectCard from "@/components/ProjectCard";
import { homepageSelectedWork, prototypes } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section className="grain border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <p className="mono-label mb-6 text-brass">
            Early music &amp; performing arts — web development
          </p>
          <h1 className="text-balance max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Websites and apps built by musicians, for musicians.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-soft">
            I&apos;m a private music teacher and performer with a background in
            Quality Assurance, test automation, and software development. This
            means I understand both sides: how the software works, and what a
            small arts organisation actually needs from it.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/work/starter-sites" className="btn-primary">
              See the work
            </Link>
            <Link href="/prototypes" className="btn-secondary">
              See prototypes
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mono-label mb-3 text-brass">Two ways to work together</p>
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Pick the lane that fits
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <OfferCard
            eyebrow="Offer 01"
            title="Starter sites"
            description="A proven starter template, customised with your content and look — for teachers, ensembles, and small businesses. Fixed price, with an optional monthly retainer for hosting, backups, and small edits."
            href="/work/starter-sites"
            cta="View starter sites"
          />
          <OfferCard
            eyebrow="Offer 02"
            title="Custom apps"
            description="For anything that needs bookings, logins, marketplaces, scheduling, or payments — scoped project plus an ongoing support retainer."
            href="/work/custom-apps"
            cta="View custom apps"
          />
        </div>
      </section>

      <section className="border-t border-rule bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="mono-label mb-3 text-brass">Selected work</p>
          <h2 className="mb-10 font-display text-2xl font-medium text-ink sm:text-3xl">
            A cross-section of starter sites and custom apps
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {homepageSelectedWork.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="card-frame flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="mono-label mb-3 text-brass">Self-initiated work</p>
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Prototypes
            </h2>
            <p className="mt-3 max-w-lg text-ink-soft">
              Apps built to explore ideas rather than for a client —{" "}
              {prototypes.length} so far, some on their way to becoming public
              demos.
            </p>
          </div>
          <Link href="/prototypes" className="btn-secondary shrink-0">
            See prototypes →
          </Link>
        </div>
      </section>
    </>
  );
}
