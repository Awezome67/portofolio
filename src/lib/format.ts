export function formatDateRange(
  start: Date,
  end: Date | null,
  isCurrent: boolean
): string {
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  const startStr = fmt(start);
  if (isCurrent || !end) return `${startStr} — Present`;
  return `${startStr} — ${fmt(end)}`;
}
