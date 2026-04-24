import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-green-50 via-white to-emerald-50/30 pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-5 animate-pulse">
              🌱 Empowering Small Poultry Farmers
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Hatch your own chicks,{' '}
              <span className="text-green-700">cut costs,</span>{' '}
              and grow with confidence
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-6">
              Sere Innovations’ smart incubator gives you automatic temperature, 
              humidity & egg turning – no tech degree required. 
              Start hatching at your farm, not someone else’s hatchery.
            </p>
            <p className="text-gray-500 text-sm mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="text-green-600">✓</span> Used by 500+ small farms 
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="text-green-600">✓</span> Affordable ~₹10,000
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-700 cursor-pointer hover:bg-green-800 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                Enquire Now →
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 cursor-pointer border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200"
              >
                See How It Works
              </button>
            </div>
          </div>
          
          {/* Right: SVG Illustration + Animated elements */}
          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <div className="relative w-72 sm:w-80 md:w-96 lg:w-[450px] group">
              {/* Decorative background with slow pulse */}
              <div className="absolute inset-0 bg-green-200/40 rounded-full blur-2xl -z-10 transform scale-110 animate-pulse"></div>
              
              {/* SVG illustration with floating animation */}
              <div className="relative z-10 animate-float">
                <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
                  {/* Incubator body */}
                  <rect x="80" y="70" width="240" height="190" rx="24" fill="#2D6A4F" fillOpacity="0.9" stroke="#1B4332" strokeWidth="3" />
                  <rect x="95" y="85" width="210" height="130" rx="16" fill="#D8F3DC" />
                  
                  {/* Eggs with gentle bounce animation */}
                  <ellipse cx="145" cy="140" rx="18" ry="24" fill="#F4E285" stroke="#D4A373" strokeWidth="2" className="animate-egg-bounce" style={{ animationDelay: '0s' }} />
                  <ellipse cx="200" cy="150" rx="18" ry="24" fill="#F4E285" stroke="#D4A373" strokeWidth="2" className="animate-egg-bounce" style={{ animationDelay: '0.3s' }} />
                  <ellipse cx="255" cy="140" rx="18" ry="24" fill="#F4E285" stroke="#D4A373" strokeWidth="2" className="animate-egg-bounce" style={{ animationDelay: '0.6s' }} />
                  
                  {/* Hatching chick (cracked egg) with pop animation */}
                  <ellipse cx="200" cy="120" rx="20" ry="26" fill="#F4E285" stroke="#D4A373" strokeWidth="2" strokeDasharray="4 3" />
                  <g className="animate-hatch">
                    <circle cx="200" cy="108" r="10" fill="#F4A261" />
                    <circle cx="197" cy="105" r="2" fill="#1B4332" />
                    <circle cx="203" cy="105" r="2" fill="#1B4332" />
                    <path d="M200 110 L198 116 L202 116 Z" fill="#E76F51" />
                    <path d="M192 112 L186 108 L190 116 Z" fill="#E9C46A" />
                    <path d="M208 112 L214 108 L210 116 Z" fill="#E9C46A" />
                  </g>
                  
                  {/* Control panel with glow effect on power button */}
                  <rect x="110" y="230" width="180" height="24" rx="8" fill="#F8F9FA" stroke="#40916C" strokeWidth="2" />
                  <circle cx="130" cy="242" r="5" fill="#E63946" className="animate-pulse" />
                  <rect x="145" y="238" width="35" height="8" rx="2" fill="#40916C" />
                  <rect x="190" y="238" width="35" height="8" rx="2" fill="#40916C" />
                  
                  {/* Temperature & humidity with fade animation */}
                  <text x="125" y="195" fontSize="13" fill="#1B4332" fontWeight="bold" className="animate-fadeIn">🌡️ 37.5°C</text>
                  <text x="235" y="195" fontSize="13" fill="#1B4332" fontWeight="bold" className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>💧 55%</text>
                  
                  {/* Farmer-friendly badge with slide animation */}
                  <g className="animate-slideIn">
                    <rect x="280" y="150" width="100" height="30" rx="15" fill="#F4A261" />
                    <text x="285" y="170" fontSize="11" fill="#2D6A4F" fontWeight="bold">👩‍🌾 Easy to use</text>
                  </g>
                </svg>
              </div>
              
              {/* Title below SVG (no longer inside SVG, avoids overlap) */}
              <div className="text-center mt-4">
                <p className="text-lg md:text-xl font-bold text-gray-800">Smart Incubation System</p>
              </div>
              
              {/* Floating trust badge - now positioned below title to prevent overlap */}
              <div className="absolute -bottom-11 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-green-200 text-sm font-medium text-gray-700">
                ⭐ Auto egg turning • Real farmer feedback
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom keyframes for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes egg-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes hatch {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-5px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-egg-bounce {
          animation: egg-bounce 2s ease-in-out infinite;
          transform-origin: center;
        }
        .animate-hatch {
          animation: hatch 0.6s ease-out forwards;
          transform-origin: center;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fadeUp {
          animation: fadeUp 0.7s ease-out forwards;
          opacity: 0;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;