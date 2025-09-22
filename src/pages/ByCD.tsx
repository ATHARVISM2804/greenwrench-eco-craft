import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Shield, 
  DollarSign, 
  Calendar, 
  FileText, 
  Phone, 
  MessageCircle,
  CheckCircle,
  Star
} from "lucide-react";

const ByCD = () => {
  const cdOptions = [
    {
      type: "Standard CD",
      duration: "1 Year",
      interestRate: "7.5%",
      minAmount: "₹1,00,000",
      features: [
        "Fixed interest rate",
        "Quarterly interest payout",
        "Auto-renewal option",
        "Premature withdrawal facility",
      ],
      popular: false,
    },
    {
      type: "Premium CD",
      duration: "2 Years",
      interestRate: "8.2%",
      minAmount: "₹2,50,000",
      features: [
        "Higher interest rate",
        "Monthly interest payout option",
        "Flexible tenure",
        "Priority customer service",
        "Free financial advisory",
      ],
      popular: true,
    },
    {
      type: "Elite CD",
      duration: "3 Years",
      interestRate: "8.8%",
      minAmount: "₹5,00,000",
      features: [
        "Highest interest rate",
        "Customizable payout schedule",
        "Dedicated relationship manager",
        "Exclusive investment opportunities",
        "Tax planning assistance",
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "High Returns",
      description: "Competitive interest rates up to 8.8% per annum, higher than traditional savings accounts.",
    },
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Your deposits are insured and backed by government regulations for maximum security.",
    },
    {
      icon: DollarSign,
      title: "Flexible Payouts",
      description: "Choose from monthly, quarterly, or annual interest payout options as per your needs.",
    },
    {
      icon: Calendar,
      title: "Flexible Tenure",
      description: "Investment terms from 1 to 5 years with options for early withdrawal when needed.",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Choose Your Plan",
      description: "Select the Certificate of Deposit plan that best suits your investment goals and timeline.",
    },
    {
      step: 2,
      title: "Submit Documents",
      description: "Provide necessary KYC documents and complete the application process with our team.",
    },
    {
      step: 3,
      title: "Make Payment",
      description: "Transfer your investment amount through secure banking channels or visit our office.",
    },
    {
      step: 4,
      title: "Start Earning",
      description: "Your CD is activated and you start earning guaranteed returns from day one.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Certificate of Deposit
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Secure your financial future with our high-yield Certificate of Deposit options. 
            Guaranteed returns with flexible terms and competitive interest rates.
          </p>
        </div>
      </section>

      {/* CD Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Choose Your Investment Plan
            </h2>
            <p className="text-xl text-muted-foreground">
              Select from our range of Certificate of Deposit options designed for different investment goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cdOptions.map((option, index) => (
              <Card key={index} className={`h-full shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up relative ${option.popular ? 'ring-2 ring-primary' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {option.type}
                    </h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {option.interestRate}
                    </div>
                    <div className="text-muted-foreground">
                      per annum for {option.duration}
                    </div>
                    <div className="mt-4 text-lg font-semibold text-foreground">
                      Minimum: {option.minAmount}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    {option.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className={`w-full ${option.popular ? 'bg-gradient-primary' : ''}`}
                    variant={option.popular ? "default" : "outline"}
                    asChild
                  >
                    <a
                      href={`https://wa.me/919999999999?text=I want to invest in ${option.type} Certificate of Deposit`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Invest Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Our Certificate of Deposit?
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover the advantages of investing with GreenWrench Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              How to Get Started
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple 4-step process to start your investment journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {step.step}
                </div>
                
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary-glow transform -translate-y-1/2 z-0"></div>
                )}

                <Card className="h-full bg-white shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8 text-center">
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
        </div>
      </section>

      {/* Buy/Sell Tabs */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="buy" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="buy" className="text-lg py-3">Buy Certificate of Deposit</TabsTrigger>
              <TabsTrigger value="sell" className="text-lg py-3">Sell/Withdraw CD</TabsTrigger>
            </TabsList>
            
            <TabsContent value="buy">
              <Card className="shadow-premium">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      Purchase Certificate of Deposit
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Start your investment journey with guaranteed returns
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-foreground">What You Need:</h4>
                      <ul className="space-y-3">
                        {[
                          "Valid government ID (Aadhaar/PAN)",
                          "Bank account details",
                          "Minimum investment amount",
                          "Completed application form",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-foreground">Investment Options:</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-white rounded-lg border border-border">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Lump Sum Investment</span>
                            <span className="text-primary font-bold">Available</span>
                          </div>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-border">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Monthly SIP</span>
                            <span className="text-primary font-bold">Coming Soon</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button
                      size="lg"
                      className="bg-gradient-primary px-8 py-4 text-lg"
                      asChild
                    >
                      <a
                        href="https://wa.me/919999999999?text=I want to purchase Certificate of Deposit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Start Investment Process
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sell">
              <Card className="shadow-premium">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      Withdraw or Sell Your CD
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Access your funds when you need them
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-foreground">Withdrawal Options:</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-white rounded-lg border border-border">
                          <h5 className="font-semibold text-foreground mb-2">Maturity Withdrawal</h5>
                          <p className="text-sm text-muted-foreground">Full principal + interest at maturity</p>
                          <div className="mt-2">
                            <span className="text-primary font-bold">No penalties</span>
                          </div>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-border">
                          <h5 className="font-semibold text-foreground mb-2">Premature Withdrawal</h5>
                          <p className="text-sm text-muted-foreground">Early withdrawal before maturity</p>
                          <div className="mt-2">
                            <span className="text-orange-600 font-bold">Penalty applicable</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-foreground">Required Documents:</h4>
                      <ul className="space-y-3">
                        {[
                          "Original CD certificate",
                          "Valid photo ID",
                          "Bank account details",
                          "Withdrawal request form",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white"
                      asChild
                    >
                      <a
                        href="https://wa.me/919999999999?text=I want to withdraw/sell my Certificate of Deposit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Initiate Withdrawal
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Have Questions About Our CD Options?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our financial experts are here to help you choose the best investment option for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg"
                asChild
              >
                <a href="tel:+919999999999">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a
                  href="https://wa.me/919999999999?text=I need help choosing the right Certificate of Deposit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ByCD;