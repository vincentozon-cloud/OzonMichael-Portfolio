"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ subtitle, title }: { subtitle: string; title: string }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring" as const, // Added 'as const' here
        damping: 15, 
        stiffness: 150 
      } 
    },
  };

  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="max-w-7xl mx-auto px-6 mb-4 text-center md:text-left"
    >
      <motion.h2 
        variants={item}
        className="font-soria text-emerald-500/80 text-lg lg:text-xl italic tracking-widest mb-1"
      >
        {subtitle}
      </motion.h2>
      
      <div className="flex justify-center md:justify-start overflow-hidden">
        {title.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={item}
            className="text-2xl lg:text-4xl font-black text-white/70 tracking-tight"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "40px" }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="h-0.5 bg-emerald-500/50 mt-2"
      />
    </motion.div>
  );
};

const Skills = () => {
  const techStack = [
    { name: "HTML5", src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", level: 95 },
    { name: "CSS3", src: "https://cdn-icons-png.flaticon.com/512/732/732190.png", level: 90 },
    { name: "JavaScript", src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", level: 85 },
    { name: "React", src: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", level: 88 },
    { name: "Next.js", src: "/logos/nextjs.webp", level: 85 },
    { name: "Tailwind", src: "/logos/tailwind.webp", level: 95 },
    { name: "TypeScript", src: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png", level: 80 },
    { name: "Supabase", src: "/logos/supabase.svg", level: 75 },
  ];

  const tools = [
    { name: "Canva", src: "/logos/canva.png", level: 95 },
    { name: "Photoshop", src: "/logos/photoshop.png", level: 80 },
    { name: "Google Workspace", src: "/logos/google.webp", level: 98 },
    { name: "Microsoft 365", src: "/logos/ms365.png", level: 98 },
    { name: "Clio", src: "/logos/clio.webp", level: 90 },
    { name: "Asana", src: "/logos/asana.jpg", level: 85 },
    { name: "AutoCAD", src: "/logos/autocad.jpg", level: 95 },
  ];

  const languages = [
    { name: "English", src: "https://cdn-icons-png.flaticon.com/512/330/330425.png", level: 95 }, 
    { name: "Filipino", src: "https://cdn-icons-png.flaticon.com/512/197/197561.png", level: 100 }, 
    { name: "Korean", src: "/korean.jpg", level: 25 }, // Points to public/korean beginner level //
  ];

  const SkillIcon = ({ name, src, level }: { name: string; src: string; level: number }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (level / 100) * circumference;

    return (
      <motion.div 
        className="flex flex-col items-center group relative px-10"
        whileHover={{ scale: 1.15, y: -5 }} 
        transition={{ type: "spring" as const, stiffness: 300, damping: 20 }} // Added 'as const' here
      >
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90 transform">
            <circle cx="56" cy="56" r={radius} stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5" />
            <motion.circle
              cx="56" cy="56" r={radius} stroke="currentColor" strokeWidth="3" fill="transparent"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: offset }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ 
                strokeDashoffset: { duration: 2, ease: "easeOut" },
                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-emerald-500/60 group-hover:text-emerald-400 group-hover:opacity-100 transition-all"
            />
          </svg>

          <div className="relative w-14 h-14 bg-white/3 border border-white/10 rounded-2xl flex items-center justify-center p-3 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-500 shadow-2xl backdrop-blur-md z-10">
            <img
              src={src} alt={name}
              className="w-full h-full object-contain relative z-10 brightness-90 group-hover:brightness-125 transition-all"
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150?text=Logo"; }}
            />
          </div>

          <div className="absolute top-2 right-2 bg-emerald-500/20 group-hover:bg-emerald-600 border border-emerald-500/50 text-emerald-400 group-hover:text-white text-[7px] font-bold px-1.5 py-0.5 rounded-md shadow-lg transition-all z-20">
            {level}%
          </div>
        </div>
        
        <p className="mt-1 text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-emerald-400 transition-colors">
          {name}
        </p>
      </motion.div>
    );
  };

  const CarouselTrack = ({ items, speed = "30s" }: { items: any[], speed?: string }) => (
    <div className="relative flex overflow-hidden py-1">
      <div className="absolute inset-y-0 left-0 w-[8%] bg-linear-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[8%] bg-linear-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

      <div className="flex animate-infinite-scroll whitespace-nowrap" style={{ animationDuration: speed }}>
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="inline-block">
            <SkillIcon name={item.name} src={item.src} level={item.level} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="relative py-8">
      <SectionTitle subtitle="Technical Proficiency" title="SKILLS & TECH STACK" />

      <div className="space-y-6">
        {/* DEVELOPMENT CATEGORY */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group px-6 max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <div className="relative overflow-hidden">
              <h3 className="text-sm lg:text-lg font-black text-white/90 tracking-widest uppercase group-hover:tracking-[0.2em] transition-all duration-500">
                DEVELOPMENT & ENGINEERING
              </h3>
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-emerald-500/10 to-transparent w-full h-full"
              />
            </div>
            <div className="hidden md:block h-px grow bg-linear-to-r from-emerald-500/20 to-transparent"></div>
            <span className="hidden md:block text-[7px] font-mono text-emerald-500/30 tracking-widest uppercase">
              SYS_STAT: OPTIMIZED
            </span>
          </div>
          <CarouselTrack items={techStack} speed="50s" />
        </motion.div>

        {/* MANAGEMENT CATEGORY */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative group px-6 max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <div className="relative overflow-hidden">
              <h3 className="text-sm lg:text-lg font-black text-white/90 tracking-widest uppercase group-hover:tracking-[0.2em] transition-all duration-500">
                MANAGEMENT & DESIGN
              </h3>
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-emerald-500/10 to-transparent w-full h-full"
              />
            </div>
            <div className="hidden md:block h-px grow bg-linear-to-r from-emerald-500/20 to-transparent"></div>
            <span className="hidden md:block text-[7px] font-mono text-emerald-500/30 tracking-widest uppercase">
              INFRA_LOAD: STABLE
            </span>
          </div>
          <CarouselTrack items={tools} speed="40s" />
        </motion.div>

        {/* LANGUAGES CATEGORY */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative group px-6 max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <div className="relative overflow-hidden">
              <h3 className="text-sm lg:text-lg font-black text-white/90 tracking-widest uppercase group-hover:tracking-[0.2em] transition-all duration-500">
                COMMUNICATION & LANGUAGES
              </h3>
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-emerald-500/10 to-transparent w-full h-full"
              />
            </div>
            <div className="hidden md:block h-px grow bg-linear-to-r from-emerald-500/20 to-transparent"></div>
            <span className="hidden md:block text-[7px] font-mono text-emerald-500/30 tracking-widest uppercase">
              COMM_LINK: ACTIVE
            </span>
          </div>
          <CarouselTrack items={languages} speed="60s" />
        </motion.div>
      </div>

      <div className="mt-8 flex flex-col items-center border-t border-white/5 pt-6">
        <p className="text-center text-gray-500 italic text-[11px] lg:text-xs max-w-lg px-6 leading-relaxed">
          "Whatever your hand finds to do <span className="text-emerald-500/80 not-italic font-bold">do it with all your might...</span>"
        </p>
        <p className="mt-1 text-[9px] text-gray-600 uppercase tracking-widest">— Ecclesiastes 9:10</p>
      </div>
    </section>
  );
};

export default Skills;