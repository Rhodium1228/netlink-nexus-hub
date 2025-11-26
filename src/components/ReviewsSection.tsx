import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const reviews = [
  {
    name: "Sarah M.",
    location: "Brighton",
    rating: 5,
    text: "Switched from Telstra to GI NET for the Pro plan. The VLAN security gives me peace of mind with all our smart home devices. Installation was seamless and the technician explained everything clearly."
  },
  {
    name: "James K.",
    location: "Glen Waverley",
    rating: 5,
    text: "Finally found an ISP that understands CCTV needs. The dedicated IoT network keeps my 8 security cameras running smoothly without affecting our work-from-home setup. Highly recommend!"
  },
  {
    name: "Michelle T.",
    location: "Doncaster",
    rating: 5,
    text: "The Ultra plan is incredible. Gaming, 4K streaming, and multiple video calls all at once with zero lag. Customer support is actually responsive, unlike our previous provider."
  },
  {
    name: "David L.",
    location: "Lynbrook",
    rating: 5,
    text: "Best internet service we've had. The guest network feature is perfect for our Airbnb. Visitors get WiFi without accessing our home network. Smart and secure."
  },
  {
    name: "Emma R.",
    location: "Clayton",
    rating: 5,
    text: "The onsite installation was worth it. They positioned the router perfectly, set up all three VLANs, and even helped connect our printer. Professional service from start to finish."
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied Melbourne families and businesses
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-premium hover:border-primary/50 transition-all">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed mb-6">
                      "{review.text}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-bold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
