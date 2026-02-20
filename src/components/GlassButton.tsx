"use client";
import { motion } from "framer-motion";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

const GlassButton = ({ text, onClick, className }: Props) => {
  return (
    <motion.button
      onClick={onClick}
      // 1. PHYSICAL ENLARGEMENT
      whileHover={{ 
        scale: 1.1, // Enlarges by 10%
        y: -5,      // Slight lift for 3D effect
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }}
      className={`
        relative overflow-hidden px-10 py-4 rounded-xl font-bold uppercase tracking-widest
        bg-white/5 border border-white/10 backdrop-blur-xl
        text-white shadow-2xl transition-colors duration-500
        hover:border-blue-500/50 hover:bg-blue-500/10
        ${className}
      `}
    >
      {/* 2. ANIMATED RADIANT GLOW (The "Inside" Movement) */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ 
          repeat: Infinity, 
          duration: 2, 
          ease: "linear",
          repeatDelay: 0.5 
        }}
      />

      {/* 3. TEXT CONTENT */}
      <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
        {text}
      </span>

      {/* 4. OUTER MIST EFFECT (Appears on Hover) */}
      <motion.div
        className="absolute -inset-1 bg-blue-500/30 blur-xl opacity-0 rounded-xl"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default GlassButton;