import type { Service } from "@/types/content";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ServiceSection.module.css";

interface ServiceSectionProps {
  id?: string;
  title: string;
  services: Service[];
}

/**
 * Capability list — a rule-separated table of number / title / description.
 *
 * Marked up as a description list: each capability is a term and its gloss,
 * which is what a screen reader should hear.
 */
export function ServiceSection({ id, title, services }: ServiceSectionProps) {
  return (
    <Section id={id} narrow labelledBy="services-heading">
      <SectionHeading id="services-heading" className={styles.heading}>
        {title}
      </SectionHeading>

      <dl className={styles.list}>
        {services.map((service) => (
          <div key={service.num} className={styles.row}>
            <span className={styles.num} aria-hidden="true">
              {service.num}
            </span>
            <dt className={styles.title}>{service.title}</dt>
            <dd className={styles.desc}>
              {service.items ? (
                <ul className={styles.items}>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                service.description
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
