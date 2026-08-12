import type { ProjectResult as ProjectResultData } from "@/types/content";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ProjectResult.module.css";

interface ProjectResultProps {
  result?: ProjectResultData;
}

/** Outcome — a closing statement and, when there are numbers, the numbers. */
export function ProjectResult({ result }: ProjectResultProps) {
  if (!result) return null;

  const metrics = result.metrics ?? [];
  if (!result.summary && metrics.length === 0) return null;

  return (
    <Section narrow labelledBy="result-heading">
      <SectionHeading id="result-heading" className={styles.heading}>
        Result
      </SectionHeading>

      {result.summary ? <p className={styles.summary}>{result.summary}</p> : null}

      {metrics.length > 0 ? (
        <dl className={styles.metrics}>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <dt className={styles.metricValue}>{metric.value}</dt>
              <dd className={styles.metricLabel}>{metric.label}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </Section>
  );
}
