import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Eye, Calendar } from "lucide-react";

const Videos = () => {
  const videoCategories = [
    "All Videos",
    "Recycling Process",
    "Customer Stories",
    "Educational",
    "Awareness Campaigns",
    "Behind the Scenes",
  ];

  const videos = [
    {
      id: 1,
      title: "Complete Car Recycling Process: From Pickup to Final Disposal",
      description: "Watch the entire journey of how we recycle cars in our state-of-the-art facility with eco-friendly processes.",
      duration: "8:45",
      views: "15.2K",
      date: "March 15, 2024",
      category: "Recycling Process",
      thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Customer Testimonial: Mr. Sharma's Experience with GreenWrench",
      description: "Hear from our satisfied customer about his seamless car scrapping experience and instant payment.",
      duration: "3:20",
      views: "8.7K",
      date: "March 12, 2024",
      category: "Customer Stories",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "Why Car Recycling Matters: Environmental Impact Explained",
      description: "Learn about the environmental benefits of proper car recycling and how it contributes to a sustainable future.",
      duration: "6:15",
      views: "22.1K",
      date: "March 10, 2024",
      category: "Educational",
      thumbnail: "https://images.unsplash.com/photo-1569163139271-de64f139a5ea?w=500&h=300&fit=crop",
      featured: true,
    },
    {
      id: 4,
      title: "How to Prepare Your Car for Scrapping: Step-by-Step Guide",
      description: "Essential steps to prepare your vehicle before scrapping to ensure maximum value and smooth process.",
      duration: "4:32",
      views: "12.8K",
      date: "March 8, 2024",
      category: "Educational",
      thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=300&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "Behind the Scenes: Our Eco-Friendly Recycling Facility",
      description: "Take a tour of our advanced recycling facility and see how we maintain the highest environmental standards.",
      duration: "7:20",
      views: "9.5K",
      date: "March 5, 2024",
      category: "Behind the Scenes",
      thumbnail: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Government Vehicle Scrappage Policy 2024: What You Need to Know",
      description: "Comprehensive overview of the new government policy and how it benefits vehicle owners.",
      duration: "5:45",
      views: "18.3K",
      date: "March 3, 2024",
      category: "Educational",
      thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop",
      featured: true,
    },
    {
      id: 7,
      title: "Green Initiative: Our Commitment to Environmental Protection",
      description: "Learn about our sustainability initiatives and commitment to protecting the environment through responsible recycling.",
      duration: "4:18",
      views: "11.7K",
      date: "February 28, 2024",
      category: "Awareness Campaigns",
      thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=300&fit=crop",
      featured: false,
    },
    {
      id: 8,
      title: "Customer Success Story: From Old Car to New Dreams",
      description: "Inspiring story of how our customer used the money from car scrapping to fulfill their dreams.",
      duration: "3:55",
      views: "7.2K",
      date: "February 25, 2024",
      category: "Customer Stories",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c351e107?w=500&h=300&fit=crop",
      featured: false,
    },
  ];

  const featuredVideos = videos.filter(video => video.featured);
  const regularVideos = videos.filter(video => !video.featured);

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-green-dark/50 via-transparent to-premium-green/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-premium-green/20 border border-primary-glow/30 rounded-full text-primary-glow text-lg font-semibold backdrop-blur-sm">
              🎥 Video Library
            </span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
            Video <span className="bg-gradient-premium bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            Watch our educational videos, customer testimonials, and behind-the-scenes content about eco-friendly car recycling
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {videoCategories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-white text-muted-foreground border border-border hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Videos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Videos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVideos.map((video, index) => (
                <Card key={video.id} className="group shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {video.category}
                    </Badge>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{video.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{video.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Videos */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">All Videos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularVideos.map((video, index) => (
                <Card key={video.id} className="group shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-6 w-6 text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {video.category}
                    </Badge>
                    
                    <h3 className="text-sm font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{video.views}</span>
                      </div>
                      <span>{video.date.split(' ')[1]} {video.date.split(' ')[2]}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-button transition-all duration-300">
              Load More Videos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;