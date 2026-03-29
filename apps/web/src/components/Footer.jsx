import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <Link to="/" className="inline-block mb-4 transition-opacity hover:opacity-90">
              <img 
                src="https://horizons-cdn.hostinger.com/18607e11-cb0f-44a8-aa26-a132b41ab66f/632e327aa0adf7c3ef4b8cb86b7bbaab.png" 
                alt="Wayntech Logo" 
                className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Your trusted partner for custom printing and personalized products. Quality craftsmanship for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold text-foreground">Quick links</span>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-foreground transition-colors duration-200">
                Home
              </Link>
              <Link to="/products" className="text-sm hover:text-foreground transition-colors duration-200">
                Products
              </Link>
              <Link to="/about" className="text-sm hover:text-foreground transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="text-sm hover:text-foreground transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold text-foreground">Contact us</span>
            <div className="mt-4 flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 90746 00471</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>wayntechmndy@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Aysha Arcade, Opposit Juma MAsjid Pandikkadavu, Mananthavady, Wayanad-670 645</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex space-x-5">
              <a 
                href="https://www.facebook.com/share/1E2KeDL5VG/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:scale-110 hover:opacity-80 transition-all duration-300" 
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/wayn.tec" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:scale-110 hover:opacity-80 transition-all duration-300" 
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/wayntech-mndy-32529a3bb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:scale-110 hover:opacity-80 transition-all duration-300" 
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Wayntech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-foreground transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;