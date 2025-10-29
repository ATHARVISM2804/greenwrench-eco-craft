import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Star, Shield, Clock, Car, Bike, Truck, Bus, User, Phone, CreditCard } from "lucide-react";

// Image slideshow array with Cloudinary links
const HERO_IMAGES = [
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760015353/WhatsApp_Image_2025-10-05_at_16.53.36_04fe8349_hiakow.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760015353/WhatsApp_Image_2025-10-05_at_16.53.36_79edcc40_pxp5bf.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760358290/What_To_Look_For_When_Hiring_Auto_Wreckers_In_Brisbane_Steemit_edvdbq.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760358290/Japan_Metal_Recycling_Market_Forecast_xxlu7z.jpg",
  "https://res.cloudinary.com/dmhabztbf/image/upload/v1760358290/What_To_Look_For_When_Hiring_Auto_Wreckers_In_Brisbane_Steemit_edvdbq.jpg",
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 px-4 sm:px-6">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 bg-green-50">
        {HERO_IMAGES.map((image, index) => (
          <div 
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* Darker overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Add green tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-green-800/30 to-green-700/30"></div>
          </div>
        ))}
      </div>

      {/* Enhanced text background gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent pointer-events-none"></div>

      {/* Image Slide Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20 space-x-1 sm:space-x-2 hidden">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-6 sm:w-8 bg-primary-glow' : 'w-1.5 sm:w-2 bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Enhanced text visibility */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-premium-green/30 border border-primary-glow/40 rounded-full text-white text-xs sm:text-sm font-medium backdrop-blur-sm shadow-sm">
                  🌱 Eco-Friendly Car Recycling
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-md">
                Scrap Your Old Car{" "}
                <span className="bg-gradient-premium bg-clip-text text-transparent drop-shadow-md">Now</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl drop-shadow-sm font-medium">
                Transform your old vehicle into cash while protecting the environment. We buy cars in any condition - non-runners, write-offs, damaged, or flood-damaged vehicles.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-gradient-premium text-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base md:text-lg font-semibold shadow-glow hover:shadow-premium transition-all duration-500 transform hover:-translate-y-1"
                asChild
              >
                <a href="https://wa.me/919999999999?text=I want to scrap my car" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="whitespace-nowrap">Scrap My Car Now</span>
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-glow/50 text-white hover:bg-primary-glow/20 hover:border-primary-glow px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base md:text-lg font-semibold backdrop-blur-md bg-white/10 transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/919999999999?text=Get the best rate" target="_blank" rel="noopener noreferrer">
                  <span className="whitespace-nowrap">Get the Best Rate</span>
                </a>
              </Button>
            </div>

            {/* Trust Indicators - Enhanced visibility */}
            <div className="flex items-center gap-1 md:gap-8 text-white">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                <span className="text-xs sm:text-sm font-medium drop-shadow-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium drop-shadow-sm">Certified Service</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium drop-shadow-sm">60s Quote</span>
              </div>
            </div>
          </div>

          {/* Right Content - Quote Form */}
          <div className="animate-slide-up mt-6 md:mt-8 lg:mt-0">
            <Card className="backdrop-blur-xl bg-white shadow-[0_20px_50px_rgba(8,112,84,0.18)] border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden transform hover:scale-102 transition-all duration-500">
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 relative">
                {/* Feature Row */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-4 sm:mb-6 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-1.5 md:space-x-2 text-green-600 text-xs sm:text-sm md:text-base font-medium">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mb-1 sm:mb-0" />
                    <span>Maximum value</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-1.5 md:space-x-2 text-green-600 text-xs sm:text-sm md:text-base font-medium">
                    <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mb-1 sm:mb-0" />
                    <span>Free Pickup</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-1.5 md:space-x-2 text-green-600 text-xs sm:text-sm md:text-base font-medium">
                    <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mb-1 sm:mb-0" />
                    <span>Road tax rebate</span>
                  </div>
                </div>
                
                {/* Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3 text-gray-900">Get an instant valuation</h2>
                
                {/* Vehicle Type Tabs */}
                <div className="flex justify-center gap-1 xs:gap-2 sm:gap-3 mb-4 sm:mb-6 overflow-x-auto pb-1">
                  {VEHICLE_TYPES.map((type) => (
                    <button
                      key={type.label}
                      type="button"
                      className={`flex flex-col items-center px-2 xs:px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl border transition-all duration-200 font-medium text-xs xs:text-sm sm:text-base
                        ${vehicleType === type.label
                          ? "bg-green-50 border-green-400 text-green-700 shadow"
                          : "bg-white border-gray-200 text-green-600 hover:bg-green-50"}
                      `}
                      onClick={() => setVehicleType(type.label)}
                    >
                      <type.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mb-1" />
                      {type.label}
                    </button>
                  ))}
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <select
                        className="w-full h-10 sm:h-12 px-2 sm:px-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-white text-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-200"
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
                        className="w-full h-10 sm:h-12 px-2 sm:px-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-white text-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-200"
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
                    <span className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-green-600">
                      <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <Input
                      className="pl-8 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-200 rounded-lg text-gray-800"
                      placeholder="Vehicle No: AB12CD3456"
                      value={vehicleNo}
                      onChange={e => setVehicleNo(e.target.value)}
                      required
                    />
                  </div>
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="relative">
                      <span className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-green-600">
                        <User className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <Input
                        className="pl-8 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-200 rounded-lg text-gray-800"
                        placeholder="Your Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-green-600">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <Input
                        className="pl-8 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-200 rounded-lg text-gray-800"
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
                      className="accent-green-600 w-3 h-3 sm:w-4 sm:h-4"
                      required
                    />
                    <label htmlFor="agree" className="text-xs sm:text-sm text-gray-700">
                      I agree to the <a href="#" className="text-green-700 underline">Terms & Conditions</a>
                    </label>
                  </div>
                  
                  {/* Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-10 sm:h-12 bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg flex items-center justify-center gap-2"
                    disabled={!agree}
                  >
                    <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
                    Get My Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Certificate of Deposit CTA - Enhanced visibility */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <Button 
          variant="outline" 
          className="bg-white/30 sm:bg-white/20 border-primary-glow/80 sm:border-primary-glow/60 text-white hover:bg-primary-glow/40 sm:hover:bg-primary-glow/30 hover:border-primary-glow backdrop-blur-md animate-float shadow-glow text-sm sm:text-sm md:text-base px-4 py-2 sm:px-4 sm:py-2 h-auto font-medium"
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