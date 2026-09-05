import React from 'react';
import { X, Download, Printer, CheckCircle, ShieldCheck, Clock, Award, Phone, Mail, MapPin, Snowflake, Zap, Wrench, Grid, Paintbrush, Hammer, Home } from 'lucide-react';
import { CORE_SERVICES, PHONE_NUMBER, EMAIL_ADDRESS, EMIRATES_LIST } from '../data/servicesData';
import { generatePdfBrochure } from '../utils/generatePdfBrochure';

interface PdfBrochureModalProps {
  onClose: () => void;
}

export const PdfBrochureModal: React.FC<PdfBrochureModalProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Snowflake': return <Snowflake className="w-5 h-5 text-blue-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-cyan-600" />;
      case 'Grid': return <Grid className="w-5 h-5 text-emerald-600" />;
      case 'Paintbrush': return <Paintbrush className="w-5 h-5 text-purple-600" />;
      case 'Hammer': return <Hammer className="w-5 h-5 text-orange-600" />;
      case 'Home': return <Home className="w-5 h-5 text-indigo-600" />;
      default: return <Award className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-gray-200">
        
        {/* Modal Action Header (Not printed) */}
        <div className="bg-[#0b2545] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 print:hidden">
          <div>
            <span className="bg-orange-500 text-white text-[11px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full mb-2 inline-block">
              OFFICIAL COMPANY DOCUMENT
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              Fix Dubai Company Profile & Rate Card
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Download our official PDF brochure with complete service rates & SLA guarantees
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={() => generatePdfBrochure()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download PDF
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2.5 rounded-xl text-sm transition cursor-pointer"
              title="Print Brochure"
            >
              <Printer className="w-4 h-4" /> Print
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-red-500/80 text-white transition cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Brochure View */}
        <div id="printable-brochure" className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-gray-50/50 text-gray-800">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#0b2545] to-[#1e3a5f] text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-l-8 border-orange-500">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center font-black text-xl text-white shadow-md">
                  FD
                </div>
                <div>
                  <h1 className="text-2xl font-black tracking-tight leading-none">FIX DUBAI</h1>
                  <span className="text-xs text-orange-400 font-semibold uppercase tracking-wider">Dubai Technical & Building Services L.L.C</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md">
                Certified residential and commercial maintenance contractors providing 24/7 emergency dispatch across Dubai & the UAE.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-xs space-y-1.5 min-w-[220px]">
              <div className="flex items-center gap-2 font-bold text-orange-400">
                <Phone className="w-4 h-4" /> {PHONE_NUMBER}
              </div>
              <div className="flex items-center gap-2 text-gray-200">
                <Mail className="w-4 h-4 text-gray-400" /> {EMAIL_ADDRESS}
              </div>
              <div className="flex items-center gap-2 text-gray-200">
                <MapPin className="w-4 h-4 text-gray-400" /> Dubai, United Arab Emirates
              </div>
            </div>
          </div>

          {/* SLA Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
              <div className="p-2.5 bg-red-50 text-red-600 rounded-lg shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">45-Min Emergency Response</h4>
                <p className="text-xs text-gray-500 mt-0.5">24/7 rapid dispatch for AC breakdown, electrical tripping & burst pipes.</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">6-Month Work Warranty</h4>
                <p className="text-xs text-gray-500 mt-0.5">Every repair is guaranteed with official invoice & replacement assurance.</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">100% Upfront Pricing</h4>
                <p className="text-xs text-gray-500 mt-0.5">Transparent rate card with zero surprise costs or unapproved charges.</p>
              </div>
            </div>
          </div>

          {/* Rate Card Table */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h3 className="font-extrabold text-gray-900 text-base">Complete Services & Capabilities</h3>
                <p className="text-xs text-gray-500">Comprehensive solutions for residential villas & apartments in Dubai</p>
              </div>
              <span className="text-xs font-bold bg-green-100 text-green-800 px-3 py-1 rounded-full">
                Certified & Inspected
              </span>
            </div>

            <div className="divide-y divide-gray-100">
              {CORE_SERVICES.map((service, idx) => (
                <div key={service.id} className="p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-gray-50/80 transition">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 shrink-0">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h4 className="font-bold text-gray-900 text-base">{service.title}</h4>
                        {service.emergencyAvailable && (
                          <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded">
                            24/7 Emergency
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-1 max-w-xl leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {service.features.slice(0, 3).map((f, i) => (
                          <span key={i} className="text-[11px] bg-gray-100 text-gray-700 font-medium px-2.5 py-0.5 rounded-md">
                            ✓ {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0 bg-gray-50 sm:bg-transparent p-3 sm:p-0 rounded-xl w-full sm:w-auto flex sm:block justify-between items-center border border-gray-100 sm:border-0">
                    <span className="text-xs font-semibold text-gray-400 sm:block">Availability</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0b2545]">
                      Free Quote / On-Demand
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage & Footer Banner */}
          <div className="bg-[#0b2545] text-white p-6 rounded-2xl text-center space-y-3">
            <h4 className="font-black text-lg">Need Immediate Service or Custom Villa Maintenance Contract?</h4>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto">
              We cover Dubai Marina, Downtown Dubai, Palm Jumeirah, Business Bay, Jumeirah Village Circle (JVC), Arabian Ranches, Dubai Hills, and all 7 Emirates.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:+971568374070" 
                className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-md"
              >
                <Phone className="w-4 h-4" /> Call {PHONE_NUMBER}
              </a>
              <button
                onClick={() => generatePdfBrochure()}
                className="inline-flex items-center gap-2 bg-white text-[#0b2545] font-bold px-5 py-2.5 rounded-xl text-sm shadow-md hover:bg-gray-100 transition cursor-pointer"
              >
                <Download className="w-4 h-4" /> Save PDF Copy
              </button>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 pt-2 border-t border-gray-200">
            © 2026 Fix Dubai L.L.C — All Rights Reserved. Verified Technical Services Provider.
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-gray-100 border-t border-gray-200 flex items-center justify-between print:hidden">
          <span className="text-xs font-medium text-gray-600">
            Tip: You can attach this PDF when sending quotes to clients or landlords!
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-xl text-sm transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
