"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    name: "La Vera Pizza",
    category: "Pizzeria",
    description: "La verdadera pizza a la piedra: masa crocante, abundante mozzarella y sabores irresistibles para compartir.",
    url: "https://laverapizza-menu.lovable.app/",
    screenshot: "/portfolio/laverapizzaproyecto1.jpg",
    tag: "Gastronomia",
  },
  {
    name: "Scale Media AR",
    category: "Marketing Digital",
    description: "Impulsa tu presencia en redes sociales con seguidores, likes, vistas y engagement con entrega rapida.",
    url: "https://scalemedia.shop/",
    screenshot: "/portfolio/scalemediaproyecto2.jpg",
    tag: "Ecommerce",
  },
  {
    name: "Pizzeria El Angel",
    category: "Pizzeria",
    description: "Acompanando a las familias de Luis Guilon con pizzas a la piedra, fugazzetas y empanadas de calidad.",
    url: "https://pizzeria-elangel-menu.lovable.app",
    screenshot: "/portfolio/elangelproyecto3.jpg",
    tag: "Gastronomia",
  },
  {
    name: "Burga Lovers",
    category: "Hamburgueseria",
    description: "Hamburguesas artesanales con ingredientes seleccionados, combinaciones unicas y sabor que enamora.",
    url: "https://burga-lovers-menu.lovable.app",
    screenshot: "/portfolio/burgaloversproyecto4.jpg",
    tag: "Gastronomia",
  },
  {
    name: "El Picadero",
    category: "Restaurante",
    description: "Picadas abundantes, hamburguesas artesanales y cervezas bien frías en un ambiente ideal para compartir con amigos y familia.",
    url: "https://elpicadero-menudemo.lovable.app",
    screenshot: "/portfolio/elpicaderoproyecto5.jpg",
    tag: "Gastronomia",
  },
  {
    name: "Sensei Sushi",
    category: "Sushi",
    description: "Disfrutá de rolls premium, combinaciones exclusivas y la máxima frescura en cada bocado.",
    url: "https://senseisushi-menudemo.lovable.app",
    screenshot: "/portfolio/senseisushiproyecto6.jpg",
    tag: "Gastronomia",
  },
  {
    name: "Salud Y Estética MG",
    category: "Salud y Estética",
    description: "Especialistas en salud y estética, ofreciendo tratamientos personalizados para cuidar tu bienestar, confianza y belleza natural.",
    url: "https://saludyesteticamg-demo.lovable.app/",
    screenshot: "/portfolio/saludyesteticaproyecto7.jpg",
    tag: "Salud",
  },
  {
    name: "Sabores del Chiringuito",
    category: "Restaurante",
    description: "Sabores únicos, porciones abundantes y el ambiente ideal para compartir buenos momentos.",
    url: "https://saboresdelchiringuito-menudemo.lovable.app",
    screenshot: "/portfolio/chiringuitoproyecto8.jpg",
    tag: "Gastronomia",
  },
  {
    name: "La Posta",
    category: "Restaurante",
    description: "Comida casera, porciones abundantes y sabores tradicionales para disfrutar todos los días.",
    url: "https://la-posta-digital-menudemo.lovable.app/",
    screenshot: "/portfolio/lapostaproyecto9.jpg",
    tag: "Gastronomia",
  },
  {
    name: "El Sazón Venezolano",
    category: "Restaurante Venezolano",
    description: "Sabores auténticos de Venezuela, preparados con recetas tradicionales e ingredientes seleccionados.",
    url: "https://el-sazon-venezolano-menu-demo.lovable.app/",
    screenshot: "/portfolio/elsazonproyecto10.jpg",
    tag: "Gastronomia",
  },
];

const GRADIENTS = [
  "from-indigo-700 via-violet-700 to-purple-800",
  "from-violet-700 via-purple-700 to-indigo-800",
  "from-blue-700 via-indigo-700 to-violet-800",
  "from-purple-700 via-violet-700 to-blue-800",
];

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-slate-800/50 bg-slate-900/30 overflow-hidden">
      <div className="h-52 animate-shimmer" />
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-4 w-28 bg-slate-800/60 rounded-full animate-shimmer" />
          <div className="h-5 w-20 bg-slate-800/40 rounded-full animate-shimmer" />
        </div>
        <div className="h-3 w-full bg-slate-800/40 rounded animate-shimmer" />
        <div className="h-3 w-3/4 bg-slate-800/30 rounded animate-shimmer" />
        <div className="h-3 w-16 bg-indigo-900/40 rounded-full animate-shimmer mt-4" />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="group relative rounded-2xl border border-slate-800/60 bg-slate-900/40 overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="relative h-52 overflow-hidden bg-slate-900">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 animate-shimmer" />
        )}

        {imgError && (
          <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} flex items-center justify-center`}>
            <div className="text-center text-white/30 text-xs font-inter px-6">
              <div className="text-4xl mb-2">🌐</div>
              Agrega la captura en
              <br />
              /public/portfolio/
            </div>
          </div>
        )}

        <img
          src={project.screenshot}
          alt={project.name}
          className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 font-inter font-bold text-sm px-5 py-2.5 hover:bg-indigo-50 transition-colors shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" />
            Ver web en vivo
          </a>
        </div>

        <div className="absolute top-3 left-3 z-10">
          <span className="rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 font-inter text-[10px] font-semibold text-white/80 uppercase tracking-widest">
            {project.tag}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-syne font-bold text-white text-lg leading-tight">{project.name}</h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-indigo-400 transition-colors mt-0.5 shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <span className="font-inter text-[11px] font-semibold text-indigo-400/80 uppercase tracking-widest mb-3 block">
          {project.category}
        </span>

        <p className="font-inter text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-inter text-sm font-semibold text-indigo-400 hover:text-indigo-300 group/link transition-colors"
        >
          Ver sitio
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
}

const INITIAL_COUNT = 4;

export function PortfolioSection() {
  const [mounted, setMounted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT);
  const hiddenCount = PROJECTS.length - INITIAL_COUNT;

  return (
    <section id="portfolio" className="relative bg-[#030712] py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-indigo-500/6 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-inter text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            Trabajos reales
          </span>
          <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-white mt-3 leading-tight">
            Webs que ya{" "}
            <GradientText>estan online.</GradientText>
          </h2>
          <p className="font-inter text-slate-400 text-lg mt-4 max-w-lg mx-auto">
            Proyectos reales para negocios reales. Cada web optimizada para su rubro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {!mounted
            ? Array.from({ length: INITIAL_COUNT }).map((_, i) => <SkeletonCard key={i} />)
            : visibleProjects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
        </div>

        {mounted && !showAll && (
          <motion.div
            className="flex flex-col items-center gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-indigo-500/40 bg-indigo-500/10 px-8 py-3.5 font-inter text-base font-semibold text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400/60 hover:text-indigo-200 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
            >
              Ver los {hiddenCount} proyectos restantes
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p className="font-inter text-slate-600 text-xs">
              {PROJECTS.length} proyectos en total
            </p>
          </motion.div>
        )}

        {mounted && showAll && (
          <motion.p
            className="text-center font-inter text-slate-600 text-sm mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cada proyecto es único, diseñado y optimizado específicamente para su rubro.
          </motion.p>
        )}
      </div>
    </section>
  );
}
