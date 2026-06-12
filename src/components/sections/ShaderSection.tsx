"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WebGLShader } from "@/components/ui/webgl-shader";
import { GradientText } from "@/components/ui/gradient-text";

const WA_LINK = "https://wa.me/5491178236625?text=Hola%20Santiago!%20Quiero%20una%20p%C3%A1gina%20web%20para%20mi%20negocio";

const stats = [
  { value: "+50", label: "webs entregadas", icon: "🌐" },
  { value: "5–7", label: "días de entrega", icon: "⚡" },
  { value: "100%", label: "mobile-first", icon: "📱" },
  { value: "5★", label: "satisfacción clientes", icon: "⭐" },
];

export function ShaderSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <WebGLShader className="absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-inter text-xs font-semibold tracking-widest text-indigo-400 uppercase">Resultados reales</span>
          <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-white mt-3 mb-4 leading-tight">
            Números que{" "}
            <GradientText>no mienten.</GradientText>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 w-full max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <span className="text-2xl">{s.icon}</span>
              <span className="font-syne font-extrabold text-3xl text-white">{s.value}</span>
              <span className="font-inter text-xs text-slate-400 text-center">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <button className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 font-inter font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
              Quiero ser el próximo
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
