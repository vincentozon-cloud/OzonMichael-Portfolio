"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const techStack = [
    { name: "HTML5", src: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS3", src: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JavaScript", src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "React", src: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { name: "Next.js", src: "/logos/nextjs.png" },
    { name: "Tailwind", src: "/logos/tailwind.png" },
    { name: "TypeScript", src: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
    { name: "Supabase", src: "/logos/supabase.png" },
  ];

  const tools = [
    { name: "Canva", src: "/logos/canva.png" },
    { name: "Photoshop", src: "/logos/photoshop.png" },
    { name: "Google Workspace", src: "/logos/google.png" },
    { name: "Microsoft 365", src: "/logos/ms365.png" },
    { name: "Clio", src: "/logos/clio.png" },
    { name: "Asana", src: "/logos/asana.png" },
    { name: "AutoCAD", src: "/logos/autocad.png" },
  ];

  const SkillIcon = ({ name, src }: { name: string; src: string }) => (
    <motion.div 
      className="flex flex-col items-center group relative px-8"
      whileHover={{ scale: 1.15, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="relative w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-3 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300 shadow-xl overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <img
          src={src}
          alt={name}
          className="w-full h-full object-contain relative z-10"
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150?text=Logo"; }}
        />
      </div>
      <p className="mt-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
        {name}
      </p>
      <div className="absolute -inset-2 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </motion.div>
  );

  const CarouselTrack = ({ items }: { items: { name: string; src: string }[] }) => (
    <div className="relative flex overflow-hidden py-10">
      {/* Refined Gradients: Using radial-like fades so the logos 
          seamlessly emerge from the background texture 
      */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />

      <div className="flex animate-infinite-scroll whitespace-nowrap">
        {/* Triple buffer ensures no gaps on ultra-wide screens */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="inline-block">
            <SkillIcon name={item.name} src={item.src} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    // Removed background color and border to keep the global texture visible
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
        <h2 className="font-soria text-blue-400 text-2xl mb-2 italic">Technical Proficiency</h2>
        <h3 className="section-title">Skills & Tech Stack</h3>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="px-6 max-w-7xl mx-auto text-[10px] font-bold text-blue-400/40 mb-2 tracking-[0.4em] uppercase text-center md:text-left">
            Development & Engineering
          </h3>
          <CarouselTrack items={techStack} />
        </div>
        <div>
          <h3 className="px-6 max-w-7xl mx-auto text-[10px] font-bold text-blue-400/40 mb-2 tracking-[0.4em] uppercase text-center md:text-left">
            Management & Design Tools
          </h3>
          <CarouselTrack items={tools} />
        </div>
      </div>
      
      {/* Asset Attribution */}
      <div className="mt-24 pt-10 border-t border-white/5 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-20 hover:opacity-100 transition-opacity duration-700">
          <p className="text-[9px] text-gray-500 uppercase tracking-[0.3em] font-bold">© 2026 eMVeOzHub</p>
          <div className="text-[9px] text-gray-600 text-center md:text-right">
            <p className="mb-2 uppercase tracking-widest text-blue-400/30 font-bold">Asset Credits:</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              <a href="https://www.flaticon.com/free-icons/html-5" target="_blank" className="hover:text-blue-400">HTML5: Freepik</a>
              <a href="https://www.flaticon.com/free-icons/css" target="_blank" className="hover:text-blue-400">CSS3: Freepik</a>
              <a href="https://www.flaticon.com/free-icons/javascript" target="_blank" className="hover:text-blue-400">JS: UIUX Mall</a>
              <a href="https://www.flaticon.com/free-icons/react" target="_blank" className="hover:text-blue-400">React: Freepik</a>
              <a href="https://www.flaticon.com/free-icons/typescript" target="_blank" className="hover:text-blue-400">TS: Freepik</a>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-gray-700 italic text-xs">
        "If it doesn't work, we lose nothing. If it does, we save everything."
      </p>
    </section>
  );
};

export default Skills;