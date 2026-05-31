"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import GlassButton from "./GlassButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lean, enterprise-focused navigation
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Credentials", href: "#credentials" }, 
    { name: "Blueprints", href: "#blueprints" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#020617]/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-400">
          eMVeOz<span className="text-white">Hub</span>
        </Link>

        <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* System Status Indicator */}
        <div className="hidden md:block scale-75 origin-right">
          <GlassButton 
            text="System Verified" 
            className="py-2 px-6 text-[10px] border-emerald-500/30 hover:bg-emerald-500/10"
            onClick={() => console.log("Infrastructure Secure. Zero Trust Enforced.")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;