"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

/* ----------------------------- Data ----------------------------- */

const cmSubcats = [
  {
    label: "Diseño de carruseles",
    desc: "Piezas de carrusel pensadas para informar y enganchar.",
    color: "#822B5B",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="4" width="10" height="16" rx="2" />
        <path d="M4 7v10M20 7v10" />
      </svg>
    ),
  },
  {
    label: "Reels",
    desc: "Videos cortos para crecer y mantener la cuenta activa.",
    color: "#3FBDBC",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 9h18M9 4l2 5M15 4l2 5" />
        <path d="m11 13 4 2.5-4 2.5z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Estadísticas",
    desc: "Resultados y crecimiento medibles de las cuentas.",
    color: "#3696A2",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <rect x="7" y="11" width="3" height="6" />
        <rect x="12" y="7" width="3" height="10" />
        <rect x="17" y="13" width="3" height="4" />
      </svg>
    ),
  },
];

/**
 * Carruseles de Community Manager. Cada objeto = un post de carrusel,
 * con sus slides en orden. Pegá acá las URLs de R2 (proporción 4:5).
 *
 * Ejemplo:
 * { title: "Tips de marca", slides: [
 *     "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/carruseles/c1-1.jpg",
 *     "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/carruseles/c1-2.jpg",
 * ] },
 */
const R2 = "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev";

/** Reels de Community Manager (videos verticales convertidos a MP4). */
const reels: string[] = ["/reels/cafttur.mp4"];

const carousels: { title: string; slides: string[] }[] = [
  {
    title: "Perfil de psicóloga",
    slides: Array.from(
      { length: 8 },
      (_, n) => `${R2}/Carruseles/Carrusel%201/Carrusel_1%20-%20(${n + 1}).png`
    ),
  },
  {
    title: "Annapurna Outdoors",
    slides: Array.from(
      { length: 5 },
      (_, n) => `${R2}/Carruseles/Carrusel%202/Carrusel_2%20-%20(${n + 1}).mp4`
    ),
  },
  {
    title: "CAFTTUR — Cámara de Transporte Turístico",
    slides: Array.from(
      { length: 6 },
      (_, n) => `${R2}/Carruseles/Carrusel%203/Carrusel_3%20-%20(${n + 1}).jpg`
    ),
  },
];

const contentGroups = [
  {
    label: "UGC",
    color: "#822B5B",
    videos: [
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/ugc/Mochi%203.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/ugc/copy_D7B95BF4-F0A1-41B2-B8CA-BE569207FD45.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/ugc/4e93efdd352b46c8b91f1680fbbc6b49.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/ugc/Cuello%20rellenable%20DEVIAJE%20.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/ugc/copy_DCC1BAE9-B406-4F88-BE51-56B6D35D34C8.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/ugc/9x16%20-%20organizador1.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/ugc/Loreal.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/ugc/Mochila%20viral%20-%20aeropuerto.mp4",
    ],
  },
  {
    label: "Contenido para marcas",
    color: "#3FBDBC",
    videos: [
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/contenido%20general/Campe%20bolsita%20%20(1).mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/contenido%20general/Curio%2020%25.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/contenido%20general/Flybondi%20.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/contenido%20general/copy_271D7DFE-475B-4758-8F92-088B4D4B194F.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/contenido%20general/copy_848C52B1-278C-4D46-B413-7096AE0FE9B2.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/Securstyle.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/copy_837FF6F0-32FE-480C-AD04-EA0D43EBAC7F.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/copy_AA914B12-ACDC-4B82-9498-E550C1BA22DE.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/copy_B1AB9014-48F3-4CCD-BD86-78D45B9C15FA.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/copy_D7FF8A04-1E57-4A65-8A6C-81C6D1B21256.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/Mil%C3%A1n%20gris%2020%25%20.mp4",
    ],
  },
];

const websites = [
  { name: "Annapurna Outdoors", url: "https://www.annapurnaoutdoors.com/", image: "/annapurna.png" },
  { name: "Gian Serassio", url: "https://gianserassio.com/", image: "/gian-serassio.png" },
  { name: "Lic. Lucas Serassio", url: "https://www.liclucasserassio.com/", image: "/lic-lucas-serassio.png" },
  { name: "Como Inés", url: "https://comoines.com/", image: "/como-ines.png" },
];

/* --------------------------- Componentes -------------------------- */

