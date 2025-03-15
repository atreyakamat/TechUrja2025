import { footerData, contactInfo } from '@/data';
import { Link } from 'wouter';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121212] border-t border-[#C0A080]/20 h-[100dvh] flex flex-col">
      {/* Main Footer Content */}
      <div className="flex-grow overflow-auto py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Card */}
            <div className="bg-[#1A1A1A] rounded-lg p-6 border border-[#C0A080]/30 shadow-[0_0_20px_rgba(192,160,128,0.05)] relative overflow-hidden">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 transform rotate-45 bg-gradient-to-br from-[#C0A080]/10 to-transparent"></div>
              
              <h3 className="font-cinzel text-2xl text-[#C0A080] mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C0A080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Arena Location
              </h3>
              
              <div className="mb-6">
                <p className="text-[#E8D5B5] text-lg font-bold mb-1">{footerData.location.name}</p>
                <p className="text-white/60">{footerData.location.address}</p>
                <p className="text-white/60">{footerData.location.city}</p>
                <p className="text-white/60">{footerData.location.postalCode}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={footerData.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#8B0000] hover:bg-[#9C1A1A] text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                  View on Map
                </a>
                
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="inline-flex items-center justify-center border border-[#C0A080] text-[#C0A080] hover:bg-[#C0A080]/10 font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Contact Us
                </a>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="text-[#C0A080] font-medium mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                    <line x1="6" y1="1" x2="6" y2="4"/>
                    <line x1="10" y1="1" x2="10" y2="4"/>
                    <line x1="14" y1="1" x2="14" y2="4"/>
                  </svg>
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#1DA1F2] transition-colors">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </a>
                  <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#4267B2] transition-colors">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E1306C] transition-colors">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#0077B5] transition-colors">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Footer Links */}
            <div>
              <div className="flex items-center mb-8">
                <div className="inline-block w-8 h-8 mr-3">
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
                  className="font-cinzel text-3xl font-bold tracking-wider"
                >
                  <span className="text-[#C0A080]">TECH</span>
                  <span className="text-[#FF4D4D]">URJA</span>
                </a>
              </div>
              
              <p className="text-white/60 mb-8 max-w-2xl">
                The ultimate tech gladiatorial contest where innovation meets competition. Join us for an epic battle of wits, skill, and technology at Agnel Technical Educational Complex, Goa.
              </p>
              
              {/* Quick Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                {footerData.sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-[#C0A080] font-cinzel text-lg mb-4 flex items-center">
                      {section.title === 'Events' ? (
                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C0A080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                      ) : section.title === 'Resources' ? (
                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C0A080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C0A080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="16" x2="12" y2="12"/>
                          <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>
                      )}
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          {link.isExternal ? (
                            <a 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-white/60 hover:text-[#C0A080] transition-colors duration-300 flex items-center"
                            >
                              {link.title}
                              <svg className="ml-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                              </svg>
                            </a>
                          ) : (
                            <Link href={link.url}>
                              <a className="text-white/60 hover:text-[#C0A080] transition-colors duration-300">
                                {link.title}
                              </a>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="py-4 border-t border-[#C0A080]/10 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <p className="text-white/40 text-sm">
                {footerData.copyright}
              </p>
              <p className="text-white/40 text-sm mt-1">
                Designed by{" "}
                <a 
                  href="https://www.elysiumstudiosgoa.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#C0A080]/70 hover:text-[#C0A080] transition-colors"
                >
                  ELYSIUM STUDIOS GOA
                </a>
                {" "}and{" "} 
                <a 
                  href="https://dreamcodestudio.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#C0A080]/70 hover:text-[#C0A080] transition-colors"
                >
                  DREAM CODE STUDIOS
                </a>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-4">
              {footerData.legalLinks.map((link, index) => (
                <Link key={index} href={link.url}>
                  <a className="text-white/40 hover:text-[#C0A080] text-sm transition-colors duration-300">
                    {link.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
