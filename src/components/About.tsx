"use client";
import GlassButton from "@/components/GlassButton"; // Use absolute path

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
             <div className="px-4 py-2 bg-blue-600/10 border border-blue-500/20 backdrop-blur-sm rounded-lg text-sm transition-all hover:bg-blue-600/20">
                <span className="block text-blue-400 font-bold text-xl uppercase">Pro</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Coursera Verified</span>
             </div>
             <div className="px-4 py-2 bg-emerald-600/10 border border-emerald-500/20 backdrop-blur-sm rounded-lg text-sm transition-all hover:bg-emerald-600/20">
                <span className="block text-emerald-400 font-bold text-xl">2026</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Ready for Work</span>
             </div>
          </div>
        </div>

        {/* Right Side: Information Grid - Matching the Glassmorphism Badge Style */}
        <div className="flex-1 w-full bg-white/3 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative overflow-hidden group">
          {/* Inner Rim Light Effect */}
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-blue-400 font-bold uppercase text-[10px] tracking-widest">Name:</span>
              <span className="text-gray-300 text-sm font-medium">Michael Vincent Ozon</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-blue-400 font-bold uppercase text-[10px] tracking-widest">Current Role:</span>
              <span className="text-gray-300 text-sm font-medium">Jr. Full-Stack Developer</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-blue-400 font-bold uppercase text-[10px] tracking-widest">Background:</span>
              <span className="text-gray-300 text-sm font-medium">Sales • Technical • Legal</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-blue-400 font-bold uppercase text-[10px] tracking-widest">Status:</span>
              <span className="text-emerald-400 text-sm font-black uppercase italic tracking-tighter">Open for Interview</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-blue-400 font-bold uppercase text-[10px] tracking-widest">Location:</span>
              <span className="text-gray-300 text-sm font-medium">Philippines</span>
            </div>
            <div className="flex pt-4">
               <GlassButton 
                 text="Download Resume" 
                 className="w-full text-center" 
                 onClick={() => window.open('/Michael_Ozon_Resume.pdf', '_blank')}
               />
            </div>
          </div>
        </div>

      </div>
      <div className="mt-12 flex flex-col items-center border-t border-white/5 pt-8">
        <p className="text-center text-gray-500 italic text-[11px] lg:text-xs max-w-lg px-6 leading-relaxed">
          "Who may ascend the mountain of the Lord? Who may stand in his holy place? 
          The one who has <span className="text-emerald-500/80 not-italic font-bold">clean hands and a pure heart.</span>"
        </p>
        <p className="mt-1 text-[9px] text-gray-600 uppercase tracking-widest opacity-60">— Psalm 24:3-4</p>
      </div>
    </section>
  );
};

export default About;