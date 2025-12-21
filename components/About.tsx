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
               <div className="absolute -bottom-6 -right-6 bg-legal-900 text-white p-8 shadow-xl max-w-xs transform transition-transform hover:-translate-y-2 duration-300 group">
                   <p className="font-serif text-3xl mb-2">{LAWYER_DETAILS.name}</p>
                   <div className="mb-3 relative overflow-hidden">
                     <span className="inline-flex items-center gap-2 bg-gradient-to-r from-legal-gold/25 via-legal-gold/30 to-legal-gold/25 text-legal-gold px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-[0.15em] border border-legal-gold/50 shadow-lg group-hover:shadow-legal-gold/50 transition-all duration-500 group-hover:scale-105 group-hover:border-legal-gold">
                       <span className="relative">
                         <span className="absolute inset-0 bg-legal-gold/20 blur-sm group-hover:bg-legal-gold/40 transition-all duration-500"></span>
                         <span className="relative">BA. LLB</span>
                       </span>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 group-hover:rotate-12 transition-transform duration-300">
                         <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912.75.75 0 0 1-.84 0 49.908 49.908 0 0 0-9.903-3.912.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                         <path d="M13.06 15.473a48.45 48.45 0 0 1 1.93-.471 75.001 75.001 0 0 0-9.98 0 48.5 48.5 0 0 1 1.93.47c-.197.197-.39.4-.577.628a20.556 20.556 0 0 1-1.299 2.539l-.23.308a18.842 18.842 0 0 0 10.12 0l-.23-.307a20.555 20.555 0 0 1-1.3-2.54c-.186-.227-.38-.43-.577-.627Z" />
                         <path d="M10.854 6.147a.75.75 0 0 0-1.214-.882l-3.236 4.53a.75.75 0 0 0 1.214.882l3.236-4.53ZM14.698 9.821a.75.75 0 0 0-1.214-.882l-2.012 2.815a.75.75 0 0 0 1.214.882l2.012-2.815Z" />
                       </svg>
                     </span>
                   </div>
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