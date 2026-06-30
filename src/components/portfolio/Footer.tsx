export function Footer({ name }: { name: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/70 sm:flex-row">
        <p>
          © {year} {name}. Built with Next.js & Prisma.
        </p>
        <a
          href="#home"
          className="font-mono text-xs font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
