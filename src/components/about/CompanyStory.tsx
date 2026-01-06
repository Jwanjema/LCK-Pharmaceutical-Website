import { motion } from 'framer-motion';

export function CompanyStory() {
  const milestones = [
    { year: '2015', title: 'Founded', description: 'LCK established in Nairobi, Kenya' },
    { year: '2017', title: 'Regional Expansion', description: 'Operations extended across East Africa' },
    { year: '2019', title: 'WHO Partnership', description: 'Became WHO technical partner' },
    { year: '2021', title: '100+ Projects', description: 'Milestone achievement in successful submissions' },
    { year: '2023', title: 'Pan-African', description: 'Expanded to 35+ countries across Africa' },
    { year: '2025', title: 'Innovation Hub', description: 'Leading regulatory excellence in LMICs' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#003366] mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                LCK Pharmaceutical Consulting was founded with a clear mission: to strengthen regulatory systems and expand access to quality medicines across Africa and low- and middle-income countries (LMICs).
              </p>
              <p>
                Starting in Nairobi, Kenya, we recognized the critical gap between innovative pharmaceutical products and their availability to patients in emerging markets. Regulatory complexity, limited technical capacity, and resource constraints were preventing life-saving medicines from reaching those who needed them most.
              </p>
              <p>
                Today, we are proud to have supported over 200 successful regulatory submissions, trained hundreds of professionals, and partnered with leading pharmaceutical companies, regulatory authorities, and international organizations to advance public health.
              </p>
              <p>
                Our team of experienced regulatory professionals brings together deep technical expertise, practical field experience, and a genuine commitment to making a difference in global health outcomes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621959614020-e12047c380ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2NDQyMzAxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="text-4xl mb-2">10+</div>
                <div>Years of Excellence in Regulatory Consulting</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#003366] text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#003366] via-[#339966] to-[#FFC300] hidden md:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:border-[#339966] transition-colors h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#339966] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="text-[#003366] text-center mb-1">{milestone.title}</div>
                    <p className="text-xs text-gray-600 text-center">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
