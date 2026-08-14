import type { Project } from "@/types/content";
import styles from "./ProjectMeta.module.css";

interface ProjectMetaProps {
  project: Project;
  /** `sm` is the 11px variant used on the smallest cards. */
  size?: "sm" | "md";
  /** Include the agency/production house credit when there is one. */
  includeStudio?: boolean;
  className?: string;
}

/**
 * The credit line: client · role · year, middot-separated, in caps.
 *
 * Rendered as a definition-free plain string rather than a list because it is
 * read as one continuous credit, the way an on-screen slate reads.
 */
export function ProjectMeta({
  project,
  size = "md",
  includeStudio = false,
  className,
}: ProjectMetaProps) {
  /* `role` is absent where the contribution was never verified; the line then
     reads `Client · Year` rather than carrying an inferred job title. */
  const parts = [project.client, project.role].filter(Boolean);
  if (includeStudio && project.studio) parts.push(project.studio);
  parts.push(project.year);

  return (
    <p className={[styles.meta, styles[size], className].filter(Boolean).join(" ")}>
      {parts.join(" · ")}
    </p>
  );
}
