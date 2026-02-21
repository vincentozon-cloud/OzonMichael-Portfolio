"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Partner Name/Company",
    role: "Project Lead",
    category: "Web Development",
    content: "Insert the custom words here reflecting your technical delivery. Focus on the 'eMVeOzHub' integrity or the speed of the implementation.",
    verifiedContact: "Contact details available upon request"
  },
  {
    name: "Partner Name/Company",
    role: "Operations Manager",
    category: "Virtual Assistance",
    content: "Highlight your organizational skills and reliability. Perfect for showcasing your 'clean hands and pure heart' work ethic.",
    verifiedContact: "Contact details available upon request"
  },
  {
    name: "Partner Name/Company",
    role: "Legal Consultant",
    category: "Legal Support",
    content: "Words regarding your attention to detail and compliance with standards like RA 8293.",
    verifiedContact: "Contact details available upon request"
  }
];

const Testimonials = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col justify-between group transition-all duration-500 hover:bg-white/[0.05] hover:border-blue-500/30"
          >
            {/* Category Badge */}
            <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
              {t.category}
            </div>

            <div className="space-y-4">
              {/* 5 Star Rating */}
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              
              <p className="text-gray-400 italic leading-relaxed text-sm">
                "{t.content}"
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <h4 className="font-bold text-white text-base">{t.name}</h4>
              <p className="text-blue-400 text-[10px] font-bold uppercase tracking-wider">{t.role}</p>
              
              {/* Individual Verification Note */}
              <p className="mt-4 text-[9px] text-emerald-500/60 font-mono uppercase tracking-tighter">
                Verification: {t.verifiedContact}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Verification Policy Statement */}
      <div className="max-w-2xl mx-auto p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-center">
        <p className="text-xs text-emerald-400/80 font-medium">
          <span className="font-bold">INTEGRITY HANDSHAKE:</span> To protect client privacy while maintaining transparency, full contact details for the partners above are available to serious recruiters and collaborators upon request during the interview stage.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;