"use client";

import type React from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import type { Project, WorkCategory } from "@/types/content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { hasArtwork } from "@/data/asset-status";
import styles from "./ProjectArchive.module.css";

interface ProjectArchiveProps {
  projects: Project[];
  categories: { id: WorkCategory; label: string }[];
}

type Filter = "all" | WorkCategory;

/**
 * The archive index — deliberately quieter and more uniform than the homepage.
 *
 * The homepage curates ("these first"); this enumerates ("this is the body of
 * work"). So it uses one consistent card at one size rather than the editorial
 * grid's varying ranks, and leads with the client rather than the image.
 *
 * Filters are derived from the projects actually present — a category with no
 * projects never renders a control, so there are no empty categories.
 *
 * ALL is not a flat list. It splits the same projects by what the work is (film
 * or still) and how it is shaped (portrait, landscape or square), each row
 * scrolling on its own axis. Nothing is duplicated to do this: the rows are a
 * query over the one project array, and a project appears in exactly one.
 *
 * The category filter is the other axis and is deliberately not exclusive — a
 * campaign can also be branding or storyboard work, so a project may answer to
 * more than one control.
 */
export function ProjectArchive({ projects, categories }: ProjectArchiveProps) {
  const [filter, setFilter] = useState<Filter>("all");

  /* Only categories represented in the data become controls. */
  const available = useMemo(() => {
    const present = new Set(projects.flatMap((p) => p.workCategories ?? []));
    return categories.filter((c) => present.has(c.id));
  }, [projects, categories]);

  /*
   * Orientation comes from the cover's real pixel dimensions, never a filename.
   * Square is its own row rather than being folded into landscape — a 1:1 social
   * frame is a distinct format here, not a wide one, so it gets its own rail and
   * no rule has to be invented for it. `mediaKind` is explicit in the data and
   * defaults to `static`.
   */
  const rows = useMemo(() => {
    const shapeOf = (p: Project): "vertical" | "horizontal" | "square" => {
      const m = p.media;
      if (!m?.width || !m?.height) return "horizontal";
      if (m.height > m.width) return "vertical";
      if (m.width > m.height) return "horizontal";
      return "square";
    };
    const isVideo = (p: Project) => p.mediaKind === "video";
    const pick = (shape: ReturnType<typeof shapeOf>, video: boolean) =>
      projects.filter((p) => shapeOf(p) === shape && isVideo(p) === video);

    return [
      { id: "vertical-static", label: "Vertical Static", items: pick("vertical", false) },
      { id: "horizontal-static", label: "Horizontal Static", items: pick("horizontal", false) },
      /* Square sits between the stills and the film: it is mostly social feed
         work, and reading it after the two static rails keeps that grouping. */
      {
        id: "square",
        label: "Square",
        items: projects.filter((p) => shapeOf(p) === "square"),
      },
      { id: "vertical-video", label: "Vertical Video", items: pick("vertical", true) },
      { id: "horizontal-video", label: "Horizontal Video", items: pick("horizontal", true) },
    ].filter((r) => r.items.length > 0);
  }, [projects]);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.workCategories?.includes(filter)),
    [projects, filter],
  );

  const labelFor = useMemo(() => {
    const map = new Map(categories.map((c) => [c.id, c.label]));
    /* A card shows its primary category only — the first entry. Listing every
       category on an index card would crowd the line and bury the year. */
    return (ids?: WorkCategory[]) => (ids?.[0] ? (map.get(ids[0]) ?? ids[0]) : undefined);
  }, [categories]);

  /*
   * Archive cards read "Year · Category", not "Year · Role".
   *
   * The archive categorises; the detail page states the contribution. Showing
   * the role here would put a personal claim on an index card and make the
   * metadata inconsistent with the filter the card sits under. Where a project
   * has no category the line is just the year — never a filled-in guess.
   */
  const card = (project: Project, index: number) => (
    <Link
      href={`/work/${project.slug}`}
      className={styles.card}
      aria-label={[
        project.title,
        "—",
        [project.client, project.role, project.year].filter(Boolean).join(", "),
      ].join(" ")}
    >
      {/*
        The frame takes the artwork's own ratio so nothing is cropped. Portrait
        work in particular was losing most of its height to a fixed 4:3 box, and
        the house rule is that portrait work is never re-cropped to fit a
        container. Falls back to 4:3 when a cover carries no dimensions.
      */}
      <span
        className={styles.frame}
        style={
          project.media?.width && project.media?.height
            ? ({ "--frame-ratio": `${project.media.width} / ${project.media.height}` } as React.CSSProperties)
            : undefined
        }
      >
        {hasArtwork(project.slug) ? (
          <MediaSlot
            media={project.media}
            placeholder={project.summary ?? project.title}
            sizes="(max-width: 700px) 70vw, 32vw"
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
          {/* Falls back to the canonical title; only set where the client name
              would otherwise repeat directly above. */}
          <span className={styles.title}>{project.displayTitle ?? project.title}</span>
          <span className={styles.detail}>
            {[project.year, labelFor(project.workCategories)].filter(Boolean).join(" · ")}
          </span>
        </span>
      </span>
    </Link>
  );

  return (
    <>
      <div className={styles.controls}>
        <div className={styles.filters} role="group" aria-label="Filter by category">
          <button
            type="button"
            className={[styles.filter, styles.filterAll].join(" ")}
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {available.map((c) => (
            <button
              key={c.id}
              type="button"
              className={styles.filter}
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {filter === "all" ? (
        rows.map((row) => (
          <section key={row.id} className={styles.row} aria-labelledby={`row-${row.id}`}>
            <h3 id={`row-${row.id}`} className={styles.rowHeading}>
              {row.label}
            </h3>
            {/*
              Its own scroll container, so the rail moves without the page ever
              gaining a horizontal axis. Keyboard users get a focusable region
              rather than a rail they can only reach by tabbing through cards.
            */}
            <ol className={styles.rail} tabIndex={0} role="list">
              {row.items.map((project, index) => (
                <li key={project.slug} className={styles.railItem}>
                  {card(project, index)}
                </li>
              ))}
            </ol>
          </section>
        ))
      ) : (
        <ol className={styles.grid}>
          {filtered.map((project, index) => (
            <li key={project.slug} className={styles.item}>
              {card(project, index)}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
