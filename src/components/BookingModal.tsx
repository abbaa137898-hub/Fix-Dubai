import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { X, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER, PHONE_CLEAN, EMIRATES_LIST, DUBAI_AREAS } from '../data/servicesData';

interface BookingModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [emirate, setEmirate] = useState('Dubai');
  const [timeSlot, setTimeSlot] = useState('⚡ Emergency (Next 45 mins)');
  const [area, setArea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const generateWaLink = () => {
    const txt = `Hello Fix Dubai,\n\nI want to BOOK service:\n*Service:* ${service.title}\n*Name:* ${name || 'UAE Client'}\n*Phone:* ${phone || 'N/A'}\n*Emirate:* ${emirate}\n*Area:* ${area}\n*Address:* ${address || 'TBD'}\n*Timing:* ${timeSlot}`;
    return `https://wa.me/971568374070?text=${encodeURIComponent(txt)}`;
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100">
        
        {/* Header */}
        <div className="bg-[#0b2545] text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-extrabold text-[#f59e0b] uppercase tracking-wider block">
              Instant Service Scheduling
            </span>
            <h3 className="font-heading font-black text-xl text-white mt-0.5">
              {service.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-heading font-black text-2xl text-[#0b2545]">Booking Reserved!</h4>
            <p className="text-gray-600 text-sm">
              We have booked technician slot for <span className="font-bold text-[#0b2545]">{service.title}</span> in <span className="font-bold text-[#ea580c]">{emirate}</span>. Our dispatch supervisor will call you within 5 minutes.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={generateWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-black py-3.5 rounded-xl text-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Confirm via WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-3.5 rounded-xl text-sm"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Abdullah M."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +971 50 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#ea580c] focus:outline-none font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Emirate</label>
                <select
                  value={emirate}
                  onChange={(e) => setEmirate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#ea580c] focus:outline-none bg-white font-semibold"
                >
                  {DUBAI_AREAS.map(area => <option key={area} value={area}>{area}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Timing Window</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#ea580c] focus:outline-none bg-white font-bold text-[#ea580c]"
                >
                  <option value="⚡ Emergency (Next 45 mins)">⚡ Emergency (Next 45 mins)</option>
                  <option value="🌅 Today Morning (8 AM - 12 PM)">🌅 Today Morning (8 AM - 12 PM)</option>
                  <option value="☀️ Today Afternoon (1 PM - 5 PM)">☀️ Today Afternoon (1 PM - 5 PM)</option>
                  <option value="🌙 Today Evening (6 PM - 10 PM)">🌙 Today Evening (6 PM - 10 PM)</option>
                  <option value="📅 Tomorrow / Flexible">📅 Tomorrow / Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Villa / Apartment # & Street</label>
              <input
                type="text"
                placeholder="e.g. Villa 14, Street 3, Al Barsha 1"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={generateWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-3.5 rounded-xl transition text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book via WhatsApp</span>
              </a>

              <button
                type="submit"
                className="flex-1 bg-[#0b2545] hover:bg-blue-900 text-white font-black py-3.5 rounded-xl transition text-sm shadow-md"
              >
                Confirm Booking Online
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
