import Image from "next/image";
import type { Client } from "@/types/content";
import { Section } from "@/components/layout/Section";
import styles from "./ClientSection.module.css";

interface ClientSectionProps {
  eyebrow: string;
  clients: Client[];
}

/**
 * Client marquee.
 *
 * The roster is duplicated once to make the scroll seamless; the copy is
 * `aria-hidden` so assistive tech reads each client exactly once. The animation
 * is disabled wholesale under `prefers-reduced-motion` (see globals.css), which
 * leaves a static, still-legible row.
 */
export function ClientSection({ eyebrow, clients }: ClientSectionProps) {
  const renderRow = (hidden: boolean) => (
    <ul className={styles.row} aria-hidden={hidden || undefined}>
      {clients.map((client) => (
        <li key={client.name} className={styles.item}>
          {client.logo ? (
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={32}
              className={styles.logo}
            />
          ) : (
            client.name
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <Section spacing="bottom" labelledBy="clients-heading">
      <h2 id="clients-heading" className={styles.eyebrow}>
        {eyebrow}
      </h2>
      <div className={styles.viewport}>
        <div className={styles.marquee}>
          {renderRow(false)}
          {renderRow(true)}
        </div>
      </div>
    </Section>
  );
}
