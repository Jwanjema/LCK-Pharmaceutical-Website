import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'expertise' | 'about' | 'resources' | 'contact' | 'team' | 'case-studies' | 'privacy-policy' | 'terms-of-service' | 'cookie-policy';
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'about', label: 'About Us' },
    { id: 'resources', label: 'Resources' },
    { id: 'team', label: 'Team' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#003366] to-[#339966] rounded-lg flex items-center justify-center">
            <span className="text-white text-sm md:text-base">LCK</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-[#003366] text-sm md:text-base">LCK Pharmaceutical</div>
            <div className="text-[#339966] text-xs md:text-sm">Consulting</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative py-2 text-sm transition-colors ${
                currentPage === item.id
                  ? 'text-[#003366]'
                  : 'text-gray-600 hover:text-[#003366]'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFC300]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          onClick={() => onNavigate('contact')}
          className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#003366] to-[#339966] text-white rounded-lg hover:shadow-xl transition-all duration-300 shadow-lg text-sm md:text-base font-semibold group"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-pulse" />
          <span>Partner With Us</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
          className="md:hidden p-2 text-[#003366]"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute left-0 right-0 top-full mt-3 bg-white border border-gray-200 rounded-xl shadow-lg z-40"
          >
            <nav className="flex flex-col divide-y divide-gray-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileOpen(false);
                  }}
                  className={`text-left px-4 py-3 transition-colors ${
                    currentPage === item.id ? 'text-[#003366] font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileOpen(false);
                }}
                className="text-left px-4 py-4 font-semibold text-white bg-gradient-to-r from-[#003366] to-[#339966] flex items-center gap-2 hover:shadow-lg transition-shadow"
              >
                <Phone className="w-4 h-4" />
                Partner With Us
                <ArrowRight className="w-4 h-4 ml-auto" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}

export default Header;
