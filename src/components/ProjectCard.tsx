import type { Project } from "@/data/projects";
import ImagePlaceholder from "./ImagePlaceholder";
import { tagStyle } from "@/lib/tagStyles";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-frame group flex flex-col"
    >
      <ImagePlaceholder label={project.name} />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-medium text-ink">
            {project.name}
          </h3>
          <span className="mono-label shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100">
            Visit ↗
          </span>
        </div>
        <p className="flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={`mono-label border px-2 py-1 ${tagStyle(i)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
