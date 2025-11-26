import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "Lynbrook, VIC",
    rating: 5,
    text: "The VLAN setup gives me peace of mind. My work laptop is completely separate from our smart home devices. Installation was professional and thorough."
  },
  {
    name: "Michael Davidson",
    location: "Hampton Park, VIC",
    rating: 5,
    text: "Finally an ISP that understands CCTV needs. My 8 security cameras run flawlessly on their dedicated network. No more dropouts during critical moments."
  },
  {
    name: "Emily Roberts",
    location: "Cranbourne, VIC",
    rating: 5,
    text: "Switched from my old provider and the difference is night and day. The Pro plan with 500 Mbps handles our entire family gaming, streaming, and working from home."
  },
  {
    name: "James Kumar",
    location: "Berwick, VIC",
    rating: 5,
    text: "As a small business owner working from home, the priority support and secure network setup are worth every cent. Professional service from start to finish."
  },
  {
    name: "Lisa Thompson",
    location: "Narre Warren, VIC",
    rating: 5,
    text: "The guest WiFi feature is perfect for our Airbnb. Visitors get internet access without compromising our home network security. Brilliant solution!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real reviews from real customers across Melbourne
          </p>
        </div>

        <Carousel 
          className="max-w-5xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 h-full hover:shadow-xl transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
