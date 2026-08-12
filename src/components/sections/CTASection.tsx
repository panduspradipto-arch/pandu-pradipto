import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  id?: string;
  /** Two lines, stacked. */
  headline: [string, string];
  body: string;
  cta: { label: string; href: string };
}

/** The closing call to action — the one block that sits on paper. */
export function CTASection({ id, headline, body, cta }: CTASectionProps) {
  return (
    <Section id={id} onPaper spacing="flush" labelledBy="cta-heading" className={styles.section}>
      {/* See Hero: the space keeps the two lines from concatenating in the
          accessible name. */}
      <h2 id="cta-heading" className={styles.headline}>
        {headline[0]}{" "}
        <br />
        {headline[1]}
      </h2>
      <p className={styles.body}>{body}</p>
      <Button href={cta.href} variant="inverse">
        {cta.label}
      </Button>
    </Section>
  );
}
