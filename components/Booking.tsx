import React, { useState, useRef } from 'react';
import { SERVICES } from '../constants';
import { AppointmentData } from '../types';
import Reveal from './Reveal';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    serviceType: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking requested:", formData);
    
    // Format WhatsApp message with booking details
    const whatsappMessage = `Hello, I would like to book a consultation.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service:* ${formData.serviceType || 'Not specified'}
*Preferred Date:* ${formData.date || 'Not specified'}
*Message:* ${formData.notes || 'No additional notes'}

Please confirm my appointment slot. Thank you!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp phone number (remove + and spaces)
    const whatsappNumber = "919999820270";
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        serviceType: '',
        notes: ''
      });
    }, 5000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      id="book" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-24 bg-legal-900 text-white relative overflow-hidden group"
    >
      {/* Background Decorative Element - Original Static Pulse */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-legal-gold opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      {/* Mouse Tracking Spotlight Effect - White/Pink Line/Glow */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(198, 142, 118, 0.15), rgba(255, 255, 255, 0.05), transparent 40%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="mb-12 lg:mb-0">
            <Reveal>
              <h2 className="text-legal-gold font-bold tracking-widest uppercase text-sm mb-4">Consultation</h2>
              <h2 className="text-4xl font-serif text-white mb-6 leading-tight">
                Book an Appointment <br/> with <span className="italic text-legal-gold">Pradeep Sharma</span>
              </h2>
              <p className="text-lg text-legal-100 mb-6 font-light">
                Expert legal advice is just a click away. Secure your slot for property consultation or documentation verification today.
              </p>
              <div className="mb-10 p-4 bg-legal-800/50 border border-legal-gold/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.763.372-.242.297-.93.909-.93 2.218 0 1.308.967 2.574 1.102 2.75.134.174 1.9 2.898 4.602 4.072.653.33 1.163.526 1.559.673.653.244 1.247.21 1.715.127.515-.09 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-legal-gold mb-1">WhatsApp Integration</p>
                    <p className="text-xs text-legal-100 leading-relaxed">After submitting the form, WhatsApp will automatically open with your booking details. Simply send the message to confirm your appointment!</p>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <div className="space-y-6">
                <Reveal delay={200}>
                  <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-legal-800 flex items-center justify-center text-legal-gold border border-legal-gold/20 shadow-lg relative overflow-hidden">
                          <div className="absolute inset-0 bg-legal-gold/10 rounded-full animate-ping opacity-20"></div>
                          <span className="relative z-10">1</span>
                      </div>
                      <div>
                          <p className="font-serif text-lg font-semibold">Submit Details</p>
                          <p className="text-sm text-slate-400">Fill out the form with your inquiry.</p>
                      </div>
                  </div>
                </Reveal>
                <Reveal delay={400}>
                   <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-legal-800 flex items-center justify-center text-legal-gold border border-legal-gold/20 shadow-lg">
                          2
                      </div>
                      <div>
                          <p className="font-serif text-lg font-semibold">WhatsApp Confirmation</p>
                          <p className="text-sm text-slate-400">WhatsApp opens automatically. Send the message to confirm your appointment.</p>
                      </div>
                  </div>
                </Reveal>
            </div>
          </div>

          <Reveal delay={300} className="h-full">
            <div className="bg-white rounded-none p-8 sm:p-12 text-slate-900 shadow-2xl border-t-4 border-legal-gold hover:shadow-legal-gold/20 transition-shadow duration-500 relative z-20">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-legal-900">Request Received</h3>
                  <p className="mt-2 text-slate-500">WhatsApp message opened! Please send it to confirm your appointment.</p>
                  <p className="mt-1 text-sm text-slate-400">We will contact you at {formData.phone} shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-legal-50 border-0 border-b-2 border-legal-100 focus:border-legal-gold focus:ring-0 px-0 py-3 transition-colors bg-transparent placeholder-slate-400"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-legal-50 border-0 border-b-2 border-legal-100 focus:border-legal-gold focus:ring-0 px-0 py-3 transition-colors bg-transparent placeholder-slate-400"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-legal-50 border-0 border-b-2 border-legal-100 focus:border-legal-gold focus:ring-0 px-0 py-3 transition-colors bg-transparent placeholder-slate-400"
                        placeholder="+91 9999..."
                      />
                    </div>
                  </div>
                  <div>
                      <label htmlFor="serviceType" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Service Interest</label>
                      <select
                        name="serviceType"
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-legal-50 border-0 border-b-2 border-legal-100 focus:border-legal-gold focus:ring-0 px-0 py-3 transition-colors bg-transparent text-slate-900"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                        <option value="other">Other Inquiry</option>
                      </select>
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Message</label>
                    <textarea
                      name="notes"
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full bg-legal-50 border-0 border-b-2 border-legal-100 focus:border-legal-gold focus:ring-0 px-0 py-3 transition-colors bg-transparent placeholder-slate-400"
                      placeholder="Briefly describe your legal matter..."
                    ></textarea>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-legal-900 text-white font-serif text-lg hover:bg-legal-gold hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.763.372-.242.297-.93.909-.93 2.218 0 1.308.967 2.574 1.102 2.75.134.174 1.9 2.898 4.602 4.072.653.33 1.163.526 1.559.673.653.244 1.247.21 1.715.127.515-.09 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Submit Request
                    </button>
                    <p className="mt-3 text-xs text-slate-500 text-center flex items-center justify-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-green-500">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.763.372-.242.297-.93.909-.93 2.218 0 1.308.967 2.574 1.102 2.75.134.174 1.9 2.898 4.602 4.072.653.33 1.163.526 1.559.673.653.244 1.247.21 1.715.127.515-.09 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp will open automatically after submission
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Booking;