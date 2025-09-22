import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp } from "lucide-react";

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
    },
    {
      id: 2,
      title: "Supreme Court Mandates Stricter End-of-Life Vehicle Regulations",
      summary: "Latest Supreme Court ruling requires all vehicles older than 15 years to undergo mandatory fitness testing and scrapping compliance.",
      category: "Legal Update",
      date: "March 16, 2024",
      urgent: true,
      source: "Supreme Court of India",
    },
    {
      id: 3,
      title: "Delhi NCR Implements New Air Quality Measures for Old Vehicles",
      summary: "Delhi government introduces new restrictions on vehicles older than 10 years as part of comprehensive air quality improvement initiative.",
      category: "Regional Policy",
      date: "March 14, 2024",
      urgent: false,
      source: "Delhi Transport Department",
    },
    {
      id: 4,
      title: "Metal Prices Surge: Impact on Scrap Car Values",
      summary: "Global metal price increases lead to higher scrap vehicle valuations, benefiting car owners looking to dispose of old vehicles.",
      category: "Market Update",
      date: "March 12, 2024",
      urgent: false,
      source: "Metal Market Analysis",
    },
    {
      id: 5,
      title: "Green Certification Program Launched for Auto Recyclers",
      summary: "New environmental certification program ensures all vehicle recyclers meet stringent eco-friendly standards and processes.",
      category: "Environment",
      date: "March 10, 2024",
      urgent: false,
      source: "Ministry of Environment",
    },
    {
      id: 6,
      title: "Digital Platform Integration for Vehicle Scrapping Documentation",
      summary: "Government launches unified digital platform for streamlined vehicle scrapping documentation and certificate issuance.",
      category: "Technology",
      date: "March 8, 2024",
      urgent: false,
      source: "Digital India Initiative",
    },
  ];

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
      <section className="relative bg-gradient-hero text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-green-dark/50 via-transparent to-premium-green/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-premium-green/20 border border-primary-glow/30 rounded-full text-primary-glow text-lg font-semibold backdrop-blur-sm animate-pulse">
              📰 Breaking Updates
            </span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
            Latest <span className="bg-gradient-premium bg-clip-text text-transparent">News</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            Stay updated with the latest government policies, regulations, and industry developments in automotive recycling
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
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
                      <button className="text-primary hover:underline font-medium">
                        Read Full Article →
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
    </div>
  );
};

export default News;