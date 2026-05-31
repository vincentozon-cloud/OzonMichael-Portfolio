"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const endpoints = [
    {
      id: "EMAIL_PROTOCOL",
      label: "Direct Email",
      value: "vincentozon@gmail.com",
      icon: <FaEnvelope className="text-3xl" />,
      link: "mailto:vincentozon@gmail.com",
      hoverRing: "group-hover:border-emerald-500/50",
      hoverBg: "group-hover:bg-emerald-500/10",
      textColor: "group-hover:text-emerald-400"
    },
    {
      id: "PROFESSIONAL_NETWORK",
      label: "LinkedIn Profile",
      value: "Michael Vincent Ozon",
      icon: <FaLinkedin className="text-3xl" />,
      link: "https://www.linkedin.com/in/michael-vincent-ozon-930962322",
      hoverRing: "group-hover:border-blue-500/50",
      hoverBg: "group-hover:bg-blue-500/10",
      textColor: "group-hover:text-blue-400"
    },
    {
      id: "CODE_REPOSITORY",
      label: "GitHub Repositories",
      value: "View Source Code",
      icon: <FaGithub className="text-3xl" />,
      link: "https://github.com/your-username", // <-- MAKE SURE TO UPDATE THIS LINK
      hoverRing: "group-hover:border-amber-500/50",
      hoverBg: "group-hover:bg-amber-500/10",
      textColor: "group-hover:text-amber-400"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-transparent relative flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-500/30 bg-slate-500/10 mb-4">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-mono font-bold text-slate-300 tracking-[0.2em] uppercase">
               Communication Endpoints
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white/90 tracking-tighter uppercase mb-4">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Contact</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            My inbox is open for opportunities in SAP Integration, Cloud Architecture, and Network Operations. No web forms—just direct lines of communication.
          </p>
        </div>

        {/* ENDPOINT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {endpoints.map((endpoint, idx) => (
            <motion.a
              key={idx}
              href={endpoint.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`group flex flex-col items-center p-8 bg-white/3 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 ${endpoint.hoverRing} ${endpoint.hoverBg}`}
            >
              <div className={`mb-6 text-slate-400 transition-colors duration-300 ${endpoint.textColor}`}>
                {endpoint.icon}
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">
                {endpoint.id}
              </span>
              <h3 className="text-lg font-bold text-slate-200 mb-1">
                {endpoint.label}
              </h3>
              <p className={`text-sm font-medium text-slate-400 transition-colors duration-300 ${endpoint.textColor}`}>
                {endpoint.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* VERSE */}
        <div className="text-center max-w-lg mx-auto pt-8 border-t border-white/10">
          <p className="font-soria text-slate-400/80 italic text-xl md:text-2xl leading-relaxed">
            "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
          </p>
          <p className="text-[10px] text-emerald-500/60 font-black tracking-[0.4em] uppercase mt-6">
            Proverbs 3:5-6
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;