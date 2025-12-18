import React, { useState } from 'react';
import { PSLogo } from '../constants';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    setModalOpen(true);
    switch (type) {
      case 'disclaimer':
        setModalTitle('Legal Disclaimer');
        setModalContent(
          <div className="space-y-4 text-sm sm:text-base">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
              <p className="text-amber-800 font-medium">
                <strong>Attention:</strong> As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise.
              </p>
            </div>
            
            <h4 className="font-bold text-legal-900 text-lg">Voluntary Access</h4>
            <p>
              By visiting this website, you acknowledge that you are doing so voluntarily to obtain information about Pradeep Sharma and his legal services. There has been no solicitation, advertisement, or inducement by the Advocate or his associates.
            </p>
            
            <h4 className="font-bold text-legal-900 text-lg">Information Only</h4>
            <p>
              The content provided on this website is for informational purposes only and should not be interpreted as legal advice or opinion. Use of this site does not create an attorney-client relationship.
            </p>
            
            <h4 className="font-bold text-legal-900 text-lg">Liability</h4>
            <p>
              Pradeep Sharma is not liable for any consequence of any action taken by the user relying on material/information provided on this website. For any specific legal issues, the user should seek independent legal advice.
            </p>
          </div>
        );
        break;
      case 'privacy':
        setModalTitle('Privacy Policy');
        setModalContent(
           <div className="space-y-4 text-sm sm:text-base">
            <p>
              At Juris Counsel / Pradeep Sharma Legal, we value your privacy and are committed to protecting your personal information.
            </p>
            
            <h4 className="font-bold text-legal-900 text-lg">Data Collection</h4>
            <p>
              We collect personal information such as your Name, Email Address, Phone Number, and Case Details only when you voluntarily submit them through our "Contact Us" or "Book Appointment" forms.
            </p>
            
            <h4 className="font-bold text-legal-900 text-lg">Use of Information</h4>
            <p>
              The information collected is used solely for the purpose of scheduling appointments, responding to your legal inquiries, and communicating regarding your case. We do not sell, trade, or share your information with third parties.
            </p>
            
            <h4 className="font-bold text-legal-900 text-lg">Confidentiality</h4>
            <p>
              As per the Advocates Act, 1961, all communications between a client and their advocate are privileged and confidential. We maintain strict security measures to safeguard your data.
            </p>
          </div>
        );
        break;
      case 'terms':
        setModalTitle('Terms of Use');
        setModalContent(
           <div className="space-y-4 text-sm sm:text-base">
            <p>
              Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with the following terms and conditions of use.
            </p>
            
            <h4 className="font-bold text-legal-900 text-lg">Intellectual Property</h4>
            <p>
              The content, layout, design, data, and graphics on this website are owned by Pradeep Sharma. Reproduction is prohibited other than in accordance with the copyright notice.
            </p>
            
            <h4 className="font-bold text-legal-900 text-lg">Limitation of Liability</h4>
            <p>
              The content on this website is for general information and use only. It is subject to change without notice. We shall not be liable for any inaccuracies or errors in the information provided.
            </p>
            
            <h4 className="font-bold text-legal-900 text-lg">Jurisdiction</h4>
            <p>
              Any dispute arising out of the use of this website is subject to the laws of India and the exclusive jurisdiction of the courts in Delhi.
            </p>
          </div>
        );
        break;
    }
  };

  return (
    <footer className="bg-legal-50 border-t border-legal-100 text-legal-900 pt-16 pb-8">
        <LegalModal 
            isOpen={modalOpen} 
            onClose={() => setModalOpen(false)} 
            title={modalTitle} 
            content={modalContent} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="text-legal-gold transition-transform origin-left scale-[2.4] sm:scale-[2.8] drop-shadow-[0_6px_18px_rgba(15,23,42,0.35)]">
                          <PSLogo className="h-12 w-auto sm:h-14" />
                        </div>
                        <div className="flex flex-col translate-y-[6px] pl-4 sm:pl-6">
                            <span className="text-2xl font-serif font-bold block leading-none">Pradeep Sharma</span>
                            <span className="text-xs uppercase tracking-widest text-legal-gold">Advocate • Delhi High Court</span>
                            <span className="text-xs text-slate-600 mt-1">Legal Advisor of all Kinds of Properties</span>
                        </div>
                    </div>
                    <p className="text-slate-600 max-w-sm mb-6">
                        Dedicated "Document Center" providing legal advisory for properties and civil litigation. Excellence in every deed.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-legal-gold">Navigate</h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li><a href="#home" className="hover:text-legal-900 transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-legal-900 transition-colors">About</a></li>
                        <li><a href="#services" className="hover:text-legal-900 transition-colors">Services provided</a></li>
                        <li><a href="#contact" className="hover:text-legal-900 transition-colors">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                     <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-legal-gold">Legal</h4>
                     <ul className="space-y-3 text-sm text-slate-600">
                        <li>
                            <button 
                                onClick={() => openModal('privacy')} 
                                className="hover:text-legal-900 transition-colors text-left"
                            >
                                Privacy Policy
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => openModal('terms')} 
                                className="hover:text-legal-900 transition-colors text-left"
                            >
                                Terms of Use
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => openModal('disclaimer')} 
                                className="hover:text-legal-900 transition-colors text-left"
                            >
                                Disclaimer
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-legal-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} Pradeep Sharma. All rights reserved.</p>
                <p className="mt-2 md:mt-0">118, Street No.5, South Anarkali, Krishna Nagar, Delhi-110051</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;