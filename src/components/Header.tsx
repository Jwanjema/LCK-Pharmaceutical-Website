import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  currentPage: 'home' | 'expertise' | 'about' | 'resources' | 'contact' | 'team' | 'case-studies' | 'service-details';
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
    { id: 'service-details', label: 'Services' },
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
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#339966] rounded-lg flex items-center justify-center">
            <span className="text-white">LCK</span>
          </div>
          <div>
            <div className="text-[#003366]">LCK Pharmaceutical</div>
            <div className="text-[#339966] text-sm">Consulting</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative py-2 transition-colors ${
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
          className="hidden md:block px-6 py-2.5 bg-[#FFC300] text-[#003366] rounded-lg hover:bg-[#FF5733] hover:text-white transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Partner With Us
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
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

        {/* Mobile Slide-in Menu */}
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.22 }}
              className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-xl p-6 overflow-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#003366] to-[#339966] rounded-lg flex items-center justify-center">
                    <span className="text-white">LCK</span>
                  </div>
                  <div>
                    <div className="text-[#003366]">LCK Pharmaceutical</div>
                    <div className="text-[#339966] text-sm">Consulting</div>
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-600">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileOpen(false);
                    }}
                    className={`text-left px-3 py-3 rounded-lg transition-colors ${
                      currentPage === item.id ? 'text-[#003366] font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-6">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-full px-4 py-3 bg-[#FFC300] text-[#003366] rounded-lg shadow-md"
                >
                  Partner With Us
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.header>
  );
}

export default Header;
