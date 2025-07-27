import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Award, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                25 Years of Compassionate Care
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 1999, Comfort Haven has been a trusted name in senior care, 
                providing a nurturing environment where residents can maintain their 
                independence while receiving the support they need.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our philosophy centers on treating each resident as family, honoring their 
                life stories, and creating meaningful connections that enhance their quality of life.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border border-border/50">
                <Award className="w-8 h-8 text-trust-blue mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">A+</div>
                <div className="text-sm text-muted-foreground">State Rating</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border/50">
                <Users className="w-8 h-8 text-trust-blue mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Care Staff</div>
              </div>
            </div>
            
            <Button variant="hero" size="lg">
              Meet Our Team
            </Button>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-soft-cream to-accent/50 border-accent/20">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-trust-blue mb-4" />
                <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                  "Comfort Haven isn't just where my mother lives—it's where she thrives. 
                  The staff treats her with such love and respect, and I know she's in the best hands."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-trust-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah Martinez</div>
                    <div className="text-sm text-muted-foreground">Family Member</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary to-secondary/70 border-secondary/50">
              <CardContent className="p-8">
                <Heart className="w-8 h-8 text-warm-green mb-4" fill="currentColor" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional care that honors the dignity and independence of every resident, 
                  while creating a vibrant community where seniors can continue to grow, learn, and find joy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;