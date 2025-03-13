import { contactInfo } from '@/data';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121212] py-12 px-4 border-t border-[#C0A080]/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-6">
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
            
            <p className="text-white/60 mb-6">
              The ultimate tech gladiatorial contest where innovation meets competition. Join us for an epic battle of wits, skill, and technology.
            </p>
            
            <p className="text-white/40 text-sm">
              &copy; 2025 TECHURJA. All Rights Reserved.
            </p>
          </div>
          
          <div className="md:col-span-2 md:pl-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-[#C0A080] font-cinzel text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="text-white/60 hover:text-[#C0A080] transition-colors duration-300"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('events')}
                      className="text-white/60 hover:text-[#C0A080] transition-colors duration-300"
                    >
                      Events
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('sponsors')}
                      className="text-white/60 hover:text-[#C0A080] transition-colors duration-300"
                    >
                      Sponsors
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="text-white/60 hover:text-[#C0A080] transition-colors duration-300"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#C0A080] font-cinzel text-lg mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/60 hover:text-[#C0A080] transition-colors duration-300">FAQs</a></li>
                  <li><a href="#" className="text-white/60 hover:text-[#C0A080] transition-colors duration-300">Schedule</a></li>
                  <li><a href="#" className="text-white/60 hover:text-[#C0A080] transition-colors duration-300">Rules</a></li>
                  <li><a href="#" className="text-white/60 hover:text-[#C0A080] transition-colors duration-300">Press Kit</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#C0A080] font-cinzel text-lg mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/60 hover:text-[#C0A080] transition-colors duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/60 hover:text-[#C0A080] transition-colors duration-300">Terms of Service</a></li>
                  <li><a href="#" className="text-white/60 hover:text-[#C0A080] transition-colors duration-300">Code of Conduct</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
