"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const websites = [
  {
    name: "Annapurna Outdoors",
    url: "https://www.annapurnaoutdoors.com/",
    image: "/annapurna.png",
  },
  {
    name: "Gian Serassio",
    url: "https://gianserassio.com/",
    image: "/gian-serassio.png",
  },
  {
    name: "Lic. Lucas Serassio",
    url: "https://www.liclucasserassio.com/",
    image: "/lic-lucas-serassio.png",
  },
];

const items = [
  {
    label: "UGC / Reels",
    tag: "",
    gradient: "from-[#822B5B]/30 to-[#3696A2]/10",
    border: "border-[#822B5B]/25",
    glow: "hover:shadow-[0_0_60px_#822B5B25]",
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
    label: "Contenido General",
    tag: "",
    gradient: "from-[#3FBDBC]/25 to-[#3FBDBC]/5",
    border: "border-[#3FBDBC]/25",
    glow: "hover:shadow-[0_0_60px_#3FBDBC20]",
    videos: [
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/contenido%20general/Campe%20bolsita%20%20(1).mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/contenido%20general/Curio%2020%25.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/contenido%20general/Flybondi%20.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/contenido%20general/copy_271D7DFE-475B-4758-8F92-088B4D4B194F.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/contenido%20general/copy_848C52B1-278C-4D46-B413-7096AE0FE9B2.mp4",
    ],
  },
  {
    label: "Agencia de Marketing",
    tag: "",
    gradient: "from-[#3696A2]/25 to-[#822B5B]/5",
    border: "border-[#3696A2]/25",
    glow: "hover:shadow-[0_0_60px_#3696A220]",
    videos: [
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/Securstyle.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/copy_837FF6F0-32FE-480C-AD04-EA0D43EBAC7F.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/copy_AA914B12-ACDC-4B82-9498-E550C1BA22DE.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/copy_B1AB9014-48F3-4CCD-BD86-78D45B9C15FA.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/copy_D7FF8A04-1E57-4A65-8A6C-81C6D1B21256.mp4",
      "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Agencia/Mil%C3%A1n%20gris%2020%25%20.mp4",
    ],
  },
];

function VideoModal({ item, onClose }: { item: typeof items[0]; onClose: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(false);

  // Close on backdrop click or Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Scroll active card into center
  useEffect(() => {
    const container = scrollRef.current;
    const card = container?.children[active] as HTMLElement | undefined;
    if (!card || !container) return;
    const offset = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
    container.scrollTo({ left: offset, behavior: "smooth" });
  }, [active]);

  // Pause all except active
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [active]);

  // Sync muted state across all videos
  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (v) v.muted = muted;
    });
  }, [muted]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-3xl px-6 mb-6">
        <div>

          <h3 className="text-xl font-black text-white">{item.label}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMuted((m) => !m)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label={muted ? "Activar audio" : "Silenciar"}
          >
            {muted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" fillOpacity="0.8"/>
                <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" fillOpacity="0.8"/>
                <path d="M15.54 8.46a5 5 0 010 7.07" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M19.07 4.93a10 10 0 010 14.14" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </button>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-[calc(50vw-120px)] w-full snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {item.videos.map((src, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`snap-center flex-shrink-0 cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden ${
              i === active
                ? "w-[240px] opacity-100 scale-100 ring-2 ring-[#822B5B]"
                : "w-[200px] opacity-50 scale-95"
            }`}
            style={{ aspectRatio: "9/16", height: "420px" }}
          >
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              src={src}
              loop
              muted={muted}
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {item.videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-200 ${
              i === active ? "w-5 h-2 bg-[#822B5B]" : "w-2 h-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [openItem, setOpenItem] = useState<typeof items[0] | null>(null);

  return (
    <section id="portfolio" className="relative py-28 px-6 overflow-hidden bg-[#FAF8F5]">
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-50" />

      {/* Blobs */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#822B5B]/16 blur-[100px]" />

      {/* Ghost text */}
      <div className="pointer-events-none absolute -bottom-4 left-0 right-0 overflow-hidden select-none">
        <span className="block text-[130px] sm:text-[200px] font-black text-[#1A1A1A]/[0.03] leading-none text-center whitespace-nowrap">
          PORTFOLIO
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
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
            Una selección de mis mejores proyectos y colaboraciones con marcas.
          </p>
        </div>

        {/* Titulo Contenido para redes */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[#1A1A1A]/10" />
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#822B5B]">
            <span className="w-4 h-px bg-[#822B5B]" />
            Contenido para redes
            <span className="w-4 h-px bg-[#822B5B]" />
          </span>
          <div className="flex-1 h-px bg-[#1A1A1A]/10" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              onClick={() => item.videos.length > 0 && setOpenItem(item)}
              className={`relative rounded-2xl overflow-hidden border ${item.border} transition-all duration-300 ${item.glow} ${item.videos.length > 0 ? "cursor-pointer" : "cursor-default"}`}
              style={{ height: "260px" }}
            >
              {/* Video de portada */}
              {item.videos.length > 0 && (
                <video
                  src={item.videos[0]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {/* Fallback gradient si no hay video */}
              {item.videos.length === 0 && (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              )}
              {/* Overlay oscuro para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="w-8 h-0.5 bg-white/60 mb-2" />
                <p className="font-bold text-white text-base">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA debajo de las cards */}
        <div className="flex flex-col items-center gap-2 mt-8">
          <div className="flex items-center gap-2">
            <span className="text-[#822B5B] font-black text-lg">↑</span>
            <p className="text-[#822B5B] font-bold text-sm tracking-wide">Tocá una categoría para ver los trabajos</p>
            <span className="text-[#822B5B] font-black text-lg">↑</span>
          </div>
        </div>

        {/* Divisor */}
        <div className="flex items-center gap-4 mt-20 mb-14">
          <div className="flex-1 h-px bg-[#1A1A1A]/10" />
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#822B5B]">
            <span className="w-4 h-px bg-[#822B5B]" />
            Desarrollo web
            <span className="w-4 h-px bg-[#822B5B]" />
          </span>
          <div className="flex-1 h-px bg-[#1A1A1A]/10" />
        </div>

        {/* Web cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {websites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden border border-[#1A1A1A]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
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
                <p className="text-xs text-[#1A1A1A]/40 mt-0.5 truncate">{site.url.replace(/https?:\/\/(www\.)?/, "")}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openItem && <VideoModal item={openItem} onClose={() => setOpenItem(null)} />}
    </section>
  );
}
