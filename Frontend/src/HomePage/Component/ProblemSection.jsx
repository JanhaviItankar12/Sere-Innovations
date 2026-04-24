import React from 'react';

const ProblemSection= () => {
  const problems = [
    {
      icon: "🏭",
      title: "Dependence on external hatcheries",
      description: "You raise the hens, but someone else controls the chicks — leading to delays, hidden costs, and less profit."
    },
    {
      icon: "💰",
      title: "Increased costs",
      description: "Buying day-old chicks from commercial hatcheries is expensive, eating up your margins before you even start."
    },
    {
      icon: "🎮",
      title: "Loss of operational control",
      description: "You can't decide when to hatch, which breed, or how many — the hatchery's schedule runs your farm."
    },
    {
      icon: "😟",
      title: "Real difficulty at farm level",
      description: "Transporting eggs or chicks over long distances causes stress, mortality, and unnecessary expense. Many small farmers give up."
    }
  ];

  return (
    <section id="problem" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full inline-block mb-4">
            The Hard Reality
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Why small farmers stay stuck
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Without their own hatching setup, farmers face a cycle of dependency, high costs, and limited growth. 
            Here's what we hear every day:
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:border-red-100 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Empathetic closing line / call to action */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            ⚠️ <span className="font-medium">This isn't just inconvenience</span> — it's lost income, uncertainty, and missed potential.<br />
            But there is a better way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

