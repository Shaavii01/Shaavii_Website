import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Services from '../Services/Services';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';

export default function Master() {
  const location = useLocation();

  useEffect(() => {
    let targetId = '';
    const cleanPath = location.pathname.replace('/', '').toLowerCase();
    
    const validSections = ['home', 'services', 'about', 'contact'];
    
    if (validSections.includes(cleanPath)) {
      targetId = cleanPath;
      // Immediately hide route name from URL bar so it stays clean at http://localhost:3000/
      window.history.replaceState(null, '', '/');
    } else if (location.hash) {
      const hashId = location.hash.replace('#', '');
      if (validSections.includes(hashId)) {
        targetId = hashId;
      }
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

      {/* 2. Services & Solutions section */}
      <section id="services" className="scroll-mt-16">
        <Services />
      </section>

      {/* 3. About section */}
      <section id="about" className="scroll-mt-16">
        <About />
      </section>

      {/* 4. Contact section */}
      <section id="contact" className="scroll-mt-16">
        <ContactUs />
      </section>
    </div>
  );
}
