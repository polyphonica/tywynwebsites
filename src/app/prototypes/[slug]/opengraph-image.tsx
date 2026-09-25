import { notFound } from "next/navigation";
import { getPrototype, prototypes } from "@/data/projects";
import { ogSize, renderOgImage } from "@/lib/ogImage";

export const alt = "Tywyn Websites prototype";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return prototypes.map((prototype) => ({ slug: prototype.slug }));
}

export default async function Image(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const prototype = getPrototype(slug);
  if (!prototype) notFound();
  return renderOgImage({ eyebrow: "Prototype", title: prototype.name });
}
