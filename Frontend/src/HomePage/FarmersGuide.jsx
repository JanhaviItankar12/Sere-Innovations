import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FarmersGuide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Setting up your incubator",
      icon: "🔌",
      content: "Place the incubator on a flat, stable surface away from direct sunlight and drafts. Plug it into a stable power source. The display will light up showing current temperature – wait 30 minutes for it to stabilize before adding eggs."
    },
    {
      title: "2. Selecting good eggs",
      icon: "🥚",
      content: "Use eggs that are clean, uncracked, and no more than 7 days old. Avoid oddly shaped or very small/large eggs. Do not wash eggs – it removes natural protective coating. Store eggs pointy end down before setting."
    },
    {
      title: "3. Setting eggs and starting the cycle",
      icon: "📅",
      content: "Place eggs gently on the turning tray, blunt end up (air cell at the top). Close the lid. The incubator will automatically maintain 37.5°C and 55-60% humidity. Egg turning starts automatically every 2 hours."
    },
    {
      title: "4. Candling – checking embryo development",
      icon: "🔦",
      content: "On day 7 and day 14, use a candling light (or bright torch) to check eggs. Fertile eggs show dark spots with blood vessels. Remove clear eggs (infertile) to avoid rotting. Stop moving eggs on day 18."
    },
    {
      title: "5. Hatching time – last 3 days",
      icon: "🐣",
      content: "Days 18–21: Increase humidity to 65-70%. Do not open the lid. Chicks will pip (break shell) and hatch on their own. This can take 24 hours – be patient, do not help them out."
    },
    {
      title: "6. After hatching – care for chicks",
      icon: "🏠",
      content: "Move chicks to a brooder with heat lamp (35°C first week, then reduce 5°C each week). Provide clean water and starter feed. Clean the incubator thoroughly before next use."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with back link */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link to="/" className="text-green-700 cursor-pointer hover:text-green-800 flex items-center gap-2 w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Sere Innovations
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Farmers' Guide</h1>
          <p className="text-gray-600">Step‑by‑step instructions to hatch healthy chicks with your Sere Innovations incubator.</p>
          <p className="text-sm text-green-700 mt-2">⭐ Read this before your first hatch – it's simple, we promise.</p>
        </div>

        {/* Step-by-step guide cards */}
        <div className="space-y-4 mb-10">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{step.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick tips box */}
        <div className="bg-green-50 rounded-2xl p-5 border border-green-200 mb-8">
          <h3 className="font-bold text-green-800 flex items-center gap-2 mb-2">💡 Quick tips for success</h3>
          <ul className="list-disc pl-5 text-sm text-green-700 space-y-1">
            <li>Keep a notebook: record dates, temperature, humidity, and hatch results.</li>
            <li>Clean the incubator after every hatch using mild soap – never harsh chemicals.</li>
            <li>If power cuts are common, use a small inverter (we can recommend one).</li>
            <li>Don't open the lid during hatching – chicks need high humidity.</li>
            <li>Contact us if hatch rate is below 60% – we'll help troubleshoot.</li>
          </ul>
        </div>

       

        {/* Still need help? */}
        <div className="text-center mt-8">
          <Link to="/help" className="text-green-700 hover:text-green-800 underline  cursor-pointer">Still have questions? Visit our Help Center →</Link>
        </div>
      </div>
    </div>
  );
};

export default FarmersGuide;