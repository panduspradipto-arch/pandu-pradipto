import Link from "next/link";
import type { ComponentProps } from "react";
import styles from "./Button.module.css";

type Variant = "solid" | "underline" | "inverse";

interface ButtonProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  className?: string;
}

/**
 * The design uses three link treatments and no others:
 *  - solid     paper fill, ink text (nav CTA, hero primary)
 *  - underline hairline rule under the label (hero secondary, about)
 *  - inverse   ink fill, paper text (on the paper CTA section)
 *
 * All three are square — the design has no rounded controls anywhere.
 */
export function Button({ variant = "solid", className, children, ...props }: ButtonProps) {
  const classes = [styles.base, styles[variant], className].filter(Boolean).join(" ");
  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
