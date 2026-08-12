import type { Project } from "@/types/content";
import { Section } from "@/components/layout/Section";
import styles from "./ProjectIntro.module.css";

interface ProjectIntroProps {
  project: Project;
}

/**
 * Editorial two-column: the statement on the left, the context on the right.
 *
 * Client, year, and category are deliberately absent — the hero already
 * established those, and repeating them here would turn a creative director's
 * explanation into a spec sheet.
 */
export function ProjectIntro({ project }: ProjectIntroProps) {
  const statement = project.description ?? project.summary;

  const fields = [
    { label: "Brief", body: project.brief },
    { label: "Challenge", body: project.challenge },
    { label: "Approach", body: project.approach },
    { label: "Role", body: project.role },
  ].filter((f): f is { label: string; body: string } => Boolean(f.body));

  if (!statement && fields.length === 0) return null;

  return (
    <Section labelledBy="intro-heading" className={styles.section}>
      <h2 id="intro-heading" className={styles.srOnly}>
        About this project
      </h2>

      {statement ? <p className={styles.statement}>{statement}</p> : null}

      {fields.length > 0 ? (
        <dl className={styles.fields}>
          {fields.map((field) => (
            <div key={field.label} className={styles.field}>
              <dt className={styles.label}>{field.label}</dt>
              <dd className={styles.body}>{field.body}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </Section>
  );
}
