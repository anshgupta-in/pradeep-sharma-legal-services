import React, { useState, useRef } from 'react';
import Reveal from './Reveal';
import { PSLogo, LAWYER_DETAILS } from '../constants';

const REVIEWS = [
  { id: 1, name: 'Rohit Malhotra', title: 'Property Registration', quote: 'Clear guidance and rapid turnaround on my property papers. Felt fully supported.', rating: 5 },
  { id: 2, name: 'Ananya Sen', title: 'High Court Matter', quote: 'Professional, composed, and meticulous in court preparation. Great experience.', rating: 5 },
  { id: 3, name: 'Vikram Ahuja', title: 'Family Settlement', quote: 'Balanced advice for all parties and flawless documentation. Highly recommended.', rating: 5 },
  { id: 4, name: 'Sonal Kapoor', title: 'Consultation', quote: 'Concise answers, practical steps, and timely follow-ups. Very reassuring.', rating: 5 },
  { id: 5, name: 'Harsh Mehta', title: 'Title Verification', quote: 'Thorough due diligence that saved us from risk. Excellent communication throughout.', rating: 5 },
  { id: 6, name: 'Meera Sharma', title: 'Lease Drafting', quote: 'Precise drafting and smooth registration. Made the entire process simple.', rating: 5 },
];

const StarRow = () => (
  <div className="flex gap-1 text-legal-gold stars-glow">
    {'★★★★★'}
  </div>
);

const Testimonials: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const googleReviewsRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (googleReviewsRef.current) {
      const rect = googleReviewsRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section className="relative py-16 bg-white border-t border-legal-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-multiply">
        <div className="absolute -top-24 -left-20 h-56 w-56 rounded-full bg-legal-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-700/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-10">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-legal-gold/70">Client Impressions</p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-slate-900">Consistently 5‑Star Service</h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
                Genuine feedback highlighting responsiveness, precision in documentation, and courtroom preparedness.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg">
              <StarRow />
              <span className="text-sm font-semibold">5.0 / 5</span>
            </div>
          </Reveal>
        </div>

        <div className="relative overflow-hidden testimonial-wind">
          <div className="animate-marquee flex gap-6 min-w-full max-w-full">
            {REVIEWS.concat(REVIEWS).map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="group relative overflow-hidden w-[280px] sm:w-80 flex-shrink-0 bg-white border border-legal-100 rounded-xl shadow-[0_18px_40px_rgba(15,23,42,0.08)] p-5 space-y-3 hover:-translate-y-2 transition-transform duration-300"
              >
                <span className="pointer-events-none absolute inset-[-15%] opacity-0 group-hover:opacity-100 animate-card-wind transition-opacity duration-300" />
                <StarRow />
                <p className="text-slate-700 text-sm leading-relaxed">“{review.quote}”</p>
                <div className="pt-1">
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-legal-gold">{review.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews Section */}
        <Reveal delay={400}>
          <div className="mt-16 pt-12 border-t border-legal-100">
            <div 
              ref={googleReviewsRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 sm:p-12 border border-legal-100 shadow-lg group overflow-hidden"
            >
              {/* Falling PS Logos Background Effect */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
                {Array.from({ length: 12 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="absolute ps-logo-fall"
                    style={{
                      left: `${(idx * 8.33) % 100}%`,
                      animationDelay: `${idx * 0.6}s`,
                      animationDuration: `${5 + (idx % 3) * 1.5}s`,
                    }}
                  >
                    <div className="text-legal-gold/12 scale-[0.6] sm:scale-[0.7]">
                      <PSLogo className="h-16 w-auto sm:h-20" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating PS Logo on Hover */}
              {isHovering && (
                <div
                  className="pointer-events-none absolute z-50 transition-opacity duration-300 animate-float-soft"
                  style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="text-legal-gold scale-[1.8] sm:scale-[2.2] drop-shadow-[0_4px_12px_rgba(184,135,94,0.4)]">
                    <PSLogo className="h-12 w-auto sm:h-14" />
                  </div>
                </div>
              )}

              {/* Content - Above falling logos */}
              <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-legal-gold">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-4">
                  Share Your Experience on Google
                </h3>
                <p className="text-slate-600 mb-8 text-sm sm:text-base">
                  Help others find trusted legal services. Your Google review helps build credibility and helps future clients make informed decisions.
                </p>
                <a
                  href={LAWYER_DETAILS.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white border-2 border-legal-gold text-legal-900 px-6 py-4 rounded-lg font-semibold hover:bg-legal-gold hover:text-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Zm8.25-3a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5H11.25v2.25a.75.75 0 0 1-1.5 0v-2.25H7.5a.75.75 0 0 1 0-1.5h2.25V8.25a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                  </svg>
                  Write a Review on Google
                </a>
                <p className="mt-4 text-xs text-slate-500">
                  Click the button above to find us on Google and leave your review
                </p>
              </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .animate-marquee {
          animation: marqueeTestimonials 28s linear infinite;
          width: fit-content;
        }
        .testimonial-wind::before {
          content: '';
          position: absolute;
          inset: -30% -10%;
          background:
            radial-gradient(120px circle at 12% 25%, rgba(252, 231, 243, 0.35), transparent 60%),
            radial-gradient(160px circle at 78% 70%, rgba(252, 231, 243, 0.25), transparent 70%),
            linear-gradient(95deg, rgba(252, 231, 243, 0.15), rgba(252, 231, 243, 0));
          filter: blur(14px);
          animation: windShift 16s linear infinite;
          pointer-events: none;
          opacity: 0.9;
        }
        @keyframes windShift {
          0%   { transform: translateX(0); }
          50%  { transform: translateX(-12%); }
          100% { transform: translateX(0); }
        }
        .animate-card-wind {
          background:
            radial-gradient(130px circle at 20% 20%, rgba(252, 231, 243, 0.7), transparent 55%),
            radial-gradient(180px circle at 80% 75%, rgba(252, 231, 243, 0.6), transparent 65%),
            linear-gradient(115deg, rgba(252, 231, 243, 0.45), rgba(252, 231, 243, 0.15));
          filter: blur(12px);
          animation: windShiftCard 12s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        @keyframes windShiftCard {
          0%   { transform: translateX(0) translateY(0); }
          50%  { transform: translateX(-6%) translateY(4%); }
          100% { transform: translateX(0) translateY(0); }
        }
        @keyframes marqueeTestimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .stars-glow {
          text-shadow:
            0 0 8px rgba(217, 119, 6, 0.6),
            0 0 16px rgba(217, 119, 6, 0.45);
          animation: starGlow 2.4s ease-in-out infinite;
        }
        @keyframes starGlow {
          0%, 100% {
            text-shadow:
              0 0 8px rgba(217, 119, 6, 0.6),
              0 0 16px rgba(217, 119, 6, 0.45);
            opacity: 1;
          }
          50% {
            text-shadow:
              0 0 14px rgba(217, 119, 6, 0.8),
              0 0 24px rgba(217, 119, 6, 0.55);
            opacity: 0.8;
          }
        }
        .animate-float-soft {
          animation: floatSoft 3s ease-in-out infinite;
        }
        @keyframes floatSoft {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .ps-logo-fall {
          animation: psLogoFall linear infinite;
          top: -10%;
          opacity: 0;
        }
        @keyframes psLogoFall {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(130%) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

