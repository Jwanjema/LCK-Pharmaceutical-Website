import { motion } from 'framer-motion';

export function ExpertiseHero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#003366]/95 to-[#339966]/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1634717811893-025e4bc487f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVndWxhdG9yeSUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjQ0MjIzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Regulatory Excellence"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 bg-[#339966]/20 backdrop-blur-sm border border-[#339966]/30 rounded-full text-[#FFC300]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.div>

          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            Strategic Regulatory & Quality Systems Expertise
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
            Tailored solutions for manufacturers, National Regulatory Authorities, and development partners
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {[
              { number: '5', label: 'Core Services' },
              { number: '200+', label: 'Successful Projects' },
              { number: 'WHO', label: 'Standards Aligned' },
              { number: '24/7', label: 'Support Available' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
              >
                <div className="text-2xl md:text-3xl text-[#FFC300] mb-1">{item.number}</div>
                <div className="text-sm text-gray-200">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
