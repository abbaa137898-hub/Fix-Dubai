import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CORE_SERVICES, PHONE_CLEAN } from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  Snowflake, 
  Droplets, 
  Zap, 
  LayoutGrid, 
  Paintbrush, 
  Hammer, 
  Home, 
  Wrench,
  CheckCircle2, 
  Phone, 
  Clock, 
  CalendarCheck2,
  ArrowRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: ServiceItem) => void;
  onNavigateToRoute?: (route: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectServiceForBooking,
  onNavigateToRoute 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Services');
  const navigate = useNavigate();

  const categories = [
    'All Services', 
    'Cooling & HVAC', 
    'Plumbing & Drainage', 
    'Electrical & Power', 
    'Comprehensive AMC & Handyman',
    'Renovation & Finishes', 
    'Interior & Exterior', 
    'Wood & Joinery', 
    'Full Remodeling'
  ];

  const filteredServices = activeCategory === 'All Services' 
    ? CORE_SERVICES 
    : CORE_SERVICES.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Snowflake': return <Snowflake className="w-7 h-7 text-[#0b2545]" />;
      case 'Droplets': return <Droplets className="w-7 h-7 text-blue-600" />;
      case 'Zap': return <Zap className="w-7 h-7 text-[#f59e0b]" />;
      case 'LayoutGrid': return <LayoutGrid className="w-7 h-7 text-emerald-600" />;
      case 'Paintbrush': return <Paintbrush className="w-7 h-7 text-purple-600" />;
      case 'Hammer': return <Hammer className="w-7 h-7 text-amber-700" />;
      case 'Home': return <Home className="w-7 h-7 text-[#ea580c]" />;
      case 'Wrench': return <Wrench className="w-7 h-7 text-[#ea580c]" />;
      default: return <Home className="w-7 h-7 text-[#0b2545]" />;
    }
  };

  const handleCardClick = (route?: string) => {
    if (route) {
      if (onNavigateToRoute) {
        onNavigateToRoute(route);
      } else {
        navigate(route);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-[#ea580c] uppercase bg-orange-100 px-3.5 py-1.5 rounded-full">
            Our 8 Core UAE Maintenance Services
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#0b2545] mt-3">
            Fast, Clean & Reliable Solutions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            Explore our specialized maintenance divisions below. Click <span className="font-bold text-[#0b2545]">View Service Details</span> to see comprehensive specifications & UAE standards, or <span className="font-bold text-[#0b2545]">Book Now</span> for instant scheduling.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition ${
                  activeCategory === cat
                    ? 'bg-[#0b2545] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              onClick={() => handleCardClick(service.route)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group transform hover:-translate-y-1.5 cursor-pointer"
            >
              <div>
                {/* Service Featured Image Banner if available */}
                {(service.image || service.beforeAfter?.afterImg) && (
                  <div 
                    className="relative h-52 w-full overflow-hidden bg-gray-100 border-b border-gray-100"
                  >
                    <img 
                      src={service.image || service.beforeAfter?.afterImg} 
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    {service.emergencyAvailable && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 bg-red-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-lg">
                          <Clock className="w-3 h-3" /> 24/7 Emergency
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Top Card Header */}
                <div className="p-6 sm:p-8 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-14 h-14 rounded-2xl bg-gray-100 group-hover:bg-orange-100 flex items-center justify-center transition shadow-sm"
                    >
                      {getIcon(service.iconName)}
                    </div>
                    {service.emergencyAvailable && !(service.image || service.beforeAfter?.afterImg) && (
                      <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-[11px] font-extrabold px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3" /> 24/7 Emergency
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-extrabold text-[#ea580c] uppercase tracking-wider block">
                    {service.category}
                  </span>
                  <h3 
                    className="font-heading font-black text-2xl text-[#0b2545] mt-1 group-hover:text-[#ea580c] transition"
                  >
                    {service.route ? (
                      <Link 
                        to={service.route} 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(service.route);
                        }}
                      >
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Features List */}
                <div className="px-6 sm:px-8 py-4 bg-gray-50/70 border-y border-gray-100 space-y-2">
                  <h4 className="text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-2">
                    Key Deliverables:
                  </h4>
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dedicated Page Link & Bottom Price & Book Now CTA */}
              <div className="p-6 sm:p-8 pt-4 bg-white space-y-4">
                {service.route && (
                  <Link
                    to={service.route}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(service.route);
                    }}
                    className="w-full text-left flex items-center justify-between text-xs font-bold text-[#ea580c] hover:text-orange-700 transition py-1 group/btn border-b border-gray-100 pb-3"
                  >
                    <span>View Full Service Details & FAQs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                )}

                <div className="flex items-center gap-2 w-full">
                  <a
                    href={`tel:${PHONE_CLEAN}`}
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-gray-100 hover:bg-gray-200 text-[#0b2545] rounded-xl font-bold transition flex items-center justify-center shrink-0"
                    title="Call Now for Instant Dispatch"
                  >
                    <Phone className="w-5 h-5" />
                  </a>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectServiceForBooking(service);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-orange-600 text-white font-extrabold px-5 py-3 rounded-xl shadow-md transition transform active:scale-95 text-sm"
                  >
                    <CalendarCheck2 className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
