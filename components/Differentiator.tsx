const pillars = [
  {
    label: "Todo integrado",
    desc: "Un solo interlocutor para contenido, redes y web. Ahorrás tiempo, dinero y la coordinación de varios freelancers.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" />
      </svg>
    ),
    color: "#822B5B",
    bg: "bg-[#822B5B]/10",
    border: "border-[#822B5B]/25",
    glow: "hover:shadow-[0_0_50px_#822B5B20]",
  },
  {
    label: "Coherencia total",
    desc: "Tu marca comunica igual en todos lados: misma identidad, mismo mensaje, de las redes a tu sitio web.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 12 2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    color: "#3FBDBC",
    bg: "bg-[#3FBDBC]/10",
    border: "border-[#3FBDBC]/25",
    glow: "hover:shadow-[0_0_50px_#3FBDBC20]",
  },
  {
    label: "Visión estratégica",
    desc: "Cada pieza tiene un objetivo. No es contenido por contenido: todo apunta a que tu marca crezca.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    ),
    color: "#3696A2",
    bg: "bg-[#3696A2]/10",
    border: "border-[#3696A2]/25",
    glow: "hover:shadow-[0_0_50px_#3696A220]",
  },
];

export default function Differentiator() {
  return (
    <section id="diferencial" className="grain relative py-28 px-6 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#1E1E22] to-[#161618]" />
      <div className="mesh-blob pointer-events-none absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full bg-[#822B5B]/32 blur-[140px]" />
      <div className="mesh-blob-alt pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#3FBDBC]/32 blur-[120px]" />

      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ghost text */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden select-none text-center">
        <span className="inline-block text-[100px] sm:text-[160px] font-black text-white/[0.025] leading-none whitespace-nowrap">
          DIFERENCIAL
        </span>
      </div>

      <div className="reveal relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#822B5B] mb-6">
          <span className="w-4 h-px bg-[#822B5B]" />
          Por qué elegirme
          <span className="w-4 h-px bg-[#822B5B]" />
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.05] mb-6">
          No soy solo creadora ni solo estratega.
          <br />
          <span className="text-[#822B5B]">
            Trabajo como un área digital completa.
          </span>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Integro contenido, estrategia y desarrollo web en un solo servicio
          para que vos te enfoques en tu negocio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {pillars.map((item) => (
            <div
              key={item.label}
              className={`group rounded-2xl border ${item.border} ${item.bg} p-8 text-left backdrop-blur-sm transition-all duration-300 ${item.glow} hover:-translate-y-1`}
            >
              <div
                className="w-13 h-13 mb-5 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: item.color + "26", color: item.color, width: "3.25rem", height: "3.25rem" }}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3">{item.label}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
