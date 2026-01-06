import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function TrustSection() {
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

  const partners = [
    { 
      name: 'WHO', 
      fullName: 'World Health Organization',
      colors: ['#0066cc', '#0052a3'],
      icon: '🌍'
    },
    { 
      name: 'PPB', 
      fullName: 'Pharmacy & Poisons Board Kenya',
      colors: ['#27ae60', '#229954'],
      icon: '⚕️'
    },
    { 
      name: 'EMA', 
      fullName: 'European Medicines Agency',
      colors: ['#8b5cf6', '#7c3aed'],
      icon: '🇪🇺'
    },
    { 
      name: 'FDA', 
      fullName: 'U.S. Food & Drug Administration',
      colors: ['#dc2626', '#b91c1c'],
      icon: '🇺🇸'
    },
    { 
      name: 'UNIDO', 
      fullName: 'UN Industrial Development',
      colors: ['#f59e0b', '#d97706'],
      icon: '🏭'
    },
    { 
      name: 'SADC', 
      fullName: 'Southern African Dev. Community',
      colors: ['#0891b2', '#0e7490'],
      icon: '🌍'
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-[#F0F2F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#003366] mb-4">Trusted by Leading Institutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partnering with global health organizations, regulatory authorities, and pharmaceutical leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center cursor-pointer border border-gray-200 hover:border-[#339966] relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                  style={{
                    background: `linear-gradient(135deg, ${partner.colors[0]}, ${partner.colors[1]})`,
                  }}
                />
                
                {/* Logo Badge */}
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${partner.colors[0]}, ${partner.colors[1]})`,
                  }}
                >
                  <span className="text-2xl sm:text-3xl mb-1">{partner.icon}</span>
                  <span className="text-white text-xs sm:text-sm font-bold text-center px-1">
                    {partner.name}
                  </span>
                </div>
                
                {/* Organization Name */}
                <p className="text-center text-xs sm:text-sm text-gray-700 group-hover:text-[#003366] transition-colors font-medium relative z-10">
                  {partner.fullName}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-6"
        >
          {['ISO 9001 Certified', 'GMP Compliant', 'WHO Prequalified Partner'].map((badge, index) => (
            <div
              key={index}
              className="px-4 py-2 md:px-6 md:py-3 bg-white rounded-full border border-[#339966] text-[#003366] text-sm md:text-base shadow-sm"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
