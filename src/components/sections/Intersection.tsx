import { Section } from "@/components/layout/Section";
import styles from "./Intersection.module.css";

interface IntersectionProps {
  positions: readonly string[];
}

/**
 * The four positions the practice sits between.
 *
 * A typographic row, not a feature grid — no icons, no cards, no numbers. The
 * hairline between each is the only ornament.
 */
export function Intersection({ positions }: IntersectionProps) {
  return (
    <Section spacing="bottom" labelledBy="intersection-heading">
      <h2 id="intersection-heading" className={styles.eyebrow}>
        The Intersection
      </h2>

      <ul className={styles.row}>
        {positions.map((position) => (
          <li key={position} className={styles.item}>
            {position}
          </li>
        ))}
      </ul>
    </Section>
  );
}
