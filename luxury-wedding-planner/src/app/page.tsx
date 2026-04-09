"use client";

import Hero from "../sections/Hero";
import { motion, Variants } from "framer-motion";

// Reusable animation setting for smooth scroll reveals
// We added the ": Variants" type here to fix the TypeScript error!
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-800">
      <Hero />
      
      {/* HELLO SECTION */}
      <section id="hello" className="py-24 md:py-32 px-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-8 text-zinc-900">Hello</h2>
          <div className="space-y-6 text-sm md:text-base leading-relaxed text-zinc-600">
            <p>Welcome to our world of timeless celebrations and unforgettable love stories. Based in Delhi NCR, we are luxury wedding planners and designers, curating bespoke weddings across India and beautiful destinations worldwide.</p>
            <p>We don’t just plan events—we create experiences that reflect who you are. Every detail, from décor to hospitality, is designed with care so your wedding feels personal, graceful, and truly memorable.</p>
            <p className="font-medium text-zinc-800">We are in the business of dreams, and it is our passion to bring your wedding dream alive with elegance and heart.</p>
          </div>
        </motion.div>
      </section>

      {/* OUR MAGIC SECTION */}
      <section className="py-24 bg-white px-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-7xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-4 text-zinc-400">Our Magic</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-6 text-zinc-900">Explore our World!</h2>
          <p className="max-w-2xl mx-auto text-zinc-600 mb-16">We feel so lucky to constantly work with such wonderful and lovely couples - Here is a selection of some of our favourite moments.</p>
          
          {/* Stunning Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
            <div 
              className="w-full h-full object-cover rounded-sm bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop')" }}
            ></div>
            <div 
              className="w-full h-full object-cover rounded-sm bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div 
              className="w-full h-full object-cover rounded-sm bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
          </div>
        </motion.div>
      </section>

      {/* WORDS OF LOVE SECTION */}
      <section className="py-32 px-6 bg-[#F4F3F0]">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-10 text-zinc-400">Words Of Love</p>
          <h3 className="font-serif text-2xl md:text-4xl leading-snug text-zinc-800 italic">
            “Your wedding is as precious to us as it is to you — we go above and beyond to make every moment breathtaking.”
          </h3>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-8 shadow-sm">
                <p className="text-sm text-zinc-600 italic">"The Blush Bureau didn't just plan our wedding; they orchestrated a masterpiece. Every detail was flawless."</p>
                <p className="text-xs uppercase tracking-widest mt-6 text-zinc-400">— A & R</p>
             </div>
             <div className="bg-white p-8 shadow-sm">
                <p className="text-sm text-zinc-600 italic">"They took all our stress away. We actually got to enjoy our own wedding knowing they had everything handled."</p>
                <p className="text-xs uppercase tracking-widest mt-6 text-zinc-400">— S & V</p>
             </div>
          </div>
        </motion.div>
      </section>

      {/* TELL US YOUR STORY SECTION */}
      <section className="py-24 md:py-32 px-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-10 text-zinc-900">Tell Us Your Story</h2>
          <div className="space-y-6 text-sm md:text-base leading-relaxed text-zinc-600 mb-12">
            <p>Every couple has a story — the little moments, the big dreams, and the vision of how you imagine the most important day of your life. Tell us yours… in your own words, your own way.</p>
            <p>Once you share your vision, consider the rest handled. From the tiniest details to the grandest experiences, we quietly take over all the stress, all the coordination, and all the madness that weddings usually bring.</p>
            <p>You get to enjoy the journey… the excitement, the emotions, the celebrations — while we work behind the scenes to make everything look effortless and beautifully put together.</p>
            <p className="font-medium text-zinc-800 pt-4">If you’re ready to begin this stress-free, luxury wedding experience…</p>
          </div>
          
          <a href="/contact" className="inline-block bg-zinc-900 text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-zinc-800 transition duration-300">
            Book Your Consultation
          </a>
        </motion.div>
      </section>

      {/* FOOTER & FOLLOW OUR JOURNEY */}
      <footer className="bg-zinc-900 text-white text-center py-20 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="text-xs uppercase tracking-[0.2em] mb-8 text-zinc-400">Follow Our Journey</p>
          
          {/* Social Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-5xl mx-auto mb-16">
            <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop')" }}></div>
          </div>

          <h3 className="font-serif text-2xl md:text-4xl italic text-zinc-300">
            At The Blush Bureau, love inspires everything we do.
          </h3>
        </motion.div>
      </footer>
    </div>
  );
}