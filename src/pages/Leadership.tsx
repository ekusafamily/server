import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";

const leaders = [
  {
    name: "Japheth Ombui",
    role: "President",
    image: "https://i.ibb.co/Qj8nnkMP/Japheth-Ombui.jpg"
  },
  {
    name: "Fred Osiro",
    role: "Secretary General",
    image: "https://i.ibb.co/9HPxR5fM/Fred-Osiro.jpg"
  },
  {
    name: "Saumu Bakari",
    role: "Vice President",
    image: "https://i.ibb.co/cXQswTTj/Whats-App-Image-2026-01-07-at-19-41-46.jpg"
  },
  {
    name: "Vincent Adede",
    role: "Head of ICT",
    image: "https://i.ibb.co/hRj6tCt0/Vincent-Adede.jpg"
  },
  {
    name: "Samuel Wairegi",
    role: "National Communication Strategist",
    image: "https://i.ibb.co/G4wDCfDz/Samuel-Wairegi.jpg"
  },
  {
    name: "Peter Otieno",
    role: "National Strategist",
    image: "https://i.ibb.co/Y7k99JQ8/Whats-App-Image-2026-01-07-at-19-49-22.jpg"
  },
   {
    name: "EMMANUEL WAMUKOYA ",
    role: "Admnistrator",
    image: "https://i.ibb.co/Mx0hWkt8/1767804055525.jpg"
  },
];


const Leadership = () => {
  return (
    <>
      <Helmet>
        <title>Leadership | Kabila La Vijana</title>
        <meta name="description" content="Meet the leadership team of Kabila La Vijana driving youth empowerment across Kenya." />
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
                  Our Leadership
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Meet the team driving youth empowerment across Kenya
                </p>
              </div>
            </div>
          </section>

          {/* National Leadership */}
          <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                National Member Council
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {leaders.map((leader) => (
                  <div
                    key={leader.name}
                    className="group bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      {leader.image ? (
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Users className="h-10 w-10 text-muted-foreground" />
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">{leader.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* County Leaders */}
          <section className="py-20 md:py-28 bg-card">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                County Leadership
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Each of Kenya's 47 counties has an elected leadership team representing local youth interests and coordinating community programs.
              </p>
              <a
                href="/l.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-8 max-w-md mx-auto block hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <p className="text-foreground font-medium">47 County Coordinators</p>
                <p className="text-muted-foreground text-sm mt-2">Leading youth engagement at the grassroots level</p>
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Leadership;



