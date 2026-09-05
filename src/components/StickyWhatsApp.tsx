import React, { useState } from 'react';
import { MessageSquare, X, Send, Phone } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_CLEAN, PHONE_NUMBER } from '../data/servicesData';

export const StickyWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const text = customMsg.trim() 
      ? `Hello Fix Dubai,\n\n${customMsg}` 
      : 'Hello Fix Dubai, I need an urgent home maintenance service.';
    window.open(`https://wa.me/971568374070?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Popover Chat window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 sm:w-88 mb-3 overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="bg-[#0b2545] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-black text-lg shadow">
                FD
              </div>
              <div>
                <span className="font-heading font-black text-sm block leading-tight">Fix Dubai Dispatch</span>
                <span className="text-[10px] text-green-400 flex items-center gap-1 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Online 24/7 (Average reply 3 mins)
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat body simulation */}
          <div className="p-4 bg-[#e5ddd5]/30 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-gray-800 max-w-[85%] border border-gray-100">
              👋 <strong>Marhaban!</strong> Welcome to Fix Dubai UAE. Need emergency AC repair, leak fixing, or a free painting quote?
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-gray-800 max-w-[85%] border border-gray-100">
              Type your problem below or click to chat directly with our team!
            </div>
          </div>

          {/* Quick Input */}
          <form onSubmit={handleSendCustom} className="p-3 bg-white border-t border-gray-100 space-y-2">
            <input
              type="text"
              placeholder="e.g. My AC is blowing warm air in Dubai..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#25D366] focus:outline-none"
            />
            <div className="flex items-center gap-2">
              <a
                href={`tel:${PHONE_CLEAN}`}
                className="p-2.5 bg-gray-100 hover:bg-gray-200 text-[#0b2545] rounded-xl font-bold transition flex items-center justify-center gap-1 text-xs shrink-0"
                title={`Call ${PHONE_NUMBER}`}
              >
                <Phone className="w-3.5 h-3.5" /> Call
              </a>
              <button
                type="submit"
                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 text-xs shadow-md"
              >
                <Send className="w-3.5 h-3.5" /> Send WhatsApp
              </button>
            </div>
          </form>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition duration-300 group relative border-4 border-white"
        aria-label="Chat on WhatsApp"
      >
        {!isOpen && (
          <span className="absolute -top-2 -left-2 bg-[#ea580c] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider animate-bounce shadow">
            24/7 Live
          </span>
        )}
        <MessageSquare className="w-7 h-7 fill-current" />
      </button>

    </div>
  );
};
