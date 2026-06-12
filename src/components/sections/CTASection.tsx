"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { GradientText } from "@/components/ui/gradient-text";

const WA_LINK = "https://wa.me/5491178236625?text=Hola%20Santiago!%20Quiero%20una%20p%C3%A1gina%20web%20para%20mi%20negocio";
const IG_LINK = "https://www.instagram.com/webdesigner.ar/";
const FB_LINK = "https://www.facebook.com/people/Santiago-Web-Designer/61590424513054/";

export function CTASection() {
  return (
    <section className="relative bg-[#030712] py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <SparklesCore
          id="cta-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={1.2}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#818cf8"
          speed={0.6}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-transparent to-transparent pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.12), transparent)" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5 font-inter text-xs font-semibold tracking-widest text-indigo-300 uppercase mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-400" />
            </span>
            Cupos limitados · Reserva el tuyo
          </span>
        </motion.div>

        <motion.h2
          className="font-syne font-extrabold text-5xl md:text-7xl text-white leading-[0.95] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ¿Listo para{" "}
          <GradientText gradient="from-indigo-400 via-violet-300 to-blue-400">
            crecer online?
          </GradientText>
        </motion.h2>

        <motion.p
          className="font-inter text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Escribime hoy y en 5 días tenés tu web lista, optimizada y conectada a tu WhatsApp.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-10 py-5 font-inter text-lg font-semibold text-white shadow-[0_0_60px_rgba(99,102,241,0.4)] transition-all duration-300 hover:shadow-[0_0_80px_rgba(99,102,241,0.6)] hover:scale-105">
              <MessageCircle className="w-6 h-6" />
              Empezar ahora
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0 skew-x-12" />
            </button>
          </a>

          <a href={IG_LINK} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-10 py-5 font-inter text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Ver Instagram
            </button>
          </a>
        </motion.div>

        <motion.p
          className="mt-8 font-inter text-sm text-slate-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Sin compromiso · Consulta gratuita · Respuesta en menos de 1 hora
        </motion.p>
      </div>
    </section>
  );
}
