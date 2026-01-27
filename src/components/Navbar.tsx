import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, ChevronDown, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Mission Mango", href: "/mission-mango" },
  ];

  const productsDropdown = {
    name: "Products",
    items: [
      { name: "Fresh Mangoes", href: "/fresh-mangoes" },
      { name: "Pulp & Puree", href: "/mango-pulp" },
    ]
  };

  const resourcesDropdown = {
    name: "Resources",
    items: [
      { name: "Shipping & Storing", href: "/shipping-ripening-storing" },
      { name: "How to Cut", href: "/how-to-cut-mango" },
      { name: "Recipes", href: "/recipes" },
    ]
  };

  // Show transparent only on home page when not scrolled
  const showTransparent = isHomePage && !isScrolled;

  const isActiveDropdown = (items: { href: string }[]) => {
    return items.some(item => location.pathname === item.href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "navbar-glass"
          : "navbar-solid border-b border-border"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/assets/savani-logo.png" 
            alt="Savani Farms" 
            className="h-10 sm:h-12 lg:h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                showTransparent 
                  ? "text-white hover:text-primary" 
                  : "text-foreground"
              } ${location.pathname === link.href ? "text-primary" : ""}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors hover:text-primary outline-none ${
              showTransparent 
                ? "text-white hover:text-primary" 
                : "text-foreground"
            } ${isActiveDropdown(productsDropdown.items) ? "text-primary" : ""}`}>
              {productsDropdown.name}
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 min-w-[180px] bg-background border border-border shadow-elevated">
              {productsDropdown.items.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    to={item.href}
                    className={`cursor-pointer w-full ${location.pathname === item.href ? "text-primary bg-muted" : ""}`}
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Resources Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors hover:text-primary outline-none ${
              showTransparent 
                ? "text-white hover:text-primary" 
                : "text-foreground"
            } ${isActiveDropdown(resourcesDropdown.items) ? "text-primary" : ""}`}>
              {resourcesDropdown.name}
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 min-w-[180px] bg-background border border-border shadow-elevated">
              {resourcesDropdown.items.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    to={item.href}
                    className={`cursor-pointer w-full ${location.pathname === item.href ? "text-primary bg-muted" : ""}`}
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/contact"
            className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
              showTransparent 
                ? "text-white hover:text-primary" 
                : "text-foreground"
            } ${location.pathname === "/contact" ? "text-primary" : ""}`}
          >
            Contact
          </Link>
        </div>

        {/* Phone & Cart */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+18556962646"
            className={`flex items-center gap-2 font-sans text-sm font-medium transition-colors hover:text-primary ${
              showTransparent ? "text-white/90" : "text-muted-foreground"
            }`}
          >
            <Phone className="h-4 w-4" />
            1-855-696-2646
          </a>
          <Link to="/cart" className="relative">
            <button
              className={`p-2 rounded-lg transition-colors ${
                showTransparent 
                  ? "text-white hover:bg-white/10" 
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            showTransparent 
              ? "text-white hover:bg-white/10" 
              : "text-foreground hover:bg-muted"
          }`}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 right-0 top-full bg-background border-b border-border px-4 py-6 shadow-elevated lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-sans text-lg font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Products Section */}
            <div className="border-t border-border pt-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Products</span>
              <div className="mt-3 flex flex-col gap-3 pl-4">
                {productsDropdown.items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-sans text-base transition-colors hover:text-primary ${
                      location.pathname === item.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources Section */}
            <div className="border-t border-border pt-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Resources</span>
              <div className="mt-3 flex flex-col gap-3 pl-4">
                {resourcesDropdown.items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-sans text-base transition-colors hover:text-primary ${
                      location.pathname === item.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`border-t border-border pt-4 font-sans text-lg font-medium transition-colors hover:text-primary ${
                location.pathname === "/contact" ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            
            <Link
              to="/cart"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-t border-border pt-4 flex items-center gap-2 font-sans text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              Cart {totalItems > 0 && `(${totalItems})`}
            </Link>
            
            <div className="border-t border-border pt-4 flex flex-col gap-3">
              <a
                href="tel:+18556962646"
                className="flex items-center gap-2 font-sans text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                1-855-696-2646
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;