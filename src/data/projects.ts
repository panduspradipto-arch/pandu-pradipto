import type { Discipline, Project } from "@/types/content";

/**
 * DATA RULES — the agreed baseline. Keep records consistent with these.
 *
 * 1. `role` is the contribution on THIS project. CV employment titles are
 *    separate and live in `experience.ts` — never copy one into a project.
 *    "Multimedia Specialist" in particular is a GovTech job title.
 * 2. Archive cards render `Year · Discipline`; the detail hero renders
 *    `Client · Role · Year`. The index categorises, the page attributes.
 * 3. `production` lists only what the owner personally did. Work done by a
 *    coordinated team belongs in `brief`, not here.
 * 4. `brief` and `roleSummary` are the owner's words. Never write them from
 *    filenames, client relationships, or artwork — leave them unset instead.
 * 5. No `result` without a verified outcome. Never infer metrics or awards.
 *
 * The project catalog.
 *
 * Order matters: the first six `featured` entries fill the homepage editorial
 * grid, in this order. Everything else appears on the full catalog page.
 *
 * Cover stills are not committed yet — entries without `media` render a
 * labelled placeholder slot, so an unfinished project is visibly unfinished
 * rather than silently blank. Drop the file into /public/media and add a
 * `media` object to light it up.
 */
