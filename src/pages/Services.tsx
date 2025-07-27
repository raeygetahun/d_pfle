import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Clock, Stethoscope, Utensils, Activity, Shield, Home, Brain, Dumbbell, Music, Palette } from "lucide-react";
import diningImage from "@/assets/dining.jpg";
import rehabImage from "@/assets/rehabilitation.jpg";
import activitiesImage from "@/assets/activities.jpg";

const services = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Individual care plans tailored to each resident's unique needs and preferences.",
    details: ["Daily health monitoring", "Medication management", "Personal hygiene assistance", "Mobility support"]
  },
  {
    icon: Stethoscope,
    title: "Medical Support",
    description: "24/7 nursing care with on-site medical professionals and regular health monitoring.",
    details: ["Licensed nursing staff", "Regular health assessments", "Emergency response", "Physician coordination"]
  },
  {
    icon: Utensils,
    title: "Nutritious Dining",
    description: "Chef-prepared meals with dietary accommodations and flexible dining options.",
    details: ["Three daily meals plus snacks", "Special dietary needs", "Fresh, local ingredients", "Social dining experience"]
  },
  {
    icon: Activity,
    title: "Engaging Activities",
    description: "Social programs, fitness classes, and recreational activities to promote wellbeing.",
    details: ["Daily activity programs", "Exercise classes", "Arts and crafts", "Live entertainment"]
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Open communication and family involvement in care decisions and activities.",
    details: ["Regular family meetings", "Care plan updates", "Visiting hours flexibility", "Family events"]
  },
  {
    icon: Clock,
    title: "Respite Care",
    description: "Short-term care services to provide relief for family caregivers.",
    details: ["Daily or weekly stays", "Emergency respite", "Trial stays available", "Comprehensive assessments"]
  },
];

const specialtyServices = [
  {
    icon: Brain,
    title: "Memory Care",
    description: "Specialized programs for residents with Alzheimer's and dementia",
    features: ["Secure environment", "Cognitive therapies", "Family education", "Structured routines"]
  },
  {
    icon: Dumbbell,
    title: "Rehabilitation Services",
    description: "Physical and occupational therapy to maintain independence",
    features: ["Physical therapy", "Occupational therapy", "Speech therapy", "Recovery planning"]
  },
  {
    icon: Shield,
    title: "Transitional Care",
    description: "Support for residents recovering from hospital stays",
    features: ["Post-surgery care", "Medication monitoring", "Recovery planning", "Family coordination"]
  },
  {
    icon: Home,
    title: "Independent Living Support",
    description: "Assistance while maintaining maximum independence",
    features: ["Housekeeping", "Meal preparation", "Transportation", "Social activities"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-trust-blue to-trust-blue/90 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Care Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We provide a full spectrum of services designed to support the physical, 
              emotional, and social wellbeing of our residents with personalized care plans.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Care Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our essential services form the foundation of exceptional senior care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-trust-blue to-trust-blue/80 rounded-full flex items-center justify-center group-hover:animate-float">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-trust-blue rounded-full animate-pulse-soft" style={{ animationDelay: `${detailIndex * 200}ms` }}></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Specialty Care Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced programs designed for specific care needs and recovery goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialtyServices.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-500 hover:-translate-y-1 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-warm-green to-warm-green/80 rounded-lg flex items-center justify-center group-hover:animate-float">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-warm-green rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {/* Dining Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center space-x-3">
                  <Utensils className="w-6 h-6 text-trust-blue" />
                  <span className="text-trust-blue font-semibold">Culinary Excellence</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  Gourmet Dining Experience
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our professional culinary team creates delicious, nutritionally balanced meals 
                  using fresh, locally sourced ingredients. Special dietary needs and preferences 
                  are carefully accommodated.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-trust-blue rounded-full animate-pulse-soft"></div>
                    <span className="text-foreground">Chef-prepared daily menus</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-trust-blue rounded-full animate-pulse-soft delay-75"></div>
                    <span className="text-foreground">Special diet accommodations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-trust-blue rounded-full animate-pulse-soft delay-150"></div>
                    <span className="text-foreground">Flexible dining times</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative animate-scale-in">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-trust-blue/20 to-transparent rounded-2xl"></div>
                <img 
                  src={diningImage} 
                  alt="Dining room"
                  className="relative rounded-2xl shadow-card w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Rehabilitation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative animate-scale-in order-2 lg:order-1">
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-warm-green/20 to-transparent rounded-2xl"></div>
                <img 
                  src={rehabImage} 
                  alt="Rehabilitation room"
                  className="relative rounded-2xl shadow-card w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="space-y-6 animate-fade-in order-1 lg:order-2">
                <div className="flex items-center space-x-3">
                  <Dumbbell className="w-6 h-6 text-warm-green" />
                  <span className="text-warm-green font-semibold">Recovery & Wellness</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  Rehabilitation & Therapy
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our state-of-the-art rehabilitation center offers comprehensive therapy services 
                  to help residents maintain mobility, recover from injuries, and improve their 
                  quality of life.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-warm-green">7</div>
                    <div className="text-sm text-muted-foreground">Days a Week</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-warm-green">3</div>
                    <div className="text-sm text-muted-foreground">Therapy Types</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center space-x-3">
                  <Activity className="w-6 h-6 text-accent" />
                  <span className="text-accent font-semibold">Enrichment Programs</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  Daily Activities & Programs
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our diverse activity program promotes social engagement, cognitive stimulation, 
                  and personal fulfillment through a variety of recreational and educational 
                  opportunities.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                      <Music className="w-6 h-6 text-warm-green" />
                    </div>
                    <div className="text-sm text-foreground font-medium">Music Therapy</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                      <Palette className="w-6 h-6 text-warm-green" />
                    </div>
                    <div className="text-sm text-foreground font-medium">Art Classes</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-warm-green" />
                    </div>
                    <div className="text-sm text-foreground font-medium">Social Events</div>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-accent/20 to-transparent rounded-2xl"></div>
                <img 
                  src={activitiesImage} 
                  alt="Activity programs"
                  className="relative rounded-2xl shadow-card w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-trust-blue to-trust-blue/90 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Learn More About Our Services?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a personal consultation to discuss how our services can meet 
              your loved one's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="lg" className="text-lg px-8">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-trust-blue">
                Download Service Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;