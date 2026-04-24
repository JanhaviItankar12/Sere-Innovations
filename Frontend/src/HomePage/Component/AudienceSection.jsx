import React from 'react';

const AudienceSection = () => {
  const primaryAudience = {
    title: "Small Poultry Farmers",
    description: "If you raise hens but depend on external hatcheries for chicks – this is made for you.",
    characteristics: [
      "Low to moderate technical familiarity",
      "High practical decision-making orientation",
      "Trust-sensitive – respond to honesty, not hype",
      "Prefer clarity over complexity"
    ]
  };

  const secondaryAudiences = [
    {
      title: "Poultry Farm Owners",
      description: "Larger operations looking to add in-house hatching capacity."
    },
    {
      title: "Agri-Entrepreneurs",
      description: "Building rural businesses around poultry production."
    },
    {
      title: "Rural Youth",
      description: "Exploring income-generation opportunities in modern farming."
    },
    {
      title: "Early Agri-Tech Adopters",
      description: "Farmers ready to try smart, practical technology."
    }
  ];

  return (
    <section id="audience" className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full inline-block mb-4">
            Who It Is For
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Made for the hardworking farmer
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Sere Innovations is not for everyone – and that's intentional. It's built specifically for people who live and breathe poultry.
          </p>
        </div>

        {/* Primary Audience Card (highlighted) */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-md border-l-8 border-green-600 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🐔</span>
                <h3 className="text-2xl font-bold text-gray-800">{primaryAudience.title}</h3>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Primary</span>
              </div>
              <p className="text-gray-600 text-lg mb-4">{primaryAudience.description}</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">If this sounds like you:</p>
                <ul className="space-y-1">
                  {primaryAudience.characteristics.map((trait, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-600">✓</span> {trait}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Audiences Grid */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 text-center mb-6">
            Also designed for:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {secondaryAudiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="text-3xl mb-2">
                  {index === 0 && "🏘️"}
                  {index === 1 && "🌱"}
                  {index === 2 && "👨‍🌾"}
                  {index === 3 && "📱"}
                </div>
                <h4 className="font-bold text-gray-800 mb-1">{audience.title}</h4>
                <p className="text-gray-500 text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Honest note about audience fit */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto bg-white/60 rounded-full py-2 px-4 inline-block">
            💡 <span className="font-medium">Not sure if it's for you?</span> Our team is happy to understand your farm size and needs – no pressure, just honest advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