export const projects: Project[] = [
  {
    slug: "bank-bri-giro",
    title: "Giro — Brand Film",
    client: "Bank BRI",
    role: "Art Direction",
    discipline: "art-direction",
    year: "2023",
    studio: "Dentsu",
    summary: "ATL campaign launching GIRO to young entrepreneurs.",
    featured: true,
  },
  {
    slug: "cimory-tayo-dance",
    title: '"Dance" — Campaign Film',
    client: "Cimory",
    role: "Freelance Creative",
    discipline: "freelance-creative",
    year: "2024",
    summary: "Pitch-winning 15s spot with cross-border 3D animation.",
    featured: true,
  },
  {
    slug: "woods-kalbe-farma",
    title: "Kalbe Farma",
    client: "Woods'",
    role: "Key Visual",
    discipline: "graphic-design",
    year: "2019",
    summary: "Key visual campaign for cough-relief lozenges, talent-led and playful.",
    featured: true,
  },
  {
    slug: "hotlicks-clean-green-jakarta",
    title: "Two Brand Launches",
    client: "Hotlicks & CGJ",
    role: "Social Media",
    discipline: "social-media",
    year: "2023",
    summary: "Two brand identities built from zero, content and campaign management.",
    featured: true,
  },
  {
    slug: "mlbb-ramadan",
    title: "Ramadan Campaign",
    client: "MLBB",
    role: "AI-Enhanced",
    discipline: "social-media",
    year: "2023",
    summary: "AI-assisted video production with A/B creative testing.",
    featured: true,
  },
  {
    slug: "rucika-total-solution",
    title: "Total Solution",
    client: "Rucika",
    role: "Graphic Design",
    discipline: "graphic-design",
    year: "2019-20",
    summary: "Two-year TVC evolution from trade-focused to human storytelling.",
    featured: true,
  },

  /* ---- Full catalog ---- */

  {
    slug: "btn-digital-store",
    title: 'BTN "Digital Store"',
    client: "BTN",
    role: "Executive Producer",
    discipline: "executive-producer",
    year: "2025",
    studio: "Cerahati",
    summary: "End-to-end production leadership for a seamless, on-brand TVC.",
  },
  {
    slug: "bank-mandiri-corporate",
    title: "Bank Mandiri — Corporate Banking",
    client: "Bank Mandiri",
    role: "Art Direction",
    discipline: "art-direction",
    year: "2021–23",
    summary: "TVC development for Bank Mandiri's corporate banking division.",
  },
  {
    slug: "xl-business-solutions",
    title: "XL Business Solutions",
    client: "XL Axiata",
    role: "Art Direction",
    discipline: "art-direction",
    year: "2021",
    summary: "Open pitch win for XL Axiata's B2B business unit.",
  },
  {
    slug: "djabesmen-ngga-bikin-tekor",
    title: 'Djabesmen — "Ngga Bikin Tekor"',
    client: "Djabesmen",
    role: "Graphic Design",
    discipline: "graphic-design",
    year: "2019",
    summary: "Print campaign for asbestos roofing brand under Rucika Group.",
  },
  {
    slug: "prudential-syariah",
    title: 'Prudential Syariah — "Wujudkan Sesuai Hati"',
    client: "Prudential",
    role: "Art Director",
    discipline: "art-direction",
    year: "2022",
    studio: "VMLY&R",
    summary: "Brand campaign for Prudential's Syariah insurance line.",
  },
  {
    slug: "kitkat-mma-award",
    title: "KitKat MMA Award",
    client: "KitKat",
    role: "Art Director",
    discipline: "art-direction",
    year: "2022",
    studio: "VMLY&R",
    summary: "Award-submission edit and motion graphics for KitKat Valentine's campaign.",
  },
  {
    slug: "abc-sirup-ramadan",
    title: "ABC Sirup Ramadan",
    client: "ABC",
    role: "Graphic Design",
    discipline: "graphic-design",
    year: "2019",
    summary: "Seasonal print campaign for ABC syrup's Ramadan lineup.",
  },
  {
    slug: "realme-14-series",
    title: "Realme 14 Series 5G",
    client: "Realme",
    role: "Executive Producer",
    discipline: "executive-producer",
    year: "2025",
    studio: "Cerahati",
    summary: "Product launch TVC production for Realme Indonesia.",
  },
  {
    slug: "jnt-express",
    title: "J&T Express",
    client: "J&T Express",
    role: "Executive Producer",
    discipline: "executive-producer",
    year: "2025",
    studio: "Cerahati",
    summary: "Brand campaign production for J&T Express Indonesia.",
  },
  {
    slug: "schwarzkopf-hvar-hair",
    title: "Schwarzkopf Pro x H'var Hair",
    displayTitle: "H'var Hair",
    client: "Schwarzkopf Professional",
    role: "Beauty & Lifestyle",
    discipline: "graphic-design",
    year: "2022",
    summary: "Collaboration campaign for Schwarzkopf Professional Indonesia.",
  },
  {
    slug: "tripollar-indonesia",
    title: "TriPollar Indonesia",
    displayTitle: "Indonesia",
    client: "TriPollar",
    /* Owner-confirmed contribution. Deliberately NOT "Art Direction" — the
       work was produced and coordinated, not personally art-directed. */
    role: "Creative Production",
    /* Sector context, not a role. */
    category: "Beauty & Lifestyle",
    /* Owner-corrected: a social media management engagement, not design work. */
    discipline: "social-media",
    year: "2021",
    summary: "Ongoing social media management for TriPollar skincare devices.",
    /*
     * Project scope. Says "content development" rather than "content design" —
     * the creative team handled design and day-to-day execution, so the brief
     * must not imply the owner personally designed the content.
     */
    brief:
      "Social media management for TriPollar skincare devices — an ongoing program covering creative strategy, content planning, content development, posting management, and monthly reporting.",
    /*
     * Personal contribution only. Deliberately excludes Content Designer and
     * Graphic Designer — that work belonged to the coordinated team.
     */
    production: ["Creative Producer", "Project Management"],
    roleSummary:
      "Built and coordinated the creative team, led brainstorming sessions, developed and finalized proposals and presentations, and managed the ongoing monthly content planning, posting, and reporting.",
    heroMedia: {
      src: "/media/tripollar-indonesia/kv-july-01.jpg",
      alt: "TriPollar Stop VX Gold device lit against a dark textured backdrop",
    },
    gallery: [
      /* Lead media — the flagship campaign key visual. */
      {
        type: "frame",
        aspect: "1:1",
        media: {
          src: "/media/tripollar-indonesia/kv-june-01.jpg",
          alt: "Stop VX Gold 2 campaign key visual with product and model",
        },
      },
      {
        type: "pair",
        variant: "even",
        gap: "pause",
        items: [
          {
            aspect: "1:1",
            media: {
              src: "/media/tripollar-indonesia/kv-june-04.jpg",
              alt: "Two models against a dark background",
            },
          },
          {
            aspect: "1:1",
            media: {
              src: "/media/tripollar-indonesia/kv-june-06.jpg",
              alt: "Gold device resting on patterned black silk",
            },
          },
        ],
      },
      {
        type: "portrait",
        align: "right",
        aspect: "9:16",
        gap: "normal",
        media: {
          src: "/media/tripollar-indonesia/highlight-collagen-6-4.jpg",
          alt: "Collagen highlight cover",
        },
      },
      {
        type: "frame",
        aspect: "1:1",
        gap: "pause",
        media: {
          src: "/media/tripollar-indonesia/kv-june-03.jpg",
          alt: "Model with on-image skin concern annotations",
        },
      },
      {
        type: "portrait",
        align: "left",
        aspect: "9:16",
        gap: "normal",
        media: {
          src: "/media/tripollar-indonesia/highlight-product-6-6.jpg",
          alt: "Product highlight cover",
        },
      },
      {
        type: "frame",
        aspect: "1:1",
        gap: "pause",
        media: {
          src: "/media/tripollar-indonesia/kv-july-02.jpg",
          alt: "Black and white portrait of three models outdoors",
        },
      },
    ],
  },
  {
    slug: "ula-sedekah-ramadan",
    title: 'Ula "Sedekah" Ramadan Campaign',
    client: "Ula",
    /* Was "Multimedia Specialist" — a GovTech employment title, not a project
       role. Corrected per the owner's CV. */
    role: "Senior Art Director",
    discipline: "art-direction",
    year: "2022–2023",
    summary: "Ramadan CSR campaign content for Ula's retail network.",
    /* No brief or roleSummary: the owner has not supplied their contribution
       for this project, and none may be inferred. */
  },
  {
    slug: "mila-dopiz",
    title: "Social Media Content Production",
    /* "Mila" (single L) is the confirmed spelling. Source filenames write
       "Milla D_Opiz" — that is the archive's spelling, not the client's. */
    client: "Mila D'Opiz",
    /* Replaces "Multimedia Specialist", which was a GovTech job title rather
       than a project role. Mirrors TriPollar's pattern. */
    role: "Creative Production",
    discipline: "social-media",
    year: "2023–2024",
    summary: "Social media content production, from video concept through execution.",
    brief:
      "Social media content production for Mila D'Opiz, developing video concepts and producing social-first content from ideation through execution.",
    /* Personal contribution. Connects creative development, production, and
       directing — not visual execution. */
    production: ["Creative Producer", "Director"],
    roleSummary:
      "Developed video concepts, led brainstorming and proposal development, built and coordinated the production team, managed the production process, and directed the shoot through final execution.",
  },
  {
    slug: "mlbb-valentines",
    title: "MLBB Valentine's Day Campaign",
    client: "MLBB",
    role: "Gaming & Entertainment",
    discipline: "social-media",
    year: "2023",
    summary: "Seasonal content campaign for Mobile Legends: Bang Bang.",
  },
  {
    slug: "anika-worry-monster",
    title: '"Anika & the Worry Monster"',
    client: "Pibo",
    role: "Publishing",
    discipline: "publishing",
    year: "2026",
    summary: "Children's book illustration and design, published by Pibo.",
  },
];

/** Filter labels for the catalog page. `all` is prepended by the UI. */
export const disciplines: { id: Discipline; label: string }[] = [
  { id: "art-direction", label: "Art Direction" },
  { id: "executive-producer", label: "Executive Producer" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "social-media", label: "Social Media" },
  { id: "freelance-creative", label: "Freelance Creative" },
  { id: "multimedia", label: "Multimedia" },
  { id: "publishing", label: "Publishing" },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/**
 * The next project in catalog order, wrapping at the end so the detail page
 * never dead-ends. Returns undefined only when there is nothing else to show.
 */
export function getNextProject(slug: string): Project | undefined {
  if (projects.length < 2) return undefined;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
