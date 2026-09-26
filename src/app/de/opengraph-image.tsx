import { ogSize, renderOgImage } from "@/lib/ogImage";

export const alt =
  "Tywyn Websites — Websites für Musik, Kultur und kleine Unternehmen";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Websites auf Deutsch",
    title: "Websites für Musik, Kultur und kleine Unternehmen.",
  });
}
