import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🎮",
      title: "More control for the farmer",
      description: "You decide when to hatch, which breed, and how many – not an external hatchery."
    },
    {
      icon: "🕊️",
      title: "Better independence from hatcheries",
      description: "Stop relying on expensive, delayed outside sources. Your farm, your chicks, your schedule."
    },
    {
      icon: "📉",
      title: "Cost efficiency",
      description: "Save up to 40% compared to buying day‑old chicks. The incubator pays for itself within months."
    },
    {
      icon: "⚙️",
      title: "Simpler operations",
      description: "Automated temperature, humidity, and turning mean less manual work and fewer mistakes."
    },
    {
      icon: "📈",
      title: "Increased confidence and income potential",
      description: "Stable hatch rates mean predictable flock sizes – more birds to sell or grow, season after season."
    },
    {
      icon: "🛡️",
      title: "Healthier chicks, lower mortality",
      description: "Chicks hatched on your farm avoid transport stress and disease exposure. Higher survival rates mean more birds reach maturity."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full inline-block mb-4">
            Why Farmers Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Real benefits for your farm & family
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            It's not just a machine – it's a tool that changes how you work and earn.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-green-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reinforcing bottom note - product built from real farmer needs */}
        <div className="mt-12 text-center bg-green-100/50 rounded-2xl p-5 max-w-2xl mx-auto border border-green-200">
          <p className="text-gray-700">
            🌱 <span className="font-semibold">Built from real farmer needs.</span> Every feature was tested with small poultry farmers across rural India – no lab‑only gimmicks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

