import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Leaf, Users, Award, Target, Heart, MessageCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "We are committed to protecting our planet through responsible recycling practices and sustainable operations.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest communication and transparent business practices.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make is centered around providing exceptional value and service to our customers.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from service quality to environmental standards.",
    },
  ];

  const stats = [
    { number: "5000+", label: "Cars Recycled", icon: "🚗" },
    { number: "98%", label: "Customer Satisfaction", icon: "⭐" },
    { number: "50+", label: "Cities Served", icon: "🏙️" },
    { number: "100%", label: "Eco-Friendly Process", icon: "🌱" },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      experience: "15+ years in automotive industry",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Head of Environmental Operations",
      experience: "PhD in Environmental Science",
      image: "https://images.unsplash.com/photo-1494790108755-2616c351e107?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Amit Patel",
      position: "Operations Director",
      experience: "12+ years in logistics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-green-dark/50 via-transparent to-premium-green/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-premium-green/20 border border-primary-glow/30 rounded-full text-primary-glow text-lg font-semibold backdrop-blur-sm">
              🌱 Our Story
            </span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
            About <span className="bg-gradient-premium bg-clip-text text-transparent">GreenWrench</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            India's premier eco-friendly car recycling platform, committed to sustainable automotive disposal and environmental protection
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Mission */}
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To revolutionize the automotive recycling industry in India by providing eco-friendly, transparent, and 
                customer-centric car scrapping services. We aim to make vehicle disposal hassle-free while contributing 
                to environmental sustainability and circular economy principles.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">Best market rates guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">100% eco-friendly processes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">Complete legal compliance</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="animate-slide-up">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To become India's most trusted and largest eco-friendly automotive recycling network, setting industry 
                standards for environmental responsibility while empowering millions of vehicle owners to make sustainable choices.
              </p>
              <div className="bg-gradient-card rounded-2xl p-6 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-4">2030 Goals</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Cars Recycled</span>
                    <span className="font-bold text-primary">100,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Cities Covered</span>
                    <span className="font-bold text-primary">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">CO₂ Reduction</span>
                    <span className="font-bold text-primary">50,000 tons</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                    <value.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to excellence and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-300">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the experienced professionals driving our mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-primary font-medium mb-3">
                    {member.position}
                  </p>
                  
                  <p className="text-muted-foreground text-sm">
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who chose GreenWrench for their car recycling needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg"
                asChild
              >
                <a
                  href="https://wa.me/919999999999?text=I want to know more about GreenWrench Solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a
                  href="https://wa.me/919999999999?text=Get instant quote for my car"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Instant Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;