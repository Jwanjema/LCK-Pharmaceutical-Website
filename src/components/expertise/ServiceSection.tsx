import { FileText, FlaskConical, ShieldCheck, Building, GraduationCap } from 'lucide-react';

interface ServicesNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function ServicesNavigation({ activeSection, onSectionChange }: ServicesNavigationProps) {

  const services = [
    { id: 'regulatory', label: 'Regulatory Strategy', icon: FileText },
    { id: 'clinical', label: 'Clinical & BE', icon: FlaskConical },
    { id: 'compliance', label: 'GxP Compliance', icon: ShieldCheck },
    { id: 'systems', label: 'Systems Strengthening', icon: Building },
    { id: 'training', label: 'Training', icon: GraduationCap },
  ];

  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl shadow-md p-3 overflow-x-auto">
        <div className="flex flex-wrap gap-2 min-w-max justify-center lg:justify-start">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => onSectionChange(service.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === service.id
                    ? 'bg-[#339966] text-white shadow'
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
  );
}
