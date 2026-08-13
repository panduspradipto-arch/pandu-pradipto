/**
 * Projects with no source artwork located in either archive.
 *
 * Established by the Step 14 asset mapping, which searched
 * MASTER_P/PORTOFOLIO (295 files) and MASTER_P/_Artwork (836 files).
 *
 * Kept here rather than in `projects.ts` so the project records stay untouched.
 * The archive treats these as *media unavailable* rather than rendering a
 * generic placeholder — the work is real, the artwork simply isn't in hand.
 *
 * Remove a slug from this list once its artwork is integrated.
 */
export const projectsWithoutArtwork: readonly string[] = [
  "cimory-tayo-dance",
  "mlbb-ramadan",
  "jnt-express",
  "mlbb-valentines",
  "anika-worry-monster",
];

export function hasArtwork(slug: string): boolean {
  return !projectsWithoutArtwork.includes(slug);
}
