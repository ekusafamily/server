import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Zap, Shield, GraduationCap, Globe, Handshake } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const features = [
  {
    icon: Users,
    title: "Youth Network",
    description: "Connect with over 500,000 young Kenyans aged 18-35 across all 47 counties, building lasting friendships and professional networks.",
  },
  {
    icon: Target,
    title: "Leadership Development",
    description: "Access comprehensive training in governance, public speaking, project management, and community leadership skills.",
  },
  {
    icon: Heart,
    title: "National Unity",
    description: "Break down ethnic and regional barriers through cross-cultural exchanges, dialogue forums, and collaborative projects.",
  },
  {
    icon: Zap,
    title: "Community Action",
    description: "Participate in impactful initiatives including environmental conservation, health outreach, and education support programs.",
  },
];

const values = [
  { icon: Shield, title: "Integrity", description: "We uphold transparency and accountability in all our actions" },
  { icon: GraduationCap, title: "Excellence", description: "We pursue the highest standards in youth development" },
  { icon: Globe, title: "Inclusivity", description: "We welcome all Kenyan youth regardless of background" },
  { icon: Handshake, title: "Collaboration", description: "We believe in the power of working together" },
];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Youth community meeting in Kenya"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />

            {/* Floating Stats Card */}
            <div className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-4 backdrop-blur-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-heading font-bold text-xl text-primary">2020</div>
                  <div className="text-muted-foreground text-xs">Founded</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl text-primary">47</div>
                  <div className="text-muted-foreground text-xs">Counties</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl text-primary">3K+</div>
                  <div className="text-muted-foreground text-xs">Members</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/20 text-primary rounded-full">
              About Our Movement
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Kabila La Vijana ("Tribe of Youth" in Swahili) is Kenya's largest non-partisan youth
              organization, established to empower young citizens aged 18–35 with the skills,
              networks, and opportunities needed to shape our nation's future.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded on the principle that Kenya's youth are not just the leaders of tomorrow,
              but the drivers of change today, we have grown from a grassroots initiative to a
              nationwide movement with representation in all 47 counties.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our members participate in governance forums, skills training workshops, community
              service projects, and national dialogue sessions—all designed to foster leadership,
              unity, and civic responsibility.
            </p>

            <Button asChild variant="hero" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-secondary/20 text-secondary rounded-full">
              What We Offer
            </span>
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Your Gateway to Leadership & Impact
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              As a member of Kabila La Vijana, you gain access to transformative programs and
              a supportive community dedicated to your growth and Kenya's development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-lg mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-card rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-kabila-gold/20 text-kabila-gold rounded-full">
              Our Core Values
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Principles That Guide Us
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-kabila-gold/20 mb-4">
                  <value.icon className="h-7 w-7 text-kabila-gold" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
