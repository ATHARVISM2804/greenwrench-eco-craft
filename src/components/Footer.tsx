import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Videos", href: "/videos" },
    { name: "By CD", href: "/by-cd" },
  ];

  const services = [
    "Car Scrapping",
    "Vehicle Disposal",
    "Certificate of Deposit",
    "RC Expiry Check",
    "Insurance Claims",
    "Legal Documentation",
  ];

  return (
    <footer className="bg-premium-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="GreenWrench Solutions" className="h-12 w-auto filter brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">GreenWrench</span>
                <span className="text-sm text-white/70">Solutions</span>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              India's premier eco-friendly car recycling platform. We provide the best rates for your scrap car with complete transparency and hassle-free service.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-primary transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/80 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 99999 99999</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@greenwrench.com</span>
              </div>
              
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="leading-relaxed">
                  123 Green Street, Eco Park,<br />
                  New Delhi - 110001, India
                </span>
              </div>

              <a
                href="https://wa.me/919999999999?text=Hello! I want to know more about your services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-glow px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-button"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 GreenWrench Solutions. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;