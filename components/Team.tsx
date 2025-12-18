import React from 'react';
import { TEAM } from '../constants';
import Reveal from './Reveal';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-legal-50 border-t border-legal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-base text-legal-gold font-semibold tracking-wide uppercase">Our People</h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Dedicated Support Team
            </p>
          </Reveal>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          {TEAM.map((member, index) => (
            <li key={member.id} className="group w-full max-w-sm mx-auto">
              <Reveal delay={index * 200}>
                <div className="space-y-4">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-500">
                    <img 
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" 
                      src={member.imageUrl} 
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-slate-900 font-serif text-xl group-hover:text-legal-gold transition-colors">{member.name}</h3>
                      <p className="text-legal-gold">{member.role}</p>
                    </div>
                    <p className="text-base text-slate-500">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;