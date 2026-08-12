import type { MediaAsset } from "@/types/content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import styles from "./AboutOpening.module.css";

interface AboutOpeningProps {
  eyebrow: string;
  statement: string;
  portrait?: MediaAsset;
}

/**
 * Asymmetric opening: portrait bleeding off the left page edge, statement right.
 *
 * The left bleed is what separates this from a conventional profile page — a
 * portrait sitting neatly inside the gutter beside a bio block is exactly the
 * executive-profile look the brief rules out.
 *
 * Portrait is grayscale, matching the approved homepage treatment.
 */
export function AboutOpening({ eyebrow, statement, portrait }: AboutOpeningProps) {
  return (
    <section className={styles.opening} aria-labelledby="about-statement">
      <MediaSlot
        media={portrait}
        placeholder="Portrait — black & white street portrait [ASSET NEEDS SOURCING]"
        priority
        sizes="(max-width: 900px) 100vw, 55vw"
        grayscale
        className={styles.portrait}
      />

      <div className={styles.copy}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 id="about-statement" className={styles.statement}>
          {statement}
        </h1>
      </div>
    </section>
  );
}
