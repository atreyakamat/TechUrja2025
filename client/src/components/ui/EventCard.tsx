import { useState } from 'react';
import { EventType } from '@/types';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface EventCardProps {
  event: EventType;
  delay: number;
}

const EventCard = ({ event, delay }: EventCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div 
      className="event-card bg-[#121212] border border-[#C0A080]/30 rounded-sm overflow-hidden transition-all duration-400 hover:transform hover:-translate-y-2"
      data-aos="fade-up" 
      data-aos-delay={delay.toString()}
    >
      <div className="h-auto overflow-hidden">
        <img 
          src={event.image_src}
          alt={event.event_name} 
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-cinzel text-xl text-[#C0A080] mb-2">{event.event_name}</h3>
        <p className="text-white/70 mb-4 text-sm">{event.desc}</p>
        
        <button 
          onClick={toggleDetails}
          className="w-full bg-transparent hover:bg-[#C0A080]/10 text-[#C0A080] text-sm font-cinzel tracking-wider py-2 rounded border border-[#C0A080]/50 transition-all duration-300"
        >
          {showDetails ? 'HIDE DETAILS' : 'VIEW DETAILS'}
        </button>
        
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-[#C0A080]/20">
            <div className="flex flex-wrap gap-2 mb-4">
              {event.prize_pool.map((prize, index) => (
                <div 
                  key={index} 
                  className="px-3 py-1 bg-[#C0A080]/10 text-[#C0A080] text-xs rounded"
                >
                  {prize.position}: ₹{prize.amount}
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => window.open(event.link, '_blank')}
              className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90 text-white text-sm font-cinzel tracking-wider py-2 rounded border border-[#8B0000]/50 transition-all duration-300"
            >
              REGISTER NOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
