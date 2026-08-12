import type { Metadata } from "next";

import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceDetailList } from "@/components/sections/ServiceDetailList";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";

import { services } from "@/data/services";
import { processSteps, site } from "@/data/site";

const description =
  "Creative direction, concept development, production, video production, post production, content and campaigns, and AI / emerging technology.";

export const metadata: Metadata = {
  title: "Services",
  description,
  /* Without this the root layout's openGraph is inherited, so sharing this
     page would surface the homepage's title and description. */
  openGraph: { title: `Services — ${site.name}`, description, type: "website" },
};

/**
 * Services — composition only.
 *
 * The process spine reuses the approved homepage wording (Idea / Develop /
 * Produce / Finish / Deliver) from the shared `processSteps` data, so the two
 * surfaces can never drift.
 */
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What I Do"
        title="From Idea to Final Frame."
        standfirst={site.tagline}
      />

      <Reveal>
        <ServiceDetailList services={services} />
      </Reveal>

      <Reveal>
        <ProcessSection title="How It Runs." steps={processSteps} />
      </Reveal>

      <CTASection
        id="contact"
        headline={["Have a Project", "in Mind?"]}
        body="Let's turn the idea into something worth watching."
        cta={{ label: "Start a Conversation", href: `mailto:${site.email}` }}
      />
    </>
  );
}
