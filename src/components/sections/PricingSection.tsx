"use client";
import { motion } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

const WA_LINK = "https://wa.me/5491178236625?text=Hola%20Santiago!%20Quiero%20una%20p%C3%A1gina%20web%20para%20mi%20negocio";

const plans = [
  {
    name: "Starter",
    emoji: "🌱",
    desc: "Para negocios que quieren dar el primer paso online.",
    price: "Consultá",
    features: [
      "Diseño personalizado",
      "Hasta 5 secciones",
      "Botón WhatsApp",
      "Formulario de contacto",
      "Optimizado para celular",
      "SEO básico",
    ],
    cta: "Consultar precio",
    popular: false,
  },
  {
    name: "Pro",
    emoji: "🚀",
    desc: "La opción más elegida. Todo lo que un negocio necesita.",
    price: "Consultá",
    features: [
      "Todo lo del Starter +",
      "Menú / catálogo digital",
      "Galería de imágenes",
      "Google Maps integrado",
      "SEO local avanzado",
      "Google Analytics",
      "Soporte 1 mes incluido",
    ],
    cta: "Elegir este plan",
    popular: true,
  },
  {
    name: "Full",
    emoji: "💎",
    desc: "Para negocios que quieren el máximo impacto.",
    price: "Consultá",
    features: [
      "Todo lo del Pro +",
      "Tienda online / eCommerce",
      "Integración pagos",
      "Blog / noticias",
      "Formularios avanzados",
      "Soporte 3 meses",
    ],
    cta: "Consultar precio",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="precios" className="relative bg-[#030712] py-28 px-4 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-inter text-xs font-semibold tracking-widest text-indigo-400 uppercase">Planes</span>
          <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-white mt-3 leading-tight">
            Inversión que{" "}
            <GradientText>se paga sola.</GradientText>
          </h2>
          <p className="font-inter mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            Una web profesional es el mejor vendedor que podés tener. Trabaja 24/7 sin descanso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? "bg-gradient-to-b from-indigo-600/25 to-violet-600/15 border-indigo-500/50 shadow-2xl shadow-indigo-500/15"
                  : "bg-slate-900/50 border-slate-800/60"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-1 font-inter text-xs font-semibold text-white shadow-lg">
                    ⭐ Más elegido
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="text-3xl mb-3">{plan.emoji}</div>
                <div className="font-syne font-bold text-2xl text-white">{plan.name}</div>
                <div className="font-inter text-sm text-slate-400 mt-1">{plan.desc}</div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-inter text-sm text-slate-300">
                    <Check className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <button className={`w-full rounded-2xl py-3.5 font-inter text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25"
                    : "border border-slate-700/60 bg-slate-800/50 text-white hover:border-slate-600/60"
                }`}>
                  <MessageCircle className="w-4 h-4" />
                  {plan.cta}
                </button>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center font-inter text-slate-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          💡 Los precios varían según el proyecto. Escribime y te doy un presupuesto personalizado sin cargo.
        </motion.p>
      </div>
    </section>
  );
}
