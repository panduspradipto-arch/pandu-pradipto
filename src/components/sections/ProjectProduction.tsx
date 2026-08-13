import type { Project } from "@/types/content";
import { Section } from "@/components/layout/Section";
import styles from "./ProjectProduction.module.css";

interface ProjectProductionProps {
  project: Project;
}

/**
 * How the work was made — disciplines contributed, then credits.
 *
 * The plainest section on the page by design. It sits at measure width after
 * full-bleed imagery so it reads as an aside, and it borrows none of the
 * homepage's numbered-list treatment, which would make the two pages compete.
 */
export function ProjectProduction({ project }: ProjectProductionProps) {
  const disciplines = project.production ?? [];

  /* The studio credit is a credit; it belongs here rather than in the intro. */
  const credits = [
    ...(project.studio ? [{ role: "Studio", name: project.studio }] : []),
    ...(project.credits ?? []),
  ];

  if (disciplines.length === 0 && credits.length === 0 && !project.roleSummary) return null;

  return (
    <Section narrow labelledBy="production-heading">
      <h2 id="production-heading" className={styles.srOnly}>
        My Role
      </h2>

      {disciplines.length > 0 || project.roleSummary ? (
        <div className={styles.block}>
          <h3 className={styles.label}>My Role</h3>
          <div className={styles.roleBody}>
            {disciplines.length > 0 ? (
              <ul className={styles.disciplines}>
                {disciplines.map((discipline) => (
                  <li key={discipline} className={styles.discipline}>
                    {discipline}
                  </li>
                ))}
              </ul>
            ) : null}
            {project.roleSummary ? (
              <p className={styles.roleSummary}>{project.roleSummary}</p>
            ) : null}
          </div>
        </div>
      ) : null}

      {credits.length > 0 ? (
        <div className={styles.block}>
          <h3 className={styles.label}>Credits</h3>
          <dl className={styles.credits}>
            {credits.map((credit) => (
              <div key={`${credit.role}-${credit.name}`} className={styles.credit}>
                <dt className={styles.creditRole}>{credit.role}</dt>
                <dd className={styles.creditName}>{credit.name}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
    </Section>
  );
}
