import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EventsSection from '@/components/sections/EventsSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import { initSmoothScroll } from '@/lib/animations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Initialize smooth scrolling
    const lenis = initSmoothScroll();

    // Clean up
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
