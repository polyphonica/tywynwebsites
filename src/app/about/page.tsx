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
              working in early music and historical performance, and
              separately a QA and test-automation professional with hands-on
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
              Many web builders who work with musicians and arts
              organisations don&apos;t understand the professional musical
              world from the inside. Equally, many people who understand that world can&apos;t build
              a real platform. I sit in both places, which is why
              recorder-ed and Polyphonica are the same underlying system
              doing two different jobs for two real businesses.
            </p>
            <p>
              Combining my decades-long, real-world experience of music
              teaching and performing with years of experience in quality
              assurance and development, I have worked to create tools that
              support the operation of a typical teaching practice as a
              serious, profit-making business. It all started with developing
              a tool that reflects the different streams of my musical work
              — private teaching, running public workshops (online and
              in-person) and the ability to create self-directed online courses.
              Using my Quality Assurance background, I have been able to
              conduct rigorous functional testing as well as user testing
              provided by pupils and other teachers. This has enabled me to
              create tools that don&apos;t just reflect how I teach, but
              facilitate how individual pupils learn.
            </p>
          </div>
        </div>
      </section>

      <ClosingCta prompt="Want to work together?" />
    </>
  );
}
