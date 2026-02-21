"use client";
import React from "react";
import { motion } from "framer-motion";

const VerificationRibbon = () => {
  const credentials = [
    { 
      platform: "COURSERA", 
      course: "Full-Stack Development", 
      status: "Verified",
      glow: "group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]",
      statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/10"
    },
    { 
      platform: "IBM", 
      course: "Data Engineering", 
      status: "In Progress",
      glow: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]",
      statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
    },
    { 
      platform: "UDEMY", 
      course: "Virtual Assistant", 
      status: "Verified",
      glow: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]",
      statusColor: "text-purple-400 border-purple-500/30 bg-purple-500/10"
    },
  ];

  return (
    <div className="w-full border-y border-white/5 bg-white/[0.01] backdrop-blur-[2px] py-10 my-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8 opacity-50">
          <div className="h-[1px] w-8 bg-emerald-500" />
          <span className="text-[9px] font-mono text-white uppercase tracking-[0.5em]">
            SYSTEM_VERIFIED_CREDENTIALS_V2
          </span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {credentials.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`
                relative flex items-center 
                bg-white/[0.03] backdrop-blur-md 
                border border-white/10 rounded-lg 
                overflow-hidden group 
                transition-all duration-500 
                hover:bg-white/[0.06] hover:border-white/20
                ${cert.glow}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              <div className="bg-black/20 px-4 py-4 border-r border-white/10 flex flex-col justify-center relative z-10">
                <span className="text-[7px] font-bold text-emerald-500/60 uppercase tracking-widest mb-1">
                  ISSUER
                </span>
                <span className="text-sm font-black text-white tracking-widest">
                  {cert.platform}
                </span>
              </div>
              <div className="px-5 py-4 flex flex-col relative z-10">
                <span className="text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
                  {cert.course}
                </span>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${cert.statusColor}`}>
                    {cert.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerificationRibbon;