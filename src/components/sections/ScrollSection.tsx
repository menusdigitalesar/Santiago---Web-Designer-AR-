"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ScrollSection() {
  return (
    <section className="bg-slate-950">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-indigo-400 tracking-widest uppercase">
              Así se ve tu web
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight text-center">
              Diseño que{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                convierte visitas
              </span>
              <br />
              en clientes reales
            </h2>
            <p className="text-slate-400 text-lg max-w-xl text-center">
              Cada web que diseño está pensada para que tu cliente tome acción:
              llame, escriba o visite tu negocio.
            </p>
          </div>
        }
      >
        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden flex flex-col">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4 bg-slate-700/50 rounded-md px-3 py-1 text-xs text-slate-400 font-mono">
              tunegocio.com.ar
            </div>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="h-48 bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-700 flex flex-col items-center justify-center gap-3 px-8">
              <div className="text-white font-black text-2xl md:text-3xl text-center">
                🍕 La Mejor Pizzería de Buenos Aires
              </div>
              <div className="text-white/80 text-sm text-center">
                Delivery · Salón · Takeaway · Abierto hasta las 23hs
              </div>
              <div className="flex gap-3 mt-2">
                <div className="bg-white text-indigo-700 font-bold text-xs px-4 py-2 rounded-full">
                  Ver menú
                </div>
                <div className="bg-green-500 text-white font-bold text-xs px-4 py-2 rounded-full">
                  💬 WhatsApp
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 p-4">
              {[
                { emoji: "🍕", name: "Pizzas", price: "desde $2.800" },
                { emoji: "🫓", name: "Empanadas", price: "desde $800" },
                { emoji: "🥤", name: "Bebidas", price: "desde $500" },
              ].map((item) => (
                <div key={item.name} className="bg-slate-700/50 rounded-xl p-3 flex flex-col gap-2">
                  <div className="text-3xl">{item.emoji}</div>
                  <div className="text-white font-semibold text-sm">{item.name}</div>
                  <div className="text-indigo-300 text-xs">{item.price}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 px-4">
              {[
                { icon: "📍", label: "Palermo, CABA" },
                { icon: "🕐", label: "12hs–23hs" },
                { icon: "⭐", label: "4.9 / 5 estrellas" },
              ].map((info) => (
                <div key={info.label} className="bg-slate-800/60 rounded-lg p-2 text-center">
                  <div className="text-lg">{info.icon}</div>
                  <div className="text-slate-300 text-xs mt-1">{info.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
