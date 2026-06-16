"use client";

import { useEffect } from "react";

/**
 * Observa todos los elementos con la clase `.reveal` y les agrega
 * `.in-view` cuando entran en pantalla. Funciona también con contenido
 * que se monta después (modales, etc.) gracias al MutationObserver.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in-view)")
        .forEach((el) => io.observe(el));
    };

    observeAll();

    // Re-observa si se agregan nodos nuevos al DOM.
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
