"use client";
import React from "react";
import { motion } from "framer-motion";

const VerificationRibbon = () => {
  const credentials = [
    { 
      platform: "SAP", 
      course: "SAP CIAM (Customer Identity & Access)",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
      statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      badgeImg: "/badges/SAP CIAM.png",
      isHighlight: true
    },
    { 
      platform: "SAP", 
      course: "Rise with SAP",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
      statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      badgeImg: "/badges/SAP Rise.png",
      isHighlight: true
    },
    { 
      platform: "SAP", 
      course: "SAP Sales & Service Cloud",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
      statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      badgeImg: "/badges/SAP Sales & Service.png",
      isHighlight: true
    },
    { 
      platform: "SAP", 
      course: "SAP Analytics Cloud",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
      statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      badgeImg: "/badges/SAP Analytics Cloud.png",
      isHighlight: true
    },
    { 
      platform: "AWS", 
      course: "AWS Certified Cloud Practitioner",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]",
      statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      badgeImg: "/badges/aws cloud practitioner logo.png" 
    },
    { 
      platform: "ISC2", 
      course: "ISC2 Candidate",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
      statusColor: "text-slate-300 border-slate-400/30 bg-slate-400/10",
      badgeImg: "/badges/isc2 candidate logo.png" 
    },
    { 
      platform: "TRYHACKME", 
      course: "Top 6% Global Rank",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]",
      statusColor: "text-red-400 border-red-500/30 bg-red-500/10",
      badgeImg: "/badges/thm logo.png" 
    },
    { 
      platform: "IBM", 
      course: "Cybersecurity Fundamentals",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]",
      statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      badgeImg: "/badges/IBM-removebg-preview.png" 
    },
    { 
      platform: "CISCO", 
      course: "IT Customer Support Basics",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]",
      statusColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      badgeImg: "/badges/It support logo.png" 
    },
    { 
      platform: "CISCO", 
      course: "Endpoint Security",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]",
      statusColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      badgeImg: "/badges/endpoint sec logo.png" 
    },
    { 
      platform: "CISCO", 
      course: "Cyber Threat Management",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]",
      statusColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      badgeImg: "/badges/cyberthreat management.png" 
    },
    { 
      platform: "OPSWAT", 
      course: "Critical Infrastructure Protection",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]",
      statusColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      badgeImg: "/badges/opswat icip logo.png" 
    },
    { 
      platform: "ATTACKIQ", 
      course: "Operationalizing MITRE ATT&CK",
      status: "Verified",
      glow: "group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]",
      statusColor: "text-violet-400 border-violet-500/30 bg-violet-500/10",
      badgeImg: "/badges/AttackIQ v13 logo.png" 
    }
  ];

  return (
    <div id="credentials" className="w-full border-y border-white/5 bg-white/1 backdrop-blur-[2px] py-10 my-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8 opacity-50">
          <div className="h-px w-8 bg-emerald-500" />
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
                bg-white/3 backdrop-blur-md 
                border ${cert.isHighlight ? 'border-amber-500/30' : 'border-white/10'} 
                rounded-lg overflow-hidden group 
                transition-all duration-500 
                hover:bg-white/6 hover:border-white/20
                ${cert.glow}
              `}
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="bg-black/20 px-4 py-4 border-r border-white/10 flex flex-col justify-center items-center relative z-10 min-w-[120px]">
                {cert.badgeImg && (
                  <img 
                    src={cert.badgeImg} 
                    alt={`${cert.platform} verified badge`} 
                    className={`
                      ${cert.isHighlight ? 'w-16 h-16' : 'w-10 h-10'} 
                      object-contain mb-2 opacity-90 group-hover:opacity-100 transition-all duration-300
                    `}
                  />
                )}
                <span className="text-[7px] font-bold text-emerald-500/60 uppercase tracking-widest mb-1">
                  ISSUER
                </span>
                <span className="text-sm font-black text-white tracking-widest text-center">
                  {cert.platform}
                </span>
              </div>
              <div className="px-5 py-4 flex flex-col relative z-10 min-w-[200px]">
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