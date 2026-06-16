"use client";

import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  id: string;
  children?: { label: string; href: string; color: string }[];
};

const links: NavLink[] = [
  { label: "Servicios", href: "#servicios", id: "servicios" },
  {
    label: "Portfolio",
    href: "#portfolio",
    id: "portfolio",
    children: [
      { label: "Community Manager", href: "#community-manager", color: "#822B5B" },
      { label: "Creadora de contenido", href: "#creadora-contenido", color: "#3FBDBC" },
      { label: "Diseño y desarrollo web", href: "#desarrollo-web", color: "#3696A2" },
    ],
  },
  { label: "Proceso", href: "#proceso", id: "proceso" },
  { label: "Sobre mí", href: "#sobre-mi", id: "sobre-mi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: marca la sección que está cruzando la franja central.
  useEffect(() => {
    const ids = links.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-5xl flex items-center justify-between gap-4 rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-[#1A1A1A]/5 border border-[#1A1A1A]/5"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo / nombre */}
        <a
          href="#"
          className="flex items-center gap-2 font-black text-[#1A1A1A] tracking-tight"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#822B5B]" />
          Evangelina
        </a>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <div key={link.href} className="relative group">
              <a
                href={link.href}
                className={`relative flex items-center gap-1 text-sm font-semibold transition-colors ${
                  active === link.id
                    ? "text-[#822B5B]"
                    : "text-[#1A1A1A]/60 hover:text-[#822B5B]"
                }`}
              >
                {link.label}
                {link.children && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[#822B5B] transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                />
              </a>

              {/* Dropdown */}
              {link.children && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="w-60 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl shadow-[#1A1A1A]/10 border border-[#1A1A1A]/5 p-2">
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-[#1A1A1A]/70 hover:bg-[#1A1A1A]/4 hover:text-[#1A1A1A] transition-colors"
                      >
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: child.color }}
                        />
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + burger */}
        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-[#822B5B] text-white text-sm font-bold hover:bg-[#3696A2] transition-colors duration-200 shadow-md shadow-[#822B5B]/25"
          >
            Contactame
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors"
            aria-label="Menú"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden absolute top-[72px] left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl shadow-[#1A1A1A]/10 border border-[#1A1A1A]/5 p-4 flex flex-col gap-1">
          {links.map((link) => (
            <div key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  active === link.id
                    ? "bg-[#822B5B]/8 text-[#822B5B]"
                    : "text-[#1A1A1A]/70 hover:bg-[#822B5B]/8 hover:text-[#822B5B]"
                }`}
              >
                {link.label}
              </a>
              {link.children && (
                <div className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-[#1A1A1A]/8 pl-3">
                  {link.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-[#1A1A1A]/55 hover:text-[#1A1A1A] transition-colors"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: child.color }}
                      />
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-1 px-4 py-3 rounded-xl bg-[#822B5B] text-white text-sm font-bold text-center"
          >
            Contactame
          </a>
        </div>
      )}
    </header>
  );
}
