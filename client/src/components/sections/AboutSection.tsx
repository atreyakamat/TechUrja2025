import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-24 px-4 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.9)), url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="inline-block mb-4 py-1 px-3 border border-[#C0A080]/40 rounded-sm">
              <span className="text-[#C0A080] font-cinzel tracking-widest text-sm">ABOUT THE EVENT</span>
            </div>
            
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 tracking-wide">
              <span className="text-white">The Modern </span>
              <span className="text-[#C0A080]">Colosseum</span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-[#8B0000] to-[#C0A080] mb-8"></div>
            
            <p className="text-white/80 mb-6 font-opensans leading-relaxed">
              TECHURJA 2025 embraces the spirit of ancient gladiators in a contemporary tech arena. This three-day spectacle brings together the brightest minds from across the globe to compete, innovate, and conquer challenges in various technological disciplines.
            </p>
            
            <p className="text-white/80 mb-6 font-opensans leading-relaxed">
              Like the gladiators of old who showcased their skill and courage, participants will demonstrate their technical prowess, strategic thinking, and creative problem-solving abilities. Enter our digital Colosseum and prove your worth!
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex flex-col items-center">
                <span className="text-[#C0A080] text-4xl font-bold mb-2" data-aos="fade-up" data-aos-delay="100">3+</span>
                <span className="text-white/70 text-sm uppercase tracking-wider">Days</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-[#C0A080] text-4xl font-bold mb-2" data-aos="fade-up" data-aos-delay="200">10+</span>
                <span className="text-white/70 text-sm uppercase tracking-wider">Events</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-[#C0A080] text-4xl font-bold mb-2" data-aos="fade-up" data-aos-delay="300">50+</span>
                <span className="text-white/70 text-sm uppercase tracking-wider">Sponsors</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-[#C0A080] text-4xl font-bold mb-2" data-aos="fade-up" data-aos-delay="400">5000+</span>
                <span className="text-white/70 text-sm uppercase tracking-wider">Participants</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4" data-aos="fade-left">
            <div className="aspect-square overflow-hidden border border-[#C0A080] shadow-lg shadow-[#C0A080]/20 rounded-sm transform translate-y-8">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Tech event" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div className="aspect-square overflow-hidden border border-[#C0A080] shadow-lg shadow-[#C0A080]/20 rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Spartan warrior" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div className="aspect-square overflow-hidden border border-[#C0A080] shadow-lg shadow-[#C0A080]/20 rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Colosseum" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div className="aspect-square overflow-hidden border border-[#C0A080] shadow-lg shadow-[#C0A080]/20 rounded-sm transform -translate-y-8">
              <img 
                src="https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Tech conference" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
