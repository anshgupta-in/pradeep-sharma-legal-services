import React from 'react';
import { LAWYER_DETAILS, Icons } from '../constants';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 relative mb-12 lg:mb-0">
             <Reveal>
               <div className="border border-legal-100 p-4 transform transition-transform hover:scale-[1.02] duration-500">
                  <div className="aspect-[3/4] overflow-hidden bg-legal-100 relative">
                        <img 
                          className="object-cover w-full h-full filter sepia-[.2] hover:sepia-0 transition-all duration-700" 
                          src="/images/profile.webp"
                          alt="PS Document Center office in Krishna Nagar East Delhi - Professional legal documentation services" 
                        />
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 bg-legal-900 text-white p-8 shadow-xl max-w-xs transform transition-transform hover:-translate-y-2 duration-300">
                   <p className="font-serif text-3xl mb-2">{LAWYER_DETAILS.name}</p>
                   <p className="text-legal-gold text-sm uppercase tracking-wider">{LAWYER_DETAILS.title}</p>
               </div>
             </Reveal>
          </div>
          
          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <h2 className="text-legal-gold font-bold tracking-widest uppercase text-sm mb-4">About Pradeep Sharma</h2>
              <h3 className="text-4xl font-serif text-legal-900 mb-8 leading-tight">
                  Trusted Legal Adviser for <br/>
                  <span className="italic text-legal-gold">Property & Civil Matters</span>
              </h3>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="prose prose-lg text-slate-600 mb-10">
                <p className="mb-4">{LAWYER_DETAILS.bio}</p>
                <p>
                  Operating from the <strong>Document Center</strong> in South Anarkali, Delhi, we handle complex registry procedures, sale deeds, and High Court litigation with precision.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={600}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-legal-100 pt-8">
                 <div className="flex flex-col group cursor-pointer">
                    <div className="flex items-center text-legal-gold mb-2 group-hover:scale-110 transition-transform origin-left"><Icons.Phone /></div>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">Call Us</span>
                    <span className="font-serif text-xl text-legal-900 group-hover:text-legal-gold transition-colors">
                      {LAWYER_DETAILS.phone}
                      {LAWYER_DETAILS.alternatePhone && (
                        <span className="block text-base text-slate-600 mt-1">Alt: {LAWYER_DETAILS.alternatePhone}</span>
                      )}
                    </span>
                 </div>
                 <div className="flex flex-col group cursor-pointer">
                    <div className="flex items-center text-legal-gold mb-2 group-hover:scale-110 transition-transform origin-left"><Icons.Email /></div>
                     <span className="text-xs text-slate-400 uppercase tracking-wide">Email Us</span>
                    <span className="font-serif text-xl text-legal-900 break-all group-hover:text-legal-gold transition-colors">{LAWYER_DETAILS.email}</span>
                 </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;