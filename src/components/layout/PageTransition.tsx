"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import styles from "./PageTransition.module.css";

/**
 * Route transition — a short opacity and lift on entry.
 *
 * Keyed on the pathname so React remounts the subtree on navigation and the CSS
 * animation replays. No library, no state, no scroll listener, and nothing to
 * clean up. Only `opacity` and `transform` animate.
 *
 * There is no exit animation on purpose: holding the old page back would delay
 * the new one, and the brief calls for the page to feel immediately available.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className={styles.page}>
      {children}
    </div>
  );
}
