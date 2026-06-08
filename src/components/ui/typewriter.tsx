"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string[];
  speed?: number;
  deleteSpeed?: number;
  waitTime?: number;
  cursorChar?: string;
  className?: string;
}

export function Typewriter({
  text,
  speed = 70,
  deleteSpeed = 40,
  waitTime = 1500,
  cursorChar = "|",
  className,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (waiting) return;
    const target = text[idx];
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), speed);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => { setWaiting(false); setDeleting(true); }, waitTime);
      setWaiting(true);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % text.length);
    }
  }, [displayed, deleting, waiting, idx, text, speed, deleteSpeed, waitTime]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse">{cursorChar}</span>
    </span>
  );
}
