/**
 * Content model for the portfolio.
 *
 * Everything the site renders is described here. Adding a project or a service
 * means adding an object in `src/data` — no layout code should need to change.
 */

/** A still image. `src` is a path under /public, or a configured remote host. */
export interface MediaAsset {
  src: string;
  /** Required: describe the frame, not the file. Empty string only if decorative. */
  alt: string;
  width?: number;
  height?: number;
}

/** Video is hosted externally and embedded on demand — never bundled. */
export interface VideoRef {
  provider: "youtube";
  /** The id only — the part after `v=` or `youtu.be/`. */
  id: string;
}

/**
 * Discipline tags. These double as the filter set on the full catalog page,
 * so the ids are stable and URL-safe.
 */
export type Discipline =
  | "art-direction"
  | "executive-producer"
  | "graphic-design"
  | "social-media"
  | "freelance-creative"
  | "multimedia"
  | "publishing";

/**
 * Editorial categories for the Features Work index.
 *
 * Deliberately separate from `Discipline`: discipline describes the kind of
 * practice, this describes the kind of output a visitor is browsing for. A
 * project may legitimately have no category — it then appears only under ALL
 * rather than being forced into a bucket it does not belong to.
 */
export type WorkCategory =
  | "tvc-dvc"
  | "photo-videography"
  | "key-visual"
  | "social-design"
  | "social-video"
  | "ai-video"
  | "publishing";

/**
 * Whether the project's work is film or still. Drives the ALL rows only.
 * `video` does NOT imply a bundled file or an embed — most of these are
 * represented by an extracted poster still, which is the existing behaviour.
 */
export type MediaKind = "static" | "video";

/**
 * Frame shape for gallery media. The detail page mixes ratios deliberately, so
 * this is per-item rather than a page-level setting.
 */
export type AspectRatio = "21:9" | "16:9" | "3:2" | "4:5" | "1:1" | "9:16";

/** A single frame inside a beat. */
export interface GalleryMedia {
  media?: MediaAsset;
  aspect?: AspectRatio;
  caption?: string;
}

/**
 * Gap *before* a beat. Gap is the rhythm instrument: `tight` binds frames into
 * one thought, `pause` sets up or lands a full-bleed moment.
 *
 * tight 2px · close 8px · normal 96px · pause 140px
 */
export type BeatGap = "tight" | "close" | "normal" | "pause";

/** Which side an offset beat hangs from. Offset beats are never centred. */
export type BeatAlign = "left" | "right";

/**
 * The visual story is a sequence of art-directed beats, not a uniform grid.
 *
 * Two rules the renderer relies on: no two adjacent beats should share a
 * `type`, and portrait/detail beats offset rather than centre — centring is
 * what makes an editorial sequence read as a CMS gallery.
 */
export type GalleryBeat =
  | ({ type: "bleed" } & GalleryMedia)
  | ({ type: "frame" } & GalleryMedia)
  | { type: "pair"; variant?: "asymmetric" | "even"; items: [GalleryMedia, GalleryMedia] }
  | ({ type: "portrait"; align?: BeatAlign } & GalleryMedia)
  | ({ type: "detail"; align?: BeatAlign } & GalleryMedia)
  | { type: "film"; video: VideoRef; poster?: MediaAsset; bleed?: boolean; caption?: string };

/** A beat plus the space that precedes it. */
export type GalleryEntry = GalleryBeat & { gap?: BeatGap };

/** One line of the credits block: what they did, who did it. */
export interface Credit {
  role: string;
  name: string;
}

export interface ProjectResult {
  summary?: string;
  /** Optional hard numbers. Rendered in the mono-ish caps treatment. */
  metrics?: { value: string; label: string }[];
}

