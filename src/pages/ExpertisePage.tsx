import { useState, useEffect } from 'react';
import { ExpertiseHero } from '../components/expertise/ExpertiseHero';
import { ServicesNavigation } from '../components/expertise/ServiceSection';
import { ServiceSection } from '../components/expertise/ServiceNavigation';
import { ClientFocus } from '../components/expertise/ClientFocus';
import { CallToActionBlock } from '../components/expertise/CallToActionBlock';

interface ExpertisePageProps {
  onNavigate: (page: string) => void;
}

export function ExpertisePage({ onNavigate }: ExpertisePageProps) {
  const [activeSection, setActiveSection] = useState('regulatory');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['regulatory', 'clinical', 'compliance', 'systems', 'training'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <ExpertiseHero />

      <div className="bg-[#F0F2F5] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <ServicesNavigation
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
          {/* Service 1: Regulatory Affairs */}
          <ServiceSection
            id="regulatory"
            title="Regulatory Affairs & Dossier Development"
            description="Comprehensive regulatory support for pharmaceutical companies seeking market authorization globally. We provide expert technical dossier support, strategic market access planning, and scientific writing for WHO prequalification, FDA, and national registrations—leveraging our founder's former FDA background and 20+ years of regulatory expertise."
            offerings={[
              'Technical dossier compilation and quality review (CTD/eCTD format)',
              'Strategic market access planning across FDA, WHO PQ, and African/LMIC pathways',
              'Scientific and regulatory writing for module submissions',
              'WHO prequalification (PQ) application preparation and support',
              'National registration submissions across Africa, Middle East, and Asia',
              'Regulatory strategy consultation for complex markets',
              'Post-approval variation management and regulatory updates',
            ]}
            benefits={[
              'FDA-informed regulatory strategies drawing from founder expertise',
              'Higher first-time approval rates and faster market entry',
              'Expert navigation of regional harmonization requirements',
              'WHO PQ-ready documentation meeting global standards',
              'Reduced regulatory risk and resubmission delays',
              'Continuous strategic regulatory support across markets',
            ]}
            visual={
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
                <h4 className="text-[#003366] mb-6 text-center">Regulatory Pathways We Support</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { market: 'FDA', desc: 'US market authorization' },
                    { market: 'WHO PQ', desc: 'International prequalification' },
                    { market: 'African NRAs', desc: 'Country-specific registrations' },
                    { market: 'Harmonized', desc: 'EAC, ZAZIBONA, GCC' },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="text-sm font-bold text-blue-600 mb-2">{item.market}</div>
                      <div className="text-xs text-gray-600">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            }
            contexts={['WHO PQ Guidelines', 'African NRA Requirements', 'ICH Guidelines', 'EAC Harmonization', 'ZAZIBONA', 'GCC Standards']}
          />

{/* Service 2: Bioequivalence & Clinical PK */}
          <ServiceSection
            id="clinical"
            title="Bioequivalence & Clinical PK"
            description="Expert design, evaluation, and review of bioequivalence studies—the gold standard for generic drug approval worldwide. We provide comprehensive technical and regulatory support throughout the BE study lifecycle, from protocol development through WHO prequalification dossier submission. Our team has deep expertise in regional BE capacity across the Middle East, Africa, and Asia."
            offerings={[
              'BE study protocol design aligned with WHO and ICH guidelines',
              'Accredited study site qualification and selection',
              'Bioanalytical method validation and CRO oversight',
              'Statistical analysis plan (SAP) development and pharmacokinetic review',
              'BE study report preparation and comprehensive technical review',
              'WHO PQ BE dossier compilation and regulatory submission support',
              'Regional collaboration and cross-border BE study coordination',
            ]}
            benefits={[
              'Studies designed to meet WHO PQ, FDA, and regional NRA requirements',
              'Reduced risk of study failure, rejection, or data integrity issues',
              'Expert guidance on protocol requirements across different regulatory pathways',
              'Faster regulatory review and approval timelines',
              'Cost-effective study planning and quality assurance oversight',
              'Access to our network of accredited BE centers across the Middle East and Africa',
            ]}
            visual={
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <h4 className="text-[#003366] mb-6 text-center">BE Study Support Lifecycle</h4>
                <div className="space-y-3">
                  {[
                    { phase: 'Pre-Study', activities: 'Protocol design, site accreditation review, GCP training, ethics approval' },
                    { phase: 'Study Conduct', activities: 'Quality monitoring, bioanalytical oversight, GCP compliance, data integrity' },
                    { phase: 'Post-Study', activities: 'Pharmacokinetic analysis, biostatistical review, report writing, WHO PQ submission' },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-[#003366] mb-1">{item.phase}</div>
                        <div className="text-sm text-gray-600">{item.activities}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
            contexts={['WHO Bioequivalence Guidelines', 'ICH E6 GCP', 'EAC BE Guidelines', 'GCC Harmonization', 'ZAZIBONA']}
          />

          {/* Service 3: GMP Auditing & GBT Advisory */}
          <ServiceSection
            id="compliance"
            title="GMP Auditing & GBT Advisory"
            description="Comprehensive GMP compliance support and WHO Global Benchmarking Tool (GBT) advisory for manufacturers and national regulatory authorities. We conduct mock audits, gap assessments, and provide strategic guidance to achieve WHO GBT maturity levels and maintain international quality standards."
            offerings={[
              'WHO GBT maturity level assessments',
              'GMP mock audits and inspection readiness',
              'Gap analysis and CAPA plan development',
              'Quality management system implementation',
              'PIC/S and WHO GMP compliance support',
              'Pre-approval and routine inspection preparation',
            ]}
            benefits={[
              'Improved WHO GBT maturity scores',
              'Higher inspection success rates',
              'Reduced regulatory compliance risk',
              'Enhanced operational efficiency',
              'Sustainable quality culture development',
            ]}
            visual={
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <h4 className="text-[#003366] mb-6 text-center">WHO GBT Focus Areas</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Regulatory System',
                    'Registration',
                    'Vigilance',
                    'Market Surveillance',
                    'Laboratories',
                    'Inspections',
                  ].map((pillar, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-2">
                        ✓
                      </div>
                      <div className="text-sm text-[#003366]">{pillar}</div>
                    </div>
                  ))}
                </div>
              </div>
            }
            contexts={['WHO GBT', 'WHO GMP', 'PIC/S Standards', 'ICH Q7-Q10', 'ISO 9001']}
          />

              {/* Service 4: Regulatory Systems Strengthening */}
              <ServiceSection
                id="systems"
                title="Regulatory Systems Strengthening"
            description="Partnering with National Regulatory Authorities, Ministries of Health, and international organizations to strengthen regulatory frameworks and achieve WHO GBT maturity levels. We provide strategic guidance for pharmaceutical policy development, organizational capacity building, and long-term sustainability in LMICs."
            offerings={[
              'WHO GBT maturity assessments and roadmaps',
              'Pharmaceutical policy and guideline development',
              'Regulatory systems design and implementation',
              'Organizational capacity development for NRAs',
              'Regional harmonization support (EAC, SADC)',
              'Donor-funded project design and implementation',
            ]}
            benefits={[
              'Improved WHO GBT maturity scores',
              'Strengthened public health protection',
              'Enhanced regional cooperation and convergence',
              'Sustainable regulatory systems',
              'Alignment with WHO and international standards',
            ]}
            visual={
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
                <h4 className="text-[#003366] mb-6 text-center">Systems Strengthening Pillars</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { area: 'Governance', elements: 'Legal frameworks, policies, accountability' },
                    { area: 'Processes', elements: 'SOPs, workflows, technical guidelines' },
                    { area: 'People', elements: 'Capacity building, training, leadership' },
                    { area: 'Technology', elements: 'IT systems, databases, digital transformation' },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-[#003366] mb-2">{item.area}</div>
                      <div className="text-sm text-gray-600">{item.elements}</div>
                    </div>
                  ))}
                </div>
              </div>
            }
            contexts={['WHO GBT', 'African Medicines Agency', 'EAC Harmonization', 'SADC', 'ZAZIBONA']}
          />

          {/* Service 5: Training & Capacity Building */}
          <ServiceSection
            id="training"
            title="Training & Capacity Building"
            description="Customized training programs designed to build technical competency and regulatory expertise. From foundational courses to advanced technical training, we empower professionals across the pharmaceutical value chain."
            offerings={[
              'Customized in-house training programs',
              'Public workshops and seminars',
              'Online and hybrid learning modules',
              'Technical mentorship and coaching',
              'Certification preparation courses',
              'Train-the-trainer programs for sustainability',
            ]}
            benefits={[
              'Enhanced team competency and confidence',
              'Improved submission quality and success rates',
              'Reduced reliance on external consultants',
              'Long-term organizational capacity',
              'Practical, applicable knowledge transfer',
            ]}
            visual={
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8">
                <h4 className="text-[#003366] mb-6 text-center">Training Topics</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'CTD/eCTD Compilation',
                    'GMP Compliance',
                    'BE Study Design',
                    'Regulatory Writing',
                    'Quality Risk Management',
                    'Inspection Preparation',
                    'Pharmacovigilance',
                    'Clinical Trials',
                    'Regulatory Strategy',
                  ].map((topic, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm text-sm text-[#003366]">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            }
            contexts={['WHO Training Materials', 'ICH Guidelines', 'Regional Requirements', 'GxP Standards']}
          />
        </div>
      </div>

      <ClientFocus />
      <CallToActionBlock onNavigate={onNavigate} />
    </div>
  );
}
