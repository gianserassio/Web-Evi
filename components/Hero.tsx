"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "+200", label: "Videos" },
  { value: "~40", label: "Marcas" },
  { value: "+150k", label: "Seguidores" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-28 pb-16">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#FAF6F6] to-[#EEF5F5]" />
      <div className="pointer-events-none absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-[#822B5B]/20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-[460px] h-[460px] rounded-full bg-[#3FBDBC]/20 blur-[120px]" />
      <div className="dot-grid absolute inset-0 opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">

        {/* Columna izquierda */}
        <div className="reveal">
          {/* Píldora de disponibilidad */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#1A1A1A]/8 text-xs font-semibold text-[#1A1A1A]/70 mb-7 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3FBDBC] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3FBDBC]" />
            </span>
            Disponible para nuevos proyectos
          </span>

          <h1 className="text-4xl sm:text-5xl xl:text-[3.4rem] font-black text-[#1A1A1A] leading-[1.06] mb-6 tracking-tight">
            Creación de{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#822B5B]">Contenido</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#822B5B]/20 -z-0 rounded-sm" />
            </span>
            , gestión de{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#822B5B]">Redes</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#822B5B]/20 -z-0 rounded-sm" />
            </span>
            {" "}+{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#822B5B]">Desarrollo web</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#822B5B]/20 -z-0 rounded-sm" />
            </span>
          </h1>

          <p className="text-lg text-[#1A1A1A]/60 leading-relaxed mb-9 max-w-lg">
            Soy Evangelina y trabajo como tu área digital completa: community
            management, creación de contenido y desarrollo web. Vos te enfocás en
            tu negocio, yo me encargo de tu presencia online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-2xl bg-[#822B5B] text-white font-bold text-base hover:bg-[#3696A2] transition-all duration-200 text-center shadow-lg shadow-[#822B5B]/30 hover:shadow-[#822B5B]/50 hover:-translate-y-0.5"
            >
              Ver portfolio
            </a>
            <a
              href="#cta"
              className="px-8 py-4 rounded-2xl border-2 border-[#3FBDBC] text-[#3FBDBC] font-bold text-base hover:bg-[#3FBDBC] hover:text-white transition-all duration-200 text-center hover:-translate-y-0.5"
            >
              Contactame
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex items-center gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-6 sm:gap-8">
                {i > 0 && <span className="h-9 w-px bg-[#1A1A1A]/10" />}
                <div>
                  <p className="text-2xl font-black text-[#1A1A1A] leading-none">
                    {s.value}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/45 mt-1">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha — video */}
        <div className="reveal reveal-d2 relative flex items-center justify-center">
          {/* Halo de color detrás */}
          <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-[#822B5B]/30 to-[#3FBDBC]/30 -z-10 blur-2xl" />

          <div className="relative w-full max-w-sm mx-auto lg:max-w-none rounded-[1.75rem] overflow-hidden shadow-2xl shadow-[#822B5B]/15 bg-[#1A1A1A] aspect-[9/16] lg:aspect-[4/5] ring-1 ring-white/40">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted={muted}
              loop
              playsInline
              disableRemotePlayback
            >
              <source src="https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Home.mp4" type="video/mp4" />
            </video>

            {/* Overlay gradient bottom */}
            <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-[#1A1A1A]/75 to-transparent pointer-events-none" />

            {/* Botón mute/unmute */}
            <button
              onClick={() => {
                const v = videoRef.current;
                if (!v) return;
                v.muted = !v.muted;
                setMuted(v.muted);
              }}
              aria-label={muted ? "Activar sonido" : "Silenciar"}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" fillOpacity="0.9" />
                  <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" fillOpacity="0.9" />
                  <path d="M15.54 8.46a5 5 0 010 7.07" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M19.07 4.93a10 10 0 010 14.14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </button>

            {/* Label en el video */}
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                Evangelina — Tu área digital
              </p>
            </div>
          </div>

          {/* Badge flotante */}
          <div className="absolute -top-4 -left-3 lg:top-6 lg:-left-8 bg-white rounded-2xl shadow-xl shadow-[#1A1A1A]/10 px-4 py-3 flex items-center gap-3 border border-[#1A1A1A]/5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#822B5B]/30 to-[#3FBDBC]/20 flex items-center justify-center text-base">
              ✨
            </div>
            <div>
              <p className="text-xs font-bold text-[#1A1A1A]">Redes · Contenido · Web</p>
              <p className="text-xs text-[#1A1A1A]/45">Tu área digital completa</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