export interface Project {
  /** URL-safe id. Also the route segment for /work/[slug]. */
  slug: string;
  /**
   * Canonical title. Used for page titles, metadata, and accessible names —
   * always the full, unambiguous form.
   */
  title: string;
  /**
   * Archive-card title only. Set this where `title` repeats the client name,
   * which reads redundantly when the client is printed directly above it:
   * client "TriPollar" + title "TriPollar Indonesia" → displayTitle "Indonesia".
   *
   * Falls back to `title` when unset. Never used for metadata or aria labels.
   */
  displayTitle?: string;
  client: string;
  /**
   * The verified contribution on THIS project, e.g. "Senior Art Director".
   *
   * Optional, and deliberately so: a deliverable ("Key Visual"), a discipline
   * ("Graphic Design"), a sector ("Beauty & Lifestyle"), a technique
   * ("AI-Enhanced"), or an employment mode ("Freelance Creative") is not a
   * contribution, and publishing one in the credit line asserts a job title
   * that was never confirmed. Where the contribution is unknown, leave this
   * unset — the credit line then reads `Client · Year` — rather than filling
   * it with the nearest available label. `discipline` already categorises.
   */
  role?: string;
  discipline: Discipline;
  /** Free text so ranges ("2019–20") work as well as single years. En dash. */
  year: string;
  /**
   * One line, shown on the catalog card. Optional for the same reason as
   * `role`: an unwritten summary is preferable to an inferred one.
   */
  summary?: string;
  /** Agency or production house credited, when there is one. */
  studio?: string;
  /** Cover still, used on the homepage grid. Omit for a placeholder slot. */
  media?: MediaAsset;
  video?: VideoRef;
  /** Surfaces the project in the homepage editorial grid. */
  featured?: boolean;

  /* ---- Detail page ----
   * All optional. The detail page renders a section only when its content
   * exists, so a project with nothing but the fields above still produces a
   * complete, uncluttered page rather than a scaffold of empty headings.
   */

  /** Broader framing than `role`, e.g. "Brand Film", "Key Visual". */
  category?: string;
  /** Editorial category for the Features Work filter. Optional by design. */
  workCategory?: WorkCategory;
  /** Film or still, for the ALL rows. Optional; treated as `static` when unset. */
  mediaKind?: MediaKind;
  /** Detail-page hero. Falls back to `media` when absent. */
  heroMedia?: MediaAsset;
  /** Short statement — the Intro left column. Falls back to `summary`. */
  description?: string;

  /* Intro right column. Each renders only when present. */
  brief?: string;
  challenge?: string;
  approach?: string;

  /** The visual story. The largest section of the page when it exists. */
  gallery?: GalleryEntry[];

  /**
   * Disciplines actually contributed on THIS project — e.g. "Creative
   * Direction", "Post Production", "AI / Technology".
   *
   * Deliberately per-project and free-form rather than a fixed enum rendered
   * everywhere: a standing list on every project is exactly the template-driven
   * feel the page is meant to avoid.
   */
  production?: string[];

  /**
   * Prose describing the contribution, shown under the production disciplines.
   * The owner's own words — never inferred from artwork or client relationship.
   */
  roleSummary?: string;

  credits?: Credit[];
  result?: ProjectResult;
}

export interface Service {
  /** Two-digit index as shown in the design: "01". */
  num: string;
  title: string;
  /**
   * One line. Optional: a grouped capability uses `items` instead of a gloss,
   * and the list renders whichever is present.
   */
  description?: string;
  /**
   * The capabilities inside this group. Rendered as a plain list in the same
   * rule-separated row — no cards, no icons, no new treatment.
   */
  items?: string[];
  /**
   * Longer passage, Services page only. Renders only when present, so the
   * homepage list is unaffected.
   */
  detail?: string;
}

/** One confirmed engagement. Nothing here may be inferred. */
export interface ExperienceEntry {
  role: string;
  /** Client, employer, or agency the role was held at. */
  context: string;
  years: string;
  /** Set when the engagement was freelance rather than a staff position. */
  freelance?: boolean;
}

/**
 * Formal qualification. Kept separate from ExperienceEntry so education can
 * never be read as employment history.
 */
export interface EducationEntry {
  qualification: string;
  institution: string;
  years: string;
}

export interface Client {
  name: string;
  /** Transparent PNG/SVG under /public. Absent until real logos land. */
  logo?: string;
}

export interface ProcessStep {
  num: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}
