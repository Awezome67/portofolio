import Image from "next/image";
import type { Profile, SocialLink } from "@prisma/client";

export function Hero({
  profile,
  socials,
}: {
  profile: Profile;
  socials: SocialLink[];
}) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="opacity-0 animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-xs font-semibold text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-white">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            {profile.headline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-xl transition"
              >
                <Image
                  src={social.iconUrl}
                  alt=""
                  width={22}
                  height={22}
                  className="opacity-100 invert"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center opacity-0 animate-fade-up stagger-2 lg:justify-end">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-transparent blur-3xl" />
          <div className="glass relative animate-float overflow-hidden rounded-3xl p-2 ring-1 ring-white/10">
            <div className="relative aspect-[4/5] w-72 overflow-hidden rounded-2xl sm:w-80">
              <Image
                src={profile.imageUrl}
                alt={profile.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 288px, 320px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06060f]/80 via-transparent to-transparent" />
            </div>
            {profile.location ? (
              <p className="absolute bottom-6 left-6 right-6 rounded-xl bg-black/60 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md">
                <span className="text-cyan-300">↗</span> {profile.location}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
