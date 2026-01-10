import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Users, TrendingUp, Award } from "lucide-react";
import logo from "@/assets/logo.png";

const newsItems = [
  {
    id: 1,
    title: "National Member Council Board Officially Announced",
    description: "The newly elected National Member Council (NMC) leadership team for 2025 has been officially announced. The 15-member board represents all regions of Kenya and will oversee national programs, policy direction, and strategic partnerships for the movement. Elections saw unprecedented participation with over 200,000 members casting their votes.",
    date: "January 15, 2025",
    badge: "Official",
    icon: Award,
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "County Chapter Leaders Elected Across All 47 Counties",
    description: "Following rigorous grassroots elections, all 47 county chapters have successfully elected their leadership teams. These leaders will coordinate local programs, represent member interests, and serve as the bridge between communities and national leadership. Training programs for new leaders begin next month.",
    date: "January 10, 2025",
    badge: "Leadership",
    icon: Users,
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Youth Peace Summit Draws 10,000+ Attendees in Nairobi",
    description: "The annual Youth Peace Summit brought together over 10,000 young Kenyans to discuss national cohesion, peaceful coexistence, and the role of youth in maintaining stability. Key speakers included government officials, civil society leaders, and international partners who praised the movement's commitment to peace.",
    date: "January 5, 2025",
    badge: "Event",
    icon: TrendingUp,
    readTime: "6 min read",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/20 text-primary rounded-full">
            News & Updates
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest From Kabila La Vijana
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay informed about our activities, leadership updates, member achievements, 
            and the impact we're making across Kenya's 47 counties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group card-gradient rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-xs">{item.readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <Link 
                    to="/blog" 
                    className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="glass-card rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto mb-10">
          <h3 className="font-heading font-bold text-foreground text-xl mb-2">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for weekly updates on programs, events, and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
            />
            <Button variant="hero" className="px-6">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button asChild variant="glass" size="lg">
            <Link to="/blog" className="gap-2">
              View All News & Updates <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
