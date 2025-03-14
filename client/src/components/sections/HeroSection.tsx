import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// SVG of a stylized helmet for 2D fallback
const HelmetSVG = () => (
  <svg 
    viewBox="0 0 300 300" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto my-8"
  >
    {/* Helmet base */}
    <path 
      d="M150,50 C80,50 30,120 30,200 L60,230 L240,230 L270,200 C270,120 220,50 150,50 Z" 
      fill="#8B0000" 
      stroke="#C0A080" 
      strokeWidth="3"
    />
    
    {/* Helmet crest */}
    <path 
      d="M140,50 L140,20 L160,20 L160,50" 
      fill="#FF4D4D" 
      stroke="#C0A080" 
      strokeWidth="2"
    />
    
    {/* Face shield */}
    <path 
      d="M90,140 L90,190 L210,190 L210,140 C210,100 180,80 150,80 C120,80 90,100 90,140 Z" 
      fill="#8B0000" 
      stroke="#C0A080" 
      strokeWidth="3"
    />
    
    {/* Eye slits */}
    <rect x="100" y="130" width="100" height="15" fill="#000000" />
    
    {/* Decorative circles */}
    <circle cx="75" cy="140" r="10" fill="#C0A080" />
    <circle cx="225" cy="140" r="10" fill="#C0A080" />
  </svg>
);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const helmetRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle mouse movement for the 2D helmet rotation effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!helmetRef.current) return;
    
    const rect = helmetRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (normalized to -1 to 1)
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    setMousePos({ x, y });
  };

  useEffect(() => {
    // Apply rotation based on mouse position
    if (helmetRef.current) {
      const rotateX = mousePos.y * -10; // Vertical tilt (inverted)
      const rotateY = mousePos.x * 10;  // Horizontal tilt
      
      gsap.to(helmetRef.current, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }, [mousePos]);

  useEffect(() => {
    // Parallax effect
    const parallaxElements = heroRef.current?.querySelectorAll('[data-parallax]');
    if (parallaxElements) {
      parallaxElements.forEach(element => {
        const depth = parseFloat((element as HTMLElement).dataset.parallax || '0.2');
        gsap.to(element, {
          y: `${depth * 100}%`,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }

    // Scroll progress bar
    if (scrollProgressRef.current) {
      gsap.to(scrollProgressRef.current, {
        width: '100%',
        ease: "none",
        scrollTrigger: {
          trigger: 'body',
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });
    }

    // Fade in animation
    const heroContent = heroRef.current?.querySelector('.hero-content');
    if (heroContent) {
      gsap.from(heroContent as HTMLElement, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5
      });
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16 overflow-hidden" 
      ref={heroRef}
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[#121212]/90"></div>
      
      {/* Content Overlay - adds slight gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-[#121212]/50 z-5"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-20 z-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c0a080' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
      }}></div>
      
      {/* Interaction Hint */}
      <div className="absolute top-4 left-0 right-0 text-center text-[#C0A080]/70 text-sm font-cinzel z-20">
        <span>Interactive Gladiator Helmet</span>
      </div>
      
      {/* 2D Interactive Helmet */}
      <div 
        ref={helmetRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 opacity-20 pointer-events-none select-none"
        style={{ perspective: '1000px' }}
      >
        <HelmetSVG />
      </div>
            
      {/* Content */}
      <div 
        className="container mx-auto flex flex-col items-center text-center z-10 hero-content"
        onMouseMove={handleMouseMove}
      >
        <div className="inline-block mb-2 py-1 px-3 border border-[#C0A080]/40 rounded-sm">
          <span className="text-[#C0A080] font-cinzel tracking-widest text-sm">MAY 15-17, 2025</span>
        </div>
        
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wider shadow-text">
          <span className="text-white">TECH</span><span className="text-[#FF4D4D]">URJA</span>
          <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 text-[#C0A080]">2025</span>
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-[#8B0000] to-[#C0A080] mb-8"></div>
        
        <p className="text-lg md:text-xl max-w-2xl font-opensans mb-12 text-white/80 shadow-text" data-parallax="0.1">
          Enter the colosseum of technology. Compete. Innovate. Conquer. Where modern gladiators battle with code and creativity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button 
            onClick={() => scrollToAbout()}
            className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white font-cinzel tracking-wider py-3 px-8 rounded border border-[#8B0000]/50 transition-all duration-300 shadow-lg shadow-[#8B0000]/20"
          >
            LEARN MORE
          </button>
          <button 
            onClick={() => {
              const eventsSection = document.getElementById('events');
              if (eventsSection) {
                eventsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-transparent hover:bg-[#C0A080]/10 text-[#C0A080] font-cinzel tracking-wider py-3 px-8 rounded border border-[#C0A080] transition-all duration-300"
          >
            COMPETE NOW
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <button 
          onClick={scrollToAbout}
          className="text-[#C0A080]/70 hover:text-[#C0A080] transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div 
          className="h-1 bg-gradient-to-r from-[#8B0000] to-[#C0A080] w-0" 
          ref={scrollProgressRef}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
