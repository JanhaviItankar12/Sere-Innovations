import React from 'react';
import { Link } from 'react-router-dom';

const WarrantyInfo = () => {
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Warranty Information</h1>
          <p className="text-gray-500 text-sm mb-8">Valid for all Sere Innovations smart incubators purchased after 1 January 2025</p>

          <div className="space-y-8">
            {/* Coverage */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>✅</span> What is covered
              </h2>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li><strong>1-year comprehensive warranty</strong> on all electronic components (control board, sensors, heating element, turning motor).</li>
                  <li><strong>2-year extended coverage</strong> on the main body and mechanical parts (excluding wear and tear).</li>
                  <li>Free replacement or repair for any manufacturing defect.</li>
                  <li>Free phone/WhatsApp support throughout the warranty period.</li>
                </ul>
              </div>
            </div>

            {/* Not covered */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>❌</span> What is not covered
              </h2>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Damage from power surges, floods, fire, or accidents.</li>
                  <li>Breakage due to dropping or mishandling.</li>
                  <li>Normal wear and tear (e.g., door seals, plastic handles, bulbs).</li>
                  <li>If the product is opened or repaired by a non-authorised person.</li>
                  <li>Eggs, chicks, or any livestock – warranty covers only the machine.</li>
                </ul>
              </div>
            </div>

            {/* How to claim */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>📞</span> How to claim warranty
              </h2>
              <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
                <p className="text-gray-700"><strong>Step 1:</strong> Call or WhatsApp us at <strong>+91-XXXXXXXXXX</strong> with your incubator serial number (printed on the back).</p>
                <p className="text-gray-700"><strong>Step 2:</strong> Our technician will troubleshoot over call – most issues can be solved remotely.</p>
                <p className="text-gray-700"><strong>Step 3:</strong> If repair is needed, we will arrange pickup and drop (free within warranty) or send replacement parts.</p>
                <p className="text-gray-700"><strong>Step 4:</strong> Repairs are completed within 7–10 working days in most regions.</p>
              </div>
            </div>

            {/* 30-day satisfaction guarantee */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>🌟</span> 30‑Day Satisfaction Guarantee
              </h2>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg">
                <p className="text-green-800">
                  If you are not satisfied with your incubator for any reason within 30 days of purchase, 
                  we will refund the full price – no questions asked. You only pay for return shipping. 
                  This is our promise to you.
                </p>
              </div>
            </div>

            {/* Registration */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>📝</span> Warranty registration
              </h2>
              <p className="text-gray-700 mb-2">
                Your warranty is automatically active with proof of purchase. No separate registration needed. 
                However, we recommend keeping your invoice or payment receipt.
              </p>
              <p className="text-sm text-gray-500">
                * For customers who bought through a distributor, the warranty period starts from the date on your bill.
              </p>
            </div>

            {/* Contact for claims */}
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <p className="font-medium text-gray-800">Need to file a claim or have questions?</p>
              <p className="text-gray-700 mt-1">📞 <strong>+91-XXXXXXXXXX</strong> (9 AM – 6 PM, Mon–Sat)</p>
              <p className="text-gray-700">✉️ <strong>warranty@sereinnovations.in</strong></p>
              <Link to="/contact" className="inline-block mt-3 text-green-700 hover:text-green-800 underline text-sm cursor-pointer">
                Or contact us online →
              </Link>
            </div>

            {/* Footer note */}
            <p className="text-xs text-gray-400 text-center border-t border-gray-100 pt-6">
              Warranty terms are subject to change. The version applicable is the one at the time of purchase. 
              This warranty is valid only within India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrantyInfo;