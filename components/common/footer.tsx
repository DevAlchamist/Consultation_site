import React from 'react';
import Link from 'next/link';
import { Globe, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  'Study Destinations': [
    { name: 'Study in USA', href: '/study-in-usa' },
    { name: 'Study in UK', href: '/study-in-uk' },
    { name: 'Study in Canada', href: '/study-in-canada' },
    { name: 'Study in Australia', href: '/study-in-australia' },
    { name: 'Study in Germany', href: '/study-in-germany' },
    { name: 'Study in Ireland', href: '/study-in-ireland' },
  ],
  'Services': [
    { name: 'University Selection', href: '/services/university-selection' },
    { name: 'Application Assistance', href: '/services/application-assistance' },
    { name: 'Visa Guidance', href: '/services/visa-guidance' },
    { name: 'Test Preparation', href: '/test-prep' },
    { name: 'Scholarship Guidance', href: '/services/scholarships' },
    { name: 'Pre-departure Briefing', href: '/services/pre-departure' },
  ],
  'Resources': [
    { name: 'Universities', href: '/universities' },
    { name: 'Courses', href: '/courses' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Blog', href: '/blog' },
    { name: 'Events', href: '/events' },
    { name: 'Community', href: '/community' },
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Press & Media', href: '/press' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal-blue text-white">
      {/* Main Footer */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Globe className="h-8 w-8 text-soft-rose" />
              <span className="text-2xl font-bold text-white">StudyGlobal</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in achieving international education dreams. We provide comprehensive guidance and support for students aspiring to study abroad.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-soft-rose" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-soft-rose" />
                <span className="text-gray-300">info@studyglobal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-soft-rose" />
                <span className="text-gray-300">123 Education St, Learning City, LC 12345</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-soft-rose transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest updates on study abroad opportunities and admission deadlines.</p>
            </div>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-soft-rose text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-soft-rose hover:bg-soft-rose/90 text-white font-medium rounded-r-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container-max px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 StudyGlobal. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-soft-rose transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-soft-rose transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-soft-rose transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-soft-rose transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}