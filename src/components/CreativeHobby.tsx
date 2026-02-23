"use client";
import React from "react";
import { motion } from "framer-motion";

const CreativeHobby = () => {
  const media = [
    {
      title: "Drawing & Drafting Studies",
      type: "Technical Art",
      src: "/videos/drafting-compilation.mp4", // Rename your file or update path here
      desc: "A compilation of technical line work and sketching. Translating complex visual data into clean, structured drafting.",
      tag: "TECHNICAL ART"
    },
    {
      title: "Watercolor & Color Theory",
      type: "Traditional Media",
      src: "/videos/watercolor-process.mp4",
      desc: "Exploration of layering and color harmony—principles used to build depth in modern UI/UX interfaces.",
      tag: "AESTHETICS"
    },
    {
      title: "The Unplugged Sessions",
      type: "Guitar & Vocals",
      src: "/videos/guitar-clean.mp4",
      desc: "The clean audio take on creative persistence. A raw look at the learning curve behind every new skill.",
      tag: "AUTHENTICITY",
      isMusical: true
    }
  ];

  return (
    <section id="creative" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-soria text-emerald-500 text-xl italic mb-2">Off-Duty Architecture</h2>
          <h3 className="text-5xl font-black text-white/90 tracking-tighter uppercase">
            Creative <span className="text-white/40 font-light italic">Hobbies</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {media.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500"
            >
              {/* VIDEO PLAYER */}
              <div className="relative aspect-video bg-black/20">
                <video 
                  src={item.src} 
                  controls 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-4 left-4 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 px-3 py-1 rounded-full">
                  <span className="text-[10px] font-black text-emerald-400 tracking-widest uppercase">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* GLASS CONTENT */}
              <div className="p-8">
                <h4 className="text-white text-xl font-bold mb-3 tracking-tight">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium italic opacity-70">
                  "{item.desc}"
                </p>
                
                {item.isMusical && (
                  <div className="p-4 bg-amber-500/[0.03] border border-amber-500/20 rounded-2xl backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest">
                        Integrity Protocol: Transparency
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-500/90 leading-snug">
                      <span className="font-bold underline">⚠️ SYSTEM WARNING:</span> High-integrity code, low-fidelity vocals. Listen at your own risk!
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeHobby;