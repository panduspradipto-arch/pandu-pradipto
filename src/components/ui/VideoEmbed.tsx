"use client";

import { useState } from "react";
import type { MediaAsset, VideoRef } from "@/types/content";
import { MediaSlot } from "./MediaSlot";
import styles from "./VideoEmbed.module.css";

interface VideoEmbedProps {
  video: VideoRef;
  /** Poster frame. A placeholder slot stands in when absent. */
  poster?: MediaAsset;
  title: string;
}

/**
 * Click-to-load video facade.
 *
 * Nothing is requested from YouTube until the viewer asks for it — the page
 * ships a poster frame and a play control instead of a third-party iframe, so
 * a detail page with several films costs one image each rather than several
 * hundred kilobytes of embedded player.
 */
export function VideoEmbed({ video, poster, title }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={styles.frame}>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={styles.frame}>
      <MediaSlot
        media={poster}
        placeholder={`Video poster — ${title}`}
        sizes="(max-width: 900px) 100vw, 80vw"
        className={styles.poster}
      />
      <button
        type="button"
        className={styles.play}
        onClick={() => setPlaying(true)}
      >
        <span className={styles.playIcon} aria-hidden="true" />
        <span className={styles.playLabel}>Play film — {title}</span>
      </button>
    </div>
  );
}
