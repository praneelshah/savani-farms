import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Sun, Heart, Award, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import mangoBasket from "@/assets/mango-basket.png";
const benefits = [
  "Prevents Cancer",
  "Controls Blood Pressure",
  "Promotes Weight Gain",
  "Cures Anemia",
  "Useful in Pregnancy",
  "Cures Acne",
  "Delay Aging",
];

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Grown without artificial chemicals",
  },
  {
    icon: Sun,
    title: "Sun-Ripened",
    description: "Naturally ripened for optimal sweetness",
  },
  {
    icon: Heart,
    title: "Handpicked",
    description: "Carefully selected by expert farmers",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Highest standards from farm to table",
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={sectionRef} id="about" className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 md:mb-4 inline-block font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary">
              Health Benefits
            </span>
            <h2 className="mb-4 md:mb-6 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              One Mango a Day 🥭
            </h2>
            <p className="mb-6 md:mb-8 font-sans text-sm md:text-lg leading-relaxed text-muted-foreground">
              Benefits of eating Mangoes go beyond just the delicious taste. 
              This superfruit is packed with nutrients that support your overall health and wellbeing.
            </p>

            {/* Benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-2 md:gap-3"
                >
                  <div className="flex h-5 w-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Check className="h-2.5 w-2.5 md:h-3 md:w-3 text-secondary-foreground" />
                  </div>
                  <span className="font-sans text-xs md:text-sm text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/fresh-mangoes">
              <Button size="lg" className="rounded-full text-sm md:text-base">
                Explore Mango Varieties
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Mango Basket Image with scroll-based rotation */}
            <motion.div
              className="relative"
              style={{ rotate }}
            >
              <motion.img
                src={mangoBasket}
                alt="Fresh Mangoes in Basket"
                className="w-48 sm:w-64 md:w-80 lg:w-full lg:max-w-md h-auto drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {/* Glow effect behind basket */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-br from-primary via-secondary to-primary rounded-full scale-75" />
            </motion.div>
            
            {/* Feature cards overlaid - hidden on small screens */}
            <div className="hidden md:grid absolute -bottom-8 -left-8 right-8 grid-cols-2 gap-3">
              {features.slice(0, 2).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-background rounded-xl md:rounded-2xl p-3 md:p-4 shadow-elevated"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded-xl bg-primary/10">
                      <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs md:text-sm font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="font-sans text-[10px] md:text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-24 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center"
            >
              <div className="mx-auto mb-3 md:mb-4 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-primary/10">
                <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h4 className="font-serif text-sm md:text-lg font-semibold text-foreground mb-1">
                {feature.title}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;