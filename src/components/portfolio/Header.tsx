"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/5 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-mono text-sm font-medium tracking-tight text-white/90 transition hover:text-cyan-300"
        >
          <span className="text-cyan-400">&lt;</span>
          {name.split(" ")[0]}
          <span className="text-cyan-400"> /&gt;</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-4 py-2 text-sm font-medium text-cyan-200 ring-1 ring-cyan-400/30 transition hover:from-cyan-500/30 hover:to-violet-500/30"
        >
          Say hello
        </a>
      </div>
    </header>
  );
}
