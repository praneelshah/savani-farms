import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AddToCartButton from "@/components/AddToCartButton";
import { Leaf, Award, Scale, Star } from "lucide-react";
import heroImage from "@/assets/hero-fresh-mangoes.jpg";

const products = [
  {
    id: "kesar-mango",
    name: "Kesar Mango",
    tagline: "Golden Saffron Delight",
    description:
      "The celebrated Gujarati variety with deep saffron-colored flesh, naturally sweet pulp, and a lingering floral aroma.",
    image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=800&auto=format&fit=crop&q=80",
    weight: "200–300 g",
    origin: "Gujarat, India",
    season: "April – June",
  },
  {
    id: "alphonso-mango",
    name: "Alphonso Mango",
    tagline: "King of Mangoes",
    description:
      "Rich, creamy and completely fiberless, Alphonso delivers a bright tropical aroma with citrus and honey notes in every bite.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&auto=format&fit=crop&q=80",
    weight: "200–300 g",
    origin: "Maharashtra, India",
    season: "April – June",
  },
  {
    id: "badami-mango",
    name: "Badami Mango",
    tagline: "Alphonso of Karnataka",
    description:
      "Beloved South Indian cultivar with buttery, tender flesh and a mellow sweetness that makes it perfect for fresh eating.",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&auto=format&fit=crop&q=80",
    weight: "220–320 g",
    origin: "Karnataka, India",
    season: "May – July",
  },
  {
    id: "rajapuri-mango",
    name: "Rajapuri Mango",
    tagline: "Royal, Large-Sized Fruit",
    description:
      "Large, round mango with generous slices, gentle sweetness, and balanced acidity—ideal for families, juices, and pickles.",
    image: "/assets/rajpuri mango.jpg",
    weight: "500–800 g",
    origin: "Gujarat & Maharashtra, India",
    season: "May – July",
  },
  {
    id: "golden-angel-mango",
    name: "Golden Angel Mango",
    tagline: "Radiant Dessert Mango",
    description:
      "Glowing golden skin with smooth, fiberless flesh that shines in desserts, fruit platters, and premium gifting boxes.",
    image: "/assets/51UyZqMQeRL._AC_UF1000,1000_QL80_.jpg",
    weight: "250–350 g",
    origin: "Select Indian orchards",
    season: "May – June",
  },
  {
    id: "langra-mango",
    name: "Langra Mango",
    tagline: "North Indian Classic",
    description:
      "Iconic lime-green mango with silky flesh and a uniquely sweet–tangy character, cherished across North India.",
    image: "/assets/langromango.webp",
    weight: "250–350 g",
    origin: "Uttar Pradesh, India",
    season: "July – August",
  },
  {
    id: "dasheri-mango",
    name: "Dasheri Mango",
    tagline: "Perfumed Orchard Favorite",
    description:
      "Long, elegant mango known for its intensely aromatic, honey-sweet flesh and soft, melting texture.",
    image: "/assets/dasehri.jpg",
    weight: "200–300 g",
    origin: "Malihabad, Uttar Pradesh, India",
    season: "June – August",
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
