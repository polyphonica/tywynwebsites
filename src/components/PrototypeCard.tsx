import Image from "next/image";
import Link from "next/link";
import type { Prototype } from "@/data/projects";
import ImagePlaceholder from "./ImagePlaceholder";
import { tagStyle } from "@/lib/tagStyles";

export default function PrototypeCard({
  prototype,
}: {
  prototype: Prototype;
}) {
  return (
    <Link
      href={`/prototypes/${prototype.slug}`}
      className="card-frame group flex flex-col"
    >
      {prototype.image ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-rule bg-paper">
          <Image
            src={prototype.image}
            alt={`${prototype.name} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <ImagePlaceholder label={prototype.name} />
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-medium text-ink">
            {prototype.name}
          </h3>
          <span className="mono-label shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100">
            View →
          </span>
        </div>
        <p className="flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
          {prototype.summary}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {prototype.tags.map((tag, i) => (
            <span
              key={tag}
              className={`mono-label border px-2 py-1 ${tagStyle(i)}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mono-label pt-2 text-brass">{prototype.status}</p>
      </div>
    </Link>
  );
}
