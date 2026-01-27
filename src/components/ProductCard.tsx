import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price?: string;
  delay?: number;
}

const ProductCard = ({ name, description, image, price, delay = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-2"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Quick view button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="secondary" size="sm" className="rounded-full">
            Quick View
          </Button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="mb-4 font-sans text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          {price && (
            <span className="font-serif text-xl font-bold text-primary">{price}</span>
          )}
          <Button variant="outline" size="sm" className="rounded-full ml-auto">
            Order Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;