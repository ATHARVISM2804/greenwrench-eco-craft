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
      name: "Saurabh Kumar Mishra",
      position: "CEO",
      experience: "Founder – Greenwrench Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section - Updated to match Video Gallery style */}
      <section className="relative bg-[#15803d] text-white py-32 overflow-hidden">
        {/* Background overlay with app icons - increased opacity for better visibility */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1645216755684-c946ce202427?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4, // Lower opacity for more solid green effect
          }}
        ></div>
        {/* Solid green overlay for the hero section */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004d25]/80 via-[#00592a]/70 to-[#005628]/60 z-10"></div>
        {/* Decorative circles */}
        <div className="absolute -left-24 top-1/4 w-64 h-64 bg-[#15803d]/30 rounded-full blur-3xl z-10"></div>
        <div className="absolute -right-32 bottom-0 w-80 h-80 bg-[#15803d]/20 rounded-full blur-3xl z-10"></div>
        <div className="absolute right-1/4 top-1/3 w-40 h-40 bg-[#15803d]/20 rounded-full blur-2xl z-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white text-lg font-semibold backdrop-blur-sm">
              🌱 Our Story
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-extrabold mb-4">
            <span className="text-white">About </span>
            <span className="text-emerald-300">GreenWrench</span>
          </h1>
          
          {/* Animated underline similar to Video Gallery */}
          <div className="w-40 h-1 bg-emerald-400 mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Watch our collection of educational videos, customer testimonials, and behind-the-
            scenes content about eco-friendly car recycling and sustainable practices
          </p>
          
          {/* Stats display like in Video Gallery */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">8+ Years</div>
                <div className="text-white/70">Of experience</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">45+ Team</div>
                <div className="text-white/70">Of experts</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">100K+ Cars</div>
                <div className="text-white/70">Recycled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - with green gradient background */}
      <section className="py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements similar to HowItWorks */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Purpose</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guiding principles that define our business and operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Mission */}
            <div className="animate-fade-in bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-green-100 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 flex-grow">
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
            <div className="animate-slide-up bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-green-100 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 flex-grow">
                To become India's most trusted and largest eco-friendly automotive recycling network, setting industry 
                standards for environmental responsibility while empowering millions of vehicle owners to make sustainable choices.
              </p>
              <div className="space-y-3 bg-premium-green/10 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">2030 Goals</h3>
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
      </section>

      {/* Values - adjusted background to fit with the flow */}
      <section className="py-20 bg-gradient-to-b from-premium-green/30 via-white/90 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-premium-green/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
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

      {/* Who We Are Section - improved alignment and bullet points */}
      <section className="py-20 bg-gradient-to-b from-white via-premium-green/10 to-premium-green/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-l from-green-200/10 to-transparent rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-extrabold text-foreground mb-6 tracking-tight">
              Who We Are
            </h2>
          </div>
          <Card className="max-w-3xl w-full shadow-xl rounded-2xl border-0 bg-white/90 backdrop-blur-lg">
            <CardContent className="p-10 flex flex-col items-start">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-left">
                <span className="font-bold text-primary">GREENWRENCH SOLUTIONS</span> is India’s first online platform dedicated to the scrapping and de-registration of End-Of-Life-Vehicles (ELV). Our unique Vehicle-Specific, AI-Enabled Instant Quotation System built on WhatsApp Chat ensures the best rate for your loved car and our experienced staff assure complete and hassle-free handling of all legal documentation.
              </p>
              <ul className="list-disc pl-6 space-y-6 text-left text-lg text-muted-foreground">
                <li>
                  We understand that giving away your old vehicle which you owned and loved for many years is an emotional experience. We really understand that and thus, at least when you say Good Bye to your lovely car or bike, we want to make the experience enjoyable and hassle free.
                </li>
                <li>
                  From collection to final recycling and all documentation, we ensure the car owner has a smooth experience with no hassle in dealing with Govt departments.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team - with subtle gradient */}
      <section className="py-20 bg-gradient-to-b from-premium-green/20 via-premium-green/10 to-white relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-l from-green-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the experienced professionals driving our mission forward
            </p>
          </div>

          {/* Modified grid to center a single card */}
          <div className="flex justify-center mb-16">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="text-center shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border border-green-50 max-w-md w-full" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
                  {member.experience && (
                    <p className="text-muted-foreground text-sm">
                      {member.experience}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Partnership Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-card border border-green-100 mt-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Partner With Us?</h3>
                <p className="text-muted-foreground mb-6">
                  Join our network of partners to create a more sustainable future for automotive recycling. 
                  Whether you're a dealership, service center, or eco-conscious business, we welcome collaboration opportunities.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center text-white mt-1 mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-muted-foreground">Access to our nationwide network</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center text-white mt-1 mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-muted-foreground">Transparent revenue sharing model</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center text-white mt-1 mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-muted-foreground">Co-branding opportunities</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                  </svg>
                </div>
                <Button 
                  className="px-8 py-6 text-lg bg-gradient-primary hover:bg-gradient-primary/90 shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a
                    href="https://wa.me/919999999999?text=I'm interested in partnering with GreenWrench"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Partner With Us
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Our partnership team will contact you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10">
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
                  className="px-8 py-4 text-lg border-white text-green-700 hover:bg-white hover:text-primary"
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
        </div>
      </section>
    </div>
  );
};

export default About;