import Link from "next/link";
import type { Project } from "@/types/content";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import styles from "./WorkSection.module.css";

interface WorkSectionProps {
  id?: string;
  title: string;
  projects: Project[];
  action?: { label: string; href: string };
}

/** Selected work — heading, then the editorial grid running to the page edges. */
export function WorkSection({ id, title, projects, action }: WorkSectionProps) {
  return (
    <Section id={id} spacing="top" labelledBy="work-heading">
      <SectionHeading
        id="work-heading"
        className={styles.heading}
        action={
          action ? (
            <Link href={action.href} className={styles.action}>
              {action.label}
            </Link>
          ) : undefined
        }
      >
        {title}
      </SectionHeading>

      <ProjectGrid projects={projects} variant="editorial" />
    </Section>
  );
}
