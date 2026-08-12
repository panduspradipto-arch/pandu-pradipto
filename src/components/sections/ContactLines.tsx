import { Section } from "@/components/layout/Section";
import { site } from "@/data/site";
import styles from "./ContactLines.module.css";

/**
 * Direct contact lines — no form.
 *
 * A form would add validation surface, a spam vector, and a backend dependency
 * while giving the visitor less: no copy of what they sent and no way to attach
 * a brief or a deck. Each row is one link, one focus stop.
 */
export function ContactLines() {
  const lines = [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
    { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, external: false },
    { label: "LinkedIn", value: "/in/pandupradipto9", href: site.linkedin, external: true },
  ];

  return (
    <Section narrow spacing="bottom" labelledBy="contact-lines-heading">
      <h2 id="contact-lines-heading" className={styles.srOnly}>
        Direct contact
      </h2>

      <ul className={styles.list}>
        {lines.map((line) => (
          <li key={line.label} className={styles.row}>
            <a
              className={styles.link}
              href={line.href}
              {...(line.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className={styles.label}>{line.label}</span>
              <span className={styles.value}>
                {line.value}
                {line.external ? (
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                ) : null}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
