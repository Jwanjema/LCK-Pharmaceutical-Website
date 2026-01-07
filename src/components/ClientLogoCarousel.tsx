import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function ClientLogoCarousel() {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  const logos = [
    {
      name: 'WHO',
      initials: 'WHO',
      description: 'World Health Organization',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'FDA',
      initials: 'FDA',
      description: 'US Food & Drug Administration',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'EMA',
      initials: 'EMA',
      description: 'European Medicines Agency',
      color: 'from-amber-500 to-amber-600',
    },
    {
      name: 'PPB',
      initials: 'PPB',
      description: 'Pharmacy & Poisons Board Kenya',
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'UNIDO',
      initials: 'UNIDO',
      description: 'UN Industrial Development',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'AfDB',
      initials: 'AfDB',
      description: 'African Development Bank',
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'SADC',
      initials: 'SADC',
      description: 'Southern African Dev. Community',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      name: 'EAC',
      initials: 'EAC',
      description: 'East African Community',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-[#F0F2F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#339966] font-semibold mb-2">TRUSTED PARTNERS</p>
          <h2 className="text-[#003366] mb-3">Recognized by Global Health Organizations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with leading international health institutions and regulatory bodies to strengthen pharmaceutical systems worldwide
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#F0F2F5] via-[#F0F2F5] to-transparent z-10 pointer-events-none" />

          {/* Moving Container */}
          <motion.div
            ref={containerRef}
            className="flex gap-6"
            animate={{ x: [-width, 0] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ y: -8 }}
              >
                <div className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-32 w-40 flex flex-col items-center justify-center border border-gray-100 hover:border-[#339966]">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />

                  {/* Logo Circle */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${logo.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <span className="text-white text-xs font-bold text-center px-1">
                      {logo.initials}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="text-center relative z-10">
                    <div className="font-semibold text-[#003366] text-sm mb-1">
                      {logo.name}
                    </div>
                    <div className="text-xs text-gray-500 line-clamp-2">
                      {logo.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-12 flex-wrap"
        >
          {[
            { badge: '🏆 WHO PQ Partner', color: 'bg-blue-50 text-blue-700 border-blue-200' },
            { badge: '✓ FDA Recognized', color: 'bg-red-50 text-red-700 border-red-200' },
            { badge: '🌍 20+ Countries', color: 'bg-green-50 text-green-700 border-green-200' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`px-4 py-2 rounded-full border text-sm font-medium ${item.color}`}
              whileHover={{ scale: 1.05 }}
            >
              {item.badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ClientLogoCarousel;
