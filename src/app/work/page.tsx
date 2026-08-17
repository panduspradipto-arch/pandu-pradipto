import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectArchive } from "@/components/sections/ProjectArchive";
import { CTASection } from "@/components/sections/CTASection";

import { projects, workCategoryList } from "@/data/projects";
import { site } from "@/data/site";

const description =
  "A collection of campaigns, films, identities, and visual work developed across different brands, teams, and production environments.";

export const metadata: Metadata = {
  title: "Work",
  description,
  openGraph: {
    title: `Work — ${site.name}`,
    description,
    url: "/work",
    siteName: site.name,
    type: "website",
  },
  alternates: { canonical: "/work" },
};

/**
 * The portfolio archive.
 *
 * Comprehensive where the homepage is curated: every project, one card size,
 * client-led. It deliberately does not reuse the homepage's editorial
 * ProjectGrid — that composition exists to rank six projects, which is the
 * opposite of an index's job.
 */
export default function WorkPage() {
  return (
    <>
      <PageHeader eyebrow="Work" title="Features Work" standfirst={description} />

      <Section spacing="bottom" labelledBy="archive-heading">
        <h2 id="archive-heading" className="sr-only">
          Project archive
        </h2>
        <ProjectArchive projects={projects} categories={workCategoryList} />
      </Section>

      <CTASection
        id="contact"
        headline={["Have a Project", "in Mind?"]}
        body="Let's turn the idea into something worth watching."
        cta={{ label: "Start a Conversation", href: `mailto:${site.email}` }}
      />
    </>
  );
}
