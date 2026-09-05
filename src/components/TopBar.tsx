import React from 'react';
import { Phone, Clock, MapPin, ShieldCheck, Flame, ExternalLink } from 'lucide-react';
import { PHONE_NUMBER, PHONE_CLEAN, WHATSAPP_LINK, DUBIZZLE_PROFILE_LINK, FACEBOOK_PAGE_LINK } from '../data/servicesData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0b2545] text-white text-xs sm:text-sm py-2 px-3 border-b border-blue-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        
        {/* Left: Emergency badge & hours */}
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 bg-[#ea580c] text-white px-2.5 py-0.5 rounded-full font-bold text-xs animate-pulse">
            <Flame className="w-3.5 h-3.5 fill-current" />
            24/7 EMERGENCY DISPATCH
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-gray-200">
            <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
            Arrival in ~45 Mins across UAE
          </span>
          <span className="inline-flex items-center gap-1 text-gray-300 text-xs">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            Dubai, UAE • All Communities
          </span>
        </div>

        {/* Right: Quick action links */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center font-medium">
          <a
            href={DUBIZZLE_PROFILE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-red-600/90 hover:bg-red-600 text-white px-2.5 py-1 rounded text-xs font-bold shadow-sm transition"
          >
            <span>Verified dubizzle</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={FACEBOOK_PAGE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-blue-600/90 hover:bg-blue-600 text-white px-2.5 py-1 rounded text-xs font-bold shadow-sm transition"
          >
            <span>Facebook Page</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={`tel:${PHONE_CLEAN}`}
            className="flex items-center gap-1.5 bg-[#f59e0b] hover:bg-amber-600 text-[#0b2545] font-extrabold px-3 py-1 rounded-md shadow-sm transition transform hover:scale-105 text-xs sm:text-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-current animate-bounce" />
            Call: {PHONE_NUMBER}
          </a>
        </div>

      </div>
    </div>
  );
};
