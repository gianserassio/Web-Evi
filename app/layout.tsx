import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evangelina | Contenido & Estrategia Digital",
  description:
    "Creadora UGC y estratega digital. Ayudo a marcas y emprendedores a crecer en digital con contenido, estrategia y desarrollo web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
