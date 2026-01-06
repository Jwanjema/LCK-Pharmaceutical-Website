import { motion } from 'framer-motion';

export function CompanyStory() {
  const milestones = [
    { year: '2005', title: 'Founded by Dr. Loice C. Kikwai', description: 'FDA pharmacologist bridges regulatory science and healthcare access' },
    { year: '2010', title: 'Expanded Globally', description: 'Operations extended to USA, Middle East, Africa, and Asia' },
    { year: '2015', title: 'WHO Partnership', description: 'Designated WHO technical partner for regulatory capacity building' },
    { year: '2020', title: '48+ Projects', description: 'Milestone: Successfully completed 48+ pharmaceutical projects' },
    { year: '2023', title: '97% Success Rate', description: 'Achieved industry-leading 97% regulatory submission success rate' },
    { year: '2025', title: 'Global Innovation Leader', description: 'Pioneering regulatory excellence across multiple continents' },
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
                LCK Pharmaceutical Consulting was founded by Dr. Loice C. Kikwai, a former US FDA pharmacologist and global regulatory expert with over 20 years of experience in pharmaceutical regulation. Her vision was simple but powerful: to bridge the gap between regulatory science and global healthcare access.
              </p>
              <p>
                Drawing from her extensive FDA background and deep understanding of regulatory pathways worldwide, Dr. Kikwai established LCK to transform complex regulatory challenges into accessible healthcare solutions. We work with pharmaceutical manufacturers, regulatory authorities, and NGOs across the USA, Middle East, Africa, and Asia.
              </p>
              <p>
                Our team's combined expertise spans diverse regulatory landscapes—from FDA pathways to African harmonization initiatives—offering unique insights and practical solutions tailored to each market's needs. We've successfully guided 48+ projects and achieved a 97% success rate in regulatory submissions.
              </p>
              <p>
                Today, we continue our mission: to empower healthcare systems globally, strengthen regulatory infrastructure, and ensure that patients everywhere have timely access to safe, effective, and affordable medicines.
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
                <div className="text-4xl mb-2">20+</div>
                <div>Years of Regulatory Excellence in Africa & LMICs</div>
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
