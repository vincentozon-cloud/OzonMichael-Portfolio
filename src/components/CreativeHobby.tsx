"use client";
import React from 'react';
import { FiCamera, FiMusic, FiPenTool, FiCompass } from 'react-icons/fi';
import GlassButton from "./GlassButton";

const hobbies = [
  {
    title: "Digital Design",
    description: "Creating visual narratives that bridge the gap between complex logic and user-friendly interfaces.",
    icon: <FiPenTool />,
    color: "text-purple-400"
  },
  {
    title: "Photography",
    description: "Capturing the 'frame'—applying the same composition principles I use in AutoCAD to real-world visuals.",
    icon: <FiCamera />,
    color: "text-pink-400"
  },
  {
    title: "Continuous Learning",
    description: "Currently exploring advanced AI integration through Coursera to sharpen the eMVeOzHub ecosystem.",
    icon: <FiCompass />,
    color: "text-green-400"
  }
];

const CreativeHobby = () => {
  return (
    <section className="py-12 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hobbies.map((hobby, index) => (
          <div key={index} className="glass-card p-8 border border-white/5 hover:border-blue-500/30 transition-all group">
            <div className={`text-4xl mb-4 ${hobby.color} group-hover:scale-110 transition-transform duration-300`}>
              {hobby.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter">
              {hobby.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center text-center space-y-6 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white italic">
          "Creativity is the engine, Code is the fuel."
        </h3>
        <p className="text-gray-400 max-w-2xl">
          Whether it is perfecting a UI layout or streamlining a sales route, I believe a creative approach is what separates a standard tool from a solution that people actually enjoy using.
        </p>
        <div className="pt-4">
          <GlassButton 
            text="Let's Brainstorm" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default CreativeHobby;