import type { Skill } from "@prisma/client";
import { SkillIcon } from "./SkillIcon";
import { SectionHeading } from "./SectionHeading";

export function Skills({ skills }: { skills: Skill[] }) {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Skills"
          title="Tools I reach for"
          description="Technologies I've used in coursework, personal projects, and internships."
        />
        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-4 font-mono text-sm text-white/40">{category}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className="glass glass-hover group flex flex-col items-center gap-3 rounded-2xl p-5 transition"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition group-hover:scale-110 group-hover:bg-white/10">
                        <SkillIcon name={skill.name} iconUrl={skill.iconUrl} />
                      </div>
                      <span className="text-center text-sm font-medium text-white/80">
                        {skill.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
