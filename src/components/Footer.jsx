import React from 'react';
import companyLogo from '../Assets/Logo.png';

const exploreLinks = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'industries', label: 'Industries' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
];

const legalLinks = [
  { label: 'Privacy Policy' },
  { label: 'Terms & Conditions' },
  { label: 'Cookie Policy' },
];

const Footer = () => {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="w-full bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-6 lg:col-span-6 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="inline-flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center border border-gray-700 shadow-md">
                <img src={companyLogo} alt="Shaavii Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                SHAAVII
              </span>
            </a>
            <p className="text-sm font-semibold text-indigo-400">
              Smarter Business. Intelligent Automation.
            </p>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Helping businesses simplify operations, automate workflows, and unlock new possibilities through technology.
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <span className="text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                Book a Free Demo
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Shaavii. All Rights Reserved.</p>
          <p className="text-gray-400 font-medium">Work Smarter. Automate Better. Grow Faster.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
