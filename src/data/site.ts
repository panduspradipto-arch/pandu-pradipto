import type { NavLink, ProcessStep } from "@/types/content";

export const site = {
  name: "Pandu Senopradipto",
  wordmark: "PANDU",
  location: "Jakarta",
  availability: "Available for work",
  email: "panduseno.file@gmail.com",
  phone: "+62 821 1786 0570",
  linkedin: "https://www.linkedin.com/in/pandupradipto9/",
  tagline: "Creative production across film, photography, digital content and emerging technology.",
} as const;

/**
 * Services, About and Contact now resolve to real pages rather than homepage
 * anchors. Work keeps its anchor until the /work catalog page is built.
 */
export const navLinks: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

/** The Contact link is styled as a filled button, so it is kept separate. */
export const navCta: NavLink = { label: "Contact", href: "/contact" };

export const footerLinks: NavLink[] = [...navLinks, navCta];

export const processSteps: ProcessStep[] = [
  { num: "01", label: "Idea" },
  { num: "02", label: "Develop" },
  { num: "03", label: "Produce" },
  { num: "04", label: "Finish" },
  { num: "05", label: "Deliver" },
];
