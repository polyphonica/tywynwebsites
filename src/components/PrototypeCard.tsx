import type { Prototype } from "@/data/projects";
import ImagePlaceholder from "./ImagePlaceholder";
import { tagStyle } from "@/lib/tagStyles";

export default function PrototypeCard({
  prototype,
}: {
  prototype: Prototype;
}) {
  return (
    <div className="card-frame flex flex-col">
      <ImagePlaceholder label={prototype.name} />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-medium text-ink">
          {prototype.name}
        </h3>
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
    </div>
  );
}
