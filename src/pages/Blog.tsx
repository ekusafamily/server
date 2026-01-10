import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const blogPosts = [
  {
    id: 1,
    title: "NMC Board Announced",
    excerpt: "Official announcement of the National Member Council leadership team for 2025. Meet the new leaders driving our movement forward.",
    date: "January 15, 2025",
    category: "Official",
  },
  {
    id: 2,
    title: "County Leaders Elected",
    excerpt: "View the newly elected county leaders representing all 47 counties of Kenya in our national network.",
    date: "January 10, 2025",
    category: "Official",
  },
  {
    id: 3,
    title: "Youth Peace Summit Success",
    excerpt: "Thousands of youth gathered in Nairobi to promote peace and national unity ahead of the upcoming elections.",
    date: "January 5, 2025",
    category: "Event",
  },
  {
    id: 4,
    title: "Skills Development Program Launch",
    excerpt: "New digital skills training program launched to empower youth with 21st-century competencies.",
    date: "December 28, 2024",
    category: "Programs",
  },
  {
    id: 5,
    title: "Community Cleanup Initiative",
    excerpt: "Over 5,000 youth participated in our nationwide environmental conservation drive.",
    date: "December 20, 2024",
    category: "Community",
  },
  {
    id: 6,
    title: "Leadership Workshop Highlights",
    excerpt: "Key takeaways from our recent leadership development workshop held in Mombasa.",
    date: "December 15, 2024",
    category: "Leadership",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Kabila La Vijana</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and stories from Kabila La Vijana." />
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
                  Latest News & Updates
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Stay informed about our activities and announcements
                </p>
              </div>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group card-gradient rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <img src={logo} alt="" className="h-10 w-10 rounded-full bg-muted p-1" />
                        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-xl mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;