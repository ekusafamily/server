import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Briefcase, Heart, Globe, Shield } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Leadership Academy",
    description: "Comprehensive training in leadership, public speaking, and organizational management for emerging youth leaders.",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description: "Connect with experienced professionals who guide your personal and career development journey.",
  },
  {
    icon: Briefcase,
    title: "Skills Development",
    description: "Practical training in digital skills, entrepreneurship, and vocational competencies for the modern workforce.",
  },
  {
    icon: Heart,
    title: "Community Service",
    description: "Organized volunteer activities and community projects that create tangible positive impact.",
  },
  {
    icon: Globe,
    title: "Civic Education",
    description: "Programs on governance, democracy, and civic responsibility to create informed citizens.",
  },
  {
    icon: Shield,
    title: "Peace Building",
    description: "Initiatives promoting national unity, conflict resolution, and peaceful coexistence among youth.",
  },
];

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs | Kabila La Vijana</title>
        <meta name="description" content="Explore Kabila La Vijana's youth development programs including leadership training, mentorship, and community service." />
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
                  Our Programs
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Empowering youth through comprehensive development initiatives
                </p>
              </div>
            </div>
          </section>

          {/* Programs Grid */}
          <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((program) => (
                  <div
                    key={program.title}
                    className="group card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 mb-6 group-hover:bg-primary/30 transition-colors">
                      <program.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 md:py-28 bg-card">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Get Involved
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join our programs and start your journey towards becoming a leader in your community.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/membership">Apply Now</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Programs;