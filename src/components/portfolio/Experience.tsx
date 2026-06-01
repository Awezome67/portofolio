import type { Experience } from "@prisma/client";
import { formatDateRange } from "@/lib/format";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Experience"
          title="Where I've learned and contributed"
          description="Academic journey, campus roles, and professional experience."
        />
        <div className="relative space-y-0">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent md:left-[15px]"
            aria-hidden
          />
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="relative grid gap-4 pb-12 pl-10 md:grid-cols-[200px_1fr] md:gap-8 md:pl-14"
            >
              <span
                className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/40 bg-[#06060f] md:left-1"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <div>
                <p className="font-mono text-xs text-cyan-400/80">
                  {formatDateRange(exp.startDate, exp.endDate, exp.isCurrent)}
                </p>
                {exp.location ? (
                  <p className="mt-1 text-sm text-white/40">{exp.location}</p>
                ) : null}
              </div>
              <div className="glass glass-hover rounded-2xl p-6 transition">
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                <p className="mt-1 text-violet-300/90">{exp.organization}</p>
                <p className="mt-4 leading-relaxed text-white/60">
                  {exp.description}
                </p>
                {exp.isCurrent ? (
                  <span className="mt-4 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/20">
                    Current
                  </span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
