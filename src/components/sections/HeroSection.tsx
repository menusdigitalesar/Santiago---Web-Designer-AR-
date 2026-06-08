"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Typewriter } from "@/components/ui/typewriter";
import { GradientText } from "@/components/ui/gradient-text";

const WA_LINK =
  "https://wa.me/5491131791361?text=Hola%20Santiago!%20Quiero%20una%20p%C3%A1gina%20web%20para%20mi%20negocio";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <AuroraBackground className="min-h-screen overflow-hidden" showRadialGradient>
      <BackgroundPaths />

      {/* Subtle sparkles */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={0.9}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#818cf8"
          speed={0.5}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/8 px-4 py-1.5 font-inter text-xs font-medium tracking-widest text-indigo-300 uppercase backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-400" />
            </span>
            Diseño Web Profesional · Argentina
          </span>
        </motion.div>

        {/* Main headline — editorial, oversized */}
        <motion.div
          className="mb-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="font-syne font-extrabold tracking-tight leading-[0.92] text-white">
            <span className="block text-[clamp(3.5rem,12vw,9rem)] uppercase">
              Tu negocio
            </span>
            <span className="block text-[clamp(3.5rem,12vw,9rem)] uppercase">
              <GradientText gradient="from-indigo-400 via-violet-300 to-blue-400">
                merece más.
              </GradientText>
            </span>
          </h1>
        </motion.div>

        {/* Typewriter subtitle */}
        <motion.div
          className="mb-10 font-inter text-lg md:text-2xl text-slate-300 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span>Tu negocio necesita&nbsp;</span>
          <Typewriter
            text={[
              "más clientes 🚀",
              "más ventas 📈",
              "presencia online 🌐",
              "una web que vende 💻",
              "ser encontrado en Google 🔍",
            ]}
            speed={60}
            deleteSpeed={35}
            waitTime={2000}
            cursorChar="_"
            className="text-indigo-300 font-medium"
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] hover:scale-105">
              <MessageCircle className="w-5 h-5" />
              Quiero mi web ahora
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0 skew-x-12" />
            </button>
          </a>
          <a href="#portfolio">
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-inter text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25">
              Ver ejemplos
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-8 font-inter text-xs text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[
            { icon: "⚡", text: "Entrega en 5–7 días" },
            { icon: "📱", text: "100% Mobile-first" },
            { icon: "💬", text: "WhatsApp integrado" },
            { icon: "🔍", text: "SEO optimizado" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
