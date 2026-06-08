"use client";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";

const steps = [
  {
    num: "01",
    title: "Me escribís",
    subtitle: "Sin compromiso",
    desc: "Contame de tu negocio por WhatsApp. Te respondo en menos de una hora con un presupuesto claro.",
    icon: "💬",
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/30",
    glow: "shadow-indigo-500/20",
  },
  {
    num: "02",
    title: "Vemos juntos",
    subtitle: "Tu propuesta",
    desc: "Te muestro referencias, colores y estructura. Definimos la web ideal para tu negocio en una llamada o chat.",
    icon: "🎨",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/30",
    glow: "shadow-violet-500/20",
  },
  {
    num: "03",
    title: "Diseño y construyo",
    subtitle: "Trabajo rápido",
    desc: "Me pongo a trabajar. En 5–7 días tenés la web lista para revisar. Ajustamos lo que necesites.",
    icon: "⚡",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/20",
  },
  {
    num: "04",
    title: "Publicamos",
    subtitle: "Al mundo",
    desc: "Aprobás, y tu negocio ya tiene presencia online. Dominio, hosting y soporte incluido el primer mes.",
    icon: "🚀",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/20",
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="relative bg-slate-950 py-28 px-4 overflow-hidden">
      {/* Big decorative number bg */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-syne font-black text-[20rem] text-slate-900/30 leading-none">04</span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-inter text-xs font-semibold tracking-widest text-indigo-400 uppercase">Cómo trabajamos</span>
          <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-white mt-3 leading-tight">
            De cero a tu web
            <br />
            <GradientText>en menos de una semana.</GradientText>
          </h2>
          <p className="font-inter mt-4 text-slate-400 text-lg max-w-xl mx-auto">Sin reuniones interminables ni burocracia. Simple, directo, rápido.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className={`relative rounded-2xl border bg-gradient-to-br ${step.color} ${step.border} p-7 shadow-xl ${step.glow} hover:scale-[1.02] transition-transform duration-300`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute top-5 right-5 font-syne font-black text-5xl text-white/5 leading-none select-none">{step.num}</div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="font-inter text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-1">{step.subtitle}</div>
              <h3 className="font-syne font-bold text-2xl text-white mb-3">{step.title}</h3>
              <p className="font-inter text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
