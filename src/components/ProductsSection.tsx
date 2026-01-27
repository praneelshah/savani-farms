import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AddToCartButton from "@/components/AddToCartButton";
const products = [
  {
    id: "alphonso-mango",
    name: "Alphonso Mango",
    tagline: "King of Mangoes",
    description: "The king of mangoes, known for its rich, creamy texture and sweet, aromatic flavor.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600",
    price: "$39.99",
  },
  {
    id: "kesar-mango",
    name: "Kesar Mango",
    tagline: "Golden Saffron Delight",
    description: "Golden-hued delight with a unique saffron-like aroma and sweet, juicy flesh.",
    image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=600",
    price: "$34.99",
  },
  {
    id: "badami-mango",
    name: "Badami Mango",
    tagline: "South Indian Favorite",
    description: "Known as the 'Alphonso of Karnataka', offers similar taste profile with regional charm.",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600",
    price: "$29.99",
  },
  {
    id: "neelam-mango",
    name: "Neelam Mango",
    tagline: "Late Season Treasure",
    description: "Fiber-free with intense sweetness, available when other varieties have ended.",
    image: "https://images.unsplash.com/photo-1560155016-bd4879ae8f21?w=600",
    price: "$27.99",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-24 bg-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Meet the Gang of Mangoes
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Premium Indian Mangoes
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-lg text-muted-foreground">
            Mango™ has different varieties in family. Handpicked from the finest orchards in India, 
            naturally ripened and delivered fresh to preserve their authentic taste.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-soft card-hover"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-6 text-center">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{product.tagline}</span>
                <h3 className="mt-1 mb-2 font-serif text-xl font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="mb-4">
                  <span className="font-serif text-2xl font-bold text-primary">{product.price}</span>
                </div>
                <AddToCartButton 
                  product={product} 
                  size="sm" 
                  showLabel={false}
                  className="justify-center"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/fresh-mangoes">
            <button className="rounded-full px-8 py-3 border border-border bg-background text-foreground hover:bg-muted transition-colors font-medium">
              View All Fresh Mangoes
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;