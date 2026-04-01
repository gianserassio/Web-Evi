const pillars = [
  {
    label: "Contenido",
    desc: "UGC auténtico y creativo que conecta con tu audiencia.",
    color: "#822B5B",
    bg: "bg-[#822B5B]/10",
    border: "border-[#822B5B]/25",
    glow: "hover:shadow-[0_0_50px_#822B5B20]",
  },
  {
    label: "Estrategia",
    desc: "Planes de acción medibles orientados a resultados reales.",
    color: "#3FBDBC",
    bg: "bg-[#3FBDBC]/10",
    border: "border-[#3FBDBC]/25",
    glow: "hover:shadow-[0_0_50px_#3FBDBC20]",
  },
  {
    label: "Desarrollo web",
    desc: "Sitios y landing pages que convierten visitas en clientes.",
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

      <div className="relative z-10 max-w-4xl mx-auto text-center">
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
              className={`group rounded-2xl border ${item.border} ${item.bg} p-8 backdrop-blur-sm transition-all duration-300 ${item.glow} hover:-translate-y-1`}
            >
              <div
                className="text-3xl font-black mb-4 transition-transform duration-300 group-hover:scale-110 block"
                style={{ color: item.color }}
              >
                ✦
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
