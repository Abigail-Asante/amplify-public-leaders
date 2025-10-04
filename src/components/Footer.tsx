import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emerging Public Leaders</h3>
            <p className="text-sm opacity-90">
              Empowering Africa's next generation of public sector leaders through transformative professional development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fellowship" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  The Fellowship
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-90">Leadership Training</li>
              <li className="text-sm opacity-90">Policy Development</li>
              <li className="text-sm opacity-90">Mentorship</li>
              <li className="text-sm opacity-90">Alumni Network</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@emergingpublicleaders.org</span>
              </li>
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Pan-African Offices</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Emerging Public Leaders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
