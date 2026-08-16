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
    /* Owner's file naming is authoritative — file: TVC 2022 - BRI Giro + KV Giro 2024. */
    year: "2022–2024",
    media: {
      /* Same artwork as before, re-exported from the owner's curated source at
         1344x2000 — the earlier file was 970x1456. */
      src: "/media/bank-bri-giro/giro-bri.jpg",
      alt: "Giro BRI print advertisement — two men with a bicycle outside a workshop",
      width: 1344,
      height: 2000,
    },
    studio: "Dentsu",
    summary: "ATL campaign launching GIRO to young entrepreneurs.",
    featured: true,
    /*
     * Giro artwork only. The owner's asset folder also holds eighteen other BRI
     * pieces — Briguna, KPR, Kartini, HIMBARA, SR015, ST008, SBR-010, BRIefx
     * and IBBIZ — which belong to different BRI engagements, not to Giro. They
     * stay out until there is a record to put them in.
     */
    gallery: [
      {
        type: "bleed",
        aspect: "3:2",
        media: {
          src: "/media/bank-bri-giro/giro-korporasi.jpg",
          alt: "Giro BRI corporate advertisement — a businessman on the phone at his desk",
        },
      },
      {
        type: "pair",
        variant: "even",
        gap: "pause",
        items: [
          {
            aspect: "9:16",
            media: {
              src: "/media/bank-bri-giro/giro-ukm-workshop.jpg",
              alt: "Giro BRI advertisement — two craftsmen working on a leather piece",
            },
          },
          {
            aspect: "9:16",
            media: {
              src: "/media/bank-bri-giro/giro-ukm-cafe.jpg",
              alt: "Giro BRI advertisement — baristas at work behind a café counter",
            },
          },
        ],
      },
      {
        type: "frame",
        aspect: "16:9",
        media: {
          src: "/media/bank-bri-giro/giro-tvc-still.jpg",
          alt: "Still from the Giro BRI commercial — a man reviewing a folder",
        },
        caption: "Still from the campaign film",
      },
    ],
  },
  {
    slug: "cimory-tayo-dance",
    title: '"Dance" — Campaign Film',
    client: "Cimory",
    discipline: "freelance-creative",
    year: "2024",
    media: {
      src: "/media/cimory-tayo-dance/cimory-tayo-dance.jpg",
      alt: "Still from the Cimory x Tayo film — the Tayo bus with children on a lawn",
      width: 1920,
      height: 1080,
    },
    /* Poster stills from the film. No public video URL exists, so these are
       images rather than `film` beats; swap them when a URL lands. */
    gallery: [
      {
        type: "frame",
        aspect: "16:9",
        media: {
          src: "/media/cimory-tayo-dance/cimory-tayo-park.jpg",
          alt: "Giant Cimory bottles and the Tayo bus at the park entrance",
        },
        caption: "Still from the campaign film",
      },
    ],
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
    gallery: [
      {
        type: "frame",
        aspect: "3:2",
        media: {
          src: "/media/woods-kalbe-farma/woods-lozenges-lanjut.jpg",
          alt: 'WOODS\' lozenges key visual — a caricatured singer beside the Honey Lemon and Blackcurrant packs',
        },
      },
      {
        type: "portrait",
        align: "right",
        aspect: "4:5",
        gap: "pause",
        media: {
          src: "/media/woods-kalbe-farma/woods-lozenges-new-formula.jpg",
          alt: "WOODS' Peppermint Lozenges new formula key visual with honey, lemon and blackcurrant",
        },
      },
    ],
    featured: true,
  },
  {
    slug: "hotlicks-clean-green-jakarta",
    title: "Two Brand Launches",
    client: "Hotlicks & CGJ",
    discipline: "social-media",
    /* Owner's file naming is authoritative — file: Branding 2022 Clean & Green; Hotlicks 2023. */
    year: "2022–2023",
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

      /* ---- Clean & Green Jakarta — the second brand in this record ---- */
      {
        type: "frame",
        gap: "pause",
        aspect: "1:1",
        media: {
          src: "/media/hotlicks-clean-green-jakarta/clean-green-plastic-monster.jpg",
          alt: 'Plastic bag drawn as a monster under the line "How Can A Plastic Can Be A Monster"',
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "1:1",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/clean-green-beverage-cartons.jpg",
              alt: 'Beverage cartons with cartoon eyes — "Your used beverage cartons can be useful!"',
            },
          },
          {
            aspect: "1:1",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/clean-green-sorting-dry-waste.jpg",
              alt: 'Yellow waste bag drawn as a character — "The Next Level of Sorting Waste"',
            },
          },
        ],
      },
      {
        type: "detail",
        align: "left",
        aspect: "1:1",
        media: {
          src: "/media/hotlicks-clean-green-jakarta/clean-green-logo.jpg",
          alt: "Clean & Green Jakarta logo lockup",
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "3:2",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/clean-green-tshirts.jpg",
              alt: "Branded t-shirts, front and back",
            },
          },
          {
            aspect: "3:2",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/clean-green-bottles.jpg",
              alt: "Two branded drinking bottles",
            },
          },
        ],
      },
      {
        type: "portrait",
        align: "right",
        aspect: "9:16",
        gap: "pause",
        media: {
          src: "/media/hotlicks-clean-green-jakarta/clean-green-bottle-photo.jpg",
          alt: "Hands holding a used plastic bottle, tinted green",
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "3:2",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/clean-green-tote.jpg",
              alt: "Branded tote bag with the pattern applied",
            },
          },
          {
            aspect: "3:2",
            media: {
              src: "/media/hotlicks-clean-green-jakarta/clean-green-bin-bag.jpg",
              alt: "Branded bin bag",
            },
          },
        ],
      },
      {
        type: "frame",
        aspect: "3:2",
        media: {
          src: "/media/hotlicks-clean-green-jakarta/clean-green-bins.jpg",
          alt: "Three waste bins in the brand's colours",
        },
      },
      {
        type: "detail",
        align: "right",
        aspect: "1:1",
        media: {
          src: "/media/hotlicks-clean-green-jakarta/clean-green-anxious-about-waste.jpg",
          alt: 'Green character on a blue ground — "Which of these photos makes you even more anxious about waste?"',
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
    media: {
      src: "/media/mlbb-ramadan/mlbb-ramadhan-talent.jpg",
      alt: "Still from the MLBB Ramadan film — talent in front of character posters",
      width: 1080,
      height: 1920,
    },
    /* Poster stills from the film. No public video URL exists, so these are
       images rather than `film` beats; swap them when a URL lands. */
    gallery: [
      {
        type: "portrait",
        aspect: "9:16",
        align: "left",
        media: {
          src: "/media/mlbb-ramadan/mlbb-ramadhan-phone.jpg",
          alt: "A hand reaching for a phone on a table",
        },
        caption: "Still from the campaign film",
      },
    ],
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
    /*
     * The record spans both Rucika years, so the run holds both: the 2019
     * Total Solution system work and the 2020 TVC that followed it.
     */
    gallery: [
      {
        type: "frame",
        aspect: "3:2",
        media: {
          src: "/media/rucika-total-solution/rucika-tvc-2020-frames.jpg",
          alt: "Sequence of frames from the Rucika TVC, laid out across a board",
        },
      },
      {
        type: "portrait",
        align: "left",
        aspect: "4:5",
        gap: "pause",
        media: {
          src: "/media/rucika-total-solution/rucika-solusi-total.jpg",
          alt: 'Rucika key visual — "Dari Sebuah Totalitas Hadir Produk Berkualitas"',
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "9:16",
            media: {
              src: "/media/rucika-total-solution/rucika-system-boards.jpg",
              alt: "Stacked product banners for the piping range",
            },
          },
          {
            aspect: "9:16",
            media: {
              src: "/media/rucika-total-solution/rucika-pipe-system-icons.jpg",
              alt: "Eight numbered icons making up the total piping system",
            },
          },
        ],
      },
      {
        type: "detail",
        align: "right",
        aspect: "3:2",
        media: {
          src: "/media/rucika-total-solution/rucika-hygienic-water-system.jpg",
          alt: "Rucika Hygienic Water System mark, powered by Maezawa",
        },
      },
      {
        type: "frame",
        gap: "pause",
        aspect: "3:2",
        media: {
          src: "/media/rucika-total-solution/rucika-tvc-still.jpg",
          alt: "Still from the TVC — a woman washing up at a kitchen sink",
        },
      },
    ],
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
    gallery: [
      {
        type: "frame",
        aspect: "16:9",
        media: {
          src: "/media/btn-digital-store/showroom.jpg",
          alt: "Still from the BTN Digital Store film — customers in a bank showroom",
        },
        caption: "Still from the campaign film",
      },
    ],
  },
  {
    slug: "bank-mandiri-corporate",
    title: "Bank Mandiri — Corporate Banking",
    client: "Bank Mandiri",
    role: "Art Direction",
    discipline: "art-direction",
    /* Owner's file naming is authoritative — file: KV/DVC 2020 - Mandiri Corporate Bank. */
    year: "2020",
    media: {
      src: "/media/bank-mandiri-corporate/partner-bisnis-andalan.jpg",
      alt: "Bank Mandiri corporate banking advertisement — two bankers talking in a high-rise lobby",
      width: 1365,
      height: 1968,
    },
    summary: "TVC development for Bank Mandiri's corporate banking division.",
    gallery: [
      {
        type: "portrait",
        align: "left",
        aspect: "9:16",
        media: {
          src: "/media/bank-mandiri-corporate/mandiri-selalu-di-sisi-anda.jpg",
          alt: 'Bank Mandiri advertisement — "selalu di sisi Anda, wujudkan setiap rencana besar"',
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "9:16",
            media: {
              src: "/media/bank-mandiri-corporate/partner-andalan.jpg",
              alt: 'Bank Mandiri advertisement — "partner andalan memberikan segala kemudahan"',
            },
          },
          {
            aspect: "9:16",
            media: {
              src: "/media/bank-mandiri-corporate/partner-terpercaya.jpg",
              alt: 'Bank Mandiri advertisement — "partner terpercaya, wujudkan langkah besar Anda"',
            },
          },
        ],
      },
    ],
  },
  {
    slug: "xl-business-solutions",
    title: "XL Business Solutions",
    client: "XL Axiata",
    role: "Art Direction",
    discipline: "art-direction",
    /* Owner's file naming is authoritative — file: KV Vertical - XL Business Solution 2019. */
    year: "2019",
    media: {
      src: "/media/xl-business-solutions/paket-biz-bundling.jpg",
      alt: "XL Business Solutions advertisement — a woman with a phone beside a grid of handset bundles",
      width: 1241,
      height: 1754,
    },
    summary: "Open pitch win for XL Axiata's B2B business unit.",
    /*
     * A-series poster artwork (0.707). `4:5` is the house ratio for that shape —
     * the same choice the Anika covers already make — since the beat aspects are
     * a fixed set and the frames cover-fit.
     */
    gallery: [
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "4:5",
            media: {
              src: "/media/xl-business-solutions/xl-inovasi-baru.jpg",
              alt: 'XL Business Solutions — "Inovasi Baru untuk Mengangkat Bisnis Anda!"',
            },
          },
          {
            aspect: "4:5",
            media: {
              src: "/media/xl-business-solutions/xl-innovated-solution.jpg",
              alt: 'XL Business Solutions — "Innovated Solution to innovate your Vision"',
            },
          },
        ],
      },
      {
        type: "portrait",
        align: "left",
        aspect: "4:5",
        gap: "pause",
        media: {
          src: "/media/xl-business-solutions/xl-nbiot-simply-managed.jpg",
          alt: 'XL Axiata NB-IoT — "Simply Managed and Securely Connected"',
        },
      },
      {
        type: "detail",
        align: "right",
        aspect: "4:5",
        media: {
          src: "/media/xl-business-solutions/xl-nbiot-precious-offer.jpg",
          alt: 'XL Axiata NB-IoT — "Our Precious Offer for Your IoT Solution"',
        },
      },
    ],
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
    media: {
      src: "/media/prudential-syariah/prudential-foodcourt.jpg",
      alt: "Still from the Prudential Syariah film — a food court under string lights",
      width: 1280,
      height: 720,
    },
    /* Poster stills from the film. No public video URL exists, so these are
       images rather than `film` beats; swap them when a URL lands. */
    gallery: [
      {
        type: "frame",
        aspect: "16:9",
        media: {
          src: "/media/prudential-syariah/prudential-table.jpg",
          alt: "Two women talking at a table",
        },
        caption: "Still from the campaign film",
      },
    ],
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
    gallery: [
      {
        type: "frame",
        aspect: "16:9",
        media: {
          src: "/media/kitkat-mma-award/kitkat-valentine-still.jpg",
          alt: "Still from the KitKat Valentine edit — three people eating KitKat",
        },
        caption: "Still from the campaign film",
      },
    ],
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
    media: {
      src: "/media/abc-sirup-ramadan/abc-family.jpg",
      alt: "Still from the ABC Sirup film — a family gathered around the table",
      width: 607,
      height: 1080,
    },
    /* Poster stills from the film. No public video URL exists, so these are
       images rather than `film` beats; swap them when a URL lands. */
    gallery: [
      {
        type: "portrait",
        aspect: "9:16",
        align: "left",
        media: {
          src: "/media/abc-sirup-ramadan/abc-product.jpg",
          alt: "ABC Sirup bottles arranged in a basket",
        },
        caption: "Still from the campaign film",
      },
    ],
  },
  {
    slug: "realme-14-series",
    title: "Realme 14 Series 5G",
    client: "Realme",
    role: "Executive Producer",
    discipline: "executive-producer",
    year: "2025",
    media: {
      src: "/media/realme-14-series/realme-street.jpg",
      alt: "Still from the realme film — a man beside a yellow car holding the phone",
      width: 607,
      height: 1080,
    },
    /* Poster stills from the film. No public video URL exists, so these are
       images rather than `film` beats; swap them when a URL lands. */
    gallery: [
      {
        type: "portrait",
        aspect: "9:16",
        align: "left",
        media: {
          src: "/media/realme-14-series/realme-device.jpg",
          alt: "Close-up of the realme handset in hand",
        },
        caption: "Still from the campaign film",
      },
    ],
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
    media: {
      src: "/media/jnt-express/jnt-courier-portrait.jpg",
      alt: "J&T Express courier laughing on a motorbike in the studio",
      width: 2000,
      height: 1333,
    },
    /*
     * Photographed by Bhagas N, per the owner's 2026 deck. The owner produced
     * this shoot rather than shooting it, so the credit is stated to keep the
     * authorship of the frames unambiguous.
     */
    credits: [{ role: "Photographer", name: "Bhagas N" }],
    gallery: [
      {
        type: "bleed",
        aspect: "3:2",
        media: {
          src: "/media/jnt-express/jnt-courier-scooter.jpg",
          alt: "Courier riding a scooter with a J&T delivery bag, side on",
        },
      },
      {
        type: "pair",
        variant: "even",
        gap: "pause",
        items: [
          {
            aspect: "3:2",
            media: {
              src: "/media/jnt-express/jnt-delivery-received.jpg",
              alt: "Three friends reacting to a parcel on the table",
            },
          },
          {
            aspect: "3:2",
            media: {
              src: "/media/jnt-express/jnt-living-room.jpg",
              alt: "Living room scene with a J&T parcel on the coffee table",
            },
          },
        ],
      },
      {
        type: "portrait",
        align: "right",
        aspect: "9:16",
        media: {
          src: "/media/jnt-express/jnt-courier-calling.jpg",
          alt: "Courier calling out, hands cupped to his mouth",
        },
      },
      {
        type: "frame",
        gap: "pause",
        aspect: "3:2",
        media: {
          src: "/media/jnt-express/jnt-envelope-studio.jpg",
          alt: "Talent holding a J&T envelope, studio lights in frame",
        },
      },
    ],
  },
  {
    slug: "schwarzkopf-hvar-hair",
    title: "Schwarzkopf Pro x H'var Hair",
    displayTitle: "H'var Hair",
    client: "Schwarzkopf Professional",
    discipline: "graphic-design",
    /* Owner's file naming is authoritative — file: Content Video 2023 - Schwarzkopf. */
    year: "2023",
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
    media: {
      src: "/media/ula-sedekah-ramadan/ula-team-rooftop.jpg",
      alt: "Ula team on a rooftop with the Jakarta skyline behind them",
      width: 2000,
      height: 1125,
    },
    /*
     * Team photography, shot by the owner. The set runs to 32 finished frames
     * built from a handful of repeated setups, so this is an edit rather than
     * the full take — one frame per subject, and a spread of studio and
     * location work. The rest stay in the archive.
     */
    gallery: [
      {
        type: "bleed",
        aspect: "16:9",
        media: {
          src: "/media/ula-sedekah-ramadan/ula-team-skyline.jpg",
          alt: "Four of the team talking on a rooftop, towers rising behind them",
        },
      },
      {
        type: "pair",
        variant: "even",
        gap: "pause",
        items: [
          {
            aspect: "3:2",
            media: {
              src: "/media/ula-sedekah-ramadan/ula-team-products.jpg",
              alt: "The team in studio among stacked cartons and packaged goods",
            },
          },
          {
            aspect: "3:2",
            media: {
              src: "/media/ula-sedekah-ramadan/ula-team-inventory.jpg",
              alt: "The team holding products in front of a wall of stock",
            },
          },
        ],
      },
      {
        type: "frame",
        aspect: "3:2",
        media: {
          src: "/media/ula-sedekah-ramadan/ula-team-studio.jpg",
          alt: "The team shoulder to shoulder against a white studio backdrop",
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "9:16",
            media: {
              src: "/media/ula-sedekah-ramadan/ula-portrait-01.jpg",
              alt: "Studio portrait, arms raised",
            },
          },
          {
            aspect: "9:16",
            media: {
              src: "/media/ula-sedekah-ramadan/ula-portrait-02.jpg",
              alt: "Studio portrait, seated on a stool",
            },
          },
        ],
      },
      {
        type: "portrait",
        align: "left",
        aspect: "9:16",
        gap: "pause",
        media: {
          src: "/media/ula-sedekah-ramadan/ula-team-rooftop-portrait.jpg",
          alt: "The team crouched together on the rooftop deck",
        },
      },
      {
        type: "pair",
        variant: "even",
        items: [
          {
            aspect: "9:16",
            media: {
              src: "/media/ula-sedekah-ramadan/ula-portrait-03.jpg",
              alt: "Location portrait against the glass of an office tower",
            },
          },
          {
            aspect: "9:16",
            media: {
              src: "/media/ula-sedekah-ramadan/ula-portrait-04.jpg",
              alt: "Studio portrait, standing",
            },
          },
        ],
      },
      {
        type: "frame",
        aspect: "16:9",
        media: {
          src: "/media/ula-sedekah-ramadan/ula-team-studio-wide.jpg",
          alt: "The team laughing together in the studio",
        },
      },
      {
        type: "portrait",
        align: "right",
        aspect: "9:16",
        media: {
          src: "/media/ula-sedekah-ramadan/ula-team-rooftop-tall.jpg",
          alt: "The team standing on the rooftop, towers filling the frame above",
        },
      },
    ],
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
    media: {
      src: "/media/mila-dopiz/mila-serum-talent.jpg",
      alt: "Still from the Mila D'Opiz film — talent holding the serum",
      width: 1080,
      height: 1920,
    },
    /* Poster stills from the film. No public video URL exists, so these are
       images rather than `film` beats; swap them when a URL lands. */
    gallery: [
      {
        type: "portrait",
        aspect: "9:16",
        align: "left",
        media: {
          src: "/media/mila-dopiz/mila-product.jpg",
          alt: "Mila D'Opiz concentrate bottle on a dark surface",
        },
        caption: "Still from the campaign film",
      },
    ],
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
    /* Owner's file naming is authoritative — file: DVC 2026 - MLBB Valentine x Zee Asadel. */
    year: "2026",
    gallery: [
      {
        type: "frame",
        aspect: "16:9",
        media: {
          src: "/media/mlbb-valentines/mlbb-valentine-still.jpg",
          alt: "Still from the MLBB Valentine film — a student holding a bouquet under an umbrella",
        },
        caption: "Still from the campaign film",
      },
    ],
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
    media: {
      src: "/media/govtech-procurement/govtech-ekatalog.jpg",
      alt: "Still from the LKPP e-Katalog film — a village official using a tablet",
      width: 1920,
      height: 1080,
    },
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
      {
        type: "frame",
        aspect: "16:9",
        media: {
          src: "/media/govtech-procurement/govtech-google-summit.jpg",
          alt: "Google Cloud Summit Jakarta stage screen",
        },
        caption: "Event documentation — Google Cloud Summit Jakarta",
      },
    ],
  },
  {
    /* Role and year confirmed by the owner. `summary` is deliberately unset —
       none was supplied, and none may be written from artwork. */
    slug: "telon-lang-sentuhan-ibu",
    title: "Sentuhan Hangat Cinta Ibu",
    client: "Telon Lang",
    role: "Senior Graphic Design",
    discipline: "graphic-design",
    year: "2018–2019",
    studio: "Dwi Sapta",
    media: {
      src: "/media/telon-lang/telon-sentuhan-ibu.jpg",
      alt: "Telon Lang key visual — a mother massaging her baby",
      width: 1491,
      height: 2000,
    },
    gallery: [
      { type: "pair", variant: "even", items: [
        { aspect: "4:5", media: { src: "/media/telon-lang/telon-plus-sentuhan-ibu.jpg", alt: "Telon Lang Plus key visual — a mother and child playing on the floor" } },
        { aspect: "4:5", media: { src: "/media/telon-lang/telon-product-2018.jpg", alt: "Telon Lang Plus 10 Jam product key visual" } },
      ] },
      { type: "detail", align: "left", aspect: "1:1", gap: "pause",
        media: { src: "/media/telon-lang/telon-maskot.jpg", alt: "Telon Lang bottle mascot character" } },
      { type: "pair", variant: "even", items: [
        { aspect: "3:2", media: { src: "/media/telon-lang/telon-ceria.jpg", alt: "Telon Lang Ceria carton and bottle" } },
        { aspect: "3:2", media: { src: "/media/telon-lang/telon-posm-umbul.jpg", alt: "Telon Lang street banners installed along a shopfront row" } },
      ] },
      { type: "frame", aspect: "16:9", gap: "pause",
        media: { src: "/media/telon-lang/telon-storyboard.jpg", alt: "Frame from the Telon Lang product storyboard" } },
      { type: "portrait", align: "right", aspect: "4:5",
        media: { src: "/media/telon-lang/telon-tactical.jpg", alt: "Telon Lang tactical promotion key visual for Alfamart" } },
    ],
  },
  {
    /* The finished, public-facing JOAYO work. The confidential pitch and source
       material for this client remains excluded. */
    slug: "joayo-mantan-cemilan",
    title: "Mantan Cemilan",
    client: "JOAYO",
    role: "Senior Graphic Design",
    discipline: "graphic-design",
    year: "2020",
    studio: "Dwi Sapta",
    media: {
      src: "/media/joayo/joayo-kv.jpg",
      alt: "JOAYO key visual — Love at the First Crunch",
      width: 1414,
      height: 2000,
    },
    gallery: [
      { type: "pair", variant: "even", items: [
        { aspect: "1:1", media: { src: "/media/joayo/joayo-content-1.jpg", alt: "JOAYO social post — a woman laughing" } },
        { aspect: "1:1", media: { src: "/media/joayo/joayo-content-2.jpg", alt: "JOAYO social post — a woman in tears" } },
      ] },
      { type: "frame", aspect: "16:9", gap: "pause",
        media: { src: "/media/joayo/joayo-store-gate.jpg", alt: "JOAYO store gate installed at a convenience store entrance" } },
      { type: "pair", variant: "even", items: [
        { aspect: "3:2", media: { src: "/media/joayo/joayo-table-display.jpg", alt: "JOAYO table display unit" } },
        { aspect: "16:9", media: { src: "/media/joayo/joayo-wobbler.jpg", alt: "JOAYO wobbler and gondola display in aisle" } },
      ] },
      { type: "frame", aspect: "16:9",
        media: { src: "/media/joayo/joayo-storyboard.jpg", alt: "Frame from the JOAYO storyboard" } },
    ],
  },
  {
    slug: "ensure-loyalty-program",
    title: "Ensure Loyalty Program",
    client: "Ensure",
    role: "Art Director",
    discipline: "art-direction",
    year: "2024",
    studio: "Dentsu",
    media: {
      src: "/media/ensure/ensure-loyalty-1.jpg",
      alt: "Ensure Gold Loyalty Program key visual",
      width: 1414,
      height: 2000,
    },
    gallery: [
      { type: "pair", variant: "even", items: [
        { aspect: "4:5", media: { src: "/media/ensure/ensure-loyalty-2.jpg", alt: "Ensure Loyalty Program visual with a voucher offer" } },
        { aspect: "4:5", media: { src: "/media/ensure/ensure-loyalty-3.jpg", alt: "Ensure Loyalty Program visual with two people drinking Ensure" } },
      ] },
      { type: "pair", variant: "even", gap: "pause", items: [
        { aspect: "9:16", media: { src: "/media/ensure/ensure-story-1.jpg", alt: "Ensure story frame — a man holding a glass beside an exercise bike" } },
        { aspect: "9:16", media: { src: "/media/ensure/ensure-story-2.jpg", alt: "Ensure story frame — join the Loyalty Program" } },
      ] },
      { type: "frame", aspect: "16:9", gap: "pause",
        media: { src: "/media/ensure/ensure-storyboard-1.jpg", alt: "Storyboard frame explaining how to join the programme" } },
      { type: "detail", align: "right", aspect: "16:9",
        media: { src: "/media/ensure/ensure-storyboard-2.jpg", alt: "Storyboard frame — entering a verification code on a phone" } },
    ],
  },
  {
    /* `role` is unset: the owner supplied artwork and year for this project but
       not a contribution, and rule 1a says unset is correct rather than a guess. */
    slug: "takeda-cegah-dbd",
    title: "Cegah DBD",
    client: "Takeda",
    discipline: "graphic-design",
    year: "2026",
    media: {
      src: "/media/takeda/takeda-family.jpg",
      alt: "Dengue prevention key visual — a family on a sofa",
      width: 2000,
      height: 1000,
    },
    gallery: [
      { type: "pair", variant: "even", items: [
        { aspect: "16:9", media: { src: "/media/takeda/takeda-anak.jpg", alt: "Dengue prevention key visual addressing children" } },
        { aspect: "16:9", media: { src: "/media/takeda/takeda-ibu.jpg", alt: "Dengue prevention key visual addressing mothers" } },
      ] },
      { type: "pair", variant: "even", gap: "pause", items: [
        { aspect: "16:9", media: { src: "/media/takeda/takeda-ayah.jpg", alt: "Dengue prevention key visual addressing fathers" } },
        { aspect: "16:9", media: { src: "/media/takeda/takeda-nenek.jpg", alt: "Dengue prevention key visual addressing older adults" } },
      ] },
    ],
  },
  {
    /*
     * Separate from `bank-bri-giro`. That record is the Giro brand film; this
     * one holds the wider BRI engagement across Maleo and Dentsu — retail
     * lending, investment products, tactical promos and two identity revamps.
     */
    slug: "bank-bri-campaigns",
    title: "Campaign Key Visuals",
    client: "Bank BRI",
    role: "Art Director",
    discipline: "art-direction",
    year: "2021–2024",
    studio: "Maleo & Dentsu",
    media: {
      src: "/media/bank-bri/bri-briguna.jpg",
      alt: "BRIguna Merdeka key visual — a graduate against a blue sky",
      width: 1429,
      height: 2000,
    },
    gallery: [
      { type: "bleed", aspect: "16:9",
        media: { src: "/media/bank-bri/bri-visa-tactical.jpg", alt: "BRI tactical promotion banner with partner offers" } },
      { type: "pair", variant: "even", gap: "pause", items: [
        { aspect: "4:5", media: { src: "/media/bank-bri/bri-kartini.jpg", alt: "BRI Private key visual for Kartini's Day privileges" } },
        { aspect: "4:5", media: { src: "/media/bank-bri/bri-kpr.jpg", alt: "KPR BRI Top Up key visual with a voucher offer" } },
      ] },
      { type: "portrait", align: "left", aspect: "4:5",
        media: { src: "/media/bank-bri/bri-himbara.jpg", alt: "BRI travel campaign key visual shot in Bali" } },
      { type: "pair", variant: "even", items: [
        { aspect: "4:5", media: { src: "/media/bank-bri/bri-davestera.jpg", alt: "BRI Prioritas Davestera investment key visual" } },
        { aspect: "4:5", media: { src: "/media/bank-bri/bri-sbr010.jpg", alt: "SBR010 investment key visual — figures stepping through open doors" } },
      ] },
      { type: "frame", aspect: "21:9", gap: "pause",
        media: { src: "/media/bank-bri/bri-briefx.jpg", alt: "BRIefx Foreign Exchange Solution logo revamp" } },
      { type: "pair", variant: "even", items: [
        { aspect: "9:16", media: { src: "/media/bank-bri/bri-tactical-1.jpg", alt: "BRI tactical promo story frame with partner discounts" } },
        { aspect: "9:16", media: { src: "/media/bank-bri/bri-tactical-2.jpg", alt: "BRI Private greeting frame for Mawlid an-Nabi" } },
      ] },
      { type: "detail", align: "right", aspect: "3:2",
        media: { src: "/media/bank-bri/bri-ibbiz.jpg", alt: "BRI ibbiz logo revamp" } },
      { type: "frame", aspect: "21:9", gap: "pause",
        media: { src: "/media/bank-bri/bri-debit-card.jpg", alt: "BRI debit card special edition designs" } },
    ],
  },
  {
    /* Poster stills — no public URL for these films, so images stand in and the
       beats can become `film` when a URL exists. */
    slug: "micromine-manifesto",
    title: "Manifesto",
    client: "Micromine",
    role: "Creative Director",
    discipline: "art-direction",
    year: "2023",
    media: {
      src: "/media/micromine/micromine-quarry.jpg",
      alt: "Still from the Micromine company film — a haul truck working an open pit",
      width: 1920,
      height: 1080,
    },
    gallery: [
      { type: "frame", aspect: "16:9",
        media: { src: "/media/micromine/micromine-manifesto.jpg", alt: "Still from the Micromine film — figures silhouetted against dust and light" },
        caption: "Still from the company film" },
    ],
  },
  {
    slug: "royco-aadc",
    title: "AADC Teaser",
    client: "Royco",
    role: "Project Manager",
    discipline: "multimedia",
    year: "2026",
    studio: "Seven Sunday Films",
    media: {
      src: "/media/royco/royco-teaser.jpg",
      alt: "Still from the Royco teaser — a woman at a desk",
      width: 1920,
      height: 1080,
    },
    gallery: [
      { type: "portrait", align: "right", aspect: "9:16",
        media: { src: "/media/royco/royco-vertical.jpg", alt: "Vertical still from the Royco teaser — a woman at a vintage microphone" },
        caption: "Still from the campaign film" },
    ],
  },
  {
    slug: "japota-jkt48",
    title: "Japota x JKT48 Press Conference",
    client: "Japota",
    role: "Videographer",
    discipline: "multimedia",
    year: "2024",
    media: {
      src: "/media/japota/japota-press-conference.jpg",
      alt: "Press conference stage with Japota packaging behind the speakers",
      width: 1276,
      height: 720,
    },
    gallery: [
      { type: "frame", aspect: "16:9",
        media: { src: "/media/japota/japota-beef-bbq.jpg", alt: "Speaker presenting the Beef BBQ variant on stage" },
        caption: "Event documentation" },
    ],
  },
  /* ---- Pitch / exploration work ----
   * Shown on the strength of the craft. No outcome is stated for any of these:
   * whether a pitch was won is not part of the work, and the owner asked that
   * they not be framed that way. `role` is unset throughout — none was supplied.
   * Each is labelled "Pitch" via `category`, matching the [Pitch] prefix the
   * owner uses in his own file naming.
   */
  {
    slug: "antangin-bablas-angin",
    title: "Hangatnya Antangin",
    client: "Antangin",
    category: "Pitch",
    discipline: "graphic-design",
    year: "2019",
    studio: "Dwi Sapta",
    summary: "Pitch project.",
    media: { src: "/media/antangin/antangin-bablas-angin.jpg", alt: "Antangin JRG key visual surrounded by herbs and honey", width: 1313, height: 2000 },
    gallery: [
      { type: "portrait", align: "right", aspect: "4:5",
        media: { src: "/media/antangin/antangin-pantang-keanginan.jpg", alt: "Antangin JRG key visual — Hangatnya Pantang Keanginan" } },
    ],
  },
  {
    slug: "balsem-lang-pitch",
    title: "Sikat Sama Balsem Lang",
    client: "Balsem Lang",
    category: "Pitch",
    discipline: "graphic-design",
    year: "2020",
    studio: "Dwi Sapta",
    summary: "Pitch project.",
    media: { src: "/media/balsem-lang/balsem-cepat-aktif.jpg", alt: "Balsem Lang key visual with a superhero figure and product", width: 1414, height: 2000 },
    gallery: [
      { type: "frame", aspect: "3:2",
        media: { src: "/media/balsem-lang/balsem-concall.jpg", alt: "Balsem Lang key visual set inside a video-call grid" } },
      { type: "pair", variant: "even", gap: "pause", items: [
        { aspect: "16:9", media: { src: "/media/balsem-lang/balsem-tenda.jpg", alt: "Balsem Lang event tents in a public square" } },
        { aspect: "3:2", media: { src: "/media/balsem-lang/balsem-shelf-talker.jpg", alt: "Balsem Lang shelf talker on a retail shelf" } },
      ] },
    ],
  },
  {
    slug: "benstar-energi",
    title: "Energi untuk Terus Beraksi",
    client: "BenStar",
    category: "Pitch",
    discipline: "graphic-design",
    year: "2020",
    studio: "Dwi Sapta",
    summary: "Pitch project.",
    media: { src: "/media/benstar/benstar-energi-1.jpg", alt: "BenStar key visual — children as heroes against a cosmic background", width: 1414, height: 2000 },
    gallery: [
      { type: "portrait", align: "left", aspect: "4:5",
        media: { src: "/media/benstar/benstar-energi-2.jpg", alt: "BenStar key visual — children bursting out of a comic panel" } },
    ],
  },
  {
    slug: "daihatsu-genuine-oil",
    title: "Satu Oli untuk Semua Sahabat",
    client: "Daihatsu",
    category: "Pitch",
    discipline: "graphic-design",
    year: "2018–2019",
    studio: "Dwi Sapta",
    summary: "Pitch project.",
    media: { src: "/media/daihatsu/daihatsu-satu-oli.jpg", alt: "Daihatsu Genuine Oil key visual with the model range", width: 1274, height: 2000 },
    gallery: [
      { type: "frame", aspect: "3:2",
        media: { src: "/media/daihatsu/daihatsu-ayla-wrap.jpg", alt: "Daihatsu Ayla with a patterned vehicle wrap in a studio" } },
    ],
  },
  {
    slug: "energen-kaya-serat",
    title: "Kaya Serat",
    client: "Energen",
    category: "Pitch",
    discipline: "graphic-design",
    year: "2021",
    studio: "Dwi Sapta",
    summary: "Pitch project.",
    media: { src: "/media/energen/energen-kaya-serat.jpg", alt: "Energen key visual — a boy holding a mug surrounded by cereal, egg and milk", width: 1413, height: 2000 },
  },
  {
    slug: "sania-terbaik-dari-ibu",
    title: "Terbaik dari Ibu untuk Keluarga",
    client: "Sania",
    category: "Pitch",
    discipline: "graphic-design",
    year: "2019",
    studio: "Dwi Sapta",
    summary: "Pitch project.",
    media: { src: "/media/sania/sania-terbaik-dari-ibu.jpg", alt: "Sania cooking oil key visual composed as a trophy of vegetables", width: 1413, height: 2000 },
  }
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
