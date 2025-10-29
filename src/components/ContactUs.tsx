import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactUs = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // Here you would typically send the form data to your server
    alert("Form submitted successfully! We'll get back to you soon.");
    form.reset();
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-premium-green/30 via-premium-green/10 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-premium-green/10 via-transparent to-transparent"></div>
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Have questions about our eco-friendly services or want to join our recycling initiative?
            Reach out to us today and our team will get back to you soon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-white to-premium-green/5">
              <div className="h-[250px] sm:h-[300px] md:h-[400px] w-full rounded-t-xl overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.526150596489!2d77.17348777550126!3d28.643960575658515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzM4LjMiTiA3N8KwMTAnMzMuOCJF!5e0!3m2!1sen!2sin!4v1761726914318!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="GreenWrench Location"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <CardContent className="p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-premium bg-clip-text text-transparent">Contact Information</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-gradient-to-br from-primary to-premium-green p-2 sm:p-3 rounded-full shadow-md flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm sm:text-base">Our Location</h4>
                      <span className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                        25/36, East Patel Nagar, <br />
                        New Delhi, Delhi, India
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-gradient-to-br from-primary to-premium-green p-2 sm:p-3 rounded-full shadow-md flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm sm:text-base">Phone Number</h4>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground">+91 9311068290</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-gradient-to-br from-primary to-premium-green p-2 sm:p-3 rounded-full shadow-md flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm sm:text-base">Email Address</h4>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-all">greenwrenchsolutions@gamil.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-gradient-to-br from-primary to-premium-green p-2 sm:p-3 rounded-full shadow-md flex-shrink-0">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm sm:text-base">Working Hours</h4>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-none bg-gradient-to-br from-white to-premium-green/5">
            <CardContent className="p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-premium bg-clip-text text-transparent">Send us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="h-10 sm:h-12 text-sm sm:text-base" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your.email@example.com" 
                              className="h-10 sm:h-12 text-sm sm:text-base" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What is this regarding?" 
                            className="h-10 sm:h-12 text-sm sm:text-base" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please share your thoughts or questions..." 
                            className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full h-10 sm:h-12 bg-gradient-to-r from-primary to-premium-green hover:from-primary/90 hover:to-premium-green/90 text-white shadow-lg text-sm sm:text-base" 
                    size="lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;