"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-4 ${
      isScrolled || mobileMenuOpen ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm' : 'bg-transparent' 
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand Logo - Swapped Text for Image */}
        <Link href="/" className="relative h-10 w-32 md:h-12 md:w-48 transition-all duration-500">
          <Image 
            src="/img/logo.png" 
            alt="The Blush Bureau" 
            fill 
            className={`object-contain transition-all duration-500 ${
              isScrolled || mobileMenuOpen ? '' : 'brightness-0 invert'
            }`}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300 hover:text-[#df81a8] ${
                isScrolled ? 'text-[#2D2926]' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 transition-transform active:scale-90" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-[#2D2926]" size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-[#2D2926]' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FAF9F6] border-t border-[#df81a8]/10 flex flex-col p-8 gap-8 animate-in fade-in slide-in-from-top-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#2D2926] text-left text-sm uppercase tracking-[0.4em] font-light hover:text-[#df81a8] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;