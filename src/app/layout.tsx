import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { site } from "@/data/site";
import "./globals.css";

/**
 * Self-hosted at build time by next/font — no render-blocking request to
 * Google, and no layout shift, since the fallback metrics are matched.
 */
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  /**
   * Resolves every relative metadata URL in the app — canonicals, `og:url`,
   * and the per-project `og:image` paths under /media — against the production
   * origin. Without it Next falls back to http://localhost:3000 and warns at
   * build time, which is exactly what shipped before.
   */
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Creative Direction & Production`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  /* Page-level metadata replaces `openGraph` wholesale rather than merging into
     it, so each page restates url/siteName. This is the homepage's own set. */
  openGraph: {
    title: `${site.name} — Creative Direction & Production`,
    description: site.tagline,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  /*
   * Card type only. Title, description, and image are deliberately omitted so
   * Next falls back to each page's own title/description/openGraph.images —
   * stating them here would stamp the homepage's copy onto every shared URL,
   * the same trap the per-page `openGraph` blocks already work around.
   *
   * `summary` rather than `summary_large_image`: most projects have no still
   * yet, and a large-image card without an image renders an empty banner.
   */
  twitter: { card: "summary" },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {/*
          Observed by Navbar to decide when it has cleared the hero. Using a
          sentinel keeps the nav off the scroll event loop entirely.
        */}
        <span id="nav-sentinel" aria-hidden="true" className="nav-sentinel" />
        <Navbar />
        <main id="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
