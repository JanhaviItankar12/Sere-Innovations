import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: "👆",
      title: "Easy to use",
      description: "No technical expertise needed. Simple controls anyone can learn in minutes."
    },
    {
      icon: "🌡️",
      title: "Temperature control",
      description: "Automatic regulation maintains ideal 37.5°C – even during power fluctuations."
    },
    {
      icon: "💧",
      title: "Humidity control",
      description: "Built‑in sensor keeps moisture at optimal levels for healthy chick development."
    },
    {
      icon: "🔄",
      title: "Automatic egg turning",
      description: "Motorised turning every few hours – you don't need to lift a finger."
    },
    {
      icon: "💰",
      title: "Affordable setup",
      description: "Priced around ₹10,000, with low electricity consumption and minimal maintenance."
    },
    {
      icon: "👩‍🌾",
      title: "Farmer‑friendly design",
      description: "Rugged build, easy cleaning, and local language support on the display."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full inline-block mb-4">
            What You Get
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Smart features, simple operation
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Everything you need to hatch healthy chicks – no engineering degree required.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-green-200 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional note: batch candling support (as mentioned in brief) */}
        <div className="mt-10 text-center text-sm text-gray-500 bg-gray-50 inline-block w-full rounded-xl py-3">
          💡 <span className="font-medium">Also includes batch candling support</span> – monitor embryo development without disturbing eggs.
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

