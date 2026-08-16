/**
 * Projects with no source artwork located in either archive.
 *
 * The archive treats these as *media unavailable* rather than rendering a
 * generic placeholder — the work is real, the artwork simply isn't in hand.
 *
 * Currently empty. `jnt-express` was the last entry and was wrong: the owner's
 * curated asset folder holds six finished J&T studio photographs, and the 2026
 * deck shows the same shoot. It was listed as assetless because two earlier
 * archive sweeps searched for "jnt" and "j&t" and the files are named
 * "J&T Yearly Photo Stock" inside a `[Photoshoot Project]` prefix — a reminder
 * that absence from a filename search is not absence of artwork.
 *
 * Add a slug here only after looking for its artwork by eye, not by filename.
 */
export const projectsWithoutArtwork: readonly string[] = [];

export function hasArtwork(slug: string): boolean {
  return !projectsWithoutArtwork.includes(slug);
}
