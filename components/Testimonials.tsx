const testimonials = [
  {
    name: "Cliente 1",
    role: "Emprendedora",
    text: "Gracias a Evangelina pude delegar toda mi presencia online. El contenido que crea refleja exactamente la identidad de mi marca.",
    color: "border-[#822B5B]/20",
    star: "text-[#822B5B]",
  },
  {
    name: "Cliente 2",
    role: "Dueña de tienda online",
    text: "La estrategia que diseñó para mis redes triplicó el engagement en dos meses. Muy recomendable.",
    color: "border-[#3FBDBC]/20",
    star: "text-[#3FBDBC]",
  },
  {
    name: "Cliente 3",
    role: "Fundadora de startup",
    text: "El desarrollo de mi landing page fue rápido, profesional y convierte muy bien. Volvería a trabajar con ella sin dudas.",
    color: "border-[#3696A2]/20",
    star: "text-[#3696A2]",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-28 px-6 overflow-hidden bg-[#FAF8F5]">
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-50" />

      {/* Blobs */}
      <div className="pointer-events-none absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-[#822B5B]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#3FBDBC]/8 blur-[80px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#822B5B] mb-4">
            <span className="w-4 h-px bg-[#822B5B]" />
            Testimonios
            <span className="w-4 h-px bg-[#822B5B]" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">
            Lo que dicen mis{" "}
            <span className="text-[#822B5B]">clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 bg-white border ${t.color} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${i === 1 ? "sm:mt-6" : ""}`}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-5xl font-black text-[#1A1A1A]/5 select-none leading-none">
                &ldquo;
              </div>

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className={`${t.star} text-sm`}>★</span>
                ))}
              </div>
              <p className="text-[#1A1A1A]/65 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#1A1A1A]/6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#822B5B]/30 to-[#3FBDBC]/20" />
                <div>
                  <p className="font-bold text-[#1A1A1A] text-sm">{t.name}</p>
                  <p className="text-[#1A1A1A]/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
