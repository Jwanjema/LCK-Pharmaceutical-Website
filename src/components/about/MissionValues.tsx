import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb, Users, Globe2, Award, TrendingUp } from 'lucide-react';

export function MissionValues() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver the highest quality regulatory services, continuously raising the bar for professional standards.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical conduct in all our professional relationships.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new approaches and technologies to solve complex regulatory challenges efficiently.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We build strong partnerships with clients, regulators, and stakeholders to achieve shared goals.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Globe2,
      title: 'Impact',
      description: 'We measure success by the positive difference we make in global health access and outcomes.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Sustainability',
      description: 'We focus on building long-term capacity and sustainable systems, not just short-term solutions.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-[#F0F2F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#003366] to-[#339966] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC300]/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white mb-4">Our Mission</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                To advance global health by providing world-class regulatory and quality systems expertise that enables 
                pharmaceutical innovation to reach patients in Africa and low- and middle-income countries.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#339966]/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#003366]/10 to-[#339966]/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#339966]" />
              </div>
              <h3 className="text-[#003366] mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                A world where robust regulatory systems and pharmaceutical quality standards ensure that all patients, 
                regardless of geography, have timely access to safe, effective, and affordable medicines.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#003366] mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            These principles guide every decision we make and every service we deliver
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-[#339966]"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-[#003366] mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
