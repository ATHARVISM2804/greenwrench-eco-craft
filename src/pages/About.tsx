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
      image: "https://res.cloudinary.com/dmhabztbf/image/upload/v1761820724/fe927514-dccb-4424-8c72-3b0d029ba2dc_q9m5ji.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-[#15803d] text-white py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background overlay - Made more visible */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1645216755684-c946ce202427?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        ></div>
        {/* Reduced overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004d25]/60 via-[#00592a]/50 to-[#005628]/40 z-10"></div>
        
        {/* Decorative circles - Hidden on mobile */}
        <div className="absolute -left-24 top-1/4 w-64 h-64 bg-[#15803d]/30 rounded-full blur-3xl z-10 hidden md:block"></div>
        <div className="absolute -right-32 bottom-0 w-80 h-80 bg-[#15803d]/20 rounded-full blur-3xl z-10 hidden md:block"></div>
        <div className="absolute right-1/4 top-1/3 w-40 h-40 bg-[#15803d]/20 rounded-full blur-2xl z-10 hidden lg:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-full text-white text-sm sm:text-lg font-semibold backdrop-blur-sm">
              🌱 Our Story
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            <span className="text-white">About </span>
            <span className="text-emerald-300">GreenWrench</span>
          </h1>
          
          {/* Animated underline */}
          <div className="w-24 sm:w-40 h-1 bg-emerald-400 mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Leading India's automotive recycling revolution with eco-friendly practices, 
            transparency, and customer-first approach
          </p>
          
          {/* Stats display - Mobile optimized */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">2500+ Cars</div>
                <div className="text-sm sm:text-base text-white/70">Recycled</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">1500+</div>
                <div className="text-sm sm:text-base text-white/70">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements - Hidden on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent hidden md:block"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl hidden md:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">Our Purpose</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Guiding principles that define our business and operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
            {/* Mission - Mobile Optimized */}
            <div className="animate-fade-in bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-card border border-green-100 h-full flex flex-col">
              <div className="flex items-center mb-4 sm:mb-6">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-3 sm:mr-4" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 flex-grow">
                To revolutionize the automotive recycling industry in India by providing eco-friendly, transparent, and 
                customer-centric car scrapping services. We aim to make vehicle disposal hassle-free while contributing 
                to environmental sustainability and circular economy principles.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-foreground">Best market rates guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-foreground">100% eco-friendly processes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-foreground">Complete legal compliance</span>
                </div>
              </div>
            </div>

            {/* Vision - Mobile Optimized */}
            <div className="animate-slide-up bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-card border border-green-100 h-full flex flex-col">
              <div className="flex items-center mb-4 sm:mb-6">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-3 sm:mr-4" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 flex-grow">
                To become India's most trusted and largest eco-friendly automotive recycling network, setting industry 
                standards for environmental responsibility while empowering millions of vehicle owners to make sustainable choices.
              </p>
              <div className="space-y-3 bg-premium-green/10 p-4 sm:p-5 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">2030 Goals</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-muted-foreground">Cars Recycled</span>
                  <span className="font-bold text-primary text-sm sm:text-base">12500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-muted-foreground">Customer satisfaction</span>
                  <span className="font-bold text-primary text-sm sm:text-base">1500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-muted-foreground">CO₂ Reduction</span>
                  <span className="font-bold text-primary text-sm sm:text-base">50,000 tons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-premium-green/30 via-white/90 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-premium-green/10 via-transparent to-transparent hidden md:block"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              The principles that guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                    <value.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-premium-green/10 to-premium-green/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-l from-green-200/10 to-transparent rounded-full blur-2xl hidden md:block"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight">
              Who We Are
            </h2>
          </div>
          <Card className="max-w-4xl w-full shadow-xl rounded-2xl border-0 bg-white/90 backdrop-blur-lg">
            <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col items-start">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-left">
                <span className="font-bold text-primary">GREENWRENCH SOLUTIONS</span> is India's first online platform dedicated to the scrapping and de-registration of End-Of-Life-Vehicles (ELV). Our unique Vehicle-Specific, AI-Enabled Instant Quotation System built on WhatsApp Chat ensures the best rate for your loved car and our experienced staff assure complete and hassle-free handling of all legal documentation.
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-4 sm:space-y-6 text-left text-base sm:text-lg text-muted-foreground">
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

      {/* Team - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-premium-green/20 via-premium-green/10 to-white relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-l from-green-200/20 to-transparent rounded-full blur-3xl hidden md:block"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">Leadership Team</h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Meet the experienced professionals driving our mission forward
            </p>
          </div>

          {/* Team card - Mobile optimized */}
          <div className="flex justify-center mb-12 sm:mb-16">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="text-center shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border border-green-50 max-w-sm w-full mx-4" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform scale-110"
                      style={{ objectPosition: 'center top' }}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                    {member.position}
                  </p>
                  {member.experience && (
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {member.experience}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Partnership Section - Mobile Optimized */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-card border border-green-100 mt-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Ready to Partner With Us?</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Join our network of partners to create a more sustainable future for automotive recycling. 
                  Whether you're a dealership, service center, or eco-conscious business, we welcome collaboration opportunities.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-primary flex items-center justify-center text-white mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-sm sm:text-base text-muted-foreground">Access to our nationwide network</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-primary flex items-center justify-center text-white mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-sm sm:text-base text-muted-foreground">Transparent revenue sharing model</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-primary flex items-center justify-center text-white mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-sm sm:text-base text-muted-foreground">Co-branding opportunities</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-9 sm:h-9 text-white">
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                  </svg>
                </div>
                <Button 
                  className="px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg bg-gradient-primary hover:bg-gradient-primary/90 shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a
                    href="https://wa.me/919311068290?text=I'm interested in partnering with GreenWrench"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Partner With Us
                  </a>
                </Button>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Our partnership team will contact you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-primary rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            {/* Decorative elements - Hidden on mobile */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80')] opacity-10 bg-cover bg-center hidden sm:block"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Experience the Difference?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of satisfied customers who chose GreenWrench for their car recycling needs
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                  asChild
                >
                  <a
                    href="tel:+919311068290"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Contact Us
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-white text-green-700 hover:bg-white hover:text-primary"
                  asChild
                >
                  <a
                    href="https://wa.me/919311068290?text=Get instant quote for my car"
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