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
  title: {
    default: `${site.name} — Creative Direction & Production`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} — Creative Direction & Production`,
    description: site.tagline,
    type: "website",
    locale: "en_US",
  },
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
