import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

interface TeamSectionProps {
  onNavigate: (page: string) => void;
}

export function TeamSection({ onNavigate }: TeamSectionProps) {
  const team = [
    {
      name: 'Dr. Loice C. Kikwai',
      role: 'Founder & Managing Partner',
      expertise: 'FDA Pharmacologist & Global Regulatory Expert',
      bio: 'Former US FDA pharmacologist with 20+ years bridging regulatory science and healthcare access',
    },
    {
      name: 'Winnie Kipchumba',
      role: 'Program Manager',
      expertise: 'Pharmacy & Public Health',
      bio: 'BPharm, MPH - Passionate for world-class healthcare delivery and regulatory systems',
    },
    {
      name: 'Dr. James Kipchoge',
      role: 'Head of Regulatory Affairs',
      expertise: 'WHO PQ & CTD Development',
      bio: 'Expert in eCTD compilation and WHO prequalification pathways for 15+ countries',
    },
    {
      name: 'Dr. Sarah Mwangi',
      role: 'Clinical & BE Specialist',
      expertise: 'Bioequivalence Studies & Clinical Pharmacokinetics',
      bio: 'Led 50+ BE study designs and evaluations across East Africa and Middle East',
    },
    {
      name: 'Michael Koech',
      role: 'GMP & Quality Systems Lead',
      expertise: 'GMP Auditing & Quality Risk Management',
      bio: 'Former regulatory inspector; conducted 200+ GMP audits and gap assessments',
    },
    {
      name: 'David Njoroge',
      role: 'Training & Capacity Building Director',
      expertise: 'Professional Development & Knowledge Transfer',
      bio: 'Designed and delivered training programs for 3000+ regulatory professionals globally',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#003366] mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A diverse group of regulatory professionals with deep expertise across pharmaceutical development, 
            quality systems, and regulatory affairs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-200 hover:border-[#339966]">
                {/* Avatar */}
                <div className="aspect-square bg-gradient-to-br from-[#003366] to-[#339966] flex items-center justify-center relative overflow-hidden">
                  <div className="text-5xl md:text-6xl text-white/80">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex-1 bg-white/20 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </button>
                    <button className="flex-1 bg-white/20 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-6">
                  <h4 className="text-[#003366] mb-1">{member.name}</h4>
                  <div className="text-[#339966] mb-2">{member.role}</div>
                  <div className="text-sm text-gray-600 mb-3">
                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-full">
                      {member.expertise}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-[#003366]/5 to-[#339966]/5 rounded-2xl p-8 md:p-12 text-center border border-[#339966]/20"
        >
          <h3 className="text-[#003366] mb-4">Join Our Team</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We're always looking for talented regulatory professionals who share our passion for advancing global health. 
            If you're interested in making a real impact, we'd love to hear from you.
          </p>
          <motion.button
            onClick={() => onNavigate('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#FFC300] text-[#003366] rounded-lg shadow-lg hover:bg-[#FF5733] hover:text-white transition-all"
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
