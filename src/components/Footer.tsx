import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    products: [
      { name: "Fresh Mangoes", href: "/fresh-mangoes" },
      { name: "Mango Pulp & Puree", href: "/mango-pulp" },
    ],
    company: [
      { name: "Mission Mango", href: "/mission-mango" },
      { name: "Contact Us", href: "/contact" },
    ],
    resources: [
      { name: "How to Cut a Mango", href: "/how-to-cut-mango" },
      { name: "Ripening & Storing", href: "/shipping-ripening-storing" },
      { name: "Recipes", href: "/recipes" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/savanifarms" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/savanifarms" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/savanifarms" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/savanifarms" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-4">
              <img 
                src="/assets/savani-logo.png" 
                alt="Savani Farms" 
                className="h-12 sm:h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="mb-6 font-sans text-sm leading-relaxed text-background/70 max-w-sm">
              Savani Farms brings to you the natural delicacies of Indian mango 
              and mango products. From our orchards to your table with love and tradition.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+18556962646" className="hover:text-primary transition-colors">
                  1-855-696-2646
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:mango@savanifarms.com" className="hover:text-primary transition-colors">
                  mango@savanifarms.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>401 Commerce Drive, Suite 108<br />Fort Washington, PA 19034</span>
              </div>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
              Products
            </h4>
            <ul className="space-y-3">
              {links.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
              Company
            </h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-primary">
              Resources
            </h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-sans text-sm text-background/50">
              © {currentYear} Savani Farms. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background/70 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;