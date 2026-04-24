'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Contact() {
  const heroImgBW = "https://images.pexels.com/photos/17000467/pexels-photo-17000467.jpeg?auto=compress&cs=tinysrgb&w=1260";
const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // 1. State for Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    weddingDate: '',
    guestCount: '',
    location: ''
  });

  // 2. Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. WhatsApp Redirect Logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "919599843861"; // Your formatted number
    
    // Constructing the message
    const message = `*New Inquiry for The Blush Bureau*%0A%0A` +
                    `*Name:* ${formData.fullName}%0A` +
                    `*Email:* ${formData.email}%0A` +
                    `*Phone:* ${formData.phone}%0A` +
                    `*Date:* ${formData.weddingDate}%0A` +
                    `*Guests:* ${formData.guestCount}%0A` +
                    `*Location:* ${formData.location}%0A%0A` +
                    `_Sent via The Blush Bureau Website_`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="relative min-h-screen bg-[#FAF9F6] overflow-x-hidden">
      <Navbar />

      <section className="relative w-full min-h-screen flex flex-col lg:flex-row">
        
        {/* LEFT SIDE: Architectural Visual */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen overflow-hidden bg-[#2D2926]">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center grayscale contrast-125 opacity-80 transition-transform duration-[5000ms] hover:scale-110"
            style={{ backgroundImage: `url('${heroImgBW}')` }}
          />
          <div className="absolute inset-0 z-10 bg-black/30" />
          
          <div className="relative z-20 h-full flex flex-col justify-center px-12 md:px-24 text-white">
            <div className="border-l-2 border-[#df81a8] pl-8 py-6">
              <h2 className="font-zaslia text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 uppercase tracking-tighter">
                Let's Begin <br />
                <span className="font-raleway text-[#df81a8] normal-case tracking-normal">Your Story</span>
              </h2>
              <p className="font-raleway text-sm md:text-base uppercase tracking-[0.5em] opacity-70">
                Our Quiet Luxury, Your Legacy.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Dialogue Form */}
        <div className="relative w-full lg:w-1/2 bg-white flex items-center justify-center py-24 px-8 md:px-20 lg:px-32">
          <div className="w-full max-w-3xl space-y-16">
            
            <div className="space-y-4">
               <h3 className="font-zaslia text-4xl md:text-5xl text-[#2D2926] italic">
                Get in Touch
              </h3>
              <div className="w-20 h-[2px] bg-[#df81a8]" />
            </div>

            {/* 4. Added onSubmit to form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
              
              <div className="flex flex-col gap-4 group">
                <label className="font-geist text-xs uppercase tracking-[0.3em] text-[#2D2926] font-semibold">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#df81a8] transition-all font-raleway text-lg placeholder:text-gray-300" 
                />
              </div>

              <div className="flex flex-col gap-4 group">
                <label className="font-geist text-xs uppercase tracking-[0.3em] text-[#2D2926] font-semibold">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com" 
                  className="bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#df81a8] transition-all font-raleway text-lg placeholder:text-gray-300" 
                />
              </div>

              <div className="flex flex-col gap-4 group">
                <label className="font-geist text-xs uppercase tracking-[0.3em] text-[#2D2926] font-semibold">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000" 
                  className="bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#df81a8] transition-all font-raleway text-lg placeholder:text-gray-300" 
                />
              </div>

              <div className="flex flex-col gap-4 group">
                <label className="font-geist text-xs uppercase tracking-[0.3em] text-[#2D2926] font-semibold">Wedding Date</label>
                <input 
                  type="text" 
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  placeholder="e.g., December 2026" 
                  className="bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#df81a8] transition-all font-raleway text-lg placeholder:text-gray-300" 
                />
              </div>

              <div className="flex flex-col gap-4 group">
                <label className="font-geist text-xs uppercase tracking-[0.3em] text-[#2D2926] font-semibold">Guest Count</label>
                <input 
                  type="text" 
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="Approximate number" 
                  className="bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#df81a8] transition-all font-raleway text-lg placeholder:text-gray-300" 
                />
              </div>

              <div className="flex flex-col gap-4 group">
                <label className="font-geist text-xs uppercase tracking-[0.3em] text-[#2D2926] font-semibold">Event Location</label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City or Venue" 
                  className="bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#df81a8] transition-all font-raleway text-lg placeholder:text-gray-300" 
                />
              </div>

              <div className="md:col-span-2 pt-12 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex flex-col items-center md:items-start">
                    <span className="font-raleway text-3xl text-[#df81a8]">Start the Creation</span>
                    <p className="font-raleway text-[10px] uppercase tracking-[0.2em] opacity-100 mt-1">We typically respond within 24 hours</p>
                </div>
                {/* 5. Submit button will now trigger handleSubmit */}
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-20 py-6 bg-[#2D2926] text-white font-zaslia uppercase tracking-[0.4em] text-xs hover:bg-[#df81a8] transition-all shadow-[0_15px_30px_rgba(0,0,0,0.1)] active:scale-95"
                >
                  Send 
                </button>
              </div>

            </form>
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