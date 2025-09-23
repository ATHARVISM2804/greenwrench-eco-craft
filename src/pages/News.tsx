import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp, X, ExternalLink, ArrowRight, FileText } from "lucide-react";
import React, { useState } from "react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Vehicle Scrappage Policy 2024: Government Announces Major Incentives",
      summary: "The Ministry of Road Transport announces enhanced incentives for old vehicle owners, including tax benefits and discounts on new vehicle purchases.",
      category: "Government Policy",
      date: "March 18, 2024",
      urgent: true,
      source: "Ministry of Road Transport & Highways",
      image: "https://images.unsplash.com/photo-1518783211485-10fd3bfb2ce2?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>In a significant move to accelerate vehicle modernization and reduce environmental pollution, the Ministry of Road Transport & Highways has announced enhanced incentives under the Vehicle Scrappage Policy 2024.</p>
        
        <h4>Key Highlights of the New Policy:</h4>
        <ul>
          <li>Up to 15% rebate on road tax for commercial vehicles</li>
          <li>Up to 25% rebate on road tax for private vehicles</li>
          <li>5% discount by automobile manufacturers on purchase of new vehicle</li>
          <li>Zero registration fees for new vehicle purchase against scrapping certificate</li>
          <li>Income tax benefits for individuals and businesses</li>
        </ul>
        
        <p>The policy aims to phase out unfit and polluting vehicles while stimulating demand in the auto sector. Vehicle owners will receive a scrapping certificate upon disposal of their old vehicles, which can be used to avail these benefits.</p>
        
        <p>"This policy will help reduce pollution, improve road and passenger safety, formalize the informal vehicle scrapping industry, and recover low-cost materials for the automotive, steel and electronics industry," said the Transport Minister during the announcement.</p>
      `,
      contactInfo: "For more information, visit www.morth.gov.in or call the helpline: 1800-123-4567",
    },
    {
      id: 2,
      title: "Supreme Court Mandates Stricter End-of-Life Vehicle Regulations",
      summary: "Latest Supreme Court ruling requires all vehicles older than 15 years to undergo mandatory fitness testing and scrapping compliance.",
      category: "Legal Update",
      date: "March 16, 2024",
      urgent: true,
      source: "Supreme Court of India",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>The Supreme Court of India has issued a landmark ruling mandating stricter regulations for end-of-life vehicles. The ruling makes fitness testing mandatory for all vehicles older than 15 years.</p>
        
        <h4>Major Points of the Ruling:</h4>
        <ul>
          <li>All commercial vehicles older than 15 years must undergo fitness testing every 6 months</li>
          <li>Private vehicles older than 15 years require annual fitness certification</li>
          <li>Vehicles failing to meet emission standards must be scrapped at authorized centers</li>
          <li>States must establish automated testing centers within 12 months</li>
          <li>Non-compliance may result in heavy penalties and vehicle impoundment</li>
        </ul>
        
        <p>The court emphasized that the right to clean air is a fundamental right, and this measure aims to combat the rising pollution levels in major Indian cities.</p>
        
        <p>The bench stated, "We cannot compromise public health and environmental concerns for individual convenience. This is a necessary step toward ensuring sustainable urban development."</p>
      `,
      contactInfo: "For detailed information on the ruling, visit the Supreme Court website or consult with a transportation law expert.",
    },
    {
      id: 3,
      title: "Delhi NCR Implements New Air Quality Measures for Old Vehicles",
      summary: "Delhi government introduces new restrictions on vehicles older than 10 years as part of comprehensive air quality improvement initiative.",
      category: "Regional Policy",
      date: "March 14, 2024",
      urgent: false,
      source: "Delhi Transport Department",
      image: "https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>In a move to combat the capital's deteriorating air quality, the Delhi government has announced stringent measures for vehicles older than 10 years operating within the National Capital Region (NCR).</p>
        
        <h4>Key Restrictions Announced:</h4>
        <ul>
          <li>Complete ban on diesel vehicles older than 10 years within city limits</li>
          <li>Petrol vehicles older than 15 years prohibited from operation in NCR</li>
          <li>Implementation of colored stickers for fuel identification and monitoring</li>
          <li>Establishment of Low Emission Zones in congested areas</li>
          <li>Increased frequency of pollution checks for commercial vehicles</li>
        </ul>
        
        <p>The Transport Department has clarified that these measures are being implemented in phases, with the first phase focusing on commercial vehicles. The complete ban on older private vehicles will come into effect from June 1, 2024.</p>
        
        <p>"Delhi's air quality crisis demands immediate and decisive action. These measures, though stringent, are necessary to ensure the health and wellbeing of our citizens," said the Delhi Transport Minister during a press conference.</p>
        
        <p>The government has also announced the expansion of authorized scrapping facilities within the NCR to accommodate the increased demand for vehicle disposal services.</p>
      `,
      contactInfo: "For more details, vehicle owners can contact the Delhi Transport Department helpline at 1800-123-1000 or visit transport.delhi.gov.in",
    },
    {
      id: 4,
      title: "Metal Prices Surge: Impact on Scrap Car Values",
      summary: "Global metal price increases lead to higher scrap vehicle valuations, benefiting car owners looking to dispose of old vehicles.",
      category: "Market Update",
      date: "March 12, 2024",
      urgent: false,
      source: "Metal Market Analysis",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>The global metal market is experiencing significant price surges, particularly in steel, aluminum, and copper—key materials recovered from scrapped vehicles. This price rally has translated into higher valuations for end-of-life vehicles across the country.</p>
        
        <h4>Market Trends Observed:</h4>
        <ul>
          <li>35% increase in steel prices over the past quarter</li>
          <li>Aluminum prices reaching a five-year high</li>
          <li>Copper and precious metals from catalytic converters seeing substantial appreciation</li>
          <li>Average scrap car values up by 22% compared to last year</li>
          <li>Higher demand for specific vehicle components containing rare metals</li>
        </ul>
        
        <p>Market analysts attribute these price increases to several factors including supply chain disruptions, increased manufacturing demand post-pandemic, and stricter environmental regulations limiting mining operations globally.</p>
        
        <p>"Vehicle owners considering scrapping their old cars are in a favorable position right now," explains Dr. Rajat Mehta, Chief Economist at Metal Market Analysis. "The current market conditions offer an optimal window for maximizing returns on end-of-life vehicles, especially those with higher metal content."</p>
        
        <p>Authorized vehicle recyclers across the country have reported a 40% increase in inquiries from vehicle owners looking to capitalize on the higher scrap values. Industry experts anticipate these favorable conditions to continue for at least two more quarters before stabilizing.</p>
      `,
      contactInfo: "For current market rates and metal price forecasts, visit www.metalmarketanalysis.com or consult with authorized recycling centers.",
    },
    {
      id: 5,
      title: "Green Certification Program Launched for Auto Recyclers",
      summary: "New environmental certification program ensures all vehicle recyclers meet stringent eco-friendly standards and processes.",
      category: "Environment",
      date: "March 10, 2024",
      urgent: false,
      source: "Ministry of Environment",
      image: "https://images.unsplash.com/photo-1550399504-8953e1a6ac87?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>The Ministry of Environment, in collaboration with the Automotive Recyclers Association, has launched a comprehensive "Green Certification Program" for vehicle recycling facilities across the country. This initiative aims to standardize environmentally responsible practices in the auto recycling industry.</p>
        
        <h4>Certification Requirements Include:</h4>
        <ul>
          <li>Implementation of zero-waste recycling protocols</li>
          <li>Proper handling and disposal of hazardous materials including oils, refrigerants, and batteries</li>
          <li>Minimum 85% material recovery rate from each processed vehicle</li>
          <li>Regular environmental impact assessments and reporting</li>
          <li>Staff training in sustainable recycling practices</li>
          <li>Carbon footprint reduction measures</li>
        </ul>
        
        <p>The certification will be mandatory for all authorized vehicle scrapping facilities by January 2025. Facilities that achieve certification will receive tax benefits, government contracts, and preferential status in official vehicle disposal programs.</p>
        
        <p>"This program represents a significant step forward in making vehicle recycling truly sustainable," said the Environment Minister. "By ensuring standardized eco-friendly practices, we're minimizing the environmental impact of end-of-life vehicles while maximizing resource recovery."</p>
        
        <p>Consumer advocacy groups have welcomed this development, noting that it will provide vehicle owners with greater confidence when choosing recycling facilities. The certification status of facilities will be publicly available through an online portal launching next month.</p>
      `,
      contactInfo: "Recycling facilities can apply for certification at greenrecycle.gov.in. Consumers can verify a facility's certification status by texting the facility ID to 50505.",
    },
    {
      id: 6,
      title: "Digital Platform Integration for Vehicle Scrapping Documentation",
      summary: "Government launches unified digital platform for streamlined vehicle scrapping documentation and certificate issuance.",
      category: "Technology",
      date: "March 8, 2024",
      urgent: false,
      source: "Digital India Initiative",
      image: "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?auto=format&fit=crop&w=800&q=80",
      fullContent: `
        <p>The Ministry of Electronics and Information Technology, under the Digital India Initiative, has launched a unified digital platform named "VAHAAN-End" for streamlining all documentation related to vehicle scrapping and recycling.</p>
        
        <h4>Key Features of the Platform:</h4>
        <ul>
          <li>Centralized repository for all vehicle scrapping certificates</li>
          <li>Integration with VAHAN database for automatic vehicle registration cancellation</li>
          <li>Blockchain-based certificate verification system</li>
          <li>Real-time tracking of scrapping process status</li>
          <li>Direct integration with insurance companies and automobile manufacturers for rebate processing</li>
          <li>Mobile app interface for vehicle owners with notification system</li>
        </ul>
        
        <p>This digital platform aims to simplify the currently complex documentation process by creating a single-window system for all stakeholders involved in vehicle scrapping. Vehicle owners can now complete the entire process online, from application to certificate generation.</p>
        
        <p>"The VAHAAN-End platform is designed to eliminate bureaucratic hurdles and paperwork that previously made vehicle scrapping a cumbersome process," explained the IT Minister. "What used to take weeks can now be completed in days, with complete transparency and security."</p>
        
        <p>The platform also features an API system allowing third-party integration for authorized vehicle scrapping facilities, RTOs, and other government departments. A national helpline has been established to assist users with the transition to the digital platform.</p>
      `,
      contactInfo: "Access the platform at vahaanend.gov.in or download the mobile app from Google Play or App Store. For assistance, call the national helpline at 1800-XXX-XXXX.",
    },
  ];

  // Modal state
  const [openModal, setOpenModal] = useState<null | typeof newsItems[0]>(null);

  const trendingTopics = [
    "Vehicle Scrappage Policy 2024",
    "Electric Vehicle Incentives",
    "Pollution Control Measures",
    "Auto Recycling Standards",
    "Metal Price Trends",
    "Legal Compliance Updates",
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#004d25] via-[#00592a] to-[#005628] text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5, // Reduced opacity to show the deep green better
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#004d25]/80 via-[#00592a]/70 to-[#005628]/60 z-10"></div>
        
        {/* Decorative circles */}
        <div className="absolute -left-24 top-1/4 w-64 h-64 bg-[#007c3e]/20 rounded-full blur-3xl z-10"></div>
        <div className="absolute -right-32 bottom-0 w-80 h-80 bg-[#007c3e]/20 rounded-full blur-3xl z-10"></div>
        <div className="absolute right-1/4 top-1/3 w-40 h-40 bg-[#008f47]/20 rounded-full blur-2xl z-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white text-lg font-semibold backdrop-blur-sm">
              📰 Latest Updates
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-extrabold mb-4">
            <span className="text-white">Latest </span>
            <span className="text-[#40c67d]">News</span>
          </h1>
          
          {/* Animated underline similar to the image */}
          <div className="w-40 h-1 bg-[#40c67d] mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay updated with the latest government policies, regulations, and industry developments 
            in automotive recycling and sustainable practices
          </p>
          
          {/* Stats display similar to the image */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
                <div className="text-white/70">Latest Updates</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{newsItems.length}+ Articles</div>
                <div className="text-white/70">Updated Weekly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Green Gradient Background (similar to HowItWorks) */}
      <section className="py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements similar to HowItWorks */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Main News Content */}
            <div className="lg:col-span-3 space-y-8">
              {newsItems.map((news, index) => (
                <Card key={news.id} className="shadow-card hover:shadow-premium transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge variant={news.urgent ? "destructive" : "secondary"}>
                          {news.category}
                        </Badge>
                        {news.urgent && (
                          <Badge variant="destructive" className="animate-pulse">
                            URGENT
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{news.date}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                      {news.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      {news.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Source:</span> {news.source}
                      </div>
                      <button 
                        className="text-primary hover:underline font-medium flex items-center"
                        onClick={() => setOpenModal(news)}
                      >
                        Read Full Article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Breaking News */}
              <Card className="bg-gradient-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Breaking News
                  </h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock className="h-3 w-3" />
                        <span>2 hours ago</span>
                      </div>
                      <p className="text-white/90">
                        Parliament passes new vehicle scrapping bill with enhanced benefits for citizens.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Trending Topics
                  </h3>
                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get the latest news and updates delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="w-full bg-gradient-primary text-white py-2 rounded-lg font-medium hover:shadow-button transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Government Policies",
                      "Legal Updates",
                      "Market Analysis",
                      "Environmental News",
                      "Technology Updates",
                    ].map((link, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal Popup */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative animate-fade-in overflow-hidden max-h-[90vh] flex flex-col">
            <button
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 z-20 bg-white/80 rounded-full p-2"
              onClick={() => setOpenModal(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Header with Image */}
            <div className="w-full h-64 relative">
              <img
                src={openModal.image}
                alt={openModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <Badge variant={openModal.urgent ? "destructive" : "secondary"} className="mb-2 self-start">
                  {openModal.category}
                </Badge>
                <h2 className="text-3xl font-bold">{openModal.title}</h2>
              </div>
            </div>
            
            {/* Article Content */}
            <div className="p-8 overflow-y-auto">
              <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground border-b border-gray-100 pb-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {openModal.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {new Date().toLocaleTimeString()}
                  </span>
                </div>
                <span className="font-medium">Source: {openModal.source}</span>
              </div>
              
              <div className="prose prose-green max-w-none mb-6" dangerouslySetInnerHTML={{ __html: openModal.fullContent }} />
              
              {/* Additional Information */}
              <div className="mt-8 bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-2">Further Information</h4>
                <p className="text-green-700">{openModal.contactInfo}</p>
              </div>
              
              {/* Share & External Link */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Share:</span>
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.049c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.049H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </button>
                  <button className="p-2 bg-sky-100 text-sky-600 rounded-full hover:bg-sky-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </button>
                  <button className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                  </button>
                </div>
                
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <span>Visit Official Source</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;