import { motion } from 'framer-motion';
import { Download, FileText, TrendingUp, CheckCircle } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export function FeaturedInsight() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    'Latest regulatory updates for African markets',
    'Step-by-step submission guidelines',
    'Best practices from successful applications',
    'Expert insights on emerging trends',
  ];

  return (
    <section id="insights" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#003366] via-[#003366] to-[#339966] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-[#FFC300]/20 rounded-full">
                <TrendingUp className="w-4 h-4 text-[#FFC300]" />
                <span className="text-[#FFC300] text-sm">Free Resource</span>
              </div>

              <h2 className="text-white mb-4">
                Stay Ahead: Download Our Latest Regulatory Guide
              </h2>

              <p className="text-gray-200 mb-6 text-lg">
                Access our comprehensive 2025 guide to navigating regulatory submissions in African markets. 
                Essential reading for pharmaceutical companies and regulatory professionals.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#FFC300] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#FFC300] text-[#003366] rounded-lg shadow-xl hover:bg-white transition-all flex items-center gap-3 group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Get Your Free Guide Now</span>
              </motion.button>

              <p className="text-gray-400 text-sm mt-4">
                No credit card required • Instant download • 45 pages
              </p>
            </motion.div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-8 md:p-12"
            >
              {/* E-book Cover Mockup */}
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative z-10"
                >
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="aspect-[3/4] bg-gradient-to-br from-white to-gray-100 p-8 flex flex-col">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#339966] rounded-lg flex items-center justify-center mb-4">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-xs text-[#339966] mb-2">2025 EDITION</div>
                        <h3 className="text-[#003366] text-xl mb-2">
                          Regulatory Excellence in African Markets
                        </h3>
                        <div className="text-sm text-gray-600">
                          A Comprehensive Guide
                        </div>
                      </div>

                      <div className="mt-auto space-y-2">
                        <div className="h-1 bg-[#003366]/10 rounded" />
                        <div className="h-1 bg-[#003366]/10 rounded w-3/4" />
                        <div className="h-1 bg-[#003366]/10 rounded w-1/2" />
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                        <div className="text-xs text-gray-500">LCK Pharmaceutical</div>
                        <div className="text-xs text-[#339966]">45 PAGES</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFC300]/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#339966]/20 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
