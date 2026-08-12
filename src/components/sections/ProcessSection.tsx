import type { ProcessStep } from "@/types/content";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ProcessSection.module.css";

interface ProcessSectionProps {
  title: string;
  steps: ProcessStep[];
}

/**
 * The idea-to-delivery track.
 *
 * An ordered list, since the sequence is the meaning. Each step after the first
 * draws its own leading connector rule in CSS, so adding a step never means
 * hand-managing a "draw a line after this one" flag in the data.
 */
export function ProcessSection({ title, steps }: ProcessSectionProps) {
  return (
    <Section spacing="bottom" labelledBy="process-heading">
      <SectionHeading id="process-heading" className={styles.heading}>
        {title}
      </SectionHeading>

      <ol className={styles.track}>
        {steps.map((step) => (
          <li key={step.num} className={styles.step}>
            <span className={styles.stack}>
              <span className={styles.num}>{step.num}</span>
              <span className={styles.label}>{step.label}</span>
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
