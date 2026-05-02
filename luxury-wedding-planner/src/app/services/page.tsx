'use client';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Services() {
  // Image Assets
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const servicesHeroImg = "https://images.pexels.com/photos/24334706/pexels-photo-24334706.jpeg?auto=compress&cs=tinysrgb&w=1920";
  const imgFeeling = "https://images.pexels.com/photos/12200848/pexels-photo-12200848.jpeg?auto=compress&cs=tinysrgb&w=800"; 
  const imgCraft = "https://images.pexels.com/photos/35872894/pexels-photo-35872894.jpeg?auto=compress&cs=tinysrgb&w=800"; 
  const ctaBg = "https://images.pexels.com/photos/36760992/pexels-photo-36760992.jpeg?auto=compress&cs=tinysrgb&w=1920";

  return (
    <main className="relative min-h-screen bg-[#FAF9F6] text-[#2D2926]">
      <Navbar />

      {/* 1. 60% HERO SECTION (Exact Match to About Us Layout) */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image - Lowered Saturation for Luxury Feel */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat saturate-[0.6]"
          style={{ backgroundImage: `url('${servicesHeroImg}')` }}
        />
        
        {/* Dark overlay for text clarity */}
        <div className="absolute inset-0 z-10 bg-black/50" />
        
        {/* Minimal blend effect (Matches About Us) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#FAF9F6]/20" />

        <div className="relative z-20 text-center px-6">
          <h1 className="text-[#ffffff] text-7xl md:text-[9rem] font-zaslia mb-6 drop-shadow-2xl">
          Our Services
          </h1>
          <p className="font-raleway italic text-2xl md:text-4xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            “A wedding is a feeling… <br className="hidden md:block" /> 
            and we’re here to bring that feeling to life.”
          </p>
        </div>
      </section>

      {/* 2. IMAGINE THIS SECTION (Polaroid Left, Text Right) */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="bg-white p-4 pb-20 shadow-[20px_20px_60px_rgba(0,0,0,0.06)] transform -rotate-2 border border-gray-50">
            <div className="w-[320px] h-[400px] md:w-[420px] md:h-[520px] overflow-hidden">
              <img src={imgFeeling} alt="The Feeling" className="w-full h-full object-cover" />
            </div>
            <p className="mt-8 font-amsterdam text-3xl text-[#df81a8] text-center">The Feeling</p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="font-zaslia text-[#df81a8] text-5xl md:text-6xl">Imagine this…</h2>
          <div className="space-y-6 font-raleway text-lg md:text-xl leading-relaxed font-light">
            <p>You wake up on your wedding day, not with stress — but with a quiet sense of excitement.</p>
            <p className="font-raleway italic text-2xl md:text-3xl text-[#3d3431]">Everything is already taken care of.</p>
            <p>Every detail you didn’t even think of… thoughtfully planned, beautifully executed.</p>
            <div className="space-y-2">
              <p>You’re not running around.</p>
              <p>You’re not answering calls.</p>
              <p className="text-[#df81a8] font-medium text-2xl">You’re simply… present.</p>
            </div>
            <p className="font-raleway uppercase tracking-[0.3em] text-xs pt-4 opacity-100 leading-loose">
              Present in the moment. <br />
              Present with your people. <br />
              Present in one of the most important days of your life.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE CREATE SECTION (Text Left, Polaroid Right) */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <h2 className="font-zaslia italic text-4xl md:text-5xl text-[#3d3431] leading-tight">This is what <br /> we create.</h2>
          <div className="space-y-6 font-raleway text-lg md:text-xl leading-relaxed font-light">
            <p>At <span className="text-[#df81a8] font-semibold">The Blush Bureau</span>, we don’t just plan weddings — We curate experiences that feel effortless, intimate, and deeply personal.</p>
            <p>Every celebration is designed to reflect you — your story, your taste, your energy.</p>
            <div className="pt-4 space-y-2">
                <p className="font-zaslia text-xs uppercase tracking-widest opacity-60">No templates. No repetition.</p>
                <p className="font-raleway text-4xl text-[#3d3431]">Only bespoke, refined experiences.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="bg-white p-4 pb-20 shadow-[20px_20px_60px_rgba(0,0,0,0.06)] transform rotate-3 border border-gray-50">
            <div className="w-[320px] h-[400px] md:w-[420px] md:h-[520px] overflow-hidden">
              <img src={imgCraft} alt="The Craft" className="w-full h-full object-cover" />
            </div>
            <p className="mt-8 font-amsterdam text-3xl text-[#df81a8] text-center">The Craft</p>
          </div>
        </div>
      </section>

      {/* 4. THE SIX PILLARS */}
<section className="py-32 px-6 md:px-16 bg-[#F5E6E0]">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Heading */}
    <div className="flex flex-col items-center mb-24 text-center">
      <span className="font-zaslia text-[10px] uppercase tracking-[0.5em] text-[#3d3431] opacity-100 mb-4">
        Our Offerings
      </span>
      <h2 className="text-[#df81a8] text-6xl md:text-[8rem] font-zaslia leading-none drop-shadow-sm">
        Make it stand out!
      </h2>
      <div className="w-16 h-[1px] bg-[#df81a8] opacity-30 mt-10"></div>
    </div>

    {/* Pillars Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
      {[
        { title: "Wedding Planning", desc: "It all begins with an idea — a feeling of how you want your day to be. We take that vision and quietly shape it into a celebration that feels effortless, refined, and truly yours." },
        { title: "Budget Management", desc: "Behind every beautiful wedding is a thoughtful plan. We help you spend where it matters, creating a balance between elegance and intention — without the overwhelm." },
        { title: "Venue Search", desc: "The right space changes everything. We help you find a venue that doesn’t just fit your wedding — but feels like it was always meant to be yours." },
        { title: "Setup & Coordination", desc: "While everything comes together in the background, you stay in the moment. We ensure every detail flows seamlessly, so your day unfolds exactly as it should." },
        { title: "Styling & Design", desc: "It’s not about doing more — it’s about doing it right. We design spaces that feel natural, elegant, and deeply personal to your story." },
        { title: "Guest Hospitality", desc: "A wedding is as much about your guests as it is about you. We take care of every touchpoint, so everyone feels welcomed, comfortable, and part of something special." }
      ].map((service, idx) => (
        <div key={idx} className="space-y-6 group">
          <div className="flex items-center gap-4">
            <span className="text-[#df81a8] font-zaslia text-xs tracking-widest opacity-40">0{idx + 1}</span>
            <div className="h-[1px] w-8 bg-[#df81a8]/20 group-hover:w-12 transition-all" />
          </div>
          <h3 className="font-zaslia italic text-3xl text-[#3d3431] group-hover:text-[#df81a8] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="font-raleway text-base leading-relaxed text-[#2D2926] font-light opacity-80">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 5. FINAL CTA SECTION */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center fixed"
          style={{ backgroundImage: `url('${ctaBg}')` }}
        />
        <div className="absolute inset-0 z-10 bg-black/70 backdrop-blur-[1px]" />

        <div className="relative z-20 max-w-4xl text-center px-6 text-white space-y-12">
          <div className="space-y-4">
            <h2 className="font-zaslia text-[#ffa4dc] text-6xl md:text-8xl">Tell us your story…</h2>
            <p className="font-zaslia uppercase tracking-[0.4em] text-[10px] md:text-xs opacity-80">Luxury Wedding Planning, Styling & Design</p>
          </div>
          <div className="space-y-8 font-raleway text-lg md:text-xl leading-relaxed font-light">
            <p>Every wedding begins with a story. Yours deserves to be told with intention, elegance, and quiet attention to detail.</p>
            <p className="font-zaslia italic text-2xl md:text-3xl text-[#ffa4dc] pt-4">Because your wedding isn’t just a day — it’s a memory you’ll carry for a lifetime.</p>
          </div>
          <div className="pt-10">
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank"
              className="px-12 py-5 rounded-full bg-[#000000] text-white font-zaslia tracking-[0.3em] text-[10px] uppercase shadow-2xl transition-all hover:bg-[#f1aecc] hover:scale-105"
            >
              Book a Consultation
            </a>
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
              <h4 className="font-zaslia text-xs uppercase tracking-[0.3em] text-[#df81a8]"></h4>
              <ul className="space-y-4 font-raleway text-sm opacity-80">
                <li className="hover:text-[#df81a8] transition-colors cursor-pointer"></li>
                <li className="hover:text-[#df81a8] transition-colors cursor-pointer"></li>
                <li className="hover:text-[#df81a8] transition-colors cursor-pointer"></li>
                <li className="hover:text-[#df81a8] transition-colors cursor-pointer"></li>
                <li className="hover:text-[#df81a8] transition-colors cursor-pointer"></li>
              </ul>
            </div>
            <div className="md:col-span-6 flex flex-col items-center text-center space-y-8 border-y md:border-y-0 md:border-x border-[#FAF9F6]/10 py-12 md:py-0 px-4">
              <div className="flex flex-col items-center">
                <span className="font-amsterdam text-2xl text-[#df81a8] mb-[-10px]">the</span>
                <h2 className="font-zaslia text-5xl md:text-6xl tracking-tight">Blush Bureau</h2>
              </div>
              <div className="space-y-2 font-raleway text-sm opacity-90 max-w-xs">
                <p>Based in Delhi NCR</p>
                <p>+91 95998 43861</p>
              </div>
              <div className="flex gap-8 items-center pt-4">
                <a href="#" className="hover:text-[#df81a8] transition-all transform hover:scale-110">Instagram</a>
                <a href="#" className="hover:text-[#df81a8] transition-all transform hover:scale-110">Pinterest</a>
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col items-center md:items-end text-center md:text-right space-y-6">
              <h4 className="font-zaslia text-xs uppercase tracking-[0.3em] text-[#df81a8]"></h4>
              <div className="space-y-4 font-raleway text-sm opacity-80">
                <p className="hover:text-[#df81a8] cursor-pointer"></p>
                <div className="pt-4 space-y-1">
                  <p className="text-[#df81a8] font-zaslia italic"></p>
                  <p></p>
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