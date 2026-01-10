import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import NewsSection from "@/components/NewsSection";
import EventsSection from "@/components/EventsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kabila La Vijana | Empowering Kenyan Youth</title>
        <meta 
          name="description" 
          content="Kabila La Vijana is Kenya's largest youth movement dedicated to leadership, unity, and national empowerment for citizens aged 18-35." 
        />
        <meta name="keywords" content="Kenya youth, youth empowerment, leadership, Kabila La Vijana, community" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <VideoSection />
          <NewsSection />
          <EventsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;