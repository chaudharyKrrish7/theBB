"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Animated Text Content */}
      <div className="relative z-10 text-center text-white px-6 mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6"
        >
          Timeless Celebrations
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl max-w-4xl mx-auto leading-tight"
        >
          Unforgettable Love Stories
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <a 
            href="#hello" 
            className="inline-block border border-white/50 px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-zinc-900 transition-all duration-500 backdrop-blur-sm"
          >
            Enter Our World
          </a>
        </motion.div>
      </div>
    </section>
  );
}