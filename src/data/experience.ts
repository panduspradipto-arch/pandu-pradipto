import type { EducationEntry, ExperienceEntry } from "@/types/content";

/**
 * Employment history — CV IS THE ONLY SOURCE OF TRUTH.
 *
 * Do NOT derive entries from portfolio projects, project credits, filenames, or
 * client relationships. A project credit for a brand does not make that brand an
 * employer: BRI, for example, is a client in the portfolio content map and must
 * never appear here. Likewise a videography credit does not create an
 * "Independent — Videographer" position.
 *
 * "Freelance" is part of the role title as the CV states it, so the optional
 * `freelance` flag is deliberately unused.
 *
 * Ordered most recent first, matching the CV.
 */
export const experience: ExperienceEntry[] = [
  { role: "Creative Producer", context: "Cerahati Indonesia", years: "2024–Present" },
  { role: "Multimedia Specialist", context: "GovTech Procurement (Fintech)", years: "2023–2024" },
  { role: "Art Director", context: "Dentsu Indonesia", years: "2021–2023" },
  { role: "Art Director", context: "ULA (Fintech)", years: "2021–2022" },
  { role: "Freelance Art Director", context: "VMLY&R", years: "2021" },
  { role: "Freelance Art Director", context: "Maleo FCN", years: "2020–2021" },
  { role: "Senior Graphic Designer", context: "Dwisapta Pratama", years: "2017–2019" },
  { role: "Creative Support", context: "Seven Sunday Film, Australia", years: "2013–2016" },
];

/** Formal qualifications. CV is the only source of truth here too. */
export const education: EducationEntry[] = [
  {
    qualification: "Diploma in Graphic Design",
    institution: "Queensland Institute of Business and Technology",
    years: "2010–2012",
  },
];
