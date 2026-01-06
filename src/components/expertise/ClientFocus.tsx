import { motion } from 'framer-motion';
import { Building2, FlaskConical, Landmark, ShieldCheck, Globe, Lightbulb } from 'lucide-react';

export function ClientFocus() {
  const clients = [
    {
      icon: Building2,
      title: 'Pharmaceutical Companies',
      description: 'Generic & innovative manufacturers seeking market authorization',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FlaskConical,
      title: 'BE Centres',
      description: 'Bioequivalence study facilities requiring regulatory support',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Landmark,
      title: 'Ministries of Health',
      description: 'Government bodies strengthening regulatory frameworks',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: ShieldCheck,
      title: 'National Regulatory Authorities',
      description: 'NRAs building capacity and technical capabilities',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Globe,
      title: 'Global Health Organizations',
      description: 'International partners working on health access initiatives',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovators & Start-ups',
      description: 'Emerging companies navigating regulatory pathways',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-[#F0F2F5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#003366] mb-4">Who We Serve</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From multinational pharmaceutical companies to emerging regulatory authorities, 
            we partner with diverse organizations to advance global health
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all h-full border border-gray-200 hover:border-[#339966]">
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${client.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-[#003366] mb-2">{client.title}</h4>
                  <p className="text-gray-600 text-sm">{client.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-[#003366] to-[#339966] rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '150+', label: 'Active Clients' },
              { number: '35+', label: 'Countries' },
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Success Rate' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl text-[#FFC300] mb-2">{stat.number}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
