import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, DollarSign, Shield, Truck, MessageCircle } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Check Vehicle RC Expiry",
      description: "Enter your vehicle number to instantly confirm owner details and expiry date. Complete verification in seconds.",
      action: "Check Now",
      whatsappText: "I want to check my vehicle RC expiry",
    },
    {
      icon: DollarSign,
      title: "Get the Best Rate",
      description: "Chat on WhatsApp and receive the best market rate for your vehicle within 60 seconds. No hidden charges.",
      action: "Get Rate",
      whatsappText: "Get the best rate for my car",
    },
    {
      icon: Clock,
      title: "Fix Time for Pickup",
      description: "Book your convenient pickup slot via WhatsApp chat. Flexible timing to suit your schedule.",
      action: "Book Slot",
      whatsappText: "I want to book a pickup slot",
    },
    {
      icon: Shield,
      title: "Instant Payment",
      description: "Receive immediate payment via Cash or UPI once the scrap is collected. Safe and secure transactions.",
      action: "Learn More",
      whatsappText: "Tell me about payment process",
    },
  ];

  const features = [
    "✅ Free Vehicle Inspection",
    "✅ Best Market Rates Guaranteed",
    "✅ Complete Legal Documentation",
    "✅ Eco-Friendly Recycling Process",
    "✅ Insurance Claim Support",
    "✅ 24/7 Customer Support",
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-white/90 via-premium-green/20 to-premium-green/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-3 py-2 sm:px-6 sm:py-3 bg-premium-green/10 border border-primary-glow/30 rounded-full text-primary text-base sm:text-lg font-semibold">
              🏆 Our Advantages
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-8">
            Why Choose <span className="bg-gradient-premium bg-clip-text text-transparent">GreenWrench?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience the most professional and rewarding car scrapping service with guaranteed best rates and complete transparency
          </p>
        </div>

        {/* Two-Card Comparison */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 sm:mb-16">
          {/* The Old Way */}
          <Card className="bg-red-50 border border-red-100 shadow-none rounded-xl sm:rounded-3xl">
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">The Old Way</h3>
                <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold w-fit">✗ Not Recommended</span>
              </div>
              <div className="mb-4 sm:mb-6">
                <div className="font-semibold text-gray-700 mb-2">Indirect Route (via third-party agents)</div>
                <div className="w-full flex items-center justify-center mb-4">
                  {/* Full width Cloudinary Image */}
                  <div className="w-full flex items-center justify-center py-2">
                    <img 
                      src="https://res.cloudinary.com/dmhabztbf/image/upload/v1760359750/Gemini_Generated_Image_ys764uys764uys76_jbphgl.png" 
                      alt="The old way showing dealers, agents and unknown yards"
                      className="max-w-full h-auto rounded-lg shadow-sm"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 text-red-700 text-xs sm:text-sm mb-2 pl-1">
                <li>✗ Your vehicle passes through multiple hands (dealer/third party website → agent → unknown yard)</li>
                <li>✗ Not all platforms that collect old vehicles are government-licensed to issue CoD or CVS</li>
                <li>✗ Reduced value due to multiple middlemen taking their cut</li>
                <li>✗ Risk of improper disposal and environmental damage</li>
                <li>✗ Delays in processing and documentation</li>
              </ul>
              <div className="text-[10px] sm:text-xs text-red-500 mt-2">
                *Unlicensed aggregators and dealer-based bidding routes may not provide
                legal safety or proper documentation.
              </div>
            </CardContent>
          </Card>
          
          {/* The Smart Way */}
          <Card className="bg-green-50 border border-green-100 shadow-none rounded-xl sm:rounded-3xl">
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">The Smart Way</h3>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold w-fit">✓ Recommended</span>
              </div>
              <div className="mb-4 sm:mb-6">
                <div className="font-semibold text-gray-700 mb-2">Direct Legal Scrapping (with GreenWrench)</div>
                <div className="w-full flex items-center justify-center mb-4">
                  {/* Full width Cloudinary Image */}
                  <div className="w-full flex items-center justify-center py-2">
                    <img 
                      src="https://res.cloudinary.com/dmhabztbf/image/upload/v1761680268/Gemini_Generated_Image_jxnlpmjxnlpmjxnl_ycyv0o.png" 
                      alt="The smart way showing direct path from car to certificate through GreenWrench"
                      className="max-w-full h-auto rounded-lg shadow-sm"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 text-green-800 text-xs sm:text-sm mb-2 pl-1">
                <li>✓ Direct path from customer to GreenWrench</li>
                <li>✓ Legally valid Certificate of Deposit (CoD) and Certificate of Vehicle Scrapping (CVS)</li>
                <li>✓ Maximum value with no middlemen taking cuts</li>
                <li>✓ Environmentally responsible disposal with 90% recycling rate</li>
                <li>✓ Quick processing and immediate certificate issuance</li>
              </ul>
              <div className="text-[10px] sm:text-xs text-green-700 mt-2">
                *Avoid unnecessary middlemen. Go direct for maximum value and legal safety with GreenWrench.
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-card rounded-xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-premium">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            
            {/* Features List */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-8">
                Complete Car Scrapping Solution
              </h3>
              
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3 text-foreground animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="text-sm sm:text-base md:text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 sm:pt-6">
                <Button
                  className="bg-gradient-primary hover:shadow-button transition-all duration-300 text-sm sm:text-base py-2 h-auto sm:h-11 px-4"
                  asChild
                >
                  <a
                    href="https://wa.me/919311068290?text=I want to know more about your services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Chat with Expert
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="space-y-4 sm:space-y-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <div className="text-center p-3 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-card">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">5000+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Cars Recycled</div>
                </div>
                <div className="text-center p-3 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-card">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">4.9★</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Customer Rating</div>
                </div>
                <div className="text-center p-3 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-card">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
                </div>
                <div className="text-center p-3 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-card">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Eco-Friendly</div>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-card">
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-4">Quick Contact</h4>
                <div className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <span>WhatsApp: +91 99999 99999</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <span>Free Pickup Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;