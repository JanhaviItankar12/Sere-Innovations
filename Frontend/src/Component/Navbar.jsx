import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll with offset for fixed navbar
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  // Navigation links config
  const navLinks = [
    { name: "Problem", id: "problem" },
    { name: "Features", id: "features" },
    { name: "Benefits", id: "benefits" },
    { name: "Trust", id: "trust" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          
          {/* Logo / Brand */}
          <div 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="text-2xl md:text-3xl transition-transform group-hover:scale-105">
              🌾
            </span>
            <span className="font-bold text-xl md:text-2xl text-gray-800">
              Sere <span className="text-green-700">Innovations</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 cursor-pointer hover:text-green-700 font-medium transition-colors duration-200 text-sm lg:text-base"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button (visible on all screens) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("cta")}
              className="bg-green-700 cursor-pointer hover:bg-green-800 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
            >
              Enquire Now
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // Close Icon (X)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-3 pt-2 pb-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 cursor-pointer hover:text-green-700 font-medium py-2 px-2 rounded-md hover:bg-green-50 text-left transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

