import { useEffect } from 'react';
import { Route, Switch } from 'wouter';
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

// Page imports
import NotFound from '@/pages/not-found';
import GuidelinesPage from '@/pages/resources/guidelines';
import TermsPage from '@/pages/legal/terms';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Homepage component
const HomePage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <EventsSection />
    <SponsorsSection />
  </>
);

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
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/resources/guidelines" component={GuidelinesPage} />
          <Route path="/legal/terms" component={TermsPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
