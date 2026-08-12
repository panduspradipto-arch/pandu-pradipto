import type { MediaAsset } from "@/types/content";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Button } from "@/components/ui/Button";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  portrait?: MediaAsset;
  link: { label: string; href: string };
}

export function AboutSection({
  id,
  eyebrow,
  title,
  body,
  portrait,
  link,
}: AboutSectionProps) {
  return (
    <Section id={id} spacing="bottom" labelledBy="about-heading" className={styles.section}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <SectionHeading id="about-heading" size="about" className={styles.heading}>
          {title}
        </SectionHeading>
        <p className={styles.body}>{body}</p>
        <Button href={link.href} variant="underline">
          {link.label}
        </Button>
      </div>

      <MediaSlot
        media={portrait}
        placeholder="Portrait"
        sizes="(max-width: 900px) 100vw, 50vw"
        grayscale
        className={styles.portrait}
      />
    </Section>
  );
}
