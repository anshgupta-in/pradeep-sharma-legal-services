import React from 'react';
import { SERVICES, DETAILED_SERVICES } from '../constants';
import Reveal from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-legal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-legal-gold font-bold tracking-widest uppercase text-sm mb-3">Services provided</h2>
            <h2 className="text-4xl font-serif text-legal-900 leading-tight">
              Comprehensive Legal & <br/> Documentation Services
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 150} className="h-full">
              <div className="group h-full relative overflow-hidden bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border-t-4 border-transparent hover:border-legal-gold flex flex-col transform hover:-translate-y-2">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(252,231,243,0.45),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(252,231,243,0.3),transparent_50%)] opacity-0 group-hover:opacity-90 transition-opacity duration-400 ease-out mix-blend-screen" />
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500 text-legal-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                
                <div className="text-legal-900 mb-6 group-hover:text-legal-gold transition-colors duration-300">
                   {service.icon}
                </div>
                
                <h3 className="text-xl font-serif text-legal-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                
                <a href="#book" className="text-xs font-bold uppercase tracking-wider text-legal-900 hover:text-legal-gold flex items-center gap-2 mt-4 group-hover:translate-x-2 transition-transform">
                  Learn More <span className="text-lg">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Detailed Services List */}
        <div className="mt-24 pt-16 border-t border-legal-100 relative">
           {/* Decorative center line */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-legal-gold/30"></div>

           <Reveal delay={200}>
             <div className="text-center mb-16">
                <span className="text-legal-gold font-bold tracking-widest uppercase text-xs mb-3 block">Registration & Certificates</span>
                <h3 className="text-3xl font-serif text-legal-900 mb-4">Specialized Document Center Services</h3>
                <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg">
                  We provide expert assistance for a wide range of registration and certification needs.
                </p>
             </div>
           </Reveal>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {DETAILED_SERVICES.map((item, index) => (
                  <Reveal key={index} delay={index * 50} className="h-full">
                      <div className="group flex items-center p-4 bg-white border border-legal-100 rounded-lg hover:border-legal-gold hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden h-full">
                          {/* Hover fill effect */}
                          <div className="absolute inset-0 bg-legal-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                          
                          {/* Icon */}
                          <div className="relative z-10 h-8 w-8 min-w-[2rem] rounded-full bg-legal-50 text-legal-gold flex items-center justify-center mr-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-sm border border-legal-100 group-hover:border-legal-gold">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                              </svg>
                          </div>
                          
                          {/* Text */}
                          <span className="relative z-10 text-slate-700 font-medium group-hover:text-legal-900 transition-colors duration-300 text-sm sm:text-base">
                              {item}
                          </span>
                          
                          {/* Arrow appearing on hover */}
                           <div className="absolute right-4 z-10 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-legal-gold">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                              </svg>
                           </div>
                      </div>
                  </Reveal>
              ))}
           </div>

           {/* Typing effect line */}
           <div className="mt-10 flex justify-center">
             <div className="relative">
               <span className="typing-line block text-sm sm:text-base text-legal-900 font-semibold bg-white/80 px-4 py-2 rounded-md border border-legal-100 shadow-sm">
                 Many more services available — contact us to know more.
               </span>
             </div>
           </div>
        </div>

      </div>
      <style>{`
        .typing-line {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid rgba(198,142,118,0.7);
          animation:
            typing 6s steps(56, end) infinite,
            caret 0.9s step-end infinite;
          max-width: 58ch;
        }
        @keyframes typing {
          0% { width: 0ch; }
          45% { width: 58ch; }
          60% { width: 58ch; }
          100% { width: 0ch; }
        }
        @keyframes caret {
          0%, 100% { border-color: transparent; }
          50% { border-color: rgba(198,142,118,0.85); }
        }
      `}</style>
    </section>
  );
};

export default Services;