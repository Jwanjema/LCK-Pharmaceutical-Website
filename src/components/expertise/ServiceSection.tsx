import { useState, useEffect } from 'react';
import { FileText, FlaskConical, ShieldCheck, Building, GraduationCap } from 'lucide-react';

interface ServicesNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function ServicesNavigation({ activeSection, onSectionChange }: ServicesNavigationProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { id: 'regulatory', label: 'Regulatory Strategy', icon: FileText },
    { id: 'clinical', label: 'Clinical & BE', icon: FlaskConical },
    { id: 'compliance', label: 'GxP Compliance', icon: ShieldCheck },
    { id: 'systems', label: 'Systems Strengthening', icon: Building },
    { id: 'training', label: 'Training', icon: GraduationCap },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block">
        <div className={`${isSticky ? 'fixed top-24' : 'relative'} transition-all duration-300`}>
          <div className="bg-white rounded-2xl shadow-lg p-6 w-64">
            <h3 className="text-[#003366] mb-6">Our Services</h3>
            <nav className="space-y-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => onSectionChange(service.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                      activeSection === service.id
                        ? 'bg-[#339966] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{service.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>

      {/* Mobile Tabs */}
      <div className="lg:hidden mb-8">
        <div className="bg-white rounded-xl shadow-md p-2 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => onSectionChange(service.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all whitespace-nowrap ${
                    activeSection === service.id
                      ? 'bg-[#339966] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{service.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
