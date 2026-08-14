import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { GalleryEntry } from "@/types/content";

import { Reveal } from "@/components/ui/Reveal";
import { ProjectHero } from "@/components/sections/ProjectHero";
import { ProjectIntro } from "@/components/sections/ProjectIntro";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ProjectProduction } from "@/components/sections/ProjectProduction";
import { ProjectResult } from "@/components/sections/ProjectResult";
import { NextProject } from "@/components/sections/NextProject";
import { ProjectCTA } from "@/components/sections/ProjectCTA";

import { getNextProject, getProject, projects } from "@/data/projects";
import { site } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Every project is known at build time, so every detail page prerenders. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const description = project.description ?? project.summary;

  /* Relative — `metadataBase` in the root layout makes it absolute. The still
     lives under /public/media, so no host is knowable at this level. */
  const path = `/work/${slug}`;

  return {
    title: `${project.title} — ${project.client}`,
    description,
    openGraph: {
      title: `${project.title} — ${project.client}`,
      description,
      url: path,
      siteName: site.name,
      type: "article",
      images: project.heroMedia?.src ?? project.media?.src,
    },
    alternates: { canonical: path },
  };
}

/**
 * Project detail.
 *
 * Composition only. Each section decides for itself whether it has anything to
 * say and returns null when it does not, so a thinly-documented project renders
 * a short, complete page instead of a run of empty headings.
 */
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const gallery = project.gallery ?? [];

  /*
   * A project whose only moving asset is a single film still deserves to show
   * it, so a top-level `video` is promoted into the visual story when the
   * project has no gallery of its own.
   */
  const entries: GalleryEntry[] =
    gallery.length > 0
      ? gallery
      : project.video
        ? [{ type: "film", video: project.video, poster: project.media, bleed: true }]
        : [];

  /*
   * The first beat is promoted above "My Role" as the lead media, so the page
   * reads image → context → image → contribution → the rest of the work
   * rather than stacking all the writing together.
   */
  const [lead, ...rest] = entries;

  return (
    <>
      <ProjectHero project={project} />
      <Reveal>
        <ProjectIntro project={project} />
      </Reveal>
      {lead ? (
        <ProjectGallery entries={[lead]} projectTitle={project.title} label="Lead image" />
      ) : null}
      <Reveal>
        <ProjectProduction project={project} />
      </Reveal>
      <ProjectGallery entries={rest} projectTitle={project.title} />
      <Reveal>
        <ProjectResult result={project.result} />
      </Reveal>
      <NextProject project={getNextProject(project.slug)} />
      <ProjectCTA />
    </>
  );
}
