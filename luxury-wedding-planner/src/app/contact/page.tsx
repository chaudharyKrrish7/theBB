'use client';
import React from 'react';
import Navbar from '@/components/Navbar';

export default function Contact() {
  // New architectural image URL
  const heroImgBW = "https://images.pexels.com/photos/17000467/pexels-photo-17000467.jpeg?auto=compress&cs=tinysrgb&w=1260";

  return (
    <main className="relative min-h-screen bg-[#FAF9F6] overflow-x-hidden">
      <Navbar />

      <section className="relative w-full min-h-screen flex flex-col lg:flex-row">
        
        {/* LEFT SIDE: Architectural Visual (Black & White) */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen overflow-hidden bg-[#2D2926]">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center grayscale contrast-125 opacity-80 transition-transform duration-[5000ms] hover:scale-110"
            style={{ backgroundImage: `url('${heroImgBW}')` }}
          />
          <div className="absolute inset-0 z-10 bg-black/30" />
          
          <div className="relative z-20 h-full flex flex-col justify-center px-12 md:px-24 text-white">
            <div className="border-l border-[#df81a8] pl-8 py-4">
              <h2 className="font-zaslia text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 uppercase tracking-tighter">
                Let's Begin <br />
                <span className="font-amsterdam text-[#df81a8] normal-case tracking-normal">Your Story</span>
              </h2>
              <p className="font-raleway text-xs md:text-sm uppercase tracking-[0.5em] opacity-60">
                Our Quiet Luxury, Your Legacy.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Dialogue Form */}
        <div className="relative w-full lg:w-1/2 bg-white flex items-center justify-center py-20 px-6 md:px-16 lg:px-24">
          <div className="w-full max-w-2xl space-y-12">
            
            <div className="space-y-2">
              <h3 className="font-zaslia text-3xl md:text-4xl text-[#2D2926] italic">
                The Dialogue: <span className="font-raleway not-italic font-light uppercase tracking-widest text-sm ml-4">Your Vision, Curated.</span>
              </h3>
              <div className="w-12 h-[1px] bg-[#df81a8]" />
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              
              <div className="flex flex-col gap-2">
                <label className="font-zaslia text-[10px] uppercase tracking-widest text-[#2D2926]/60">Full Name</label>
                <input type="text" placeholder="Your Name" className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#df81a8] transition-all font-raleway text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-zaslia text-[10px] uppercase tracking-widest text-[#2D2926]/60">Email Address</label>
                <input type="email" placeholder="Email Address" className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#df81a8] transition-all font-raleway text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-zaslia text-[10px] uppercase tracking-widest text-[#2D2926]/60">Phone Number</label>
                <input type="tel" placeholder="+91 ..." className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#df81a8] transition-all font-raleway text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-zaslia text-[10px] uppercase tracking-widest text-[#2D2926]/60">Partner's Name</label>
                <input type="text" placeholder="Partner's Name" className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#df81a8] transition-all font-raleway text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-zaslia text-[10px] uppercase tracking-widest text-[#2D2926]/60">Wedding Date</label>
                <input type="text" placeholder="e.g., December 2026" className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#df81a8] transition-all font-raleway text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-zaslia text-[10px] uppercase tracking-widest text-[#2D2926]/60">Guest Count</label>
                <input type="text" placeholder="Approximate number" className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#df81a8] transition-all font-raleway text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-zaslia text-[10px] uppercase tracking-widest text-[#2D2926]/60">How did you find us?</label>
                <input type="text" placeholder="Instagram, Word of mouth..." className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#df81a8] transition-all font-raleway text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-zaslia text-[10px] uppercase tracking-widest text-[#2D2926]/60">Event Location</label>
                <input type="text" placeholder="City or Venue" className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#df81a8] transition-all font-raleway text-sm" />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2 pt-4">
                <label className="font-zaslia text-[10px] uppercase tracking-widest text-[#2D2926]/60">YOUR VISION</label>
                <textarea rows={4} placeholder="Describe your dream celebration..." className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#df81a8] transition-all font-raleway text-sm resize-none" />
              </div>

              <div className="md:col-span-2 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <span className="font-amsterdam text-2xl text-[#df81a8]">Start the Creation</span>
                <button type="submit" className="w-full md:w-auto px-16 py-5 bg-[#2D2926] text-white font-zaslia uppercase tracking-[0.3em] text-[10px] hover:bg-[#df81a8] transition-all shadow-xl active:scale-95">
                  Send Your Story
                </button>
              </div>

            </form>
          </div>
        </div>

      </section>

      <footer className="bg-[#FAF9F6] py-10 text-center border-t border-gray-100">
        <p className="font-zaslia text-[10px] uppercase tracking-[0.5em] opacity-30 text-[#2D2926]">
          The Blush Bureau © 2026
        </p>
      </footer>
    </main>
  );
}