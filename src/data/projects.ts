export type Project = {
  slug: string;
  name: string;
  url: string;
  summary: string;
  tags: string[];
  // Card thumbnail under /public; falls back to a placeholder when absent.
  image?: string;
};

// A plain string renders as a labelled placeholder until a real image exists.
export type Screenshot = string | { label: string; src: string };

export type ProjectDetail = {
  slug: string;
  name: string;
  url: string;
  intro: string;
  body: string[];
  screenshots: Screenshot[];
  tags: string[];
};

export type Prototype = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  status: string;
  liveUrl?: string;
  body: string[];
  screenshots: Screenshot[];
};

// recorder-ed appears on both offer pages with different framing —
// two card entries, same underlying project, different copy. Both link
// through to the single detail page in `projectDetails` below.
export const recorderEdSimple: Project = {
  slug: "recorder-ed",
  name: "recorder-ed.com",
  url: "https://recorder-ed.com",
  summary:
    "Started as a recorder teaching platform — but the same system underneath (accounts, courses, payments) adapts to any private tutor who needs more than a brochure site.",
  tags: ["ACCOUNTS", "COURSES", "PAYMENTS"],
  image: "/screenshots/recorder-ed-home.png",
};

export const recorderEdCustom: Project = {
  slug: "recorder-ed",
  name: "recorder-ed.com",
  url: "https://recorder-ed.com",
  summary:
    "The technical showcase: a full platform handling accounts, courses, private-lesson booking, workshops, and digital-product e-commerce, built and maintained solo.",
  tags: ["DJANGO", "POSTGRESQL", "STRIPE", "E-COMMERCE"],
  image: "/screenshots/recorder-ed-home.png",
};

export const polyphonica: Project = {
  slug: "polyphonica",
  name: "Polyphonica Recorder Trio",
  url: "https://polyphonicarecordertrio.com",
  summary:
    "The same platform reconfigured for an ensemble: accounts, structured concert and workshop listings, pricing, and payments with refunds — proof the system adapts to a real second business.",
  tags: ["ACCOUNTS", "BOOKING", "PAYMENTS & REFUNDS"],
  image: "/screenshots/polyphonica-home.png",
};

export const simpleSitesProjects: Project[] = [
  recorderEdSimple,
  {
    slug: "watkins-woodwinds",
    name: "Watkins Woodwinds",
    url: "https://watkinswoodwinds.com",
    summary:
      "A clear, no-fuss web presence for an instrument repair business — the kind of site most small music businesses actually need.",
    tags: ["BROCHURE SITE"],
    image: "/screenshots/watkins-woodwinds-home-v2.png",
  },
  {
    slug: "liverpool-renaissance-singers",
    name: "Liverpool Renaissance Singers",
    url: "https://liverpoolrenaissancesingers.org",
    summary:
      "An ensemble site covering repertoire, concerts, and how to get involved — built for a choir, not a tech company.",
    tags: ["ARTS ORG"],
    image: "/screenshots/liverpool-renaissance-singers-home-v2.png",
  },
  {
    slug: "xb-mediation",
    name: "XB Mediation",
    url: "https://xb-mediation.de",
    summary:
      "An informational site for a German family and business mediation practice — outside the music world entirely, included to show the simple-sites offer isn't limited to arts clients.",
    tags: ["BROCHURE SITE", "NON-MUSIC"],
    image: "/screenshots/xb-mediation-home.png",
  },
];

export const customAppsProjects: Project[] = [recorderEdCustom, polyphonica];

// Homepage "selected work" row: a deliberate cross-section, not a full list —
// one pairing from custom apps plus one from simple sites, to signal both
// offers within a single row before the visitor picks a lane.
export const homepageSelectedWork: Project[] = [
  recorderEdCustom,
  polyphonica,
  {
    ...simpleSitesProjects[2],
  },
];

