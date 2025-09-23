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
    <section className="py-32 bg-gradient-to-b from-white/90 via-premium-green/20 to-premium-green/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-premium-green/10 border border-primary-glow/30 rounded-full text-primary text-lg font-semibold">
              🏆 Our Advantages
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Why Choose <span className="bg-gradient-premium bg-clip-text text-transparent">GreenWrench?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience the most professional and rewarding car scrapping service with guaranteed best rates and complete transparency
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {advantage.description}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="mt-auto border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  asChild
                >
                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(advantage.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {advantage.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Features List */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Complete Car Scrapping Solution
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-foreground animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-button transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://wa.me/919999999999?text=I want to know more about your services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat with Expert
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-card">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-muted-foreground">Cars Recycled</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-card">
                  <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                  <div className="text-muted-foreground">Customer Rating</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-card">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-card">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Eco-Friendly</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h4 className="text-xl font-bold text-foreground mb-4">Quick Contact</h4>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span>WhatsApp: +91 99999 99999</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-primary" />
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