import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

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
    },
    {
      id: 2,
      title: "New Government Policies on Vehicle Scrapping in India 2024",
      excerpt: "Stay updated with the latest government regulations and incentives for vehicle scrapping. Know your rights and benefits under the new policy framework.",
      author: "Rajesh Kumar",
      date: "March 12, 2024",
      category: "Policy",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "How to Get the Best Price for Your Scrap Car: Expert Tips",
      excerpt: "Maximize the value of your old vehicle with our expert tips. Learn what factors affect scrap car prices and how to prepare your car for sale.",
      author: "Priya Sharma",
      date: "March 10, 2024",
      category: "Tips & Guides",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Understanding the Car Recycling Process: From Collection to Reuse",
      excerpt: "A detailed walkthrough of how cars are recycled, what materials are recovered, and how they're reused in new products and vehicles.",
      author: "Mike Johnson",
      date: "March 8, 2024",
      category: "Process",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Legal Documentation for Car Scrapping: What You Need to Know",
      excerpt: "Complete guide to all the paperwork and legal requirements for scrapping your car. Ensure a smooth and compliant disposal process.",
      author: "Adv. Neha Gupta",
      date: "March 5, 2024",
      category: "Legal",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Sustainable Transportation: The Future of Automotive Industry",
      excerpt: "Explore how car recycling and sustainable practices are shaping the future of transportation and reducing carbon footprint.",
      author: "Dr. Amit Patel",
      date: "March 3, 2024",
      category: "Future Trends",
      readTime: "9 min read",
    },
  ];

  const categories = ["All", "Environment", "Policy", "Tips & Guides", "Process", "Legal", "Future Trends"];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Stay informed with the latest insights on eco-friendly car recycling, industry updates, and sustainability practices
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          
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
              <Card key={post.id} className="h-full shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
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
                  
                  <Button variant="outline" className="w-full group">
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
        </div>
      </section>
    </div>
  );
};

export default Blog;