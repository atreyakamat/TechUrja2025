import { Sponsor } from '@/types';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SponsorCardProps {
  sponsor: Sponsor;
  delay: number;
  size: 'small' | 'medium' | 'large';
}

const SponsorCard = ({ sponsor, delay, size }: SponsorCardProps) => {
  const sizeClasses = {
    small: {
      container: 'p-3',
      circle: 'w-12 h-12 mx-auto mb-2',
      text: 'text-xs'
    },
    medium: {
      container: 'p-4',
      circle: 'w-20 h-20 mx-auto mb-3',
      text: 'text-sm'
    },
    large: {
      container: 'p-6',
      circle: 'w-32 h-32 mx-auto mb-4',
      text: 'text-2xl'
    }
  };

  return (
    <a 
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className={`sponsor-card bg-[#121212]/50 border border-[#C0A080]/30 flex items-center justify-center rounded-sm transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#C0A080]/30 ${sizeClasses[size].container}`}
      data-aos="fade-up" 
      data-aos-delay={delay.toString()}
    >
      <div className="text-center">
        <div className={`${sizeClasses[size].circle} bg-white/10 rounded-full flex items-center justify-center`}>
          <span className={`text-[#C0A080] font-cinzel ${sizeClasses[size].text}`}>
            {sponsor.abbreviation}
          </span>
        </div>
        <h4 className="text-white font-cinzel text-center">{sponsor.name}</h4>
      </div>
    </a>
  );
};

export default SponsorCard;
