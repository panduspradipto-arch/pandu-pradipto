import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { WorkSection } from "@/components/sections/WorkSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ClientSection } from "@/components/sections/ClientSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";

import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";
import { confirmedClients } from "@/data/clients";
import { processSteps, site } from "@/data/site";

/**
 * The homepage is composition only — every section is a reusable component fed
 * from `src/data`. Reordering the page means reordering these lines.
 */
export default function HomePage() {
  return (
    <>
      <Hero
        headline={["Ideas,", "Produced."]}
        lead={site.tagline}
        primaryCta={{ label: "View Selected Work", href: "#work" }}
        secondaryCta={{ label: "Let's Work Together", href: "#contact" }}
      />

      <Reveal>
        <WorkSection
          id="work"
          title="Selected Work"
          projects={featuredProjects}
          action={{ label: "See full project catalog →", href: "#work" }}
        />
      </Reveal>

      <Reveal>
        <ServiceSection
          id="capabilities"
          title="What I Bring to the Table"
          services={services}
        />
      </Reveal>

      <Reveal>
        <ProcessSection title="From Idea to Final Frame." steps={processSteps} />
      </Reveal>

      <ClientSection eyebrow="Selected Clients" clients={confirmedClients} />

      <Reveal>
        <AboutSection
          id="about"
          eyebrow="Behind the Work"
          title="Behind the Work."
          body="I'm a multidisciplinary creative with 15+ years across creative direction and hands-on production. I've worked inside agencies and directly with brands and production crews — equally comfortable developing the idea and being on set making it happen. Lately, I've been folding AI-enhanced production into that process as a working method, not a gimmick."
          link={{ label: "About", href: "#about" }}
        />
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
