import Image from "next/image";
import type { Screenshot } from "@/data/projects";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ScreenshotGallery({
  screenshots,
}: {
  screenshots: Screenshot[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {screenshots.map((shot) =>
        typeof shot === "string" ? (
          <ImagePlaceholder key={shot} label={shot} />
        ) : (
          <figure key={shot.label} className="flex flex-col gap-3">
            {/* object-contain: admin screens are often much wider than 16:10,
                so letterbox rather than crop away half the content. */}
            <div className="relative aspect-[16/10] overflow-hidden border border-rule bg-white">
              <Image
                src={shot.src}
                alt={shot.label}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mono-label text-ink-soft">
              {shot.label}
            </figcaption>
          </figure>
        ),
      )}
    </div>
  );
}
