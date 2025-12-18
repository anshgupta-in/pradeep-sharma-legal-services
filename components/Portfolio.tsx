import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import Reveal from './Reveal';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white border-t border-legal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-legal-gold font-bold tracking-widest uppercase text-sm mb-3">Our Work</h2>
            <h2 className="text-4xl font-serif text-legal-900 leading-tight">
              Success Stories & <br/> <span className="italic text-legal-gold">Recent Cases</span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              A glimpse into the complex legal matters and registration challenges we have successfully resolved for our clients.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <Reveal key={item.id} delay={index * 200}>
              <div className="group flex flex-col h-full bg-white border border-legal-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-legal-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                     <span className="bg-white/95 backdrop-blur-sm text-legal-gold text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-sm border-l-2 border-legal-gold">
                       {item.category}
                     </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif text-legal-900 mb-3 group-hover:text-legal-gold transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-legal-100 mb-4 group-hover:bg-legal-gold/50 transition-colors"></div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                     <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Case Study</span>
                     <span className="text-legal-900 group-hover:translate-x-1 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                     </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;