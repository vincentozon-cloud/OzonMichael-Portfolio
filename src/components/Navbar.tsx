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

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#projects" },
    { name: "Integrity", href: "#integrity" }, // Beyond the Code
    { name: "Journey", href: "#hobbies" },    // Creative Journey
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
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Updated 'LocoHub Star' Badge area using GlassButton logic */}
        <div className="hidden md:block scale-75 origin-right">
          <GlassButton 
            text="Partner Status" 
            className="py-2 px-6 text-[10px]"
            onClick={() => console.log("Integrity Score: 100%")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;