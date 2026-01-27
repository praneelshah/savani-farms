import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  image: string;
}

const PageHero = ({ title, subtitle, breadcrumb, image }: PageHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Multi-layered overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/30" />
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-1/4 left-20 w-48 h-48 rounded-full bg-secondary/20 blur-3xl pointer-events-none"
      />

      <div className="container relative z-10 mx-auto px-4 py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex items-center gap-2 text-sm"
          >
            <Link
              to="/"
              className="text-white/70 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <span className="text-white/50">/</span>
            <span className="text-primary font-semibold">{breadcrumb}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl text-lg text-white/80 md:text-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
