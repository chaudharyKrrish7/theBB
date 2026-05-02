'use client';
import React, { useState, useEffect } from 'react';
import { X, Minus, MessageSquare } from 'lucide-react';

export default function ContactPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    weddingDate: '',
    guestCount: '',
    location: ''
  });

  useEffect(() => {
    const popupDismissed = sessionStorage.getItem('contactPopupDismissed');
    if (!popupDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('contactPopupDismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919599843861";
    
    const message = `*Inquiry from the Website Popup*%0A%0A` +
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[120] font-raleway select-none">
      
      {isMinimized ? (
        // 1. MINIMIZED FLOATING BUTTON
        <button 
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-3 bg-[#2D2926] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#df81a8] transition-all duration-300 animate-in slide-in-from-bottom-4 active:scale-95 border border-white/10"
        >
          <MessageSquare size={18} className="text-[#df81a8] group-hover:text-white" />
          <span className="font-zaslia text-[10px] uppercase tracking-[0.3em] font-medium pt-0.5">
            Start Your Story
          </span>
        </button>
      ) : (
        // 2. EXPANDED POPUP (The Stationery Form)
        <div className="w-[340px] md:w-[400px] bg-white rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-[#df81a8]/10 overflow-hidden animate-in slide-in-from-bottom-5 duration-500 flex flex-col">
          
          <div className="bg-[#FAF9F6] px-6 py-4 flex justify-between items-center border-b border-gray-100">
            <div className="flex flex-col">
              <span className="font-raleway text-xl text-[#df81a8] leading-none mb-0.5">the</span>
              <span className="font-raleway   tracking-widest text-[#2D2926]">Blush Bureau</span>
            </div>
            <div className="flex items-center gap-4 text-[#2D2926]/40">
              <button onClick={() => setIsMinimized(true)} className="hover:text-[#df81a8] transition-colors" title="Minimize">
                <Minus size={18} />
              </button>
              <button onClick={handleDismiss} className="hover:text-[#df81a8]transition-colors" title="Dismiss">
                <X size={18} />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-white flex flex-col gap-5 max-h-[70vh] overflow-y-auto">
            
            <p className="font-raleway italic text-[#3d3431] text-base mb-1 text-center">
              Let's begin personalizing your celebration.
            </p>

            <div className="flex flex-col gap-1.5">
              <label className="font-geist text-[9px] uppercase tracking-wider text-[#2D2926]/60 font-semibold">
                Full Name
              </label>
              <input 
                type="text" 
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Name" 
                className="border-b border-gray-200 py-1.5 outline-none focus:border-[#df81a8] transition-all text-sm font-light placeholder:text-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-geist text-[9px] uppercase tracking-wider text-[#2D2926]/60 font-semibold">
                Email Address
              </label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@example.com" 
                className="border-b border-gray-200 py-1.5 outline-none focus:border-[#df81a8]transition-all text-sm font-light placeholder:text-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-geist text-[9px] uppercase tracking-wider text-[#2D2926]/60 font-semibold">
                Phone Number
              </label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 ..." 
                className="border-b border-gray-200 py-1.5 outline-none focus:border-[#df81a8] transition-all text-sm font-light placeholder:text-gray-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-geist text-[9px] uppercase tracking-wider text-[#2D2926]/60 font-semibold">
                  Date
                </label>
                <input 
                  type="text" 
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  placeholder="e.g. Dec 2026" 
                  className="border-b border-gray-200 py-1.5 outline-none focus:border-[#df81a8] transition-all text-sm font-light placeholder:text-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-geist text-[9px] uppercase tracking-wider text-[#2D2926]/60 font-semibold">
                  Guests
                </label>
                <input 
                  type="text" 
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="Approx. count" 
                  className="border-b border-gray-200 py-1.5 outline-none focus:border-[#df81a8] transition-all text-sm font-light placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-geist text-[9px] uppercase tracking-wider text-[#2D2926]/60 font-semibold">
                Event Location
              </label>
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City or Venue" 
                className="border-b border-gray-200 py-1.5 outline-none focus:border-[#df81a8] transition-all text-sm font-light placeholder:text-gray-300"
              />
            </div>

            <button 
              type="submit" 
              className="mt-4 bg-[#2D2926] text-white py-4 rounded-full font-zaslia uppercase tracking-[0.3em] text-[10px] hover:bg-[#df81a8] transition-all shadow-md active:scale-98"
            >
              Send Details
            </button>
          </form>
        </div>
      )}
    </div>
  );
}