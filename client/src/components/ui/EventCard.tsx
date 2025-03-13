import { useState } from 'react';
import { Event } from '@/types';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface EventCardProps {
  event: Event;
  delay: number;
}

const EventCard = ({ event, delay }: EventCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Generate difficulty dots
  const difficultyDots = [];
  for (let i = 1; i <= 5; i++) {
    difficultyDots.push(
      <span 
        key={i} 
        className={i <= event.difficulty ? "text-[#C0A080]" : "text-white/30"}
      >
        ●
      </span>
    );
  }

  return (
    <div 
      className="event-card bg-[#121212] border border-[#C0A080]/30 rounded-sm overflow-hidden transition-all duration-400 hover:transform hover:-translate-y-2"
      data-aos="fade-up" 
      data-aos-delay={delay.toString()}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-cinzel text-xl text-[#C0A080] mb-2">{event.title}</h3>
        <p className="text-white/70 mb-4 text-sm">{event.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs text-white/50">{event.date}</span>
          <span className="text-xs text-white/50">{event.time}</span>
        </div>
        
        <button 
          onClick={toggleDetails}
          className="w-full bg-transparent hover:bg-[#C0A080]/10 text-[#C0A080] text-sm font-cinzel tracking-wider py-2 rounded border border-[#C0A080]/50 transition-all duration-300"
        >
          {showDetails ? 'HIDE DETAILS' : 'VIEW DETAILS'}
        </button>
        
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-[#C0A080]/20">
            <p className="text-white/80 text-sm mb-3">
              {event.detailedDescription}
            </p>
            
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex justify-between">
                <span className="text-white/60 text-xs">Prize Pool:</span>
                <span className="text-[#C0A080] text-xs">{event.prizePool}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-white/60 text-xs">Team Size:</span>
                <span className="text-white text-xs">{event.teamSize}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-white/60 text-xs">Difficulty:</span>
                <div className="flex">
                  {difficultyDots}
                </div>
              </div>
            </div>
            
            <button className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90 text-white text-sm font-cinzel tracking-wider py-2 mt-4 rounded border border-[#8B0000]/50 transition-all duration-300">
              REGISTER NOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
