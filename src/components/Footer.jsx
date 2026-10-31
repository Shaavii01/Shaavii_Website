import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import companyLogo from '../Assets/Shaavii-Logo-No-Tagline-Reversed.png';

const exploreLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
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
    <footer className="w-full text-gray-300 border-t border-gray-800 bg-gray-950">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-10">
          
          {/* Brand & Mission */}
          <div className="space-y-4 md:col-span-6 lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="inline-flex items-center cursor-pointer group"
            >
              <img
                src={companyLogo}
                alt="Shaavii – Powering Your Digital Future"
                className="object-contain w-auto h-10 transition-transform duration-200 sm:h-11 group-hover:scale-105"
              />
            </a>
            <p className="text-sm font-semibold text-indigo-400">
              Powering Your Digital Future
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Helping businesses simplify operations, automate workflows, and unlock new possibilities through technology.
            </p>
          </div>

          {/* Explore Links */}
          <div className="space-y-3 md:col-span-3 lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className="text-left text-gray-400 transition-colors cursor-pointer hover:text-indigo-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3 md:col-span-3 lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <span className="text-gray-400 transition-colors cursor-pointer hover:text-indigo-400">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-white transition-all bg-indigo-600 rounded-lg shadow-sm cursor-pointer hover:bg-indigo-500"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3 md:col-span-6 lg:col-span-4">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={15} />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Email</span>
                  <a href="mailto:info@shaavii.com" className="text-gray-200 font-medium hover:text-indigo-400 transition-colors">
                    info@shaavii.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={15} />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Phone</span>
                  <a href="tel:+919993621821" className="text-gray-200 font-medium hover:text-indigo-400 transition-colors">
                    +91 9993621821
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={15} />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Hours</span>
                  <span className="text-gray-200 font-medium">
                    Monday – Saturday (10 AM – 6 PM IST)
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-12 text-xs text-gray-500 border-t border-gray-800 sm:flex-row">
          <p>© 2026 Shaavii. All Rights Reserved.</p>
          <p className="font-medium text-gray-400">Work Smarter. Automate Better. Grow Faster.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
