import React, { useState } from 'react';
import { Service, TeamMember } from './types';

// Icons
export const Icons = {
  Gavel: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      {/* Classic court gavel icon */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 5.25 18.75 9.75M11.25 8.25l4.5 4.5M5.25 6.75l4.5 4.5M4.5 19.5h15M8.25 5.25l-3 3 4.5 4.5 3-3m-1.5 7.5h3"
      />
    </svg>
  ),
  DocumentCheck: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
    </svg>
  ),
  Building: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  ),
  Email: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  ),
};

// PS Logo Component with sophisticated error handling
export const PSLogo = ({ className = "h-12 w-12" }: { className?: string }) => {
  const [imgError, setImgError] = useState(false);

  // If image fails to load, show this high-quality vector fallback
  if (imgError) {
    return (
      <div 
        className={`${className} flex items-center justify-center text-legal-gold`}
        title="Pradeep Sharma Legal"
      >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094.787 2.036 1.872 2.18-2.087.377-4.231.57-6.375.57-2.144 0-4.288-.193-6.375-.57 1.085-.144 1.872-1.086 1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.675.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
         </svg>
      </div>
    );
  }

  // Attempts to load logo.webp relative to current page
  return (
    <img 
      src="/logo.webp" 
      alt="Pradeep Sharma Logo" 
      width={200}
      height={80}
      className={`${className} object-contain`} 
      onError={() => setImgError(true)}
    />
  );
};

export const SERVICES: Service[] = [
  {
    id: 'prop-doc',
    title: 'Property Documentation',
    description: 'Specialized Document Center services for deeds, sale agreements, and property registration.',
    icon: <Icons.Building />
  },
  {
    id: 'high-court',
    title: 'High Court Litigation',
    description: 'Expert representation at the Delhi High Court for civil and property disputes.',
    icon: <Icons.Gavel />
  },
  {
    id: 'legal-advice',
    title: 'Property Legal Advice',
    description: 'Comprehensive legal advice on all kinds of residential and commercial properties.',
    icon: <Icons.DocumentCheck />
  },
  {
    id: 'consult',
    title: 'General Consultation',
    description: 'Professional legal guidance for personal and business legal matters.',
    icon: <Icons.Users />
  }
];

export const DETAILED_SERVICES = [
  "Registration of Sale Deed",
  "Conveyance Deed",
  "Gift Deed",
  "Rent Agreement",
  "Partition Deed",
  "Will",
  "Power of Attorney",
  "Affidavit",
  "Converted Leasehold into Freehold",
  "Marriage Certificate",
  "Surviving Member Certificate",
  "Income Certificate",
  "Domicile Certificate",
  "OBC Certificate",
  "SC Certificate"
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Commercial Complex Registration",
    category: "Property Registration",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "Successful registration of a 50,000 sq ft commercial complex in South Delhi, handling all sub-registrar compliances and stamp duty verification."
  },
  {
    id: 2,
    title: "High Court Stay Vacated",
    category: "Litigation",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    description: "Represented client in Delhi High Court to successfully vacate a long-standing stay order on a prime residential property in Vasant Vihar."
  },
  {
    id: 3,
    title: "Family Partition Deed",
    category: "Documentation",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800",
    description: "Drafted and registered a complex family partition deed involving multiple stakeholders and assets across NCR, preventing future disputes."
  }
];

export const LAWYER_DETAILS = {
  name: "Pradeep Sharma",
  title: "Advocate • Delhi High Court",
  subtitle: "Years Experience",
  cases: "25+",
  experience: "25+ Years",
  bio: "Pradeep Sharma is a distinguished legal practitioner based in Delhi, specializing in property law, civil litigation, and documentation. With over two decades of experience at the Delhi High Court and district courts, he provides strategic legal counsel for complex property disputes, registration processes, and family settlements.",
  address: "118, Street No.5, South Anarkali, Krishna Nagar, Delhi-110051",
  phone: "+91 99998 20270",
  email: "contact@pradeepsharma.legal",
  officeHours: "Mon - Fri: 10:00 AM - 8:00 PM",
  imageUrl: "/images/team3.webp"
};

export const TEAM: TeamMember[] = [
  {
    id: '3',
    name: "Abhishek Gupta",
    role: "Documentation Specialist",
    bio: "Focuses on precision in drafting and end-to-end registration support.",
    imageUrl: "/images/team3.webp"
  },
  {
    id: '1',
    name: "Nikhil Kumar",
    role: "Documentation Specialist",
    bio: "Focuses on precision in drafting and end-to-end registration support.",
    imageUrl: "/images/image.webp"
  },
  {
    id: '2',
    name: "Sahil Verma",
    role: "Documentation Specialist",
    bio: "Focuses on precision in drafting and end-to-end registration support.",
    imageUrl: "/images/team2.webp"
  }
];
