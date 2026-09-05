import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, ShieldCheck, Clock, CheckCircle2, Award, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { PHONE_NUMBER, PHONE_CLEAN, WHATSAPP_LINK, DUBIZZLE_PROFILE_LINK, FACEBOOK_PAGE_LINK } from '../data/servicesData';
import { NavigationTab } from '../types';
import dubaiHeroBanner from '../assets/images/dubai_hero_banner_1783092029024.jpg';

interface HeroSectionProps {
  onNavigate: (tab: NavigationTab) => void;
  onNavigateToRoute?: (route: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onNavigateToRoute }) => {
  const navigate = useNavigate();

  const handleRouteClick = (route: string) => {
    if (onNavigateToRoute) {
      onNavigateToRoute(route);
    } else {
      navigate(route);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="relative bg-[#0b2545] text-white overflow-hidden py-14 sm:py-20 lg:py-24 border-b-4 border-[#ea580c]">
      
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={dubaiHeroBanner}
          alt="Dubai Skyline Home Maintenance Banner"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Semi-transparent dark navy overlay to ensure pristine contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2545]/90 via-[#0b2545]/75 to-[#071931]/85"></div>
      </div>

      {/* Subtle Background pattern overlay */}
      <div className="absolute inset-0 z-[1] opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Main Blueprint Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-amber-300">
              <Award className="w-4 h-4 text-[#f59e0b]" />
              <span>🇦🇪 UAE's Most Trusted 24/7 Home Maintenance Partner</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight sm:leading-none text-white">
              Your Home, Handled with Care. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#ea580c]">
                Fast, Clean & Reliable.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-200 text-lg sm:text-xl font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <span className="font-bold text-white">25+ Years of Expert Home Maintenance in the UAE.</span> Available 24/7 across Dubai, Abu Dhabi & Sharjah. <br />
              <span className="text-amber-300 italic font-semibold">"We do it exactly as you wish!"</span>
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                <span>45-Min Emergency</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                <span>No Mess Left Behind</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                <span>Free Inspection Quotes</span>
              </div>
            </div>

            {/* Primary Buttons exactly from Blueprint */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href={`tel:${PHONE_CLEAN}`}
                className="flex items-center justify-center gap-3 bg-[#ea580c] hover:bg-orange-600 text-white font-black px-6 py-4 rounded-2xl shadow-xl hover:shadow-orange-500/30 transition transform hover:-translate-y-1 text-base sm:text-lg border-2 border-orange-400"
              >
                <Phone className="w-6 h-6 animate-pulse" />
                <span>📞 Call: {PHONE_NUMBER}</span>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black px-6 py-4 rounded-2xl shadow-xl hover:shadow-green-500/30 transition transform hover:-translate-y-1 text-base sm:text-lg border-2 border-green-400"
              >
                <MessageSquare className="w-6 h-6 fill-current" />
                <span>💬 Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-300">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#f59e0b]" />
                24 Hours / 7 Days a week
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                100% Satisfaction Guaranteed
              </span>
            </div>

            {/* Official Social Profiles */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={DUBIZZLE_PROFILE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-red-500/50 px-3.5 py-2 rounded-xl text-xs font-bold transition backdrop-blur-sm group"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>Verified dubizzle Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-0.5 sm:transition-transform" />
              </a>

              <a
                href={FACEBOOK_PAGE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-blue-500/50 px-3.5 py-2 rounded-xl text-xs font-bold transition backdrop-blur-sm group"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 sm:transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: High Conversion Interactive Card & Visual Assurance */}
          <div className="lg:col-span-5">
            <div className="bg-white text-[#0b2545] rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-amber-500 text-white font-extrabold text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-sm">
                Instant Response
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-[#ea580c]">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-[#0b2545] leading-tight">
                    Got a Home Problem?
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    AC failure, water leak, or renovation need? We fix it today!
                  </p>
                </div>
              </div>

              {/* Quick interactive shortcuts */}
              <div className="space-y-3">
                <Link
                  to="/ac-repairing-Installation"
                  onClick={() => handleRouteClick('/ac-repairing-Installation')}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 transition group text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">❄️</span>
                    <div>
                      <span className="font-bold text-sm text-[#0b2545] group-hover:text-[#ea580c] block">
                        AC Broken or Not Cooling?
                      </span>
                      <span className="text-xs text-gray-500">Emergency service • Gas refilling • Servicing</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#ea580c] group-hover:translate-x-1 transition" />
                </Link>

                <Link
                  to="/plumbing-works"
                  onClick={() => handleRouteClick('/plumbing-works')}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 transition group text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🚰</span>
                    <div>
                      <span className="font-bold text-sm text-[#0b2545] group-hover:text-[#ea580c] block">
                        Plumbing Leak or Blockage?
                      </span>
                      <span className="text-xs text-gray-500">Water heaters • Pipe leaks • Bathroom works</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#ea580c] group-hover:translate-x-1 transition" />
                </Link>
              </div>

              {/* Direct Quote button */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-400 block">CALL 24/7 HOTLINE</span>
                  <span className="font-mono font-black text-base text-[#0b2545]">{PHONE_NUMBER}</span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow transition"
                >
                  Free Quote →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
