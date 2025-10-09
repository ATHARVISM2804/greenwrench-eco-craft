import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Eye, Calendar, PlayCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

const Videos = () => {
  // Keep the categories array for potential future use, but we won't display it
  const videoCategories = [
    "All Videos",
    "Recycling Process",
    "Customer Stories",
    "Educational",
    "Awareness Campaigns",
    "Behind the Scenes",
  ];

  // Replace the featured videos with the provided YouTube links
  const featuredVideos = [
    {
      id: 1,
      title: "Car Scrapping Process - Quick Guide",
      description: "Learn how we efficiently handle car scrapping with our state-of-the-art eco-friendly process.",
      duration: "1:00",
      views: "15.2K",
      date: "May 15, 2024",
      category: "Recycling Process",
      thumbnail: `https://i.ytimg.com/vi/KgTt8Cz7AHM/hqdefault.jpg`,
      youtubeUrl: "https://youtube.com/shorts/KgTt8Cz7AHM?si=OJoz5mxmPnJLZdAa",
      embedId: "KgTt8Cz7AHM",
      isShort: true,
      featured: true,
    },
    {
      id: 2,
      title: "Get Maximum Value for Your Old Car",
      description: "Discover how to maximize the value of your old vehicle through our premium scrapping service.",
      duration: "0:58",
      views: "12.7K",
      date: "May 10, 2024",
      category: "Educational",
      thumbnail: `https://i.ytimg.com/vi/Jz3jmV8RaaY/hqdefault.jpg`,
      youtubeUrl: "https://youtube.com/shorts/Jz3jmV8RaaY?si=9QbieAV7TbT-LYF4",
      embedId: "Jz3jmV8RaaY",
      isShort: true,
      featured: true,
    },
    {
      id: 3,
      title: "How Vehicle Recycling Works",
      description: "Step-by-step explanation of our comprehensive vehicle recycling process and environmental benefits.",
      duration: "0:55",
      views: "18.4K",
      date: "May 5, 2024",
      category: "Educational",
      thumbnail: `https://i.ytimg.com/vi/yG7hkDNSQDM/hqdefault.jpg`,
      youtubeUrl: "https://youtube.com/shorts/yG7hkDNSQDM?si=Odbmx7hoJ8JKXZuG",
      embedId: "yG7hkDNSQDM",
      isShort: true,
      featured: true,
    },
    {
      id: 4,
      title: "Environmental Benefits of Car Scrapping",
      description: "Learn about the positive environmental impact of proper vehicle recycling through our sustainable practices.",
      duration: "0:52",
      views: "14.8K",
      date: "April 28, 2024",
      category: "Awareness Campaigns",
      thumbnail: `https://i.ytimg.com/vi/01CHpW_Iv0w/hqdefault.jpg`,
      youtubeUrl: "https://youtube.com/shorts/01CHpW_Iv0w?si=MAihthA3R7TLJBwp",
      embedId: "01CHpW_Iv0w",
      isShort: true,
      featured: true,
    },
    {
      id: 5,
      title: "Documentation Required for Scrapping",
      description: "Overview of all the necessary paperwork and documentation needed for a smooth car scrapping process.",
      duration: "0:54",
      views: "11.3K",
      date: "April 22, 2024",
      category: "Educational",
      thumbnail: `https://i.ytimg.com/vi/bdh8ToO0pT4/hqdefault.jpg`,
      youtubeUrl: "https://youtube.com/shorts/bdh8ToO0pT4?si=dExlr06V8U3rliDB",
      embedId: "bdh8ToO0pT4",
      isShort: true,
      featured: true,
    },
    {
      id: 6,
      title: "Complete Guide to Car Scrapping Process",
      description: "Comprehensive walkthrough of our end-to-end car scrapping process from pickup to certification.",
      duration: "8:45",
      views: "25.6K",
      date: "April 15, 2024",
      category: "Recycling Process",
      thumbnail: `https://i.ytimg.com/vi/X2MYNt5FevI/hqdefault.jpg`,
      youtubeUrl: "https://youtu.be/X2MYNt5FevI?si=raqVioxqz5okek",
      embedId: "X2MYNt5FevI",
      isShort: false,
      featured: true,
    }
  ];

  // Replace the videos array with the new Cloudinary videos
  const videos = [
    {
      id: 7,
      title: "Car Scrap Process Overview",
      description: "A comprehensive walkthrough of our eco-friendly car scrapping process from start to finish.",
      duration: "0:59",
      views: "12.5K",
      date: "September 27, 2025",
      category: "Process Overview",
      thumbnail: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760018566/WhatsApp_Video_2025-09-27_at_13.25.59_7b52d783_txwaak.jpg",
      videoUrl: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760018566/WhatsApp_Video_2025-09-27_at_13.25.59_7b52d783_txwaak.mp4",
      featured: false,
    },
    {
      id: 8,
      title: "Eco-Friendly Vehicle Disposal",
      description: "See how we properly dispose of vehicles while maintaining strict environmental standards.",
      duration: "0:57",
      views: "9.8K",
      date: "September 27, 2025",
      category: "Recycling Process",
      thumbnail: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760018155/WhatsApp_Video_2025-09-27_at_13.26.10_bcc7cc2f_uskgxc.jpg",
      videoUrl: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760018155/WhatsApp_Video_2025-09-27_at_13.26.10_bcc7cc2f_uskgxc.mp4",
      featured: false,
    },
    {
      id: 9,
      title: "Dismantling and Parts Recovery",
      description: "Watch our specialized team efficiently dismantle vehicles and recover valuable parts for recycling.",
      duration: "0:53",
      views: "11.2K",
      date: "September 27, 2025",
      category: "Behind the Scenes",
      thumbnail: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760017940/WhatsApp_Video_2025-09-27_at_13.28.20_ab4a75c6_ebwogt.jpg",
      videoUrl: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760017940/WhatsApp_Video_2025-09-27_at_13.28.20_ab4a75c6_ebwogt.mp4",
      featured: false,
    }
  ];

  // Add modal state for video playback
  const [activeVideo, setActiveVideo] = useState<null | {
    embedId?: string;
    title: string;
    isShort?: boolean;
    videoUrl?: string;
    isCloudinary?: boolean;
  }>(null);
  
  const regularVideos = videos.filter(video => !video.featured);

  return (
    <div className="min-h-screen bg-background">
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-[#00441c] text-white py-24 overflow-hidden">
        {/* Background Image with better overlay and more visible effect */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80')",
            backgroundBlendMode: "multiply",
            opacity: 0.6,
          }}
        ></div>
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00441c]/90 via-[#005023]/70 to-[#006128]/60 z-5"></div>
        
        {/* Video play icon decorative elements */}
        <div className="absolute top-1/4 left-[10%] w-16 h-16 bg-[#40c67d]/20 rounded-full animate-pulse backdrop-blur-sm z-5"></div>
        <div className="absolute bottom-1/3 right-[15%] w-24 h-24 bg-[#40c67d]/10 rounded-full animate-bounce backdrop-blur-sm z-5" style={{ animationDuration: '8s' }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-20">
          {/* Premium Video Content badge above */}
          <div className="mb-6">
            <div className="inline-flex items-center px-5 py-2 bg-[#00441c]/50 border border-[#40c67d]/30 rounded-full backdrop-blur-md">
              <PlayCircle className="mr-2 h-4 w-4 text-white" />
              <span className="text-white text-base font-medium">Premium Video Content</span>
            </div>
          </div>
          
          {/* Video Gallery heading with emphasized styling */}
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-white">Video</span> <span className="text-[#40c67d]">Gallery</span>
          </h1>
          <div className="w-36 h-1 bg-[#40c67d] mx-auto mb-6"></div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto animate-slide-up leading-relaxed mb-8">
            Watch our collection of educational videos, customer testimonials, and behind-the-scenes 
            content about eco-friendly car recycling and sustainable practices
          </p>
          
          {/* Featured video stats */}
          <div className="flex items-center justify-center space-x-8 mt-10">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-full bg-[#00441c]/60 flex items-center justify-center backdrop-blur-sm border border-[#40c67d]/20">
                <PlayCircle className="h-4 w-4 text-[#40c67d]" />
              </div>
              <div className="text-left">
                <p className="text-[#40c67d] font-medium text-sm">{videos.length}+ Videos</p>
                <p className="text-white/60 text-xs">To explore</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-full bg-[#00441c]/60 flex items-center justify-center backdrop-blur-sm border border-[#40c67d]/20">
                <Clock className="h-4 w-4 text-[#40c67d]" />
              </div>
              <div className="text-left">
                <p className="text-[#40c67d] font-medium text-sm">45+ Minutes</p>
                <p className="text-white/60 text-xs">Of content</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-full bg-[#00441c]/60 flex items-center justify-center backdrop-blur-sm border border-[#40c67d]/20">
                <Eye className="h-4 w-4 text-[#40c67d]" />
              </div>
              <div className="text-left">
                <p className="text-[#40c67d] font-medium text-sm">100K+ Views</p>
                <p className="text-white/60 text-xs">And growing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Content with Green Gradient Background */}
      <section className="py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements similar to HowItWorks */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Featured Videos - Enhanced heading with better aesthetics */}
          <div className="mb-16">
            {/* Improved section header with decoration */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="px-5 py-2 bg-premium-green/10 border border-primary-glow/30 rounded-full text-primary text-base font-medium">
                  <PlayCircle className="inline-block mr-2 h-4 w-4" />
                  Featured Collection
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Our <span className="bg-gradient-premium bg-clip-text text-transparent">Featured</span> Videos
              </h2>
              <div className="w-32 h-1 bg-premium-green mx-auto mt-4 mb-2"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our hand-picked selection of the most informative and engaging videos about car scrapping and recycling
              </p>
            </div>
            
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
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => setActiveVideo({
                        embedId: video.embedId,
                        title: video.title,
                        isShort: video.isShort
                      })}
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-primary">
                      {video.isShort ? "YouTube Short" : "Featured"}
                    </Badge>
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
                      <a 
                        href={video.youtubeUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveVideo({
                            embedId: video.embedId,
                            title: video.title,
                            isShort: video.isShort
                          });
                        }}
                      >
                        <span className="mr-1">Watch</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Videos - Also enhancing this heading for consistency */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                More Videos
                <div className="w-24 h-1 bg-muted mx-auto mt-3"></div>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularVideos.map((video, index) => (
                <Card key={video.id} className="group shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail || `https://res.cloudinary.com/dmhabztbf/video/upload/so_0/v1760018566/${video.videoUrl?.split('/').pop()}.jpg`}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => setActiveVideo({
                        title: video.title,
                        videoUrl: video.videoUrl,
                        isCloudinary: true
                      })}
                    >
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
                    
                    <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                      {video.description}
                    </p>
                    
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
              More Videos Comming Soon
            </button>
          </div>
        </div>
      </section>
      
      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-background rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full animate-fade-in relative">
            {/* Close button - replaced the ExternalLink icon with X for clarity */}
            <button
              className="absolute top-4 right-4 z-10 bg-black/70 text-white hover:bg-black/90 hover:text-red-500 rounded-full p-2.5 transition-colors duration-300"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>

            <div className="aspect-video w-full">
              {activeVideo.isCloudinary ? (
                <video
                  className="w-full h-full"
                  src={activeVideo.videoUrl}
                  title={activeVideo.title}
                  controls
                  autoPlay
                ></video>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.embedId}${activeVideo.isShort ? '?loop=1&playlist=' + activeVideo.embedId : ''}`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            
            <div className="p-4 bg-background flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{activeVideo.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {activeVideo.isCloudinary ? 'GreenWrench Original' : activeVideo.isShort ? 'YouTube Short' : 'YouTube Video'}
                </p>
              </div>
              
              <button 
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
                onClick={() => setActiveVideo(null)}
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;