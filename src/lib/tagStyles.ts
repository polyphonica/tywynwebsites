const TAG_STYLES = [
  "bg-accent/10 text-accent border-accent/30",
  "bg-teal/10 text-teal border-teal/30",
  "bg-brass/15 text-brass border-brass/40",
];

export function tagStyle(index: number) {
  return TAG_STYLES[index % TAG_STYLES.length];
}
