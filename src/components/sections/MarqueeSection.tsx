"use client";

const items = [
  "RESTAURANTES", "BARBERÍAS", "GIMNASIOS", "TIENDAS",
  "PELUQUERÍAS", "PIZZERÍAS", "CAFETERÍAS", "EMPRENDIMIENTOS",
  "PROFESIONALES", "SALUD Y BIENESTAR", "MODA", "SERVICIOS",
];

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={`flex gap-8 ${reverse ? "animate-marquee-slow" : "animate-marquee"}`}
      style={{ animationDirection: reverse ? "reverse" : "normal" }}>
      {doubled.map((item, i) => (
        <span
          key={i}
          className={`shrink-0 font-syne font-extrabold text-sm tracking-widest uppercase whitespace-nowrap px-1 ${
            i % 3 === 0
              ? "text-indigo-400"
              : "text-slate-600"
          }`}
        >
          {item}
          <span className="mx-4 text-slate-700">·</span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="relative bg-[#030712] border-y border-slate-800/40 py-6 overflow-hidden">
      <div className="flex flex-col gap-3">
        <div className="flex overflow-hidden">
          <MarqueeTrack />
        </div>
        <div className="flex overflow-hidden">
          <MarqueeTrack reverse />
        </div>
      </div>
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent pointer-events-none z-10" />
    </section>
  );
}
