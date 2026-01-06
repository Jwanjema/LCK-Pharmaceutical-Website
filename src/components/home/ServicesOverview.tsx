import { motion } from 'framer-motion';
import { FileText, FlaskConical, ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export function ServicesOverview() {
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

  const services = [
    {
      icon: FileText,
      title: 'Regulatory Strategy & Dossier Development',
      description: 'Comprehensive CTD/eCTD preparation and strategic regulatory planning for market authorization.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      hoverColor: 'group-hover:bg-blue-500',
    },
    {
      icon: FlaskConical,
      title: 'Clinical & Bioequivalence Studies',
      description: 'Expert support for BE study design, protocol development, and regulatory submissions.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      hoverColor: 'group-hover:bg-purple-500',
    },
    {
      icon: ShieldCheck,
      title: 'GxP Compliance & Quality Systems',
      description: 'Gap assessments, remediation plans, and ongoing compliance support for GMP, GLP, and GCP.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      hoverColor: 'group-hover:bg-green-500',
    },
    {
      icon: GraduationCap,
      title: 'Training & Capacity Building',
      description: 'Customized training programs for manufacturers, NRAs, and regulatory professionals.',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      hoverColor: 'group-hover:bg-orange-500',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#003366] mb-4">Comprehensive Solutions for a Complex Landscape</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            End-to-end regulatory and quality support tailored to the unique challenges of emerging markets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#339966] h-full flex flex-col">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-[#003366] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

                  <button className="flex items-center gap-2 text-[#339966] group-hover:text-[#FFC300] transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Service - Regulatory Systems Strengthening */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-br from-[#003366] to-[#339966] rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-white mb-4">Regulatory Systems Strengthening</h3>
                <p className="text-gray-200 mb-6">
                  Working with NRAs, Ministries of Health, and international organizations to build robust regulatory frameworks aligned with WHO standards.
                </p>
                <button className="px-6 py-3 bg-[#FFC300] text-[#003366] rounded-lg hover:bg-white transition-colors shadow-lg flex items-center gap-2">
                  <span>Explore Our Impact</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Policy Development', value: '30+' },
                  { label: 'NRAs Supported', value: '15+' },
                  { label: 'Training Programs', value: '100+' },
                  { label: 'Technical Assessments', value: '200+' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-3xl text-[#FFC300] mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
