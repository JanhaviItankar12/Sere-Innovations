import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">Contact Us</h1>
          <p className="text-gray-600 text-base md:text-lg">
            We're here to answer your questions about our smart incubator. No pressure, just honest help.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📞</span> Get in touch
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg">📞</span>
                <div>
                  <p className="font-medium text-gray-800">Phone / WhatsApp</p>
                  <p className="text-gray-600">+91-XXXXXXXXXX</p>
                  <p className="text-xs text-gray-400">9 AM – 6 PM, Monday to Saturday</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg">✉️</span>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">hello@sereinnovations.in</p>
                  <p className="text-xs text-gray-400">We reply within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg">📍</span>
                <div>
                  <p className="font-medium text-gray-800">Office (by appointment)</p>
                  <p className="text-gray-600">Sere Innovations, Coimbatore, India</p>
                  <p className="text-xs text-gray-400">Farm demos available across Tamil Nadu, Maharashtra, Karnataka, UP</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-green-800 text-sm">
                <strong>📢 Languages we speak:</strong> English, Hindi, Tamil, Telugu, Kannada, Marathi.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📝</span> Send us a message
            </h2>
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                ✅ Thanks for reaching out! We'll get back to you within one working day.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    placeholder="e.g., Ramesh Kumar"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    placeholder="WhatsApp preferred"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email (optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    placeholder="I want to know more about the incubator..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 rounded-lg transition shadow"
                >
                  Send Message →
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy. Your details will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Extra trust note */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          🌱 <span className="font-medium">Prefer a farm visit?</span> Call us directly – we can arrange a free on‑site demo.
        </div>
      </div>
    </div>
  );
};

export default ContactUs;