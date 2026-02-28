"use client";
import { motion } from 'framer-motion';
import { Activity, ShoppingCart, ShieldCheck, Zap, Heart } from 'lucide-react';

const OngoingProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Project Card: eMVeOzHub POS */}
      <div className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/50 transition-all duration-500">
        <div className="absolute -top-4 -right-4 bg-blue-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
          Active R&D
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">eMVeOzHub: POS</h3>
        <p className="text-gray-400 text-sm mb-6">
          Built for businesses to provide high-efficiency solutions for automated cashiering and real-time inventory management.
        </p>

        <div className="space-y-4">
          {/* Feature 1: Automated Cashiering */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <ShoppingCart className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Automated Cashiering</h4>
              <p className="text-gray-500 text-xs">Streamlined checkout logic to reduce human error and speed up transactions.</p>
            </div>
          </div>

          {/* Feature 2: Inventory Solution */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Zap className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Inventory Solutions</h4>
              <p className="text-gray-500 text-xs">Real-time stock synchronization across relational database rows.</p>
            </div>
          </div>

          {/* Feature 3: Integrity Scoring */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Business Integrity Logic</h4>
              <p className="text-gray-500 text-xs">Proprietary "LocoHub Star" scoring for performance and audit transparency.</p>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-8">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-blue-400 font-mono">Core Engine: Functional</span>
            <span className="text-gray-500">85%</span>
          </div>
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '85%' }}
              transition={{ duration: 1.5 }}
              className="h-full bg-blue-500"
            />
          </div>
        </div>
        {/* Source Request Button */}
        <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono text-gray-300">Next.js</span>
                <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono text-gray-300">Supabase</span>
            </div>
  
         <button 
            disabled
                className="text-[10px] font-bold uppercase tracking-widest text-blue-400 border border-blue-400/30 px-3 py-1 rounded hover:bg-blue-400/10 transition-colors cursor-help"
                title="Proprietary code. Access granted to partners/recruiters upon request.">
                Source: Request Access
        </button>
        </div>
      </div>

      {/* Project Card: Kei's Collection & Boutique */}
      <div className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-pink-500/50 transition-all duration-500">
        <div className="absolute -top-4 -right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-pink-500/20">
          Sprint Starts: March 2
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">Kei's Collection & Boutique</h3>
        <p className="text-gray-400 text-sm mb-6">
          A Luxury E-Commerce & Live Auction platform featuring signature dresses, jewelry, and AI-driven concierge services.
        </p>

        <div className="space-y-4">
          {/* Feature 1: Real-time Bidding */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-pink-500/20 rounded-lg">
              <Zap className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Dynamic Auction Engine</h4>
              <p className="text-gray-500 text-xs">Real-time bidding logic for exclusive signature pieces and high-end jewelry.</p>
            </div>
          </div>

          {/* Feature 2: AI Concierge */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">AI Boutique Concierge</h4>
              <p className="text-gray-500 text-xs">A specialized AI assistant for styling recommendations and product inquiries.</p>
            </div>
          </div>

          {/* Feature 3: End-to-End Checkout */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <ShoppingCart className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Luxury Checkout System</h4>
              <p className="text-gray-500 text-xs">Seamless basket and order placement with automated inventory syncing.</p>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-8">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-pink-400 font-mono">Status: Design & Logic Mapping</span>
            <span className="text-gray-500">10%</span>
          </div>
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '10%' }}
              transition={{ duration: 1.5 }}
              className="h-full bg-pink-500"
            />
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono text-gray-300">Next.js</span>
                <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono text-gray-300">AI Integration</span>
            </div>
            <Heart className="w-4 h-4 text-pink-500/50" />
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;