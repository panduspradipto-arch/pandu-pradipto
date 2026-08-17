import type { Service } from "@/types/content";
import { Section } from "@/components/layout/Section";
import styles from "./ServiceDetailList.module.css";

interface ServiceDetailListProps {
  services: Service[];
}

/**
 * The expanded capability list for /services.
 *
 * Same rule-separated row treatment as the homepage — no cards, no borders, no
 * icons — with room for the longer passage. `detail` renders only when present,
 * so a capability without one simply shows its summary rather than a gap.
 */
export function ServiceDetailList({ services }: ServiceDetailListProps) {
  return (
    <Section narrow spacing="bottom" labelledBy="capabilities-heading">
      <h2 id="capabilities-heading" className={styles.srOnly}>
        Capabilities
      </h2>

      <dl className={styles.list}>
        {services.map((service) => (
          <div key={service.num} className={styles.row}>
            <span className={styles.num} aria-hidden="true">
              {service.num}
            </span>
            <dt className={styles.title}>{service.title}</dt>
            <dd className={styles.body}>
              {service.items ? (
                <ul className={styles.items}>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <>
                  <span className={styles.summary}>{service.description}</span>
                  {service.detail ? <span className={styles.detail}>{service.detail}</span> : null}
                </>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
