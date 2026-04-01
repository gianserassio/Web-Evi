const steps = [
  {
    number: "01",
    title: "Entendimiento",
    description: "Analizo tu marca, audiencia y objetivos para entender desde dónde partimos.",
    color: "#822B5B",
  },
  {
    number: "02",
    title: "Estrategia",
    description: "Defino un plan de acción claro y alineado con tus metas de crecimiento.",
    color: "#3FBDBC",
  },
  {
    number: "03",
    title: "Ejecución",
    description: "Creo, gestiono y desarrollo todo lo necesario para implementar la estrategia.",
    color: "#3696A2",
  },
  {
    number: "04",
    title: "Optimización",
    description: "Analizo resultados y ajusto lo que sea necesario para seguir mejorando.",
    color: "#822B5B",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="grain relative py-28 px-6 overflow-hidden bg-[#1C1C1C]">
      {/* Blobs */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#822B5B]/14 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#3FBDBC]/16 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-20">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              {/* Giant ghost number */}
              <div
                className="absolute -top-4 -left-2 text-[96px] font-black leading-none select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-[0.06]"
                style={{ color: step.color }}
              >
                {step.number}
              </div>

              <div className="relative z-10 pt-10">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 text-xs font-black"
                  style={{ backgroundColor: step.color + "20", color: step.color }}
                >
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
