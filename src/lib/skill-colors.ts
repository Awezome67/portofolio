/**
 * Brand colors for skill icons (masked SVGs on the Skills section).
 * FILL: add `{ "Your Skill": "#hexcolor" }` when you add a skill in the database.
 */
export const SKILL_COLORS: Record<string, string> = {
  JavaScript: "#f7df1e",
  HTML5: "#e34f26",
  CSS: "#264de4",
  Java: "#f89820",
  Kotlin: "#7f52ff",
  PostgreSQL: "#336791",
  MySQL: "#00758f",
};

export const DEFAULT_SKILL_COLOR = "#22d3ee";

export function getSkillColor(name: string): string {
  return SKILL_COLORS[name] ?? DEFAULT_SKILL_COLOR;
}
