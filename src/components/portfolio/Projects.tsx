import Image from "next/image";
import type { Project } from "@prisma/client";
import { SectionHeading } from "./SectionHeading";

export function Projects({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Projects"
          title="Things I've shipped"
          description="Selected work from coursework, hackathons, and side projects."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} large />
          ))}
        </div>
        {others.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <article
      className={`glass glass-hover group overflow-hidden rounded-2xl transition ${
        large ? "md:col-span-1" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${large ? "aspect-[16/10]" : "aspect-video"}`}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes={large ? "(max-width: 768px) 100vw, 50vw" : "33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c18] via-transparent to-transparent opacity-80" />
        {project.featured ? (
          <span className="absolute right-4 top-4 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-200 ring-1 ring-cyan-400/30">
            Featured
          </span>
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>
        {project.techStack.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-white/60"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            Source code →
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-violet-300 transition hover:text-violet-200"
            >
              Live demo →
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
