import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, Wrench, ChevronDown } from 'lucide-react';
import { NavigationTab } from '../types';
import { PHONE_NUMBER, PHONE_CLEAN, WHATSAPP_LINK } from '../data/servicesData';
import { CORE_SERVICES } from '../data/servicesData';

interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  onNavigateToRoute?: (route: string) => void;
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onNavigateToRoute,
  currentPath = '/'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'properties', label: 'Properties' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceRouteClick = (route: string) => {
    if (onNavigateToRoute) {
      onNavigateToRoute(route);
    } else {
      navigate(route);
    }
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrentServicePage = currentPath !== '/';

  return (
    <nav className="bg-white text-[#0b2545] shadow-lg sticky top-[37px] sm:top-[38px] z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo */}
          <Link 
            to="/"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0b2545] to-[#134074] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition">
              <Wrench className="w-6 h-6 text-[#f59e0b]" />
            </div>
            <div>
              <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-[#0b2545] block leading-none">
                FIX <span className="text-[#ea580c]">DUBAI</span>
              </span>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block mt-0.5">
                Dubai & UAE Property Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => {
              if (link.id === 'services') {
                return (
                  <div 
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`px-3 py-2 text-sm font-bold rounded-lg transition flex items-center gap-1 ${
                        (activeTab === 'services' && !isCurrentServicePage) || isCurrentServicePage
                          ? 'text-[#ea580c] bg-orange-50 underline decoration-2 underline-offset-8'
                          : 'text-gray-700 hover:text-[#0b2545] hover:bg-gray-100'
                      }`}
                    >
                      <span>Our Services</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 mt-1 animate-fadeIn z-50">
                        <div className="px-4 py-2 border-b border-gray-100 mb-1">
                          <span className="text-[11px] font-extrabold uppercase text-[#ea580c] tracking-wider block">
                            Dedicated Service Pages
                          </span>
                        </div>
                        <div className="max-h-96 overflow-y-auto divide-y divide-gray-50">
                          {CORE_SERVICES.map((srv) => (
                            <Link
                              key={srv.id}
                              to={srv.route || '/'}
                              onClick={() => srv.route && handleServiceRouteClick(srv.route)}
                              className={`w-full text-left px-4 py-2.5 hover:bg-orange-50 transition flex items-center justify-between group ${
                                currentPath === srv.route ? 'bg-orange-50 text-[#ea580c] font-extrabold' : 'text-gray-700'
                              }`}
                            >
                              <div>
                                <span className="font-bold text-xs sm:text-sm block group-hover:text-[#ea580c]">
                                  {srv.title}
                                </span>
                                <span className="text-[10px] text-gray-500 block">
                                  {srv.category}
                                </span>
                              </div>
                              <span className="text-[11px] text-[#ea580c] font-bold opacity-0 group-hover:opacity-100 transition">
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="px-4 pt-2 mt-2 border-t border-gray-100">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-center text-xs font-bold text-[#0b2545] hover:text-[#ea580c] transition py-1"
                          >
                            View All Services Overview →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-bold rounded-lg transition ${
                    activeTab === link.id && !isCurrentServicePage
                      ? 'text-[#ea580c] bg-orange-50 underline decoration-2 underline-offset-8'
                      : 'text-gray-700 hover:text-[#0b2545] hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={`tel:${PHONE_CLEAN}`}
              className="flex items-center gap-2 border-2 border-[#0b2545] text-[#0b2545] hover:bg-[#0b2545] hover:text-white font-extrabold px-3.5 py-2.5 rounded-xl text-xs sm:text-sm transition duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>{PHONE_NUMBER}</span>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 text-xs sm:text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] text-white font-extrabold px-3 py-2 rounded-lg text-xs"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#0b2545] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-gray-100">
            {navLinks.map((link) => {
              if (link.id === 'services') {
                return (
                  <button
                    key={link.id}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold transition flex items-center justify-between ${
                      activeTab === link.id
                        ? 'bg-orange-100 text-[#ea580c]'
                        : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold transition ${
                    activeTab === link.id && !isCurrentServicePage
                      ? 'bg-orange-100 text-[#ea580c]'
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Expandable Mobile Services List */}
          {mobileServicesOpen && (
            <div className="bg-gray-50 p-3 rounded-xl space-y-1.5 border border-gray-200">
              <span className="text-[10px] font-black uppercase text-[#ea580c] tracking-wider block mb-1">
                Dedicated Service Pages:
              </span>
              {CORE_SERVICES.map((srv) => (
                <Link
                  key={srv.id}
                  to={srv.route || '/'}
                  onClick={() => srv.route && handleServiceRouteClick(srv.route)}
                  className="w-full text-left text-xs font-semibold py-1.5 px-2 hover:bg-white rounded-lg text-gray-700 flex items-center justify-between"
                >
                  <span>{srv.title}</span>
                  <span className="text-[#ea580c] text-[10px] font-bold">View →</span>
                </Link>
              ))}
              <button
                onClick={() => handleNavClick('services')}
                className="w-full text-center text-xs font-extrabold text-[#0b2545] pt-2 border-t border-gray-200 block"
              >
                All Services Overview
              </button>
            </div>
          )}

          <div className="space-y-2 pt-2">
            <a
              href={`tel:${PHONE_CLEAN}`}
              className="w-full flex items-center justify-center gap-2 bg-[#0b2545] text-white font-black py-3 rounded-xl text-sm shadow-md"
            >
              <Phone className="w-4 h-4 fill-current text-[#f59e0b]" />
              <span>Call Now: {PHONE_NUMBER}</span>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-black py-3 rounded-xl text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
