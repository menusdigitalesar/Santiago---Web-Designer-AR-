"use client";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";

const testimonials = [
  { name: "Martina G.", role: "Dueña de cafetería · Palermo", emoji: "☕", text: "En 3 días tenía la web lista. Mis clientes nos encuentran en Google y piden por WhatsApp. Las ventas subieron 30% el primer mes.", stars: 5, tag: "Cafetería" },
  { name: "Carlos R.", role: "Barbero independiente · Villa Crespo", emoji: "✂️", text: "Antes tenía solo Instagram. Ahora tengo una web con mis precios, galería de cortes y botón de turno. Mis clientes dicen que parece una barbería premium.", stars: 5, tag: "Barbería" },
  { name: "Laura M.", role: "Dueña de gimnasio · Flores", emoji: "💪", text: "Muy prolijo, rápido y siempre disponible para los cambios. El diseño quedó espectacular. Mobile-first tal como lo necesitaba.", stars: 5, tag: "Gimnasio" },
  { name: "Diego T.", role: "Pizzería familiar · Boedo", emoji: "🍕", text: "Teníamos una web vieja que no convencía a nadie. Santiago la rehízo desde cero y ahora tenemos pedidos online todos los días.", stars: 5, tag: "Restaurante" },
  { name: "Ana L.", role: "Emprendedora textil · San Telmo", emoji: "👗", text: "Pensé que era caro pero fue súper accesible. El resultado fue mejor de lo que imaginaba. Mi catálogo online quedó hermoso.", stars: 5, tag: "Tienda" },
  { name: "Pablo F.", role: "Nutricionista · Belgrano", emoji: "🥗", text: "Mi web nueva genera consultas todas las semanas. Santiago le da un toque moderno que genera confianza instantánea.", stars: 5, tag: "Profesional" },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative bg-slate-950 py-28 px-4 overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-inter text-xs font-semibold tracking-widest text-indigo-400 uppercase">Clientes reales</span>
          <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-white mt-3 leading-tight">
            Resultados que{" "}
            <GradientText>hablan solos.</GradientText>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="group relative rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-indigo-500/30 transition-all duration-300 hover:bg-slate-900/60"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-0.5 font-inter text-[10px] font-medium text-slate-400 uppercase tracking-wider">{t.tag}</span>
              </div>

              <p className="font-inter text-slate-300 text-sm leading-relaxed italic mb-5">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/25 to-violet-500/25 border border-indigo-500/25 flex items-center justify-center text-xl shrink-0">
                  {t.emoji}
                </div>
                <div>
                  <div className="font-syne font-bold text-white text-sm">{t.name}</div>
                  <div className="font-inter text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
