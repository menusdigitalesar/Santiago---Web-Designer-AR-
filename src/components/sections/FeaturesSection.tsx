"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { GradientText } from "@/components/ui/gradient-text";

const features = [
  { icon: "💬", title: "WhatsApp Integrado", desc: "Un clic y tu cliente te escribe. Sin formularios, sin fricciones.", highlight: true },
  { icon: "📱", title: "Mobile-First 100%", desc: "El 95% navega desde el celular. Tu web se ve perfecta en cualquier pantalla.", highlight: false },
  { icon: "📋", title: "Menú / Catálogo Digital", desc: "Productos, servicios y precios con fotos. Siempre actualizado.", highlight: false },
  { icon: "⚡", title: "Carga en menos de 1s", desc: "Cada segundo que demora es un cliente que se va. Tus webs vuelan.", highlight: false },
  { icon: "📍", title: "Google Maps + Horarios", desc: "Tu cliente te encuentra, sabe cómo llegar y cuándo estás abierto.", highlight: false },
  { icon: "📸", title: "Galería Profesional", desc: "Fotos bien mostradas venden más que cualquier texto.", highlight: false },
  { icon: "🔍", title: "SEO Local", desc: "Aparecer cuando alguien busca tu rubro en tu ciudad. Gratis y permanente.", highlight: true },
  { icon: "📊", title: "Analytics Incluido", desc: "Sabés quién entra, desde dónde y qué mira. Datos reales.", highlight: false },
  { icon: "🎨", title: "Diseño a Medida", desc: "Tu identidad, tus colores. No hay dos iguales.", highlight: false },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[#04060f] py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <SparklesCore id="feat-sp" background="transparent" minSize={0.3} maxSize={0.8} particleDensity={35} className="w-full h-full" particleColor="#6366f1" speed={0.4} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-inter text-xs font-semibold tracking-widest text-indigo-400 uppercase">Todo incluido</span>
          <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-white mt-3 leading-tight">
            Todo lo que necesitás,
            <br />
            <GradientText>sin extras ni sorpresas.</GradientText>
          </h2>
          <p className="font-inter mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Un solo precio, todo adentro. Sin sorpresas ni costos ocultos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] cursor-default ${
                f.highlight
                  ? "bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border-indigo-500/40 shadow-lg shadow-indigo-500/10"
                  : "bg-slate-900/50 border-slate-800/50 hover:border-slate-700/60"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              {f.highlight && (
                <div className="absolute top-3 right-3 rounded-full bg-indigo-500/20 px-2 py-0.5 font-inter text-[10px] font-semibold text-indigo-300 tracking-wider uppercase">Clave</div>
              )}
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className={`font-syne font-bold text-lg mb-2 ${f.highlight ? "text-white" : "text-slate-200"}`}>{f.title}</h3>
              <p className="font-inter text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              <div className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${f.highlight ? "bg-gradient-to-r from-indigo-500 to-violet-500" : "bg-gradient-to-r from-slate-600 to-transparent"}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
