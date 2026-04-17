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

    
    </main>
  );
}