import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, X } from "lucide-react";
import React, { useState } from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Environmental Impact of Car Recycling: A Comprehensive Guide",
      excerpt: "Learn how car recycling helps reduce environmental pollution and contributes to a sustainable future. Discover the benefits of eco-friendly vehicle disposal.",
      author: "Dr. Sarah Green",
      date: "March 15, 2024",
      category: "Environment",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "New Government Policies on Vehicle Scrapping in India 2024",
      excerpt: "Stay updated with the latest government regulations and incentives for vehicle scrapping. Know your rights and benefits under the new policy framework.",
      author: "Rajesh Kumar",
      date: "March 12, 2024",
      category: "Policy",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "How to Get the Best Price for Your Scrap Car: Expert Tips",
      excerpt: "Maximize the value of your old vehicle with our expert tips. Learn what factors affect scrap car prices and how to prepare your car for sale.",
      author: "Priya Sharma",
      date: "March 10, 2024",
      category: "Tips & Guides",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Understanding the Car Recycling Process: From Collection to Reuse",
      excerpt: "A detailed walkthrough of how cars are recycled, what materials are recovered, and how they're reused in new products and vehicles.",
      author: "Mike Johnson",
      date: "March 8, 2024",
      category: "Process",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "Legal Documentation for Car Scrapping: What You Need to Know",
      excerpt: "Complete guide to all the paperwork and legal requirements for scrapping your car. Ensure a smooth and compliant disposal process.",
      author: "Adv. Neha Gupta",
      date: "March 5, 2024",
      category: "Legal",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      title: "Sustainable Transportation: The Future of Automotive Industry",
      excerpt: "Explore how car recycling and sustainable practices are shaping the future of transportation and reducing carbon footprint.",
      author: "Dr. Amit Patel",
      date: "March 3, 2024",
      category: "Future Trends",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const categories = ["All", "Environment", "Policy", "Tips & Guides", "Process", "Legal", "Future Trends"];

  // Modal state
  const [openModal, setOpenModal] = useState<null | typeof blogPosts[0]>(null);

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#004d25] via-[#00592a] to-[#005628] text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5, // Reduced opacity to let the deep green show through more
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004d25]/80 via-[#00592a]/70 to-[#005628]/60 z-10"></div>
        
        {/* Decorative circles */}
        <div className="absolute -left-24 top-1/4 w-64 h-64 bg-[#007c3e]/20 rounded-full blur-3xl z-10"></div>
        <div className="absolute -right-32 bottom-0 w-80 h-80 bg-[#007c3e]/20 rounded-full blur-3xl z-10"></div>
        <div className="absolute right-1/4 top-1/3 w-40 h-40 bg-[#008f47]/20 rounded-full blur-2xl z-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white text-lg font-semibold backdrop-blur-sm">
              📚 Knowledge Hub
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-extrabold mb-4">
            <span className="text-white">Our </span>
            <span className="text-[#40c67d]">Blog</span>
          </h1>
          
          {/* Animated underline similar to the image */}
          <div className="w-40 h-1 bg-[#40c67d] mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay informed with the latest insights on eco-friendly car recycling, 
            industry updates, and sustainability practices
          </p>
          
          {/* Stats display similar to the image */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{blogPosts.length}+</div>
                <div className="text-white/70">Articles</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 mr-4">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{new Set(blogPosts.map(post => post.author)).size}</div>
                <div className="text-white/70">Expert Contributors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 relative bg-gradient-to-b from-white via-premium-green/20 to-premium-green/30 overflow-hidden">
        {/* Optional: Decorative gradients for extra effect, similar to HowItWorks */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-green-200/10 to-emerald-300/10 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="h-full shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Blog Image */}
                <div className="w-full h-48 rounded-t-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6 h-full flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  {/* Description below image */}
                  <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span className="text-primary font-medium">{post.readTime}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group mt-auto"
                    onClick={() => setOpenModal(post)}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              Load More Articles
            </Button>
          </div>

          {/* Modal Popup */}
          {openModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white rounded-lg shadow-xl max-w-lg w-full relative animate-fade-in">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                  onClick={() => setOpenModal(null)}
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="w-full h-56 rounded-t-lg overflow-hidden">
                  <img
                    src={openModal.image}
                    alt={openModal.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                    {openModal.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-2">{openModal.title}</h2>
                  <div className="flex items-center text-sm text-muted-foreground mb-4 gap-4">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" /> {openModal.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {openModal.date}
                    </span>
                    <span className="text-primary font-medium">{openModal.readTime}</span>
                  </div>
                  <p className="text-foreground mb-4">{openModal.excerpt}</p>
                  {/* Placeholder for full content */}
                  <p className="text-muted-foreground">
                    {/* Replace this with real content if available */}
                    This is a demo modal. Replace this with the full blog content as needed.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;