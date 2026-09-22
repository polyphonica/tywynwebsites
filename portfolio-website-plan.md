# Portfolio website — planning doc

Purpose: a personal portfolio site for Michael, a recorder teacher/performer and QA/test-automation professional, showcasing web development work. Positioned around two offers rather than one generic "I build websites" pitch.

## Positioning

Lead with the combination that's genuinely differentiating: a technical/QA background (Playwright, test automation) combined with deep domain fluency in music education and performing arts organizations. Most web builders pitching musicians/arts orgs don't understand that world; most people who understand that world can't build a real platform.

Primary niche framing to start with: **early music / historical performance**, with room to broaden later if it proves too narrow.

## The two offers

The site splits into two separate offers rather than one blended pitch, because a small business owner wanting a basic site shouldn't feel priced out by seeing custom app development front and center.

### Offer 1: Simple sites
For teachers, ensembles, and small businesses who need a straightforward web presence.
- Pricing model: fixed-price build + optional monthly maintenance retainer (hosting, backups, small edits)
- Examples: Watkins Woodwinds (business site), Liverpool Renaissance Singers (ensemble site), XB Mediation (professional practice, non-music — included deliberately as a range signal)
- recorder-ed also appears here (see below)

### Offer 2: Custom apps
For anything needing bookings, logins, marketplaces, scheduling, or payments.
- Pricing model: scoped project + ongoing support retainer
- Lead examples: **recorder-ed + Polyphonica Recorder Trio, shown as a pair** — the strongest proof point, since they're the same underlying platform reconfigured for two different real businesses (private teaching vs. ensemble/workshop/concert booking with payments and refunds)
- Followed by prototypes once clickable: MusicianSearch, MusicianSearch-Teacher, timetabling app, Antique Tunes

## Existing projects and where they sit

| Project | Type | Placement | Notes |
|---|---|---|---|
| recorder-ed.com | Full platform — accounts, courses, private lessons, workshops, digital products/e-commerce | **Both offer pages** | On simple sites: framed as "started as a recorder teaching platform, but the same system — accounts, courses, payments — adapts to any private tutor." On custom apps: framed as the technical showcase (architecture, what it demonstrates). |
| polyphonicarecordertrio.com | Ensemble site with accounts/login, structured concerts and workshops listings, pricing, payments **and refunds**, concert programming | **Custom apps only** | Decided against including on simple sites — showing "payments and refunds" there would make the simple offer look more complex/expensive than it is, and would undersell Polyphonica's real capability by forcing it into a generic ensemble-site caption. Pair with recorder-ed as the platform story. May need a longer case-study blurb than other cards since there's more to summarize (payments, refunds, programming). |
| watkinswoodwinds.com | Small business site (instrument repair) | Simple sites | |
| liverpoolrenaissancesingers.org | Ensemble/arts org site | Simple sites | |
| xb-mediation.de | Informational/brochure site for a German family and business mediation practice — no accounts or booking system | Simple sites | Outside the music niche entirely. Included as a fourth simple-sites example to signal the offer generalizes beyond music/arts clients, since the primary niche framing (early music/historical performance) is being started narrow but isn't fully committed to. |
| MusicianSearch | Prototype — marketplace | Prototypes section | Needs to be made clickable before launch |
| MusicianSearch-Teacher | Prototype — two-sided app | Prototypes section | Needs to be made clickable before launch |
| Timetabling app | Prototype — scheduling tool | Prototypes section | Needs to be made clickable before launch |
| Antique Tunes | Prototype — content/reference tool | Prototypes section | Needs to be made clickable before launch |

Open question (not yet resolved): are the four prototypes already live and just need a public demo mode, or do they still need hosting/deployment before they can go on the site? This affects whether "prototypes" launches with the rest of the site or follows as a second phase.

Complication: the timetabling app contains real user data that would need to be removed or replaced with dummy data before it could be linked to publicly. This is pushing toward static cards for prototypes rather than clickable demos, at least for launch — live linking may follow once each prototype has been individually cleaned up.

Prototype cards will use screenshots (not text-only). This still requires the timetabling app's real user data to be swapped for dummy data before a screenshot can be taken/published, even though it won't be live-linked — the data-cleanup step isn't avoided by going static, only the live-link exposure is.

## Technology stack

- **Framework:** Next.js + React, Tailwind CSS for styling
- **Hosting:** self-hosted on Michael's own Ionos Ubuntu server (not Vercel/Netlify) — Node process managed via pm2, served through an nginx reverse proxy
- **Rationale:** matches the stack already used on xb-mediation.de and MusicianSearch (both Node), so the portfolio doesn't introduce a third toolchain. recorder-ed and Polyphonica remain Django/Postgres — no change proposed there, since that stack is proven for accounts/bookings/payments and a rewrite wouldn't be a clear efficiency gain.

## Sitemap

```
Home
├── Selected work
│   ├── Simple sites
│   └── Custom apps
├── Prototypes
├── About
└── Contact
```

- "Selected work" sits above the split so a visitor knows they're in the right place before being asked to pick a lane; the two offer pages are one click deeper.
- Prototypes is a separate top-level section, not nested under selected work — these are self-initiated demos, not paid client work, and keeping them apart avoids misrepresenting them as commissioned deliverables.
- Contact is top-level nav, not buried, since visitors need one obvious next step regardless of which offer page convinced them.

## Homepage layout

1. **Nav bar** — Work / Prototypes / Contact
2. **Hero** — one-line positioning statement + two CTAs ("See the work" / "See prototypes")
3. **Two offer cards, side by side, directly under the hero** — this is the key decision on the page. Visitors need to self-select into "simple site" vs. "custom app" within seconds or they'll bounce trying to work out what's on offer.
4. **Selected work** — one row of three case study cards (not split by offer type here; that split happens on the dedicated offer pages)
5. **Prototypes teaser strip** — thin strip, not full cards, since it's a secondary path
6. Footer

## Offer page template (shared structure, different copy)

Both "simple sites" and "custom apps" pages follow the same layout:

1. Nav bar
2. Hero — offer headline + one line on who it's for
3. Row of case study cards — each links straight out to the **live site** (decided: no internal case-study write-up pages, just polished preview cards with direct external links)
4. Closing CTA — "Have a project like this? → Get in touch"

Card order/content differs per page as set out in the table above.

## Decisions made so far

- Two separate offers (simple sites / custom apps), not one blended pitch
- Prototypes: leaning toward static cards (no live link) for launch, given the timetabling app's real user data needs cleaning first; live clickable demos remain the eventual goal, not settled for v1
- Primary niche framing starts narrow: early music / historical performance
- Case study cards link directly to the live site — no internal case-study pages to write
- recorder-ed appears on both offer pages with different framing on each
- Polyphonica appears on custom apps only, paired with recorder-ed as the platform story
- XB Mediation included as a fourth simple-sites example, despite being outside the music niche, to signal the offer generalizes

## Open questions still to settle

1. One shared contact form for both offers, or two separate forms with different fields depending on which offer the visitor came from?
2. Are the four prototypes already live/deployable, or do they need hosting work first (affects launch phasing)?
3. Exact card order and blurb copy for each offer page (drafts not yet written)
