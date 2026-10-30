import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Solutions from '../Solutions/Solutions';
import Features from '../Features/Features';
import Industries from '../Industries/Industries';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';

export default function Master() {
  const location = useLocation();

  useEffect(() => {
    let targetId = '';
    const cleanPath = location.pathname.replace('/', '').toLowerCase();
    
    if (['home', 'hero', 'solutions', 'features', 'industries', 'about', 'contact'].includes(cleanPath)) {
      targetId = cleanPath === 'hero' ? 'home' : cleanPath;
      // Immediately hide route name from URL bar so it stays clean at http://localhost:3000/
      window.history.replaceState(null, '', '/');
    } else if (location.hash) {
      targetId = location.hash.replace('#', '');
      window.history.replaceState(null, '', '/');
    }

    if (targetId) {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="w-full">
      {/* 1. Home / Hero section */}
      <section id="home" className="scroll-mt-16">
        <Home />
      </section>

      {/* 2. Solutions section */}
      <section id="solutions" className="scroll-mt-16">
        <Solutions />
      </section>

      {/* 3. Features section */}
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>

      {/* 4. Industries section */}
      <section id="industries" className="scroll-mt-16">
        <Industries />
      </section>

      {/* 5. About section */}
      <section id="about" className="scroll-mt-16">
        <About />
      </section>

      {/* 6. Contact & Demo section */}
      <section id="contact" className="scroll-mt-16">
        <ContactUs />
      </section>
    </div>
  );
}
