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
  title: "Websites für Musik, Kultur und kleine Unternehmen — Tywyn Websites",
  description:
    "Klare, professionelle Websites für Musikerinnen und Musiker, Ensembles, Kulturorganisationen, Selbstständige und kleine Unternehmen — zum Festpreis, mit optionaler laufender Betreuung.",
};

const offers = [
  {
    eyebrow: "Angebot 01",
    title: "Starter-Websites",
    description:
      "Ihre Website basiert auf einer bewährten Vorlage und wird mit Ihren Inhalten, Bildern und Ihrem Erscheinungsbild angepasst. So ist sie schnell online und hat einen festen Preis.",
    points: [
      "Festpreis für die Erstellung",
      "Optimiert für Smartphone, Tablet und Desktop",
      "Suchmaschinenoptimierung von Anfang an",
      "Optional: monatliche Betreuung mit Hosting, Backups und kleinen Änderungen",
    ],
  },
  {
    eyebrow: "Angebot 02",
    title: "Individuelle Web-Anwendungen",
    description:
      "Für alles, was eine Starter-Website nicht leisten kann: Ihre Website übernimmt Buchungen, Kurse und Zahlungen selbst — zugeschnitten auf die Arbeitsweise Ihres Betriebs.",
    points: [
      "Online-Buchungen, Kundenkonten, Kurse, Zahlungen und Rückerstattungen — direkt auf Ihrer eigenen Website",
      "Keine Provisionen oder Abos für Buchungsplattformen",
      "Aufgebaut auf Komponenten, die bereits echte Betriebe tragen — Sie zahlen für das, was Ihr Vorhaben besonders macht, nicht für die Grundlagen",
      "Klar umrissenes Projekt mit laufender Betreuung",
    ],
  },
];

const examples = [
  {
    name: "XB Mediation",
    url: "https://xb-mediation.de",
    linkLabel: "xb-mediation.de ansehen ↗",
    image: "/screenshots/xb-mediation-home.png",
    alt: "Startseite von xb-mediation.de",
    text: [
      "Für XB Mediation, ein Angebot für Familien- und Wirtschaftsmediation, habe ich eine ruhige, professionelle Website erstellt — vollständig auf Deutsch.",
      "Sie erklärt, was Mediation ist, wie der Ablauf funktioniert und was sie kostet, und macht es einfach, ein Erstgespräch zu vereinbaren.",
    ],
  },
  {
    name: "Liverpool Renaissance Singers",
    url: "https://liverpoolrenaissancesingers.org",
    linkLabel: "liverpoolrenaissancesingers.org ansehen ↗",
    image: "/screenshots/liverpool-renaissance-singers-home-v2.png",
    alt: "Startseite von liverpoolrenaissancesingers.org",
    text: [
      "Für einen Chor, der sich der Musik der Renaissance widmet, stellt die Website Repertoire, Konzerte und Mitsingmöglichkeiten vor.",
      "Über einen Mitgliederbereich pflegt der Chor Konzerte, Newsletter und Dokumente selbst — ganz ohne Entwickler für jede Änderung. (Die Website ist auf Englisch.)",
    ],
  },
];

const steps = [
  {
    title: "Erstgespräch",
    text: "Wir klären, was Sie und Ihre Besucher von der Website brauchen.",
  },
  {
    title: "Klares Angebot",
    text: "Zum Festpreis für eine Starter-Website oder als klar umrissenes Projekt für eine Web-Anwendung — ohne versteckte Kosten.",
  },
  {
    title: "Umsetzung",
    text: "Ich setze Ihre Website oder Anwendung um und stimme jeden Schritt mit Ihnen ab.",
  },
  {
    title: "Veröffentlichung",
    text: "Ihre Website geht online — und ich bleibe für Betreuung und Weiterentwicklung ansprechbar.",
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
            Websites für Musik, Kultur und kleine Unternehmen.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-soft">
            Klare, verlässliche Websites und individuelle Web-Anwendungen auf
            Deutsch — für Musikerinnen und
            Musiker, Ensembles und Kulturorganisationen ebenso wie für
            Selbstständige und kleine Unternehmen.
          </p>
          <p className="mt-4 max-w-xl text-balance text-lg leading-relaxed text-ink-soft">
            Als Blockflötist und Ensemblemusiker, unter anderem mit Konzerten
            in Deutschland, kenne ich die Welt, für die ich baue. Dazu kommt
            langjährige Erfahrung in Qualitätssicherung und Webentwicklung.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#kontakt" className="btn-primary">
              Kontakt aufnehmen
            </a>
            <a href="#beispiele" className="btn-secondary">
              Beispiele ansehen
            </a>
          </div>
        </div>
      </section>

      <section id="beispiele" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-16 sm:py-24">
        <p className="mono-label mb-3 text-brass">Beispiele</p>
        <h2 className="mb-10 font-display text-2xl font-medium text-ink sm:text-3xl">
          Zwei Websites, zwei Welten
        </h2>
        <div className="flex flex-col gap-16">
          {examples.map((example) => (
            <div
              key={example.name}
              className="grid gap-10 md:grid-cols-2 md:items-center"
            >
              <a
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-frame relative block aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={example.image}
                  alt={example.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </a>
              <div className="flex flex-col gap-5 text-lg leading-relaxed text-ink-soft">
                <h3 className="font-display text-xl font-medium text-ink">
                  {example.name}
                </h3>
                {example.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <a
                  href={example.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label break-all text-ink transition-colors hover:text-accent"
                >
                  {example.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-rule bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="mono-label mb-3 text-brass">Das Angebot</p>
          <h2 className="mb-10 font-display text-2xl font-medium text-ink sm:text-3xl">
            Zwei Wege zur Zusammenarbeit
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="flex flex-col gap-5 border border-rule bg-paper p-8 sm:p-10"
              >
                <span className="mono-label text-brass">{offer.eyebrow}</span>
                <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                  {offer.title}
                </h3>
                <p className="text-[1.02rem] leading-relaxed text-ink-soft">
                  {offer.description}
                </p>
                <ul className="flex flex-col gap-3 border-t border-rule pt-5">
                  {offer.points.map((point) => (
                    <li key={point} className="flex gap-3 text-ink">
                      <span aria-hidden className="text-accent">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-ink-soft">
            Beispiele für Web-Anwendungen: recorder-ed.com (Unterricht, Kurse
            und Workshops) und das Polyphonica Recorder Trio (Konzert- und
            Workshopbuchungen mit Zahlungen).{" "}
            <Link
              href="/work/custom-apps"
              className="text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent"
            >
              Mehr dazu
            </Link>{" "}
            (Seite auf Englisch).
          </p>
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
