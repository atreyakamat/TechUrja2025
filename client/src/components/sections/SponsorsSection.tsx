import { useEffect } from 'react';
import { sponsors } from '@/data';
import SponsorCard from '@/components/ui/SponsorCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SponsorsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const platinumSponsors = sponsors.filter(sponsor => sponsor.tier === 'platinum');
  const goldSponsors = sponsors.filter(sponsor => sponsor.tier === 'gold');
  const silverSponsors = sponsors.filter(sponsor => sponsor.tier === 'silver');

  return (
    <section 
      id="sponsors" 
      className="py-24 px-4 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.9)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block mb-4 py-1 px-3 border border-[#C0A080]/40 rounded-sm">
            <span className="text-[#C0A080] font-cinzel tracking-widest text-sm">OUR PATRONS</span>
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            <span className="text-white">Event </span>
            <span className="text-[#C0A080]">Sponsors</span>
          </h2>
          
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#8B0000] to-[#C0A080] mb-8"></div>
          
          <p className="text-white/80 max-w-2xl mx-auto font-opensans leading-relaxed">
            The powerful empires that support our gladiatorial contests and make TECHURJA possible.
          </p>
        </div>
        
        {/* Platinum Sponsors */}
        <div className="mb-12" data-aos="fade-up">
          <h3 className="font-cinzel text-xl text-center text-[#C0A080] mb-8">PLATINUM SPONSORS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platinumSponsors.map((sponsor, index) => (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
                delay={(index + 1) * 100}
                size="large"
              />
            ))}
          </div>
        </div>
        
        {/* Gold Sponsors */}
        <div className="mb-12" data-aos="fade-up">
          <h3 className="font-cinzel text-xl text-center text-[#C0A080] mb-8">GOLD SPONSORS</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
                delay={(index + 1) * 100}
                size="medium"
              />
            ))}
          </div>
        </div>
        
        {/* Silver Sponsors */}
        <div data-aos="fade-up">
          <h3 className="font-cinzel text-xl text-center text-[#C0A080] mb-8">SILVER SPONSORS</h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {silverSponsors.map((sponsor, index) => (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
                delay={(index + 1) * 50}
                size="small"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
