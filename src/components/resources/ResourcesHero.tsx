import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export function ResourcesHero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#003366] via-[#339966] to-[#003366]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#FFC300]/20 backdrop-blur-sm border border-[#FFC300]/30 rounded-full text-[#FFC300]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-5 h-5" />
            <span>Knowledge Hub</span>
          </motion.div>

          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            Resources & Insights
          </h1>

          <p className="text-base md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 md:mb-8">
            Expert guidance, regulatory updates, and practical tools to support your regulatory journey
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {['All Resources', 'Guidelines', 'Case Studies', 'Webinars', 'Templates'].map((filter, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2.5 rounded-full transition-all ${
                  index === 0
                    ? 'bg-[#FFC300] text-[#003366]'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
