import React from 'react';
import { PROPERTY_TYPES, PHONE_NUMBER, PHONE_CLEAN, WHATSAPP_LINK } from '../data/servicesData';
import { Building2, CheckCircle2, ShieldAlert, Phone, MessageSquare, Sparkles } from 'lucide-react';

export const PropertiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black tracking-widest text-[#ea580c] uppercase bg-orange-100 px-3.5 py-1.5 rounded-full">
            Active Property Portfolios
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#0b2545] mt-3">
            Tailored Maintenance by Property Type
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            Whether you own a family villa in Arabian Ranches, a high-rise studio in Dubai Marina, or a bustling retail store, we structure our teams to match your property's exact architectural specs.
          </p>
        </div>

        {/* Properties Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROPERTY_TYPES.map((prop) => (
            <div 
              key={prop.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/90 via-[#0b2545]/30 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                      {prop.subtitle}
                    </span>
                    <h3 className="font-heading font-black text-2xl text-white">
                      {prop.title}
                    </h3>
                  </div>
                  {prop.amcAvailable && (
                    <div className="absolute top-4 right-4 bg-[#ea580c] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      AMC Contracts Available
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {prop.description}
                  </p>

                  <h4 className="text-xs font-black text-[#0b2545] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#ea580c]" />
                    Property Care Highlights:
                  </h4>
                  <ul className="space-y-2.5">
                    {prop.keyServices.map((srv, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 sm:p-8 pt-0 bg-white">
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${PHONE_CLEAN}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#0b2545] hover:bg-blue-900 text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition shadow"
                  >
                    <Phone className="w-4 h-4 text-[#f59e0b]" />
                    <span>Inquire Now</span>
                  </a>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Annual Maintenance Contract Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0b2545] to-[#134074] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-orange-500/20 text-[#f59e0b] border border-orange-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Annual Maintenance Contracts (AMC)
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-4xl text-white leading-tight">
              Protect Your Villa or Commercial Building All Year Round
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mt-2">
              Avoid costly emergency breakdowns during peak 45°C summer months. Get scheduled quarterly AC overhauls, plumbing inspections, and priority 30-minute response status.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0b2545] hover:bg-gray-100 font-extrabold px-6 py-4 rounded-2xl shadow-xl transition transform hover:scale-105 text-sm flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Inquire via WhatsApp</span>
            </a>

            <a
              href={`tel:${PHONE_CLEAN}`}
              className="bg-[#ea580c] hover:bg-orange-600 text-white font-black px-6 py-4 rounded-2xl shadow-xl transition transform hover:scale-105 text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call AMC Team: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
