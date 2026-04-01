const stats = [
  {
    value: "+200",
    label: "Videos creados",
    accent: "text-[#822B5B]",
  },
  {
    value: "~40",
    label: "Marcas trabajadas",
    accent: "text-[#3FBDBC]",
  },
  {
    value: "2",
    label: "Años de experiencia",
    accent: "text-[#3696A2]",
  },
];

export default function Stats() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#FAF8F5]">
      {/* Blobs */}
      <div className="pointer-events-none absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-[#822B5B]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#3FBDBC]/8 blur-[80px]" />

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#822B5B] mb-4">
            <span className="w-4 h-px bg-[#822B5B]" />
            En números
            <span className="w-4 h-px bg-[#822B5B]" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">
            Resultados que{" "}
            <span className="text-[#822B5B]">hablan solos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative rounded-2xl p-8 border border-[#1A1A1A]/8 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <p className={`text-5xl font-black mb-2 ${stat.accent}`}>
                {stat.value}
              </p>
              <p className="text-sm font-bold text-[#1A1A1A]">{stat.label}</p>
              {stat.sub && (
                <p className="text-xs text-[#1A1A1A]/40 mt-1">{stat.sub}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
