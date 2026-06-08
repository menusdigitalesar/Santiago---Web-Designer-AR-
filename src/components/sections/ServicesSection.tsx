"use client";
import { motion } from "framer-motion";

const services = [
  { emoji: "🍕", title: "Restaurantes & Cafeterías", desc: "Menú digital, galería de fotos, pedidos por WhatsApp, horarios y reservas online.", color: "from-orange-500/20 to-red-500/20", border: "border-orange-500/30", dot: "bg-orange-400" },
  { emoji: "✂️", title: "Barberías & Peluquerías", desc: "Agenda de turnos, catálogo de servicios, galería de trabajos y precios.", color: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30", dot: "bg-blue-400" },
  { emoji: "💪", title: "Gimnasios & Estudios", desc: "Planes y precios, clases y horarios, fotos del espacio y contacto directo.", color: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30", dot: "bg-green-400" },
  { emoji: "🛍️", title: "Tiendas & Emprendimientos", desc: "Catálogo de productos, carrito por WhatsApp, métodos de pago y envíos.", color: "from-pink-500/20 to-rose-500/20", border: "border-pink-500/30", dot: "bg-pink-400" },
  { emoji: "👔", title: "Profesionales Independientes", desc: "Portfolio, servicios, testimonios, agenda y formulario de contacto.", color: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/30", dot: "bg-violet-400" },
  { emoji: "🏪", title: "Negocios Locales", desc: "Todo lo que necesita tu comercio para tener presencia digital profesional.", color: "from-indigo-500/20 to-blue-500/20", border: "border-indigo-500/30", dot: "bg-indigo-400" },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-slate-950 py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="text-sm font-semibold text-indigo-400 tracking-widest uppercase">Para cualquier rubro</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white tracking-tight">
            Trabajo con{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">todo tipo de negocio</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">No importa el rubro. Si tenés un negocio, yo te hago la web que necesitás para crecer.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title} className={`relative rounded-2xl border ${s.border} bg-gradient-to-br ${s.color} p-6 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 cursor-default`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <div className="flex items-start gap-4">
                <div className="text-4xl shrink-0">{s.emoji}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    <h3 className="font-bold text-white text-lg leading-tight">{s.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
