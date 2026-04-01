"use client";

import { useState } from "react";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/XXXXXXXX", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="cta" className="grain relative py-28 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#172020] via-[#1A1A20] to-[#221418]" />

      {/* Color blobs */}
      <div className="mesh-blob pointer-events-none absolute -top-20 -left-20 w-[500px] h-[400px] rounded-full bg-[#822B5B]/32 blur-[130px]" />
      <div className="mesh-blob-alt pointer-events-none absolute -bottom-20 -right-20 w-[450px] h-[400px] rounded-full bg-[#3FBDBC]/32 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#3696A2]/32 blur-[100px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ghost text */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden select-none text-center">
        <span className="inline-block text-[100px] sm:text-[160px] font-black text-white/[0.03] leading-none whitespace-nowrap">
          HABLEMOS
        </span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#822B5B] mb-6">
          <span className="w-4 h-px bg-[#822B5B]" />
          Contacto
          <span className="w-4 h-px bg-[#822B5B]" />
        </span>

        <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] mb-4">
          ¿Querés delegar tu{" "}
          <span className="text-[#822B5B]">presencia digital?</span>
        </h2>
        <p className="text-white/50 text-xl mb-10 font-light">Hablemos.</p>

        {/* Botones redes */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="http://wa.me/5493585040171"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-bold text-base hover:border-[#3FBDBC] hover:text-[#3FBDBC] hover:bg-[#3FBDBC]/5 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/evii.rost/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-bold text-base hover:border-[#3FBDBC] hover:text-[#3FBDBC] hover:bg-[#3FBDBC]/5 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </a>
        </div>

        {/* Divisor */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-sm">o dejame un mensaje</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Formulario */}
        {status === "ok" ? (
          <div className="rounded-2xl border border-[#3FBDBC]/30 bg-[#3FBDBC]/10 p-8 text-center">
            <p className="text-[#3FBDBC] font-bold text-lg">¡Mensaje enviado!</p>
            <p className="text-white/50 text-sm mt-1">Te respondo a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                required
                className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#822B5B]/60 transition-colors"
              />
              <input
                name="email"
                type="email"
                placeholder="Tu email"
                required
                className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#822B5B]/60 transition-colors"
              />
            </div>
            <textarea
              name="mensaje"
              placeholder="¿En qué te puedo ayudar?"
              required
              rows={4}
              className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#822B5B]/60 transition-colors resize-none"
            />
            {status === "error" && (
              <p className="text-red-400 text-sm">Algo salió mal. Intentá de nuevo.</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="self-center px-10 py-4 rounded-2xl bg-[#822B5B] text-white font-bold text-base hover:bg-[#9e3570] transition-all duration-200 shadow-lg shadow-[#822B5B]/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
