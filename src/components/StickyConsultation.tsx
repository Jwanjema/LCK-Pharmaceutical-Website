import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface StickyConsultationProps {
  onNavigate?: (page: string) => void;
}

export function StickyConsultation({ onNavigate }: StickyConsultationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);
  const scale = useTransform(scrollY, [300, 500], [0.8, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      // Fallback: scroll to contact form
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed top-24 right-6 z-40"
    >
      <motion.button
        onClick={handleClick}
        className="bg-gradient-to-r from-[#003366] to-[#339966] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl flex items-center gap-3 group font-semibold text-sm md:text-base"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/30 transition-all">
          <Calendar className="w-5 h-5" />
        </div>
        <span className="hidden md:inline">Book Free Consultation</span>
        <span className="md:hidden">Quick Consultation</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* Floating Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-3 -right-3 bg-[#FFC300] text-[#003366] text-xs font-bold px-3 py-1 rounded-full shadow-lg"
      >
        Free
      </motion.div>
    </motion.div>
  );
}
