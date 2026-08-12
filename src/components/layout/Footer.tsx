import Link from "next/link";
import { footerLinks, site } from "@/data/site";
import styles from "./Footer.module.css";

/** Sits on paper, continuous with the CTA block above it. */
export function Footer() {
  return (
    <footer className={["on-paper", styles.footer].join(" ")}>
      <nav aria-label="Footer">
        <ul className={styles.links}>
          {footerLinks.map((link) =>
            /*
             * Hash-bearing hrefs use a native anchor — next/link resolves them
             * against the current URL including its hash, producing
             * "/#work#work" on repeat clicks. See NavAnchor in Navbar.
             */
            link.href.includes("#") ? (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>

      <ul className={styles.links}>
        <li>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href={`mailto:${site.email}`} className={styles.link}>
            {site.email}
          </a>
        </li>
      </ul>
    </footer>
  );
}
