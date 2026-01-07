import { motion } from 'framer-motion';
import { AnimatedCounter } from '../AnimatedCounter';
import { LazyImage } from '../LazyImage';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 pb-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/95 via-[#003366]/90 to-[#339966]/85 z-10" />
        <LazyImage
          src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYWJvcmF0b3J5JTIwYmlvdGVjaHxlbnwxfHx8fDE3NjQzMzQ0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern Laboratory"
          className="w-full h-full object-cover"
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
            Led by Former US FDA Pharmacologist Since 2005
          </motion.div>

          <h1 className="text-white mb-4 max-w-5xl mx-auto">
            Unlock Access to <span className="text-[#FFC300]">Affordable Healthcare in Africa</span>
          </h1>

          <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
            We are a Regulatory Affairs Consultancy dedicated to helping companies, manufacturers, and national regulatory authorities in low- and middle-income countries navigate complex compliance requirements, strengthen regulatory systems, and achieve international approvals such as WHO prequalification—enabling safe, effective, and high-quality medicines to reach the market faster while meeting the highest global standards.
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
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-4xl text-[#FFC300] mb-2">
                <AnimatedCounter value={97} suffix="%" duration={2.5} />
              </div>
              <div className="text-gray-200">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-4xl text-[#FFC300] mb-2">
                <AnimatedCounter value={48} suffix="+" duration={2} />
              </div>
              <div className="text-gray-200">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-4xl text-[#FFC300] mb-2">
                <AnimatedCounter value={20} suffix="+" duration={2} />
              </div>
              <div className="text-gray-200">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
