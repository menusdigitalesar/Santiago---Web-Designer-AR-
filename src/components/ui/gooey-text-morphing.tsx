"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
}: GooeyTextProps) {
  const text1Ref = useRef<SVGTextElement>(null);
  const text2Ref = useRef<SVGTextElement>(null);
  const [textIndex, setTextIndex] = useState(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(Date.now());

  useEffect(() => {
    let animId: number;

    function setMorph(fraction: number) {
      const t2 = text2Ref.current;
      const t1 = text1Ref.current;
      if (!t2 || !t1) return;
      t2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      t2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      const f2 = 1 - fraction;
      t1.style.filter = `blur(${Math.min(8 / f2 - 8, 100)}px)`;
      t1.style.opacity = `${Math.pow(f2, 0.4) * 100}%`;
      t1.textContent = texts[textIndex % texts.length];
      t2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morphRef.current = 0;
      const t2 = text2Ref.current;
      const t1 = text1Ref.current;
      if (!t2 || !t1) return;
      t2.style.filter = "";
      t2.style.opacity = "100%";
      t1.style.filter = "";
      t1.style.opacity = "0%";
    }

    function animate() {
      animId = requestAnimationFrame(animate);
      const now = Date.now();
      const dt = (now - timeRef.current) / 1000;
      timeRef.current = now;

      cooldownRef.current -= dt;
      if (cooldownRef.current <= 0) {
        if (morphRef.current === 0) {
          setTextIndex((i) => {
            const next = (i + 1) % texts.length;
            if (text1Ref.current) text1Ref.current.textContent = texts[i];
            if (text2Ref.current) text2Ref.current.textContent = texts[next];
            return i;
          });
        }
        morphRef.current += dt;
        if (morphRef.current >= morphTime) {
          cooldownRef.current = cooldownTime;
          morphRef.current = 0;
          setTextIndex((i) => (i + 1) % texts.length);
        } else {
          setMorph(morphRef.current / morphTime);
        }
      } else {
        doCooldown();
      }
    }

    if (text1Ref.current) text1Ref.current.textContent = texts[0];
    if (text2Ref.current) text2Ref.current.textContent = texts[1];
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [texts, morphTime, cooldownTime, textIndex]);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="gooey-threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <svg
        style={{ filter: "url(#gooey-threshold)" }}
        className="w-full h-full"
        viewBox="0 0 400 80"
      >
        <text
          ref={text1Ref}
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          className={cn("text-4xl font-bold", textClassName)}
          style={{ fontSize: 52, fontFamily: "var(--font-syne), sans-serif", fontWeight: 800 }}
        />
        <text
          ref={text2Ref}
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#gooey-gradient)"
          style={{ fontSize: 52, fontFamily: "var(--font-syne), sans-serif", fontWeight: 800 }}
        />
        <defs>
          <linearGradient id="gooey-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
