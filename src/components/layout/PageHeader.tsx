import { Section } from "./Section";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  standfirst?: string;
  id?: string;
}

/**
 * The opening block for Services, About and Contact.
 *
 * Deliberately type-only — no full-bleed media. The Work surfaces own the
 * cinematic hero treatment, and repeating it here would make every page read
 * as a front cover instead of an interior spread.
 */
export function PageHeader({ eyebrow, title, standfirst, id = "page-heading" }: PageHeaderProps) {
  return (
    <Section spacing="top" className={styles.header}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 id={id} className={styles.title}>
        {title}
      </h1>
      {standfirst ? <p className={styles.standfirst}>{standfirst}</p> : null}
    </Section>
  );
}
