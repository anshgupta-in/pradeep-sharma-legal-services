import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SEOContent from './components/SEOContent';
import OfficeGallery from './components/OfficeGallery';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 overflow-x-hidden">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <SEOContent />
        <Testimonials />
        <OfficeGallery />
        <Team />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <AIChat />
      <WhatsAppButton />
    </div>
  );
}

export default App;