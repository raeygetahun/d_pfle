import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Heart, Award } from "lucide-react";
import activitiesImage from "@/assets/activities.jpg";
import gardenImage from "@/assets/garden.jpg";
import staffImage from "@/assets/healthcare-staff.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Families Choose Comfort Haven
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what makes us the trusted choice for senior care in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-scale-in border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-trust-blue to-trust-blue/80 rounded-full flex items-center justify-center group-hover:animate-float">
                  <Star className="w-10 h-10 text-white" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">5-Star Care</h3>
                <p className="text-muted-foreground leading-relaxed">
                  State-certified with top ratings for quality care, safety standards, and resident satisfaction
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-scale-in delay-100 border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-warm-green to-warm-green/80 rounded-full flex items-center justify-center group-hover:animate-float delay-75">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Family Focused</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Open communication, family involvement, and personalized care plans for every resident
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-scale-in delay-200 border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center group-hover:animate-float delay-150">
                  <Heart className="w-10 h-10 text-warm-green" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Compassionate Care</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated staff who treat every resident with dignity, respect, and genuine care
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-trust-blue" />
                <span className="text-trust-blue font-semibold">Award-Winning Facility</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                Creating Joyful Moments Every Day
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our vibrant community offers enriching activities, beautiful spaces, and meaningful 
                connections that help our residents thrive. From art therapy to music sessions, 
                every day brings new opportunities for joy and engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Schedule a Visit
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="warm" size="lg">
                  View Activities
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-trust-blue/20 to-transparent rounded-2xl"></div>
              <img 
                src={activitiesImage} 
                alt="Residents enjoying activities"
                className="relative rounded-2xl shadow-card w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Garden & Wellness */}
      <section className="py-20 bg-gradient-to-r from-secondary/30 to-accent/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-scale-in order-2 lg:order-1">
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-warm-green/20 to-transparent rounded-2xl"></div>
              <img 
                src={gardenImage} 
                alt="Beautiful garden spaces"
                className="relative rounded-2xl shadow-card w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="space-y-8 animate-fade-in order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground">
                Therapeutic Gardens & Outdoor Spaces
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our beautifully landscaped gardens provide a peaceful retreat where residents 
                can enjoy nature, participate in gardening activities, and find tranquility 
                in our thoughtfully designed outdoor spaces.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warm-green rounded-full animate-pulse-soft"></div>
                  <span className="text-foreground">Accessible walking paths</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warm-green rounded-full animate-pulse-soft delay-75"></div>
                  <span className="text-foreground">Sensory garden areas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warm-green rounded-full animate-pulse-soft delay-150"></div>
                  <span className="text-foreground">Covered outdoor seating</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warm-green rounded-full animate-pulse-soft delay-300"></div>
                  <span className="text-foreground">Bird watching areas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Excellence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground">
                Professional Care Team
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our certified nursing staff and caregivers are the heart of Comfort Haven. 
                With extensive training and genuine compassion, they provide 24/7 support 
                while maintaining the highest standards of care.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-trust-blue">24/7</div>
                  <div className="text-sm text-muted-foreground">Nursing Care</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-trust-blue">15:1</div>
                  <div className="text-sm text-muted-foreground">Staff to Resident Ratio</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-trust-blue/20 to-transparent rounded-2xl"></div>
              <img 
                src={staffImage} 
                alt="Professional healthcare staff"
                className="relative rounded-2xl shadow-card w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;