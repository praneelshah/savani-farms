import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import MissionMango from "./pages/MissionMango";
import FreshMangoes from "./pages/FreshMangoes";
import MangoPulp from "./pages/MangoPulp";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import ShippingRipeningStoring from "./pages/ShippingRipeningStoring";
import HowToCutMango from "./pages/HowToCutMango";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import JumboKesarMangoSouthFlorida from "./pages/JumboKesarMangoSouthFlorida";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mission-mango" element={<MissionMango />} />
            <Route path="/fresh-mangoes" element={<FreshMangoes />} />
            <Route path="/mango-pulp" element={<MangoPulp />} />
            <Route path="/jumbo-kesar-mango-south-florida" element={<JumboKesarMangoSouthFlorida />} />
            <Route path="/shipping-ripening-storing" element={<ShippingRipeningStoring />} />
            <Route path="/how-to-cut-mango" element={<HowToCutMango />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
