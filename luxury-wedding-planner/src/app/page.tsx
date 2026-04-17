'use client';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const heroImage = "https://images.pexels.com/photos/17000467/pexels-photo-17000467.jpeg?_gl=1*uancot*_ga*NDE4MDcyMjAzLjE3NjY4MjkyOTQ.*_ga_8JE65Q40S6*czE3NzY0MzQ5MjEkbzgkZzEkdDE3NzY0MzUxOTYkajQ4JGwwJGgw";

  return (
    <main className="relative min-h-screen bg-[#FAF9F6]">
      <Navbar />
      
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Hero Image with a slightly softer overlay for that "Luxury" feel */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: `url('${heroImage}')`,
          }}
        />
        {/* Subtle gradient overlay: darker on the left to make the white text pop */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex flex-col items-start font-serif text-white">
            
            {/* "the" - Positioned slightly above the first 'B' */}
            <span className="text-xl md:text-3xl italic mb-[-10px] md:mb-[1px] ml-1 opacity-90 drop-shadow-md font-zaslia">
              the
            </span>
            
            {/* The "B"s are now perfectly stacked using items-start */}
            <div className="flex flex-col leading-[0.8] tracking-tighter drop-shadow-2xl ">
              <h1 style={{ fontSize: 'clamp(5rem, 18vw, 14rem)', fontFamily: 'var(--font-zaslia)' }}>
                Blush
              </h1>
              <h1 style={{ fontSize: 'clamp(5rem, 18vw, 14rem)', fontFamily: 'var(--font-zaslia)' }}>
                Bureau
              </h1>
            </div>

            {/* Subtext / Tagline */}
            <div className="mt-10 md:mt-14 max-w-sm border-l-2 border-[#E6C7C2] pl-6 py-1">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-light leading-relaxed opacity-90 drop-shadow-md font-raleway">
                Crafting <span className="italic">extraordinary</span> <br /> 
                moments for the modern romantic.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* About Section */}
<section className="relative min-h-screen bg-[#F5E6E0] py-24 px-6 md:px-16 flex items-center overflow-hidden">
  <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Side: Static Polaroids (Large & Separated) */}
    <div className="relative h-[500px] md:h-[750px] flex items-center justify-center order-2 lg:order-1">
      
      {/* Back Polaroid */}
      <div className="absolute transform -rotate-12 -translate-x-20 md:-translate-x-32 -translate-y-12 z-10">
        <div className="bg-white p-5 pb-20 shadow-[15px_15px_40px_rgba(0,0,0,0.12)]">
          <div className="w-[300px] h-[360px] md:w-[420px] md:h-[500px] overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/35872894/pexels-photo-35872894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Wedding Detail" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Front Polaroid (Lower and Right for visibility) */}
      <div className="absolute transform rotate-6 translate-x-20 md:translate-x-32 translate-y-24 md:translate-y-40 z-20">
        <div className="bg-white p-5 pb-20 shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
          <div className="w-[300px] h-[360px] md:w-[420px] md:h-[500px] overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/12200848/pexels-photo-12200848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Luxury Reception" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
{/* Right Side: Centered Content Block */}
<div className="flex flex-col items-center text-center order-1 lg:order-2">
  <br></br>
  <br></br>
  <br></br>
  <h2 className="text-[#df81a8] text-7xl md:text-[9rem] leading-none mb-10 font-amsterdam italic drop-shadow-2xl">
    Hello!
  </h2>
  <br></br>
  <br></br>
  <br></br>
  <div className="max-w-lg space-y-10">
    <h3 className="text-[#2D2926] text-2xl md:text-3xl font-raleway italic">
      Welcome to our world of timeless celebrations and unforgettable love stories.

    </h3>
    
    <div className="space-y-8 text-[#2D2926] ">
      <p className="text-base md:text-lg leading-relaxed font-raleway">
        Based in Delhi NCR, we are luxury wedding planners and designers, curating bespoke weddings across India and beautiful destinations worldwide.
