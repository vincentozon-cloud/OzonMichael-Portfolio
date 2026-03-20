"use client";
import Typewriter from 'typewriter-effect';
import GlassButton from "@/components/GlassButton";

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 pt-20">
      
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20">
        
        {/* Left Column: Introduction & Typewriter */}
        <div className="z-10 flex-[1.2] text-center md:text-left order-2 md:order-1 space-y-1">
          
          <span className="text-white text-2xl md:text-2xl lg:text-4xl font-medium block font-soria">
            Hi! I'm
          </span>

          <h2 className="text-blue-400 text-3xl md:text-3xl lg:text-5xl font-black tracking-tight uppercase pb-4">
            Michael Vincent Ozon
          </h2>
          
          <h1 className="tracking-tight leading-[1.1] pt-2">
            <span className="text-white text-2xl md:text-2xl lg:text-4xl font-medium block mb-2 font-soria">
              I am a
            </span>
            
            <span className="block text-xl md:text-4xl lg:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#03ccff] to-[#09fbff] min-h-[1.2em] whitespace-nowrap">
              <Typewriter
                options={{
                  strings: [
                    'CLOUD CYBERSECURITY ANALYST', 
                    'ASPIRING DevSecOps ENGINEER', 
                    'FULL-STACK DEVELOPER', 
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                  deleteSpeed: 20,
                  pauseFor: 3500,
                } as any}
              />
            </span>
          </h1>
          
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 text-lg md:text-xl leading-relaxed pb-8 pt-4">
            Motivated by a profound passion for technology and a strong willingness to learn. 
            Ready to deploy high-integrity solutions for 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <GlassButton 
              text="View Projects" 
              onClick={() => scrollTo('projects')}
            />
            <GlassButton 
              text="Contact Me" 
              onClick={() => scrollTo('contact')}
            />
          </div>
        </div>

        {/* Right Column: Optimized Hexagonal Profile Picture */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2 z-10">
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-cyan-500 clip-path-hexagon blur-2xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            <div className="relative w-72 h-80 md:w-96 md:h-112 bg-blue-600 clip-path-hexagon flex items-center justify-center p-1">
               <div className="w-full h-full bg-[#050505] clip-path-hexagon flex items-center justify-center overflow-hidden p-3 md:p-4">
                  <img 
                    src="/me.jpg" 
                    alt="Michael Vincent Ozon" 
                    className="w-full h-full object-cover clip-path-hexagon group-hover:scale-110 transition-transform duration-700"
                  />
               </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;