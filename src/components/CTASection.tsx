import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, HandHeart, Sparkles, CheckCircle, Phone, Mail, MessageSquare } from "lucide-react";

const memberBenefits = [
  "Access to leadership training and mentorship programs",
  "Networking with 500,000+ youth across Kenya",
  "Participation in national forums and dialogues",
  "Skills development workshops and certifications",
  "Community service and volunteer opportunities",
  "Exclusive member events and cultural exchanges",
];

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
      {/* Wave Decoration */}
      <div className="wave-decoration opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-foreground/10 text-foreground rounded-full">
              Join the Movement
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Be Part of Kenya's Future
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-6 max-w-3xl mx-auto">
              Whether you want to develop your leadership skills, serve your community, or connect
              with like-minded youth across Kenya, Kabila La Vijana offers a pathway for you.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Membership is free and open to all Kenyan citizens aged 18-35. Join today and
              become part of a movement that's shaping our nation's destiny.
            </p>
          </div>

          {/* Ways to Get Involved */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Join as a Member</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Register for free and gain access to all programs, events, and opportunities
                available to Kabila La Vijana members.
              </p>
              <span className="text-primary text-sm font-medium">Free Registration</span>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover:border-secondary/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
                <HandHeart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Volunteer</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Contribute your time, skills, and passion to community programs. From event
                planning to mentorship, there's a role for everyone.
              </p>
              <span className="text-secondary text-sm font-medium">Multiple Opportunities</span>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover:border-kabila-gold/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kabila-gold/20 mb-4">
                <Sparkles className="h-8 w-8 text-kabila-gold" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Lead</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Step into leadership roles at local, county, or national levels. Elections are
                held regularly for positions across the movement.
              </p>
              <span className="text-kabila-gold text-sm font-medium">Open Positions</span>
            </div>
          </div>

          {/* Member Benefits */}
          <div className="bg-background/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 mb-16">
            <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-6 text-center">
              Member Benefits
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="flex items-center justify-center gap-3 p-4 glass-card rounded-xl">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground text-sm">+254 706 055363</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 glass-card rounded-xl">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground text-sm">info@kabilalavijana.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 glass-card rounded-xl">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground text-sm">WhatsApp: +254 706 055363</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/membership">Register Now - It's Free</Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
