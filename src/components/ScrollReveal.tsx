"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollReveal = ({ children, direction = "up" }: Props) => {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;