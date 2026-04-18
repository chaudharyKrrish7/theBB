"use client";
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { title: "Wedding Planning", desc: "It all begins with an idea—a feeling of how you want your day to be." },
    { title: "Budget Management", desc: "We help you spend where it matters, balancing elegance and intention." },
    { title: "Venue Search", desc: "Finding a space that feels like it was always meant to be yours." },
    { title: "Styling & Design", desc: "We design spaces that feel natural, elegant, and personal." }
  ];

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-serif text-center mb-20">Our Services</h1>

        {/* The Split Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="h-[700px] bg-stone-200 relative">
            <img src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80" className="w-full h-full object-cover shadow-2xl" />
          </div>
          <div className="pl-0 md:pl-10">
             <h2 className="text-3xl font-serif mb-6 italic">Imagine this…</h2>
             <p className="text-stone-600 text-lg leading-relaxed mb-8">
               You wake up on your wedding day, not with stress — but with a quiet sense of excitement. 
               Everything is already taken care of. You’re not running around. You’re simply… present.
             </p>
             <div className="h-[200px] bg-stone-100 p-8 border-l-4 border-stone-800">
                <p className="text-xl font-serif italic text-stone-800">
                  "This is what we create."
                </p>
             </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-stone-200 pt-20">
          {services.map((service, idx) => (
            <div key={idx} className="group cursor-default">
              <h3 className="text-xl font-serif mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}