export type Project = {
  slug: string;
  name: string;
  url: string;
  summary: string;
  tags: string[];
};

export type Prototype = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  status: string;
};

// recorder-ed appears on both offer pages with different framing —
// two entries, same underlying project, different copy.
export const recorderEdSimple: Project = {
  slug: "recorder-ed",
  name: "recorder-ed.com",
  url: "https://recorder-ed.com",
  summary:
    "Started as a recorder teaching platform — but the same system underneath (accounts, courses, payments) adapts to any private tutor who needs more than a brochure site.",
  tags: ["ACCOUNTS", "COURSES", "PAYMENTS"],
};

export const recorderEdCustom: Project = {
  slug: "recorder-ed",
  name: "recorder-ed.com",
  url: "https://recorder-ed.com",
  summary:
    "The technical showcase: a full platform handling accounts, courses, private-lesson booking, workshops, and digital-product e-commerce, built and maintained solo.",
  tags: ["DJANGO", "POSTGRESQL", "STRIPE", "E-COMMERCE"],
};

export const polyphonica: Project = {
  slug: "polyphonica",
  name: "Polyphonica Recorder Trio",
  url: "https://polyphonicarecordertrio.com",
  summary:
    "The same platform reconfigured for an ensemble: accounts, structured concert and workshop listings, pricing, and payments with refunds — proof the system adapts to a real second business.",
  tags: ["ACCOUNTS", "BOOKING", "PAYMENTS & REFUNDS"],
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
  },
  {
    slug: "liverpool-renaissance-singers",
    name: "Liverpool Renaissance Singers",
    url: "https://liverpoolrenaissancesingers.org",
    summary:
      "An ensemble site covering repertoire, concerts, and how to get involved — built for a choir, not a tech company.",
    tags: ["ARTS ORG"],
  },
  {
    slug: "xb-mediation",
    name: "XB Mediation",
    url: "https://xb-mediation.de",
    summary:
      "An informational site for a German family and business mediation practice — outside the music world entirely, included to show the simple-sites offer isn't limited to arts clients.",
    tags: ["BROCHURE SITE", "NON-MUSIC"],
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

export const prototypes: Prototype[] = [
  {
    slug: "musiciansearch",
    name: "MusicianSearch",
    summary:
      "A marketplace prototype connecting musicians with opportunities — search, filtering, and profile listings.",
    tags: ["MARKETPLACE"],
    status: "Prototype — not yet publicly deployed",
  },
  {
    slug: "musiciansearch-teacher",
    name: "MusicianSearch-Teacher",
    summary:
      "A two-sided companion app to MusicianSearch, built around the teacher side of the marketplace relationship.",
    tags: ["TWO-SIDED APP"],
    status: "Prototype — not yet publicly deployed",
  },
  {
    slug: "timetabling-app",
    name: "Timetabling app",
    summary:
      "A scheduling tool for coordinating lessons and availability across multiple teachers and students.",
    tags: ["SCHEDULING"],
    status: "Prototype — data cleanup required before publishing",
  },
  {
    slug: "antique-tunes",
    name: "Antique Tunes",
    summary:
      "A content and reference tool for exploring historical tune collections.",
    tags: ["CONTENT / REFERENCE"],
    status: "Prototype — not yet publicly deployed",
  },
];
