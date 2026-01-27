import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Scissors, ChefHat, Utensils, AlertCircle, Lightbulb, Play } from "lucide-react";
import heroImage from "@/assets/hero-how-to-cut.jpg";

const HowToCutMango = () => {
  const cuttingMethods = [
    {
      id: "slice-scoop",
      icon: Utensils,
      title: '"Slice & Scoop" Method',
      images: [
        "https://www.savanifarms.com/imagess/how-to-cut/sliceandscoop_1.jpg",
        "https://www.savanifarms.com/imagess/how-to-cut/sliceandscoop_2.jpg",
        "https://www.savanifarms.com/imagess/how-to-cut/sliceandscoop_3.jpg",
      ],
      steps: [
        {
          step: 1,
          title: "Cut the Cheeks",
          description: 'Stand the mango on your cutting board stem end down and hold. Place your knife about 1/4" from the widest center line and cut down through the mango. Flip the mango around and repeat this cut on the other side. The resulting ovals of mango flesh are known as the "cheeks". What\'s left in the middle is mostly the mango seed.'
        },
        {
          step: 2,
          title: "Slice the Flesh",
          description: "Cut parallel slices into the mango flesh, being careful not to cut through the skin."
        },
        {
          step: 3,
          title: "Scoop It Out",
          description: "Scoop the mango slices out of the mango skin using a large spoon. Enjoy your perfectly sliced mango!"
        }
      ]
    },
    {
      id: "inside-out",
      icon: ChefHat,
      title: '"Inside Out" Method',
      images: [
        "https://www.savanifarms.com/imagess/how-to-cut/sliceandscoop_1.jpg",
        "https://www.savanifarms.com/imagess/how-to-cut/insideout_2.jpg",
        "https://www.savanifarms.com/imagess/how-to-cut/insideout_3.jpg",
        "https://www.savanifarms.com/imagess/how-to-cut/insideout_4.jpg",
      ],
      steps: [
        {
          step: 1,
          title: "Cut the Cheeks",
          description: 'Stand the mango on your cutting board stem end down and hold. Place your knife about 1/4" from the widest center line and cut down through the mango. Flip the mango around and repeat this cut on the other side. The resulting ovals of mango flesh are known as the "cheeks".'
        },
        {
          step: 2,
          title: "Create Checkerboard Pattern",
          description: "Cut parallel slices into the mango flesh, being careful not to cut through the skin. Turn the mango cheek 1/4 rotation and cut another set of parallel slices to make a checkerboard pattern."
        },
        {
          step: 3,
          title: "Turn Inside Out",
          description: "Turn the scored mango cheek inside out by pushing the skin up from underneath. The cubes will pop up beautifully!"
        },
        {
          step: 4,
          title: "Remove the Chunks",
          description: "Scrape the mango chunks off of the skin, using a knife or a spoon. Perfect for snacking or adding to dishes!"
        }
      ]
    },
    {
      id: "mango-splitter",
      icon: Scissors,
      title: "Using a Mango Splitter",
      images: [
        "https://www.savanifarms.com/imagess/how-to-cut/usingmangosplitter_1.jpg",
        "https://www.savanifarms.com/imagess/how-to-cut/usingmangosplitter_2.jpg",
        "https://www.savanifarms.com/imagess/how-to-cut/usingmangosplitter_3.jpg",
      ],
      steps: [
        {
          step: 1,
          title: "Position the Splitter",
          description: "Stand the mango on your cutting board stem end down and hold. Center the Mango Splitter above the mango, with the opening in the splitter aligned with the widest part of the mango."
        },
        {
          step: 2,
          title: "Push Down",
          description: "Firmly push down to separate the mango flesh from the seed. The splitter will cleanly divide the mango into three pieces."
        },
        {
          step: 3,
          title: "Finish with Your Preferred Method",
          description: 'Use the "Slice and Scoop" or the "Inside Out" methods shown above to separate the mango flesh from the skin in cubes, dices or slices.'
        }
      ],
      note: "The mango splitter can be purchased at stores that sell kitchen accessories or online."
    }
  ];

  const safetyTips = [
    "Always use a clean knife and cutting board to cut a mango.",
    "If you have handled or cut any type of meat or seafood, ALWAYS sanitize your hands, work area, utensils and cutting board before handling or cutting any fruits or vegetables, including mangos.",
    "Always wash mangos before cutting.",
    "Use a stable cutting board to prevent slipping.",
    "Keep fingers away from the knife blade when cutting."
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="How to Cut a Mango"
        subtitle="Master the art of cutting mangoes with our step-by-step guide. Three easy methods to get the most out of your delicious fruit."
        breadcrumb="How to Cut"
        image={heroImage}
      />

      {/* Video Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Watch & Learn
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Video Tutorial
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Watch this comprehensive video guide to master the art of cutting a mango perfectly every time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-elevated bg-card">
              <iframe
                src="https://www.youtube.com/embed/sc26E5rsyDs"
                title="How to cut a Mango"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cutting Methods Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Step by Step
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Cutting Methods
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Choose your preferred method below and follow the step-by-step instructions. Each method has its own advantages depending on how you plan to use the mango.
            </p>
          </motion.div>

          <Accordion type="single" collapsible defaultValue="slice-scoop" className="space-y-4">
            {cuttingMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={method.id} className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                        <method.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">{method.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    {/* Step Images */}
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                      {method.images.map((img, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: imgIndex * 0.1 }}
                          className="aspect-square rounded-xl overflow-hidden shadow-soft"
                        >
                          <img
                            src={img}
                            alt={`Step ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-6">
                      {method.steps.map((step) => (
                        <div key={step.step} className="flex gap-4">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                            {step.step}
                          </div>
                          <div>
                            <h4 className="mb-2 font-semibold text-foreground">{step.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      ))}
                      {method.note && (
                        <div className="mt-6 rounded-xl bg-primary/10 p-5 flex gap-3">
                          <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-foreground">
                            <strong>Pro Tip:</strong> {method.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Visual Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Practice Makes Perfect
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Perfect Every Time
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a little practice, you'll be cutting mangoes like a pro. The key is to understand the seed placement and work around it smoothly. Remember, the mango seed is flat and oval-shaped, running lengthwise through the center of the fruit.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="https://www.savanifarms.com/imagess/how-to-cut/insideout_4.jpg"
                  alt="Sliced mango"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <AlertCircle className="h-7 w-7 text-accent" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Handling & Safety Tips
                </h2>
              </div>
              
              <ul className="space-y-4">
                {safetyTips.map((tip, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 text-muted-foreground"
                  >
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{tip}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToCutMango;
