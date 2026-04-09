"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4 text-zinc-900" 
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo Area */}
        <Link href="/" className="text-xl md:text-2xl font-serif tracking-widest uppercase">
          The Blush Bureau
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em]">
          <Link href="/about" className="hover:opacity-60 transition duration-300">About</Link>
          <Link href="/portfolio" className="hover:opacity-60 transition duration-300">Portfolio</Link>
          <Link href="/services" className="hover:opacity-60 transition duration-300">Services</Link>
          <Link href="/journal" className="hover:opacity-60 transition duration-300">Journal</Link>
        </div>

        {/* Contact Button / Mobile Menu Icon */}
        <div className="flex items-center gap-6">
          <Link 
            href="/contact" 
            className={`hidden md:block border px-6 py-2 text-xs uppercase tracking-widest transition duration-300 ${
              isScrolled 
                ? "border-zinc-900 hover:bg-zinc-900 hover:text-white" 
                : "border-white hover:bg-white hover:text-zinc-900"
            }`}
          >
            Inquire
          </Link>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </motion.nav>
  );
}