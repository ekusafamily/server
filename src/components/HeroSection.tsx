import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Users, value: "3,000+", label: "Active Members" },
  { icon: MapPin, value: "47", label: "Counties Reached" },
  { icon: Award, value: "100+", label: "Programs Run" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Wave Decoration */}
      <div className="wave-decoration" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
            Kenya's Largest Youth Movement
          </span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            Empowering the Youth for a{" "}
            <span className="text-gradient">Better Tomorrow</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-4 max-w-3xl mx-auto">
            Kabila La Vijana unites Kenyan youth aged 18–35 through leadership development,
            civic engagement, and community action programs across all 47 counties.
          </p>

          <p className="text-muted-foreground text-base mb-10 max-w-2xl mx-auto">
            We believe in transcending tribal, political, and regional boundaries to build
            a united, prosperous Kenya driven by its young people.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild variant="hero" size="xl">
              <Link to="/membership">Become a Member</Link>
            </Button>
            <Button asChild variant="heroSecondary" size="xl">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="font-heading font-bold text-xl md:text-2xl text-foreground">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
