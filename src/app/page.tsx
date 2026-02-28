"use client";
import { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
// Removed useParticles since we are using Vanta
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import OngoingProjects from "@/components/OngoingProjects"; // Added OngoingProjects
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
/*import BeyondTheCode from "@/components/BeyondTheCode"; exclude for now*/
import CreativeHobby from "@/components/CreativeHobby"; 
import VerificationRibbon from "@/components/VerificationRibbon";
import Testimonials from "@/components/Testimonials";
import VantaBackground from "@/components/VantaBackground"; // Added Vanta

export default function Home() {
  // Removed canvasRef as Vanta handles its own mounting

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="relative min-h-screen bg-[#020617] text-white">
      {/* Replaced custom canvas with Vanta Background */}
      <VantaBackground />
      
      <div className="relative z-10">
        <Navbar />

        {/* 1. Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        {/* Verification Ribbon - Placed between Hero and About */}
        <VerificationRibbon />

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-32 pb-20">
          
          {/* 2. About Me */}
          <motion.section 
            id="about" 
            className="scroll-mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Changed margin to amount for better visibility
            variants={revealVariants}
          >
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold uppercase tracking-widest text-blue-400">About Me</h2>
                <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
             </div>
             <About />
          </motion.section>

          {/* 3. Skills */}
          <motion.section 
            id="skills" 
            className="scroll-mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealVariants}
          >
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold uppercase tracking-widest text-blue-400">My Skills</h2>
                <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
             </div>
             <Skills />
          </motion.section>

          {/* 4. Portfolio (Projects) */}
          <motion.section 
            id="projects" 
            className="scroll-mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealVariants}
          >
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold uppercase tracking-widest text-blue-400">Portfolio</h2>
                <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
             </div>
             <Projects />
          </motion.section>

          {/* 4.5 Ongoing Projects (The Lab) */}
          <motion.section 
            id="ongoing" 
            className="scroll-mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealVariants}
          >
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold uppercase tracking-widest text-orange-400">Current Build</h2>
                <div className="h-1 w-20 bg-orange-500 mx-auto mt-2 rounded-full"></div>
            </div>
            <OngoingProjects />
          </motion.section>

          {/* 5. Testimonials Section */}
          <motion.section 
            id="testimonials" 
            className="scroll-mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealVariants}
          >
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold uppercase tracking-widest text-blue-400">Client Feedback</h2>
                <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
            </div>
            <Testimonials />
          </motion.section>

          {/* 6. Creative Journey (Hobbies) */}
          <motion.section 
            id="hobbies" 
            className="scroll-mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealVariants}
          >
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold uppercase tracking-widest text-blue-400">Creative Journey</h2>
                <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
             </div>
             <CreativeHobby />
          </motion.section>

          {/* 7. Contact */}
          <motion.section 
            id="contact" 
            className="scroll-mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealVariants}
          >
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold uppercase tracking-widest text-blue-400">Contact</h2>
                <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
             </div>
             <Contact />
          </motion.section>

        </div>

        <Footer />
      </div>
    </main>
  );
}