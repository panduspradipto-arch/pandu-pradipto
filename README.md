# Pandu Portfolio

Portfolio site for Pandu Senopradipto — creative direction and production.

Implements the approved design from the Claude Design project **"Creative producer
portfolio direction"**, file `Homepage.dc.html`. That file is the source of truth
for every colour, size, and spacing value in here.

## One design system

Black / off-white / warm neutral, editorial typography, cinematic imagery,
minimal UI, subtle interaction, **no accent colour**. One language across
Homepage, Work, Project Detail, Services, About, and Contact.

The `_ds` "Pandu Creative System" (Anton / Cinzel / Barlow, gold `#C99A3E`, tally
red, rounded corners, bordered cards) is **retired** — it was a first draft
inferred from a text brief and it conflicts with this direction on every
primitive except the background. Do not reintroduce any part of it. This
codebase has never referenced it.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript, strict |
| Styling | CSS Modules over a CSS custom-property token layer |
| Fonts | Instrument Sans, self-hosted at build time via `next/font` |
| Images | `next/image`, AVIF/WebP, lazy by default |

No CSS framework. The design is a specific set of values, so the tokens are the
system and components consume them directly — nothing to translate.

## Running it

```bash
npm run dev
```

Then `npm run build`, `npm run typecheck`, `npm run lint`.

Do not run `next build` while `next dev` is live — they share `.next` and the dev
manifest gets clobbered. If dev starts throwing "Could not find the module … in
the React Client Manifest", `rm -rf .next` and restart.

## Layout

```
src/
├── app/
│   ├── layout.tsx        Root shell: font, metadata, Navbar, Footer, skip link
│   ├── page.tsx          Homepage — composition only, no layout code
│   └── globals.css       Reset, focus, skip link, reduced-motion
├── styles/tokens.css     Every design value. Start here to change the look.
├── types/content.ts      The content model
├── data/                 Projects, services, clients, site/nav/process
└── components/
    ├── layout/           Navbar, Footer, Section
    ├── sections/         Hero, WorkSection, ServiceSection, ProcessSection,
    │                     ClientSection, AboutSection, CTASection
    └── ui/               ProjectCard, ProjectGrid, ProjectMeta, MediaSlot,
                          Button, SectionHeading
```

`Section` owns horizontal gutter and vertical rhythm; individual sections never
set their own page padding. Dark/light context is a token flip via the `on-paper`
class, not a per-component restyle.

## Updating content

Everything the site renders lives in `src/data`. Adding work means adding an
object, not touching layout.

**A project** — append to `src/data/projects.ts`. Set `featured: true` to surface
it on the homepage. The homepage grid takes featured projects in array order and
lays them out `1 full-bleed → 2-up (60/40) → 3-up`, repeating that cadence, so
the rhythm holds as the roster grows.

**A service or process step** — `src/data/services.ts`, `src/data/site.ts`.
Numbering is explicit content, not derived.

**A client** — `src/data/clients.ts`. List each client once; the marquee
duplicates the row itself to make the loop seamless.

## Media

No real stills or logos have been supplied yet, so every image slot renders a
labelled placeholder — hatched, hairline-framed, carrying its own caption. An
unfinished frame is meant to look unfinished rather than silently blank.

To fill one, drop the file in `public/media/` and add `media` to the project:

```ts
media: { src: "/media/work-bri.jpg", alt: "Giro brand film, closing frame" }
```

Client logos go in `public/media/logos/` as transparent PNG or SVG, referenced by
`logo` on the client entry.

Video is modelled but not yet rendered: `Project.video` takes a YouTube id, on the
assumption from the earlier build that video stays hosted externally and is
embedded on click rather than bundled.

## Accessibility

Semantic landmarks throughout, skip link, keyboard-only focus rings that stay
legible in both contexts, `aria-expanded` on the mobile menu with Escape to close,
and the marquee frozen under `prefers-reduced-motion`. Project cards carry an
explicit `aria-label` so they announce the project rather than placeholder copy.

## Project detail pages

`/work/[slug]` — one prerendered page per project via `generateStaticParams`.

Built to an approved design spec: *cinematic editorial case study*, following
IMAGE → CONTEXT → PROCESS → IMAGE → CLOSURE. The visual work outranks the
explanatory text everywhere; Visual Story is the largest section on the page by
a clear margin (measured at 56% of total page height on a fully-populated
project).

Sections, in order: `ProjectHero` → `ProjectIntro` → `ProjectGallery` →
`ProjectProduction` → `ProjectResult` → `NextProject` → `ProjectCTA`.

Hero shows `Client · Year · Category` **above** the title, matching the homepage
project cards.

**Every section renders only when it has content.** All detail fields on
`Project` are optional; a section with nothing to say returns `null`. A project
carrying only the catalog fields produces a short, complete page — hero, intro,
next project, CTA — not a run of empty headings. Add `brief` and it appears in
the intro; add `production` and the Production section appears; add `result` and
Result appears.

`result` is the strictest gate on the site: **never infer, estimate, or round up
a metric, award, or campaign outcome.** With no verified result the section does
not exist on the page.

`ProjectCTA` is a thin composition over `CTASection` on purpose: the
paper-inverted CTA is one design element and should stay one implementation, so
homepage and detail pages cannot drift.

### Gallery beats

The visual story is a sequence of art-directed **beats**, not a uniform grid.
Each beat carries its own shape and its own preceding gap.

```ts
gallery: [
  { type: "bleed",  aspect: "21:9" },
  { type: "pair",   variant: "asymmetric", gap: "pause", items: [{...}, {...}] },
  { type: "portrait", align: "right", gap: "normal" },
  { type: "detail",   align: "right", gap: "close" },
  { type: "film",   bleed: true, gap: "pause", video: {...} },
  { type: "frame",  aspect: "16:9", gap: "pause" },
]
```

| Beat | Default shape | Width |
| --- | --- | --- |
| `bleed` | 21:9 | edge to edge |
| `frame` | 16:9 | page, 48px gutter |
| `pair` | `asymmetric` 1.4fr/1fr, or `even` | page |
| `portrait` | 4:5, max 620px, offset | page |
| `detail` | 1:1, max 480px, offset | page |
| `film` | 16:9 facade | page or `bleed: true` |

**Gap is the rhythm instrument** — `tight` 2px · `close` 8px · `normal` 96px ·
`pause` 140px, tightening at narrow widths. Two rules the sequence relies on:
don't put two beats of the same `type` next to each other, and `portrait` /
`detail` offset left or right rather than centring — centring is what makes an
editorial sequence read as a CMS gallery.

`aspect` accepts `21:9 | 16:9 | 3:2 | 4:5 | 1:1 | 9:16`. **Ratios are preserved
at every breakpoint** — portrait work is never re-cropped to landscape. On
mobile, pairs stack while the asymmetric pair keeps its size difference.

Video uses a **click-to-load facade** — the page ships a poster frame and a play
control, and nothing is requested from YouTube until the viewer asks. Verified:
zero iframes on load, one after click, `youtube-nocookie` host. A project with a
top-level `video` and no `gallery` gets that film promoted into the gallery run.

## Not built yet

The full catalog page (`/work`) and a standalone About page. The pieces are in
place: `ProjectGrid` has a `catalog` variant and `disciplines` models the filter
set.
