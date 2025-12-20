import React, { useRef, useState } from 'react';
import Reveal from './Reveal';
import { PSLogo } from '../constants';

const officeImages = [
  {
    id: 'outside',
    title: 'Office Exterior',
    subtitle: 'Conveniently Located',
    description:
      'Our office is situated in a prime location with easy access, ensuring clients can visit us conveniently for all legal matters.',
    imageUrl: '/images/outside.webp',
  },
  {
    id: 'spacious',
    title: 'Spacious Work Environment',
    subtitle: 'Professional & Organized',
    description:
      'A well-organized, spacious workspace designed for efficient case handling and seamless document processing.',
    imageUrl: '/images/spacious.webp',
  },
  {
    id: 'meeting',
    title: 'Client Meeting Room',
    subtitle: 'Confidential & Comfortable',
    description:
      'A private meeting space for confidential discussions, case consultations, and strategic legal planning with clients.',
    imageUrl: '/images/meeting.webp',
  },
];

const OfficeGallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleEnter = () => setHovering(true);
  const handleLeave = () => setHovering(false);

  return (
    <section
      id="office"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative py-20 bg-slate-950 border-t border-legal-900/60 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-legal-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-700/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-legal-gold/70">
              THE WORKSPACE
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-white">
              A Professional Environment
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
              Clients entrust sensitive matters to your office. This space has been designed to feel
              structured, focused, and reassuring at every step of their visit.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {officeImages.map((item, index) => (
            <Reveal key={item.id} delay={200 + index * 150} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl bg-slate-900/80 border border-legal-gold/10 shadow-[0_22px_60px_rgba(15,23,42,0.9)] office-card">
                <div className="relative aspect-[1/1] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={`${item.title} - PS Document Center office in Krishna Nagar East Delhi`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.03] group-hover:translate-y-1 group-hover:rotate-[0.5deg]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-legal-gold/80 backdrop-blur-sm border border-legal-gold/20 mb-3">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-legal-gold animate-pulse" />
                      {item.subtitle}
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-px w-6 bg-legal-gold/60" />
                      Discreet & client-focused
                    </span>
                    <span className="uppercase tracking-[0.16em] text-[10px] text-slate-500">
                      OFFICE VIEW
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-px rounded-2xl border border-legal-gold/0 group-hover:border-legal-gold/50 transition-[border-color,opacity] duration-500 opacity-60 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Pointer-follow PS logo0 accent */}
      <div
        className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          hovering ? 'opacity-90' : 'opacity-0'
        }`}
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      >
        <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-full bg-white/10 border border-legal-gold/40 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.4)] flex items-center justify-center animate-float-soft">
          <PSLogo className="h-11 w-11 sm:h-14 sm:w-14" />
        </div>
      </div>

      <style>{`
        .office-card {
          transform-origin: center;
          transition:
            transform 500ms cubic-bezier(0.22, 0.61, 0.36, 1),
            box-shadow 500ms ease,
            background 500ms ease;
        }
        .office-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.9);
          background: linear-gradient(160deg, rgba(17, 24, 39, 0.9) 0%, rgba(17, 24, 39, 0.75) 100%);
        }
        @keyframes floatSoft {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-soft {
          animation: floatSoft 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default OfficeGallery;


