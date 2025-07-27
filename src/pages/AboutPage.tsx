import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Award, Users, Heart, Clock, Calendar, MapPin, Star } from "lucide-react";
import staffImage from "@/assets/healthcare-staff.jpg";
import commonAreaImage from "@/assets/common-area.jpg";

const AboutPage = () => {
  const timeline = [
    {
      year: "1999",
      title: "Founded",
      description: "Comfort Haven opened its doors with a vision to provide exceptional senior care"
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Added memory care wing and expanded rehabilitation services"
    },
    {
      year: "2012",
      title: "Recognition",
      description: "Received state certification and 5-star quality rating"
    },
    {
      year: "2018",
      title: "Innovation",
      description: "Implemented cutting-edge care technologies and family communication systems"
    },
    {
      year: "2024",
      title: "Excellence",
      description: "Celebrating 25 years of compassionate care and community service"
    }
  ];

  const testimonials = [
    {
      quote: "The staff at Comfort Haven treated my father like family. Their compassion and professionalism gave us peace of mind during a difficult time.",
      author: "Jennifer Thompson",
      role: "Daughter of Resident",
      rating: 5
    },
    {
      quote: "I've worked in healthcare for 30 years, and I can honestly say this is the finest facility I've seen. The attention to detail is remarkable.",
      author: "Dr. Michael Chen",
      role: "Family Physician",
      rating: 5
    },
    {
      quote: "Moving here was the best decision we made. The activities, the food, the care - everything exceeds expectations.",
      author: "Robert & Mary Wilson",
      role: "Residents",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-warm-green to-warm-green/90 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Story of Care
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              For 25 years, Comfort Haven has been a beacon of compassionate care, 
              creating a true home where seniors thrive with dignity and joy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Our Mission & Values
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe that every senior deserves to live with dignity, surrounded by 
                  care that honors their life story and supports their individual journey.
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <Heart className="w-6 h-6 text-trust-blue" fill="currentColor" />
                      <h3 className="text-xl font-semibold text-foreground">Compassion</h3>
                    </div>
                    <p className="text-muted-foreground">Every interaction is guided by empathy, kindness, and genuine care for our residents' wellbeing.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <Users className="w-6 h-6 text-warm-green" />
                      <h3 className="text-xl font-semibold text-foreground">Community</h3>
                    </div>
                    <p className="text-muted-foreground">We foster meaningful connections and create an environment where everyone feels they belong.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <Award className="w-6 h-6 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">Excellence</h3>
                    </div>
                    <p className="text-muted-foreground">We continuously strive for the highest standards in care, safety, and service quality.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-trust-blue/20 to-transparent rounded-2xl"></div>
              <img 
                src={staffImage} 
                alt="Healthcare staff"
                className="relative rounded-2xl shadow-card w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              25 Years of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our journey of continuous improvement and unwavering dedication to senior care
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-trust-blue to-warm-green rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center animate-fade-in ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-trust-blue mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-trust-blue rounded-full animate-pulse-soft"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-secondary/30 to-accent/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our achievements and resident satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-scale-in">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-trust-blue mb-2 animate-float">25</div>
                <div className="text-lg font-semibold text-foreground mb-1">Years</div>
                <div className="text-sm text-muted-foreground">of Caring Service</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-scale-in delay-100">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-warm-green mb-2 animate-float delay-75">200+</div>
                <div className="text-lg font-semibold text-foreground mb-1">Families</div>
                <div className="text-sm text-muted-foreground">Served with Excellence</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-scale-in delay-200">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2 animate-float delay-150">50+</div>
                <div className="text-lg font-semibold text-foreground mb-1">Staff Members</div>
                <div className="text-sm text-muted-foreground">Dedicated Professionals</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-scale-in delay-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-1 text-4xl font-bold text-trust-blue mb-2">
                  <span className="animate-float delay-300">5</span>
                  <Star className="w-8 h-8 animate-pulse-soft" fill="currentColor" />
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">Star Rating</div>
                <div className="text-sm text-muted-foreground">State Certification</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Families Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The trust and satisfaction of our families is our greatest achievement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-soft-cream to-accent/50 border-accent/20 hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-trust-blue mb-4 animate-pulse-soft" />
                  <blockquote className="text-foreground leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent animate-pulse-soft" fill="currentColor" style={{ animationDelay: `${i * 100}ms` }} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-warm-green/20 to-transparent rounded-2xl"></div>
              <img 
                src={commonAreaImage} 
                alt="Team and residents"
                className="relative rounded-2xl shadow-card w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground">
                Meet Our Care Family
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of dedicated professionals brings together years of experience, 
                specialized training, and genuine passion for senior care. From our 
                licensed nurses to our activity coordinators, every team member is 
                committed to creating a positive, nurturing environment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300">
                  <Clock className="w-8 h-8 text-trust-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Care Available</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300">
                  <Calendar className="w-8 h-8 text-trust-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">365</div>
                  <div className="text-sm text-muted-foreground">Days a Year</div>
                </div>
              </div>
              <Button variant="caring" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-trust-blue to-trust-blue/90 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Experience the Comfort Haven Difference
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Visit us to see firsthand how we create a caring community where 
              your loved one can truly thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="lg" className="text-lg px-8">
                Schedule a Tour
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-trust-blue">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;