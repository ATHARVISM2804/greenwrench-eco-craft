import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Truck, FileText, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Request a Quote",
      description: "Enter your vehicle details and get an instant quote via WhatsApp within 60 seconds.",
      color: "text-primary",
    },
    {
      icon: Truck,
      title: "Free Vehicle Pickup",
      description: "Schedule a convenient pickup time. Our team will come to your location at no extra cost.",
      color: "text-primary-glow",
    },
    {
      icon: FileText,
      title: "Documentation & Scrapping",
      description: "We handle all paperwork and eco-friendly scrapping processes with complete transparency.",
      color: "text-success",
    },
    {
      icon: CreditCard,
      title: "Payment & Certificates",
      description: "Receive instant payment via Cash/UPI and get all necessary certificates immediately.",
      color: "text-premium-green-light",
    },
  ];

  return (
    <section className="py-32 bg-gradient-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-premium-green/5 via-transparent to-premium-green-light/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-premium-green/10 border border-primary-glow/30 rounded-full text-primary text-lg font-semibold">
              ⚡ Simple Process
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            How It <span className="bg-gradient-premium bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Simple 4-step process to get the best value for your scrap car with complete peace of mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {index + 1}
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary-glow transform -translate-y-1/2 z-0"></div>
              )}

              <Card className="h-full bg-white shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-card flex items-center justify-center ${step.color}`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-premium inline-block">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get your instant quote now and experience our hassle-free service
            </p>
            <a
              href="https://wa.me/919999999999?text=I want to start the car scrapping process"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-button transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;