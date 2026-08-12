import Link from "next/link";
import type { Project } from "@/types/content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import styles from "./NextProject.module.css";

interface NextProjectProps {
  project?: Project;
}

/** Full-bleed hand-off to the next piece of work. */
export function NextProject({ project }: NextProjectProps) {
  if (!project) return null;

  const meta = [project.client, project.category ?? project.role, project.year]
    .filter(Boolean)
    .join(" · ");

  return (
    <section className={styles.section} aria-labelledby="next-heading">
      <Link
        href={`/work/${project.slug}`}
        className={styles.link}
        aria-label={`Next project: ${project.title} — ${meta}`}
      >
        <MediaSlot
          media={project.media}
          placeholder={`Next — ${project.title}`}
          sizes="100vw"
          className={styles.media}
        />
        <span className={styles.scrim} aria-hidden="true" />

        <span className={styles.content}>
          <span id="next-heading" className={styles.eyebrow}>
            Next Project
          </span>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.meta}>{meta}</span>
          <span className={styles.action}>
            View Project
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </span>
        </span>
      </Link>
    </section>
  );
}
