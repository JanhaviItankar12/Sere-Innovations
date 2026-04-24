import React from 'react';

const TrustSection = () => {
  const trustPoints = [
    {
      icon: "🌾",
      title: "Built from real farmer needs",
      description: "We spent 18 months talking to small poultry farmers across Tamil Nadu, Maharashtra, and Uttar Pradesh before writing a single line of code."
    },
    {
      icon: "🧑‍🌾",
      title: "Field‑grounded communication",
      description: "No confusing manuals or corporate jargon. Our team speaks your language – because we work alongside farmers."
    },
    {
      icon: "⚙️",
      title: "Practical simplicity",
      description: "Fewer buttons, less complexity. Just the essential controls you need, placed where they make sense."
    },
    {
      icon: "🤝",
      title: "Early trust‑building messaging",
      description: "We offer a no‑pressure demo, transparent pricing, and a 30‑day satisfaction guarantee – no hidden fees."
    }
  ];

  return (
    <section id="trust" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full inline-block mb-4">
            Why You Can Trust Us
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            No hype. Just honest work.
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We don't believe in fake awards or made‑up success stories. Here's what you can actually expect.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-gray-100 bg-gray-50/30 transition-all duration-300 hover:shadow-md hover:border-green-200"
            >
              <div className="text-5xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Additional trust signal: no fake claims badge */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-sm text-gray-700">
            <span className="text-green-600 text-lg">✓</span> No fake testimonials
          </div>
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-sm text-gray-700">
            <span className="text-green-600 text-lg">✓</span> No made‑up awards
          </div>
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-sm text-gray-700">
            <span className="text-green-600 text-lg">✓</span> Transparent about limitations
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
