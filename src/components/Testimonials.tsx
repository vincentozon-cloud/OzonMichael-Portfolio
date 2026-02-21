"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "ReggieTech Sales and Repair Services",
    role: "Business Owner",
    category: "Web Development",
    content: "Michael delivered a lightning-fast website that significantly improved our customer reach. The SEO structure is rock-solid, and the cross-platform accessibility between mobile and desktop is seamless. He is a highly recommended developer who prioritizes performance and clean code above all else.",
    verifiedContact: "Contact details available upon request"
  },
  {
    name: "Future Focus Language Training and Institute x CamiTeachesKorean",
    role: "Business Owner & Head Teacher",
    category: "Web Development and School Platform",
    content: "A masterclass in functional design. Michael architected a high-performance system featuring secure biometric logins, a real-time enrollment calculator, and integrated Google Maps. The platform is fully English-to-Korean language ready, providing a seamless digital experience for our students from enrollment to daily attendance.",
    verifiedContact: "Contact details available upon request"
  },
  {
    name: "E. F Cabredas Land Surveying Services",
    role: "Business Owner & Geodetic Engineer",
    category: "Web Development",
    content: "Michael developed a robust platform that literally serves as my 'Digital Secretary' while I am in the field. With a custom quotation calculator, Google Maps integration, and synchronized social media reach, the site handles my lead generation and client inquiries autonomously. Highly recommended for any professional needing a high-speed, reliable digital presence.",
    verifiedContact: "Contact details available upon request"
  },
  {
    name: "Atty. Lilibeth Sanchez-Pates Law Office and Realty",
    role: "Senior Partner / Attorney",
    category: "Legal Tech & Web Infrastructure",
    content: "Professionalism and data integrity are non-negotiable in our practice. Michael delivered a sophisticated digital platform that is fast, secure, and fully compliant with technical standards. His attention to detail ensures our firm remains accessible to clients while maintaining the high-level digital security we require.",
    verifiedContact: "Contact details available upon request"
  }
];

const Testimonials = () => {
  return (
    <div className="space-y-12">
      {/* Updated to md:grid-cols-2 for a clean 2x2 grid with 4 items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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