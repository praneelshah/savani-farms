import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-background py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -right-40 top-0 text-[300px] opacity-5 pointer-events-none">
        🥭
      </div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Get in Touch
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-lg text-muted-foreground">
            Have questions about our mangoes or need help with an order? 
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-card p-8 shadow-elevated border border-border"
          >
            <h3 className="mb-6 font-serif text-2xl font-semibold text-foreground">
              Send us a Message
            </h3>
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input placeholder="Your full name" className="bg-background rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background rounded-xl" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input placeholder="How can we help?" className="bg-background rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..." 
                  rows={5}
                  className="bg-background resize-none rounded-xl"
                />
              </div>
              <Button className="w-full rounded-xl" size="lg">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-8 font-serif text-2xl font-semibold text-foreground">
              Official Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-sans font-semibold text-foreground">
                    Address
                  </h4>
                  <p className="font-sans text-muted-foreground">
                    401 Commerce Drive, Suite 108<br />
                    Fort Washington, PA 19034
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-sans font-semibold text-foreground">
                    Phone
                  </h4>
                  <a 
                    href="tel:+18556962646"
                    className="font-sans text-muted-foreground transition-colors hover:text-primary block"
                  >
                    Toll Free: 1-855-696-2646
                  </a>
                  <p className="font-sans text-muted-foreground">
                    Fax: 215-646-6199
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-sans font-semibold text-foreground">
                    Email
                  </h4>
                  <a 
                    href="mailto:mango@savanifarms.com"
                    className="font-sans text-muted-foreground transition-colors hover:text-primary"
                  >
                    mango@savanifarms.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-sans font-semibold text-foreground">
                    Business Hours
                  </h4>
                  <p className="font-sans text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;