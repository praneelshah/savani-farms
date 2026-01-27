import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Package, Thermometer, Refrigerator, Truck, AlertTriangle, Camera, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-shipping.jpg";

const ShippingRipeningStoring = () => {
  const shippingInfo = [
    {
      id: "special-box",
      icon: Package,
      title: "Savani Farms' Special Mango Box",
      content: [
        {
          subtitle: "Durable Construction",
          text: "Thick, impact-resistant walls to withstand rough handling during shipping."
        },
        {
          subtitle: "Compartmental Design",
          text: "Individual compartments prevent fruit abrasion, while each mango is enclosed in its own protective sleeve for added cushioning."
        },
        {
          subtitle: "Shock Absorption",
          text: "Top and bottom Styrofoam cushioning sheets minimize or eliminate impact during transit."
        }
      ]
    },
    {
      id: "shipping-advisory",
      icon: Truck,
      title: "Shipping Advisory – Perishable Product Notice",
      content: [
        {
          subtitle: "2-Day Shipping Recommended",
          text: "Due to the highly perishable nature of mangoes, we strongly recommend 2-day shipping or faster for all orders."
        },
        {
          subtitle: "Important Notice",
          text: "Shipping methods exceeding two days, such as long-distance ground transport, are not advisable and may result in fruit deterioration."
        },
        {
          subtitle: "Refund Eligibility",
          text: "Shipments taking longer than 2 days will not be eligible for refunds, as prolonged transit can compromise fruit quality beyond our control."
        }
      ]
    },
    {
      id: "upon-arrival",
      icon: AlertTriangle,
      title: "Upon Arrival Instructions",
      content: [
        {
          subtitle: "Immediate Action",
          text: "When your mangoes arrive, please bring the box indoors immediately and avoid exposing it to heat or direct sunlight at your doorstep."
        },
        {
          subtitle: "Storage",
          text: "Keep the mangoes at room temperature once inside."
        },
        {
          subtitle: "Report Issues",
          text: "If your box or mangoes appear damaged upon arrival, please report the issue to us promptly."
        }
      ]
    }
  ];

  const ripeningTips = [
    {
      id: "choosing",
      icon: CheckCircle,
      title: "How to Choose a Mango",
      tips: [
        "Don't focus on color. It is not the best indicator of ripeness.",
        "Squeeze the mango gently. A ripe mango will give slightly.",
        "Use your experience with produce such as peaches or avocados, which also become softer as they ripen.",
        "Ripe Mangos will sometimes have a fruity aroma at their stem ends.",
        "The red color that appears on some varieties is not an indicator of ripeness. Always judge by feel."
      ]
    },
    {
      id: "ripening",
      icon: Thermometer,
      title: "Ripening Your Mangoes",
      tips: [
        "Keep unripe mangos at room temperature. Mangos shouldn't be refrigerated before they are ripe.",
        "Mangos will continue to ripen at room temperature becoming sweeter and softer over several days.",
        "To speed up ripening, place mangos in paper bag at room temperature."
      ]
    },
    {
      id: "storing",
      icon: Refrigerator,
      title: "Storing Mangoes",
      tips: [
        "Once ripe, mangos should be moved to the refrigerator which will slow down the ripening process.",
        "Whole ripe mangos may be stored for up to five days in the refrigerator.",
        "Mangos may be peeled, cubed and placed in an airtight container in the refrigerator for several days.",
        "You can also store them in the freezer for up to six months."
      ]
    }
  ];

  const refundPolicy = [
    {
      id: "requirements",
      icon: Camera,
      title: "Refund Requirements",
      items: [
        "Proof of purchase",
        "Proof of delivery and condition of the box upon arrival",
        "Pictures of our box (full box picture - opened and closed)",
        "Picture of spoiled mangoes (total numbers)",
        "Report within 24 hours of delivery"
      ]
    },
    {
      id: "exclusions",
      icon: AlertTriangle,
      title: "What's Not Covered",
      items: [
        "Spongy Tissue - A natural, physiological condition that can develop internally in certain mango varieties, particularly Alphonso. It is not externally visible and is not caused by mishandling.",
        "Skin Blemishes - Natural surface imperfections such as small black dots, minor bruising, sap burns, or slight wrinkles on the outer skin (non-edible part).",
        "Orders not purchased directly from SavaniFarms.com",
        "Mangoes received in boxes other than our special mango box",
        "Shipments taking longer than 2 days"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Shipping, Ripening & Storing"
        subtitle="Learn how to judge ripeness, store your mangoes properly, and understand our shipping process for the best mango experience."
        breadcrumb="Shipping & Storing"
        image={heroImage}
      />

      {/* Shipping Section */}
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
              Delivery Process
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Mango Shipping
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              At SavaniFarms.com, we carefully inspect each mango before shipping to ensure you have the best possible experience with this beloved fruit of India.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {shippingInfo.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={item.id} className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4">
                      {item.content.map((contentItem, i) => (
                        <div key={i} className="pl-4 border-l-2 border-primary/20">
                          <h4 className="mb-1 font-semibold text-foreground">{contentItem.subtitle}</h4>
                          <p className="text-muted-foreground leading-relaxed">{contentItem.text}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Ripening & Storing Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Care Guide
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Ripening & Storing
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              To get the most from your mango adventures, you'll want to know how to choose, ripen and store your mangos once you get them home.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {ripeningTips.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={item.id} className="rounded-2xl border border-border bg-card/90 backdrop-blur-sm overflow-hidden shadow-soft">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5">
                        <item.icon className="h-7 w-7 text-secondary" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <ul className="space-y-3">
                      {item.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                          <span className="leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Refund Policy Section */}
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
              Our Guarantee
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Refund Policy
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              If you receive any spoiled mangoes in our box, we take full responsibility for replacing them. Here's what you need to know.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {refundPolicy.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <ul className="space-y-3">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-8 text-center"
          >
            <Clock className="mx-auto mb-4 h-10 w-10 text-primary" />
            <p className="font-semibold text-foreground text-lg">
              Important: Please report any issues within 24 hours of delivery
            </p>
            <p className="mt-2 text-muted-foreground">
              We work closely with shipping companies like FedEx, UPS, and USPS to ensure a smooth delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingRipeningStoring;
