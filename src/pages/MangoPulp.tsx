import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AddToCartButton from "@/components/AddToCartButton";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Leaf, Award, Package, Truck } from "lucide-react";
import heroImage from "@/assets/hero-mango-pulp.jpg";
import pulpProduct1 from "@/assets/pulp-product-1.jpg";
import pulpProduct2 from "@/assets/pulp-product-2.jpg";
import pulpProduct3 from "@/assets/pulp-product-3.jpg";
import pulpProduct4 from "@/assets/pulp-product-4.jpg";

const products = [
  {
    id: "premium-kesar-pulp",
    name: "Premium Kesar Mango Pulp",
    tagline: "100% Natural Kesar",
    description: "Real 100% pulp with no added sugar. Gluten-free, Vegan, and Non-GMO. Made from premium Kesar mangoes with citric acid only. Perfect for milkshakes, ice cream, mango dip, mango juice, and much more!",
    image: pulpProduct1,
    weight: "850 grams (30 OZ)",
    uses: ["Milkshakes", "Ice Cream", "Mango Dip", "Juices", "Yogurt Drinks"],
    features: ["Gluten Free", "Vegan", "Non-GMO", "No Added Sugar", "100% Natural"]
  },
  {
    id: "alphonso-pulp",
    name: "Alphonso Mango Pulp",
    tagline: "King of Mangoes Pulp",
    description: "Premium quality pulp made from handpicked Alphonso mangoes - the King of Mangoes. Known for its rich, creamy texture and intense sweet flavor. Ideal for authentic Indian desserts and beverages.",
    image: pulpProduct2,
    weight: "850 grams (30 OZ)",
    uses: ["Traditional Sweets", "Lassi", "Desserts", "Smoothies"],
    features: ["Premium Grade", "Naturally Sweet", "Rich Aroma", "No Preservatives"]
  },
  {
    id: "mango-puree",
    name: "Mango Puree",
    tagline: "Commercial Grade",
    description: "Smooth, naturally processed mango puree maintaining the authentic flavor profile. Perfect for commercial applications and culinary creations. Versatile ingredient for food processors and restaurants.",
    image: pulpProduct3,
    weight: "Available in bulk",
    uses: ["Juices", "Cocktails", "Baby Food", "Marinades", "Sauces"],
    features: ["Commercial Grade", "Consistent Quality", "Bulk Available", "HACCP Certified"]
  },
];

const certifications = [
  { icon: ShieldCheck, label: "USDA Approved Processing" },
  { icon: Award, label: "FDA Compliant Facilities" },
  { icon: CheckCircle2, label: "HACCP Certified" },
  { icon: Leaf, label: "Non-GMO Verified" },
  { icon: Package, label: "No Preservatives Added" },
  { icon: Truck, label: "USA Distribution" },
];

const MangoPulp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Mango Pulp & Puree"
        subtitle="Premium processed mango products for culinary excellence"
        breadcrumb="Mango Pulp & Puree"
        image={heroImage}
      />

      {/* Intro Section */}
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
                Pure & Natural
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                From Orchard to Jar
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Savani Farms brings to you the natural delicacies of Indian mango and mango products. We proudly collaborate with small Indian farmers who cultivate exquisite mangoes, overseeing mango orchards' pre- and post-harvest management, as well as the procurement of mangoes.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We establish connections between the mango orchards and reputable packaging and processing houses, ensuring these facilities maintain essential certifications for both food processing and packaging, guaranteeing strict adherence to high-quality standards.
              </p>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Leveraging our past successful efforts in lifting the ban on Indian Mangoes in the USA, we continue to support these farmers in selling their products, which include Fresh Mangoes and Pulp/Puree, in the USA.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-card rounded-xl"
                  >
                    <cert.icon className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{cert.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={pulpProduct1}
                  alt="Premium Kesar Mango Pulp"
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
                <p className="text-2xl font-bold mb-1">100%</p>
                <p className="text-sm opacity-90">Natural & Pure</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Images Gallery */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Our Products
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Premium Mango Products
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Mango pulp/puree, a versatile ingredient, finds applications in various culinary delights such as milkshakes, yogurt drinks, and juices, making it a sought-after addition to any kitchen.
            </p>
          </motion.div>

          {/* Large Product Image Display */}
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated"
            >
              <img
                src={pulpProduct2}
                alt="Mango Pulp Products"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated"
            >
              <img
                src={pulpProduct3}
                alt="Mango Processing"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Product Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{product.tagline}</span>
                  <h3 className="mt-1 mb-2 font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-3">{product.weight}</p>
                  <p className="mb-4 text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">USES:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.uses.map((use) => (
                        <span
                          key={use}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground mb-2">FEATURES:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <AddToCartButton product={product} size="default" className="w-full justify-center" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Product Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-elevated"
          >
            <img
              src={pulpProduct4}
              alt="Savani Farms Mango Products"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={pulpProduct1}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              B2B Partnership
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              For Food Processors & Businesses
            </h2>
            <p className="mb-4 max-w-3xl mx-auto opacity-90 leading-relaxed">
              We are a Pennsylvania-based organization committed to sharing our mission mangoes and products with your esteemed organization. Our commitment to the trade aims at fostering market expansion in various countries.
            </p>
            <p className="mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Through strategic partnerships with food distributors and retailers, Savani Farms actively facilitates the seamless flow of mango products, contributing to enhanced accessibility and a stronger global market presence.
            </p>
            <Button variant="secondary" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request Quote
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MangoPulp;
