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
  title: string;
  client: string;
  /** Display label for the discipline, e.g. "Art Direction". */
  role: string;
  discipline: Discipline;
  /** Free text so ranges ("2019–20") work as well as single years. */
  year: string;
  /** One line. Shown on the catalog card. */
  summary: string;
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

  credits?: Credit[];
  result?: ProjectResult;
}

export interface Service {
  /** Two-digit index as shown in the design: "01". */
  num: string;
  title: string;
  /** One line. This is what the homepage capability list shows. */
  description: string;
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
