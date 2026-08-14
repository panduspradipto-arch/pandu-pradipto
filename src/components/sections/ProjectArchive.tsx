"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Discipline, Project } from "@/types/content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { hasArtwork } from "@/data/asset-status";
import styles from "./ProjectArchive.module.css";

interface ProjectArchiveProps {
  projects: Project[];
  disciplines: { id: Discipline; label: string }[];
}

type Filter = "all" | Discipline;

/**
 * The archive index — deliberately quieter and more uniform than the homepage.
 *
 * The homepage curates ("these first"); this enumerates ("this is the body of
 * work"). So it uses one consistent card at one size rather than the editorial
 * grid's varying ranks, and leads with the client rather than the image.
 *
 * Filters are derived from the projects actually present — a discipline with no
 * projects never renders a control, so there are no empty categories.
 */
export function ProjectArchive({ projects, disciplines }: ProjectArchiveProps) {
  const [filter, setFilter] = useState<Filter>("all");

  /* Only disciplines represented in the data become controls. */
  const available = useMemo(() => {
    const present = new Set(projects.map((p) => p.discipline));
    return disciplines.filter((d) => present.has(d.id));
  }, [projects, disciplines]);

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.discipline === filter)),
    [projects, filter],
  );

  /*
   * Archive cards read "Year · Discipline", not "Year · Role".
   *
   * The archive categorises; the detail page states the contribution. Showing
   * the role here would put a personal claim on an index card and make the
   * metadata inconsistent with the filter the card sits under.
   */
  const labelFor = useMemo(() => {
    const map = new Map(disciplines.map((d) => [d.id, d.label]));
    return (id: Discipline) => map.get(id) ?? id;
  }, [disciplines]);

  return (
    <>
      <div className={styles.controls}>
        <div className={styles.filters} role="group" aria-label="Filter by discipline">
          <button
            type="button"
            className={[styles.filter, styles.filterAll].join(" ")}
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {available.map((d) => (
            <button
              key={d.id}
              type="button"
              className={styles.filter}
              aria-pressed={filter === d.id}
              onClick={() => setFilter(d.id)}
            >
              {d.label}
            </button>
          ))}
        </div>

        <p className={styles.count} aria-live="polite">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <ol className={styles.grid}>
        {visible.map((project, index) => (
          <li key={project.slug} className={styles.item}>
            <Link
              href={`/work/${project.slug}`}
              className={styles.card}
              aria-label={[project.title, "—", [project.client, project.role, project.year]
                .filter(Boolean)
                .join(", ")].join(" ")}
            >
              <span className={styles.frame}>
                {hasArtwork(project.slug) ? (
                  <MediaSlot
                    media={project.media}
                    placeholder={project.summary ?? project.title}
                    sizes="(max-width: 700px) 100vw, 50vw"
                    className={styles.media}
                  />
                ) : (
                  /* Honest about absence rather than showing a generic slot. */
                  <span className={styles.unavailable}>
                    <span className={styles.unavailableLabel}>Media unavailable</span>
                  </span>
                )}
              </span>

              <span className={styles.meta}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.lines}>
                  <span className={styles.client}>{project.client}</span>
                  {/* Falls back to the canonical title; only set where the
                      client name would otherwise repeat directly above. */}
                  <span className={styles.title}>{project.displayTitle ?? project.title}</span>
                  <span className={styles.detail}>
                    {project.year} · {labelFor(project.discipline)}
                  </span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
