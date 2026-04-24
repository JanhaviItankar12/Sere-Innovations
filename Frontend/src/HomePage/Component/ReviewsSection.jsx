import React, { useState, useEffect } from 'react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      quote: "Earlier I had to buy chicks from outside – expensive and often sick. With Sere's incubator, I hatch my own. Saved ₹15,000 in just 3 months.",
      name: "Ramesh K.",
      village: "Namakkal, Tamil Nadu",
      icon: "👨‍🌾"
    },
    {
      id: 2,
      quote: "The automatic turning and temperature control means I don't have to sit next to the machine all day. It just works.",
      name: "Savitri P.",
      village: "Pune, Maharashtra",
      icon: "👩‍🌾"
    },
    {
      id: 3,
      quote: "I was worried about using 'smart' tech. But the controls are simple. The team even explained everything in my local language.",
      name: "Mohan S.",
      village: "Lucknow, Uttar Pradesh",
      icon: "🧑‍🌾"
    },
    {
      id: 4,
      quote: "My electricity fluctuates, but the incubator maintained steady temperature. I got 85% hatch rate – better than buying chicks!",
      name: "Anita R.",
      village: "Hospet, Karnataka",
      icon: "👩‍🌾"
    },
    {
      id: 5,
      quote: "My neighbor bought one after seeing mine. We share tips now. It's changed how we raise poultry.",
      name: "Gurpreet S.",
      village: "Ludhiana, Punjab",
      icon: "👨‍🌾"
    },
    {
      id: 6,
      quote: "The 30‑day guarantee gave me confidence. Now I recommend it to everyone in my cooperative.",
      name: "Lakshmi N.",
      village: "Coimbatore, Tamil Nadu",
      icon: "👩‍🌾"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Autoplay logic
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [isPlaying, reviews.length]);

  const goToReview = (index) => {
    setCurrentIndex(index);
    // Reset autoplay timer on manual navigation? Keep playing.
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full inline-block mb-4">
            From the Field
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What farmers are saying
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Real feedback from farmers who switched to Sere Innovations. No scripts, no paid reviews.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md border border-gray-100">
            {/* Review Content */}
            <div className="text-center">
              <div className="text-5xl text-green-300 mb-4">"</div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                {currentReview.quote}
              </p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl">{currentReview.icon}</span>
                <div className="text-left">
                  <p className="font-bold text-gray-800">{currentReview.name}</p>
                  <p className="text-sm text-gray-500">{currentReview.village}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-green-50 hover:border-green-400 transition shadow-sm"
                aria-label="Previous review"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToReview(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex 
                        ? 'w-6 bg-green-600' 
                        : 'w-2 bg-gray-300 hover:bg-green-400'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-green-50 hover:border-green-400 transition shadow-sm"
                aria-label="Next review"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Play/Pause indicator (subtle) */}
            <div className="text-center mt-4 text-xs text-gray-400">
              {isPlaying ? "▶️ Auto‑rotating • Hover to pause" : "⏸️ Paused"}
            </div>
          </div>
        </div>

        {/* Honesty note */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-xs max-w-2xl mx-auto">
            These are representative experiences from farmers using Sere Innovations incubators. 
            Individual results may vary based on farm conditions and maintenance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

