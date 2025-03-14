import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const sketchfabRef = useRef<HTMLIFrameElement>(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [rotateModel, setRotateModel] = useState(false);

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

    // Setup event listener for the iframe to track when it's loaded
    const iframe = sketchfabRef.current;
    if (iframe) {
      iframe.addEventListener('load', () => {
        setModelLoaded(true);
      });

      // Set up the Sketchfab API connection
      window.addEventListener('message', handleSketchfabMessage);
    }

    return () => {
      window.removeEventListener('message', handleSketchfabMessage);
    };
  }, []);

  // Handle messages from the Sketchfab API
  const handleSketchfabMessage = (event: MessageEvent) => {
    const iframe = sketchfabRef.current;
    
    // Make sure the message is from Sketchfab
    if (iframe && event.source === iframe.contentWindow) {
      const data = event.data;
      
      // Check if the API is ready
      if (data.type === 'INITIALIZED') {
        // The API is ready, you can start interacting with the model
        setModelLoaded(true);
      }
    }
  };

  // Handle mouse movement to control model rotation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!modelLoaded || !rotateModel) return;

    const iframe = sketchfabRef.current;
    if (!iframe || !iframe.contentWindow) return;

    const rect = iframe.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Calculate rotation based on mouse position (offset from center)
    const rotX = (y - 0.5) * 2; // Vertical axis rotation factor
    const rotY = (x - 0.5) * 2; // Horizontal axis rotation factor

    // Create a camera position that orbits around the model based on mouse position
    // The 3D position is calculated using trigonometric functions to create an orbit effect
    const cameraDistance = 1.5; // Distance from center
    const cameraX = Math.sin(rotY * Math.PI) * cameraDistance;
    const cameraY = Math.sin(rotX * Math.PI) * cameraDistance;
    const cameraZ = Math.cos(rotY * Math.PI) * cameraDistance;

    // Send a postMessage to the Sketchfab iframe to update the camera position
    iframe.contentWindow.postMessage({
      type: 'SET_CAMERA_LOOK_AT',
      eye: [cameraX, cameraY, cameraZ], // Camera position
      target: [0, 0, 0],                // Look at center of model
      up: [0, 1, 0]                     // Up vector defines "up" direction
    }, '*');
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16 overflow-hidden" ref={heroRef}>
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "linear-gradient(rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.9)), url('https://images.unsplash.com/photo-1590177600189-8222d0a634b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundAttachment: "fixed" 
        }}
      ></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c0a080' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
      }}></div>
      
      {/* 3D Model Container */}
      <div 
        className="hidden md:block absolute top-[15%] right-[5%] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] z-20"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setRotateModel(true)}
        onMouseLeave={() => setRotateModel(false)}
      >
        <div className="sketchfab-embed-wrapper w-full h-full"> 
          <iframe 
            ref={sketchfabRef}
            title="Black Gladiator Helmet" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            className="w-full h-full"
            src="https://sketchfab.com/models/e91078291f254e5d861dbbf4f588ef13/embed?autostart=1&ui_infos=0&ui_controls=0&ui_stop=0&ui_inspector=0&ui_watermark=0&ui_watermark_link=0"
          />
        </div>
        <div className="absolute bottom-[-30px] left-0 right-0 text-center text-[#C0A080]/60 text-xs">
          <span>Mouse over to control helmet</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto flex flex-col items-center text-center z-10 hero-content">
        <div className="inline-block mb-2 py-1 px-3 border border-[#C0A080]/40 rounded-sm">
          <span className="text-[#C0A080] font-cinzel tracking-widest text-sm">MAY 15-17, 2025</span>
        </div>
        
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wider">
          <span className="text-white">TECH</span><span className="text-[#FF4D4D]">URJA</span>
          <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 text-[#C0A080]">2025</span>
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-[#8B0000] to-[#C0A080] mb-8"></div>
        
        <p className="text-lg md:text-xl max-w-2xl font-opensans mb-12 text-white/80" data-parallax="0.1">
          Enter the colosseum of technology. Compete. Innovate. Conquer. Where modern gladiators battle with code and creativity.
        </p>
        
        {/* Mobile Only 3D Model */}
        <div className="md:hidden w-[250px] h-[250px] mb-8">
          <div className="sketchfab-embed-wrapper w-full h-full"> 
            <iframe 
              title="Black Gladiator Helmet Mobile View" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; fullscreen; xr-spatial-tracking" 
              className="w-full h-full"
              src="https://sketchfab.com/models/e91078291f254e5d861dbbf4f588ef13/embed?autostart=1&ui_infos=0&ui_controls=1&ui_stop=0&ui_inspector=0"
            />
          </div>
        </div>
        
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
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button 
          onClick={scrollToAbout}
          className="text-[#C0A080]/70 hover:text-[#C0A080] transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div 
          className="h-1 bg-gradient-to-r from-[#8B0000] to-[#C0A080] w-0" 
          ref={scrollProgressRef}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