// Full case-study content, one entry per underlying project regardless of
// how many offer-page cards link to it. Screenshots that need real user
// data removed before publishing are noted in the plan doc, not here.
export const projectDetails: ProjectDetail[] = [
  {
    slug: "recorder-ed",
    name: "recorder-ed.com",
    url: "https://recorder-ed.com",
    intro:
      "A full teaching-and-booking platform for a private recorder tuition business — and the same system, reconfigured, that also runs Polyphonica Recorder Trio.",
    body: [
      "recorder-ed handles everything a private music tutor needs beyond a brochure site, from lessons and workshops to courses and digital-product sales, all built and maintained solo on Django and PostgreSQL with Stripe for payments.",
      "Private lessons are managed end to end: students book and pay online, and each lesson can carry rich content (notes, sheet music, audio and video) that stays available to the student afterwards. Workshops, both online and in-person, have their own listings, booking and attendee management.",
      "Beyond one-off lessons, teachers can create structured courses, and students work through them in a built-in learning management system that tracks their progress.",
      "Payments are taken automatically through Stripe, and cancellations and refunds are handled according to the platform's terms and conditions, so the teacher doesn't have to chase money or process refunds by hand.",
      "A built-in finance area shows teachers the income from their private lessons, workshops and courses. They can also log expenses against their teaching practice and export a year-end summary, ready for their own tax return or to send to an accountant.",
      "Although it started with the recorder, nothing in the platform is tied to one instrument. It works for a single teacher or a team of teachers, for any instrument or subject, and can run either as a shared SaaS platform or as a customised installation for an individual teacher.",
      "Some of what it does is only visible once a visitor creates an account and logs in — the student dashboard, lesson booking flow, and purchased digital content all sit behind authentication, which is exactly the kind of functionality a link to the live site alone can't demonstrate.",
      "The same underlying platform, reconfigured rather than rebuilt, is what powers Polyphonica Recorder Trio's concert and workshop booking — see that case study for how the system adapts to an ensemble rather than a single tutor.",
    ],
    screenshots: [
      {
        label: "Course detail",
        src: "/screenshots/recorder-ed-course-detail.png",
      },
      {
        label: "Student dashboard",
        src: "/screenshots/recorder-ed-student-dashboard.png",
      },
      {
        label: "Lesson booking calendar",
        src: "/screenshots/recorder-ed-lesson-booking.png",
      },
      {
        label: "Shopping cart & checkout",
        src: "/screenshots/recorder-ed-shopping-cart-v2.png",
      },
    ],
    tags: ["DJANGO", "POSTGRESQL", "STRIPE", "ACCOUNTS", "COURSES", "E-COMMERCE"],
  },
  {
    slug: "polyphonica",
    name: "Polyphonica Recorder Trio",
    url: "https://polyphonicarecordertrio.com",
    intro:
      "The recorder-ed platform reconfigured for an ensemble — concerts and workshops instead of one-to-one lessons, with payments and refunds.",
    body: [
      "Polyphonica needed accounts and login, structured listings for concerts and workshops, pricing, and payment handling that includes refunds — a materially different shape of booking problem to a private tutor's, solved with the same underlying platform as recorder-ed rather than a rebuild.",
      "The refund flow and the logged-in account dashboard are two areas that only really make sense once you've booked something — screenshots here stand in for functionality that a visitor browsing the live site without an account wouldn't otherwise see.",
      "Behind the scenes, a management area lets the trio build concert programmes from their repertoire. Every piece is stored with a history of when and where it was performed, so they can see at a glance what they've played recently. Programmes can be timed in detail, including the spoken introductions between pieces, and printed as public programmes for the audience.",
      "The same area handles bookings for both concerts and workshops, from managing places and attendees to payments and refunds, and drives the public listings on the live site, so there's one place to keep everything up to date.",
    ],
    screenshots: [
      "Concert & workshop listings",
      "Booking flow",
      "Account dashboard",
      "Refund handling",
    ],
    tags: [
      "CONCERT & WORKSHOP LISTINGS",
      "ACCOUNTS",
      "BOOKING",
      "PAYMENTS & REFUNDS",
      "PROGRAMMING",
    ],
  },
  {
    slug: "watkins-woodwinds",
    name: "Watkins Woodwinds",
    url: "https://watkinswoodwinds.com",
    intro:
      "A clear, no-fuss web presence for an instrument repair business — the kind of site most small music businesses actually need.",
    body: [
      "Built from a template chosen by the client, a woodwind repair specialist based in New Hampshire in the US, the site gives a clear message about the repair services on offer, for both modern and historical reed instruments, and how to get in touch.",
      "It's also optimised for search engines, so people looking for woodwind repairs can find the business when they search.",
      "Planned enhancements include online booking and payment for repairs, and a section on historical woodwind instrument making.",
    ],
    screenshots: [
      {
        label: "The client and his workshop",
        src: "/screenshots/watkins-woodwinds-about.png",
      },
      {
        label: "Repair Services",
        src: "/screenshots/watkins-woodwinds-repair-services.png",
      },
    ],
    tags: ["BROCHURE SITE"],
  },
  {
    slug: "liverpool-renaissance-singers",
    name: "Liverpool Renaissance Singers",
    url: "https://liverpoolrenaissancesingers.org",
    intro:
      "An ensemble site covering repertoire, concerts, and how to get involved — built for a choir, not a tech company.",
    body: [
      "On the surface, a clear public site: who the choir are, what they sing, upcoming concerts, and how interested singers can get in touch. Behind it sits a members-only management area that lets the choir run the site themselves, without needing a developer for every update.",
      "Concert listings are created through a rich-text editor, so each one can carry proper media-rich content — images, formatted programme notes, links and embedded media — rather than a bare date and venue. Committee members can create, edit and archive concerts as the season moves on.",
      "The same management area handles newsletter subscribers, so the choir can build its mailing list and send updates directly from the site, and a document library where concert repertoire and other choir documents are kept in one place for members.",
      "The site is also optimised for search engines, with clean page structure, descriptive titles and metadata, and fast-loading pages, so people looking for early music or a choir to join in the greater Merseyside area can find it.",
    ],
    screenshots: [
      {
        label: "Rich-content concert listings",
        src: "/screenshots/liverpool-renaissance-singers-concert-editor.png",
      },
      {
        label: "Management Functions",
        src: "/screenshots/liverpool-renaissance-singers-manage.png",
      },
    ],
    tags: ["ARTS ORG"],
  },
  {
    slug: "xb-mediation",
    name: "XB Mediation",
    url: "https://xb-mediation.de",
    intro:
      "An informational site for a German family and business mediation practice — outside the music world entirely.",
    body: [
      "An example of website creation outside the arts: the simple-sites offer isn't limited to music and arts clients.",
      "Built for a client in the German-speaking world, the site was created after detailed discussions to clarify what the client and their visitors needed from it. The result is a calm, professional site, written entirely in German, that explains family and business mediation, sets out how the process works and what it costs, and makes it easy to book an initial consultation.",
      "The site is fully responsive, so it works just as well on phones and tablets as on a desktop, and search engine optimisation is built in from the start to help people looking for mediation find it.",
    ],
    screenshots: [
      {
        label: "Homepage",
        src: "/screenshots/xb-mediation-homepage-full.png",
      },
      {
        label: "Services",
        src: "/screenshots/xb-mediation-services.png",
      },
    ],
    tags: ["BROCHURE SITE", "NON-MUSIC"],
  },
];

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}

