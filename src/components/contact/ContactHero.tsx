import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactHero() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@lckpharma.com',
      subDetails: 'support@lckpharma.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+254 XXX XXX XXX',
      subDetails: 'Mon-Fri, 8AM-6PM EAT',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Nairobi, Kenya',
      subDetails: 'Regional offices across Africa',
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 hours',
      subDetails: 'Priority support available',
    },
  ];

  return (
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/95 via-[#339966]/90 to-[#003366]/95 z-10" />
        <img
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXMlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQzOTUyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Contact Us"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 bg-[#FFC300]/20 backdrop-blur-sm border border-[#FFC300]/30 rounded-full text-[#FFC300]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.div>

          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            Let's Start a Conversation
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Whether you're seeking regulatory guidance or exploring partnership opportunities, 
            our team is here to help
          </p>
        </motion.div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
              >
                <Icon className="w-6 h-6 text-[#FFC300] mx-auto mb-2" />
                <div className="text-xs text-gray-300 mb-1">{info.title}</div>
                <div className="text-white text-sm mb-1">{info.details}</div>
                <div className="text-xs text-gray-400">{info.subDetails}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
