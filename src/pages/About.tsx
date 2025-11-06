import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wifi, Target, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide fast, reliable internet connectivity to every home and business, empowering communities to thrive in the digital age."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We believe in putting our customers at the heart of everything we do, delivering exceptional service and support 24/7."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to maintaining the highest standards in network infrastructure and customer satisfaction."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Wifi className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About GiNet
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              GiNet is a leading internet service provider dedicated to delivering high-speed, 
              reliable connectivity to homes and businesses. With years of experience in the 
              telecommunications industry, we've built a reputation for excellence and innovation.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to bridge the digital divide, GiNet started as a small 
                local provider with big ambitions. We recognized that fast, reliable internet 
                access is no longer a luxury—it's a necessity for work, education, entertainment, 
                and staying connected with loved ones.
              </p>
              <p>
                Over the years, we've invested heavily in cutting-edge fiber-optic infrastructure 
                and wireless technology to ensure our customers enjoy the fastest speeds and most 
                reliable connections available. Our network spans across multiple regions, serving 
                thousands of satisfied customers.
              </p>
              <p>
                Today, GiNet stands as a trusted name in internet services, known for our 
                transparent pricing, exceptional customer support, and commitment to innovation. 
                We're not just providing internet—we're enabling possibilities.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1Gbps</div>
                <div className="text-muted-foreground">Max Speed</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
