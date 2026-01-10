import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const events = [
  {
    id: 1,
    title: "Youth Leadership & Governance Workshop",
    date: "April 30, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "KICC, Nairobi",
    description: "A comprehensive full-day workshop focused on developing essential leadership skills, understanding Kenya's governance structures, and preparing youth for positions in public service. Facilitated by experienced leaders from government, civil society, and the private sector.",
    spots: "Limited to 500 participants",
    type: "Workshop",
  },
  {
    id: 2,
    title: "National Community Service Day",
    date: "May 5, 2026",
    time: "7:00 AM - 12:00 PM",
    location: "All 47 Counties",
    description: "Join thousands of Kabila La Vijana members across Kenya for our quarterly community service initiative. Activities include environmental cleanup, tree planting, school renovations, and health outreach programs. Each county chapter will organize local activities.",
    spots: "Open to all members",
    type: "Service",
  },
  {
    id: 3,
    title: "Youth Economic Empowerment Summit",
    date: "May 15, 2026",
    time: "8:00 AM - 5:00 PM",
    location: "Kenyatta University, Nairobi",
    description: "Connect with entrepreneurs, investors, and mentors at our annual economic summit. Learn about business opportunities, access to capital, skills training programs, and success stories from young Kenyan entrepreneurs who have built thriving businesses.",
    spots: "1,000 slots available",
    type: "Summit",
  },
  {
    id: 4,
    title: "Cross-County Cultural Exchange",
    date: "May 22-24, 2026",
    time: "Full 3-Day Program",
    location: "Mombasa County",
    description: "A three-day immersive experience bringing together youth from different counties to celebrate Kenya's diverse cultures, traditions, and heritage. Features cultural performances, dialogue sessions, and team-building activities designed to foster national unity.",
    spots: "200 delegates from each county",
    type: "Exchange",
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-secondary/20 text-secondary rounded-full">
            Get Involved
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Upcoming Events & Programs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From leadership workshops to community service days, there's always an opportunity 
            to learn, grow, and make an impact. Register for upcoming events and be part of the movement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Event Type Badge */}
              <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
                {event.type}
              </span>
              
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="h-16 w-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1 pr-16">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 text-primary shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="h-4 w-4 text-primary shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Users className="h-4 w-4 text-secondary shrink-0" />
                      <span className="text-secondary">{event.spots}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto">
                    Register Now <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Calendar CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Can't find an event near you? Check our full calendar for county-specific programs.
          </p>
          <Button asChild variant="glass" size="lg">
            <Link to="/programs" className="gap-2">
              View Full Event Calendar <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;