function SoundIcon({ on }: { on: boolean }) {
  return on ? (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" fillOpacity="0.9" />
      <path d="M15.54 8.46a5 5 0 010 7.07" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19.07 4.93a10 10 0 010 14.14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ) : (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" fillOpacity="0.9" />
      <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Tile de video: se reproduce solo cuando está en pantalla, se pausa al salir. */
function VideoTile({
  src,
  sound,
  onToggleSound,
}: {
  src: string;
  sound: boolean;
  onToggleSound: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (ref.current) ref.current.muted = !sound;
  }, [sound]);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black aspect-[9/16] shadow-sm ring-1 ring-[#1A1A1A]/5 hover:ring-[#822B5B]/30 hover:shadow-xl transition-all duration-300">
      <video
        ref={ref}
        src={src}
        loop
        muted
        playsInline
        preload="metadata"
        disableRemotePlayback
        className="w-full h-full object-cover"
      />
      <button
        onClick={onToggleSound}
        aria-label={sound ? "Silenciar" : "Activar sonido"}
        className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/45 backdrop-blur-sm flex items-center justify-center hover:bg-black/65 transition-colors"
      >
        <SoundIcon on={sound} />
      </button>
    </div>
  );
}

/** Grilla de videos con control de sonido único (solo uno suena a la vez). */
function VideoGrid({ videos }: { videos: string[] }) {
  const [soundIdx, setSoundIdx] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((src, i) => (
        <VideoTile
          key={src}
          src={src}
          sound={soundIdx === i}
          onToggleSound={() => setSoundIdx((cur) => (cur === i ? null : i))}
        />
      ))}
    </div>
  );
}

const isVideo = (src: string) => /\.(mp4|webm|mov)(\?|$)/i.test(src);

