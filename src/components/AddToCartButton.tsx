import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    tagline: string;
    image: string;
  };
  size?: "sm" | "default" | "lg";
  showLabel?: boolean;
  className?: string;
}

const AddToCartButton = ({ 
  product, 
  size = "default", 
  showLabel = true,
  className = "" 
}: AddToCartButtonProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 99));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        tagline: product.tagline,
        image: product.image,
      });
    }
    toast({
      title: "Added to Cart",
      description: `${quantity}x ${product.name} has been added to your cart.`,
    });
    setQuantity(1);
  };

  const sizeClasses = {
    sm: "h-7 w-7 text-xs",
    default: "h-8 w-8 text-sm",
    lg: "h-9 w-9 text-base",
  };

  const quantityClasses = {
    sm: "w-8 text-xs",
    default: "w-10 text-sm",
    lg: "w-12 text-base",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Quantity Selector */}
      <div className="flex items-center border border-border rounded-full bg-background">
        <button
          onClick={handleDecrement}
          className={`${sizeClasses[size]} rounded-l-full flex items-center justify-center hover:bg-muted transition-colors`}
          aria-label="Decrease quantity"
        >
          <Minus className="h-3 w-3" />
        </button>
        <span className={`${quantityClasses[size]} text-center font-medium text-foreground`}>
          {quantity}
        </span>
        <button
          onClick={handleIncrement}
          className={`${sizeClasses[size]} rounded-r-full flex items-center justify-center hover:bg-muted transition-colors`}
          aria-label="Increase quantity"
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>

      {/* Add to Cart Button */}
      <Button 
        onClick={handleAddToCart} 
        size={size} 
        className="rounded-full gap-2"
      >
        <ShoppingCart className="h-4 w-4" />
        {showLabel && "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCartButton;
