import React from 'react';
import { Link } from 'react-router-dom'; // assuming React Router

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Simple header with back link */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link to="/" className="text-green-700 hover:text-green-800 flex items-center gap-2 w-fit cursor-pointer">
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
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: April 2026</p>

          <div className="prose prose-green max-w-none text-gray-700 space-y-6">
            <p>
              At Sere Innovations, we respect your privacy. This policy explains how we collect, use, and protect 
              any information you share when using our website or contacting us. We are committed to being transparent 
              and farmer‑friendly – no hidden tricks.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">1. What information we collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your name, phone number, and village/district when you fill out our enquiry or booking forms.</li>
              <li>Any details you voluntarily share in messages or calls.</li>
              <li>Basic website usage data (like pages visited) to improve our service – no personal tracking beyond what is necessary.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">2. How we use your information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to your enquiries, schedule product demos, or answer questions about our incubators.</li>
              <li>To improve our products and farmer support.</li>
              <li>We will never sell, rent, or share your personal information with third parties for marketing purposes.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Data security</h2>
            <p>
              We take reasonable steps to protect your data. However, no internet transmission is 100% secure. 
              We store information only as long as needed to serve you or as required by law.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Your choices</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You can ask us to delete your enquiry data at any time by contacting hello@sereinnovations.in.</li>
              <li>You can request a copy of the information we hold about you.</li>
              <li>You are never required to share more than you are comfortable with.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Children's privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect data from minors.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">6. Changes to this policy</h2>
            <p>
              If we update this policy, we will post the changes here and update the "Last updated" date. 
              Significant changes may be notified via a notice on our homepage.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">7. Contact us</h2>
            <p>
              If you have any questions about privacy, please reach out:<br />
              Email: hello@sereinnovations.in<br />
              Phone: +91-XXXXXXXXXX<br />
              Address: Sere Innovations, Coimbatore, India
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-4 mt-8 text-sm">
              <p className="text-green-800">
                <strong>Our promise:</strong> We built this business to help farmers, not to collect data. 
                Your trust is more important than any marketing list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;