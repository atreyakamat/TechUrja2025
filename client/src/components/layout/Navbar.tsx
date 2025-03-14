import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center border-b transition-all duration-300 ${
        scrolled ? 'bg-[#121212]/90 border-[#C0A080]/30' : 'bg-transparent border-transparent'
      }`}>
        <div className="flex items-center">
          <div className="inline-block w-6 h-6 mr-2">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.55.45-3 1.22-4.23C7.79 8.27 9.83 10 12 10s4.21-1.73 6.78-2.23C19.55 9 20 10.45 20 12c0 4.41-3.59 8-8 8z" fill="#C0A080"/>
            </svg>
          </div>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-cinzel text-2xl font-bold tracking-wider"
          >
            <span className="text-[#C0A080]">TECH</span>
            <span className="text-[#FF4D4D]">URJA</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="relative text-white font-cinzel tracking-wide hover:text-[#C0A080] transition-colors duration-300 group"
          >
            ABOUT
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C0A080] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className="relative text-white font-cinzel tracking-wide hover:text-[#C0A080] transition-colors duration-300 group"
          >
            EVENTS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C0A080] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('sponsors')}
            className="relative text-white font-cinzel tracking-wide hover:text-[#C0A080] transition-colors duration-300 group"
          >
            SPONSORS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C0A080] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#121212]/95 z-50 flex flex-col items-center justify-center space-y-8">
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white font-cinzel text-xl tracking-wide hover:text-[#C0A080] transition-colors duration-300"
          >
            ABOUT
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className="text-white font-cinzel text-xl tracking-wide hover:text-[#C0A080] transition-colors duration-300"
          >
            EVENTS
          </button>
          <button 
            onClick={() => scrollToSection('sponsors')}
            className="text-white font-cinzel text-xl tracking-wide hover:text-[#C0A080] transition-colors duration-300"
          >
            SPONSORS
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
