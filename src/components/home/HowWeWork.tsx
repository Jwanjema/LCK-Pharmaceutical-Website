import { motion } from 'framer-motion';
import { CheckCircle, Users, FileCheck, Rocket } from 'lucide-react';

export function HowWeWork() {
  const steps = [
    {
      icon: Users,
      title: 'Understand Your Needs',
      description: 'We start by engaging closely with your team to identify challenges, goals, and regulatory requirements. This ensures we fully understand your unique context before providing solutions.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileCheck,
      title: 'Strategic Planning',
      description: 'We develop a tailored regulatory strategy aligned with your timelines, budget, and market objectives—ensuring compliance while accelerating time to market.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: CheckCircle,
      title: 'Execute with Excellence',
      description: 'Our team executes the plan with precision, managing dossier preparation, technical assessments, and coordination with regulatory authorities.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Rocket,
      title: 'Achieve Approval',
      description: 'We support you through submission, review, and approval—providing ongoing guidance until your product successfully reaches the market.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#003366] mb-4">Our Simple Process During Service Delivery</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our comprehensive approach covers every critical step, ensuring a smooth journey from strategy to submission
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FFC300] rounded-full flex items-center justify-center text-[#003366] font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-[#003366] mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Connector Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#339966] to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-[#003366] text-white rounded-lg hover:bg-[#339966] transition-all shadow-lg">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HowWeWork;
