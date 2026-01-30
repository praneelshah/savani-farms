import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Heart, Leaf, Globe, Users, Sprout, Droplet, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mission.jpg";
import missionImage1 from "@/assets/mission-mango-1.jpg";
import missionImage2 from "@/assets/mission-mango-2.jpg";
import missionSlide1 from "@/assets/mission-slide-1.jpg";
import missionSlide2 from "@/assets/mission-slide-2.jpg";
import missionSlide3 from "@/assets/mission-slide-3.jpg";
import missionSlide4 from "@/assets/mission-slide-4.jpg";
import missionSlide5 from "@/assets/mission-slide-5.jpg";
import missionSlide6 from "@/assets/mission-slide-6.jpg";

const values = [
  {
    icon: Heart,
    title: "Supporting Rural Communities",
    description: "We participate and contribute to uplifting the socio-economic structure of rural communities of India, especially the farming community through creation of new markets for their produce."
  },
  {
    icon: Leaf,
    title: "Sustainable Green Belts",
    description: "We create sustainable green belts and corridors to preserve and support the very fragile ecosystems of India."
  },
  {
    icon: GraduationCap,
    title: "Environmental Education",
    description: "We provide environmental education to young inhabitants of rural India, fostering the next generation of eco-conscious citizens."
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description: "We promote responsible and sustainable agriculture practices that benefit both farmers and the environment."
  },
  {
    icon: Droplet,
    title: "Renewable Resources",
    description: "We support renewable energy and water resources of rural India for a sustainable future."
  },
  {
    icon: Globe,
    title: "Global Connection",
    description: "Bridging the gap between Indian mango orchards and tables around the world with quality and care."
  }
];

const slideshowImages = [
  { src: missionSlide1, alt: "Savani Farms community work" },
  { src: missionSlide2, alt: "Farmers in the orchard" },
  { src: missionSlide3, alt: "Mango harvest season" },
  { src: missionSlide4, alt: "Farm to fork journey" },
  { src: missionSlide5, alt: "Community development" },
  { src: missionSlide6, alt: "Sustainable farming practices" },
];

const MissionMango = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Mission Mango"
        subtitle="Spreading the love and appreciation for Indian mangoes worldwide"
        breadcrumb="Mission Mango"
        image={heroImage}
      />

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Our Mission
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Savani Farm's Mission Mango
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mission Mango is a passionate endeavor dedicated to spreading the love and appreciation for Indian mangoes worldwide. Our mission is to showcase the exquisite taste, versatility, and cultural significance of this "King of the Fruit" - Indian Exotic Mangoes.
                </p>
                <p>
                  Through education, promotion, and community engagement, we strive to create a mango-loving community that celebrates the rich flavors and diversity of Indian mango varieties.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={missionImage1}
                  alt="Fresh mangoes from our orchards"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mango Philanthropy Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Mango Philanthropy
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Embracing Good Karma - Planting Seeds of Goodness
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
              At Savani Farms, through Mission Mango, our intent is to make a positive impact on rural communities and the environment.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all hover:-translate-y-2"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Agriculture Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Sustainable Agriculture
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Promoting Responsible Agriculture
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We collaborate with rural farmers of India, agricultural organizations, and universities to conduct workshops and seminars on mango cultivation, promoting sustainable farming practices and highlighting the economic potential of mango production.
                </p>
                <p>
                  We promote sustainable farming practices and provide support to mango farmers in rural India, helping them improve their livelihoods and access to markets.
                </p>
                <p>
                  We establish programs to empower young farmers and researchers, fostering innovation and knowledge-sharing within the mango farming community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-1 lg:order-2"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={missionImage2}
                  alt="Sustainable mango farming"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-elevated"
              >
                <p className="text-2xl font-bold mb-1">500+</p>
                <p className="text-sm opacity-90">Partner Farmers</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farm to Fork Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/50" />
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/80">
                Our Initiative
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                Farm-to-Fork: What Difference It Can Make?
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-primary-foreground/90 leading-relaxed"
            >
              <p>
                It has long been the dream of Savani Farms to make efforts towards improving the socio-economic standards of the underprivileged farmers in India. Mango trade in India is heavily controlled by contractors and middlemen. The small farmers that depend on them for the sale of their mangoes end up receiving a very small portion of the profit.
              </p>
              <p>
                Farm-to-Fork aims at eliminating the middleman completely from the mango supply chain and bring the produce directly from farmers to consumers. It aims at helping farmers get a fair price for their hard work and thus help them sustain themselves and their families and live a better-quality life.
              </p>
              <p>
                At Savani Farms, whatever income is generated through mango trade is given back to the community. In the past, Savani Farms has built schools, health clinics, sponsored education, and contributed towards developing villages and improving their infrastructure. We hope to continue the same in the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Slideshow Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              From Our Orchards & Community
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Main Slideshow */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-elevated bg-background">
              {slideshowImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
              
              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slideshowImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-primary w-6"
                        : "bg-background/60 hover:bg-background/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-6 grid grid-cols-6 gap-3">
              {slideshowImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`aspect-video rounded-xl overflow-hidden bg-background transition-all ${
                    index === currentSlide
                      ? "ring-2 ring-primary ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Our Vision
            </span>
            <h2 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Join the Mango Revolution
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our Mission Mango aims to promote and celebrate the irresistible charm of Indian mangoes. It invites people from all walks of life to join in on the journey of spreading mango magic worldwide. The goal is to make Indian mangoes more accessible, diverse, and sustainable, while also highlighting their cultural significance. Through education, promotion, and community engagement, Mission Mango aims to create a world where the tantalizing aroma and incomparable sweetness of mangoes bring joy and smiles to people everywhere.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              By embracing the mango's allure, we seek to unite individuals in the pure joy of this remarkable fruit, transcending borders and creating a legacy of mango love. Join us in this extraordinary journey, transforming the world into a sweeter place, one delicious mango at a time.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MissionMango;
