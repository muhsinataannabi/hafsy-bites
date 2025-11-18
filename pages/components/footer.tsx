import { Facebook, Instagram, Twitter, Linkedin, Copyright } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Facebook, label: "Facebook", href: "https://facebook.com/hafsybites" },
    { Icon: Instagram, label: "Instagram", href: "https://instagram.com/hafsybites" },
    { Icon: Twitter, label: "X (Twitter)", href: "https://twitter.com/hafsybites" },
    { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/hafsybites" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-t from-orange-50 to-white border-t border-orange-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="./logo.png"
              alt="Hafsy Bites Logo"
              className="w-16 h-16 mb-4 object-contain drop-shadow-md"
            />
            <div className="flex items-center gap-2 text-orange-700 font-medium">
              <Copyright className="w-4 h-4" />
              <span className="text-sm">
                {currentYear} Hafsy Bites. All rights reserved.
              </span>
            </div>
            <p className="text-sm text-orange-600 mt-2 text-center md:text-left">
              Delicious moments, made with love ❤️
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-orange-800 mb-4 text-lg">Quick Links</h3>
            <ul className="space-x-4 flex justify-center hover:border-b border-orange-800">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-orange-700 hover:text-orange-500 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold text-orange-800 mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Hafsy Bites on ${label}`}
                  className="group p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-orange-200"
                >
                  <Icon
                    className="w-5 h-5 text-orange-600 group-hover:text-orange-500 transition-colors"
                    strokeWidth={2}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
          {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-orange-200 text-center">
          <p className="text-sm text-orange-600">
            Made it Delicious with passion in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}