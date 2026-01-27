import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, ChefHat } from "lucide-react";

interface Recipe {
  name: string;
  description: string;
  image: string;
  time: string;
  servings: string;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipeFlipCardProps {
  recipe: Recipe;
  index: number;
}

const RecipeFlipCard = ({ recipe, index }: RecipeFlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-[500px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card - Image */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="w-full h-full bg-card rounded-2xl overflow-hidden shadow-soft group">
            <div className="relative h-full">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-2 px-3 py-1.5 bg-background/95 backdrop-blur-sm text-xs font-semibold rounded-full text-foreground inline-block">
                  {recipe.difficulty}
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {recipe.name}
                </h3>
                <p className="text-white/80 text-sm line-clamp-2">
                  {recipe.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-white/70 mt-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>{recipe.servings}</span>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-4 italic">
                  Hover to see recipe →
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card - Recipe */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-card rounded-2xl overflow-hidden shadow-elevated border border-border">
            <div className="h-full flex flex-col p-5 overflow-hidden">
              <div className="flex items-center justify-between mb-3 flex-shrink-0">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {recipe.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-primary">
                  <ChefHat className="h-3 w-3" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                {/* Ingredients */}
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-1.5 sticky top-0 bg-card">
                    Ingredients:
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-1.5 sticky top-0 bg-card">
                    Instructions:
                  </h4>
                  <ol className="text-xs text-muted-foreground space-y-1">
                    {recipe.instructions.map((step, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-primary font-semibold min-w-[14px]">
                          {i + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-3 pt-3 border-t border-border flex-shrink-0">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-primary" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3 text-primary" />
                  <span>{recipe.servings}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeFlipCard;
