import { motion } from 'framer-motion';
import { Send, User, Mail, Building2, MessageSquare, FileText } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const services = [
    'Regulatory Strategy & Dossier Development',
    'Clinical & Bioequivalence Studies',
    'GxP Compliance & Quality Systems',
    'Regulatory Systems Strengthening',
    'Training & Capacity Building',
    'General Inquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#003366] mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339966] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339966] focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Company</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339966] focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339966] focus:border-transparent transition-all"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Service of Interest <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339966] focus:border-transparent transition-all appearance-none bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339966] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#FFC300] text-[#003366] rounded-lg hover:bg-[#FF5733] hover:text-white transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our Privacy Policy
              </p>
            </form>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-[#003366] to-[#339966] rounded-2xl p-8 text-white">
              <h3 className="text-white mb-6">Why Partner with LCK?</h3>
              <div className="space-y-4">
                {[
                  'Expert regulatory guidance tailored to your needs',
                  'Proven track record across 35+ countries',
                  'Rapid response and dedicated support',
                  'Comprehensive end-to-end solutions',
                  'WHO-aligned standards and best practices',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FFC300] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#003366] text-sm">✓</span>
                    </div>
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-[#003366] mb-6">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-[#003366]">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-[#003366]">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                Emergency support available 24/7 for active clients
              </p>
            </div>

            {/* Follow Us */}
            <div className="bg-[#F0F2F5] rounded-2xl p-8">
              <h3 className="text-[#003366] mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Facebook'].map((platform, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:bg-[#339966] hover:text-white"
                  >
                    {platform[0]}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
