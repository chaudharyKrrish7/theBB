import Navbar from '@/components/Navbar';

export default function Home() {
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

    
    </main>
  );
}