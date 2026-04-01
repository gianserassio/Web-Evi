export default function About() {
  return (
    <section id="sobre-mi" className="relative py-28 px-6 overflow-hidden bg-[#FAF8F5]">
      {/* Blobs orgánicos */}
      <div className="mesh-blob pointer-events-none absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#822B5B]/24 blur-[90px]" />
      <div className="mesh-blob-alt pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#3FBDBC]/16 blur-[80px]" />

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-40" />

      {/* Ghost text */}
      <div className="pointer-events-none absolute bottom-0 right-0 overflow-hidden select-none">
        <span className="block text-[120px] sm:text-[180px] font-black text-[#1A1A1A]/[0.025] leading-none whitespace-nowrap">
          SOBRE MÍ
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Imagen / placeholder */}
          <div className="relative max-w-sm mx-auto lg:mx-0 w-full">
            {/* Marco decorativo detrás */}
            <div className="absolute -top-5 -left-5 w-full h-full rounded-3xl border-2 border-[#822B5B]/30" />
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl bg-gradient-to-br from-[#3FBDBC]/15 to-[#822B5B]/10" />

            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border border-white/60 shadow-2xl shadow-[#1A1A1A]/10">
              <img
                src="https://res.cloudinary.com/dnin04lmm/image/upload/q_auto,f_auto/v1774917439/IMG_3251_enrz2l.webp"
                alt="Evangelina"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#822B5B]/20 to-transparent" />
            </div>
          </div>

          {/* Texto */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#822B5B] mb-4">
              <span className="w-4 h-px bg-[#822B5B]" />
              Sobre mí
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-6 leading-tight">
              Hola, soy <span className="text-[#822B5B]">Evangelina</span>
            </h2>
            <div className="space-y-4 text-[#1A1A1A]/65 leading-relaxed">
              <p>
                Trabajo ayudando a marcas y emprendedores a crecer en el mundo digital de forma estratégica.
              </p>
              <p>
                Mi enfoque no es solo crear contenido, sino entender qué necesita cada marca y cómo comunicarlo para generar resultados reales.
              </p>
              <p>
                Trabajo combinando creatividad con estrategia, integrando contenido, gestión y ahora sumamos desarrollo web para construir una presencia digital completa y coherente.
              </p>
              <p>
                Me gusta involucrarme en cada proyecto y adaptarme a lo que cada marca necesita, buscando siempre que todo lo que se haga tenga un propósito.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["UGC", "Estrategia", "Desarrollo web", "Redes sociales"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white text-sm font-semibold text-[#1A1A1A] border border-[#1A1A1A]/10 shadow-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
