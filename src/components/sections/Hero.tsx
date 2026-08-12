import type { MediaAsset } from "@/types/content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import styles from "./Hero.module.css";

interface HeroProps {
  /** Two lines, rendered stacked. Kept as data so the break point is content. */
  headline: [string, string];
  lead: string;
  media?: MediaAsset;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export function Hero({ headline, lead, media, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <MediaSlot
        media={media}
        placeholder="Drop hero image or reel still"
        priority
        sizes="100vw"
        className={styles.media}
      />
      <div className={styles.scrim} aria-hidden="true" />

      <p className={styles.status}>
        {site.location} — {site.availability}
      </p>

      <div className={styles.content}>
        {/* The space before the break keeps the accessible name from running
            the two lines together ("Ideas,Produced."). */}
        <h1 id="hero-heading" className={styles.headline}>
          {headline[0]}{" "}
          <br />
          {headline[1]}
        </h1>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.actions}>
          <Button href={primaryCta.href} variant="solid">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="underline">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
