import type { EducationEntry, ExperienceEntry } from "@/types/content";
import { Section } from "@/components/layout/Section";
import styles from "./ExperienceList.module.css";

interface ExperienceListProps {
  entries: ExperienceEntry[];
  /** Rendered as a compact subordinate block. Omit and nothing appears. */
  education?: EducationEntry[];
}

/**
 * Confirmed engagements only, as a rule-separated editorial list.
 *
 * Not a CV table and not a timeline — the point is range and seniority, not a
 * complete employment record. Anything unconfirmed is absent rather than
 * approximated.
 */
export function ExperienceList({ entries, education = [] }: ExperienceListProps) {
  if (entries.length === 0) return null;

  return (
    <Section narrow spacing="bottom" labelledBy="experience-heading">
      <h2 id="experience-heading" className={styles.eyebrow}>
        Experience
      </h2>

      <ul className={styles.list}>
        {entries.map((entry) => (
          <li key={`${entry.role}-${entry.context}-${entry.years}`} className={styles.row}>
            <span className={styles.role}>
              {entry.role}
              {entry.freelance ? <span className={styles.tag}> — Freelance</span> : null}
            </span>
            <span className={styles.context}>{entry.context}</span>
            <span className={styles.years}>{entry.years}</span>
          </li>
        ))}
      </ul>

      {education.length > 0 ? (
        <div className={styles.education}>
          <h3 className={styles.eyebrow}>Education</h3>
          <ul className={styles.list}>
            {education.map((item) => (
              <li key={`${item.qualification}-${item.years}`} className={styles.row}>
                <span className={styles.role}>{item.qualification}</span>
                <span className={styles.context}>{item.institution}</span>
                <span className={styles.years}>{item.years}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}
