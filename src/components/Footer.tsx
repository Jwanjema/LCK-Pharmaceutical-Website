import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'Regulatory Affairs', href: '#' },
    { label: 'Bioequivalence & Clinical PK', href: '#' },
    { label: 'GMP Auditing & GBT Advisory', href: '#' },
    { label: 'Training & Capacity Building', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Resources', href: '#' },
  ];

  return (
    <footer className="bg-[#003366] text-white relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#339966] to-[#FFC300] rounded-lg flex items-center justify-center">
                <span>LCK</span>
              </div>
              <div>
                <div>LCK Pharmaceutical</div>
                <div className="text-sm text-[#339966]">Consulting</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Strengthening regulatory systems and accelerating access to quality medicines through WHO prequalification, GBT maturity assessments, and regulatory capacity building.
            </p>
            <div className="flex gap-3">
              <button
                className="w-10 h-10 bg-white/10 hover:bg-[#339966] rounded-full flex items-center justify-center transition-colors"
                aria-label="Visit LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                className="w-10 h-10 bg-white/10 hover:bg-[#339966] rounded-full flex items-center justify-center transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-[#FFC300]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#FFC300] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-[#FFC300]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:info@lckpharma.com" className="hover:text-[#FFC300] transition-colors">
                  info@lckpharma.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+254 XXX XXX XXX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya<br />Regional Offices Across Africa</span>
              </li>
            </ul>
          </div>

          {/* QR Code Section */}
          <div>
            <h3 className="mb-4 text-[#FFC300]">Connect With Us</h3>
            <div className="bg-white p-3 rounded-lg inline-block">
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="0" y="0" width="15" height="15" fill="#003366" />
                  <rect x="20" y="0" width="15" height="15" fill="#003366" />
                  <rect x="40" y="0" width="15" height="15" fill="#003366" />
                  <rect x="60" y="0" width="15" height="15" fill="#003366" />
                  <rect x="80" y="0" width="15" height="15" fill="#003366" />
                  <rect x="0" y="20" width="15" height="15" fill="#003366" />
                  <rect x="80" y="20" width="15" height="15" fill="#003366" />
                  <rect x="0" y="40" width="15" height="15" fill="#003366" />
                  <rect x="40" y="40" width="15" height="15" fill="#003366" />
                  <rect x="80" y="40" width="15" height="15" fill="#003366" />
                  <rect x="0" y="60" width="15" height="15" fill="#003366" />
                  <rect x="80" y="60" width="15" height="15" fill="#003366" />
                  <rect x="0" y="80" width="15" height="15" fill="#003366" />
                  <rect x="20" y="80" width="15" height="15" fill="#003366" />
                  <rect x="40" y="80" width="15" height="15" fill="#003366" />
                  <rect x="60" y="80" width="15" height="15" fill="#003366" />
                  <rect x="80" y="80" width="15" height="15" fill="#003366" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Scan to visit our website</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LCK Pharmaceutical Consulting. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <button className="hover:text-[#FFC300] transition-colors">Privacy Policy</button>
            <button className="hover:text-[#FFC300] transition-colors">Terms of Service</button>
            <button className="hover:text-[#FFC300] transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
