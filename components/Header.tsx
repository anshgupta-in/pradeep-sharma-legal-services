import React, { useState, useEffect } from 'react';
import { PSLogo } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services provided', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-legal-50/95 backdrop-blur-sm shadow-md py-2' : 'bg-legal-50/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 py-6 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 sm:gap-4 mr-4 sm:mr-12 max-w-[60%] sm:max-w-none">
            <a href="#home" className="relative flex items-center gap-2 sm:gap-4 group">
              <div className="text-legal-gold transition-transform origin-left scale-[1.8] sm:scale-[2.4] lg:scale-[2.8] drop-shadow-[0_6px_18px_rgba(15,23,42,0.35)]">
                 <PSLogo className="h-10 w-auto sm:h-12 lg:h-14" />
              </div>
              <div className="flex flex-col pl-2 sm:pl-4 lg:pl-5 translate-y-[6px] sm:translate-y-[8px]">
                <span className="block text-[0.5rem] sm:text-[0.55rem] lg:text-[0.62rem] tracking-[0.2em] sm:tracking-[0.24em] lg:tracking-[0.26em] text-legal-gold uppercase font-semibold leading-tight whitespace-nowrap">
                  Document Center
                </span>
              </div>

              {/* Hover label */}
              <div className="pointer-events-none absolute left-0 top-full mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="bg-slate-900 text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-md shadow-lg border border-legal-gold/30 whitespace-nowrap">
                  Pradeep Sharma and Associates
                </div>
              </div>
            </a>
          </div>
          
          {/* Desktop Nav Links - Shifted to Left */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-legal-900 hover:text-legal-gold transition-colors font-sans"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Spacer to push buttons to right */}
          <div className="flex-grow"></div>

          {/* Desktop Action Buttons - Far Right */}
          <div className="hidden md:flex items-center gap-4">
                <a
                    href="#contact"
                    className="text-legal-900 border border-legal-900 px-4 py-2 text-sm font-medium hover:bg-legal-gold hover:border-legal-gold hover:text-white transition-all backdrop-blur-sm bg-white/10"
                >
                    Contact Us
                </a>
          </div>

          {/* Mobile Menu Button (Right Aligned) */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-legal-900 hover:text-legal-gold focus:outline-none bg-white/50 backdrop-blur-sm rounded-lg p-2 shadow-sm border border-legal-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-legal-50 shadow-xl border-t border-legal-100 absolute w-full top-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-legal-900 hover:bg-legal-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
                 <a
                    href="#contact"
                    className="block text-center w-full border border-legal-900 text-legal-900 px-4 py-3 rounded-none text-base font-medium hover:bg-legal-gold hover:border-legal-gold hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact Us
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;