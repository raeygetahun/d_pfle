import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Clock, Stethoscope, Utensils, Activity } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Individual care plans tailored to each resident's unique needs and preferences.",
  },
  {
    icon: Stethoscope,
    title: "Medical Support",
    description: "24/7 nursing care with on-site medical professionals and regular health monitoring.",
  },
  {
    icon: Utensils,
    title: "Nutritious Dining",
    description: "Chef-prepared meals with dietary accommodations and flexible dining options.",
  },
  {
    icon: Activity,
    title: "Engaging Activities",
    description: "Social programs, fitness classes, and recreational activities to promote wellbeing.",
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Open communication and family involvement in care decisions and activities.",
  },
  {
    icon: Clock,
    title: "Respite Care",
    description: "Short-term care services to provide relief for family caregivers.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Care Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide a full spectrum of services designed to support the physical, 
            emotional, and social wellbeing of our residents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-trust-blue to-trust-blue/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;