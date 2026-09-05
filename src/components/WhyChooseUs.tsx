import React from 'react';
import { ShieldCheck, Clock, Award, DollarSign, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <Clock className="w-8 h-8 text-[#ea580c]" />,
      emoji: '⚡',
      title: '24/7 Emergency Service',
      description: 'We are always ready when you need us. Whether it is 2 AM or mid-summer afternoon, our UAE dispatch trucks are on standby.',
      badge: 'Always On Call'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      emoji: '⏱️',
      title: 'Fast & Clean Work',
      description: 'No mess left behind, done on time. We lay protective sheeting over floors and furniture before touching tools.',
      badge: '100% Spotless'
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      emoji: '💼',
      title: '25 Years Experience',
      description: 'An expert team you can fully trust. Backed by a quarter century of technical mastery across residential villas and apartments.',
      badge: 'Verified Experts'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#f59e0b]" />,
      emoji: '💰',
      title: 'Affordable Pricing',
      description: 'Premium work within your budget. Transparent AED quotes with zero hidden charges or surprise bill additions.',
      badge: 'Fair & Upfront'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-[#ea580c] uppercase bg-orange-100 px-3 py-1 rounded-full">
            Why Property Owners Choose Fix Dubai
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0b2545] mt-3">
            Peace of Mind for Your UAE Home
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            When AC compressors fail or water lines burst, you need a contractor who shows up fast, fixes it permanently, and treats your property with absolute respect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center transition">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-extrabold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg">
                    {pillar.emoji} {pillar.badge}
                  </span>
                </div>
                <h3 className="font-heading font-black text-xl text-[#0b2545] mb-2 group-hover:text-[#ea580c] transition">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-[#0b2545]">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Fix Dubai Guarantee</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
