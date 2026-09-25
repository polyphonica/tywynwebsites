import { notFound } from "next/navigation";
import { getProjectDetail, projectDetails } from "@/data/projects";
import { ogSize, renderOgImage } from "@/lib/ogImage";

export const alt = "Tywyn Websites project";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export default async function Image(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const project = getProjectDetail(slug);
  if (!project) notFound();
  return renderOgImage({ eyebrow: "Project", title: project.name });
}
