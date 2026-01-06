import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export function OfficeLocations() {
  const offices = [
    {
      city: 'Nairobi',
      country: 'Kenya',
      type: 'Headquarters',
      address: 'Westlands Business Park, Nairobi',
      phone: '+254 XXX XXX XXX',
      email: 'nairobi@lckpharma.com',
      color: 'from-blue-500 to-cyan-500',
      featured: true,
    },
    {
      city: 'Kampala',
      country: 'Uganda',
      type: 'Regional Office',
      address: 'Kololo, Kampala',
      phone: '+256 XXX XXX XXX',
      email: 'kampala@lckpharma.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      city: 'Lagos',
      country: 'Nigeria',
      type: 'Regional Office',
      address: 'Victoria Island, Lagos',
      phone: '+234 XXX XXX XXX',
      email: 'lagos@lckpharma.com',
      color: 'from-green-500 to-emerald-500',
    },
    {
      city: 'Johannesburg',
      country: 'South Africa',
      type: 'Regional Office',
      address: 'Sandton, Johannesburg',
      phone: '+27 XXX XXX XXX',
      email: 'joburg@lckpharma.com',
      color: 'from-orange-500 to-red-500',
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
          <h2 className="text-[#003366] mb-4">Our Locations</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            With offices across Africa, we're positioned to provide local expertise with global standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden ${
                office.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${office.color}`} />
              
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-[#003366] mb-1">{office.city}</h3>
                    <div className="text-[#339966]">{office.country}</div>
                    {office.featured && (
                      <span className="inline-block mt-2 px-3 py-1 bg-[#FFC300]/20 text-[#FFC300] text-xs rounded-full">
                        {office.type}
                      </span>
                    )}
                    {!office.featured && (
                      <span className="inline-block mt-2 text-gray-600 text-sm">
                        {office.type}
                      </span>
                    )}
                  </div>
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${office.color} rounded-xl flex items-center justify-center`}>
                    <MapPin className="w-6 md:w-7 h-6 md:h-7 text-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="hover:text-[#339966] transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-[#339966] transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 py-3 bg-gray-100 hover:bg-[#339966] hover:text-white text-[#003366] rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Globe className="w-5 h-5" />
                  <span>Get Directions</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Presence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center"
        >
          <h3 className="text-[#003366] mb-4">We Also Serve</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Beyond our physical offices, we provide remote consulting services across Africa and LMICs
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Tanzania', 'Rwanda', 'Ghana', 'Senegal', 'Ethiopia', 'Zimbabwe',
              'Zambia', 'Mozambique', 'Malawi', 'Botswana', 'Egypt', 'Morocco',
            ].map((country, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#339966]/10 text-[#339966] rounded-full text-sm"
              >
                {country}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
