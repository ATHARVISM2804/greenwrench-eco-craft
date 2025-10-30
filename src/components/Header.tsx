import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/GreenLogo.png";
import logoName from "@/assets/nameLogo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Videos", href: "/videos" },
    { name: "About Us", href: "/about" },
    { name: "Buy/Sell CD", href: "/by-cd" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white z-30 backdrop-blur-xl border-b-4 border-emerald-700/20 sticky top-0 shadow-lg h-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img src={logo} alt="GreenWrench Solutions" className="h-16 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/20 to-emerald-600/20 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            </div>
            <div className="relative">
              <img src={logoName} alt="GreenWrench Solutions" className="h-40 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/20 to-emerald-600/20 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5 py-2 px-4 rounded-full bg-emerald-50 border border-emerald-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group rounded-lg ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white shadow-md"
                    : "bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-100"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="tel:+919311068290" 
              className="flex items-center space-x-3 px-4 py-3 bg-emerald-50 rounded-lg border-2 border-emerald-200 hover:bg-emerald-100 transition-all duration-300 cursor-pointer group"
            >
              <div className="p-2 rounded-full bg-gradient-to-r from-emerald-800 to-emerald-600 group-hover:shadow-md transition-all duration-300">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-emerald-800">+91 9311068290</span>
            </a>
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-emerald-800 to-emerald-600 hover:from-emerald-700 hover:to-emerald-500 hover:shadow-lg hover:shadow-emerald-300/40 transition-all duration-500 px-6 py-6 font-semibold transform hover:-translate-y-0.5"
              asChild
            >
              <a href="https://wa.me/919311068290?text=Get Best Rate Now" target="_blank" rel="noopener noreferrer">
                Get Best Rate Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-4 border-emerald-700/20 mt-2 pt-6 pb-6 animate-fade-in bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                    isActive(item.href) 
                      ? "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white shadow-md" 
                      : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t-2 border-emerald-200 pt-6 mt-4">
                <a 
                  href="tel:+919311068290"
                  className="flex items-center space-x-3 text-sm text-emerald-800 mb-4 px-4 py-3 bg-emerald-50 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-all duration-300"
                >
                  <div className="p-2 rounded-full bg-gradient-to-r from-emerald-800 to-emerald-600">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">+91 9311068290</span>
                </a>
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-to-r from-emerald-800 to-emerald-600 hover:from-emerald-700 hover:to-emerald-500 py-5 font-semibold"
                  asChild
                >
                  <a href="https://wa.me/919311068290?text=Get Best Rate Now" target="_blank" rel="noopener noreferrer">
                    Get Best Rate Now
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;