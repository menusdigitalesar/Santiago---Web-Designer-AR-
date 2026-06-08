"use client";
import { cn } from "@/lib/utils";

interface DisplayCard {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}: DisplayCard) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] select-none flex-col justify-between rounded-xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-sm px-4 py-3 transition-all duration-700",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className={cn("relative inline-flex rounded-full p-1.5 bg-slate-800", iconClassName)}>
          {icon}
        </span>
        <p className={cn("text-sm font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-base font-semibold text-white">{description}</p>
      <p className="text-xs text-slate-500">{date}</p>
    </div>
  );
}

export default function DisplayCards({ cards }: { cards?: DisplayCard[] }) {
  const defaultCards: DisplayCard[] = cards ?? [
    {
      title: "Restaurante",
      description: "Menú digital + pedidos WhatsApp",
      date: "Entrega en 5 días",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:h-full before:rounded-xl before:content-[''] before:bg-slate-900/50 grayscale hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      title: "Barbería",
      description: "Agenda online + galería de trabajos",
      date: "Entrega en 5 días",
      className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:h-full before:rounded-xl before:content-[''] before:bg-slate-900/50 grayscale hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      title: "Tienda Online",
      description: "Catálogo + pagos + delivery",
      date: "Entrega en 7 días",
      className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
    },
  ];

  return (
    <div
      className="grid"
      style={{ gridTemplateAreas: "'stack'" }}
    >
      {defaultCards.map((card, i) => (
        <DisplayCard key={i} {...card} />
      ))}
    </div>
  );
}
