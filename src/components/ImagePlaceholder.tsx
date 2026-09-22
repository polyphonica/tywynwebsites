export default function ImagePlaceholder({
  label,
  aspect = "aspect-[16/10]",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} flex flex-col items-center justify-center gap-2 border border-dashed border-rule bg-paper px-6 text-center`}
    >
      <span className="mono-label text-ink-soft">Screenshot placeholder</span>
      <span className="font-display text-sm italic text-ink-soft">
        {label}
      </span>
    </div>
  );
}
