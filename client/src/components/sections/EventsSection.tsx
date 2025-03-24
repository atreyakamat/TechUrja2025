import { useState, useEffect } from 'react';
import { eventsData } from '@/data';
import EventCard from '@/components/ui/EventCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { EventType } from '@/types';

const EventsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="events" className="py-24 px-4 bg-[#121212]">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block mb-4 py-1 px-3 border border-[#C0A080]/40 rounded-sm">
            <span className="text-[#C0A080] font-cinzel tracking-widest text-sm">BATTLE ARENAS</span>
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            <span className="text-white">Choose Your </span>
            <span className="text-[#FF4D4D]">Combat</span>
          </h2>
          
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#8B0000] to-[#C0A080] mb-8"></div>
          
          <p className="text-white/80 max-w-2xl mx-auto font-opensans leading-relaxed">
            Each event is designed to test different aspects of your technical arsenal. Select your battleground and prove your mastery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event :EventType, index:number) => (
            <EventCard 
              key={index} 
              event={event} 
              delay={(index + 1) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
