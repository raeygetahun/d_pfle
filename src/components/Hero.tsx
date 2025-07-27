import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              <Heart className="w-5 h-5 text-accent" fill="currentColor" />
              <Shield className="w-5 h-5 text-secondary" />
              <Users className="w-5 h-5 text-accent" />
            </div>
            <span className="text-accent font-medium">Caring • Professional • Family</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            A Place to Call
            <span className="block text-accent">Home</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            At Comfort Haven, we provide compassionate care in a warm, home-like environment. 
            Our dedicated team ensures your loved ones receive the personalized attention they deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Schedule a Tour
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8">
              Learn More
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex items-center space-x-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-sm text-gray-300">Years of Care</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-sm text-gray-300">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-300">Professional Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;