export const prototypes: Prototype[] = [
  {
    slug: "musiciansearch",
    name: "MusicianSearch",
    summary:
      "A marketplace prototype connecting musicians with opportunities — search, filtering, and profile listings.",
    tags: ["MARKETPLACE"],
    status: "Prototype — not yet publicly deployed",
    body: [
      "A marketplace prototype exploring how musicians and venues or ensembles could find each other — search and filtering on one side, profile listings on the other.",
    ],
    screenshots: ["Search results", "Musician profile"],
  },
  {
    slug: "musiciansearch-teacher",
    name: "MusicianSearch-Teacher",
    summary:
      "A two-sided companion app to MusicianSearch, built around the teacher side of the marketplace relationship.",
    tags: ["TWO-SIDED APP"],
    status: "Prototype — not yet publicly deployed",
    body: [
      "The teacher-facing counterpart to MusicianSearch: managing incoming requests and availability from the other side of the marketplace relationship.",
    ],
    screenshots: ["Teacher dashboard", "Booking requests"],
  },
  {
    slug: "timetabling-app",
    name: "Timetabling app",
    summary:
      "A scheduling tool for coordinating lessons and availability across multiple teachers and students.",
    tags: ["SCHEDULING"],
    status: "Prototype — data cleanup required before publishing",
    body: [
      "A scheduling tool for coordinating lessons and availability across multiple teachers and students. Screenshots are pending — the current build contains real user data that needs to be replaced with dummy data before it can be shown publicly.",
    ],
    screenshots: ["Weekly schedule", "Availability editor"],
  },
  {
    slug: "antique-tunes",
    name: "Antique Tunes",
    summary:
      "A content and reference tool for exploring historical tune collections.",
    tags: ["CONTENT / REFERENCE"],
    status: "Prototype — not yet publicly deployed",
    body: [
      "A content and reference tool for exploring historical tune collections — built to make browsing and cross-referencing early-music sources easier than flipping through scanned source material.",
    ],
    screenshots: ["Tune browser", "Tune detail"],
  },
];

export function getPrototype(slug: string): Prototype | undefined {
  return prototypes.find((prototype) => prototype.slug === slug);
}
