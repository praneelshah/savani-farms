import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-products.jpg";
import missionMango1 from "@/assets/mission-mango-1.jpg";
import missionMango2 from "@/assets/mission-mango-2.jpg";
import mangoBasket from "@/assets/mango-basket.png";
import missionSlide1 from "@/assets/mission-slide-1.jpg";
import missionSlide2 from "@/assets/mission-slide-2.jpg";
import missionSlide3 from "@/assets/mission-slide-3.jpg";
import missionSlide4 from "@/assets/mission-slide-4.jpg";
import missionSlide5 from "@/assets/mission-slide-5.jpg";
import missionSlide6 from "@/assets/mission-slide-6.jpg";

const mangoArticles = [
  {
    title: "Leaders in World Mango Production and Export Statistics",
    image: "/assets/PRODUCER-STORY.png",
    summary:
      "Dr. Bhaskar Savani is a graduate of Temple University School of Dentistry (1995, Philadelphia). Before Temple, he earned a master\u2019s degree in Applied Chemistry and a Post Graduate Diploma in Textile Chemistry from The M.S. University of Baroda, India.",
  },
  {
    title: "You Need To Try Savani Farms Indian Mangos",
    image: "/assets/mango5-660x400.jpg",
    summary:
      "The story of how Indian mangos first came to the United States starts with Bhaskar Savani, a Pennsylvania dentist who knew Americans were missing out on one of the most delicious fruits in the world.",
  },
  {
    title: "The Elusive Indian Aam",
    image: "/assets/jumbo-articles1.jpg",
    summary:
      "For anyone who grew up in South Asia, mango is far more than just a fruit\u2014it is a story and a memory. Bhaskar Savani has been at the vanguard of the Indian mango movement in the United States.",
  },
  {
    title: "U.S. Braces for (Indian) Mango Madness",
    image: "/assets/jumbo-articles2.jpg",
    summary:
      "Imports of Indian mangoes are expected to surge into U.S. stores under a new trade agreement that lifts a decades-old ban enacted over concerns about fruit flies.",
  },
  {
    title: "Indian Mangoes Becoming More Affordable in the U.S.",
    image: "/assets/img-Bhaskar-Savani.jpg",
    summary:
      "Bhaskar Savani helped lift the federal ban on Indian mangoes and now leads efforts to make these premium fruits more accessible and affordable for consumers across the United States.",
  },
];

