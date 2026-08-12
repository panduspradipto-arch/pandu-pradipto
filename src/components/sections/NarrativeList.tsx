import { Section } from "@/components/layout/Section";
import styles from "./NarrativeList.module.css";

interface NarrativeListProps {
  passages: readonly { label: string; body: string }[];
}

/** Rule-separated first-person passages. Label column, body at reading measure. */
export function NarrativeList({ passages }: NarrativeListProps) {
  if (passages.length === 0) return null;

  return (
    <Section narrow spacing="bottom">
      {passages.map((passage) => (
        <div key={passage.label} className={styles.passage}>
          <h2 className={styles.label}>{passage.label}</h2>
          <p className={styles.body}>{passage.body}</p>
        </div>
      ))}
    </Section>
  );
}
