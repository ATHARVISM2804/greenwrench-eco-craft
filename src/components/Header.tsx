import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Videos", href: "/videos" },
    { name: "About Us", href: "/about" },
    { name: "By CD", href: "/by-cd" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/98 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50 shadow-premium">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img src={logo} alt="GreenWrench Solutions" className="h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-premium bg-clip-text text-transparent">GreenWrench</span>
              <span className="text-sm text-muted-foreground font-medium">Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-semibold transition-all duration-300 hover:text-primary group ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary transition-transform duration-300 ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                } origin-left`}></div>
              </Link>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-card rounded-full border border-border/30">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">+91 99999 99999</span>
            </div>
            <Button 
              variant="default" 
              className="bg-gradient-primary hover:bg-gradient-premium hover:shadow-glow transition-all duration-500 px-6 py-3 font-semibold transform hover:-translate-y-0.5"
              asChild
            >
              <a href="https://wa.me/919999999999?text=Get Best Rate Now" target="_blank" rel="noopener noreferrer">
                Get Best Rate Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/30 mt-4 pt-6 pb-6 animate-fade-in bg-gradient-card/30 backdrop-blur-lg rounded-b-2xl">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                    isActive(item.href) 
                      ? "text-primary bg-primary/10 border border-primary/20" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border/30 pt-6 mt-4">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-4 px-4 py-2 bg-white/50 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">+91 99999 99999</span>
                </div>
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-primary hover:bg-gradient-premium py-3 font-semibold"
                  asChild
                >
                  <a href="https://wa.me/919999999999?text=Get Best Rate Now" target="_blank" rel="noopener noreferrer">
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