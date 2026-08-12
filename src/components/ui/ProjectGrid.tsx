import type { Project } from "@/types/content";
import { ProjectCard, type CardSize } from "./ProjectCard";
import styles from "./ProjectGrid.module.css";

/**
 * The editorial rhythm from the approved design: one full-bleed frame, then a
 * 60/40 pair, then a three-up. The pattern repeats if more projects are passed,
 * so the homepage keeps its cadence as the roster grows.
 */
const EDITORIAL_PATTERN: CardSize[][] = [["xl"], ["lg", "md"], ["sm", "sm", "sm"]];

/** Per-rank viewport hints, so the browser never fetches an oversized still. */
const SIZES: Record<CardSize, string> = {
  xl: "100vw",
  lg: "(max-width: 900px) 100vw, 58vw",
  md: "(max-width: 900px) 100vw, 42vw",
  sm: "(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw",
};

interface ProjectGridProps {
  projects: Project[];
  /** `editorial` is the homepage cadence; `catalog` is the uniform three-up. */
  variant?: "editorial" | "catalog";
}

function buildRows(projects: Project[]): { size: CardSize; project: Project }[][] {
  const rows: { size: CardSize; project: Project }[][] = [];
  let cursor = 0;
  let patternIndex = 0;

  while (cursor < projects.length) {
    const shape = EDITORIAL_PATTERN[patternIndex % EDITORIAL_PATTERN.length];
    const slice = projects.slice(cursor, cursor + shape.length);
    rows.push(slice.map((project, i) => ({ size: shape[i], project })));
    cursor += shape.length;
    patternIndex += 1;
  }

  return rows;
}

export function ProjectGrid({ projects, variant = "editorial" }: ProjectGridProps) {
  if (variant === "catalog") {
    return (
      <div className={styles.catalog}>
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            size="sm"
            sizes={SIZES.sm}
          />
        ))}
      </div>
    );
  }

  const rows = buildRows(projects);

  return (
    <div className={styles.editorial}>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={styles.row}
          data-shape={row.map((c) => c.size).join("-")}
        >
          {row.map(({ size, project }, cardIndex) => (
            <ProjectCard
              key={project.slug}
              project={project}
              size={size}
              sizes={SIZES[size]}
              priority={rowIndex === 0 && cardIndex === 0}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
