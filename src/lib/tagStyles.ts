const TAG_STYLES = [
  "bg-accent/6 text-accent border-accent/30",
  "bg-teal/6 text-teal border-teal/30",
  "bg-brass/6 text-brass border-brass/40",
];

export function tagStyle(index: number) {
  return TAG_STYLES[index % TAG_STYLES.length];
}
