import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  offerings: string[];
  visual: ReactNode;
  contexts: string[];
}

export function ServiceSection({
  id,
  title,
  description,
  benefits,
  offerings,
  visual,
  contexts,
}: ServiceSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="scroll-mt-32 bg-white rounded-2xl shadow-lg p-6 md:p-12 mb-8"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-[#003366] mb-4">{title}</h2>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
        {/* Left Column - Offerings */}
        <div>
          <h3 className="text-[#003366] mb-4">Our Approach</h3>
          <div className="space-y-3">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#339966]/5 transition-colors"
              >
                <div className="w-5 h-5 bg-[#339966] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-700">{offering}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Benefits */}
        <div>
          <h3 className="text-[#003366] mb-4">Key Benefits</h3>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-[#FFC300] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual/Infographic */}
      <div className="mb-8">{visual}</div>

      {/* Context & Standards */}
      <div className="bg-gradient-to-br from-[#003366]/5 to-[#339966]/5 rounded-xl p-6 border border-[#339966]/20">
        <h4 className="text-[#003366] mb-3">Standards & Alignment</h4>
        <div className="flex flex-wrap gap-2">
          {contexts.map((context, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white rounded-full text-sm text-[#003366] border border-[#339966]/30"
            >
              {context}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
