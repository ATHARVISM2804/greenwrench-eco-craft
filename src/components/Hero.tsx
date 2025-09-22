import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-recycling-premium.jpg";

const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    vehicleNumber: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I want to get a quote for my vehicle: ${formData.vehicleNumber}. Name: ${formData.firstName} ${formData.lastName}, Phone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-premium-green-dark/30 via-transparent to-premium-green/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-premium-green/20 border border-primary-glow/30 rounded-full text-primary-glow text-sm font-medium backdrop-blur-sm">
                  🌱 Eco-Friendly Car Recycling
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Scrap Your Old Car{" "}
                <span className="bg-gradient-premium bg-clip-text text-transparent">Now</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Transform your old vehicle into cash while protecting the environment. We buy cars in any condition - non-runners, write-offs, damaged, or flood-damaged vehicles.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-gradient-premium text-white px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-premium transition-all duration-500 transform hover:-translate-y-1"
                asChild
              >
                <a href="https://wa.me/919999999999?text=I want to scrap my car" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Scrap My Car Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-glow/50 text-white hover:bg-primary-glow/20 hover:border-primary-glow px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/10 transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/919999999999?text=Get the best rate" target="_blank" rel="noopener noreferrer">
                  Get the Best Rate
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary-glow" />
                <span className="text-sm">Certified Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary-glow" />
                <span className="text-sm">60s Quote</span>
              </div>
            </div>
          </div>

          {/* Right Content - Quote Form */}
          <div className="animate-slide-up">
            <Card className="backdrop-blur-xl bg-white/95 shadow-premium border border-primary-glow/20 rounded-2xl overflow-hidden">
              <div className="h-2 bg-gradient-primary"></div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Get Your</h3>
                  <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">FREE INSTANT</h2>
                  <p className="text-lg text-muted-foreground">ONLINE CAR VALUATION IN 60 SEC</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <Input
                    type="text"
                    name="vehicleNumber"
                    placeholder="Vehicle Number (e.g., DL-01-AB-1234)"
                    value={formData.vehicleNumber}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                  
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-primary hover:bg-gradient-premium hover:shadow-glow transition-all duration-500 text-lg font-semibold transform hover:-translate-y-0.5"
                  >
                    Get Instant Quote
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting, you agree to our terms and privacy policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Certificate of Deposit CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <Button 
          variant="outline" 
          className="bg-white/10 border-primary-glow/40 text-white hover:bg-primary-glow/20 hover:border-primary-glow backdrop-blur-md animate-float shadow-glow"
          asChild
        >
          <a href="/by-cd">
            Buy Certificate of Deposit
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;