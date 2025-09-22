import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-recycling.jpg";

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
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Scrap Your Old Car{" "}
                <span className="text-primary-glow">Now</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                We will buy your car for scrap regardless of whether it is a non-runner, an insurance write-off, damaged, flood damaged or unroadworthy and whatever the make, model, age or condition.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-white px-8 py-6 text-lg font-semibold shadow-button hover:shadow-xl transition-all duration-300"
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
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold backdrop-blur-sm"
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
            <Card className="backdrop-blur-lg bg-white/95 shadow-premium border-0">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Get Your</h3>
                  <h2 className="text-3xl font-bold text-primary mb-2">FREE INSTANT</h2>
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
                    className="w-full h-12 bg-gradient-primary hover:shadow-button transition-all duration-300 text-lg font-semibold"
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
          className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm animate-float"
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