import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Wrench, Phone, Mail, Clock, MapPin, ShieldCheck, Flame, ExternalLink } from 'lucide-react';
import { PHONE_NUMBER, PHONE_CLEAN, EMAIL_ADDRESS, WHATSAPP_LINK, DUBIZZLE_PROFILE_LINK, FACEBOOK_PAGE_LINK } from '../data/servicesData';
import { NavigationTab } from '../types';
import { CORE_SERVICES, DUBAI_AREAS } from '../data/servicesData';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
  onNavigateToRoute?: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateToRoute }) => {
  const navigate = useNavigate();

  const handleServiceClick = (route?: string) => {
    if (route) {
      if (onNavigateToRoute) {
        onNavigateToRoute(route);
      } else {
        navigate(route);
      }
    } else {
      onNavigate('services');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b2545] text-white border-t-4 border-[#ea580c] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link 
              to="/"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#ea580c] flex items-center justify-center text-white shadow group-hover:scale-105 transition">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-black text-xl tracking-tight block leading-none text-white">
                  FIX <span className="text-[#ea580c]">DUBAI</span>
                </span>
                <span className="text-[10px] text-amber-300 font-bold uppercase tracking-widest block mt-0.5">
                  25+ Years UAE Mastery • fixdubai.pro
                </span>
              </div>
            </Link>

            <p className="text-gray-300 text-xs leading-relaxed">
              Your home handled with care. Fast, clean, and reliable maintenance across Dubai, Abu Dhabi, and Sharjah. We do it exactly as you wish!
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 bg-green-900/60 text-green-300 border border-green-500/30 px-2.5 py-1 rounded text-[11px] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Contractor
              </span>
              <span className="inline-flex items-center gap-1 bg-orange-900/60 text-orange-300 border border-orange-500/30 px-2.5 py-1 rounded text-[11px] font-bold">
                <Flame className="w-3.5 h-3.5" /> 24/7 Response
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-amber-300 mb-4">
              Explore Blueprint Pages
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#f59e0b] transition text-left">
                  → 1. Home Page & Emergency Callout
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#f59e0b] transition text-left">
                  → 2. About Us (25 Years Story)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#f59e0b] transition text-left">
                  → 3. Our Services (8 Core Specialties)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('properties')} className="hover:text-[#f59e0b] transition text-left">
                  → 4. Properties (Villas & Apartments)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-[#f59e0b] transition text-left">
                  → 5. Reviews & Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#f59e0b] transition text-left">
                  → 6. Contact Us & Quote Form
                </button>
              </li>
            </ul>
          </div>

          {/* Dedicated Core Services Links */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-amber-300 mb-4">
              Dedicated Service Pages
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 font-medium">
              {CORE_SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link 
                    to={srv.route || '/'}
                    onClick={() => handleServiceClick(srv.route)}
                    className="hover:text-[#ea580c] transition text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#ea580c] font-bold">›</span>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Dubai Service Areas */}
<div className="mt-8">
  <h4 className="font-heading font-black text-sm uppercase tracking-wider text-white mb-4">
    Areas We Serve
  </h4>

  <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-xs text-gray-300">
    {DUBAI_AREAS.map((area) => (
      <li key={area}>
        <span className="hover:text-[#ea580c] transition">
          {area}
        </span>
      </li>
    ))}
  </ul>
</div>

          {/* Direct Contact Hotline */}
          <div className="space-y-3">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-amber-300 mb-4">
              24/7 Direct Contact
            </h4>
            
            <a 
              href={`tel:${PHONE_CLEAN}`}
              className="flex items-center gap-2.5 bg-blue-900/80 hover:bg-[#ea580c] p-3 rounded-xl transition text-xs font-extrabold group"
            >
              <Phone className="w-4 h-4 text-[#f59e0b] group-hover:text-white" />
              <span>📞 {PHONE_NUMBER}</span>
            </a>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] p-3 rounded-xl transition text-xs font-extrabold text-white"
            >
              <span>🟢 Chat on WhatsApp Now</span>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={DUBIZZLE_PROFILE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 p-2.5 rounded-xl transition text-[11px] font-extrabold text-white"
              >
                <span>dubizzle Profile</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>

              <a
                href={FACEBOOK_PAGE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 p-2.5 rounded-xl transition text-[11px] font-extrabold text-white"
              >
                <span>Facebook Page</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>

            <div className="text-xs text-gray-300 space-y-1.5 pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">{EMAIL_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24 Hours / 7 Days a week</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                <span>Dubai • Abu Dhabi • Sharjah • Ajman</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
          <div>
            © {new Date().getFullYear()} FIX DUBAI (fixdubai.pro). All rights reserved. Professional Dubai & UAE Home Services.
          </div>
          <div className="flex items-center gap-6">
            <span>Fast • Clean • Reliable</span>
            <span>•</span>
            <span className="text-amber-400 font-bold">"We do it exactly as you wish!"</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
