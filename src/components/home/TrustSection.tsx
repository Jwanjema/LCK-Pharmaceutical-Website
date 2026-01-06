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
    { name: 'WHO', abbr: 'WHO', fullName: 'World Health Organization' },
    { name: 'PPB Kenya', abbr: 'PPB', fullName: 'Pharmacy & Poisons Board Kenya' },
    { name: 'NDA Uganda', abbr: 'NDA', fullName: 'National Drug Authority Uganda' },
    { name: 'EMA', abbr: 'EMA', fullName: 'European Medicines Agency' },
    { name: 'US FDA', abbr: 'FDA', fullName: 'U.S. Food & Drug Administration' },
    { name: 'UNIDO', abbr: 'UNIDO', fullName: 'United Nations Industrial Development' },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#F0F2F5]">
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center cursor-pointer border border-gray-200 hover:border-[#339966]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366]/10 to-[#339966]/10 rounded-full flex items-center justify-center mb-3 group-hover:from-[#003366]/20 group-hover:to-[#339966]/20 transition-all">
                  <span className="text-[#003366] group-hover:text-[#339966] transition-colors">
                    {partner.abbr}
                  </span>
                </div>
                <p className="text-center text-sm text-gray-600 group-hover:text-[#003366] transition-colors">
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
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {['ISO 9001 Certified', 'GMP Compliant', 'WHO Prequalified Partner'].map((badge, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-full border border-[#339966] text-[#003366] shadow-sm"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
