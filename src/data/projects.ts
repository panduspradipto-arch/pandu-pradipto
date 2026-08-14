import type { Discipline, Project } from "@/types/content";

/**
 * DATA RULES — the agreed baseline. Keep records consistent with these.
 *
 * 1. `role` is the contribution on THIS project. CV employment titles are
 *    separate and live in `experience.ts` — never copy one into a project.
 *    "Multimedia Specialist" in particular is a GovTech job title.
 * 1a. `role` is OPTIONAL, and unset is the correct value whenever the
 *    contribution has not been confirmed. A deliverable ("Key Visual"), a
 *    discipline ("Graphic Design"), a sector ("Beauty & Lifestyle"), a
 *    technique ("AI-Enhanced") or an employment mode ("Freelance Creative")
 *    is not a contribution — nine records were cleared of exactly these in
 *    Step 18. Never refill one from `discipline` or `category`.
 * 2. Archive cards render `Year · Discipline`; the detail hero renders
 *    `Client · Role · Year`, collapsing to `Client · Year` when `role` is
 *    unset. The index categorises, the page attributes.
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
    media: {
      src: "/media/bank-bri-giro/giro-bri.jpg",
      alt: "Giro BRI print advertisement — two men with a bicycle outside a workshop",
      width: 970,
      height: 1456,
    },
    studio: "Dentsu",
    summary: "ATL campaign launching GIRO to young entrepreneurs.",
    featured: true,
  },
  {
    slug: "cimory-tayo-dance",
    title: '"Dance" — Campaign Film',
    client: "Cimory",
    discipline: "freelance-creative",
    year: "2024",
    summary: "Pitch-winning 15s spot with cross-border 3D animation.",
    featured: true,
  },
  {
    slug: "woods-kalbe-farma",
    title: "Kalbe Farma",
    client: "Woods'",
    discipline: "graphic-design",
    year: "2019",
    media: {
      src: "/media/woods-kalbe-farma/key-visual.jpg",
      alt: "WOODS' cough syrup key visual — a presenter in front of a crowd beside the product range",
      width: 1414,
      height: 2000,
    },
    summary: "Key visual campaign for cough-relief lozenges, talent-led and playful.",
    featured: true,
  },
  {
    slug: "hotlicks-clean-green-jakarta",
    title: "Two Brand Launches",
    client: "Hotlicks & CGJ",
    discipline: "social-media",
    year: "2023",
    summary: "Two brand identities built from zero, content and campaign management.",
    featured: true,
    media: {
      src: "/media/hotlicks-clean-green-jakarta/hotlicks-guess-whats-inside.jpg",
      alt: 'Hotlicks burger close-up with the line "Can you guess what\'s inside?"',
      width: 1080,
      height: 1080,
    },
    /*
     * Hotlicks half only. This record covers two brands and the Clean & Green
     * artwork is not migrated yet, so filenames stay brand-prefixed to keep the
     * two sets separable when the rest lands.
     */
    gallery: [
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "4:5",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/hotlicks-barbacoa-ribeye.jpg",
              alt: "Barbacoa ribeye steak on a board with fries",
            },
          },
          {
            aspect: "4:5",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/hotlicks-bar-bbq-smokehouse.jpg",
              alt: "Smoked steak on a wooden board under a Bar BBQ Smokehouse banner",
            },
          },
        ],
      },
      {
        type: "detail",
        align: "left",
        aspect: "1:1",
        gap: "pause",
        media: {
          src: "/media/hotlicks-clean-green-jakarta/hotlicks-whole-hog-feast.jpg",
          alt: 'Hotlicks pig mark above the words "The Whole Hog Family Feast"',
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "4:5",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/hotlicks-pit-crew.jpg",
              alt: 'Pit crew member tending a wood fire, "Smoking Seriously Slow" on his shirt',
            },
          },
          {
            aspect: "4:5",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/hotlicks-pit-master-carving.jpg",
              alt: "Pit master carving smoked meat on a board",
            },
          },
        ],
      },
      {
        type: "frame",
        gap: "pause",
        aspect: "1:1",
        media: {
          src: "/media/hotlicks-clean-green-jakarta/hotlicks-wood-fire.jpg",
          alt: "Wood burning in the open smoker",
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "4:5",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/hotlicks-pit-master.jpg",
              alt: "Pit master eating a burger in a Hotlicks shirt",
            },
          },
          {
            aspect: "4:5",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/hotlicks-bar-bbq-ribs.jpg",
              alt: "Two guests raising drinks over a rack of ribs",
            },
          },
        ],
      },
      {
        type: "detail",
        align: "right",
        aspect: "1:1",
        media: {
          src: "/media/hotlicks-clean-green-jakarta/hotlicks-live-cooking-show.jpg",
          alt: "Live cooking show announcement card featuring the pit master",
        },
      },
    ],
  },
  {
    slug: "mlbb-ramadan",
    title: "Ramadan Campaign",
    client: "MLBB",
    discipline: "social-media",
    year: "2023",
    summary: "AI-assisted video production with A/B creative testing.",
    featured: true,
  },
  {
    slug: "rucika-total-solution",
    title: "Total Solution",
    client: "Rucika",
    discipline: "graphic-design",
    year: "2019–20",
    media: {
      src: "/media/rucika-total-solution/kebahagiaan-air-mengalir.jpg",
      alt: "Rucika print advertisement — a family leaping through a burst of water above the pipe range",
      width: 1433,
      height: 2000,
    },
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
    media: {
      src: "/media/btn-digital-store/title-card.jpg",
      alt: "BTN Digital Store title card over a bank lobby",
      width: 1920,
      height: 1080,
    },
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
    media: {
      src: "/media/bank-mandiri-corporate/partner-bisnis-andalan.jpg",
      alt: "Bank Mandiri corporate banking advertisement — two bankers talking in a high-rise lobby",
      width: 1365,
      height: 1968,
    },
    summary: "TVC development for Bank Mandiri's corporate banking division.",
  },
  {
    slug: "xl-business-solutions",
    title: "XL Business Solutions",
    client: "XL Axiata",
    role: "Art Direction",
    discipline: "art-direction",
    year: "2021",
    media: {
      src: "/media/xl-business-solutions/paket-biz-bundling.jpg",
      alt: "XL Business Solutions advertisement — a woman with a phone beside a grid of handset bundles",
      width: 1241,
      height: 1754,
    },
    summary: "Open pitch win for XL Axiata's B2B business unit.",
  },
  {
    slug: "djabesmen-ngga-bikin-tekor",
    title: 'Djabesmen — "Ngga Bikin Tekor"',
    client: "Djabesmen",
    discipline: "graphic-design",
    year: "2019",
    media: {
      src: "/media/djabesmen-ngga-bikin-tekor/ngga-bikin-tekor.jpg",
      alt: "Djabesmen roofing advertisement — a split frame contrasting a worn roof with a new one",
      width: 2000,
      height: 1549,
    },
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
    media: {
      src: "/media/kitkat-mma-award/valentine-versi-gue.jpg",
      alt: "KitKat \"Valentine Versi Gue\" key visual — two broken KitKat fingers on red",
      width: 808,
      height: 990,
    },
    studio: "VMLY&R",
    summary: "Award-submission edit and motion graphics for KitKat Valentine's campaign.",
  },
  {
    /*
     * Confirmed 2024, a digital video commercial delivered 9:16. The earlier
     * "2019 · seasonal print campaign" summary contradicted that and has been
     * removed rather than rewritten — the owner has not supplied replacement
     * copy, and inferring one from the format would be inventing it.
     *
     * The 9:16 belongs on a `gallery` beat's `aspect`, but no ABC artwork is in
     * the repo yet, so there is no frame to carry it. Apply it when the assets
     * land; do not derive an aspect from storage dimensions (see Mila/realme).
     */
    slug: "abc-sirup-ramadan",
    title: "ABC Sirup Ramadan",
    client: "ABC",
    discipline: "graphic-design",
    year: "2024",
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
    discipline: "graphic-design",
    year: "2022",
    media: {
      src: "/media/schwarzkopf-hvar-hair/blondme-masterclass.jpg",
      alt: "Schwarzkopf Professional BLONDME Master Class poster with H'Var Hair",
      width: 1080,
      height: 1080,
    },
    summary: "Collaboration campaign for Schwarzkopf Professional Indonesia.",
    /*
     * Social feed artwork, all delivered 1:1. Beats alternate type so no two
     * neighbours share a shape, per the gallery rules in `types/content.ts`.
     */
    gallery: [
      {
        type: "frame",
        aspect: "1:1",
        media: {
          src: "/media/schwarzkopf-hvar-hair/igora-royal.jpg",
          alt: "IGORA ROYAL wordmark on a red ground",
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
              src: "/media/schwarzkopf-hvar-hair/igora-be-proud-a.jpg",
              alt: 'IGORA ROYAL — "Be Proud, Be Subtle, Be Natural, Be Genuine"',
            },
          },
          {
            aspect: "1:1",
            media: {
              src: "/media/schwarzkopf-hvar-hair/igora-be-proud-b.jpg",
              alt: "IGORA ROYAL Absolutes carton on a warm grey ground",
            },
          },
        ],
      },
      {
        type: "detail",
        align: "left",
        aspect: "1:1",
        media: {
          src: "/media/schwarzkopf-hvar-hair/blondme.jpg",
          alt: "BLONDME lettering set in large type on a pale ground",
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "1:1",
            media: {
              src: "/media/schwarzkopf-hvar-hair/igora-be-focused-a.jpg",
              alt: 'IGORA ROYAL — "Be Focused, Be Fearless, Be Cool, Be Calm"',
            },
          },
          {
            aspect: "1:1",
            media: {
              src: "/media/schwarzkopf-hvar-hair/igora-be-focused-b.jpg",
              alt: "IGORA ROYAL Fashion Lights carton on a lilac ground",
            },
          },
        ],
      },
      {
        type: "frame",
        gap: "pause",
        aspect: "1:1",
        media: {
          src: "/media/schwarzkopf-hvar-hair/before-after.jpg",
          alt: "Before and after colour comparison, dark hair to blonde",
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "1:1",
            media: {
              src: "/media/schwarzkopf-hvar-hair/igora-be-real-a.jpg",
              alt: 'IGORA ROYAL — "Be Real, Be Bold, Be Gold, Be Luminous"',
            },
          },
          {
            aspect: "1:1",
            media: {
              src: "/media/schwarzkopf-hvar-hair/igora-be-real-b.jpg",
              alt: "IGORA ROYAL Highlifts carton on a teal ground",
            },
          },
        ],
      },
      {
        type: "detail",
        align: "right",
        aspect: "1:1",
        media: {
          src: "/media/schwarzkopf-hvar-hair/masterclass-invitation.jpg",
          alt: "Master Class invitation card with Madame Cindy as speaker",
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "1:1",
            media: {
              src: "/media/schwarzkopf-hvar-hair/igora-be-original-a.jpg",
              alt: 'IGORA ROYAL — "Be Original, Be Minimal, Be Brunette, Be Pure"',
            },
          },
          {
            aspect: "1:1",
            media: {
              src: "/media/schwarzkopf-hvar-hair/igora-be-original-b.jpg",
              alt: "IGORA ROYAL carton standing on a red ground",
            },
          },
        ],
      },
      {
        type: "frame",
        gap: "pause",
        aspect: "1:1",
        media: {
          src: "/media/schwarzkopf-hvar-hair/igora-shade-range.jpg",
          alt: "IGORA ROYAL shade range laid out across the frame",
        },
      },
    ],
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
    /* The archive card reads `media`; `heroMedia` only feeds the detail
       page, so without this the card shows a placeholder despite the
       project having artwork. */
    media: {
      src: "/media/tripollar-indonesia/kv-july-01.jpg",
      alt: "TriPollar key visual — three women together, the brand mark below them",
      width: 2000,
      height: 2000,
    },
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
    discipline: "social-media",
    year: "2023",
    media: {
      src: "/media/mlbb-valentines/campaign-still.jpg",
      alt: "Mobile Legends campaign still — the game logo over a schoolyard flagpole",
      width: 1080,
      height: 1920,
    },
    summary: "Seasonal content campaign for Mobile Legends: Bang Bang.",
  },
  {
    slug: "anika-worry-monster",
    title: '"Anika & the Worry Monster"',
    client: "Pibo",
    /* Credit printed on the published cover: "Illustrator: Pandu Pradipto".
       Verified from the artwork itself, not inferred. */
    role: "Illustrator",
    discipline: "publishing",
    year: "2026",
    summary: "Children's book illustration and design, published by Pibo.",
    /* The archive card reads `media`; `heroMedia` only feeds the detail
       page, so without this the card shows a placeholder despite the
       project having artwork. */
    media: {
      src: "/media/anika-worry-monster/cover.jpg",
      alt: "Cover of Anika & the Worry Monster",
      width: 1414,
      height: 2000,
    },
    heroMedia: {
      src: "/media/anika-worry-monster/cover.jpg",
      alt: "Cover of Anika & the Worry Monster",
    },
    /* Cover and back cover only — interior pages are not published. */
    gallery: [
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "4:5",
            media: {
              src: "/media/anika-worry-monster/cover.jpg",
              alt: "Front cover",
            },
          },
          {
            aspect: "4:5",
            media: {
              src: "/media/anika-worry-monster/back-cover.jpg",
              alt: "Back cover",
            },
          },
        ],
      },
    ],
    credits: [{ role: "Author", name: "Inaara Keswani" }],
  },

  /*
   * GovTech Procurement.
   *
   * Employment at GovTech is recorded separately in experience.ts as
   * "Multimedia Specialist" — that title is NOT reused here. The roles below
   * are the owner's stated contribution, and they differ per asset:
   *   · Google Summit documentation → Videographer
   *   · Tutorial Penggunaan         → Art Director and Animator
   */
  {
    slug: "govtech-procurement",
    title: "GovTech Procurement",
    client: "GovTech Procurement",
    role: "Creative Art Director & Content Production",
    /* Discipline id, not the employment title. See DATA RULES above. */
    discipline: "multimedia",
    year: "2023–2024",
    summary: "Content production, motion graphics, and video for GovTech Procurement.",
    production: ["Art Director", "Animator", "Videographer"],
    /* Owner's words, verbatim. Covers Art Direction, animation, and videography
       explicitly — no separate `brief`, so nothing is invented around it. */
    roleSummary:
      "Led the creative direction and content production for GovTech Procurement, developing digital video content and motion assets from concept through production. Responsible for Creative Art Direction, animation, and videography, ensuring the content maintained a clear visual identity and translated the GovTech message effectively across digital formats.",
    /* Three externally hosted films. No MP4 is bundled into the repo. */
    gallery: [
      {
        type: "film",
        bleed: true,
        video: { provider: "youtube", id: "zVivSwkTtaY" },
        caption: "Content Reels Production",
      },
      {
        type: "film",
        gap: "pause",
        video: { provider: "youtube", id: "ByVB-W2cpPE" },
        caption: "Motion Graphic Logo Bumper",
      },
      {
        type: "film",
        gap: "pause",
        video: { provider: "youtube", id: "MGxsfQEYh9Y" },
        caption: "Creative Art Director — Digital Video Commercial",
      },
    ],
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
