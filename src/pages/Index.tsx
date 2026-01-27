import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MangoVarietiesSection from "@/components/MangoVarietiesSection";
import MangoBranchDivider from "@/components/MangoBranchDivider";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MangoVarietiesSection />
      <MangoBranchDivider />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
