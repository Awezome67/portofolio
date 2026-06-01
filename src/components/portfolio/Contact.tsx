import Image from "next/image";
import type { Profile, SocialLink } from "@prisma/client";
import { SectionHeading } from "./SectionHeading";

export function Contact({
  profile,
  socials,
}: {
  profile: Profile;
  socials: SocialLink[];
}) {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Contact"
          title="Let's connect"
          description="Open to collaborations, internships, and interesting conversations."
        />
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-2xl font-semibold text-white">
                Ready to work together?
              </p>
              <p className="mt-3 text-white/55">
                Reach out via email or connect on social media. I typically
                respond within a few days.
              </p>
              {profile.email ? (
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 font-mono text-sm text-cyan-200 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  {profile.email}
                </a>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover flex items-center gap-3 rounded-2xl px-5 py-4 transition"
                >
                  <Image
                    src={social.iconUrl}
                    alt=""
                    width={24}
                    height={24}
                    className="invert opacity-80"
                  />
                  <span className="font-medium text-white/80">
                    {social.platform}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
