import React, { useState } from 'react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    village: ''
  });
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    village: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Enquiry form handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: '', phone: '', village: '' });
  };

  // Booking form handlers
  const handleBookingChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData);
    setIsBookingSubmitted(true);
    setTimeout(() => setIsBookingSubmitted(false), 4000);
    setBookingData({ name: '', phone: '', preferredDate: '', village: '' });
    // Optionally switch back to enquiry form after booking? Not required, but we stay on booking form.
  };

  const showEnquiryForm = () => {
    setShowBookingForm(false);
    setIsSubmitted(false);
    setIsBookingSubmitted(false);
  };

  const showBooking = () => {
    setShowBookingForm(true);
    setIsSubmitted(false);
    setIsBookingSubmitted(false);
  };

  return (
    <section id="cta" className="py-16 md:py-20 bg-gradient-to-br from-green-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-green-200 font-semibold text-sm uppercase tracking-wider bg-green-700/50 px-3 py-1 rounded-full inline-block mb-4">
            Take the Next Step
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to hatch your own future?
          </h2>
          <p className="text-green-100 text-base md:text-lg">
            No pressure. No hidden costs. Just honest answers and a demo that fits your schedule.
          </p>
        </div>

        {/* Two column layout: Options + Form */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left: CTA Options (buttons) */}
          <div className="flex-1 bg-green-700/30 rounded-2xl p-6 backdrop-blur-sm border border-green-600">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>📞</span> How would you like to connect?
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
              <button 
                onClick={() => alert('📱 Call us at +91-XXXXXXXXXX (9 AM – 6 PM, Mon–Sat)')}
                className="bg-white cursor-pointer text-green-800 hover:bg-green-50 px-5 py-2.5 rounded-lg font-semibold transition shadow-md"
              >
                📞 Request a Demo
              </button>
              <button 
                onClick={() => alert('📧 Send an email to hello@sereinnovations.in – we reply within 24 hours')}
                className="bg-transparent cursor-pointer border-2 border-white text-white hover:bg-white/10 px-5 py-2.5 rounded-lg font-semibold transition"
              >
                ✉️ Enquire Now
              </button>
              <button 
                onClick={showBooking}
                className="bg-transparent border-2 cursor-pointer border-white text-white hover:bg-white/10 px-5 py-2.5 rounded-lg font-semibold transition"
              >
                🚜 Book a Product Intro
              </button>
              <button 
                onClick={() => alert('💬 WhatsApp us at +91-XXXXXXXXXX – we speak Hindi, English, Tamil, Telugu')}
                className="bg-transparent border-2 cursor-pointer border-white text-white hover:bg-white/10 px-5 py-2.5 rounded-lg font-semibold transition"
              >
                💬 Talk to Our Team
              </button>
            </div>
            <p className="text-green-200 text-sm">
              ✅ No spam. We’ll never share your information. <br />
              ✅ We offer a 30‑day satisfaction guarantee on every incubator.
            </p>
          </div>

          {/* Right: Dynamic Form (Enquiry or Booking) */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-xl text-gray-800">
            {!showBookingForm ? (
              // Quick Enquiry Form
              <>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span>📋</span> Quick enquiry (optional)
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Leave your details and we’ll call you back within one working day.
                </p>
                {isSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                    ✅ Thanks! Our team will reach out soon.
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Village / District (optional)</label>
                      <input
                        type="text"
                        name="village"
                        value={formData.village}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        placeholder="So we understand your location"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-lg transition shadow"
                    >
                      Send Enquiry →
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      No spam, no calls to your relatives. We respect your privacy.
                    </p>
                  </form>
                )}
              </>
            ) : (
              // Booking Form
              <>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span>📅</span> Book a Product Intro
                  </h3>
                  <button
                    onClick={showEnquiryForm}
                    className="text-sm cursor-pointer text-green-600 hover:text-green-800 underline"
                  >
                    ← Back to enquiry
                  </button>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  Our team will give you a live demo – either at your farm or over video call.
                </p>
                {isBookingSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                    ✅ Booking request sent! We'll confirm your slot within 24 hours.
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your name *</label>
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleBookingChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        placeholder="e.g., Lakshmi N."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleBookingChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        placeholder="WhatsApp preferred"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred date (approx)</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={bookingData.preferredDate}
                        onChange={handleBookingChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Village / District</label>
                      <input
                        type="text"
                        name="village"
                        value={bookingData.village}
                        onChange={handleBookingChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        placeholder="e.g., Coimbatore, Tamil Nadu"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-lg transition shadow"
                    >
                      Request Booking →
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      Free of charge. No obligation to buy.
                    </p>
                  </form>
                )}
              </>
            )}
          </div>
        </div>

        {/* Bottom extra reassurance */}
        <div className="text-center mt-8 text-green-200 text-sm">
          ⚡ <span className="font-medium">Limited period:</span> First 100 buyers get a free starter kit (egg candler + training video) worth ₹1,500.
        </div>
      </div>
    </section>
  );
};

export default CTASection;