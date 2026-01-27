import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock, Send, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-contact.jpg";

const offices = [
  {
    location: "USA Office",
    address: "401 Commerce Drive, Suite 108",
    city: "Fort Washington, PA 19034",
    phone: "1-855-696-2646",
    email: "mango@savanifarms.com",
  },
  {
    location: "India Office",
    address: "Suite 203, Mauryansh Elanza",
    city: "Ahmedabad-380 015, Gujarat",
    phone: "+91 79 2642 1234",
    email: "india@savanifarms.com",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch with our team for orders, inquiries, or partnerships"
        breadcrumb="Contact"
        image={heroImage}
      />

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 md:p-10 rounded-3xl shadow-elevated"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Send us a Message
                </h2>
              </div>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input placeholder="John" className="h-12" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" className="h-12" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" className="h-12" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input placeholder="Order Inquiry" className="h-12" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us how we can help you..." 
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-12 text-base">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Our Offices
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Reach out to our teams in the USA or India. We're here to help with 
                  orders, partnerships, and any questions about our premium mango products.
                </p>
              </div>

              {offices.map((office, index) => (
                <motion.div
                  key={office.location}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elevated transition-shadow"
                >
                  <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                    {office.location}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p>{office.address}</p>
                        <p>{office.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Business Hours
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                  Saturday - Sunday: Closed
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
