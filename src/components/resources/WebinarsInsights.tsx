import { motion } from 'framer-motion';
import { Video, Calendar, Users, Play } from 'lucide-react';

export function WebinarsInsights() {
  const webinars = [
    {
      type: 'Live Webinar',
      title: 'Navigating EAC Harmonization: 2025 Updates',
      date: 'December 15, 2024',
      time: '10:00 AM EAT',
      participants: '250+ registered',
      status: 'upcoming',
    },
    {
      type: 'On-Demand',
      title: 'CTD Module 2 Best Practices',
      date: 'November 2024',
      time: '45 minutes',
      participants: '1.2K views',
      status: 'available',
    },
    {
      type: 'On-Demand',
      title: 'GMP Inspection Preparation Masterclass',
      date: 'October 2024',
      time: '60 minutes',
      participants: '980 views',
      status: 'available',
    },
  ];

  const insights = [
    {
      category: 'Regulatory Update',
      title: 'New WHO Guidelines on Stability Testing',
      date: 'Nov 25, 2024',
      readTime: '5 min read',
    },
    {
      category: 'Best Practices',
      title: '5 Common Mistakes in BE Study Protocols',
      date: 'Nov 18, 2024',
      readTime: '8 min read',
    },
    {
      category: 'Market Intelligence',
      title: 'Emerging Trends in African Pharmaceutical Regulation',
      date: 'Nov 10, 2024',
      readTime: '6 min read',
    },
    {
      category: 'How-To Guide',
      title: 'Step-by-Step: Variation Submissions',
      date: 'Nov 3, 2024',
      readTime: '10 min read',
    },
  ];

  return (
    <section className="py-20 bg-[#F0F2F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Webinars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[#003366] mb-4">Webinars & Training</h2>
          <p className="text-gray-600 max-w-2xl mb-8">
            Join our expert-led sessions on critical regulatory topics
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Video Thumbnail */}
                <div className="relative bg-gradient-to-br from-[#003366] to-[#339966] aspect-video flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    {webinar.status === 'upcoming' ? (
                      <Video className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs text-white ${
                      webinar.status === 'upcoming'
                        ? 'bg-[#FFC300]'
                        : 'bg-white/20 backdrop-blur-sm'
                    }`}>
                      {webinar.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-[#003366] mb-3">{webinar.title}</h4>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{webinar.participants}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2.5 rounded-lg transition-colors ${
                      webinar.status === 'upcoming'
                        ? 'bg-[#FFC300] text-[#003366] hover:bg-[#FF5733] hover:text-white'
                        : 'bg-[#003366] text-white hover:bg-[#339966]'
                    }`}
                  >
                    {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Now'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Latest Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#003366] mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mb-8">
            Expert articles and updates from our regulatory specialists
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-[#339966] cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-[#339966]/10 text-[#339966] text-xs rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-xs text-gray-500">{insight.readTime}</span>
                </div>
                <h4 className="text-[#003366] mb-2">{insight.title}</h4>
                <div className="text-sm text-gray-600">{insight.date}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-[#339966] text-[#339966] rounded-lg hover:bg-[#339966] hover:text-white transition-all"
            >
              View All Insights
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
