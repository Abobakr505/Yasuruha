import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 dark:bg-dark/95 backdrop-blur-md shadow-md py-3"
          : "bg-primary dark:bg-dark py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <Link
              to="/"
              className="text-white font-bold text-2xl ltr animate-fade-in"
            >
              <img
                className="logo w-[4rem] h-[4rem] object-contain scale-125 hover:scale-100 transition-transform duration-300"
                src="/logoy.webp"
                alt="Logo"
                loading="lazy"
                style={{ imageRendering: 'auto' }} // تحسين عرض الصورة
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center animate-fade-in">
            <ul className="flex space-x-reverse space-x-8 ml-8">
              <li>
                <Link
                  to="/"
                  className={`nav-link text-white hover:text-opacity-80 pb-1 relative ${
                    isActive("/")
                      ? "after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-white"
                      : ""
                  }`}
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`nav-link text-white hover:text-opacity-80 pb-1 relative ${
                    isActive("/about")
                      ? "after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-white"
                      : ""
                  }`}
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`nav-link text-white hover:text-opacity-80 pb-1 relative ${
                    isActive("/services")
                      ? "after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-white"
                      : ""
                  }`}
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className={`nav-link text-white hover:text-opacity-80 pb-1 relative ${
                    isActive("/portfolio")
                      ? "after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-white"
                      : ""
                  }`}
                >
                  أعمالنا
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`nav-link text-white hover:text-opacity-80 pb-1 relative ${
                    isActive("/contact")
                      ? "after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-white"
                      : ""
                  }`}
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </nav>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button onClick={toggleMenu} className="text-white mr-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-4 mt-4 pb-4">
            <li>
              <Link
                to="/"
                className={`text-white hover:text-opacity-80 block transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "0ms" }}
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-white hover:text-opacity-80 block transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "50ms" }}
              >
                من نحن
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`text-white hover:text-opacity-80 block transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                خدماتنا
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={`text-white hover:text-opacity-80 block transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                أعمالنا
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-white hover:text-opacity-80 block transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;