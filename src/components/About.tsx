"use client";
import GlassButton from "@/components/GlassButton"; // Use absolute path

const About = () => {
  return (
    <section className="py-20 text-white">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Professional Narrative */}
        <div className="flex-1 space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">
            Connecting and Securing Enterprise Data Pipelines
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            My path into enterprise software wasn't a straight line. I started out building full-stack web applications, shifted heavily into <span className="text-white font-semibold">cybersecurity and network operations</span>, and eventually found my exact sweet spot: <span className="text-blue-400 font-bold underline decoration-blue-500/30">SAP Integration</span>. I realized that knowing how to build an app is great, but knowing how to safely route massive amounts of data between different enterprise systems is where the real challenge is.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            I don't just write theoretical code; I handle the everyday plumbing. If a customer web portal needs to drop a JSON payload into a legacy ERP system, I'm the one who maps the fields, configures the API endpoints, and sets up the OAuth security so the connection actually works without throwing critical errors.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I bring an infrastructure mindset to <span className="text-white font-semibold italic">SAP BTP</span>. By combining my background as a <span className="text-white font-semibold">Network Admin</span> with cloud security, I build data highways that are simply fail-safe by design and secure by default.
          </p>
          
          <div className="pt-4 flex gap-4">
             <div className="px-4 py-2 bg-amber-600/10 border border-amber-500/20 backdrop-blur-sm rounded-lg text-sm transition-all hover:bg-amber-600/20">
                <span className="block text-amber-400 font-bold text-xl uppercase">SAP</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Integration Suite</span>
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
              <span className="text-gray-300 text-sm font-medium">Network Admin</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-blue-400 font-bold uppercase text-[10px] tracking-widest">Background:</span>
              <span className="text-gray-300 text-sm font-medium">Network Ops • Security • SAP</span>
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