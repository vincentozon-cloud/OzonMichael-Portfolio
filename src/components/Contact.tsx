"use client";
import React from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import GlassButton from "./GlassButton";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Contact Information */}
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white uppercase tracking-tighter">Get In Touch</h3>
            <p className="text-gray-400 max-w-sm">
              I'm currently looking for new opportunities. Whether you have a question about a project or just want to say hi, my inbox is open.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all text-xl">
                <FiMail />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                <p className="text-white font-medium">michael.ozon@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all text-xl">
                <FiMapPin />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Location</p>
                <p className="text-white font-medium">Butuan City, Philippines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form (Glassmorphism Style) */}
        <div className="flex-[1.5] glass-card p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry" 
                className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
              <textarea 
                rows={5} 
                placeholder="How can I help you?" 
                className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Replaced standard button with GlassButton */}
            <div className="pt-2">
              <GlassButton 
                text="Send Message" 
                className="w-full py-4"
              />
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;