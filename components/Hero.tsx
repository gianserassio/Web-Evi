"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 py-20">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-[#FAF8F5]" />
      <div className="mesh-blob pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#822B5B]/32 blur-[120px]" />
      <div className="mesh-blob-alt pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#3FBDBC]/24 blur-[100px]" />
      <div className="mesh-blob pointer-events-none absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#3696A2]/32 blur-[80px]" />

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-40" />

      {/* Large ghost text */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden select-none">
        <span className="block text-[160px] sm:text-[220px] font-black text-[#1A1A1A]/[0.03] leading-none whitespace-nowrap -mb-8">
          EVANGELINA
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Columna izquierda */}
        <div>
          <span className="inline-flex items-center gap-2 text-2xl font-black tracking-widest uppercase text-[#822B5B] mb-6">
            <span className="w-6 h-px bg-[#822B5B]" />
            Evangelina
          </span>

          <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-black text-[#1A1A1A] leading-[1.05] mb-6 tracking-tight">
            Creación de{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#822B5B]">Contenido</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#822B5B]/20 -z-0 rounded-sm" />
            </span>
            {" "}creativo +{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#822B5B]">Estrategia</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#822B5B]/20 -z-0 rounded-sm" />
            </span>
            {" "}digital
          </h1>

          <p className="text-lg text-[#1A1A1A]/60 leading-relaxed mb-10 max-w-lg">
            Soy Evangelina, creadora UGC y estratega digital. Ayudo a marcas y
            emprendedores a delegar su presencia online con contenido, estrategia
            y desarrollo web.
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
              Trabajemos juntos
            </a>
          </div>

        </div>

        {/* Columna derecha — video */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-br from-[#822B5B]/25 to-[#3FBDBC]/32 -z-10 blur-sm" />

          <div className="relative w-full max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl shadow-[#1A1A1A]/15 bg-[#1A1A1A] aspect-[9/16] lg:aspect-[3/4]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              disableRemotePlayback
            >
              <source src="https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Home.mp4" type="video/mp4" />
            </video>

            {/* Overlay gradient bottom */}
            <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-[#1A1A1A]/70 to-transparent pointer-events-none" />

            {/* Botón mute/unmute */}
            <button
              onClick={() => {
                if (!videoRef.current) return;
                videoRef.current.muted = !videoRef.current.muted;
                const icon = document.getElementById("mute-icon");
                if (icon) icon.textContent = videoRef.current.muted ? "🔇" : "🔊";
              }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
            >
              <span id="mute-icon" className="text-sm">🔇</span>
            </button>

            {/* Label en el video */}
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                Evangelina — UGC & Estrategia
              </p>
            </div>
          </div>

          {/* Badge flotante */}
          <div className="absolute -top-5 -left-4 lg:top-8 lg:-left-8 bg-white rounded-2xl shadow-xl shadow-[#1A1A1A]/10 px-4 py-3 flex items-center gap-3 border border-[#1A1A1A]/5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#822B5B]/30 to-[#3FBDBC]/20 flex items-center justify-center text-base">
              ✨
            </div>
            <div>
              <p className="text-xs font-bold text-[#1A1A1A]">UGC + Estrategia + Web</p>
              <p className="text-xs text-[#1A1A1A]/45">Todo en un solo lugar</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
