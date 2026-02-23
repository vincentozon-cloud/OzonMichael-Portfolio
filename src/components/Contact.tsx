"use client";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaFacebook, FaTiktok, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [renderTime, setRenderTime] = useState<number>(0);

  useEffect(() => {
    setRenderTime(Date.now());
  }, []);

  const socials = [
    { 
      icon: <FaLinkedin />, 
      link: "https://www.linkedin.com/in/michael-vincent-ozon-930962322", 
      color: "hover:text-[#0077b5]" 
    },
    { 
      icon: <FaFacebook />, 
      link: "https://www.facebook.com/emve.oz/", 
      color: "hover:text-[#1877f2]" 
    },
    { 
      icon: <FaTiktok />, 
      link: "https://www.tiktok.com/@mvozarts", 
      color: "hover:text-[#ff0050]" 
    },
    { 
      icon: <FaTelegramPlane />, 
      link: "https://t.me/eMVeOzon", 
      color: "hover:text-[#24A1DE]" 
    },
    { 
      icon: <FaEnvelope />, 
      link: "mailto:vincentozon@gmail.com", 
      color: "hover:text-emerald-500" 
    },
  ];

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(formRef.current!);
    const honeypot = formData.get("architect_verify");
    const timeElapsed = Date.now() - renderTime;

    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

    // Protection for bot spam
    if (timeElapsed < 3000) {
      console.log("Bot detected via Speed Check.");
      return;
    }

    setIsLoading(true);

    // Using your verified IDs: service_0n896yj and template_wyye1vk
    emailjs.sendForm(
      'service_0n896yj', 
      'template_wyye1vk', 
      formRef.current!, 
      'r_HBvLeVqAh7xyQau' 
    )
    .then(() => {
        setIsSubmitted(true);
        setIsLoading(false);
        formRef.current?.reset(); 
        setTimeout(() => setIsSubmitted(false), 7000);
    }, (error) => {
        console.log("Error:", error.text);
        setIsLoading(false);
        alert(`Verification failed: ${error.text}. Please check your connection or try again later.`);
    });
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-4">
             <span className="text-[10px] font-black text-emerald-400 tracking-[0.2em] uppercase">Partnership Intake</span>
          </div>
          <h2 className="text-5xl font-black text-white/90 tracking-tighter uppercase mb-4">
            Let's <span className="text-white/40 font-light italic uppercase">Start</span> Something
          </h2>
        </div>

        {/* GLASS FORM */}
        <motion.div className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            
            {/* Honeypot field for bot protection */}
            <div className="hidden" aria-hidden="true">
              <input type="text" name="architect_verify" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-1">Your Name</label>
                {/* name="name" matches {{name}} in EmailJS */}
                <input name="name" type="text" placeholder="Who are we working with?" required className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-1">The Goal</label>
                {/* name="title" matches {{title}} in EmailJS Subject Line */}
                <select name="title" className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 appearance-none">
                  <option value="Custom Solution">Build a Custom Solution</option>
                  <option value="Integrity Monitoring">Improve Integrity & Monitoring</option>
                  <option value="Collaboration">Creative Collaboration</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
                <label className="text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-1">Best way to reach you</label>
                {/* name="email" matches {{email}} in EmailJS */}
                <input name="email" type="email" placeholder="email@address.com" required className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all" />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-1">What's on your mind?</label>
                {/* name="message" matches {{message}} in EmailJS */}
                <textarea name="message" rows={4} placeholder="Tell me about your vision..." className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all resize-none" />
            </div>
            
            <button type="submit" disabled={isLoading} className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-gray-700 text-white font-bold py-5 rounded-2xl transition-all active:scale-[0.99] uppercase tracking-widest text-sm shadow-lg shadow-emerald-900/20">
              {isLoading ? "Sending..." : "Send a Message"}
            </button>
          </form>

          {/* SUCCESS POP-UP */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-6 z-50">
                <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </motion.div>
                <h4 className="text-xl font-black text-white uppercase tracking-tighter">Thanks for reaching out!</h4>
                <p className="text-gray-400 mt-2 text-sm italic font-medium">"I've received your message. Let's talk soon and see how we can build this together."</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* SOCIAL DOCK & VERSE */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex gap-8 items-center justify-center py-5 px-10 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-md mb-12">
            {socials.map((social, idx) => (
              <motion.a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" whileHover={{ y: -8, scale: 1.3 }} whileTap={{ scale: 0.9 }} className={`text-2xl text-white/30 transition-all duration-300 ${social.color}`}>
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="text-center max-w-lg">
            <p className="font-soria text-white/70 italic text-2xl leading-tight">
              "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
            </p>
            <p className="text-[10px] text-emerald-500/50 font-black tracking-[0.4em] uppercase mt-4">Proverbs 3:5-6</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;