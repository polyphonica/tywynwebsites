import { ogSize, renderOgImage } from "@/lib/ogImage";

export const alt =
  "Tywyn Websites — professionelle Websites für Praxen, Selbstständige und kleine Unternehmen";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Websites auf Deutsch",
    title: "Professionelle Websites für Praxen und kleine Unternehmen.",
  });
}
