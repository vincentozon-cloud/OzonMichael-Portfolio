"use client";
import { FaShieldAlt, FaBalanceScale, FaCogs } from 'react-icons/fa';
import GlassButton from "./GlassButton";

const values = [
  {
    title: "Operational Integrity",
    description: "Inspired by the 'LocoHub Star' system, I build features like 'Breadcrumb' data paths to ensure field accuracy and accountability.",
    icon: <FaShieldAlt className="text-blue-500" />
  },
  {
    title: "Legal & Ethics (RA 8293)",
    description: "Strict adherence to the IP Code of the Philippines—reimagining project 'ideas' and delivery concepts without infringing on source code or verbatim expressions.",
    icon: <FaBalanceScale className="text-blue-500" />
  },
  {
    title: "System Resilience",
    description: "My development philosophy follows a strict fail-safe motto: If a feature doesn't work, we lose nothing. If it does, we save everything.",
    icon: <FaCogs className="text-blue-500" />
  }
];

const BeyondTheCode = () => {
  return (
    <div className="py-12 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((item, index) => (
          <div key={index} className="glass-card p-8 border-l-4 border-l-blue-600 hover:bg-blue-600/5 transition-all group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black select-none">2026</div>
        
        <div className="relative z-10 flex-1">
          <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">The Collaborative Edge</h3>
          <p className="text-gray-300 italic text-lg leading-relaxed">
            "Beyond writing logic, I focus on the 'Three-Layer' alignment: Visual precision via Figma, Operational tracking through Git-linked ticketing, and Cultural rituals like the Three Amigos sync."
          </p>
        </div>

        <div className="relative z-10">
          <GlassButton 
            text="View Integrity Standards" 
            onClick={() => console.log("Integrity standards clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default BeyondTheCode;