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
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-premium-green/10 border border-primary-glow/30 rounded-full text-primary text-sm sm:text-base md:text-lg font-semibold">
              ⚡ Simple Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 px-2">
            How It <span className="text-transparent bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text">Works</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Simple 4-step process to get the best value for your scrap car with complete peace of mind
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-md z-10 shadow-md">
                {index + 1}
              </div>
              
              {/* Connection Line - Hidden on mobile, visible on large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 transform -translate-y-1/2 z-0"></div>
              )}

              <Card className="h-full bg-white/90 shadow-card border border-green-100 hover:shadow-premium hover:border-green-200 transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center ${step.color}`}>
                    <step.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-2">
          <div className="bg-gradient-to-br from-white to-green-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-premium border border-green-100 inline-block relative overflow-hidden max-w-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-100/40 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto">
                Get your instant quote now and experience our hassle-free service
              </p>
              <a
                href="https://wa.me/919311068290?text=I want to start the car scrapping process"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-200 transition-all duration-300 text-sm sm:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;