We don’t just plan events—we create experiences that reflect who you are. Every detail, from décor to hospitality, is designed with care so your wedding feels personal, graceful, and truly memorable.

      </p>

      <h3 className="text-lg md:text-xl text-[#3d3431] font-raleway">
        We are in the business of dreams, and it is our passion to bring your wedding dream alive with elegance and heart.
      </h3>
    </div>
  </div>
</div>

  </div>
</section>

{/* ORGANIC MAGIC SECTION */}
<section className="relative min-h-screen w-full flex items-center justify-center py-40 px-6 md:px-0 overflow-hidden">
  
  {/* 1. Outer Background (The Pexels Floral Image) */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
    style={{ 
      backgroundImage: `url('https://images.pexels.com/photos/33485962/pexels-photo-33485962.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
    }}
  />
  {/* Subtle, cool-toned overlay to add natural contrast */}
  <div className="absolute inset-0 z-10 bg-slate-900/40 backdrop-blur-[1px]" />

  {/* 2. Main Container - Reduced Rounded Corners & Advanced Shadow */}
  <div 
    className="relative z-20 w-full md:w-[70%] lg:w-[65%] rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.3)]"
  >
    {/* Inner background image and overlay */}
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/758744/pexels-photo-758744.jpeg?auto=compress&cs=tinysrgb&w=1260')` }}
    />
    <div className="absolute inset-0 z-10 bg-white/95 backdrop-blur-[3px]" />

    {/* Content Wrapper */}
    <div className="relative z-20 p-8 md:p-16 flex flex-col items-center">
      
      {/* Heading - Zasia Font */}
      <h2 className="text-blush text-6xl md:text-[8rem] font-zaslia leading-none mb-10 text-center drop-shadow-sm">
        Our Magic
      </h2>

      {/* Text Block - Raleway & Zaslia */}
      <div className="max-w-xl text-center mb-20 space-y-5">
        <h4 className="font-zaslia  text-2xl md:text-3xl text-[#3d3431] drop-shadow-sm">
          Explore our World
        </h4>
        <p className="font-raleway text-sm md:text-base leading-relaxed text-[#2D2926] font-light opacity-100 px-3">
          We feel so lucky to constantly work with such wonderful and lovely couples—
          Here is a selection of some of our favourite moments.
        </p>
      </div>

      {/* 3. Broken Grid - Varying Widths and Vertical Offsets */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 w-full items-start">
        
        {/* Photo 1 (Spans 2 columns) */}
        <div className="md:col-span-2 overflow-hidden rounded-2xl shadow-[10px_10px_30px_rgba(0,0,0,0.15)] transform md:-rotate-1 aspect-[3/4]">
          <img 
            src="https://images.pexels.com/photos/30521152/pexels-photo-30521152.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Organic Moment 1" 
            className="w-full h-full object-cover scale-105"
          />
        </div>
        
        {/* Photo 2 (Spans 2 columns, centered vertically) */}
        <div className="md:col-span-2 overflow-hidden rounded-2xl shadow-[15px_15px_40px_rgba(0,0,0,0.2)] transform md:translate-y-12 aspect-[3/4]">
          <img 
            src="https://images.pexels.com/photos/9778787/pexels-photo-9778787.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Organic Moment 2" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Photo 3 (Spans 2 columns, higher up) */}
        <div className="md:col-span-2 overflow-hidden rounded-2xl shadow-[20px_20px_50px_rgba(0,0,0,0.25)] transform md:rotate-2 md:-translate-y-8 aspect-[3/4]">
          <img 
            src="https://images.pexels.com/photos/25677252/pexels-photo-25677252.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Organic Moment 3" 
            className="w-full h-full object-cover scale-110"
          />
        </div>
      </div>
      
      {/* Decorative Signature Spacer */}
      <div className="mt-20 w-16 h-[1px] bg-blush opacity-50 self-center" />
    </div>
  </div>
</section>

{/* TESTIMONIALS SECTION - REVERTED TO V1 */}
<section className="relative min-h-screen bg-[#F5E6E0] py-32 px-6 md:px-16 flex flex-col items-center overflow-hidden">
  
  {/* 1. Header & Quote Block */}
  <div className="max-w-4xl w-full text-center mb-24">
    <h2 className="text-blush text-6xl md:text-[8rem] font-amsterdam leading-none mb-10 drop-shadow-sm font-zaslia ">
      Words of love
    </h2>
    
    <div className="relative">
      <span className="text-blush/30 text-8xl font-serif absolute -top-10 left-0 md:left-10 opacity-100">“</span>
      <p className="font-raleway italic text-2xl md:text-4xl text-[#3d3431] leading-relaxed px-8">
        Your wedding is as precious to us as it is to you .  We go above and beyond to make every moment breathtaking.
      </p>
      <span className="text-blush/30 text-8xl font-serif absolute -bottom-20 right-0 md:right-10 opacity-100">”</span>
    </div>
  </div>

  {/* 2. Reviews & Branded Image Grid */}
  <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    
    {/* Left Side: Startup Branded Image (Spans 5 columns) */}
    <div className="lg:col-span-5 relative group">
      <div className="absolute -inset-4 border border-blush/20 rounded-2xl transform translate-x-2 translate-y-2 z-0"></div>
      <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl aspect-[4/5]">
        <img 
          src="https://images.pexels.com/photos/33636577/pexels-photo-33636577.jpeg?_gl=1*ytcwa*_ga*NDE4MDcyMjAzLjE3NjY4MjkyOTQ.*_ga_8JE65Q40S6*czE3NzY0NDk5MTQkbzEwJGcxJHQxNzc2NDUwNDQwJGo1OSRsMCRoMA.." 
          alt="The Blush Bureau Team" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <p className="absolute bottom-6 left-6 text-white font-amsterdam text-3xl">The Bureau Spirit</p>
      </div>
    </div>

    {/* Right Side: Reviews Column (Spans 7 columns) */}
    <div className="lg:col-span-7 space-y-12 py-6">
      
      {/* Review 1 */}
      <div className="border-b border-blush/20 pb-10">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-blush text-sm">★</span>
          ))}
        </div>
        <p className="font-raleway text-lg text-[#2D2926] leading-relaxed italic mb-4">
          "They didn't just plan a wedding; they curated an experience. Every detail was more beautiful than we could have ever imagined. Truly the best luxury planners in Delhi."
        </p>
        <p className="font-zaslia text-sm uppercase tracking-widest text-[#3d3431]">— Ananya & Rohan</p>
      </div>

      {/* Review 2 */}
      <div className="border-b border-blush/20 pb-10">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-blush text-sm">★</span>
          ))}
        </div>
        <p className="font-raleway text-lg text-[#2D2926] leading-relaxed italic mb-4">
          "The Blush Bureau team is incredible. Their calm energy and flawless execution allowed us to actually enjoy our day while they handled the 'magic' behind the scenes."
        </p>
        <p className="font-zaslia text-sm uppercase tracking-widest text-[#3d3431]">— Meher & Kabir</p>
      </div>

      {/* Review 3 */}
      <div className="pb-10">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-blush text-sm">★</span>
          ))}
        </div>
        <p className="font-raleway text-lg text-[#2D2926] leading-relaxed italic mb-4">
          "Elegant, heart-centered, and breathtakingly creative. If you want a wedding that feels like a dream, this is the team you need."
        </p>
        <p className="font-zaslia text-sm uppercase tracking-widest text-[#3d3431]">— Sarah & James</p>
      </div>

    </div>
  </div>

  {/* Floating Decorative Element */}
  <div className="mt-20 flex flex-col items-center">
    <div className="w-[1px] h-20 bg-gradient-to-b from-blush to-transparent"></div>
  </div>
