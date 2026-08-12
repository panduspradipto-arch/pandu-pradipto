"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: ReactNode;
  /** Milliseconds of delay — used to stagger paired frames. */
  delay?: number;
  /** Travel distance in px. Section reveals use 24; media inside a run uses 12. */
  distance?: number;
  className?: string;
}

/**
 * Reveals its children once, on first entry into view.
 *
 * Deliberately stateless: the effect drives a data attribute on the node
 * instead of React state, which keeps it a one-way sync to the DOM with no
 * cascading render, and leaves the content visible by default — so without
 * JavaScript, or under `prefers-reduced-motion`, the content simply shows.
 *
 * One IntersectionObserver per element, disconnected on first trigger. No
 * scroll listeners, and only `opacity` and `transform` are animated.
 */
export function Reveal({ children, delay = 0, distance = 24, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          node.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[styles.reveal, className].filter(Boolean).join(" ")}
      style={
        {
          "--reveal-distance": `${distance}px`,
          ...(delay ? { transitionDelay: `${delay}ms` } : {}),
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
