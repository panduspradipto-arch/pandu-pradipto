import Image from "next/image";
import type { MediaAsset } from "@/types/content";
import styles from "./MediaSlot.module.css";

interface MediaSlotProps {
  media?: MediaAsset;
  /** Shown inside the placeholder when `media` is absent. Describe what belongs here. */
  placeholder: string;
  /**
   * Above-the-fold media (the hero) should be eager + high priority; everything
   * below stays lazy. Only one slot per page should set this.
   */
  priority?: boolean;
  /** Passed to next/image so it can pick a source width per breakpoint. */
  sizes?: string;
  grayscale?: boolean;
  className?: string;
}

/**
 * A media frame that is honest about being empty.
 *
 * Real stills have not been supplied for this build, so an unfilled slot renders
 * a visibly marked placeholder carrying its own label rather than an invisible
 * blank box. That keeps "which frames still need artwork" answerable at a glance.
 */
export function MediaSlot({
  media,
  placeholder,
  priority = false,
  sizes = "100vw",
  grayscale = false,
  className,
}: MediaSlotProps) {
  const classes = [styles.slot, grayscale ? styles.grayscale : "", className]
    .filter(Boolean)
    .join(" ");

  if (!media) {
    return (
      <div className={classes} data-placeholder="true" role="img" aria-label={`Placeholder: ${placeholder}`}>
        <span className={styles.placeholderLabel}>{placeholder}</span>
      </div>
    );
  }

  return (
    <div className={classes}>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={styles.image}
      />
    </div>
  );
}
