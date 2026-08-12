import type { GalleryEntry, GalleryMedia } from "@/types/content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./ProjectGallery.module.css";

interface ProjectGalleryProps {
  entries: GalleryEntry[];
  /** Captions placeholder slots and labels video embeds. */
  projectTitle: string;
}

interface FrameProps {
  item: GalleryMedia;
  fallbackCaption: string;
  sizes: string;
  className?: string;
}

function Frame({ item, fallbackCaption, sizes, className }: FrameProps) {
  return (
    <figure className={[styles.figure, className].filter(Boolean).join(" ")}>
      <div className={styles.frame} data-aspect={item.aspect ?? "3:2"}>
        <MediaSlot
          media={item.media}
          placeholder={item.caption ?? fallbackCaption}
          sizes={sizes}
        />
      </div>
      {item.caption ? <figcaption className={styles.caption}>{item.caption}</figcaption> : null}
    </figure>
  );
}

/**
 * The visual story — an art-directed sequence, not a grid.
 *
 * Each beat keeps its own shape and its own preceding gap, so the page builds
 * rhythm the way a spread does. Aspect ratios are preserved at every breakpoint;
 * portrait work is never re-cropped to landscape for the sake of tidiness.
 */
export function ProjectGallery({ entries, projectTitle }: ProjectGalleryProps) {
  if (entries.length === 0) return null;

  return (
    <section className={styles.gallery} aria-label="Visual story">
      {entries.map((entry, index) => {
        const fallback = `${projectTitle} — ${index + 1}`;
        const gap = entry.gap ?? (index === 0 ? "normal" : "normal");

        const beat = (() => {
          switch (entry.type) {
            case "bleed":
              return (
                <Reveal>
                  <Frame
                    item={{ aspect: "21:9", ...entry }}
                    fallbackCaption={fallback}
                    sizes="100vw"
                  />
                </Reveal>
              );

            case "frame":
              return (
                <Reveal>
                  <Frame
                    item={{ aspect: "16:9", ...entry }}
                    fallbackCaption={fallback}
                    sizes="(max-width: 900px) 100vw, 90vw"
                  />
                </Reveal>
              );

            case "pair":
              return (
                <div className={styles.pair} data-variant={entry.variant ?? "asymmetric"}>
                  {entry.items.map((item, i) => (
                    <Reveal key={i} delay={i * 80}>
                      <Frame
                        item={item}
                        fallbackCaption={`${fallback}.${i + 1}`}
                        sizes="(max-width: 700px) 100vw, 45vw"
                      />
                    </Reveal>
                  ))}
                </div>
              );

            case "portrait":
              return (
                <Reveal className={styles.offset} >
                  <Frame
                    item={{ aspect: "4:5", ...entry }}
                    fallbackCaption={fallback}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={styles.portrait}
                  />
                </Reveal>
              );

            case "detail":
              return (
                <Reveal className={styles.offset}>
                  <Frame
                    item={{ aspect: "1:1", ...entry }}
                    fallbackCaption={fallback}
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className={styles.detail}
                  />
                </Reveal>
              );

            case "film":
              return (
                <Reveal>
                  <figure className={styles.figure}>
                    <VideoEmbed
                      video={entry.video}
                      poster={entry.poster}
                      title={projectTitle}
                    />
                    {entry.caption ? (
                      <figcaption className={styles.caption}>{entry.caption}</figcaption>
                    ) : null}
                  </figure>
                </Reveal>
              );
          }
        })();

        const isBleed =
          entry.type === "bleed" || (entry.type === "film" && entry.bleed === true);

        const align =
          entry.type === "portrait" || entry.type === "detail" ? (entry.align ?? "left") : undefined;

        return (
          <div
            key={index}
            className={[styles.beat, isBleed ? styles.bleed : styles.contained].join(" ")}
            data-gap={gap}
            data-align={align}
          >
            {beat}
          </div>
        );
      })}
    </section>
  );
}
