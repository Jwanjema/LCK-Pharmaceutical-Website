import { motion } from 'framer-motion';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/95 via-[#003366]/90 to-[#339966]/85 z-10" />
        <img
          src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYWJvcmF0b3J5JTIwYmlvdGVjaHxlbnwxfHx8fDE3NjQzMzQ0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern Laboratory"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Animated Particle Effect */}
      <div className="absolute inset-0 z-10 opacity-30">
        {(() => {
          const winW = typeof window !== 'undefined' ? window.innerWidth : 1024;
          const winH = typeof window !== 'undefined' ? window.innerHeight : 800;
          return [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#FFC300] rounded-full"
              initial={{
                x: Math.random() * winW,
                y: Math.random() * winH,
              }}
              animate={{
                x: Math.random() * winW,
                y: Math.random() * winH,
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ));
        })()}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 bg-[#339966]/20 backdrop-blur-sm border border-[#339966]/30 rounded-full text-[#FFC300]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Regulatory Excellence Since 2015
          </motion.div>

          <h1 className="text-white mb-6 max-w-5xl mx-auto">
            Pioneering Regulatory Excellence for Global Health Advancement
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Strategic, Technical & Operational Support Across Africa, the Middle East, and LMICs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => onNavigate('expertise')}
              className="px-8 py-4 bg-[#FFC300] text-[#003366] rounded-lg shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, backgroundColor: '#FF5733', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Expertise
            </motion.button>
            <motion.button
              onClick={() => onNavigate('resources')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Insights
            </motion.button>
          </div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: '50+', label: 'Countries Served' },
              { number: '200+', label: 'Successful Submissions' },
              { number: '15+', label: 'Partner Organizations' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
              >
                <div className="text-4xl text-[#FFC300] mb-2">{stat.number}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
