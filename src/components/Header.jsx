import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import shaaviiLogo from '../Assets/Shaavii-Logo.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Highlight active section on scroll using IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'services', 'about', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { rootMargin: '-20% 0px -70% 0px' }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center flex-shrink-0 cursor-pointer group"
        >
          <img
            src={shaaviiLogo}
            alt="Shaavii – Powering Your Digital Future"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Right Section: Navigation Links & CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-indigo-700 bg-indigo-50 border border-indigo-100 font-bold'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Divider between nav links and CTA */}
          <div className="h-5 w-px bg-gray-200 mx-1" />

          {/* CTA Button */}
          <button
            type="button"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            Book a Free Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-bold'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="mt-2 px-4 py-3.5 bg-indigo-600 text-white text-sm font-bold rounded-xl text-center hover:bg-indigo-700 transition-all cursor-pointer"
            >
              Book a Free Demo
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
