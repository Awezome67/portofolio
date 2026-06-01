import Image from "next/image";
import { getSkillColor } from "@/lib/skill-colors";

/** Icons with built-in colors — shown as-is, not tinted. */
const MULTICOLOR_ICONS = [
  "/images/tech/linux2.svg",
  "/images/tech/firebase.svg",
  "/images/tech/androidstudio.svg",
];

export function SkillIcon({
  name,
  iconUrl,
}: {
  name: string;
  iconUrl: string;
}) {
  if (MULTICOLOR_ICONS.includes(iconUrl)) {
    return (
      <Image
        src={iconUrl}
        alt={name}
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    );
  }

  const color = getSkillColor(name);

  return (
    <div
      role="img"
      aria-label={name}
      className="h-8 w-8 shrink-0"
      style={{
        backgroundColor: color,
        maskImage: `url(${iconUrl})`,
        WebkitMaskImage: `url(${iconUrl})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
