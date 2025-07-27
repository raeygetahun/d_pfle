import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Calendar, Car, Ambulance } from "lucide-react";

const ContactPage = () => {
  const emergencyContacts = [
    {
      icon: Phone,
      title: "Emergency Line",
      primary: "(555) 123-4567",
      secondary: "Available 24/7 for urgent matters",
      urgent: true
    },
    {
      icon: Ambulance,
      title: "Medical Emergency",
      primary: "911",
      secondary: "For life-threatening situations",
      urgent: true
    }
  ];

  const departments = [
    {
      icon: Phone,
      title: "Admissions",
      contact: "(555) 123-4568",
      email: "admissions@comforthaven.care",
      hours: "Mon-Fri: 8 AM - 6 PM"
    },
    {
      icon: Mail,
      title: "Family Services",
      contact: "(555) 123-4569",
      email: "families@comforthaven.care",
      hours: "Daily: 8 AM - 8 PM"
    },
    {
      icon: Calendar,
      title: "Activities Coordinator",
      contact: "(555) 123-4570",
      email: "activities@comforthaven.care",
      hours: "Mon-Fri: 9 AM - 5 PM"
    },
    {
      icon: Car,
      title: "Transportation",
      contact: "(555) 123-4571",
      email: "transport@comforthaven.care",
      hours: "Mon-Fri: 8 AM - 4 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-trust-blue to-trust-blue/90 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We're here to answer your questions, provide information, and help you 
              discover how Comfort Haven can be the perfect home for your loved one.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-12 bg-gradient-to-r from-red-50 to-red-100/50 border-b-2 border-red-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-red-800 mb-2">
              Emergency Contacts
            </h2>
            <p className="text-red-700">
              Important numbers for urgent situations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {emergencyContacts.map((contact, index) => (
              <Card 
                key={index} 
                className="border-red-200 bg-white hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 mx-auto mb-2 bg-red-600 rounded-full flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-red-800">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-red-900 mb-1">{contact.primary}</div>
                  <div className="text-sm text-red-700">{contact.secondary}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect directly with the right department for your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card 
                key={index} 
                className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-trust-blue to-trust-blue/80 rounded-lg flex items-center justify-center">
                      <dept.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{dept.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-trust-blue" />
                    <span className="font-semibold text-foreground">{dept.contact}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-trust-blue" />
                    <span className="text-muted-foreground">{dept.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-trust-blue" />
                    <span className="text-muted-foreground">{dept.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Location Info */}
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground">
                Visit Our Facility
              </h2>
              
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-trust-blue" />
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-lg font-semibold text-foreground">
                    Comfort Haven Senior Living
                  </div>
                  <div className="text-muted-foreground">
                    123 Maple Street<br />
                    Springfield, ST 12345
                  </div>
                  <div className="pt-3">
                    <div className="text-sm text-muted-foreground mb-2">Easily accessible via:</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Interstate 95, Exit 42</li>
                      <li>• Metro Bus Route 15 (stops in front)</li>
                      <li>• Free parking available</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-trust-blue" />
                    <span>Visiting Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-semibold text-foreground">General Visits</div>
                      <div className="text-muted-foreground">Daily: 8 AM - 8 PM</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Meal Times</div>
                      <div className="text-muted-foreground">Welcome to join</div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <div className="text-sm text-muted-foreground">
                      <strong>Tours:</strong> Available daily by appointment<br />
                      <strong>Special arrangements:</strong> Contact us for extended visits
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Map Placeholder */}
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-muted to-muted/60 rounded-2xl h-96 flex items-center justify-center shadow-card">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-16 h-16 mx-auto mb-4 animate-float" />
                  <div className="text-lg font-semibold mb-2">Interactive Map</div>
                  <div className="text-sm">
                    Directions and nearby amenities<br />
                    Available on our website
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default ContactPage;