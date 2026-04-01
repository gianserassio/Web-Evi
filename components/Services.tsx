const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14"/>
        <rect x="2" y="7" width="13" height="10" rx="2"/>
      </svg>
    ),
    title: "Contenido & UGC",
    items: ["Creación de contenido", "Videos para redes / ads"],
    glow: "group-hover:shadow-[0_0_40px_#822B5B30]",
    accent: "bg-[#822B5B]/20 text-[#822B5B]",
    border: "group-hover:border-[#822B5B]/40",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: "Gestión de redes",
    items: ["Planificación", "Publicación"],
    glow: "group-hover:shadow-[0_0_40px_#3FBDBC30]",
    accent: "bg-[#3FBDBC]/20 text-[#3FBDBC]",
    border: "group-hover:border-[#3FBDBC]/40",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: "Estrategia digital",
    items: ["Análisis", "Crecimiento"],
    glow: "group-hover:shadow-[0_0_40px_#3696A230]",
    accent: "bg-[#3696A2]/20 text-[#3696A2]",
    border: "group-hover:border-[#3696A2]/40",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="14" rx="2"/>
        <line x1="8" y1="22" x2="16" y2="22"/>
        <line x1="12" y1="18" x2="12" y2="22"/>
      </svg>
    ),
    title: "Desarrollo web",
    items: ["Landing pages", "Webs funcionales"],
    glow: "group-hover:shadow-[0_0_40px_#822B5B30]",
    accent: "bg-[#822B5B]/20 text-[#822B5B]",
    border: "group-hover:border-[#822B5B]/40",
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
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl p-7 border border-white/14 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${service.glow} ${service.border}`}
            >
              <div className={`w-11 h-11 rounded-xl ${service.accent} flex items-center justify-center mb-5`}>
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-3">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-white/45 flex items-start gap-2"
                  >
                    <span className="text-[#822B5B]/60 mt-0.5 text-xs">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
