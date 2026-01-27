import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Your Selection
            </span>
            <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Shopping Cart
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {totalItems > 0
                ? `You have ${totalItems} item${totalItems > 1 ? "s" : ""} in your cart`
                : "Your cart is empty"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="mb-6 mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
                Your cart is empty
              </h2>
              <p className="mb-8 text-muted-foreground">
                Looks like you haven't added any mangoes yet!
              </p>
              <Link to="/fresh-mangoes">
                <Button className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Browse Products
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-card border border-border shadow-soft"
                  >
                    <div className="h-24 w-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-sm text-primary">{item.tagline}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive/80 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 rounded-2xl bg-card border border-border p-6 shadow-soft">
                  <h3 className="mb-6 font-serif text-xl font-semibold text-foreground">
                    Order Summary
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Total Items</span>
                      <span>{totalItems}</span>
                    </div>
                    <div className="border-t border-border pt-4 flex justify-between font-semibold text-foreground">
                      <span>Contact for Pricing</span>
                    </div>
                  </div>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Our mangoes are priced based on seasonal availability. Contact us for current pricing and to place your order.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full mb-3">Contact to Order</Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
