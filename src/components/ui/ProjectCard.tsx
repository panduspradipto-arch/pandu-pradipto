import Link from "next/link";
import type { Project } from "@/types/content";
import { MediaSlot } from "./MediaSlot";
import { ProjectMeta } from "./ProjectMeta";
import styles from "./ProjectCard.module.css";

/** Rank in the editorial grid. Drives frame height, title size, and inset. */
export type CardSize = "xl" | "lg" | "md" | "sm";

interface ProjectCardProps {
  project: Project;
  size?: CardSize;
  /** The first card on the page carries the LCP image. */
  priority?: boolean;
  /** Viewport-width hint for srcset selection. */
  sizes?: string;
}

/**
 * A project frame: full-bleed still, scrim, credit line, title.
 *
 * The whole card is one link. The caption sits above the scrim and is not
 * separately focusable, so keyboard users get one stop per project rather
 * than two competing ones.
 */
export function ProjectCard({
  project,
  size = "md",
  priority = false,
  sizes = "100vw",
}: ProjectCardProps) {
  /* Role drops out of the label when the contribution is unverified, rather
     than announcing "undefined" between the client and the year. */
  const label = [project.client, project.role, project.year].filter(Boolean).join(", ");

  return (
    <article className={[styles.card, styles[size]].join(" ")}>
      {/* An explicit label, so the link announces the project rather than the
          placeholder copy that happens to sit inside the frame. */}
      <Link
        href={`/work/${project.slug}`}
        className={styles.link}
        aria-label={`${project.title} — ${label}`}
      >
        <MediaSlot
          media={project.media}
          placeholder={project.summary ?? project.title}
          priority={priority}
          sizes={sizes}
          className={styles.media}
        />
        <span className={styles.scrim} aria-hidden="true" />
        <span className={styles.caption}>
          <ProjectMeta
            project={project}
            size={size === "sm" ? "sm" : "md"}
            className={styles.meta}
          />
          <span className={styles.title}>{project.title}</span>
        </span>
      </Link>
    </article>
  );
}
