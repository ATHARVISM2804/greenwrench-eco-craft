import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/GreenLogo.png";
import PolicyModal from "@/components/ui/PolicyModal";

const Footer = () => {
  // State for controlling policy modals
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Function to close any open modal
  const closeModal = () => setActiveModal(null);

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
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-3">
              <img src={logo} alt="GreenWrench Solutions" className="h-12 w-auto mb-2 sm:mb-0" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">GreenWrench</span>
                <span className="text-sm text-white/70">Solutions</span>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed max-w-sm">
              India's premier eco-friendly car recycling platform. We provide the best rates for your scrap car with complete transparency and hassle-free service.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
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
          <div className="space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/80 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span>+91 9311068290</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span>info@greenwrench.com</span>
              </div>
              
              <div className="flex items-center sm:items-start space-x-3 text-white/80">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0 sm:mt-1 flex-shrink-0" />
                <span className="leading-relaxed text-center sm:text-left">
                  123 Green Street, Eco Park,<br />
                  New Delhi - 110001, India
                </span>
              </div>

              <div className="flex justify-center sm:justify-start w-full pt-2">
                <a
                  href="https://wa.me/919311068290?text=Hello! I want to know more about your services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-glow px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-button"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-3 md:space-y-0">
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              © 2024 GreenWrench Solutions. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <button 
                onClick={() => setActiveModal("privacy")} 
                className="text-white/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setActiveModal("terms")} 
                className="text-white/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setActiveModal("cookie")} 
                className="text-white/60 hover:text-primary transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Policy Modals */}
      <PolicyModal 
        isOpen={activeModal === "privacy"} 
        onClose={closeModal} 
        title="Privacy Policy"
      >
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="text-2xl font-bold text-primary">Privacy Policy for GreenWrench Solutions</h3>
            <p className="text-sm text-gray-500 mt-1"><strong>Last Updated:</strong> May 15, 2024</p>
          </div>
          
          <div>
            <p className="mb-4 text-gray-700">
              At GreenWrench Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or use our car scrapping services.
            </p>
          </div>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              Information We Collect
            </h4>
            <p className="mb-2 text-gray-700">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Personal identification information (Name, phone number, email address)</li>
              <li>Vehicle information (registration number, make, model)</li>
              <li>Communication records between you and our team</li>
              <li>Payment information when applicable</li>
              <li>Website usage data and analytics information</li>
            </ul>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              How We Use Your Information
            </h4>
            <p className="mb-2 text-gray-700">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Comply with legal obligations</li>
              <li>Conduct research and analysis to improve our business</li>
              <li>Prevent fraud and enhance the security of our platform</li>
            </ul>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              Information Sharing and Disclosure
            </h4>
            <p className="mb-2 text-gray-700">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Service providers who perform services on our behalf</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
              <li>Professional advisors such as lawyers and auditors</li>
              <li>In connection with a business transaction such as a merger or acquisition</li>
            </ul>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              Data Security
            </h4>
            <p className="mb-2 text-gray-700">
              We implement appropriate security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Encryption of sensitive information</li>
              <li>Regular security assessments</li>
              <li>Restricted access to personal information</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="mt-2 text-gray-700">
              However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              Your Rights
            </h4>
            <p className="mb-2 text-gray-700">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability (receiving your data in a structured format)</li>
              <li>Object to certain processing of your information</li>
            </ul>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              Contact Us
            </h4>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-800">GreenWrench Solutions</p>
              <p className="text-gray-700">Privacy Officer</p>
              <p className="text-gray-700">Email: <a href="mailto:privacy@greenwrench.com" className="text-primary hover:underline">privacy@greenwrench.com</a></p>
              <p className="text-gray-700">Phone: +91 98765 43210</p>
            </div>
          </section>
        </div>
      </PolicyModal>
      
      <PolicyModal 
        isOpen={activeModal === "terms"} 
        onClose={closeModal} 
        title="Terms of Service"
      >
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="text-2xl font-bold text-primary">Terms of Service for GreenWrench Solutions</h3>
            <p className="text-sm text-gray-500 mt-1"><strong>Last Updated:</strong> May 15, 2024</p>
          </div>
          
          <div>
            <p className="mb-4 text-gray-700">
              These Terms of Service ("Terms") govern your access to and use of GreenWrench Solutions services, 
              including our website, car scrapping services, and related offerings.
            </p>
          </div>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              1. Acceptance of Terms
            </h4>
            <p className="text-gray-700">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, 
              please do not use our services. We may update these Terms from time to time, and your continued use of our services 
              constitutes acceptance of any changes.
            </p>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              2. Service Description
            </h4>
            <p className="text-gray-700">
              GreenWrench Solutions provides environmentally friendly car scrapping services, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
              <li>Vehicle collection and transportation</li>
              <li>Environmentally responsible vehicle recycling</li>
              <li>Deregistration assistance with RTO</li>
              <li>Issuance of certificates of deposit</li>
              <li>Vehicle valuation services</li>
              <li>Documentation support</li>
            </ul>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              3. User Responsibilities
            </h4>
            <p className="mb-2 text-gray-700">When using our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Provide accurate and complete information about yourself and your vehicle</li>
              <li>Have legal ownership or authorization to scrap the vehicle in question</li>
              <li>Present all required documentation, including valid registration certificate</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Remove all personal belongings from vehicles before collection</li>
              <li>Disclose any known hazards or special conditions related to the vehicle</li>
            </ul>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              4. Vehicle Valuation and Payment
            </h4>
            <div className="text-gray-700 space-y-3">
              <p>
                Vehicle valuations are provided based on current market conditions, vehicle condition, and recyclable 
                material value. Once agreed upon, the quoted price is valid for 7 days unless specified otherwise.
              </p>
              <p>
                Payment will be processed as per the method agreed upon at the time of service booking, typically within 
                24-48 hours of vehicle collection and verification.
              </p>
              <p>
                The final valuation may be adjusted if the actual condition of the vehicle differs substantially from 
                what was described during the initial assessment.
              </p>
            </div>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              5. Limitation of Liability
            </h4>
            <p className="text-gray-700">
              To the maximum extent permitted by law, GreenWrench Solutions shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or revenue. Our total 
              liability arising out of or relating to these Terms shall not exceed the amount you paid for our services.
            </p>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              6. Governing Law
            </h4>
            <p className="text-gray-700">
              These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction 
              of the courts in New Delhi, India.
            </p>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              7. Contact Information
            </h4>
            <p className="text-gray-700">
              For questions about these Terms, please contact us at:
            </p>
            <div className="mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-800">GreenWrench Solutions</p>
              <p className="text-gray-700">Legal Department</p>
              <p className="text-gray-700">Email: <a href="mailto:legal@greenwrench.com" className="text-primary hover:underline">legal@greenwrench.com</a></p>
              <p className="text-gray-700">Phone: +91 98765 43210</p>
            </div>
          </section>
        </div>
      </PolicyModal>
      
      <PolicyModal 
        isOpen={activeModal === "cookie"} 
        onClose={closeModal} 
        title="Cookie Policy"
      >
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="text-2xl font-bold text-primary">Cookie Policy for GreenWrench Solutions</h3>
            <p className="text-sm text-gray-500 mt-1"><strong>Last Updated:</strong> May 15, 2024</p>
          </div>
          
          <div>
            <p className="mb-4 text-gray-700">
              This Cookie Policy explains how GreenWrench Solutions uses cookies and similar technologies 
              to recognize you when you visit our website at <a href="https://www.greenwrench.com" className="text-primary hover:underline">www.greenwrench.com</a>.
            </p>
          </div>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              What Are Cookies?
            </h4>
            <p className="text-gray-700">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
              Cookies are widely used by website owners to make their websites work efficiently and provide reporting information.
              They help us understand how visitors interact with our site, remember your preferences, and provide you with a 
              more personalized experience.
            </p>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              How We Use Cookies
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Necessary Cookies</h5>
                  <p className="text-gray-700 text-sm">Essential for the website to function properly. These cannot be disabled.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Preferences Cookies</h5>
                  <p className="text-gray-700 text-sm">Enable the website to remember your settings and customize your experience.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Analytics Cookies</h5>
                  <p className="text-gray-700 text-sm">Help us understand how visitors interact with our website and improve its functionality.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Marketing Cookies</h5>
                  <p className="text-gray-700 text-sm">Track your browsing habits to deliver targeted advertising that may interest you.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              Cookies We Use
            </h4>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 p-2 text-left">Type</th>
                    <th className="border border-gray-300 p-2 text-left">Purpose</th>
                    <th className="border border-gray-300 p-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">_ga</td>
                    <td className="border border-gray-300 p-2">Analytics</td>
                    <td className="border border-gray-300 p-2">Google Analytics tracking</td>
                    <td className="border border-gray-300 p-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">_gid</td>
                    <td className="border border-gray-300 p-2">Analytics</td>
                    <td className="border border-gray-300 p-2">Google Analytics tracking</td>
                    <td className="border border-gray-300 p-2">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">session_id</td>
                    <td className="border border-gray-300 p-2">Necessary</td>
                    <td className="border border-gray-300 p-2">Remember user session</td>
                    <td className="border border-gray-300 p-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">preference_theme</td>
                    <td className="border border-gray-300 p-2">Preference</td>
                    <td className="border border-gray-300 p-2">Remember user's theme preference</td>
                    <td className="border border-gray-300 p-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">_fbp</td>
                    <td className="border border-gray-300 p-2">Marketing</td>
                    <td className="border border-gray-300 p-2">Facebook pixel tracking</td>
                    <td className="border border-gray-300 p-2">3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              How to Manage Cookies
            </h4>
            <p className="mb-3 text-gray-700">
              Most web browsers allow you to control cookies through their settings preferences. You can generally find these settings in the "Options" or "Preferences" menu of your browser.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-2">Chrome</h5>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>Click on the menu icon</li>
                  <li>Select "Settings"</li>
                  <li>Click "Privacy and Security"</li>
                  <li>Select "Cookies and other site data"</li>
                </ol>
              </div>
              <div className="bg-gray-50 p-3 rounded border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-2">Firefox</h5>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>Click on the menu icon</li>
                  <li>Select "Options"</li>
                  <li>Click "Privacy & Security"</li>
                  <li>Navigate to "Cookies and Site Data"</li>
                </ol>
              </div>
              <div className="bg-gray-50 p-3 rounded border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-2">Safari</h5>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>Click "Safari" in the menu bar</li>
                  <li>Select "Preferences"</li>
                  <li>Click "Privacy"</li>
                  <li>Manage "Cookies and website data"</li>
                </ol>
              </div>
              <div className="bg-gray-50 p-3 rounded border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-2">Edge</h5>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>Click on the menu icon</li>
                  <li>Select "Settings"</li>
                  <li>Click "Site permissions"</li>
                  <li>Select "Cookies and site data"</li>
                </ol>
              </div>
            </div>
          </section>
          
          <section>
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-1.5 h-6 bg-primary rounded-sm mr-2"></div>
              Contact Us
            </h4>
            <p className="text-gray-700">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <div className="mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-800">GreenWrench Solutions</p>
              <p className="text-gray-700">Data Protection Team</p>
              <p className="text-gray-700">Email: <a href="mailto:privacy@greenwrench.com" className="text-primary hover:underline">privacy@greenwrench.com</a></p>
            </div>
          </section>
        </div>
      </PolicyModal>
    </footer>
  );
};

export default Footer;