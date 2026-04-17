"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Install lucide-react if you haven't

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Portfolio', 'Services', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 ${
      isScrolled || mobileMenuOpen ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm' : 'bg-transparent' 
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#E6C7C2] rounded-full  shrink-0" />
          <span className={`text-sm md:text-xl font-serif tracking-[0.3em] transition-colors  ${
            isScrolled || mobileMenuOpen ? 'text-[#2D2926]' : 'text-white '
          }`}>
            THE BLUSH BUREAU
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((item) => (
            <button key={item} className={`text-xs uppercase tracking-[0.2em] transition-colors ${
              isScrolled ? 'text-[#2D2926] hover:text-[#E6C7C2]' : 'text-white hover:text-[#E6C7C2]'
            }`}>
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-[#2D2926]" />
          ) : (
            <Menu className={isScrolled ? 'text-[#2D2926]' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FAF9F6] border-t border-gray-100 flex flex-col p-8 gap-6 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((item) => (
            <button key={item} className="text-[#2D2926] text-left text-sm uppercase tracking-widest font-light">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;