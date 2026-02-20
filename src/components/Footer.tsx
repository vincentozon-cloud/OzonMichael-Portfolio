"use client";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-white/5 bg-[#020617]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        
        {/* Logo and Branding */}
        <div className="text-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-400">
            eMVeOz<span className="text-white">Hub</span>
          </Link>
          <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto">
            Engineering high-integrity solutions for the next generation of sales and management systems.
          </p>
        </div>

        {/* Quick Links (Reference Video Style) */}
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link href="#skills" className="hover:text-blue-400 transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>

        {/* Professional Badge & Socials */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all text-xl">
             in
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all text-xl">
             git
          </a>
        </div>

        {/* The Motto & Copyright */}
        <div className="text-center space-y-4">
          <p className="text-blue-500/80 italic text-sm font-medium">
            "Who may ascend the mountain of the Lord? Who may stand in his holy place? The one who has clean hands and a pure heart." — Psalm 24:3-4"
          </p>
          <div className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            © {currentYear} Michael Vincent Ozon. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;