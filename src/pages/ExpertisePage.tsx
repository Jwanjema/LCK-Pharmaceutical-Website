import { useState, useEffect } from 'react';
import { ExpertiseHero } from '../components/expertise/ExpertiseHero';
import { ServicesNavigation } from '../components/expertise/ServiceSection';
import { ServiceSection } from '../components/expertise/ServiceNavigation';
import { ClientFocus } from '../components/expertise/ClientFocus';
import { CallToActionBlock } from '../components/expertise/CallToActionBlock';

export function ExpertisePage() {
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
          <div className="flex gap-8">
            <ServicesNavigation
              activeSection={activeSection}
              onSectionChange={handleSectionChange}
            />

            <div className="flex-1">
              {/* Service 1: Regulatory Strategy */}
              <ServiceSection
                id="regulatory"
                title="Regulatory Strategy & Dossier Development"
                description="Comprehensive regulatory planning and dossier preparation services aligned with international standards. We guide pharmaceutical companies through the complexities of market authorization across multiple jurisdictions, ensuring compliance and accelerating approval timelines."
                offerings={[
                  'CTD/eCTD compilation and formatting to ICH standards',
                  'Strategic regulatory pathway analysis for target markets',
                  'Gap analysis and remediation planning for existing dossiers',
                  'Post-approval variation and life-cycle management support',
                  'Regional submission strategies for Africa and LMIC markets',
                  'Regulatory intelligence and competitive landscape analysis',
                ]}
                benefits={[
                  'Reduced time to market authorization',
                  'Higher first-time approval rates',
                  'Cost-effective submission strategies',
                  'Expert navigation of regional requirements',
                  'Ongoing regulatory support and consultation',
                ]}
                visual={
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
                    <h4 className="text-[#003366] mb-6 text-center">Our Dossier Development Process</h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        { step: '1', title: 'Assessment', desc: 'Document review & gap analysis' },
                        { step: '2', title: 'Strategy', desc: 'Regulatory pathway planning' },
                        { step: '3', title: 'Compilation', desc: 'CTD/eCTD assembly' },
                        { step: '4', title: 'Submission', desc: 'Filing & follow-up' },
                      ].map((item, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white mx-auto mb-2">
                            {item.step}
                          </div>
                          <div className="text-sm text-[#003366] mb-1">{item.title}</div>
                          <div className="text-xs text-gray-600">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                }
                contexts={['WHO Standards', 'ICH Guidelines', 'EMA Requirements', 'US FDA', 'African NRAs']}
              />

              {/* Service 2: Clinical & Bioequivalence */}
              <ServiceSection
                id="clinical"
                title="Clinical & Bioequivalence Studies"
                description="Expert technical and regulatory support for bioequivalence and clinical studies. From protocol design to regulatory submission, we ensure your studies meet international standards and regulatory expectations."
                offerings={[
                  'BE study protocol development and review',
                  'Site qualification and Good Clinical Practice (GCP) audits',
                  'Bioanalytical method validation support',
                  'Statistical analysis plan development',
                  'BE study report preparation and quality review',
                  'Regulatory submission support for BE data',
                ]}
                benefits={[
                  'Studies designed to meet regulatory requirements',
                  'Reduced risk of study failure or rejection',
                  'Expert guidance throughout the study lifecycle',
                  'Faster regulatory review and approval',
                  'Cost optimization through proper planning',
                ]}
                visual={
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                    <h4 className="text-[#003366] mb-6 text-center">BE Study Support Framework</h4>
                    <div className="space-y-3">
                      {[
                        { phase: 'Pre-Study', activities: 'Protocol design, site selection, ethics approval' },
                        { phase: 'Study Conduct', activities: 'GCP compliance, monitoring, quality oversight' },
                        { phase: 'Post-Study', activities: 'Data analysis, report writing, submission' },
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
                contexts={['WHO Bioequivalence', 'ICH E6 GCP', 'FDA BE Guidance', 'EMA Bioequivalence']}
              />

              {/* Service 3: GxP Compliance */}
              <ServiceSection
                id="compliance"
                title="GxP Compliance & Quality Systems"
                description="Comprehensive quality and compliance services to ensure your operations meet international GxP standards. We help manufacturers, laboratories, and NRAs build and maintain robust quality management systems."
                offerings={[
                  'GMP, GLP, and GCP gap assessments',
                  'Corrective and Preventive Action (CAPA) plan development',
                  'Quality management system design and implementation',
                  'Internal audit programs and mock inspections',
                  'Deviation and change control management',
                  'Inspection readiness preparation and support',
                ]}
                benefits={[
                  'Improved compliance and reduced regulatory risk',
                  'Enhanced operational efficiency',
                  'Better inspection outcomes',
                  'Sustainable quality culture development',
                  'Ongoing expert support and mentorship',
                ]}
                visual={
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                    <h4 className="text-[#003366] mb-6 text-center">Quality System Pillars</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        'Quality Management',
                        'Documentation',
                        'Training',
                        'Equipment',
                        'Process Validation',
                        'Audit & Inspection',
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
                contexts={['WHO GMP', 'ICH Q7-Q10', 'PIC/S', 'ISO 9001', 'FDA GMP']}
              />

              {/* Service 4: Regulatory Systems Strengthening */}
              <ServiceSection
                id="systems"
                title="Regulatory Systems Strengthening"
                description="Partnering with National Regulatory Authorities, Ministries of Health, and international organizations to build effective, sustainable regulatory frameworks that protect public health and facilitate access to quality medicines."
                offerings={[
                  'Regulatory system maturity assessments',
                  'Policy and guideline development',
                  'Standard Operating Procedure (SOP) creation',
                  'Organizational capacity development',
                  'Technical assessment and review systems design',
                  'Regional harmonization support',
                ]}
                benefits={[
                  'Strengthened regulatory capacity',
                  'Improved public health protection',
                  'Enhanced regional cooperation',
                  'Sustainable systems and processes',
                  'International best practice alignment',
                ]}
                visual={
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
                    <h4 className="text-[#003366] mb-6 text-center">Systems Strengthening Approach</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { area: 'Governance', elements: 'Legal framework, organizational structure, accountability' },
                        { area: 'Processes', elements: 'SOPs, workflows, decision-making frameworks' },
                        { area: 'People', elements: 'Training, competency, leadership development' },
                        { area: 'Technology', elements: 'IT systems, databases, electronic workflows' },
                      ].map((item, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-[#003366] mb-2">{item.area}</div>
                          <div className="text-sm text-gray-600">{item.elements}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                }
                contexts={['WHO Global Benchmarking', 'African Medicines Agency', 'EAC Harmonization', 'AMRH']}
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
        </div>
      </div>

      <ClientFocus />
      <CallToActionBlock />
    </div>
  );
}
