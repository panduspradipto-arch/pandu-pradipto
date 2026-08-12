import type { Service } from "@/types/content";

/**
 * The seven capabilities.
 *
 * Numbering is explicit rather than derived — the design treats it as content.
 *
 * `description` is the one-liner the homepage shows. `detail` is the longer
 * passage used only on /services, so adding it here never changes the homepage.
 *
 * NOTE — `detail` copy is DRAFT, written in the established production register
 * for review in the owner's own voice. It describes method only: it makes no
 * claim about any client, campaign, result, or award.
 *
 * Photography is deliberately absent as a capability title. It remains a
 * supporting capability and may still appear on individual projects and
 * credits — see docs/PORTFOLIO_CONTENT_MAP.md §9.
 */
export const services: Service[] = [
  {
    num: "01",
    title: "Creative Direction",
    description: "Setting the concept and visual language.",
    detail:
      "The concept and the visual language, set before anything is shot — reference, framing, grade. Direction has to survive contact with a real set, so it gets written that way.",
  },
  {
    num: "02",
    title: "Concept Development",
    description: "Turning briefs into ideas worth making.",
    detail:
      "Taking a brief to the one idea a campaign can actually be built on — territory, narrative, and the thinking that holds when the budget lands.",
  },
  {
    num: "03",
    title: "Production",
    description: "Running shoots, crews, and timelines.",
    detail:
      "Running the shoot: crew, schedule, budget, and the hundred decisions a day that keep a production on its feet.",
  },
  {
    num: "04",
    title: "Video Production",
    description: "Behind the lens, on set.",
    detail:
      "On set and behind the camera. Coverage planned against the edit rather than against a shot list written in isolation.",
  },
  {
    num: "05",
    title: "Post Production",
    description: "Editing, grading, finishing.",
    detail: "Edit, grade, sound, finishing — where most films are actually made.",
  },
  {
    num: "06",
    title: "Content & Campaigns",
    description: "Platform-ready assets and rollouts.",
    detail:
      "Platform-native assets and rollouts — the same idea cut for where it will actually be seen.",
  },
  {
    num: "07",
    title: "AI / Emerging Technology",
    description: "New tools, same craft.",
    detail:
      "AI and new tooling folded into production as a working method, not a novelty.",
  },
];
