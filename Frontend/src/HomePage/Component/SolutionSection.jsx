import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solution" className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full inline-block mb-4">
            The Sere Innovations Way
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            A smart incubator that puts you in control
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            No more dependency. No more delayed cycles. Just affordable, hands‑off hatching – right on your farm.
          </p>
        </div>

        {/* Main content: two column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left side: Animated SVG illustration (arrows static) */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 md:w-80 lg:w-96 group">
              {/* Decorative background with slow pulse */}
              <div className="absolute inset-0 bg-green-200/30 rounded-full blur-2xl -z-10 animate-pulse"></div>
              
              {/* SVG illustration with floating animation */}
              <div className="relative animate-float">
                <svg viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
                  {/* Incubator base */}
                  <rect x="50" y="50" width="200" height="170" rx="24" fill="#2D6A4F" fillOpacity="0.9" stroke="#1B4332" strokeWidth="3" />
                  <rect x="65" y="65" width="170" height="110" rx="12" fill="#F8F9FA" />
                  
                  {/* Three eggs with gentle bounce */}
                  <ellipse cx="110" cy="110" rx="14" ry="18" fill="#E9C46A" stroke="#D4A373" strokeWidth="1.5" className="animate-egg-bounce" style={{ animationDelay: '0s' }} />
                  <ellipse cx="150" cy="115" rx="14" ry="18" fill="#E9C46A" stroke="#D4A373" strokeWidth="1.5" className="animate-egg-bounce" style={{ animationDelay: '0.3s' }} />
                  <ellipse cx="190" cy="110" rx="14" ry="18" fill="#E9C46A" stroke="#D4A373" strokeWidth="1.5" className="animate-egg-bounce" style={{ animationDelay: '0.6s' }} />
                  
                  {/* Rotation arrows – static, no spinning */}
                  <g>
                    <path d="M95 98 Q 110 85 125 98" stroke="#E76F51" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                    <path d="M135 103 Q 150 90 165 103" stroke="#E76F51" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                    <path d="M175 98 Q 190 85 205 98" stroke="#E76F51" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                  </g>
                  
                  {/* Arrow marker definition */}
                  <defs>
                    <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0 0 L6 3 L0 6 Z" fill="#E76F51" />
                    </marker>
                  </defs>
                  
                  {/* Temperature / humidity display with pulse */}
                  <rect x="75" y="190" width="150" height="24" rx="6" fill="#E9C46A" />
                  <text x="150" y="207" fontSize="12" fill="#1B4332" fontWeight="bold" textAnchor="middle" className="animate-pulse-text">🌡️ 37.5°C | 💧 55%</text>
                  
                  {/* Hatching chick (emerging from third egg) – gentle bob */}
                  <g className="animate-hatch-bob">
                    {/* Cracked egg overlay */}
                    <ellipse cx="190" cy="100" rx="16" ry="20" fill="#F4E285" stroke="#D4A373" strokeWidth="1.5" strokeDasharray="3 3" />
                    {/* Chick body */}
                    <circle cx="190" cy="88" r="9" fill="#F4A261" />
                    <circle cx="187" cy="85" r="1.5" fill="#1B4332" />
                    <circle cx="193" cy="85" r="1.5" fill="#1B4332" />
                    <path d="M190 89 L188 94 L192 94 Z" fill="#E76F51" />
                    <path d="M183 91 L178 87 L181 94 Z" fill="#E9C46A" />
                    <path d="M197 91 L202 87 L199 94 Z" fill="#E9C46A" />
                  </g>
                  
                  {/* Small label with fade */}
                  <text x="190" y="140" fontSize="9" fill="#2D6A4F" fontWeight="bold" textAnchor="middle" className="animate-fadeIn">Hatching!</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right side: solution points (unchanged) */}
          <div className="flex-1 space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">①</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Hatch on your own farm</h3>
                <p className="text-gray-600">No more transporting eggs or buying costly chicks. With Sere's incubator, you become your own hatchery.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">②</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Automatic environment control</h3>
                <p className="text-gray-600">The system manages temperature, humidity, and egg turning automatically – ideal for farmers without technical training.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">③</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Affordable at ~₹10,000</h3>
                <p className="text-gray-600">Priced for small and marginal farmers, with low maintenance costs. You recover investment within a few hatching cycles.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">④</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Built from real farmer needs</h3>
                <p className="text-gray-600">Every feature was designed after talking to poultry farmers across rural India. No useless complexity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust reinforcement */}
        <div className="mt-12 text-center bg-white/60 rounded-2xl p-5 max-w-2xl mx-auto border border-green-100">
          <p className="text-gray-700 text-sm md:text-base">
            🌟 <span className="font-semibold">No technical degree needed.</span> Plug, set, and hatch. We've made it <span className="text-green-700 font-medium">farmer‑friendly</span> from day one.
          </p>
        </div>
      </div>

      {/* Custom keyframes (no spin rule) */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes egg-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes pulse-text {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; text-shadow: 0 0 3px rgba(46, 125, 50, 0.5); }
        }
        @keyframes hatch-bob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-egg-bounce {
          animation: egg-bounce 2s ease-in-out infinite;
          transform-origin: center;
        }
        .animate-pulse-text {
          animation: pulse-text 2s ease-in-out infinite;
        }
        .animate-hatch-bob {
          animation: hatch-bob 2.5s ease-in-out infinite;
          transform-origin: 190px 100px;
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default SolutionSection;