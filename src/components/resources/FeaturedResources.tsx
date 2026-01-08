import { motion } from 'framer-motion';
import { FileText, Download, Clock, TrendingUp } from 'lucide-react';

export function FeaturedResources() {
  const resources = [
    {
      type: 'Guide',
      title: '2025 African Regulatory Landscape Report',
      description: 'Comprehensive overview of regulatory requirements and submission processes across 20+ African countries.',
      pages: '65 pages',
      downloads: '2.3K',
      updated: 'Updated Nov 2024',
      featured: true,
      file: '/downloads/african-regulatory-landscape-2025.pdf',
    },
    {
      type: 'Checklist',
      title: 'CTD Module 3 Compilation Checklist',
      description: 'Step-by-step checklist for quality documentation assembly according to ICH standards.',
      pages: '12 pages',
      downloads: '1.8K',
      updated: 'Updated Oct 2024',
      file: '/downloads/ctd-module-3-checklist.pdf',
    },
    {
      type: 'Template',
      title: 'GMP Gap Assessment Template',
      description: 'Ready-to-use template for conducting comprehensive GMP compliance assessments.',
      pages: '28 pages',
      downloads: '1.5K',
      updated: 'Updated Sep 2024',
      file: '/downloads/gmp-gap-assessment-template.pdf',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#F0F2F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#003366] mb-4">Featured Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most popular downloads to help you navigate regulatory complexities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-gray-200/50 ${
                resource.featured ? 'md:col-span-3 lg:col-span-1' : ''
              }`}
            >
              {resource.featured && (
                <div className="bg-gradient-to-r from-[#FFC300] to-[#FF5733] px-4 py-2 text-center">
                  <div className="flex items-center justify-center gap-2 text-white text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="px-3 py-1.5 bg-[#339966]/10 text-[#339966] text-sm rounded-full">
                    {resource.type}
                  </div>
                  <FileText className="w-8 h-8 text-[#003366]/20" />
                </div>

                <h3 className="text-[#003366] mb-2 text-lg">{resource.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{resource.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {resource.pages}
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    {resource.downloads}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {resource.updated}
                  </span>
                  <motion.a
                    href={resource.file}
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-[#003366] text-white rounded-lg hover:bg-[#339966] transition-colors text-sm inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
