import type { Profile } from "@prisma/client";
import { SectionHeading } from "./SectionHeading";

export function About({ profile }: { profile: Profile }) {
  // FILL: edit these three cards (or remove the block in the JSX below)
  const highlights = [
    { label: "Focus", value: "CyberSecurity" }, // FILL
    { label: "Studying", value: "Informatics" }, // FILL
    { label: "Interests", value: "Computer Networks, Full-Stack Web & Mobile" }, // FILL
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Left column: heading + bio */}
          <div>
            <SectionHeading
              label="About"
              title="Building with curiosity and care"
              description="A snapshot of who I am and what drives my work as a student developer."
            />
            <p className="text-lg leading-relaxed text-white/85 whitespace-pre-line">
              {profile.bio}
            </p>
          </div>
          {/* Right column: highlight cards — aligned to top of left column */}
          <div className="grid gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass glass-hover rounded-2xl p-5 transition"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  {item.label}
                </p>
                <p className="mt-2 font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
