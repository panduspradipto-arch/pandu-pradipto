import type { Project } from "@/types/content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import styles from "./ProjectHero.module.css";

interface ProjectHeroProps {
  project: Project;
}

/**
 * Full-bleed opening frame, with the title and credit line sitting on the
 * scrim — the same treatment as the homepage work grid, at page scale.
 */
export function ProjectHero({ project }: ProjectHeroProps) {
  const meta = [project.client, project.category ?? project.role, project.year]
    .filter(Boolean)
    .join(" · ");

  return (
    <section className={styles.hero} aria-labelledby="project-heading">
      <MediaSlot
        media={project.heroMedia ?? project.media}
        placeholder={`Hero still — ${project.title}`}
        priority
        sizes="100vw"
        className={styles.media}
      />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.meta}>{meta}</p>
        <h1 id="project-heading" className={styles.title}>
          {project.title}
        </h1>
      </div>
    </section>
  );
}
