import { CTASection } from "./CTASection";
import { site } from "@/data/site";

interface ProjectCTAProps {
  /** Lets a project close with its own line while keeping the shared block. */
  headline?: [string, string];
  body?: string;
}

/**
 * The closing CTA for a detail page.
 *
 * Deliberately a thin composition over CTASection rather than its own block —
 * the paper-inverted CTA is one design element, and it should stay one
 * implementation so the homepage and detail pages can never drift apart.
 */
export function ProjectCTA({
  headline = ["Have a Project", "in Mind?"],
  body = "Let's turn the idea into something worth watching.",
}: ProjectCTAProps) {
  return (
    <CTASection
      id="contact"
      headline={headline}
      body={body}
      cta={{ label: "Start a Conversation", href: `mailto:${site.email}` }}
    />
  );
}
