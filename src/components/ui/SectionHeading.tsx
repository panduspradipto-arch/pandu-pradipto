import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  id?: string;
  children: ReactNode;
  /** Optional trailing link, right-aligned on the heading baseline. */
  action?: ReactNode;
  /** `about` is the smaller variant used in the About block. */
  size?: "section" | "about";
  className?: string;
}

/** The uppercase section title, optionally paired with a trailing action link. */
export function SectionHeading({
  id,
  children,
  action,
  size = "section",
  className,
}: SectionHeadingProps) {
  const heading = (
    <h2 id={id} className={[styles.heading, styles[size]].join(" ")}>
      {children}
    </h2>
  );

  if (!action) return <div className={className}>{heading}</div>;

  return (
    <div className={[styles.row, className].filter(Boolean).join(" ")}>
      {heading}
      {action}
    </div>
  );
}
