"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectHighlight = () => {
  const ROC_URL = "https://emveozhub-roc.vercel.app/";
  const GITHUB_URL = "https://github.com/vincentozon-cloud/emveozhub-roc";

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="relative flex flex-col md:flex-row gap-12 items-center">
            
            {/* Image Side - Clickable & Secure */}
            <div className="w-full md:w-1/2 relative group/image">
              <a 
                href={ROC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-20 group-hover/image:opacity-50 transition duration-500"></div>
                <div className="relative bg-[#020617] rounded-lg overflow-hidden border border-white/5">
                  <img 
                    src="/ROC.png" 
                    alt="eMVeOzHub ROC Live System" 
                    className="w-full h-auto object-cover transform group-hover/image:scale-[1.03] transition duration-700 ease-in-out"
                  />
                  {/* UX Overlay */}
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-white border border-white/20 tracking-widest">
                      VIEW LIVE SYSTEM ↗
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-widest text-blue-400 font-bold">
                Infrastructure Milestone
              </div>
              
              <h2 className="text-3xl font-bold text-white tracking-tight">
                eMVeOzHub <span className="text-blue-500">// Risk Operation Center</span>
              </h2>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                A high-performance security monitoring dashboard engineered to identify "Slow-Drip" exfiltration attacks. Built with a <strong>Neural-Heuristic Engine</strong> to calculate real-time threat scores while eliminating alert fatigue for analysts.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Next.js 15', 'Prisma 7', 'Supabase', 'Tailwind v4'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <a 
                  href={ROC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm font-semibold transition-all shadow-lg shadow-blue-600/20"
                >
                  Launch ROC
                </a>
                <a 
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-white/10 hover:bg-white/5 text-white rounded text-sm font-semibold transition-all"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHighlight;