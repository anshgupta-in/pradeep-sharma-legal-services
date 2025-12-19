import React from 'react';
import { LAWYER_DETAILS, Icons } from '../constants';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-base text-legal-gold font-semibold tracking-wide uppercase">Location</h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Visit Our Office
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:grid lg:grid-cols-2 hover:shadow-2xl transition-shadow duration-500">
              {/* Contact Info */}
              <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Get In Touch</h3>
                  
                  <div className="space-y-6">
                      <div className="flex items-start group">
                          <div className="flex-shrink-0 text-legal-gold mt-1 group-hover:scale-125 transition-transform duration-300">
                              <Icons.MapPin />
                          </div>
                          <div className="ml-4">
                              <p className="text-sm font-medium text-slate-900">Our Address</p>
                              <p className="text-base text-slate-500 mt-1">{LAWYER_DETAILS.address}</p>
                          </div>
                      </div>

                      <div className="flex items-start group">
                          <div className="flex-shrink-0 text-legal-gold mt-1 group-hover:scale-125 transition-transform duration-300">
                              <Icons.Phone />
                          </div>
                          <div className="ml-4">
                              <p className="text-sm font-medium text-slate-900">Phone</p>
                              <p className="text-base text-slate-500 mt-1">{LAWYER_DETAILS.phone}</p>
                              {LAWYER_DETAILS.alternatePhone && (
                                <p className="text-sm text-slate-500 mt-1">Alt: {LAWYER_DETAILS.alternatePhone}</p>
                              )}
                          </div>
                      </div>

                      <div className="flex items-start group">
                          <div className="flex-shrink-0 text-legal-gold mt-1 group-hover:scale-125 transition-transform duration-300">
                               <Icons.Email />
                          </div>
                          <div className="ml-4">
                              <p className="text-sm font-medium text-slate-900">Email</p>
                              <p className="text-base text-slate-500 mt-1">{LAWYER_DETAILS.email}</p>
                          </div>
                      </div>
                      
                       <div className="pt-6 border-t border-slate-100">
                           <h4 className="text-sm font-bold text-slate-900 mb-2">Office Hours</h4>
                           <p className="text-slate-500">{LAWYER_DETAILS.officeHours}</p>
                           <p className="text-slate-500">Sat - Sun: Closed</p>
                       </div>
                  </div>
              </div>

              {/* Google Map Embed */}
              <div className="relative h-96 lg:h-full bg-slate-200">
                 {(() => {
                   const encodedAddress = encodeURIComponent(LAWYER_DETAILS.address);
                   const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
                   const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}&travelmode=driving`;
                   return (
                    <>
                 <iframe 
                        src={mapEmbedUrl}
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                 ></iframe>
                      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                        <a
                          href={directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md text-legal-900 text-sm font-semibold shadow-lg border border-legal-100 hover:bg-legal-gold hover:text-white transition-all duration-200"
                          title="Open route from your location"
                        >
                          <span className="text-legal-gold">↗</span>
                          Get Route
                        </a>
                      </div>
                    </>
                   );
                 })()}
              </div>
          </div>
        </Reveal>
       </div>
    </section>
  );
};

export default Contact;