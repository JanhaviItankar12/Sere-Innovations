import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is the incubator difficult to use for someone who has never used a machine?",
      answer: "Not at all. We designed it with farmer feedback – simple buttons, clear display, and automatic controls. Most farmers learn to operate it within 15 minutes. We also include a simple pictorial guide."
    },
    {
      question: "What happens if there's a power cut?",
      answer: "The incubator has built-in backup for temperature memory. It resumes automatically when power returns. For areas with frequent cuts, we recommend a small inverter (available as an add-on)."
    },
    {
      question: "How many eggs can it hold?",
      answer: "The standard model holds 96 eggs. We also have a larger 192-egg version for bigger farms – ask our team for details."
    },
    {
      question: "What is the hatch rate?",
      answer: "With proper egg selection and maintenance, farmers typically see 75–85% hatch rates. This is comparable to commercial hatcheries but at much lower cost per chick."
    },
    {
      question: "Do I need to clean the incubator?",
      answer: "Yes, we recommend cleaning after each batch. The interior is smooth and easy to wipe down. A cleaning guide comes with every unit."
    },
    {
      question: "What if something stops working?",
      answer: "Every incubator has a 1-year warranty on parts. Our team will help troubleshoot over call or WhatsApp. If needed, we arrange pickup and repair – minimal downtime."
    },
    {
    question: "Can I see a demo before buying?",
      answer: "Absolutely. We can arrange a free farm visit (in select regions) or a video call demo. No obligation to buy."
    }
  ];

 

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with back link */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link to="/" className="text-green-700 hover:text-green-800 flex items-center gap-2 w-fit">
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
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Help Center</h1>
          <p className="text-gray-600">Answers to common questions, guides, and how to reach us.</p>
        </div>

        {/* Quick contact card */}
        <div className="bg-green-50 rounded-2xl p-5 border border-green-200 mb-8 text-center">
          <p className="text-green-800 font-medium">📞 Need immediate help?</p>
          <p className="text-sm text-green-700">Call us at <strong>+91-XXXXXXXXXX</strong> (9 AM – 6 PM) or WhatsApp anytime.</p>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>❓</span> Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <span className="text-green-600">{openFaq === idx ? '▲' : '▼'}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 py-3 text-gray-600 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      

        {/* Still stuck? */}
        <div className="text-center bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-2">Still have questions?</h3>
          <p className="text-sm text-gray-600 mb-4">We're here to help – no matter how small the question.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition text-sm font-medium">
              Contact Support
            </Link>
            <button 
              onClick={() => alert('📱 WhatsApp us at +91-XXXXXXXXXX – we speak Hindi, English, Tamil, Telugu')}
              className="border border-green-600 text-green-700 hover:bg-green-50 px-5 py-2 rounded-lg transition text-sm font-medium"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;