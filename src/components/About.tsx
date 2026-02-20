"use client";
import GlassButton from "./GlassButton";

const About = () => {
  return (
    <section className="py-20 text-white">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Professional Narrative */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-black text-blue-400 uppercase tracking-tight">
            Building Digital Solutions with a Field-Tested Perspective
          </h3>
          <p className="text-gray-400 leading-relaxed">
            I didn't start my career behind a terminal; I started it in the field. My time as a <span className="text-white font-semibold">Junior Salesman</span> taught me that software is only as good as the problem it solves for the user. This "human-first" mindset is what drives my work as a <span className="text-blue-400 font-bold underline decoration-blue-500/30">Jr. Full-Stack Developer</span> today.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Every project I touch benefits from the structural precision I learned as an <span className="text-white font-semibold">AutoCAD Operator</span> and the meticulous attention to detail required in <span className="text-white font-semibold">Legal Assistance</span>. I focus on creating clean, efficient code that respects Intellectual Property standards (RA 8293) and delivers a seamless experience for the end-user.
          </p>
          <p className="text-gray-400 leading-relaxed">
            By merging my real-world experience with <span className="text-white font-semibold">Professional Certifications from Coursera</span>, I offer a balanced approach to development—technical enough to build complex features, but grounded enough to remember who they are being built for.
          </p>
          
          <div className="pt-4 flex gap-4">
             <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm">
                <span className="block text-blue-400 font-bold text-xl">PRO</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-300">Coursera Verified</span>
             </div>
             <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm">
                <span className="block text-blue-400 font-bold text-xl">2026</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-300">Ready for Work</span>
             </div>
          </div>
        </div>

        {/* Right Side: Information Grid */}
        <div className="flex-1 w-full bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl glass-card">
          <div className="space-y-4">
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-blue-400 font-bold uppercase text-xs">Name:</span>
              <span className="text-gray-300 text-sm">Michael Vincent Ozon</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-blue-400 font-bold uppercase text-xs">Current Role:</span>
              <span className="text-gray-300 text-sm">Jr. Full-Stack Developer</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-blue-400 font-bold uppercase text-xs">Background:</span>
              <span className="text-gray-300 text-sm">Sales • Technical • Legal</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-blue-400 font-bold uppercase text-xs">Status:</span>
              <span className="text-green-400 text-sm font-bold uppercase">Open for Interview</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-blue-400 font-bold uppercase text-xs">Location:</span>
              <span className="text-gray-300 text-sm">Philippines</span>
            </div>
            <div className="flex pt-4">
               {/* Updated button text and targeted link */}
               <GlassButton 
                 text="Download Resume" 
                 className="w-full text-center" 
                 onClick={() => window.open('/Michael_Ozon_Resume.pdf', '_blank')}
               />
            </div>
          </div>
        </div>

      </div>
      <p className="mt-12 text-center text-gray-500 italic text-sm">
        "If it doesn't work, we lose nothing. If it does, we save everything."
      </p>
    </section>
  );
};

export default About;