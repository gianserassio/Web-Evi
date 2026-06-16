const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
      </svg>
    ),
    number: "01",
    title: "Community Manager",
    desc: "Gestiono y hago crecer tu presencia en redes con una estrategia pensada para tu marca.",
    items: [
      "Estrategia en redes sociales",
      "Carruseles",
      "Reels",
      "Estadísticas",
    ],
    color: "#822B5B",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="m10 9.5 4.5 2.5L10 14.5z" fill="currentColor" stroke="none" />
      </svg>
    ),
    number: "02",
    title: "Creadora de contenido",
    desc: "Creo videos auténticos, pensados para tu marca y tu audiencia, que generan confianza y mueven a la acción.",
    items: ["UGC", "Contenido para marcas"],
    note: "UGC = contenido generado por usuarios: videos auténticos, tipo recomendación real, que generan más confianza que un anuncio tradicional.",
    color: "#3FBDBC",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2.5" />
        <path d="M2 8.5h20" />
        <path d="m9 12.5 2 2-2 2M15 12.5l-2 2 2 2" />
      </svg>
    ),
    number: "03",
    title: "Diseño y desarrollo web",
    desc: "Diseño y desarrollo sitios y landing pages rápidos y a medida, pensados para convertir visitas en clientes reales.",
    items: ["Landing pages", "Webs funcionales", "Diseño a medida"],
    color: "#3696A2",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="grain relative py-28 px-6 overflow-hidden bg-[#1E1E1E]">
      {/* Background blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#822B5B]/16 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#3FBDBC]/16 blur-[100px]" />

      {/* Ghost text */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden select-none">
        <span className="block text-[120px] sm:text-[180px] font-black text-white/[0.025] leading-none text-center whitespace-nowrap">
          SERVICIOS
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#822B5B] mb-4">
            <span className="w-4 h-px bg-[#822B5B]" />
            Servicios
            <span className="w-4 h-px bg-[#822B5B]" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Todo lo que necesitás para crecer,{" "}
            <span className="text-[#822B5B]">en un solo lugar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-d${i + 1} group relative flex flex-col rounded-2xl p-8 border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.06] overflow-hidden`}
            >
              {/* Glow on hover */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ background: service.color }}
              />
              {/* Top border accent on hover */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                style={{ background: `linear-gradient(to right, ${service.color}, transparent)` }}
              />

              {/* Number */}
              <span className="absolute top-7 right-7 text-sm font-black text-white/15 group-hover:text-white/25 transition-colors">
                {service.number}
              </span>

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: service.color + "26", color: service.color }}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="mt-auto pt-5 border-t border-white/8">
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-white/65 flex items-center gap-2.5"
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: service.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {service.note && (
                  <p
                    className="mt-4 text-[11px] leading-relaxed text-white/40 rounded-lg px-3 py-2.5"
                    style={{ backgroundColor: service.color + "12" }}
                  >
                    {service.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
