import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote, Play, Video } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "Lynbrook, VIC",
    rating: 5,
    text: "The VLAN setup gives me peace of mind. My work laptop is completely separate from our smart home devices. Installation was professional and thorough.",
    hasVideo: true
  },
  {
    name: "Michael Davidson",
    location: "Hampton Park, VIC",
    rating: 5,
    text: "Finally an ISP that understands CCTV needs. My 8 security cameras run flawlessly on their dedicated network. No more dropouts during critical moments.",
    hasVideo: false
  },
  {
    name: "Emily Roberts",
    location: "Cranbourne, VIC",
    rating: 5,
    text: "Switched from my old provider and the difference is night and day. The Pro plan with 500 Mbps handles our entire family gaming, streaming, and working from home.",
    hasVideo: true
  },
  {
    name: "James Kumar",
    location: "Berwick, VIC",
    rating: 5,
    text: "As a small business owner working from home, the priority support and secure network setup are worth every cent. Professional service from start to finish.",
    hasVideo: false
  },
  {
    name: "Lisa Thompson",
    location: "Narre Warren, VIC",
    rating: 5,
    text: "The guest WiFi feature is perfect for our Airbnb. Visitors get internet access without compromising our home network security. Brilliant solution!",
    hasVideo: true
  }
];

const VideoTestimonialCard = ({ name }: { name: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-primary/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-50'}`} />
        {/* Animated wave effect */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`wave-${name}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`M0,${isHovered ? '40' : '50'} Q25,${isHovered ? '30' : '45'} 50,${isHovered ? '40' : '50'} T100,${isHovered ? '40' : '50'} V100 H0 Z`}
            fill={`url(#wave-${name})`}
            className="transition-all duration-500"
          />
        </svg>
      </div>
      
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
        </div>
      </div>
      
      {/* Video label */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
        <Video className="w-3 h-3 text-primary" />
        <span className="text-xs font-medium text-foreground">Video Review</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="heading-lg mb-4">
            What Our Customers Say
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Real reviews from real customers across Melbourne
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel 
          className="max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Video thumbnail for video testimonials */}
                  {testimonial.hasVideo && (
                    <VideoTestimonialCard name={testimonial.name} />
                  )}
                  
                  <div className="p-6">
                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                    
                    {/* Rating */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                    
                    {/* Quote text */}
                    <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">5,000+</p>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">99.9%</p>
            <p className="text-sm text-muted-foreground">Uptime SLA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