</section>

{/* TELL US YOUR STORY SECTION */}
<section className="relative min-h-screen w-full bg-[#ffebe5] py-32 px-6 md:px-16 flex items-center justify-center overflow-hidden">
  
  {/* 1. Blended Background Image */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.05] mix-blend-luminosity"
    style={{ 
      backgroundImage: `url('https://images.pexels.com/photos/32404927/pexels-photo-32404927.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
    }}
  />

  <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
    
    {/* Left Side: Single Large Static Polaroid (Spans 5 cols) */}
    <div className="lg:col-span-5 flex justify-center lg:justify-start pt-10">
      <div className="relative transform -rotate-6">
        <div className="bg-white p-6 pb-24 shadow-[20px_20px_60px_rgba(0,0,0,0.15)] border border-white/50">
          <div className="w-[320px] h-[380px] md:w-[480px] md:h-[580px] overflow-hidden bg-[#FAF9F6]">
            <img 
              src="https://images.pexels.com/photos/17000467/pexels-photo-17000467.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Tell Us Your Story Vision" 
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
          {/* Handwritten-style caption */}
          <p className="absolute bottom-10 left-1/2 -translate-x-1/2 font-amsterdam text-blush text-4xl md:text-5xl whitespace-nowrap">The Vision</p>
        </div>
      </div>
    </div>

    {/* Right Side: Text Block & Button (Spans 7 cols) */}
    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 lg:pl-10">
      
      <div className="max-w-xl space-y-8 font-raleway text-[#2D2926] leading-relaxed opacity-100">
        <p className="text-xl md:text-2xl font-light">
          Every couple has a story — <br className="hidden md:block"/> the little moments, the big dreams, and the vision of how you imagine the most important day of your life.
        </p>
        
        <p className="font-zaslia italic text-3xl md:text-4xl text-[#3d3431] drop-shadow-sm">
          Tell us yours… in your own words, your own way.
        </p>

        <p className="text-base md:text-lg font-light">
          Once you share your vision, consider the rest handled. From the tiniest details to the grandest experiences, we quietly take over all the stress, all the coordination, and all the madness that weddings usually bring.
        </p>

        <p className="text-base md:text-lg font-light">
          You get to enjoy the journey… the excitement, the emotions, the celebrations — while we work behind the scenes to make everything look effortless and beautifully put together.
        </p>
        
        <p className="text-lg md:text-xl font-medium pt-4 text-blush">
          If you’re ready to begin this stress-free, luxury wedding experience…
        </p>
      </div>

      {/* Book a Consultation Button */}
      <button className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-full bg-[#413b3e] text-white font-zaslia tracking-widest text-sm uppercase shadow-xl transition-all duration-300 hover:bg-[#c9749a] active:scale-95">
        Book a Consultation
        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>

    </div>
  </div>
</section>

{/* FOLLOW OUR JOURNEY SECTION (Responsive Collage) */}
<section className="relative min-h-screen w-full flex justify-center pt-10 pb-32 px-4 md:px-0 overflow-hidden">
  
  {/* 1. Outer Background Image */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
    style={{ 
      backgroundImage: `url('https://images.pexels.com/photos/33417236/pexels-photo-33417236.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
    }}
  />
  <div className="absolute inset-0 z-10 bg-slate-900/50 backdrop-blur-[2px]" />

  {/* 2. Main Container (70% on desktop, wider on mobile to allow overlap space) */}
  <div 
    className="relative z-20 w-full md:w-[80%] lg:w-[70%] rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
  >
    {/* Inner background wash */}
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/758744/pexels-photo-758744.jpeg?auto=compress&cs=tinysrgb&w=1260')` }}
    />
    <div className="absolute inset-0 z-10 bg-white/95 backdrop-blur-[5px]" />

    {/* Content Wrapper */}
    <div className="relative z-20 p-6 md:p-16 flex flex-col items-center">
      
      {/* Heading - Zaslia Font */}
      <h2 className="text-blush text-5xl md:text-[7rem] font-zaslia leading-none mb-20 md:mb-24 text-center drop-shadow-sm">
        Fol low Our Journey
      </h2>

      {/* 3. The Collage Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-14 w-full items-start px-2 md:px-12">
        
        {/* Photo 1: Tilted left, slightly raised on mobile */}
        <div className="overflow-hidden rounded-xl shadow-lg transform rotate-[-4deg] -translate-y-2 md:rotate-[-2deg] md:translate-y-6 aspect-[3/4] z-20">
          <img src="https://images.pexels.com/photos/35872894/pexels-photo-35872894.jpeg?auto=compress&cs=tinysrgb&w=600" alt="J1" className="w-full h-full object-cover" />
        </div>
        
        {/* Photo 2: Tilted right, overlaps slightly left on mobile */}
        <div className="overflow-hidden rounded-xl shadow-xl transform rotate-[3deg] translate-y-4 -translate-x-2 md:rotate-[1deg] md:-translate-y-4 md:translate-x-0 aspect-[3/4] z-10">
          <img src="https://images.pexels.com/photos/30521152/pexels-photo-30521152.jpeg?auto=compress&cs=tinysrgb&w=600" alt="J2" className="w-full h-full object-cover" />
        </div>
        
        {/* Photo 3: Higher up on mobile, overlapping down */}
        <div className="overflow-hidden rounded-xl shadow-lg transform rotate-[2deg] -translate-y-8 translate-x-3 md:rotate-0 md:translate-y-10 md:translate-x-0 aspect-[3/4] z-30">
          <img src="https://images.pexels.com/photos/33636577/pexels-photo-33636577.jpeg?auto=compress&cs=tinysrgb&w=600" alt="J3" className="w-full h-full object-cover" />
        </div>
        
        {/* Photo 4: Tilted far left, tucked under on mobile */}
        <div className="overflow-hidden rounded-xl shadow-2xl transform rotate-[-6deg] translate-y-2 -translate-x-4 md:rotate-[-1deg] md:translate-y-2 md:translate-x-0 aspect-[3/4] z-0">
          <img src="https://images.pexels.com/photos/9778787/pexels-photo-9778787.jpeg?auto=compress&cs=tinysrgb&w=600" alt="J4" className="w-full h-full object-cover" />
        </div>

        {/* Photo 5: Heavy right tilt, big mobile overlap */}
        <div className="overflow-hidden rounded-xl shadow-xl transform rotate-[5deg] translate-y-10 md:rotate-[3deg] md:translate-y-16 aspect-[3/4] z-10">
          <img src="https://images.pexels.com/photos/12200848/pexels-photo-12200848.jpeg?auto=compress&cs=tinysrgb&w=600" alt="J5" className="w-full h-full object-cover" />
        </div>
        
        {/* Photo 6: Tilted left, pulled up to overlap row above */}
        <div className="overflow-hidden rounded-xl shadow-lg transform rotate-[-3deg] -translate-y-6 -translate-x-2 md:rotate-0 md:-translate-y-2 md:translate-x-0 aspect-[3/4] z-20">
          <img src="https://images.pexels.com/photos/25677252/pexels-photo-25677252.jpeg?auto=compress&cs=tinysrgb&w=600" alt="J6" className="w-full h-full object-cover" />
        </div>
        
        {/* Photo 7: Subtle tilt, centered depth */}
        <div className="overflow-hidden rounded-xl shadow-2xl transform rotate-[2deg] translate-y-4 md:rotate-[-2deg] md:translate-y-12 aspect-[3/4] z-10">
          <img src="https://images.pexels.com/photos/17000467/pexels-photo-17000467.jpeg?auto=compress&cs=tinysrgb&w=600" alt="J7" className="w-full h-full object-cover" />
        </div>
        
        {/* Photo 8: Tilted right, raised to float */}
        <div className="overflow-hidden rounded-xl shadow-lg transform rotate-[4deg] -translate-y-10 md:rotate-[2deg] md:-translate-y-8 aspect-[3/4] z-30">
          <img src="https://images.pexels.com/photos/30521152/pexels-photo-30521152.jpeg?auto=compress&cs=tinysrgb&w=600" alt="J8" className="w-full h-full object-cover" />
        </div>

      </div>
      
      {/* Decorative Signature Spacer */}
      <div className="mt-24 w-16 h-[1px] bg-[#df81a8] opacity-50" />
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