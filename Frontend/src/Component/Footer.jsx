import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", id: "features" },
        { name: "Benefits", id: "benefits" },
        { name: "How it works", id: "solution" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", url: "help" },
        { name: "Farmers' Guide", url: "farmers-guide" },
        { name: "Warranty Info", url: "warranty-info" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Sere", url: "about" },
        { name: "Contact Us", url: "contact" },
        { name: "Privacy Policy", url: "privacy-policy" }
      ]
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌾</span>
              <span className="font-bold text-xl text-white">
                Sere <span className="text-green-400">Innovations</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Helping farmers hatch their own future — one egg at a time.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.032 2.002c-5.511 0-9.98 4.469-9.98 9.98 0 1.76.457 3.488 1.332 5.018l-1.415 4.285 4.392-1.386a9.947 9.947 0 0 0 4.766 1.21c5.51 0 9.98-4.47 9.98-9.98 0-5.511-4.47-9.98-9.98-9.98zm0 18.362c-1.61 0-3.154-.42-4.484-1.195l-.322-.187-2.68.846.864-2.615-.202-.332a7.939 7.939 0 0 1-1.248-4.287c0-4.394 3.576-7.97 7.97-7.97 4.394 0 7.97 3.576 7.97 7.97 0 4.394-3.576 7.97-7.97 7.97z"/>
                  <path d="M16.605 13.614c-.253-.127-1.496-.739-1.727-.823-.232-.085-.4-.127-.57.127-.17.254-.656.823-.804.992-.148.17-.296.191-.55.064-.253-.127-1.067-.393-2.031-1.253-.75-.67-1.256-1.496-1.403-1.75-.148-.254-.016-.391.111-.517.114-.114.253-.297.38-.445.127-.148.169-.254.254-.423.085-.17.042-.318-.021-.446-.064-.127-.57-1.372-.78-1.88-.206-.496-.416-.42-.57-.428-.148-.008-.318-.008-.489-.008-.17 0-.445.064-.678.318-.233.254-.89.87-.89 2.12 0 1.25.91 2.458 1.037 2.628.127.17 1.79 2.732 4.336 3.83.605.262 1.078.418 1.447.535.607.194 1.16.167 1.597.101.487-.074 1.496-.612 1.707-1.204.212-.592.212-1.099.148-1.204-.063-.106-.233-.17-.487-.296z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-white mb-3">{column.title}</h3>
              <ul className="space-y-2 text-sm">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.id ? (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-400 cursor-pointer hover:text-green-400 transition"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a href={link.url} className="text-gray-400 cursor-pointer hover:text-green-400 transition">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Placeholder Column */}
          <div>
            <h3 className="font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span> +91-XXXXXXXXXX
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> hello@sereinnovations.in
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span> Sere Innovations, Coimbatore, India
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 pt-6">
          © {currentYear} Sere Innovations — Growing farmer self‑reliance. All content is honest and field‑tested.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

