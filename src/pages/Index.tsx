import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <FeaturedWorks />
      <ContactSection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
