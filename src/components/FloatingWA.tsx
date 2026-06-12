"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5491178236625?text=Hola%20Santiago!%20Quiero%20una%20p%C3%A1gina%20web%20para%20mi%20negocio";

export function FloatingWA() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-3 rounded-full shadow-2xl shadow-green-500/40 transition-colors duration-200"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:block text-sm">WhatsApp</span>
    </motion.a>
  );
}
