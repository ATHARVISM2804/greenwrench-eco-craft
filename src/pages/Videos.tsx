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
      
      {/* Enhanced Hero Section - Mobile Optimized */}
      <section className="relative bg-[#00441c] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background Image - Made more visible */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1759240156977-ceac1f6a2c3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')",
            backgroundBlendMode: "multiply",
            opacity: 0.4,
          }}
        ></div>
        {/* Reduced gradient overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00441c]/70 via-[#005023]/50 to-[#006128]/40 z-5"></div>
        
        {/* Video play icon decorative elements - Hidden on mobile */}
        <div className="absolute top-1/4 left-[10%] w-12 sm:w-16 h-12 sm:h-16 bg-[#40c67d]/20 rounded-full animate-pulse backdrop-blur-sm z-5 hidden md:block"></div>
        <div className="absolute bottom-1/3 right-[15%] w-16 sm:w-24 h-16 sm:h-24 bg-[#40c67d]/10 rounded-full animate-bounce backdrop-blur-sm z-5 hidden md:block" style={{ animationDuration: '8s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          {/* Premium Video Content badge - Mobile Optimized */}
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center px-3 sm:px-5 py-2 bg-[#00441c]/50 border border-[#40c67d]/30 rounded-full backdrop-blur-md">
              <PlayCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white" />
              <span className="text-white text-sm sm:text-base font-medium">Premium Video Content</span>
            </div>
          </div>
          
          {/* Video Gallery heading - Mobile Optimized */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
            <span className="text-white">Video</span> <span className="text-[#40c67d]">Gallery</span>
          </h1>
          <div className="w-24 sm:w-36 h-1 bg-[#40c67d] mx-auto mb-4 sm:mb-6"></div>
          
          {/* Description - Mobile Optimized */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto animate-slide-up leading-relaxed mb-6 sm:mb-8 px-4">
            Watch our collection of educational videos, customer testimonials, and behind-the-scenes 
            content about eco-friendly car recycling and sustainable practices
          </p>
          
          {/* Featured video stats - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6 sm:mt-10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00441c]/60 flex items-center justify-center backdrop-blur-sm border border-[#40c67d]/20">
                <PlayCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#40c67d]" />
              </div>
              <div className="text-left">
                <p className="text-[#40c67d] font-medium text-sm">{videos.length}+ Videos</p>
                <p className="text-white/60 text-xs">To explore</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00441c]/60 flex items-center justify-center backdrop-blur-sm border border-[#40c67d]/20">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-[#40c67d]" />
              </div>
              <div className="text-left">
                <p className="text-[#40c67d] font-medium text-sm">45+ Minutes</p>
                <p className="text-white/60 text-xs">Of content</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00441c]/60 flex items-center justify-center backdrop-blur-sm border border-[#40c67d]/20">
                <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-[#40c67d]" />
              </div>
              <div className="text-left">
                <p className="text-[#40c67d] font-medium text-sm">100K+ Views</p>
                <p className="text-white/60 text-xs">And growing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Content - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 relative overflow-hidden">
        {/* Decorative elements - Hidden on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-premium-green/15 via-transparent to-transparent hidden md:block"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl hidden md:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Featured Videos - Mobile Optimized */}
          <div className="mb-12 sm:mb-16">
            {/* Section header - Mobile Optimized */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="px-3 sm:px-5 py-2 bg-premium-green/10 border border-primary-glow/30 rounded-full text-primary text-sm sm:text-base font-medium">
                  <PlayCircle className="inline-block mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Featured Collection
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Our <span className="bg-gradient-premium bg-clip-text text-transparent">Featured</span> Videos
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-premium-green mx-auto mt-3 sm:mt-4 mb-2"></div>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                Explore our hand-picked selection of the most informative and engaging videos about car scrapping and recycling
              </p>
            </div>
            
            {/* Featured Videos Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {featuredVideos.map((video, index) => (
                <Card key={video.id} className="group shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
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
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-primary text-xs">
                      {video.isShort ? "YouTube Short" : "Featured"}
                    </Badge>
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 text-white px-2 py-1 rounded text-xs sm:text-sm flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  
                  <CardContent className="p-4 sm:p-6">
                    <Badge variant="secondary" className="mb-2 sm:mb-3 text-xs">
                      {video.category}
                    </Badge>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                      {video.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-muted-foreground gap-2">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{video.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="truncate">{video.date}</span>
                        </div>
                      </div>
                      <button
                        className="text-primary hover:underline flex items-center self-start sm:self-auto"
                        onClick={() => setActiveVideo({
                          embedId: video.embedId,
                          title: video.title,
                          isShort: video.isShort
                        })}
                      >
                        <span className="mr-1">Watch</span>
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* More Videos Section - Mobile Optimized */}
          <div>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                More Videos
                <div className="w-16 sm:w-24 h-1 bg-muted mx-auto mt-2 sm:mt-3"></div>
              </h2>
            </div>
            
            {/* More Videos Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {regularVideos.map((video, index) => (
                <Card key={video.id} className="group shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail || `https://res.cloudinary.com/dmhabztbf/video/upload/so_0/v1760018566/${video.videoUrl?.split('/').pop()}.jpg`}
                      alt={video.title}
                      className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
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
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-5 w-5 sm:h-6 sm:w-6 text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  
                  <CardContent className="p-3 sm:p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {video.category}
                    </Badge>
                    
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs sm:text-sm mb-2 line-clamp-2">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{video.views}</span>
                      </div>
                      <span className="truncate">{video.date.split(' ')[1]} {video.date.split(' ')[2]}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Load More - Mobile Optimized */}
          <div className="text-center mt-8 sm:mt-12">
            <button className="px-6 sm:px-8 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-button transition-all duration-300 text-sm sm:text-base">
              More Videos Coming Soon
            </button>
          </div>
        </div>
      </section>
      
      {/* Video Modal - Mobile Optimized */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 p-2 sm:p-4">
          <div className="bg-background rounded-t-xl sm:rounded-xl overflow-hidden shadow-2xl w-full sm:max-w-4xl animate-fade-in relative">
            {/* Close button - Mobile Optimized */}
            <button
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-black/70 text-white hover:bg-black/90 hover:text-red-500 rounded-full p-2 sm:p-2.5 transition-colors duration-300"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 lucide lucide-x">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>

            <div className="aspect-video w-full" style={{ maxHeight: '70vh' }}>
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
            
            <div className="p-3 sm:p-4 bg-background flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold pr-8 sm:pr-0">{activeVideo.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {activeVideo.isCloudinary ? 'GreenWrench Original' : activeVideo.isShort ? 'YouTube Short' : 'YouTube Video'}
                </p>
              </div>
              
              <button 
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors text-sm sm:text-base self-start sm:self-auto"
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