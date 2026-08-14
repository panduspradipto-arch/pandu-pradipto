import type { Metadata } from "next";

import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactLines } from "@/components/sections/ContactLines";
import { CTASection } from "@/components/sections/CTASection";

import { site } from "@/data/site";

const description = `Available for creative and production collaboration. ${site.location}.`;

export const metadata: Metadata = {
  title: "Contact",
  description,
  /* Without this the root layout's openGraph is inherited. */
  openGraph: {
    title: `Contact — ${site.name}`,
    description,
    url: "/contact",
    siteName: site.name,
    type: "website",
  },
  alternates: { canonical: "/contact" },
};

/**
 * Contact — deliberately short.
 *
 * No form: it would add a validation surface, a spam vector, and a backend
 * dependency while giving the visitor less than a mail client does. The shared
 * paper CTASection closes the page, identical to every other surface.
 */
export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={`${site.location} — ${site.availability}`}
        title="Let's Work Together."
        standfirst="Available for creative and production collaboration — direction, concept, or running the shoot."
      />

      <Reveal>
        <ContactLines />
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
