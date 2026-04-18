'use client';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
export default function About() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const aboutHeroImage = "https://images.pexels.com/photos/36249009/pexels-photo-36249009.jpeg?auto=compress&cs=tinysrgb&w=1920";
  const philosophyImage = "https://images.pexels.com/photos/11370446/pexels-photo-11370446.jpeg?auto=compress&cs=tinysrgb&w=1260";

  return (
    <main className="relative min-h-screen bg-[#FAF9F6]">
      <Navbar />

      {/* 1. 60% HERO SECTION */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${aboutHeroImage}')` }}
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#FAF9F6]/20" />

        <div className="relative z-20 text-center px-6">
          <h1 className="text-[#d694af] text-7xl md:text-[9rem] font-zaslia mb-6 drop-shadow-2xl">
            About Us
          </h1>
          <p className="font-zaslia italic text-2xl md:text-4xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            "In the midst of everyday moments, <br className="hidden md:block" /> 
            love found us and wrote a fairy tale."
          </p>
        </div>
      </section>

      {/* 2. HEADING SECTION */}
      <section className="relative w-full bg-[#FAF9F6] flex flex-col items-center pt-24 px-6 md:px-16">
        <h2 className="text-[#df81a8] text-6xl md:text-[8rem] lg:text-[9rem] font-zaslia leading-none mb-12 text-center drop-shadow-sm">
          Get to know Us
        </h2>
        <div className="w-16 h-[1px] bg-[#df81a8] opacity-40 mb-24"></div>
      </section>
<br /><br />
      {/* 3. PHILOSOPHY SECTION (Split Layout with New Image) */}
      <section className="relative min-h-screen w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left Side: Full Screen Image */}
        <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">
          <img 
            src={philosophyImage}
            alt="The Blush Bureau Detail" 
            className="w-full h-full object-cover grayscale-[5%] transition-transform duration-[2000ms] hover:scale-105"
          />
        </div>

        {/* Right Side: Text Block */}
        <div className="flex items-center justify-center bg-[#FAF9F6] py-20 px-8 md:px-20 lg:px-32">
          <div className="max-w-xl space-y-10 text-[#2D2926]">
            
            <p className="font-raleway text-lg md:text-xl leading-relaxed font-light">
              At <span className="text-[#df81a8] font-semibold">The Blush Bureau</span>, weddings are not just events — they’re emotions, moments, and memories in the making. Our boutique approach blends refined planning with design-led creativity, ensuring every celebration feels personal, elegant, and beautifully curated.
            </p>

            <p className="font-raleway text-base md:text-lg leading-relaxed font-light opacity-90">
              Whether it’s a dreamy outdoor ceremony or an intimate home wedding, we handle it all — venue coordination, hospitality, décor styling, florals, guest experiences, and seamless execution at every step.
            </p>

            <div className="space-y-4">
              <h3 className="font-zaslia italic text-3xl md:text-4xl text-[#3d3431] leading-tight">
                We believe true luxury lies in the details.
              </h3>
              <p className="font-raleway text-base md:text-lg leading-relaxed font-light opacity-90">
                Every colour, every texture, every moment is thoughtfully planned to reflect your story with grace and intention.
              </p>
            </div>

            <p className="font-zaslia text-xl md:text-2xl text-[#df81a8] leading-relaxed pt-6 border-t border-[#df81a8]/20">
              With us, your wedding is not merely organised — <br/> 
              it is curated, crafted, and cherished.
            </p>
          </div>
        </div>
      </section>
{/* 4. OUR STORY SECTION (Linen Background) */}
      <section className="relative py-32 md:py-48 px-6 md:px-16 bg-[#F5E6E0] flex flex-col items-center overflow-hidden">
        {/* Subtle Decorative element */}
        <div className="absolute top-10 left-10 text-[#df81a8]/10 font-amsterdam text-[15rem] select-none pointer-events-none">Story</div>
        
        <div className="relative z-10 max-w-4xl w-full text-center space-y-12">
          <h2 className="text-[#df81a8] text-6xl md:text-[8rem] font-zaslia leading-none mb-4 drop-shadow-sm">
            Here is our story
          </h2>
          
          <div className="space-y-8 text-[#2D2926] font-raleway text-lg md:text-xl leading-relaxed font-light">
            <p>
              The Blush Bureau began with a simple idea — that weddings should feel personal, beautiful, and thoughtfully designed, not rushed or templated.
            </p>
            
            <p className="font-zaslia italic text-2xl md:text-3xl text-[#3d3431] py-4">
              What started as a passion shared by Sakshi & Piyush soon grew into a boutique wedding planning studio trusted for its refined aesthetics and heartfelt approach.
            </p>

            <p>
              We wanted to build a space where couples felt understood, cared for, and creatively inspired — a space where every celebration felt like a work of art. From our first wedding to the many we’ve curated since, our philosophy has remained the same: design with intention, plan with precision, and execute with warmth.
            </p>

            <p>
              We believe every couple has a unique story, and our job is to translate that story into an unforgettable celebration — through colours, textures, florals, hospitality, and seamless flow of moments.
            </p>

            <p>
              Over time, The Blush Bureau has evolved into a design-led studio known for its calm elegance, personalised touch, and meticulous attention to detail. But at heart, we are still the same — two people who love weddings, love storytelling, and love creating magic for the families we work with.
            </p>

            <div className="pt-10 flex flex-col items-center space-y-4">
              <p className="font-amsterdam text-[#df81a8] text-5xl md:text-6xl">This is our story.</p>
              <p className="font-zaslia uppercase tracking-[0.4em] text-xs md:text-sm opacity-60">And we can’t wait to be a part of yours.</p>
            </div>
          </div>
        </div>
      </section>

     {/* FOOTER SECTION */}
      <footer className="relative w-full bg-[#2D2926] text-[#FAF9F6] py-20 px-6 md:px-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-10 grayscale"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/36249009/pexels-photo-36249009.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="absolute inset-0 z-10 bg-black/40" />

        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            <div className="md:col-span-3 space-y-6">
              <h4 className="font-zaslia text-xs uppercase tracking-[0.3em] text-[#df81a8]">Navigate</h4>
              <ul className="space-y-4 font-raleway text-sm opacity-80">
                <li className="hover:text-[#df81a8] transition-colors cursor-pointer">Home</li>
                <li className="hover:text-[#df81a8] transition-colors cursor-pointer">Our Story</li>
                <li className="hover:text-[#df81a8] transition-colors cursor-pointer">The Magic</li>
                <li className="hover:text-[#df81a8] transition-colors cursor-pointer">Words of Love</li>
                <li className="hover:text-[#df81a8] transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div className="md:col-span-6 flex flex-col items-center text-center space-y-8 border-y md:border-y-0 md:border-x border-[#FAF9F6]/10 py-12 md:py-0 px-4">
              <div className="flex flex-col items-center">
                <span className="font-amsterdam text-2xl text-[#df81a8] mb-[-10px]">the</span>
                <h2 className="font-zaslia text-5xl md:text-6xl tracking-tight">Blush Bureau</h2>
              </div>
              <div className="space-y-2 font-raleway text-sm opacity-90 max-w-xs">
                <p>Based in Delhi NCR</p>
                <p>Curating Bespoke Luxury Weddings Worldwide</p>
              </div>
              <div className="flex gap-8 items-center pt-4">
                <a href="#" className="hover:text-[#df81a8] transition-all transform hover:scale-110">Instagram</a>
                <a href="#" className="hover:text-[#df81a8] transition-all transform hover:scale-110">Pinterest</a>
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col items-center md:items-end text-center md:text-right space-y-6">
              <h4 className="font-zaslia text-xs uppercase tracking-[0.3em] text-[#df81a8]">Get in Touch</h4>
              <div className="space-y-4 font-raleway text-sm opacity-80">
                <p className="hover:text-[#df81a8] cursor-pointer">hello@theblushbureau.com</p>
                <div className="pt-4 space-y-1">
                  <p className="text-[#df81a8] font-zaslia italic">Hours</p>
                  <p>Mon — Fri: 10am - 7pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-[#FAF9F6]/10 flex flex-col md:flex-row justify-between items-center gap-4 font-raleway text-[10px] uppercase tracking-widest opacity-40">
            <p>© 2026 The Blush Bureau. All Rights Reserved.</p>
            <div className="flex gap-6">
              <p className="cursor-pointer hover:text-white">Privacy Policy</p>
              <p className="cursor-pointer hover:text-white">Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ENLARGED IMAGE MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl cursor-zoom-out p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img src={selectedImage + "?auto=compress&cs=tinysrgb&w=1200"} className="rounded-lg shadow-2xl max-h-[90vh] object-contain" />
          </div>
        </div>
      )}
    </main>
  );
}