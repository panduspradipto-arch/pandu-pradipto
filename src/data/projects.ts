import type { Discipline, Project } from "@/types/content";

/**
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
    client: "Schwarzkopf Professional",
    role: "Beauty & Lifestyle",
    discipline: "graphic-design",
    year: "2022",
    summary: "Collaboration campaign for Schwarzkopf Professional Indonesia.",
  },
  {
    slug: "tripollar-indonesia",
    title: "TriPollar Indonesia",
    client: "TriPollar",
    role: "Beauty & Lifestyle",
    discipline: "graphic-design",
    year: "2021",
    summary: "Product visual and campaign design for TriPollar skincare devices.",
  },
  {
    slug: "ula-sedekah-ramadan",
    title: 'Ula "Sedekah" Ramadan Campaign',
    client: "Ula",
    role: "Multimedia Specialist",
    discipline: "multimedia",
    year: "2023",
    summary: "Ramadan CSR campaign content for Ula's retail network.",
  },
  {
    slug: "mila-dopiz",
    title: "Mila D'Opiz",
    client: "Mila D'Opiz",
    role: "Multimedia Specialist",
    discipline: "multimedia",
    year: "2023–24",
    summary: "Beauty brand content and campaign support.",
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
