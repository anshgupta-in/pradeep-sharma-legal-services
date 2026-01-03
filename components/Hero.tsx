import React from 'react';
import { LAWYER_DETAILS, SERVICES } from '../constants';
import Reveal from './Reveal';
import RotatingServices from './RotatingServices';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-legal-50 min-h-screen flex items-center overflow-hidden pb-20 lg:pb-24">
      
      {/* Absolute Right Image Section */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 overflow-hidden">
         <img
            className="w-full h-full object-cover object-top animate-slow-zoom"
            src={LAWYER_DETAILS.imageUrl}
            alt="PS Document Center office in Krishna Nagar East Delhi - Affidavit and certificate documentation services"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          {/* Subtle animated design overlay for desktop/full view */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-legal-900/55 via-legal-900/25 to-transparent" />
            <div className="absolute inset-0 mix-blend-screen opacity-50 animate-hero-glow" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_40%)] opacity-60" />
          </div>
          {/* Overlay for mobile readability if image wraps or for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-legal-50 via-legal-50/20 to-transparent lg:hidden"></div>

          {/* Name Overlay on Image - Desktop Positioned */}
          <div className="hidden lg:block absolute bottom-36 left-12 z-10">
              <Reveal delay={800}>
                <div className="backdrop-blur-md bg-black/40 p-6 border-l-[6px] border-legal-gold shadow-2xl">
                  <h2 className="text-4xl font-serif text-white font-bold leading-none tracking-wide text-shadow-lg">
                    {LAWYER_DETAILS.name}
                  </h2>
                  <div className="w-12 h-0.5 bg-legal-gold mt-3 mb-2"></div>
                  <p className="text-white/90 text-xs uppercase tracking-[0.25em] font-medium pl-0.5">
                    Advocate • Delhi High Court
                  </p>
                </div>
              </Reveal>
          </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-full flex items-center pt-20 lg:pt-24 lg:pb-36">
        
        {/* Left Content Container */}
        <div className="w-full lg:w-1/2 py-12 lg:py-8 pb-28 lg:pb-0">
            <Reveal>
              <p className="text-legal-gold font-bold tracking-widest uppercase text-sm mb-4">Our Services</p>
            </Reveal>
            <Reveal delay={200}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-legal-900 leading-tight font-bold mb-6">
                <span className="block">
                  <span className="text-legal-gold">PS</span>
                  <span className="text-legal-900"> Document Center –</span>
                </span>
                <span className="block mt-2">
                  <span className="text-legal-gold">
                    <RotatingServices />
                  </span>
                  <span className="text-legal-900"> Services</span>
                </span>
                <span className="block mt-2">
                  <span className="text-legal-900">in </span>
                  <span className="text-legal-gold">South Anarkali, Krishna Nagar</span>
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-3 text-slate-700 font-normal">
                  East Delhi
                </span>
              </h1>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-8 text-xl text-slate-800 max-w-lg font-light leading-relaxed">
                Let us guide you with expertise in every legal area that matters most to your business and property.
              </p>
              <p className="mt-3 text-sm text-slate-600 max-w-md">
                We provide superfast service at fair price.
              </p>
            </Reveal>
            
            <Reveal delay={600}>
              <div className="mt-10 mb-8 lg:mb-0 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-[#0f2820] hover:bg-legal-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  Book Consultation
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LAWYER_DETAILS.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-legal-gold border-2 border-legal-gold hover:bg-white hover:text-legal-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Get Direction
                </a>
              </div>
            </Reveal>

            {/* Mobile-only Static Card: Flows naturally after the button to prevent overlap */}
            <div className="mt-12 lg:hidden w-full max-w-xs">
              <Reveal delay={800}>
                 <div className="relative overflow-hidden bg-white/30 backdrop-blur-lg p-6 border border-white/25 border-l-4 border-l-legal-gold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/40 cursor-pointer group before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent before:pointer-events-none">
                    <p className="font-serif text-2xl text-legal-900 font-bold group-hover:text-legal-accent transition-colors animate-blink-soft glow-soft">"{LAWYER_DETAILS.cases}"</p>
                    <p className="text-sm text-slate-600 mt-1 uppercase tracking-wider">{LAWYER_DETAILS.subtitle}</p>
                    <p className="text-xs text-slate-500 mt-2 tracking-wide">We provide superfast service at fair price.</p>
                 </div>
              </Reveal>
            </div>
        </div>
        
      </div>

      {/* Floating Card - Desktop Only (Absolute Bottom Right) */}
      <div className="hidden lg:flex absolute bottom-28 right-0 z-20 w-auto justify-end px-12 pointer-events-none">
         <div className="bg-white/95 backdrop-blur-md p-6 border-l-4 border-legal-gold shadow-2xl max-w-xs w-full pointer-events-auto transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(198,142,118,0.4)] hover:-translate-y-2 cursor-pointer group animate-fade-in-up" style={{animationDelay: '1s'}}>
            <p className="font-serif text-2xl text-legal-900 font-bold group-hover:text-legal-accent transition-colors animate-blink-soft glow-soft">"{LAWYER_DETAILS.cases}"</p>
            <p className="text-sm text-slate-600 mt-1 uppercase tracking-wider">{LAWYER_DETAILS.subtitle}</p>
            <p className="text-xs text-slate-500 mt-2 tracking-wide">We provide superfast service.</p>
         </div>
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 w-full bg-[#0f2820] py-8 lg:py-10 z-20 overflow-hidden whitespace-nowrap border-t border-legal-gold/20">
        <div className="animate-marquee inline-block">
          {[...SERVICES, ...SERVICES].map((service, index) => (
            <span key={index} className="mx-8 text-white/90 font-serif text-lg sm:text-xl inline-flex items-center">
               <span className="text-legal-gold text-sm mr-4">✱</span>
               {service.title}
            </span>
          ))}
        </div>
        <div className="animate-marquee inline-block absolute top-8 lg:top-10 left-0" aria-hidden="true">
          {[...SERVICES, ...SERVICES].map((service, index) => (
            <span key={index} className="mx-8 text-white/90 font-serif text-lg sm:text-xl inline-flex items-center">
               <span className="text-legal-gold text-sm mr-4">✱</span>
               {service.title}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0,0,0,0.5);
        }
        .animate-hero-glow {
          background: linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02), rgba(255,255,255,0.18));
          background-size: 200% 200%;
          animation: heroGlow 14s ease-in-out infinite;
        }
        @keyframes heroGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <style>{`
        @keyframes blinkSoft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .animate-blink-soft {
          animation: blinkSoft 2s ease-in-out infinite;
        }
        .glow-soft {
          text-shadow:
            0 0 12px rgba(217, 119, 6, 0.35),
            0 0 24px rgba(217, 119, 6, 0.22);
        }
      `}</style>
    </div>
  );
};

export default Hero;