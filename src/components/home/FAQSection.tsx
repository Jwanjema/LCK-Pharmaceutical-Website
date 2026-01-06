import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does LCK provide?',
      answer: 'LCK specializes in regulatory affairs consulting for pharmaceutical products, including technical dossier support, bioequivalence study design and evaluation, GMP auditing, WHO prequalification preparation, regulatory systems strengthening, and training & capacity building for companies and NRAs in LMICs.',
    },
    {
      question: 'Who can benefit from working with LCK?',
      answer: 'We work with pharmaceutical companies, generic manufacturers, national regulatory authorities (NRAs), ministries of health, donors, and international organizations operating in low- and middle-income countries seeking to navigate complex regulatory pathways and strengthen health systems.',
    },
    {
      question: 'How can LCK support pharmaceutical manufacturers?',
      answer: 'We provide end-to-end support from product development through market authorization—including CTD/eCTD compilation, BE study design, GMP compliance audits, WHO PQ preparation, market access strategy, and post-approval lifecycle management.',
    },
    {
      question: 'Does LCK provide training opportunities?',
      answer: 'Yes! We offer customized training programs for regulatory professionals, NRAs, and pharmaceutical companies. Topics include regulatory affairs, bioequivalence evaluation, GMP compliance, WHO standards, and regulatory systems strengthening.',
    },
    {
      question: 'Why choose LCK over other consulting firms?',
      answer: 'With 20+ years of combined experience, deep expertise in African and LMIC regulatory landscapes, proven track record with WHO prequalification, and hands-on experience strengthening regulatory systems, we deliver excellence tailored to your unique context.',
    },
    {
      question: 'How do I get started with LCK?',
      answer: 'Contact us through our website or email us directly. We\'ll schedule an initial consultation to understand your needs, challenges, and objectives—then develop a tailored proposal outlining how we can support your regulatory journey.',
    },
  ];

  return (
    <section className="py-20 bg-[#F0F2F5]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#003366] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Need clarity on something specific about us or our services? Here are some of the commonly asked questions by our clients and business partners.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-[#FFC300] font-semibold text-lg mt-0.5">{index + 1}.</span>
                  <h3 className="text-[#003366] font-semibold flex-1">{faq.question}</h3>
                </div>
                <div className="ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#339966]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#339966]" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pl-16">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
