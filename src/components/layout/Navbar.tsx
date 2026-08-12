"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navCta, navLinks, site } from "@/data/site";
import styles from "./Navbar.module.css";

/**
 * Renders a nav destination.
 *
 * Hash-bearing hrefs use a native anchor: next/link resolves them against the
 * current URL *including its hash*, so clicking "/#work" while already at
 * "/#work" concatenates to "/#work#work" and keeps accumulating on every click.
 * A native anchor resolves against the origin and always yields "/#work".
 */
function NavAnchor({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (href.includes("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

/**
 * Fixed overlay nav.
 *
 * The approved design is desktop-only, so the narrow breakpoint collapses the
 * links into a disclosure menu. The menu is a plain toggled panel — labelled,
 * escape-dismissable, and closed on navigation.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  /*
   * The nav rides transparent over the hero so it never competes with the
   * imagery, then settles onto ink once the hero is behind us.
   *
   * Driven by an IntersectionObserver on a 70vh sentinel rather than a scroll
   * listener — no per-frame work, and the browser does the threshold maths. The
   * sentinel height sits inside the shortest hero on the site (82vh on project
   * detail), so the change always lands against the hero's own dark base.
   */
  useEffect(() => {
    const sentinel = document.getElementById("nav-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setSettled(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={[styles.header, settled ? styles.settled : ""].filter(Boolean).join(" ")}>
      <Link href="/" className={styles.wordmark}>
        {site.wordmark}
      </Link>

      <nav className={styles.nav} aria-label="Primary">
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavAnchor href={link.href} className={styles.link}>
                {link.label}
              </NavAnchor>
            </li>
          ))}
        </ul>
        <Link href={navCta.href} className={styles.cta}>
          {navCta.label}
        </Link>
      </nav>

      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {/*
        `visibility` rather than `hidden` so the panel can transition. Hidden
        visibility still removes it from the tab order and the a11y tree, so the
        closed state stays correct for keyboard and screen-reader users.
      */}
      <div id="mobile-menu" className={styles.panel} data-open={open}>
        <ul className={styles.panelLinks}>
          {[...navLinks, navCta].map((link) => (
            <li key={link.href}>
              <NavAnchor
                href={link.href}
                className={styles.panelLink}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavAnchor>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
