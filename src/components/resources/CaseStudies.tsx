import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Clock, MapPin } from 'lucide-react';

interface CaseStudiesProps {
  onNavigate: (page: string) => void;
}

export function CaseStudies({ onNavigate }: CaseStudiesProps) {
  const caseStudies = [
    {
      title: 'Accelerating Market Access Across East Africa',
      client: 'Leading Generic Manufacturer',
      region: 'East Africa',
      challenge: 'Complex multi-country submission strategy for 15 products',
      outcome: '100% approval rate within 12 months',
      timeReduced: '6 months',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'NRA Capacity Building Program',
      client: 'National Regulatory Authority',
      region: 'West Africa',
      challenge: 'Limited technical capacity for BE study evaluation',
      outcome: 'Trained 25 assessors, reduced review time by 40%',
      timeReduced: '8 weeks',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'GMP Compliance Remediation',
      client: 'Local Manufacturing Facility',
      region: 'Southern Africa',
      challenge: 'Multiple GMP deficiencies identified during inspection',
      outcome: 'Successful re-inspection with zero critical findings',
      timeReduced: '3 months',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#003366] mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Real-world examples of how our expertise has helped clients achieve their regulatory goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-200/50 hover:border-[#339966] overflow-hidden group"
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${study.color}`} />

              <div className="p-4 md:p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{study.region}</span>
                </div>

                <h3 className="text-[#003366] mb-3">{study.title}</h3>
                <div className="text-[#339966] mb-4 text-sm">{study.client}</div>

                {/* Challenge */}
                <div className="mb-3 pb-3 border-b border-gray-200">
                  <div className="text-sm text-gray-500 mb-2">Challenge</div>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>

                {/* Outcome */}
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Outcome</div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#339966] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{study.outcome}</p>
                  </div>
                </div>

                {/* Time Saved */}
                <div className="bg-[#FFC300]/10 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 text-[#003366]">
                    <Clock className="w-5 h-5" />
                    <div>
                      <div className="text-xs text-gray-600">Time Saved</div>
                      <div>{study.timeReduced}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="w-full flex items-center justify-center gap-2 text-[#339966] group-hover:text-[#FFC300] transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <motion.button
            onClick={() => onNavigate('case-studies')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-[#003366] text-[#003366] rounded-lg hover:bg-[#003366] hover:text-white transition-all"
          >
            View All Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
