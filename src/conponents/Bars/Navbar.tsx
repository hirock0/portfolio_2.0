"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "👤" },
    { href: "#projects", label: "Projects", icon: "💼" },
    { href: "#download", label: "Download", icon: "📥" },
  ];

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-in-out
          ${
            isScrolled
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
              : "bg-transparent border-b border-gray-200/30 dark:border-gray-700/30"
          }
        `}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="group relative z-50">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-green-500 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300 opacity-80"></div>
                  <span className="relative text-xl md:text-2xl font-bold text-white z-10">
                    H
                  </span>
                </div>

                <div className="flex items-baseline">
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    HIROCK
                  </span>
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400  bg-clip-text text-transparent ml-1 group-hover:from-green-400 group-hover:to-yellow-400 transition-all duration-300">
                    DEV.
                  </span>
                </div>

                <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-green-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`group relative px-4 lg:px-5 py-2.5 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 ease-in-out hover:scale-105
                    ${
                      activeLink === link.href
                        ? "text-white"
                        : "text-gray-700  "
                    }
                  `}
                >
                  {activeLink === link.href && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400  rounded-xl shadow-lg animate-gradient-x"></span>
                  )}

                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-green-400/0 group-hover:from-yellow-400/10 group-hover:to-green-400/10 rounded-xl transition-all duration-300"></span>

                  <span className="relative flex items-center gap-2">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </span>

                  <span
                    className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400  rounded-full transition-all duration-300
                    ${
                      activeLink === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                  ></span>
                </a>
              ))}

              <button className="ml-4 group relative px-6 py-2.5 bg-gradient-to-r from-blue-400 to-purple-400  rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <span>Hire Me</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-yellow-400/10 to-green-400/10 hover:from-yellow-400/20 hover:to-green-400/20 transition-all duration-300 z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-gray-900 dark:bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-all duration-500 ease-in-out
          ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`
            absolute top-20 right-0 bottom-0 w-80 max-w-[85vw]
            bg-gray-900 
            shadow-2xl
            transition-transform duration-500 ease-out
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full p-8">
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-3 flex-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    group relative p-4 rounded-xl
                    font-semibold text-lg
                    transition-all duration-300
                    ${
                      activeLink === link.href
                        ? "bg-gradient-to-r from-yellow-500 to-green-500 text-white shadow-lg"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-green-400/10"
                    }
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen
                      ? "slideIn 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">{link.icon}</span>
                    <span>{link.label}</span>
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <button className="w-full p-4 bg-gradient-to-r from-yellow-500 to-green-500 rounded-xl font-semibold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="flex items-center justify-center gap-2">
                <span>Hire Me</span>
                <span>→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
