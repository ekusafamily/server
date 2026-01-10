import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, MapPin, Calendar, MessageCircle } from "lucide-react";

const communities = [
  { county: "Nairobi", members: "500+", leader: "John Kamau" },
  { county: "Mombasa", members: "200+", leader: "Fatuma Hassan" },
  { county: "Kisumu", members: "200+", leader: "Ochieng' Otieno" },
  { county: "Nakuru", members: "200+", leader: "Grace Wanjiku" },
  { county: "Eldoret", members: "100+", leader: "Kiprop Kibet" },
  { county: "Meru", members: "150+", leader: "Peter Muthomi" },
  { county: "Embu", members: "500+", leader: "---name----" },
];

const Community = () => {
  return (
    <>
      <Helmet>
        <title>Community | Kabila La Vijana</title>
        <meta name="description" content="Connect with Kabila La Vijana communities across all 47 counties of Kenya." />
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
                  Our Community
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Connect with fellow youth across all 47 counties
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Users, label: "Total Members", value: "3,000+" },
                  { icon: MapPin, label: "Counties Active", value: "47" },
                  { icon: Calendar, label: "Events Held", value: "100+" },
                  { icon: MessageCircle, label: "Active Groups", value: "60+" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-background rounded-2xl p-6 text-center border border-border">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="font-heading text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* County Communities */}
          <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                County Communities
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {communities.map((community) => (
                  <div
                    key={community.county}
                    className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-primary/20">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg">{community.county}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">Members: <span className="text-foreground font-medium">{community.members}</span></p>
                      <p className="text-muted-foreground">Leader: <span className="text-foreground font-medium">{community.leader}</span></p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button asChild variant="hero" size="lg">
                  <Link to="/membership">Join Your County</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Community;