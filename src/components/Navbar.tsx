import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-12 right-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo className="transform transition-transform duration-300 hover:scale-105" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            {[
              { href: "#home", text: "الرئيسية" },
              { href: "#how-it-works", text: "كيف تعمل الخدمة" },
              { href: "#features", text: "المميزات" },
              { href: "#pricing", text: "الأسعار" },
              { href: "#testimonials", text: "آراء العملاء" },
              { href: "#faq", text: "الأسئلة الشائعة" }
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-lg text-gray-800 hover:text-blue-700 transition-colors duration-300 relative group"
              >
                {item.text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
          
          {/* Contact Button */}
          <a 
            href="#contact" 
            className="hidden md:flex items-center bg-gradient-to-r from-accent to-accent-dark text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            تواصل معنا
          </a>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-4 space-y-4">
            {[
              { href: "#home", text: "الرئيسية" },
              { href: "#how-it-works", text: "كيف تعمل الخدمة" },
              { href: "#features", text: "المميزات" },
              { href: "#pricing", text: "الأسعار" },
              { href: "#testimonials", text: "آراء العملاء" },
              { href: "#faq", text: "الأسئلة الشائعة" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className="block text-lg text-gray-800 hover:text-blue-700 transition-colors duration-300 py-2"
              >
                {item.text}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={toggleMenu}
              className="block bg-gradient-to-r from-accent to-accent-dark text-white px-6 py-3 rounded-full text-center text-lg font-semibold transition-colors duration-300"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;