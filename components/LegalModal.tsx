import React, { useEffect } from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-legal-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col animate-fade-in-up border border-legal-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-legal-100 bg-legal-50/50 rounded-t-xl">
          <h3 className="text-2xl font-serif font-bold text-legal-900">{title}</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-legal-gold transition-colors p-1"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 overflow-y-auto text-slate-600 space-y-4 leading-relaxed custom-scrollbar">
          {content}
        </div>
        
        {/* Footer */}
        <div className="p-5 border-t border-legal-100 bg-slate-50/50 rounded-b-xl flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-legal-900 text-white text-sm font-medium rounded hover:bg-legal-gold transition-colors shadow-md"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;