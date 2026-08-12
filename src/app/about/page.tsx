import type { Metadata } from "next";

import { Reveal } from "@/components/ui/Reveal";
import { AboutOpening } from "@/components/sections/AboutOpening";
import { NarrativeList } from "@/components/sections/NarrativeList";
import { Intersection } from "@/components/sections/Intersection";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { ExperienceList } from "@/components/sections/ExperienceList";
import { ClientIndex } from "@/components/sections/ClientIndex";
import { CTASection } from "@/components/sections/CTASection";

import { about } from "@/data/about";
import { education, experience } from "@/data/experience";
import { agencies, confirmedClients } from "@/data/clients";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: about.passages[0].body,
  /* Without this the root layout's openGraph is inherited. */
  openGraph: {
    title: `About — ${site.name}`,
    description: about.passages[0].body,
    type: "profile",
  },
};

/**
 * About.
 *
 * Both image slots are intentionally unfilled. No portrait matching the approved
 * black-and-white street direction exists in either archive, and substituting a
 * generic or unrelated image was explicitly ruled out — so they render as
 * labelled placeholders until the real assets are supplied.
 */
export default function AboutPage() {
  return (
    <>
      <AboutOpening
        eyebrow={about.eyebrow}
        statement={about.statement}
        /* portrait intentionally omitted — [ASSET NEEDS SOURCING] */
      />

      <Reveal>
        <NarrativeList passages={about.passages} />
      </Reveal>

      <Reveal>
        <Intersection positions={about.intersection} />
      </Reveal>

      {/* The page's one cinematic beat. Full-bleed, grayscale. */}
      <Reveal>
        <MediaSlot
          placeholder="Full-bleed black & white frame — on set [ASSET NEEDS SOURCING]"
          sizes="100vw"
          grayscale
          className="about-band"
        />
      </Reveal>

      <Reveal>
        <ExperienceList entries={experience} education={education} />
      </Reveal>

      <Reveal>
        <ClientIndex clients={confirmedClients} agencies={agencies} />
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
