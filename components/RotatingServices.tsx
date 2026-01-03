import React, { useState, useEffect } from 'react';

const services = [
  'Affidavit & Certificate',
  'Property Document',
  'Domicile Certificate',
  'Income Certificate',
  'Legal Documentation'
];

const RotatingServices: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsVisible(true);
      }, 300); // Half of transition duration for smooth fade
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative min-w-[240px] sm:min-w-[280px] lg:min-w-[320px]">
      <span
        className={`inline-block transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        {services[currentIndex]}
      </span>
    </span>
  );
};

export default RotatingServices;

