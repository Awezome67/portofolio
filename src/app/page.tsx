import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { ExperienceSection } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default async function Home() {
  const [profile, socials, skills, experiences, projects] = await Promise.all([
    prisma.profile.findUnique({ where: { id: 1 } }),
    prisma.socialLink.findMany({ orderBy: { order: "asc" } }),
    prisma.skill.findMany({ orderBy: { order: "asc" } }),
    prisma.experience.findMany({ orderBy: { order: "asc" } }),
    prisma.project.findMany({ orderBy: { order: "asc" } }),
  ]);

  if (!profile) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-semibold text-white">Portfolio not set up yet</h1>
        <p className="mt-3 max-w-md text-white/90">
          Run database migrations and seed your content:
        </p>
        <pre className="mt-6 rounded-xl bg-white/5 px-4 py-3 font-mono text-sm text-cyan-200">
          npm run db:migrate{"\n"}npm run db:seed
        </pre>
      </main>
    );
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-0 bg-mesh" aria-hidden />
      <div className="pointer-events-none fixed inset-0 grid-overlay opacity-20" aria-hidden />
      <Header name={profile.name} />
      <main className="relative">
        <Hero profile={profile} socials={socials} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <ExperienceSection experiences={experiences} />
        <Contact profile={profile} socials={socials} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
