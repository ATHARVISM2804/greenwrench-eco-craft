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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-premium-green-dark/20 via-transparent to-premium-green/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-10 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-premium-green/20 border border-primary-glow/30 rounded-full text-primary-glow text-sm font-medium backdrop-blur-sm">
                  🌱 Eco-Friendly Car Recycling
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Scrap Your Old Car{" "}
                <span className="bg-gradient-premium bg-clip-text text-transparent">Now</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                Transform your old vehicle into cash while protecting the environment. We buy cars in any condition - non-runners, write-offs, damaged, or flood-damaged vehicles.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-gradient-premium text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg font-semibold shadow-glow hover:shadow-premium transition-all duration-500 transform hover:-translate-y-1"
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
                className="border-2 border-primary-glow/50 text-white hover:bg-primary-glow/20 hover:border-primary-glow px-6 py-5 md:px-8 md:py-6 text-base md:text-lg font-semibold backdrop-blur-md bg-white/10 transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/919999999999?text=Get the best rate" target="_blank" rel="noopener noreferrer">
                  Get the Best Rate
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-white/80">
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
            <Card className="backdrop-blur-xl bg-white shadow-[0_20px_50px_rgba(8,112,84,0.18)] border border-gray-100 rounded-3xl overflow-hidden transform hover:scale-102 transition-all duration-500">
              <div className="h-1 bg-gradient-to-r from-emerald-600 to-green-500"></div>
              <CardContent className="p-6 md:p-8 lg:p-10 relative">
                {/* Sophisticated decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-50 to-transparent rounded-full opacity-60 -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-50 to-transparent rounded-full opacity-60 -ml-10 -mb-10"></div>
                
                <div className="text-center mb-6 md:mb-8 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-[0_8px_20px_rgba(8,112,84,0.25)] border border-white">
                    <MessageCircle className="h-8 w-8 md:h-9 md:w-9 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">Get Your</h3>
                  <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent mb-2">FREE INSTANT</h2>
                  <div className="h-0.5 w-16 bg-emerald-100 mx-auto mb-2"></div>
                  <p className="text-base md:text-lg text-gray-600 font-medium tracking-wide">ONLINE CAR VALUATION IN 60 SEC</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label htmlFor="firstName" className="text-xs font-medium text-gray-500 ml-1">First Name</label>
                      <Input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="h-10 md:h-12 bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200 focus:bg-white transition-all duration-300 rounded-lg text-gray-800 shadow-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="lastName" className="text-xs font-medium text-gray-500 ml-1">Last Name</label>
                      <Input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="h-10 md:h-12 bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200 focus:bg-white transition-all duration-300 rounded-lg text-gray-800 shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="vehicleNumber" className="text-xs font-medium text-gray-500 ml-1">Vehicle Registration Number</label>
                    <Input
                      id="vehicleNumber"
                      type="text"
                      name="vehicleNumber"
                      placeholder="e.g., DL-01-AB-1234"
                      value={formData.vehicleNumber}
                      onChange={handleInputChange}
                      required
                      className="h-10 md:h-12 bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200 focus:bg-white transition-all duration-300 rounded-lg text-gray-800 shadow-sm"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs font-medium text-gray-500 ml-1">Contact Number</label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-10 md:h-12 bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200 focus:bg-white transition-all duration-300 rounded-lg text-gray-800 shadow-sm"
                    />
                  </div>

                  <div className="pt-1 md:pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-10 md:h-12 bg-gradient-to-r from-emerald-700 to-emerald-500 hover:from-emerald-600 hover:to-emerald-400 text-white shadow-md hover:shadow-lg hover:shadow-emerald-200/40 transition-all duration-300 text-sm md:text-base font-semibold transform hover:-translate-y-0.5 rounded-lg"
                    >
                      Get Instant Quote
                    </Button>
                  </div>
                </form>

                <div className="mt-6 pt-3 border-t border-gray-100 relative z-10">
                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our <span className="text-emerald-700 hover:underline cursor-pointer font-medium">terms</span> and <span className="text-emerald-700 hover:underline cursor-pointer font-medium">privacy policy</span>.
                  </p>
                  <div className="flex items-center justify-center mt-3 space-x-3 md:space-x-4">
                    <div className="flex items-center">
                      <Shield className="h-3 w-3 md:h-3.5 md:w-3.5 text-emerald-600 mr-1" />
                      <span className="text-xs text-gray-600">Secure</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 md:h-3.5 md:w-3.5 text-emerald-600 mr-1" />
                      <span className="text-xs text-gray-600">Quick Process</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 md:h-3.5 md:w-3.5 text-emerald-600 mr-1" />
                      <span className="text-xs text-gray-600">Best Value</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Certificate of Deposit CTA */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
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