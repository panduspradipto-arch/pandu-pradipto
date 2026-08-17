import type { Service } from "@/types/content";

/**
 * The five capability groups, in the owner's own wording.
 *
 * Numbering is explicit rather than derived — the design treats it as content.
 *
 * These replaced seven single-line capabilities. The rows render `items` where
 * a group has them and `description` where it does not, so the markup and the
 * rule-separated treatment are unchanged.
 *
 * No claim is made here about any client, campaign, result or award: the list
 * describes what the work is, not how it performed.
 */
export const services: Service[] = [
  {
    num: "01",
    title: "Strategy & Creative",
    items: [
      "Campaign Strategy & Creative Planning",
      "Big Idea & Concept Development",
      "Creative Direction",
      "Campaign & Content Strategy",
    ],
  },
  {
    num: "02",
    title: "Production",
    items: [
      "TVC Pitch & Production",
      "Video & Commercial Production",
      "Photoshoot & Content Production",
      "Production Management",
    ],
  },
  {
    num: "03",
    title: "Design & Visual",
    items: [
      "Art Direction",
      "Key Visual Development",
      "Campaign Visual Identity",
      "Graphic & Digital Design",
      "Motion & Visual Content",
    ],
  },
  {
    num: "04",
    title: "Social & Digital",
    items: [
      "Social Media Content Strategy",
      "Always-On Content Planning",
      "Social Media Campaigns",
      "Short-Form Video Content",
      "Digital Campaign Assets",
    ],
  },
  {
    num: "05",
    title: "Delivery & Execution",
    items: [
      "Creative Supervision",
      "End-to-End Production",
      "Post-Production & Editing",
      "Content Adaptation & Roll-Out",
      "Multi-Platform Asset Delivery",
    ],
  },
];
