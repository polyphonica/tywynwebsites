import { ogSize, renderOgImage } from "@/lib/ogImage";

export const alt = "Tywyn Websites — websites and apps built by musicians, for musicians";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Web development for music & performing arts",
    title: "Websites and apps built by musicians, for musicians.",
  });
}
