import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-trust-blue to-trust-blue/90 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CH</span>
            </div>
            <span className="text-xl font-bold text-foreground">Comfort Haven</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-trust-blue transition-colors">Home</a>
            <a href="/about" className="text-foreground hover:text-trust-blue transition-colors">About</a>
            <a href="/services" className="text-foreground hover:text-trust-blue transition-colors">Services</a>
            <a href="/contact" className="text-foreground hover:text-trust-blue transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <Button variant="hero" size="sm">
              Schedule Visit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;