/** Slider de un carrusel (imágenes o videos 4:5), navegable ahí mismo. */
function CarouselTile({ title, slides }: { title: string; slides: string[] }) {
  const [i, setI] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const go = (d: number) => setI((p) => (p + d + slides.length) % slides.length);

  // Reproducir solo el slide de video activo
  useEffect(() => {
    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      if (idx === i) v.play().catch(() => {});
      else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [i]);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black aspect-[4/5] shadow-sm ring-1 ring-[#1A1A1A]/5 hover:ring-[#822B5B]/30 hover:shadow-xl transition-all duration-300">
      {slides.map((src, idx) =>
        isVideo(src) ? (
          <video
            key={idx}
            ref={(el) => {
              videoRefs.current[idx] = el;
            }}
            src={src}
            loop
            muted
            playsInline
            preload="metadata"
            disableRemotePlayback
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={idx}
            src={src}
            alt={`${title} — slide ${idx + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        )
      )}

      {/* Overlay título */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 pointer-events-none">
        <p className="text-white text-sm font-bold">{title}</p>
      </div>

      {slides.length > 1 && (
        <>
          {/* Contador */}
          <div className="absolute top-3 right-3 rounded-full bg-black/45 backdrop-blur-sm px-2.5 py-1 text-white text-[11px] font-bold tabular-nums">
            {i + 1}/{slides.length}
          </div>

          {/* Flechas */}
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-black/65 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-black/65 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-4 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/** Encabezado de subgrupo (punto de color + título + contador opcional). */
function GroupHeader({
  label,
  color,
  count,
}: {
  label: string;
  color: string;
  count?: number;
}) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
      <h4 className="font-bold text-[#1A1A1A] text-lg">{label}</h4>
      {count != null && (
        <span className="text-[#1A1A1A]/35 text-sm font-semibold">{count}</span>
      )}
    </div>
  );
}

/** Estado vacío para subcategorías sin contenido todavía. */
function ComingSoon({ color }: { color: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#1A1A1A]/15 bg-white/50 py-12 text-center">
      <span
        className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
        style={{ backgroundColor: color + "14", color }}
      >
        Próximamente
      </span>
    </div>
  );
}

function CategoryHeader({
  number,
  title,
  desc,
  color,
}: {
  number: string;
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="reveal mb-9">
      <div className="flex items-center gap-4">
        <span
          className="text-4xl sm:text-5xl font-black leading-none"
          style={{ color }}
        >
          {number}
        </span>
        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] leading-tight">
            {title}
          </h3>
          <p className="mt-1 text-sm text-[#1A1A1A]/50">{desc}</p>
        </div>
      </div>
      <div
        className="mt-5 h-[3px] w-full rounded-full"
        style={{ background: `linear-gradient(to right, ${color}, ${color}00)` }}
      />
    </div>
  );
}

/* ------------------------------ Página ----------------------------- */

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 px-6 overflow-hidden bg-[#FAF8F5]">
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-50" />

      {/* Blob */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#822B5B]/16 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Encabezado general */}
        <div className="reveal text-center mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#822B5B] mb-4">
            <span className="w-4 h-px bg-[#822B5B]" />
            Portfolio
            <span className="w-4 h-px bg-[#822B5B]" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">
            Trabajo real,{" "}
            <span className="text-[#822B5B]">resultados reales</span>
          </h2>
          <p className="mt-4 text-[#1A1A1A]/55 max-w-xl mx-auto">
            Mi trabajo dividido en las tres áreas en las que ayudo a las marcas.
          </p>
        </div>

        {/* ====================== 1. COMMUNITY MANAGER ====================== */}
        <div
          id="community-manager"
          className="mb-10 rounded-[28px] border p-7 sm:p-10 scroll-mt-28"
          style={{ borderColor: "#822B5B22", background: "#822B5B08" }}
        >
          <CategoryHeader
            number="01"
            title="Community Manager"
            desc="Gestiono tus redes de punta a punta: contenido, diseño y resultados."
            color="#822B5B"
          />
          <div className="space-y-12">
            {cmSubcats.map((sub) => {
              const hasCarousels =
                sub.label === "Diseño de carruseles" && carousels.length > 0;
              const hasReels = sub.label === "Reels" && reels.length > 0;
              const count = hasCarousels
                ? carousels.length
                : hasReels
                ? reels.length
                : undefined;
              return (
                <div key={sub.label} className="reveal">
                  <GroupHeader label={sub.label} color={sub.color} count={count} />
                  {hasCarousels ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {carousels.map((c) => (
                        <CarouselTile key={c.title} title={c.title} slides={c.slides} />
                      ))}
                    </div>
                  ) : hasReels ? (
                    <VideoGrid videos={reels} />
                  ) : (
                    <ComingSoon color={sub.color} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================== 2. CREADORA DE CONTENIDO ==================== */}
        <div
          id="creadora-contenido"
          className="mb-10 rounded-[28px] border p-7 sm:p-10 scroll-mt-28"
          style={{ borderColor: "#3FBDBC2E", background: "#3FBDBC0D" }}
        >
          <CategoryHeader
            number="02"
            title="Creadora de contenido"
            desc="Videos y piezas creadas para distintas marcas y campañas."
            color="#3FBDBC"
          />
          <div className="space-y-12">
            {contentGroups.map((group) => (
              <div key={group.label} className="reveal">
                <div className="flex items-center gap-2.5 mb-5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: group.color }}
                  />
                  <h4 className="font-bold text-[#1A1A1A] text-lg">{group.label}</h4>
                  <span className="text-[#1A1A1A]/35 text-sm font-semibold">
                    {group.videos.length}
                  </span>
                </div>
                <VideoGrid videos={group.videos} />
              </div>
            ))}
          </div>
        </div>

        {/* ==================== 3. DISEÑO Y DESARROLLO WEB =================== */}
        <div
          id="desarrollo-web"
          className="rounded-[28px] border p-7 sm:p-10 scroll-mt-28"
          style={{ borderColor: "#3696A22E", background: "#3696A20D" }}
        >
          <CategoryHeader
            number="03"
            title="Diseño y desarrollo web"
            desc="Sitios y landing pages a medida, online y funcionando."
            color="#3696A2"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {websites.map((site, i) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-d${i + 1} group relative rounded-2xl overflow-hidden border border-[#1A1A1A]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={site.image}
                    alt={site.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#822B5B]/0 group-hover:bg-[#822B5B]/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#822B5B] font-bold text-sm px-4 py-2 rounded-full shadow-lg">
                      Ver sitio →
                    </span>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white border-t border-[#1A1A1A]/6">
                  <p className="font-bold text-[#1A1A1A] text-sm">{site.name}</p>
                  <p className="text-xs text-[#1A1A1A]/40 mt-0.5 truncate">
                    {site.url.replace(/https?:\/\/(www\.)?/, "")}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
