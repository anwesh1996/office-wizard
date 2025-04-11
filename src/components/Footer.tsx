
import { icons } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  copyright: string;
  socialLinks: Array<{
    icon: string;
    url: string;
  }>;
}

const Footer = ({ copyright, socialLinks }: FooterProps) => {
  const renderIcon = (iconName: string) => {
    const LucideIcon = icons[iconName as keyof typeof icons];
    return LucideIcon ? (
      <LucideIcon size={20} className="text-white hover:text-accounttree-light transition-colors" />
    ) : null;
  };

  return (
    <footer className="bg-accounttree-secondary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Account Tree</h3>
            <p className="text-white/80 mb-4">
              Professional financial services for individuals and businesses. Simplifying your finances for growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/admin" className="text-white/80 hover:text-white transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest updates and financial tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-l-md w-full text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-accounttree-primary px-4 py-2 rounded-r-md hover:bg-accounttree-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/80">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
