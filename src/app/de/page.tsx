import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  alternates: {
    canonical: "/de",
    languages: { en: "/", de: "/de", "x-default": "/" },
  },
  openGraph: {
    siteName: "Tywyn Websites",
    locale: "de_DE",
    type: "website",
  },
  title: "Websites für Praxen und kleine Unternehmen — Tywyn Websites",
  description:
    "Klare, professionelle Websites auf Deutsch für Praxen, Selbstständige und kleine Unternehmen — zum Festpreis, mit optionaler laufender Betreuung.",
};

const included = [
  "Festpreis für die Erstellung",
  "Optimiert für Smartphone, Tablet und Desktop",
  "Suchmaschinenoptimierung von Anfang an",
  "Optional: monatliche Betreuung mit Hosting, Backups und kleinen Änderungen",
];

const steps = [
  {
    title: "Erstgespräch",
    text: "Wir klären, was Sie und Ihre Besucher von der Website brauchen.",
  },
  {
    title: "Festpreis-Angebot",
    text: "Sie erhalten ein klares Angebot, ohne versteckte Kosten.",
  },
  {
    title: "Umsetzung",
    text: "Ich passe die Vorlage an Ihre Inhalte und Ihr Erscheinungsbild an und stimme jeden Schritt mit Ihnen ab.",
  },
  {
    title: "Veröffentlichung",
    text: "Ihre Website geht online — auf Wunsch mit laufender Betreuung.",
  },
];

// The whole page is German; the root <html> stays lang="en" for the rest of
// the site, so the language is marked on this wrapper instead.
export default function GermanLandingPage() {
  return (
    <div lang="de">
      <section className="grain border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <p className="mono-label mb-6 text-brass">Tywyn Websites — Deutsch</p>
          <h1 className="text-balance max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Professionelle Websites für Praxen, Selbstständige und kleine
            Unternehmen.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-soft">
            Klar, verlässlich und vollständig auf Deutsch. Ich verbinde
            langjährige Erfahrung in Qualitätssicherung und Webentwicklung mit
            einem genauen Blick darauf, was Ihre Besucher wirklich suchen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#kontakt" className="btn-primary">
              Kontakt aufnehmen
            </a>
            <a href="#beispiel" className="btn-secondary">
              Beispiel ansehen
            </a>
          </div>
        </div>
      </section>

      <section id="beispiel" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-16 sm:py-24">
        <p className="mono-label mb-3 text-brass">Beispiel</p>
        <h2 className="mb-10 font-display text-2xl font-medium text-ink sm:text-3xl">
          XB Mediation
        </h2>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <a
            href="https://xb-mediation.de"
            target="_blank"
            rel="noopener noreferrer"
            className="card-frame relative block aspect-[16/10] overflow-hidden"
          >
            <Image
              src="/screenshots/xb-mediation-home.png"
              alt="Startseite von xb-mediation.de"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </a>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Für eine Praxis für Familien- und Wirtschaftsmediation habe ich
              eine ruhige, professionelle Website erstellt — vollständig auf
              Deutsch.
            </p>
            <p>
              Sie erklärt, was Mediation ist, wie der Ablauf funktioniert und
              was sie kostet, und macht es einfach, ein Erstgespräch zu
              vereinbaren.
            </p>
            <a
              href="https://xb-mediation.de"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label text-ink transition-colors hover:text-accent"
            >
              xb-mediation.de ansehen ↗
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-dim">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 md:grid-cols-2">
          <div>
            <p className="mono-label mb-3 text-brass">Das Angebot</p>
            <h2 className="mb-6 font-display text-2xl font-medium text-ink sm:text-3xl">
              Starter-Websites
            </h2>
            <p className="text-lg leading-relaxed text-ink-soft">
              Ihre Website basiert auf einer bewährten Vorlage und wird mit
              Ihren Inhalten, Bildern und Ihrem Erscheinungsbild angepasst. So
              ist sie schnell online und hat einen festen Preis.
            </p>
          </div>
          <ul className="flex flex-col gap-4 self-center">
            {included.map((item) => (
              <li key={item} className="card-frame px-6 py-4 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="mono-label mb-3 text-brass">Ablauf</p>
        <h2 className="mb-10 font-display text-2xl font-medium text-ink sm:text-3xl">
          So arbeiten wir zusammen
        </h2>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="card-frame flex flex-col gap-3 p-6">
              <span className="mono-label text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-medium text-ink">
                {step.title}
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-ink-soft">
          Sie brauchen mehr als eine Website — etwa Online-Buchungen,
          Kundenkonten oder Zahlungen? Auch das ist möglich:{" "}
          <Link
            href="/work/custom-apps"
            className="text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent"
          >
            individuelle Web-Anwendungen
          </Link>{" "}
          (Seite auf Englisch).
        </p>
      </section>

      <section id="kontakt" className="grain scroll-mt-8 border-t border-rule">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 md:grid-cols-2">
          <div>
            <p className="mono-label mb-5 text-brass">Kontakt</p>
            <h2 className="text-balance max-w-md font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl">
              Erzählen Sie mir von Ihrem Vorhaben.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
              Schreiben Sie mir kurz, worum es geht — ich melde mich, um mit
              Ihnen zu besprechen, was Sie brauchen.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              Bitte beachten Sie: Die Zusammenarbeit — Gespräche, E-Mails und
              Angebote — findet auf Englisch statt. Ihre Website ist
              selbstverständlich vollständig auf Deutsch.
            </p>
          </div>
          <ContactForm language="de" />
        </div>
      </section>
    </div>
  );
}
