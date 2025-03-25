import { useState, useEffect } from 'react';
import { Menu, X, Info, Calendar, Award, BookOpen, FileText, MapPin } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();
  const isHomePage = location === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    // If not on homepage, navigate to homepage first
    if (!isHomePage) {
      navigate('/');
      // Use setTimeout to wait for navigation before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center border-b transition-all duration-300 ${
        scrolled ? 'bg-[#121212]/90 border-[#C0A080]/30' : 'bg-transparent border-transparent'
      }`}>
        <div className="flex items-center">
          <div className="inline-block w-12 h-12 mr-2 relative -top-2">
            {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.55.45-3 1.22-4.23C7.79 8.27 9.83 10 12 10s4.21-1.73 6.78-2.23C19.55 9 20 10.45 20 12c0 4.41-3.59 8-8 8z" fill="#C0A080"/>
            </svg> */}
          <img src="/logo.webp" alt="TechUrja" className="w-auto h-auto  mr-2 inline-block" />

          </div>
          <Link href="/">
            <a 
              className="font-cinzel text-2xl font-bold tracking-wider"
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <span className="text-[#C0A080]">TECH</span>
              <span className="text-[#FF4D4D]">URJA</span>
            </a>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="relative text-white font-cinzel tracking-wide hover:text-[#C0A080] transition-colors duration-300 group flex items-center"
          >
            <Info className="w-4 h-4 mr-1 opacity-70" />
            ABOUT
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C0A080] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className="relative text-white font-cinzel tracking-wide hover:text-[#C0A080] transition-colors duration-300 group flex items-center"
          >
            <Calendar className="w-4 h-4 mr-1 opacity-70" />
            EVENTS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C0A080] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('sponsors')}
            className="relative text-white font-cinzel tracking-wide hover:text-[#C0A080] transition-colors duration-300 group flex items-center"
          >
            <Award className="w-4 h-4 mr-1 opacity-70" />
            SPONSORS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C0A080] transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          <Link href="/resources/guidelines">
            <a className="relative text-white font-cinzel tracking-wide hover:text-[#C0A080] transition-colors duration-300 group flex items-center">
              <BookOpen className="w-4 h-4 mr-1 opacity-70" />
              GUIDELINES
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#C0A080] transition-all duration-300 ${location === '/resources/guidelines' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          </Link>
          
          <Link href="/legal/terms">
            <a className="relative text-white font-cinzel tracking-wide hover:text-[#C0A080] transition-colors duration-300 group flex items-center">
              <FileText className="w-4 h-4 mr-1 opacity-70" />
              TERMS
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#C0A080] transition-all duration-300 ${location === '/legal/terms' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          </Link>
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
          
          <div className="flex flex-col items-center space-y-8">
            {/* Home section links */}
            <div className="flex flex-col items-center space-y-6 pb-6 border-b border-[#C0A080]/20 w-64">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white font-cinzel text-xl tracking-wide hover:text-[#C0A080] transition-colors duration-300 flex items-center"
              >
                <Info className="w-5 h-5 mr-2 opacity-70" />
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-white font-cinzel text-xl tracking-wide hover:text-[#C0A080] transition-colors duration-300 flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2 opacity-70" />
                EVENTS
              </button>
              <button 
                onClick={() => scrollToSection('sponsors')}
                className="text-white font-cinzel text-xl tracking-wide hover:text-[#C0A080] transition-colors duration-300 flex items-center"
              >
                <Award className="w-5 h-5 mr-2 opacity-70" />
                SPONSORS
              </button>
            </div>
            
            {/* Additional pages */}
            <div className="flex flex-col items-center space-y-6 pt-2">
              <Link href="/resources/guidelines">
                <a 
                  className="text-white font-cinzel text-xl tracking-wide hover:text-[#C0A080] transition-colors duration-300 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen className="w-5 h-5 mr-2 opacity-70" />
                  GUIDELINES
                </a>
              </Link>
              
              <Link href="/legal/terms">
                <a 
                  className="text-white font-cinzel text-xl tracking-wide hover:text-[#C0A080] transition-colors duration-300 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText className="w-5 h-5 mr-2 opacity-70" />
                  TERMS
                </a>
              </Link>
              
              <div className="mt-6 pt-6 border-t border-[#C0A080]/20 w-64 flex justify-center">
                <a 
                  href="https://maps.google.com/?q=Agnel+Technical+Educational+Complex+Assagao+Goa+403507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white/70 hover:text-[#C0A080] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-sm">LOCATE VENUE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
