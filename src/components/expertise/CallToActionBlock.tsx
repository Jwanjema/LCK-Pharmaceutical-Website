import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

interface CallToActionBlockProps {
  onNavigate: (page: string) => void;
}

export function CallToActionBlock({ onNavigate }: CallToActionBlockProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="bg-gradient-to-br from-[#003366] via-[#003366] to-[#339966] rounded-3xl p-8 md:p-16 relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC300]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#339966]/20 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC300]/20 rounded-full mb-4">
                  <span className="text-[#FFC300]">Ready to Get Started?</span>
                </div>
                <h2 className="text-white mb-6">
                  Partner with LCK for Regulatory Excellence
                </h2>
                <p className="text-gray-200 text-lg mb-8">
                  Let's discuss how our expertise can support your regulatory goals and accelerate your market access strategy
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button
                  onClick={() => onNavigate('contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#FFC300] text-[#003366] rounded-lg shadow-xl hover:bg-white transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all"
                >
                  Download Service Brochure
                </motion.button>
              </div>

              {/* Contact Options */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Mail className="w-8 h-8 text-[#FFC300] mx-auto mb-3" />
                  <div className="text-sm text-gray-300 mb-2">Email Us</div>
                  <a href="mailto:info@lckpharma.com" className="text-white hover:text-[#FFC300] transition-colors">
                    info@lckpharma.com
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Phone className="w-8 h-8 text-[#FFC300] mx-auto mb-3" />
                  <div className="text-sm text-gray-300 mb-2">Call Us</div>
                  <a href="tel:+254000000000" className="text-white hover:text-[#FFC300] transition-colors">
                    +254 XXX XXX XXX
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-gray-300">
                  Typical response time: <span className="text-[#FFC300]">Within 24 hours</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
