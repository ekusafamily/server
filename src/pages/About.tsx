import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Shield, Vote, Sparkles, Globe, Scale, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const principles = [
  { 
    icon: Vote, 
    title: "Democracy", 
    description: "Kabila la Vijana is committed to ensuring democracy by enshrining it at all levels of the Organization. Internal elections will be conducted transparently in a manner that will be free and fair, with appropriate scrutiny from independent bodies. Our Constitution outlines the rules and procedures for Organization elections which will be overseen by the Kabila la Vijana National Board of Elections." 
  },
  { 
    icon: Globe, 
    title: "Inclusivity", 
    description: "The grundnorm of Kabila la Vijana is enshrined in the commitment to helping all Youth achieve the Kenyan Dream. We want to ensure that no one is left behind as we work together to deliver growth and prosperity that reaches and uplifts all Youth in all spheres including but not limited to, leadership and governance, policy making, investment opportunities, public and private business sector, entertainment and environmental involvement." 
  },
  { 
    icon: Shield, 
    title: "Integrity", 
    description: "Committed to honest and accountable leadership for future generations. We believe that transparency and accountability are the foundation of trust, and we uphold these values in every action we take." 
  },
];

const preamblePoints = [
  "PROUD of the ethnic, cultural and religious diversity of Kenya.",
  "COMMITTED to creating a better Kenya for current and future generations.",
  "RECOGNISING the need for honest, transparent, accountable and integral leadership.",
  "INSPIRED by the indomitable spirit of the Youth of Kenya.",
  "RESOLVED to form a national, all-inclusive, democratic and progressive mass Organization.",
];

const objectives = [
  "To be a national organization that promotes the unity of all youth in Kenya.",
  "To form national and county representation acting in the best interests of youth.",
  "To eradicate tribal, racial and social bigotry and eliminate all forms of oppression.",
  "To promote leadership, governance, and civic engagement among Kenyan youth.",
  "To create platforms for youth participation in national development.",
  "To foster partnerships with government and private sector for youth empowerment.",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Kabila La Vijana - Kenya's Largest Youth Movement</title>
        <meta name="description" content="Learn about Kabila La Vijana's mission to unite Kenyan youth under a shared vision of peace, progress and prosperity. Read our constitution and guiding principles." />
        <meta name="keywords" content="Kabila La Vijana, Kenya youth, youth empowerment, constitution, vision, mission" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 md:py-32 hero-gradient relative overflow-hidden">
            <div className="wave-decoration opacity-50" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary font-medium">The Kenyan Dream is Alive</span>
                </div>
                
                <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6">
                  KABILA LA <span className="text-gradient">VIJANA.</span>
                </h1>
                
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10">
                  Uniting Kenyan Youth under a shared vision of peace, progress and prosperity. 
                  A fresh perspective for a modern nation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="heroSecondary" size="xl">
                    <a href="#constitution" className="gap-2">
                      <BookOpen className="h-5 w-5" />
                      Read Constitution
                    </a>
                  </Button>
                  <Button asChild variant="hero" size="xl">
                    <Link to="/leadership">View Leadership</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Guiding Principles */}
          <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/20 text-primary rounded-full">
                  Our Foundation
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Guided by Principles
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Our movement is built on three core principles that guide everything we do.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {principles.map((principle) => (
                  <div
                    key={principle.title}
                    className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="p-4 rounded-xl bg-primary/20 w-fit mb-6 group-hover:bg-primary/30 transition-colors">
                      <principle.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Constitution Section */}
          <section id="constitution" className="py-20 md:py-28 bg-card scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-secondary/20 text-secondary rounded-full">
                  Official Document
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Constitution
                </h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-12">
                {/* Article 1 */}
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm">ARTICLE 1</span>
                    OUR IDENTITY
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Identity of our organization shall be <strong className="text-foreground">Kabila la Vijana</strong> (hereinafter known as the Organization or KABILA LA VIJANA).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    It shall be a body corporate with a common seal, perpetual succession and may sue and be sued in its corporate name.
                  </p>
                </div>

                {/* Article 2 */}
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm">ARTICLE 2</span>
                    VISION, MISSION, MOTTO & VALUES
                  </h3>

                  {/* Preamble */}
                  <div className="mb-8">
                    <h4 className="font-heading font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                      <span className="text-primary">2.1</span> PREAMBLE
                    </h4>
                    <div className="space-y-3">
                      {preamblePoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vision */}
                  <div className="mb-8 bg-background/50 rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-foreground text-lg mb-3 flex items-center gap-2">
                      <Eye className="h-5 w-5 text-secondary" />
                      <span className="text-secondary">2.2</span> VISION
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The vision of KABILA LA VIJANA is to transform Kenya into a just, modern and prosperous integral nation; a country united in pursuit of happiness and in which every youth in Kenya has an equal and fair chance to be their best in all spheres of opportunity in Kenya.
                    </p>
                  </div>

                  {/* Mission */}
                  <div className="mb-8 bg-background/50 rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-foreground text-lg mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="text-primary">2.3</span> MISSION
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide a platform for involving Kenyan Youth in the transformation of their country, and to inspire, equip, facilitate and harness the synergies of Kenyans towards transforming their own lives. To create a fundamental shift in the involvement of youth in public affairs for the good of all Youth within the Kenyan nation.
                    </p>
                  </div>

                  {/* Motto */}
                  <div className="bg-primary/10 rounded-xl p-6 text-center">
                    <h4 className="font-heading font-semibold text-foreground text-lg mb-2 flex items-center justify-center gap-2">
                      <Sparkles className="h-5 w-5 text-kabila-gold" />
                      <span className="text-kabila-gold">2.4</span> MOTTO
                    </h4>
                    <p className="font-heading text-2xl md:text-3xl font-bold text-gradient">
                      KABILA MOJA
                    </p>
                    <p className="text-muted-foreground mt-2">(One Tribe)</p>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm">ARTICLE 3</span>
                    OBJECTIVES
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {objectives.map((objective, index) => (
                      <div key={index} className="flex items-start gap-3 bg-background/50 rounded-xl p-4">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-primary text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src={aboutImage} alt="Kabila La Vijana youth meeting" className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
                </div>
                
                <div>
                  <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-kabila-gold/20 text-kabila-gold rounded-full">
                    Our Story
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Building a United Kenya
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Kabila La Vijana was founded with a singular vision: to unite Kenyan youth under a common identity that transcends tribal, regional, and political divisions. We believe that Kenya's young people are not just the leaders of tomorrow—they are the driving force of change today.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    With representation in all 47 counties and over 500,000 registered members, we have grown into Kenya's largest youth movement. Our members participate in leadership forums, community service projects, and national dialogue sessions designed to foster unity and civic responsibility.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Together, we are working to achieve the Kenyan Dream—a vision of peace, progress, and prosperity for all.
                  </p>
                  <Button asChild variant="hero" size="lg">
                    <Link to="/membership" className="gap-2">
                      Join the Movement <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
            <div className="wave-decoration opacity-50" />
            <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Become part of Kenya's largest youth movement and help shape the future of our nation. 
                Membership is free and open to all Kenyan citizens aged 18-35.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="xl">
                  <Link to="/membership">Become a Member</Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/leadership">Meet Our Leaders</Link>
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

export default About;
