import type { Client } from "@/types/content";
import { Section } from "@/components/layout/Section";
import styles from "./ClientIndex.module.css";

interface ClientIndexProps {
  clients: Client[];
  agencies?: Client[];
}

/**
 * A typographic client index — the reading treatment, as opposed to the
 * homepage marquee's passing-glance treatment.
 *
 * Deliberately not a logo wall: no marks, no tiles, no grid of boxes. Agencies
 * are rendered in a separate, visually subordinate block so one can never be
 * mistaken for a client.
 */
export function ClientIndex({ clients, agencies = [] }: ClientIndexProps) {
  return (
    <Section spacing="bottom" labelledBy="clients-index-heading">
      <h2 id="clients-index-heading" className={styles.eyebrow}>
        Selected Clients
      </h2>

      <ul className={styles.index}>
        {clients.map((client) => (
          <li key={client.name} className={styles.item}>
            {client.name}
          </li>
        ))}
      </ul>

      {agencies.length > 0 ? (
        <div className={styles.agencies}>
          <h3 className={styles.eyebrow}>Selected Agencies</h3>
          <ul className={styles.agencyList}>
            {agencies.map((agency) => (
              <li key={agency.name} className={styles.agencyItem}>
                {agency.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}
