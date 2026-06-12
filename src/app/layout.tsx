import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Santiago Web Designer | Páginas Web para Negocios en Argentina",
  description:
    "Diseño páginas web modernas, rápidas y optimizadas para celular. Para restaurantes, barberías, gimnasios, tiendas y todo tipo de negocio. WhatsApp: 11 7823-6625",
  keywords: [
    "diseño web argentina",
    "páginas web negocios",
    "web para restaurantes",
    "diseñador web buenos aires",
  ],
  openGraph: {
    title: "Santiago Web Designer | Páginas Web Profesionales",
    description:
      "Tu negocio merece una presencia online profesional. Diseño web moderno, rápido y que vende.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${syne.variable} ${inter.variable} font-inter antialiased bg-[#030712]`}
      >
        {children}
      </body>
    </html>
  );
}
