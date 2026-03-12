"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ subtitle, title }: { subtitle: string; title: string }) => {
  const item = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring" as const, 
        damping: 15, 
        stiffness: 150 
      } 
    },
  };

  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="max-w-7xl mx-auto px-6 mb-10 text-center md:text-left"
    >
      <motion.h2 variants={item} className="font-soria text-emerald-500/80 text-lg lg:text-xl italic tracking-widest mb-1">
        {subtitle}
      </motion.h2>
      <div className="flex justify-center md:justify-start overflow-hidden">
        {title.split("").map((char, i) => (
          <motion.span key={i} variants={item} className="text-2xl lg:text-4xl font-black text-white/70 tracking-tight">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      <motion.div initial={{ width: 0 }} whileInView={{ width: "40px" }} transition={{ duration: 0.8, delay: 0.6 }} className="h-0.5 bg-emerald-500/50 mt-2" />
    </motion.div>
  );
};

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const projectData = [
    {
      title: "eMVeOzHub",
      category: "Full-Stack Development",
      description: "A centralized sales management hub featuring identity handshakes, real-time route tracking, and integrity-based incentive systems.",
      tech: ["Next.js", "Supabase", "Tailwind CSS"],
      status: "Active Development",
      link: "https://emveoz-hub.vercel.app/",
      bgImage: "/gps-cover.jpg" 
    },
    {
      title: "Future Focus",
      category: "Language & Academics",
      description: "An educational platform inspired by Korean academic rigor, designed to streamline language learning and student tracking.",
      tech: ["React", "TypeScript", "Node.js"],
      status: "Live",
      link: "https://future-focus-reveal.vercel.app/",
      bgImage: "/future_focus_wallpaper.png" 
    },
    {
      title: "Cabredas Surveying",
      category: "Geodetic Services",
      description: "A specialized platform for surveying operations, highlighting precision engineering and land development partnership.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      status: "Archived",
      link: "https://cabredas-surveying.vercel.app/",
      bgImage: "/survey-1.jpg"
    }
  ];

  return (
    <section id="projects" className="relative py-12">
      <SectionTitle subtitle="Selected Works" title="PROJECTS" />

      <div className="max-w-7xl mx-auto px-6 h-125 flex flex-col md:flex-row gap-4">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setExpandedIndex(index)}
            animate={{ 
              flex: expandedIndex === index ? 3 : 1,
            }}
            transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
            className="relative h-full rounded-3xl overflow-hidden cursor-pointer border border-white/10 group bg-[#0a0a0a]"
          >
            {project.title === "Future Focus" && (
                <div className="absolute top-4 right-4 z-20 flex gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="w-3 h-3 rounded-full bg-[#CD2E3A]" />
                    <div className="w-3 h-3 rounded-full bg-[#0047A0]" />
                </div>
            )}

            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url('${project.bgImage}')` }}
            />
            
            <div className={`absolute inset-0 transition-opacity duration-500 ${expandedIndex === index ? 'bg-black/70' : 'bg-black/50 group-hover:bg-black/30'}`} />

            {expandedIndex === index && (
              <motion.div 
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-30 bg-linear-to-b from-transparent via-emerald-500/10 to-transparent z-10 pointer-events-none"
              />
            )}

            {expandedIndex !== index && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <p className="rotate-90 whitespace-nowrap text-white/50 font-black tracking-[0.5em] uppercase text-xs">
                  {project.title}
                </p>
              </motion.div>
            )}

            <div className="absolute inset-0 p-8 flex flex-col justify-end overflow-hidden">
              <motion.div
                animate={{ 
                  opacity: expandedIndex === index ? 1 : 0,
                  y: expandedIndex === index ? 0 : 40 
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                    {project.category}
                  </span>
                  <span className="text-[10px] text-white/40 font-mono tracking-tighter uppercase">
                    [{project.status}]
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-tighter">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm max-w-md mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((skill) => (
                    <span key={skill} className="text-[9px] font-mono text-emerald-500/70 border border-white/10 px-2 py-1 rounded bg-white/5 backdrop-blur-md">
                      {skill}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => window.open(project.link, '_blank')}
                  className="group/btn relative overflow-hidden bg-emerald-500 text-black font-black text-[10px] uppercase px-8 py-3 rounded-full transition-all hover:pr-12"
                >
                  <span className="relative z-10">Access System</span>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/btn:opacity-100 transition-all">
                    →
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center border-t border-white/5 pt-8">
        <p className="text-center text-gray-500 italic text-[11px] lg:text-xs max-w-lg px-6 leading-relaxed">
          "Who may ascend the mountain of the Lord? Who may stand in his holy place? 
          The one who has <span className="text-emerald-500/80 not-italic font-bold">clean hands and a pure heart.</span>"
        </p>
        <p className="mt-1 text-[9px] text-gray-600 uppercase tracking-widest">— Psalm 24:3-4</p>
      </div>
    </section>
  );
};

export default Projects;