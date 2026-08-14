/**
 * Projects with no source artwork located in either archive.
 *
 * Rebuilt from the definitive Step 14A audit (1,156 files, all file types,
 * PORTOFOLIO primary + _Artwork as cross-check). The earlier list of five was
 * wrong: four of those projects did have assets, missed by a combination of a
 * broken regex alternation, PDFs being filtered out of the pool, a spelling
 * variant ("Ramadhan"), and files added after that audit ran.
 *
 * The archive treats these as *media unavailable* rather than rendering a
 * generic placeholder — the work is real, the artwork simply isn't in hand.
 *
 * Remove a slug from this list once its artwork is located.
 */
export const projectsWithoutArtwork: readonly string[] = ["jnt-express"];

export function hasArtwork(slug: string): boolean {
  return !projectsWithoutArtwork.includes(slug);
}
