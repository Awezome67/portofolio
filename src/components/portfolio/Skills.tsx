import type { Skill } from "@prisma/client";
import { SkillIcon } from "./SkillIcon";
import { SectionHeading } from "./SectionHeading";

export function Skills({ skills }: { skills: Skill[] }) {
  // Flatten skills and duplicate for seamless infinite scroll
  const skillItems = [...skills, ...skills];
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Skills"
          title="Tools I reach for"
          description="Technologies I've used in coursework, personal projects, and internships."
        />
        {/* Marquee container */}
        <div className="overflow-hidden py-4">
          <div className="flex animate-marquee flex-nowrap whitespace-nowrap">
            {skillItems.map((skill, i) => (
              <div
                key={i}
                className="glass glass-hover group flex flex-col items-center gap-3 rounded-2xl p-5 mx-2 min-w-[120px] transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition group-hover:scale-110 group-hover:bg-white/10">
                  <SkillIcon name={skill.name} iconUrl={skill.iconUrl} />
                </div>
                <span className="text-center text-sm font-semibold text-white/90">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
