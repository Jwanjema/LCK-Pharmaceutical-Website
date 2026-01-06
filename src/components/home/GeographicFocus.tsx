import { motion } from 'framer-motion';
import { Globe2, Users, Building2, TrendingUp } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export function GeographicFocus() {
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

  const regions = [
    { name: 'East Africa', countries: 'Kenya, Uganda, Tanzania, Rwanda', active: true },
    { name: 'West Africa', countries: 'Nigeria, Ghana, Senegal', active: true },
    { name: 'Southern Africa', countries: 'South Africa, Zimbabwe, Zambia', active: true },
    { name: 'Middle East', countries: 'UAE, Saudi Arabia, Egypt', active: true },
  ];

  const impacts = [
    {
      icon: Users,
      title: 'Local Capacity Building',
      description: 'Empowering local professionals with skills and knowledge',
    },
    {
      icon: Building2,
      title: 'Manufacturing Support',
      description: 'Strengthening local pharmaceutical production capabilities',
    },
    {
      icon: TrendingUp,
      title: 'Market Access',
      description: 'Facilitating faster, more efficient regulatory pathways',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#F0F2F5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23003366'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#339966]/10 rounded-full">
            <Globe2 className="w-5 h-5 text-[#339966]" />
            <span className="text-[#339966]">Our Global Reach</span>
          </div>
          <h2 className="text-[#003366] mb-4">Global Reach, Local Impact</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Strengthening regulatory systems and local manufacturing capability across key regions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="relative w-full aspect-square">
                {/* Stylized Map Background */}
                <img
                  src="https://images.unsplash.com/photo-1543234723-b70b104d8e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBtYXAlMjBkaWdpdGFsfGVufDF8fHx8MTc2NDQyMjMyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Global Network"
                  className="w-full h-full object-cover rounded-xl opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl text-[#003366] mb-2">50+</div>
                    <div className="text-xl text-[#339966]">Countries Served</div>
                  </div>
                </div>

                {/* Animated Pulse Points */}
                {[
                  { top: '20%', left: '60%' },
                  { top: '40%', left: '55%' },
                  { top: '60%', left: '50%' },
                  { top: '35%', left: '70%' },
                ].map((pos, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-4 h-4"
                    style={pos}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <div className="w-full h-full bg-[#FFC300] rounded-full" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Regions List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-[#339966] cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-[#003366] mb-2">{region.name}</h4>
                    <p className="text-gray-600">{region.countries}</p>
                  </div>
                  <div className="w-3 h-3 bg-[#339966] rounded-full animate-pulse" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Impact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#339966] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-[#003366] mb-2">{impact.title}</h4>
                  <p className="text-gray-600 text-sm">{impact.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
