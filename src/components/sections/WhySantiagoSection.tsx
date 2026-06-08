"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { GradientText } from "@/components/ui/gradient-text";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import DisplayCards from "@/components/ui/display-cards";
import { MessageCircle, Globe, Zap, Shield } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";

const WA_LINK = "https://wa.me/5491131791361?text=Hola%20Santiago!%20Quiero%20una%20p%C3%A1gina%20web%20para%20mi%20negocio";

const skills = ["Diseño UX/UI", "WhatsApp", "SEO", "Mobile-First"];

export function WhySantiagoSection() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      [
        ["#ptr", { left: 180, top: 50 }, { duration: 0 }],
        ["#sk1", { opacity: 1 }, { duration: 0.3 }],
        ["#ptr", { left: 40, top: 100 }, { at: "+0.6", duration: 0.5, ease: "easeInOut" }],
        ["#sk1", { opacity: 0.35 }, { at: "-0.2", duration: 0.1 }],
        ["#sk2", { opacity: 1 }, { duration: 0.3 }],
        ["#ptr", { left: 210, top: 165 }, { at: "+0.6", duration: 0.5, ease: "easeInOut" }],
        ["#sk2", { opacity: 0.35 }, { at: "-0.2", duration: 0.1 }],
        ["#sk3", { opacity: 1 }, { duration: 0.3 }],
        ["#ptr", { left: 75, top: 195 }, { at: "+0.6", duration: 0.5, ease: "easeInOut" }],
        ["#sk3", { opacity: 0.35 }, { at: "-0.2", duration: 0.1 }],
        ["#sk4", { opacity: 1 }, { duration: 0.3 }],
        ["#ptr", { left: 180, top: 50 }, { at: "+0.6", duration: 0.5, ease: "easeInOut" }],
        ["#sk4", { opacity: 0.35 }, { at: "-0.2", duration: 0.1 }],
      ],
      { repeat: Infinity }
    );
  }, [animate]);

  return (
    <section className="relative bg-[#030712] py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <SparklesCore id="why-sparkles" background="transparent" minSize={0.2} maxSize={0.6} particleDensity={25} className="w-full h-full" particleColor="#6366f1" speed={0.3} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="font-inter text-xs font-semibold tracking-widest text-indigo-400 uppercase">Por qué yo</span>
              <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-white mt-3 leading-tight">
                No soy una
                <br />
                <GradientText gradient="from-indigo-400 to-violet-400">agencia cara.</GradientText>
                <br />
                Soy Santiago.
              </h2>
            </div>

            <p className="font-inter text-slate-400 text-lg leading-relaxed">
              Trabajo directamente con vos, sin intermediarios ni presupuestos inflados. 
              Entiendo los negocios locales porque trabajo con ellos todos los días.
              Entregás en días, no meses.
            </p>

            {/* Animated skills globe */}
            <div className="relative h-[260px] w-full max-w-[320px]" ref={scope}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-indigo-500/60 shadow-[0_0_40px_rgba(99,102,241,0.4)]">
                  <img src="/profile.jpg" alt="Santiago" className="w-full h-full object-cover" />
                </div>
              </div>
              <div id="sk1" className="absolute top-[50px] right-[60px] rounded-2xl border border-indigo-500/40 bg-indigo-500/10 px-3 py-1.5 font-inter text-xs text-indigo-300 opacity-40 backdrop-blur-sm">Diseño UX/UI</div>
              <div id="sk2" className="absolute top-[100px] left-[20px] rounded-2xl border border-violet-500/40 bg-violet-500/10 px-3 py-1.5 font-inter text-xs text-violet-300 opacity-40 backdrop-blur-sm">WhatsApp</div>
              <div id="sk3" className="absolute bottom-[90px] right-[20px] rounded-2xl border border-blue-500/40 bg-blue-500/10 px-3 py-1.5 font-inter text-xs text-blue-300 opacity-40 backdrop-blur-sm">SEO Local</div>
              <div id="sk4" className="absolute bottom-[60px] left-[55px] rounded-2xl border border-slate-500/40 bg-slate-500/10 px-3 py-1.5 font-inter text-xs text-slate-300 opacity-40 backdrop-blur-sm">Mobile-First</div>

              {/* Animated cursor */}
              <div id="ptr" className="absolute pointer-events-none">
                <svg width="14" height="16" viewBox="0 0 12 13" className="fill-indigo-400" stroke="white" strokeWidth="0.8">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676Z" />
                </svg>
                <span className="relative -top-1 left-3 rounded-2xl bg-indigo-600 px-2 py-0.5 font-inter text-xs text-white">Santi</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Zap className="w-4 h-4" />, text: "Entrega rápida" },
                { icon: <Globe className="w-4 h-4" />, text: "SEO incluido" },
                { icon: <Shield className="w-4 h-4" />, text: "Soporte post-entrega" },
                { icon: <MessageCircle className="w-4 h-4" />, text: "Atención directa" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/50 px-4 py-2 font-inter text-sm text-slate-300">
                  <span className="text-indigo-400">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="self-start">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3.5 font-inter text-base font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(99,102,241,0.45)]">
                <MessageCircle className="w-5 h-5" />
                Hablemos
              </button>
            </a>
          </motion.div>

          {/* Right: display cards + gooey */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center gap-10"
          >
            {/* Gooey text morphing */}
            <div className="w-full max-w-md">
              <div className="mb-2 font-inter text-xs text-slate-500 text-center tracking-widest uppercase">Yo diseño webs para...</div>
              <GooeyText
                texts={["Restaurantes", "Barberías", "Gimnasios", "Tiendas", "Profesionales"]}
                morphTime={1.2}
                cooldownTime={0.3}
                className="h-[90px] w-full"
              />
            </div>

            {/* Display cards */}
            <div className="relative">
              <DisplayCards />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
