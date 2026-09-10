import React, { useState } from 'react';
import { Phone, Mail, Clock, MessageSquare, CheckCircle2, Send, ExternalLink } from 'lucide-react';
import { PHONE_NUMBER, PHONE_CLEAN, EMAIL_ADDRESS, CORE_SERVICES, EMIRATES_LIST, DUBAI_AREAS, DUBIZZLE_PROFILE_LINK, FACEBOOK_PAGE_LINK } from '../data/servicesData';
import { QuoteFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    emirate: 'Dubai',
    serviceNeeded: 'AC Repairing & Installation',
    propertyType: 'Villa',
    urgency: 'Emergency (Within 45 mins)',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello FIX DUBAI,\n\nI would like a free quote / service booking:\n*Name:* ${formData.fullName || 'UAE Homeowner'}\n*Phone:* ${formData.phone || 'N/A'}\n*Emirate:* ${formData.emirate}\n*Service Needed:* ${formData.serviceNeeded}\n*Property:* ${formData.propertyType}\n*Urgency:* ${formData.urgency}\n*Details:* ${formData.message || 'Please contact me ASAP.'}`;
    return `https://wa.me/971568374070?text=${encodeURIComponent(text)}`;
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header exact from blueprint */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black tracking-widest text-[#ea580c] uppercase bg-orange-100 px-3.5 py-1.5 rounded-full">
            24/7 Dispatch & Free Quotes
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#0b2545] mt-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-base sm:text-xl font-medium mt-3">
            "Have a problem in your home? Don't worry, we can fix it! Contact our team today for a free quote."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details from Blueprint */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#0b2545] to-[#134074] rounded-3xl p-8 text-white shadow-xl space-y-6">
              <div>
                <span className="text-amber-400 text-xs font-extrabold uppercase tracking-wider block mb-1">
                  Direct Hotline
                </span>
                <h3 className="font-heading font-black text-2xl text-white">
                  We are Available Right Now
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Connect with Master Technician Asif Mirza and dispatch team instantly.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Phone / WhatsApp */}
                <a
                  href={`tel:${PHONE_CLEAN}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition border border-white/10 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ea580c] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-300 block font-bold">📞 Phone / WhatsApp:</span>
                    <span className="font-mono font-black text-lg text-white group-hover:text-amber-300 transition">
                      {PHONE_NUMBER}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition border border-white/10 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-gray-300 block font-bold">✉️ Email:</span>
                    <span className="font-medium text-sm sm:text-base text-white truncate block">
                      {EMAIL_ADDRESS}
                    </span>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-[#f59e0b] flex items-center justify-center text-[#0b2545] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-300 block font-bold">🕒 Working Hours:</span>
                    <span className="font-heading font-black text-base text-white">
                      24 Hours / 7 Days a week
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp trigger */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 rounded-2xl shadow-lg transition text-base"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Instant WhatsApp Dispatch →</span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={DUBIZZLE_PROFILE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-2xl shadow transition text-xs sm:text-sm"
                  >
                    <span>Verified dubizzle Profile</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>

                  <a
                    href={FACEBOOK_PAGE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-2xl shadow transition text-xs sm:text-sm"
                  >
                    <span>Follow on Facebook</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Quick Contact Form from Blueprint */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-200">
              <h3 className="font-heading font-black text-2xl text-[#0b2545] mb-2">
                Quick Contact Request Form
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6">
                Fill out fields below. Choose whether to submit online or dispatch straight to WhatsApp with pre-filled details!
              </p>

              {formSubmitted ? (
                <div className="py-16 text-center space-y-4 bg-white rounded-2xl border border-green-200 p-8 shadow-sm">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading font-black text-2xl text-[#0b2545]">Request Received!</h4>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Master technician Asif Mirza's dispatch desk has received your request for <span className="font-bold text-[#0b2545]">{formData.serviceNeeded}</span>. We will call you within 5 to 15 minutes!
                  </p>
                  <div className="pt-4">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white font-extrabold px-6 py-3 rounded-xl text-sm"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleStandardSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-[#0b2545] uppercase mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Tariq Al-Sayed"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ea580c] focus:outline-none bg-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-[#0b2545] uppercase mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +971 50 123 4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ea580c] focus:outline-none bg-white text-sm font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-[#0b2545] uppercase mb-1.5">
                        Service Needed (Dropdown) <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ea580c] focus:outline-none bg-white text-sm font-semibold"
                      >
                        {CORE_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-[#0b2545] uppercase mb-1.5">
                        Dubai Area
                      </label>
                      <select
                        name="emirate"
                        value={formData.emirate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ea580c] focus:outline-none bg-white text-sm font-semibold"
                      >
                        {DUBAI_AREAS.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-[#0b2545] uppercase mb-1.5">
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ea580c] focus:outline-none bg-white text-sm"
                      >
                        <option value="Residential Villa">Residential Villa</option>
                        <option value="Apartment / Flat">Apartment / Flat</option>
                        <option value="Commercial Shop / Office">Commercial Shop / Office</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-[#0b2545] uppercase mb-1.5">
                        Response Urgency
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ea580c] focus:outline-none bg-white text-sm font-bold text-[#ea580c]"
                      >
                        <option value="Emergency (Within 45 mins)">⚡ Emergency (Within 45 mins)</option>
                        <option value="Today / Tomorrow">📅 Today / Tomorrow</option>
                        <option value="Standard Appointment">📆 Standard Scheduled Date</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#0b2545] uppercase mb-1.5">
                      Message Box / Problem Description
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Describe the problem (e.g. AC leaking water from indoor split unit, kitchen tiles cracked, need full apartment repainting)..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ea580c] focus:outline-none bg-white text-sm"
                    ></textarea>
                  </div>

                  {/* Dual Submit Options */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 text-sm"
                    >
                      <MessageSquare className="w-5 h-5 fill-current" />
                      <span>Submit via WhatsApp (Instant)</span>
                    </a>

                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#0b2545] hover:bg-blue-900 text-white font-black py-4 rounded-xl shadow-lg transition text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Online Form</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
