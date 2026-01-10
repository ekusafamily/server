import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Nairobi, Kenya" },
  { icon: Phone, label: "Phone", value: "+254 700 000 000" },
  { icon: Mail, label: "Email", value: "info@kabilalavijana.com" },
  { icon: Clock, label: "Hours", value: "Mon - Fri: 8am - 5pm" },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Kabila La Vijana</title>
        <meta name="description" content="Get in touch with Kabila La Vijana. We're here to answer your questions about youth empowerment and membership." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
            <div className="wave-decoration opacity-50" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Contact Us
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  We'd love to hear from you
                </p>
              </div>
            </div>
          </section>

          {/* Contact Content */}
          <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Have questions about membership, programs, or how to get involved? Reach out to us through any of the channels below.
                  </p>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/20">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground">{item.label}</h4>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="card-gradient rounded-2xl p-8 border border-border">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message..." rows={5} />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;