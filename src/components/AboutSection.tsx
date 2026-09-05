import React from 'react';
import { Award, CheckCircle2, Users, Wrench, Phone, HeartHandshake } from 'lucide-react';
import { PHONE_NUMBER, PHONE_CLEAN } from '../data/servicesData';

export const AboutSection: React.FC<{ onNavigateToContact: () => void }> = ({ onNavigateToContact }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase & Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80" 
                alt="Fix Dubai Professional Technician team at work"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/90 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-amber-400 font-extrabold text-sm uppercase tracking-wider">Master Craftsmen</span>
                <h4 className="font-heading font-black text-2xl">Dedicated UAE Service Squad</h4>
                <p className="text-xs text-gray-200 mt-1">Full cooperation with every client for clean, reliable results.</p>
              </div>
            </div>

            {/* Floating 25+ Years Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-[#ea580c] text-white p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-white z-20 max-w-[220px]">
              <span className="font-heading font-black text-4xl sm:text-5xl block text-white leading-none">25+</span>
              <span className="font-extrabold text-xs sm:text-sm uppercase tracking-wider block mt-1 text-orange-100">
                Years of Excellence in UAE Home Care
              </span>
            </div>

            {/* Floating Trust Badge Left */}
            <div className="absolute -top-6 -left-4 bg-[#0b2545] text-white p-4 rounded-2xl shadow-xl border-2 border-blue-800 z-20 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#f59e0b] shrink-0" />
              <div>
                <span className="text-xs font-bold block text-gray-300">Verified Quality</span>
                <span className="font-black text-sm">100% Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Column: Blueprint Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0b2545] px-3.5 py-1.5 rounded-full font-extrabold text-xs tracking-wider uppercase">
              <HeartHandshake className="w-4 h-4 text-[#ea580c]" />
              <span>About Fix Dubai</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0b2545] leading-tight">
              25 Years of Excellence in <span className="text-[#ea580c]">Home Maintenance</span>
            </h2>

            {/* Exact quote copy from user request */}
            <blockquote className="bg-gray-50 border-l-4 border-[#ea580c] p-6 rounded-r-2xl italic text-gray-700 font-medium text-base sm:text-lg leading-relaxed shadow-sm">
              "At Fix Dubai, we believe your home deserves the best care. Backed by 25 years of industry experience, our highly skilled and professional team is dedicated to bringing you top-quality maintenance services. Whether it's a minor repair or a complete home renovation, we work closely with you to ensure the job is done exactly to your satisfaction. Our team fully cooperates with every client to deliver fast, clean, and budget-friendly results."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <Users className="w-6 h-6 text-[#0b2545] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0b2545]">Cooperative Experts</h4>
                  <p className="text-xs text-gray-600 mt-0.5">We listen to what you want and execute exactly as you wish.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <Wrench className="w-6 h-6 text-[#ea580c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0b2545]">Fast & Clean Execution</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Prompt arrival, thorough protection of furnishings, zero post-work mess.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${PHONE_CLEAN}`}
                className="bg-[#0b2545] hover:bg-blue-900 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md transition text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#f59e0b]" />
                <span>Call Asif Direct: {PHONE_NUMBER}</span>
              </a>

              <button
                onClick={onNavigateToContact}
                className="bg-orange-100 hover:bg-orange-200 text-[#ea580c] font-extrabold px-6 py-3.5 rounded-xl transition text-sm"
              >
                Request Free Quote →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
