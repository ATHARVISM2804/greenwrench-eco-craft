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
    <section className="py-32 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-premium-green/10 border border-primary-glow/30 rounded-full text-primary text-lg font-semibold">
              ⚡ Simple Process
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            How It <span className="text-transparent bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Simple 4-step process to get the best value for your scrap car with complete peace of mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-md z-10 shadow-md">
                {index + 1}
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 transform -translate-y-1/2 z-0"></div>
              )}

              <Card className="h-full bg-white/90 shadow-card border border-green-100 hover:shadow-premium hover:border-green-200 transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center ${step.color}`}>
                    <step.icon className="h-8 w-8 text-green-600" />
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
          <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-premium border border-green-100 inline-block relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-100/40 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get your instant quote now and experience our hassle-free service
              </p>
              <a
                href="https://wa.me/919311068290?text=I want to start the car scrapping process"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-200 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
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