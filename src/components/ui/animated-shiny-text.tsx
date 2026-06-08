"use client";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  textClassName?: string;
  className?: string;
}

export function AnimatedText({ text, textClassName, className }: AnimatedTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-[linear-gradient(110deg,#e2e8f0,45%,#fff,55%,#e2e8f0)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shiny-text",
        textClassName,
        className
      )}
    >
      {text}
    </span>
  );
}
