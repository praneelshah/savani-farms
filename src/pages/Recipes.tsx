import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import RecipeFlipCard from "@/components/RecipeFlipCard";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-recipes.jpg";

const recipes = [
  {
    name: "Mango Bread",
    description: "A moist, tropical twist on classic banana bread with the sweet essence of ripe mangoes. Perfect for breakfast or as an afternoon snack with tea.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    time: "60 min",
    servings: "8 slices",
    difficulty: "Easy",
    ingredients: [
      "2 cups all-purpose flour",
      "1 cup mango puree",
      "3/4 cup granulated sugar",
      "1/2 cup unsalted butter, softened",
      "2 large eggs",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "1 tsp vanilla extract",
      "1/2 cup chopped walnuts (optional)"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease and flour a 9x5 inch loaf pan.",
      "In a large bowl, cream together butter and sugar until light and fluffy.",
      "Beat in eggs one at a time, then stir in vanilla and mango puree.",
      "In another bowl, whisk together flour, baking soda, and salt.",
      "Gradually blend dry ingredients into the wet mixture until just combined.",
      "Fold in walnuts if using. Pour batter into prepared pan.",
      "Bake for 55-60 minutes until a toothpick inserted in center comes out clean.",
      "Cool in pan for 10 minutes, then remove to a wire rack to cool completely."
    ]
  },
  {
    name: "Mango Yogurt Parfait",
    description: "Layers of creamy Greek yogurt, fresh mango chunks, crunchy granola, and a drizzle of honey. A healthy and refreshing breakfast option.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
    time: "10 min",
    servings: "2 servings",
    difficulty: "Easy",
    ingredients: [
      "2 cups Greek yogurt (plain or vanilla)",
      "1 large ripe mango, diced",
      "1 cup granola of your choice",
      "2 tbsp honey or maple syrup",
      "Fresh mint leaves for garnish",
      "2 tbsp chia seeds (optional)",
      "1/4 cup fresh blueberries (optional)"
    ],
    instructions: [
      "Peel and dice the mango into small, bite-sized cubes.",
      "In two clear glasses or mason jars, start with a layer of Greek yogurt (about 1/4 cup).",
      "Add a layer of diced mango pieces.",
      "Sprinkle a layer of granola on top.",
      "Repeat the layers: yogurt, mango, granola.",
      "Drizzle honey over the top layer.",
      "Garnish with fresh mint leaves, chia seeds, and blueberries if desired.",
      "Serve immediately for crunchy granola, or refrigerate for 2 hours for softer texture."
    ]
  },
  {
    name: "Mango Quesadillas",
    description: "A delightful sweet and savory fusion featuring caramelized mango, melted cheese, and fresh cilantro with a zesty lime finish.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
    time: "20 min",
    servings: "4 quesadillas",
    difficulty: "Medium",
    ingredients: [
      "4 large flour tortillas",
      "2 cups shredded Monterey Jack cheese",
      "1 large ripe mango, thinly sliced",
      "1/4 cup fresh cilantro, chopped",
      "2 tbsp lime juice",
      "1 tbsp butter",
      "1/4 tsp chili powder (optional)",
      "Sour cream for serving",
      "1 jalapeño, sliced (optional)"
    ],
    instructions: [
      "Toss mango slices with lime juice and set aside for 5 minutes.",
      "Heat a large skillet over medium heat and add a little butter.",
      "Place one tortilla in the pan and sprinkle half with 1/2 cup cheese.",
      "Arrange mango slices over the cheese and sprinkle with cilantro.",
      "Add jalapeño slices if using, and a pinch of chili powder.",
      "Fold the tortilla in half and cook until golden brown, about 2-3 minutes per side.",
      "Repeat with remaining tortillas.",
      "Cut each quesadilla into wedges and serve with sour cream."
    ]
  },
  {
    name: "Mango BBQ Pizza",
    description: "An unexpected culinary delight combining sweet mango, savory bacon, tangy BBQ sauce, and gooey mozzarella on a crispy homemade crust.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    time: "35 min",
    servings: "4-6 slices",
    difficulty: "Medium",
    ingredients: [
      "1 lb pizza dough (store-bought or homemade)",
      "1/2 cup BBQ sauce",
      "1.5 cups shredded mozzarella cheese",
      "1 ripe mango, diced",
      "4 strips bacon, cooked and crumbled",
      "1/4 red onion, thinly sliced",
      "2 tbsp fresh cilantro, chopped",
      "1 tbsp olive oil",
      "Red pepper flakes (optional)"
    ],
    instructions: [
      "Preheat oven to 475°F (245°C). If using a pizza stone, place it in the oven to heat.",
      "Roll out pizza dough on a floured surface to desired thickness.",
      "Transfer dough to a greased baking sheet or pizza peel.",
      "Brush dough lightly with olive oil, then spread BBQ sauce evenly leaving a 1-inch border.",
      "Sprinkle mozzarella cheese over the sauce.",
      "Distribute diced mango, bacon crumbles, and red onion slices evenly.",
      "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
      "Remove from oven, top with fresh cilantro and red pepper flakes if desired.",
      "Let cool for 2 minutes before slicing and serving."
    ]
  },
  {
    name: "Mango Rum Tiramisu",
    description: "An elegant tropical twist on the beloved Italian dessert, featuring layers of mango-infused mascarpone, rum-soaked ladyfingers, and fresh mango.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
    time: "4+ hours",
    servings: "8-10 servings",
    difficulty: "Hard",
    ingredients: [
      "500g mascarpone cheese, room temperature",
      "1 cup mango puree",
      "4 egg yolks",
      "1/2 cup granulated sugar",
      "1 cup heavy whipping cream",
      "1 package ladyfinger biscuits (about 24)",
      "3 tbsp dark rum",
      "1/2 cup brewed espresso, cooled",
      "1 fresh mango, diced",
      "Cocoa powder for dusting",
      "Fresh mint for garnish"
    ],
    instructions: [
      "Whisk egg yolks and sugar in a heatproof bowl over simmering water until thick and pale, about 8 minutes.",
      "Remove from heat and let cool to room temperature.",
      "In a large bowl, beat mascarpone until smooth. Fold in the egg mixture and mango puree.",
      "In another bowl, whip heavy cream to stiff peaks. Gently fold into the mascarpone mixture.",
      "Mix espresso with rum in a shallow dish.",
      "Quickly dip each ladyfinger into the espresso mixture (don't soak) and arrange in a 9x13 dish.",
      "Spread half the mascarpone mixture over the ladyfingers. Scatter half the diced mango.",
      "Repeat with another layer of dipped ladyfingers, remaining mascarpone, and mango.",
      "Cover and refrigerate for at least 4 hours, preferably overnight.",
      "Before serving, dust with cocoa powder and garnish with mint."
    ]
  },
  {
    name: "Mango Smoothie Bowl",
    description: "A thick, creamy, and refreshing frozen mango base topped with an array of fresh fruits, crunchy granola, and nutritious superfoods.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800",
    time: "10 min",
    servings: "1 bowl",
    difficulty: "Easy",
    ingredients: [
      "2 cups frozen mango chunks",
      "1/2 frozen banana",
      "1/4 cup almond milk (or milk of choice)",
      "1 tbsp honey or agave",
      "Toppings: fresh berries, sliced banana, coconut flakes",
      "Chia seeds, hemp hearts, or flax seeds",
      "Granola for crunch",
      "Drizzle of nut butter (optional)"
    ],
    instructions: [
      "Add frozen mango, frozen banana, almond milk, and honey to a high-powered blender.",
      "Blend until thick and creamy, stopping to scrape down sides as needed. The consistency should be thicker than a regular smoothie.",
      "If too thick, add a splash more milk. If too thin, add more frozen fruit.",
      "Pour into a bowl and smooth the top with a spoon.",
      "Arrange your toppings in rows or sections: fresh berries, sliced banana, coconut flakes.",
      "Sprinkle with chia seeds and granola.",
      "Drizzle with nut butter if desired.",
      "Serve immediately and enjoy with a spoon!"
    ]
  },
  {
    name: "Mango Lassi",
    description: "A traditional Indian yogurt-based drink blended with sweet mango pulp, cardamom, and a touch of rose water. Creamy, refreshing, and perfectly sweet.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800",
    time: "5 min",
    servings: "2 glasses",
    difficulty: "Easy",
    ingredients: [
      "1 cup mango pulp or 1 large ripe mango",
      "1 cup plain yogurt",
      "1/2 cup cold milk",
      "2-3 tbsp sugar (adjust to taste)",
      "1/4 tsp cardamom powder",
      "Few drops of rose water (optional)",
      "Ice cubes",
      "Chopped pistachios for garnish"
    ],
    instructions: [
      "If using fresh mango, peel and chop into chunks.",
      "Add mango, yogurt, milk, sugar, and cardamom to a blender.",
      "Add a few ice cubes for a colder drink.",
      "Blend until smooth and frothy, about 1-2 minutes.",
      "Taste and adjust sweetness if needed.",
      "Add rose water if using and blend briefly.",
      "Pour into tall glasses.",
      "Garnish with chopped pistachios and a sprinkle of cardamom.",
      "Serve immediately chilled."
    ]
  },
  {
    name: "Mango Sticky Rice",
    description: "A beloved Thai dessert featuring sweet glutinous rice soaked in rich coconut cream, served with fresh ripe mango slices. A perfect balance of flavors and textures.",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800",
    time: "45 min",
    servings: "4 servings",
    difficulty: "Medium",
    ingredients: [
      "1.5 cups glutinous (sticky) rice",
      "1 can (400ml) coconut milk",
      "1/2 cup sugar",
      "1/2 tsp salt",
      "2 ripe mangoes, sliced",
      "2 tbsp toasted sesame seeds",
      "Mint leaves for garnish"
    ],
    instructions: [
      "Soak sticky rice in water for at least 4 hours or overnight.",
      "Drain rice and steam in a steamer basket lined with cheesecloth for 25-30 minutes until tender.",
      "While rice is steaming, heat 3/4 of the coconut milk with sugar and salt until dissolved.",
      "Transfer cooked rice to a bowl and pour the sweetened coconut milk over it.",
      "Stir gently and let sit for 15-20 minutes to absorb the milk.",
      "For the topping sauce, heat remaining coconut milk with a pinch of salt.",
      "Mound the sticky rice on plates and arrange mango slices alongside.",
      "Drizzle with the coconut sauce and sprinkle with sesame seeds.",
      "Garnish with mint and serve at room temperature."
    ]
  }
];

const Recipes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Mango Recipes"
        subtitle="Delicious ways to enjoy the king of fruits - from breakfast parfaits to elegant desserts"
        breadcrumb="Recipes"
        image={heroImage}
      />

      {/* Featured Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1546548970-71785318a17b?w=800"
                  alt="Mango culinary inspiration"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-elevated max-w-[200px]"
              >
                <Sparkles className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Fresh ingredients, endless possibilities</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Culinary Inspiration
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Endless Possibilities
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                From breakfast parfaits to elegant desserts, mangoes add a burst of tropical 
                flavor to any dish. Explore our curated collection of recipes that showcase 
                the versatility of this magnificent fruit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're using fresh mangoes, pulp, or puree, these recipes are designed 
                to bring out the best of the mango's natural sweetness and aroma. Each recipe includes
                complete ingredients and step-by-step instructions for perfect results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Recipe Collection
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Complete Mango Recipes
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Click on any recipe to see the full ingredients list and step-by-step instructions
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe, index) => (
              <RecipeFlipCard key={recipe.name} recipe={recipe} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recipes;
