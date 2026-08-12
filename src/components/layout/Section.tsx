import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  children: ReactNode;
  /** Flips the context tokens to the paper palette. */
  onPaper?: boolean;
  /** Constrain content to the 1100px text measure. */
  narrow?: boolean;
  /** Section-level vertical rhythm. `flush` is for full-bleed media blocks. */
  spacing?: "default" | "top" | "bottom" | "flush";
  labelledBy?: string;
  className?: string;
}

/**
 * The single owner of horizontal gutter and vertical rhythm.
 *
 * Sections never set their own padding — that keeps the page cadence editable
 * from the token file instead of from a dozen component stylesheets.
 */
export function Section({
  id,
  children,
  onPaper = false,
  narrow = false,
  spacing = "default",
  labelledBy,
  className,
}: SectionProps) {
  const classes = [
    styles.section,
    styles[spacing],
    narrow ? styles.narrow : "",
    onPaper ? "on-paper" : "",
    onPaper ? styles.paper : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}
