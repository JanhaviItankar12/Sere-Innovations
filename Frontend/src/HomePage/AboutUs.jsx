import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Simple header with back link */}
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">About Sere Innovations</h1>
          <p className="text-gray-500 text-sm mb-8">Helping farmers hatch their own future</p>

          <div className="prose prose-green max-w-none text-gray-700 space-y-6">
            <p className="text-lg font-medium text-green-800">
              We started Sere Innovations because we saw small poultry farmers struggle – not because they lacked skill, but because they lacked affordable tools.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">Our story</h2>
            <p>
              In 2023, our founder spent six months traveling through rural Tamil Nadu, Maharashtra, and Uttar Pradesh, 
              talking to poultry farmers. One question kept coming back: <em>"Why can't I hatch my own eggs without spending a fortune?"</em>
            </p>
            <p>
              Most commercial incubators were either too expensive, too complex, or not built for India's rural conditions – 
              power fluctuations, high dust, and limited technical support. Farmers were stuck paying high prices for day‑old chicks 
              from distant hatcheries, losing control and profit.
            </p>
            <p>
              So we built Sere Innovations – an affordable, easy‑to‑use smart incubator designed <strong>with</strong> farmers, not for them in a lab.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">What we believe</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Honesty over hype</strong> – No fake testimonials, no made‑up awards. Just real products that work.</li>
              <li><strong>Farmer independence</strong> – Technology should give farmers more control, not create new dependencies.</li>
              <li><strong>Practical simplicity</strong> – If a farmer can't learn it in 15 minutes, we go back to the drawing board.</li>
              <li><strong>Local support</strong> – Our team speaks your language and can visit your farm if needed.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">Our team</h2>
            <p>
              We're a small group of engineers, designers, and agri‑extension workers. None of us have fancy corporate backgrounds. 
              What we do have: years of field experience, genuine respect for farmers, and a commitment to making technology accessible.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">Our promise</h2>
            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg">
              <p className="text-green-800">
                Every incubator comes with a 30‑day satisfaction guarantee. If it doesn't work for your farm, 
                we'll take it back – no questions asked. We're not here to make a quick sale; we're here to build trust that lasts.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">Get in touch</h2>
            <p>
              Have questions? Want a demo? Just curious? Talk to us – no pressure, no spam.<br />
              📞 <strong>+91-XXXXXXXXXX</strong> (WhatsApp / call)<br />
              ✉️ <strong>hello@sereinnovations.in</strong>
            </p>
          </div>
        </div>

        {/* Simple CTA back to home */}
        <div className="text-center mt-8">
          <Link 
            to="/" 
            className="inline-flex cursor-pointer items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg transition"
          >
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;