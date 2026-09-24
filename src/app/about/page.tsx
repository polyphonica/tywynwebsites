import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ClosingCta from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "About — Tywyn Websites",
  description: "Recorder teacher and performer, QA and test-automation professional, web developer.",
};

export default function AboutPage() {
  return (
    <>
      <section className="grain border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
          <p className="mono-label mb-5 text-brass">About</p>
          <h1 className="text-balance max-w-2xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Two disciplines, one way of working.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,280px)_1fr] md:gap-14">
          <ImagePlaceholder label="Portrait photo" aspect="aspect-[4/5]" />
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink-soft">
            <p>
              I&apos;m Michael Piraner — a recorder teacher and performer
              working in early music and historical performance, and a QA
              and test-automation professional with hands-on
              experience in tools like Playwright.
            </p>
            <p>
              I have a Diploma from the New South Wales State Conservatorium
              of Music (Newcastle, Australia), a Bachelor of Music degree
              (Sydney Conservatorium of Music, Australia), and Master of Arts
              in Music (University of Birmingham, UK). I have performed with
              Polyphonica Recorder Trio in the UK, the Netherlands and
              Germany, and with other ensembles and as soloist in Australia,
              the UK, France and the United States.
            </p>
            <p>
              I have a special interest in the relationship between language
              and music in early music interpretation and performance. I am a
              permanent tutor on the Higham Hall Early Music Course, and
              conduct other residential recorder courses.
            </p>
            <p>
              Many web developers and digital agencies working with musicians
              and arts organisations understand either the technology or the
              professional musical environment — but rarely both. My work sits
              at the intersection of these two disciplines. This combination
              of first-hand knowledge of the professional music sector,
              teaching and performance, together with my experience in
              quality assurance and development, enables me to build digital
              tools that are both technically robust and genuinely suited to
              the way musicians and music organisations work.
            </p>
            <p>
              This approach underpins both recorder-ed and Polyphonica: two
              distinct platforms built on the same underlying system, each
              designed to address the specific operational needs of a real
              music business.
            </p>
            <p>
              Drawing on decades of practical experience in music teaching and
              performance, I have developed tools designed to support music
              teaching as a professional, sustainable and commercially viable
              business. The platform brings together the different strands of
              my own musical work, including private teaching, public
              workshops delivered both online and in person, and the
              development of self-directed online courses.
            </p>
            <p>
              My background in Quality Assurance has been equally important to
              the development process. I apply rigorous functional testing
              alongside structured user testing, incorporating feedback from
              pupils and fellow teachers throughout development. This ensures
              that the tools are not simply a digital representation of how I
              teach, but are designed to support different learning needs,
              improve the teaching experience and enable pupils to engage with
              learning in ways that work for them.
            </p>
            <p>
              The result is a platform developed from practical experience,
              tested through real-world use and continually refined through
              feedback — combining professional musical expertise with a
              disciplined approach to software quality, usability and
              development.
            </p>
          </div>
        </div>
      </section>

      <ClosingCta prompt="Want to work together?" />
    </>
  );
}
