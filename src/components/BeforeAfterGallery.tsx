import React, { useState } from 'react';
import { CORE_SERVICES } from '../data/servicesData';
import { ArrowLeftRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export const BeforeAfterGallery: React.FC = () => {
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({
    'ac-repair': 50,
    'plumbing': 50,
    'tiling-flooring': 50
  });

  const handleSliderChange = (serviceId: string, val: number) => {
    setSliderPositions(prev => ({ ...prev, [serviceId]: val }));
  };

  const galleryItems = CORE_SERVICES.filter(s => s.beforeAfter);

  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-3xl my-12 overflow-hidden shadow-2xl border border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-orange-500/20 text-[#f59e0b] border border-orange-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            Live Worksmanship Proof
          </span>
          <h3 className="font-heading font-black text-3xl sm:text-4xl mt-3 text-white">
            Before & After Transformations
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Slide across the images below to see messy breakdowns and dirty leaks transformed into pristine, clean Fix Dubai workmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => {
            const data = item.beforeAfter!;
            const pos = sliderPositions[item.id] || 50;

            return (
              <div key={item.id} className="bg-gray-800/80 rounded-2xl border border-gray-700 p-5 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading font-bold text-lg text-white">{item.title}</span>
                    <span className="text-xs bg-[#0b2545] text-amber-300 px-2.5 py-1 rounded font-bold">
                      {item.category}
                    </span>
                  </div>

                  {/* Interactive Comparison Slider Container */}
                  <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden select-none bg-gray-950 shadow-inner group">
                    {/* After Image (Background full width) */}
                    <img 
                      src={data.afterImg} 
                      alt={data.afterTitle} 
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />

                    {/* Before Image (Clipping container over top) */}
                    <div 
                      className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none border-r-2 border-[#f59e0b]"
                      style={{ width: `${pos}%` }}
                    >
                      <img 
                        src={data.beforeImg} 
                        alt={data.beforeTitle} 
                        className="absolute inset-0 w-full h-full object-cover max-w-none"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>

                    {/* Slider Line & Drag Knob */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-[#f59e0b] shadow-2xl pointer-events-none transform -translate-x-1/2 flex items-center justify-center"
                      style={{ left: `${pos}%` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#ea580c] text-white border-2 border-white flex items-center justify-center shadow-lg">
                        <ArrowLeftRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Invisible Range Input Overlay */}
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={pos} 
                      onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                      aria-label="Compare Before and After image"
                    />

                    {/* Labels */}
                    <div className="absolute top-3 left-3 z-10 bg-red-600/90 backdrop-blur-sm text-white text-[10px] font-extrabold px-2 py-1 rounded shadow flex items-center gap-1 pointer-events-none">
                      <AlertTriangle className="w-3 h-3" /> BEFORE ({pos}%)
                    </div>
                    <div className="absolute top-3 right-3 z-10 bg-green-600/90 backdrop-blur-sm text-white text-[10px] font-extrabold px-2 py-1 rounded shadow flex items-center gap-1 pointer-events-none">
                      <CheckCircle2 className="w-3 h-3" /> AFTER FINISH
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs border-b border-gray-700 pb-3">
                    <div className="text-red-300">
                      <span className="font-bold block text-red-400">Before:</span>
                      {data.beforeTitle}
                    </div>
                    <div className="text-green-300">
                      <span className="font-bold block text-green-400">After:</span>
                      {data.afterTitle}
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs mt-3 leading-relaxed">
                    {data.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-xs text-gray-400">
                  <span>✨ 100% Clean Site Assurance</span>
                  <span className="text-[#f59e0b] font-bold">Drag slider horizontally</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
