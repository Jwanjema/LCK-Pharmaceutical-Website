import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface TestimonialSectionProps {
  onNavigate: (page: string) => void;
}

export function TestimonialSection({ onNavigate }: TestimonialSectionProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "LCK's WHO prequalification expertise was instrumental in securing approval for our essential medicine portfolio. Their knowledge of CTD requirements and regulatory harmonization across African markets saved us significant time and resources.",
      author: 'Dr. Sarah Kamau',
      title: 'Regulatory Affairs Director',
      organization: 'Pan-African Pharmaceuticals',
      image: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYWJvcmF0b3J5JTIwYmlvdGVjaHxlbnwxfHx8fDE3NjQzMzQ0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      quote: "The training programs delivered by LCK have significantly enhanced our team's capabilities. Their practical approach and real-world examples have made a measurable impact on our submission success rates.",
      author: 'Prof. James Ochieng',
      title: 'Head of Quality Assurance',
      organization: 'National Drug Authority',
      image: 'https://images.unsplash.com/photo-1576765608741-911f44c98546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHJlc2VhcmNoJTIwc2NpZW50aXN0fGVufDF8fHx8MTc2NDQyMjMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-[#F0F2F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#003366] mb-4">What Our Partners Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by pharmaceutical companies, regulatory authorities, and health organizations worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#003366] to-[#339966] rounded-full flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#FFC300] fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#003366]/20 to-[#339966]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#003366] text-sm md:text-base">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-[#003366]">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-[#339966]">{testimonial.organization}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#339966]/20">
            <h3 className="text-[#003366] mb-4">Ready to Transform Your Regulatory Strategy?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join leading pharmaceutical companies and regulatory authorities who trust LCK for their regulatory excellence needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => onNavigate('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#FFC300] text-[#003366] rounded-lg shadow-lg hover:bg-[#FF5733] hover:text-white transition-all"
              >
                Request a Consultation
              </motion.button>
              <motion.button
                onClick={() => onNavigate('case-studies')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-[#003366] text-[#003366] rounded-lg hover:bg-[#003366] hover:text-white transition-all"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
