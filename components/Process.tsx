const steps = [
  {
    number: "01",
    title: "Entendimiento",
    description: "Analizo tu marca, audiencia y objetivos para entender desde dónde partimos.",
    color: "#822B5B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Estrategia",
    description: "Defino un plan de acción claro y alineado con tus metas de crecimiento.",
    color: "#3FBDBC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ejecución",
    description: "Creo, gestiono y desarrollo todo lo necesario para implementar la estrategia.",
    color: "#3696A2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Optimización",
    description: "Analizo resultados y ajusto lo que sea necesario para seguir mejorando.",
    color: "#822B5B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 3 3 5-6" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="proceso" className="grain relative py-28 px-6 overflow-hidden bg-[#1C1C1C]">
      {/* Blobs */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#822B5B]/14 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#3FBDBC]/16 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="reveal text-center mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#822B5B] mb-4">
            <span className="w-4 h-px bg-[#822B5B]" />
            Cómo trabajo
            <span className="w-4 h-px bg-[#822B5B]" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Un proceso claro de{" "}
            <span className="text-[#822B5B]">principio a fin</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block pointer-events-none absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#822B5B]/40 via-[#3FBDBC]/40 to-[#822B5B]/40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-d${i + 1} group relative flex flex-col items-center text-center lg:items-start lg:text-left`}
              >
                {/* Node */}
                <div className="relative mb-6 flex w-full items-center justify-center lg:justify-start">
                  <div
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border bg-[#1C1C1C] transition-all duration-300 group-hover:scale-105"
                    style={{
                      borderColor: step.color + "55",
                      color: step.color,
                      boxShadow: `0 0 0 0 ${step.color}00`,
                    }}
                  >
                    {/* glow */}
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                      style={{ background: step.color }}
                    />
                    <span className="relative">{step.icon}</span>

                    {/* number badge */}
                    <span
                      className="absolute -top-2.5 -right-2.5 z-20 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-black text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed max-w-[16rem]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
