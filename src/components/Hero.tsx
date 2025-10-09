import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Star, Shield, Clock, Car, Bike, Truck, Bus, User, Phone, CreditCard } from "lucide-react";

// Image slideshow array with Cloudinary links
const HERO_IMAGES = [
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760015353/WhatsApp_Image_2025-10-05_at_16.53.36_04fe8349_hiakow.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760015353/WhatsApp_Image_2025-10-05_at_16.53.36_79edcc40_pxp5bf.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760015353/WhatsApp_Image_2025-10-05_at_16.53.35_3382a173_zyyeab.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760015864/Scrapping-A-Car-Vancouver-e1684021029702_b9wlb1.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760015864/shutterstock_769028497-1000x600_ihbww2.jpg"
];

const VEHICLE_TYPES = [
  { label: "Car", icon: Car },
  { label: "Bike", icon: Bike },
  { label: "Truck", icon: Truck },
  { label: "Other", icon: Bus },
];

const MAKES = ["Maruti", "Hyundai", "Honda", "Tata", "Toyota"];
const MODELS = ["Model 1", "Model 2", "Model 3"];

const Hero = () => {
  const [vehicleType, setVehicleType] = useState("Car");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % HERO_IMAGES.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I want to get a quote for my vehicle: ${vehicleNo}. Name: ${name}, Phone: ${phone}`;
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 bg-black">
        {HERO_IMAGES.map((image, index) => (
          <div 
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* Reduced opacity from 0.8 to 0.4 for better image visibility */}
            <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
            {/* Reduced opacity of color overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-premium-green-dark/10 via-transparent to-premium-green/5"></div>
          </div>
        ))}
      </div>

      {/* Image Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-primary-glow' : 'w-2 bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
              <CardContent className="p-6 md:p-8 lg:p-10 relative">
                {/* Feature Row */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2 text-green-600 text-base font-medium">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span>Maximum value</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600 text-base font-medium">
                    <Truck className="h-5 w-5 text-green-600" />
                    <span>Free Pickup</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600 text-base font-medium">
                    <CreditCard className="h-5 w-5 text-green-600" />
                    <span>Road tax rebate</span>
                  </div>
                </div>
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">Get an instant valuation</h2>
                {/* Vehicle Type Tabs */}
                <div className="flex justify-center gap-3 mb-6">
                  {VEHICLE_TYPES.map((type) => (
                    <button
                      key={type.label}
                      type="button"
                      className={`flex flex-col items-center px-6 py-3 rounded-xl border transition-all duration-200 font-semibold text-base
                        ${vehicleType === type.label
                          ? "bg-green-50 border-green-400 text-green-700 shadow"
                          : "bg-white border-gray-200 text-green-600 hover:bg-green-50"}
                      `}
                      onClick={() => setVehicleType(type.label)}
                    >
                      <type.icon className="h-6 w-6 mb-1" />
                      {type.label}
                    </button>
                  ))}
                </div>
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <select
                        className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-200"
                        value={make}
                        onChange={e => setMake(e.target.value)}
                        required
                      >
                        <option value="">Select Make</option>
                        {MAKES.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>
                    <div>
                      <select
                        className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-200"
                        value={model}
                        onChange={e => setModel(e.target.value)}
                        required
                      >
                        <option value="">Select Model</option>
                        {MODELS.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>
                  </div>
                  {/* Vehicle No. */}
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600">
                      <CreditCard className="h-5 w-5" />
                    </span>
                    <Input
                      className="pl-10 h-12 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-200 rounded-lg text-gray-800"
                      placeholder="Vehicle No: AB12CD3456"
                      value={vehicleNo}
                      onChange={e => setVehicleNo(e.target.value)}
                      required
                    />
                  </div>
                  {/* Name & Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600">
                        <User className="h-5 w-5" />
                      </span>
                      <Input
                        className="pl-10 h-12 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-200 rounded-lg text-gray-800"
                        placeholder="Your Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600">
                        <Phone className="h-5 w-5" />
                      </span>
                      <Input
                        className="pl-10 h-12 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-200 rounded-lg text-gray-800"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {/* Terms */}
                  <div className="flex items-center space-x-2">
                    <input
                      id="agree"
                      type="checkbox"
                      checked={agree}
                      onChange={e => setAgree(e.target.checked)}
                      className="accent-green-600 w-4 h-4"
                      required
                    />
                    <label htmlFor="agree" className="text-sm text-gray-700">
                      I agree to the <a href="#" className="text-green-700 underline">Terms & Conditions</a>
                    </label>
                  </div>
                  {/* Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 text-white text-lg font-semibold rounded-lg flex items-center justify-center gap-2"
                    disabled={!agree}
                  >
                    <CreditCard className="h-5 w-5" />
                    Get My Free Quote
                  </Button>
                </form>
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