const JumboKesarMangoSouthFlorida = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Jumbo Kesar Mango for South Florida"
        subtitle="Discover the Indian Jumbo Kesar cultivar, tailored for home gardens and estate agriculture in South Florida."
        breadcrumb="Jumbo Kesar Mango"
        image={heroImage}
      />

      {/* Mango Articles Overview */}
      <section className="py-16 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <span className="mb-3 inline-block font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Mango Articles
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Stories Behind Indian Mangoes
            </h2>
          </motion.div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {mangoArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.summary}
                  </p>
                  <span className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Read More..
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + Context */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-5 text-muted-foreground leading-relaxed"
            >
              <p>
                The air-shipment of mangos from India to the United States during recent seasons has increased
                interest in the production of Indian mango cultivars in South Florida. Jumbo Kesar is originally
                from India, where the original tree was a descendant of the Kesar mango grown near Gir in
                Gujarat State. Since its introduction to South Florida in 2008, trees and fruit have been
                evaluated for performance under local conditions.
              </p>
              <p>
                The tree seems to be well adapted to home gardens and estate agriculture in South Florida. It
                has better productivity than many other Indian cultivars when grown in the region, along with
                better disease resistance and overall fruit quality. The average fruit weighs about 550 g and is
                greenish yellow with a red blush when exposed to the sun. The flesh has a deep yellow, almost
                saffron color, is firm and juicy, and carries a complex coconut-forward flavor.
              </p>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-2xl shadow-soft p-6 space-y-4"
            >
              <h3 className="font-serif text-xl font-semibold text-foreground">
                At a Glance
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong className="font-semibold text-foreground">Origin:</strong> Seedling of Kesar mango from Gujarat, India</li>
                <li><strong className="font-semibold text-foreground">Region:</strong> Adapted for South Florida</li>
                <li><strong className="font-semibold text-foreground">Average fruit weight:</strong> ~550 g</li>
                <li><strong className="font-semibold text-foreground">Flavor profile:</strong> Coconut, honeysuckle, vanilla, banana, citrus, lychee, honey, and warm spice notes</li>
                <li><strong className="font-semibold text-foreground">Texture:</strong> Deep yellow, almost saffron-colored, firm and juicy flesh with very little fiber</li>
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Origin & Background */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Origin of Jumbo Kesar
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Jumbo Kesar is a seedling of the traditional Kesar mango originally grown in Dedakyali village,
                near the town of Gir in Gujarat, India. Farmer Madhavray Savani began propagating the tree,
                inspired by the improved size and quality of the fruit. As Jumbo Kesar gained popularity,
                many local farmers started growing it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Savani family later helped introduce Jumbo Kesar to South Florida, where it has been under
                evaluation as a candidate cultivar for commercial orchards and home growers. Today, Jumbo Kesar
                is recommended for larger test plantings to further evaluate its suitability in South Florida,
                especially in terms of growth management and productivity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-elevated"
                >
                  <img
                    src={missionMango1}
                    alt="Jumbo Kesar mango trees in a South Florida orchard"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="relative overflow-hidden rounded-2xl shadow-elevated bg-background/60 flex items-center justify-center"
                >
                  <img
                    src={missionMango2}
                    alt="Harvested Jumbo Kesar mangoes ready for evaluation"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </motion.div>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Evaluations in South Florida
              </h3>
              <p>
                Observations over five years in a commercial orchard in South Florida used 20 trees grafted on
                Turpentine rootstock. Trees have been monitored for fruit and flower characteristics since they
                were planted in 2008, with additional evaluations conducted at the Fairchild Farm mango
                collection in Homestead, Florida.
              </p>
              <p>
                Findings indicate that Jumbo Kesar performs better than many other Indian cultivars when grown
                in South Florida, offering improved productivity, reliable flowering, and attractive fruit when
                trees are properly pruned and managed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tree & Fruit Characteristics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Tree Characteristics
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Jumbo Kesar trees are medium sized and can be kept at or below six feet without interfering
                with fruiting when annual pruning is practiced. Grafted trees have a spreading growth habit
                and dense foliage, with dark green mature leaves and reddish-brown new growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The tree and fruit have some tolerance to wet conditions, although fruit quality can suffer
                when rainfall starts early. Pruning should occur after harvesting each year to limit tree size.
                It is advisable to avoid heavy nitrogen fertilization and supplemental watering until flowering
                has occurred.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trees typically flush two to three times a year, with internodes around 13 inches in length.
                They begin bearing fruit at about three to five years of age and are considered productive
                compared with many other Indian mango cultivars grown in the Americas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Fruit & Flavor
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Jumbo Kesar fruit average around 550 g and are greenish yellow with a red blush when exposed
                to the sun. The flesh has a deep yellow, almost saffron color, is firm and juicy, and contains
                only a small amount of fiber. The skin is smooth with small, sparse pale-yellow lenticels.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The aroma is subtle and floral, with components of coconut, honeysuckle, vanilla, and banana.
                The flavor is excellent and rich, with strong notes of coconut, lemon peel, mandarin, lychee,
                honey, milk, clove, and cinnamon. With a Brix of about 25%, it has a creamy, smooth texture
                and a long flavor life in storage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Overall eating quality and consumer acceptance are excellent. Jumbo Kesar is a high-quality
                fruit and a strong alternative for local mango growers and consumers who are interested in
                exceptional flavor that reflects the best of Indian mango cultivars.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 flex items-center gap-4 rounded-2xl bg-muted/40 p-4"
              >
                <div className="relative h-20 w-20 rounded-xl bg-background/80 shadow-soft overflow-hidden">
                  <img
                    src={mangoBasket}
                    alt="Basket of ripe Jumbo Kesar mangoes"
                    className="h-full w-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    Jumbo Kesar at its best
                  </p>
                  <p>
                    Deep yellow, almost saffron-colored flesh with a creamy, smooth texture and long-lasting flavor.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maturity & Harvest */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-5 text-muted-foreground leading-relaxed"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Maturity & Harvesting in South Florida
            </h2>
            <p>
              In South Florida, Jumbo Kesar fruit are typically ready for harvest from June to July. Fruit
              should be harvested when mature but not fully ripe, with the best flavor obtained when they
              are picked at around 25% maturity and then stored at room temperature to ripen.
            </p>
            <p>
              At ambient temperatures, postharvest life is relatively short, and exposure to low storage
              temperatures can ruin the flavor. Thoughtful handling and ripening practices are important
              to preserve the delicate, complex flavor profile that makes Jumbo Kesar stand out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <span className="mb-3 inline-block font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Photo Gallery
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Jumbo Kesar in the Orchard
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[missionSlide1, missionSlide2, missionSlide3, missionSlide4, missionSlide5, missionSlide6].map(
              (image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl shadow-elevated bg-muted"
                >
                  <img
                    src={image}
                    alt="Jumbo Kesar related orchard and community scenes"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JumboKesarMangoSouthFlorida;

