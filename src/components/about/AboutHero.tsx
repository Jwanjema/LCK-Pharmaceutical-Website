import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/95 via-[#339966]/90 to-[#003366]/95 z-10" />
        <img
          src="https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjQ0MTcxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Our Team"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 bg-[#FFC300]/20 backdrop-blur-sm border border-[#FFC300]/30 rounded-full text-[#FFC300]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            About LCK Pharmaceutical Consulting
          </motion.div>

          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            Empowering Global Health Through Regulatory Excellence
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Since 2015, we've been bridging the gap between innovative pharmaceuticals and the patients who need them most
          </p>
        </motion.div>
      </div>
    </section>
  );
}
