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
  Star,
  Eye
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
      
      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background overlay - Made more visible */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664303370099-cd2fee3b3c79?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4
          }}
        ></div>
        
        {/* Reduced gradient overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004d25]/60 via-[#00592a]/50 to-[#005628]/40 z-10"></div>
        
        {/* Decorative circles - Hidden on mobile */}
        <div className="absolute -left-24 top-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl z-10 hidden md:block"></div>
        <div className="absolute -right-32 bottom-0 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl z-10 hidden md:block"></div>
        <div className="absolute right-1/4 top-1/3 w-40 h-40 bg-emerald-400/30 rounded-full blur-2xl z-10 hidden lg:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-full text-white text-sm sm:text-lg font-semibold backdrop-blur-sm">
              💎 Investment Solutions
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            <span className="text-white">Certificate of </span>
            <span className="text-emerald-300">Deposit</span>
          </h1>
          
          {/* Animated underline */}
          <div className="w-24 sm:w-40 h-1 bg-emerald-400 mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Secure your financial future with our high-yield Certificate of Deposit options. 
            Guaranteed returns with flexible terms and competitive interest rates.
          </p>
          
          {/* Stats display - Mobile optimized */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 sm:mt-12">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">8.8%</div>
                <div className="text-sm sm:text-base text-white/70">Max Interest</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">1-5 Years</div>
                <div className="text-sm sm:text-base text-white/70">Flexible Terms</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">100% Safe</div>
                <div className="text-sm sm:text-base text-white/70">Protected Investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a COD Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements - Hidden on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent hidden md:block"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl hidden md:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
              What is a COD (Certificate of Destruction) in Scrap Cars?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium px-4">
              An official document provided by an authorized scrapyard or recycling center confirming that a vehicle has been permanently scrapped and will not be used on the road again.
            </p>
          </div>
          <Card className="max-w-3xl w-full shadow-xl rounded-2xl border-0 bg-white/90 backdrop-blur-lg">
            <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col items-center">
              <div className="mb-4 sm:mb-6 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-emerald-400 shadow-lg">
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 text-center">Certificate of Destruction (COD)</h3>
              <p className="text-muted-foreground leading-relaxed text-center text-base sm:text-lg">
                A COD is issued by a Registered Vehicle Scrapping Facility (RVSF) and serves as legal proof that your vehicle has been scrapped, ensuring it cannot be used or resold illegally.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main benefits section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements - Hidden on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent hidden md:block"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl hidden md:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
              Main Benefits of Obtaining a COD
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium px-4">
              Why you should get a Certificate of Destruction when scrapping your car
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            <Card className="text-center shadow-xl rounded-2xl border-0 bg-white/90 backdrop-blur-lg flex flex-col items-center">
              <CardContent className="p-6 sm:p-8 flex flex-col items-center">
                <div className="mb-3 sm:mb-4 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-emerald-400 shadow-lg">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Legal Proof</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">Confirms your car is scrapped and protects you from future liabilities.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-xl rounded-2xl border-0 bg-white/90 backdrop-blur-lg flex flex-col items-center">
              <CardContent className="p-6 sm:p-8 flex flex-col items-center">
                <div className="mb-3 sm:mb-4 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-emerald-400 shadow-lg">
                  <DollarSign className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Protects Owner</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">Prevents road tax, fines, or penalties after scrapping.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-xl rounded-2xl border-0 bg-white/90 backdrop-blur-lg flex flex-col items-center">
              <CardContent className="p-6 sm:p-8 flex flex-col items-center">
                <div className="mb-3 sm:mb-4 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-emerald-400 shadow-lg">
                  <Eye className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Prevents Illegal Resale</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">Ensures the vehicle cannot be resold or misused.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-xl rounded-2xl border-0 bg-white/90 backdrop-blur-lg flex flex-col items-center">
              <CardContent className="p-6 sm:p-8 flex flex-col items-center">
                <div className="mb-3 sm:mb-4 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-emerald-400 shadow-lg">
                  <Star className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Eco-Friendly Disposal</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">Helps in safe and environmentally responsible vehicle disposal.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COD Discount Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements - Hidden on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent hidden md:block"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl hidden md:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
              How Can the COD Be Utilized for Discount?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium px-4">
              Use your COD to get rebates when buying a new vehicle
            </p>
          </div>
          <Card className="max-w-3xl w-full shadow-xl rounded-2xl border-0 bg-white/90 backdrop-blur-lg">
            <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col items-center">
              <div className="mb-4 sm:mb-6 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-emerald-400 shadow-lg">
                <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 text-center">COD Discount Benefits</h3>
              <p className="text-muted-foreground leading-relaxed text-center text-base sm:text-lg mb-3 sm:mb-4">
                When you scrap your vehicle at an RVSF, you receive a COD. If you buy a new vehicle, states can offer up to <span className="font-bold text-primary">25% rebate</span> on road tax for personal and commercial vehicles using this certificate.
              </p>
              <p className="text-muted-foreground text-center text-sm sm:text-base">
                <span className="font-bold">Note:</span> The certificate is valid for 3 years. If not used within this period, it expires and you cannot claim the benefits.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Documents Required Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements - Hidden on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent hidden md:block"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl hidden md:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
              Documents Required for COD Purchase
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium px-4">
              Prepare the following documents to obtain your Certificate of Destruction
            </p>
          </div>
          <Card className="max-w-3xl w-full shadow-xl rounded-2xl border-0 bg-white/90 backdrop-blur-lg">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-emerald-400 shadow-lg flex-shrink-0">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-foreground font-medium">Identity Proof – Aadhaar, PAN Card, Driving License, etc.</span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-emerald-400 shadow-lg flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-foreground font-medium">Mobile No</span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-emerald-400 shadow-lg flex-shrink-0">
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-foreground font-medium">Email ID</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sell Your COD Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements - Hidden on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent hidden md:block"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl hidden md:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
              Sell Your COD for Instant Cash
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium px-4">
              Don't want to wait for tax benefits? Get immediate value for your Certificate of Destruction
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <Card className="shadow-xl rounded-2xl border-0 bg-white/90 backdrop-blur-lg h-full">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Why Sell Your COD?</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-muted-foreground">
                      <span className="font-bold">Immediate Cash:</span> Don't wait 3 years for tax benefits
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-muted-foreground">
                      <span className="font-bold">No Hassle:</span> We handle all paperwork and transfer processes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-muted-foreground">
                      <span className="font-bold">Competitive Rates:</span> Get the best market value for your certificate
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-muted-foreground">
                      <span className="font-bold">Fast Process:</span> Complete transaction within 24-48 hours
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl rounded-2xl border-0 bg-gradient-primary text-white h-full">
              <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">How It Works</h3>
                  <ol className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <li className="flex items-start">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base">1</div>
                      <span className="text-base sm:text-lg">Submit your COD details via our form or WhatsApp</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base">2</div>
                      <span className="text-base sm:text-lg">Receive an instant quote based on vehicle make and model</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base">3</div>
                      <span className="text-base sm:text-lg">Accept the offer and submit verification documents</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base">4</div>
                      <span className="text-base sm:text-lg">Receive payment directly in your bank account</span>
                    </li>
                  </ol>
                </div>
                
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg w-full bg-white hover:bg-white/90 text-primary"
                  asChild
                >
                  <a
                    href="https://wa.me/919311068290?text=I want to sell my Certificate of Destruction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Quote for Your COD
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-muted-foreground text-base sm:text-lg italic px-4">
              "Sold my COD to GreenWrench instead of waiting for tax benefits. Process was quick and the amount offered was very fair!"
              <br />
              <span className="font-bold text-foreground mt-2 block">— Saurabh, Delhi</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements - Hidden on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent hidden md:block"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl hidden md:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-primary rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Have Questions About Our CD Options?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Our financial experts are here to help you choose the best investment option for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                asChild
              >
                <a href="tel:+919311068290">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-white text-green-700 hover:bg-white hover:text-primary"
                asChild
              >
                <a
                  href="https://wa.me/919311068290?text=I need help choosing the right Certificate of Deposit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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