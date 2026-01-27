import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AddToCartButton from "@/components/AddToCartButton";
import { Leaf, Award, Scale, Star } from "lucide-react";
import heroImage from "@/assets/hero-fresh-mangoes.jpg";

const products = [
  {
    id: "queen-kesar",
    name: "Queen Kesar",
    tagline: "Golden Saffron Delight",
    description: "The Queen Kesar, known for its golden saffron glow and rich, smooth pulp, delivers a sweet, intense flavor that lingers on the palate. This premium variety is handpicked at perfect ripeness.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800",
    weight: "200-300g",
    origin: "Gujarat, India",
    season: "April - June"
  },
  {
    id: "king-alphonso",
    name: "King Alphonso",
    tagline: "King of Mangoes",
    description: "The King of Mangoes, Alphonso features a bright yellow flesh with a pink blush. Known for its fruity aroma with citrus overtones, it offers an unparalleled taste experience.",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800",
    weight: "200-300g",
    origin: "Maharashtra, India",
    season: "April - June"
  },
  {
    id: "olamangola",
    name: "Olamangola",
    tagline: "The Giant Mango",
    description: "Large and fiber-less with a unique coconutty flavor, Olamangola is perfect for those who love substantial fruit with a distinctive taste profile.",
    image: "https://images.unsplash.com/photo-1519096845289-95806ee03a1a?w=800",
    weight: "400-700g",
    origin: "South India",
    season: "May - July"
  },
  {
    id: "indian-jasmine",
    name: "Indian Jasmine",
    tagline: "Aroma of India",
    description: "Named for its floral fragrance, Indian Jasmine mango offers a delicate sweetness with aromatic notes that make it truly special.",
    image: "https://images.unsplash.com/photo-1605027990121-cbae9e0642df?w=800",
    weight: "250-350g",
    origin: "Various Regions",
    season: "May - June"
  },
];

const nutritionFacts = [
  { label: "Vitamins A & C", description: "Excellent source of antioxidants" },
  { label: "Dietary Fiber", description: "Promotes digestive health" },
  { label: "20+ Vitamins", description: "Complete nutritional profile" },
  { label: "110 Calories", description: "Per cup of sliced mangos" },
];

const FreshMangoes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Fresh Mangoes"
        subtitle="Premium handpicked varieties from the finest orchards in India"
        breadcrumb="Fresh Mangoes"
        image={heroImage}
      />

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Premium Varieties
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl mb-4">
              Our Mango Selection
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Each variety is carefully selected and handpicked at the peak of ripeness to ensure the finest quality.
            </p>
          </motion.div>

          <div className="grid gap-16 lg:gap-20">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid gap-8 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-square overflow-hidden rounded-3xl shadow-elevated">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Premium badge */}
                  <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span className="text-sm font-semibold">Premium</span>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="mb-2 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    {product.tagline}
                  </span>
                  <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                    {product.name}
                  </h2>
                  <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="flex flex-col items-center p-5 bg-card rounded-2xl shadow-soft">
                      <Scale className="h-6 w-6 text-primary mb-2" />
                      <span className="text-xs text-muted-foreground mb-1">Weight</span>
                      <span className="font-semibold text-sm text-foreground">{product.weight}</span>
                    </div>
                    <div className="flex flex-col items-center p-5 bg-card rounded-2xl shadow-soft">
                      <Leaf className="h-6 w-6 text-primary mb-2" />
                      <span className="text-xs text-muted-foreground mb-1">Origin</span>
                      <span className="font-semibold text-sm text-center text-foreground">{product.origin}</span>
                    </div>
                    <div className="flex flex-col items-center p-5 bg-card rounded-2xl shadow-soft">
                      <Award className="h-6 w-6 text-primary mb-2" />
                      <span className="text-xs text-muted-foreground mb-1">Season</span>
                      <span className="font-semibold text-sm text-foreground">{product.season}</span>
                    </div>
                  </div>
                  
                  <AddToCartButton product={product} size="lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Facts */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Health Benefits
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl mb-4">
              Nutrition Facts
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Mangos are free of sodium, fat and cholesterol. They deliver a host of nutrients 
              and make healthy eating a delightful sensory experience.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nutritionFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl text-center shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1"
              >
                <h3 className="font-serif text-xl font-bold text-primary mb-3">
                  {fact.label}
                </h3>
                <p className="text-muted-foreground">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreshMangoes;
