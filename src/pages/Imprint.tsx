import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Scale, FileText, Shield, Users, Heart } from "lucide-react";

const Imprint = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-muted/60">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Legal Information
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Important legal information, licensing details, and compliance information 
              for Comfort Haven Senior Living facility.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground">
                Company Information
              </h2>
              
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-trust-blue" />
                    <span>Facility Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-semibold text-foreground">Legal Name:</div>
                    <div className="text-muted-foreground">Comfort Haven Senior Living LLC</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Address:</div>
                    <div className="text-muted-foreground">
                      123 Maple Street<br />
                      Springfield, ST 12345<br />
                      United States
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone:</div>
                    <div className="text-muted-foreground">(555) 123-4567</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email:</div>
                    <div className="text-muted-foreground">legal@comforthaven.care</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground">
                Management
              </h2>
              
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-trust-blue" />
                    <span>Leadership Team</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-semibold text-foreground">Executive Director:</div>
                    <div className="text-muted-foreground">Sarah Johnson, RN, BSN</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Medical Director:</div>
                    <div className="text-muted-foreground">Dr. Michael Chen, MD</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Administrator:</div>
                    <div className="text-muted-foreground">Jennifer Martinez, NHA</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Director of Nursing:</div>
                    <div className="text-muted-foreground">Patricia Williams, RN, MSN</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing & Compliance */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Licensing & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our facility operates under full compliance with state and federal regulations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-trust-blue to-trust-blue/80 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">State License</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="font-semibold text-foreground">License #: NH-2024-789</div>
                <div className="text-muted-foreground">Issued by State Health Department</div>
                <div className="text-muted-foreground">Valid through December 31, 2024</div>
                <div className="text-sm text-trust-blue font-semibold">5-Star Rating</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 animate-scale-in delay-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-warm-green to-warm-green/80 rounded-full flex items-center justify-center">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Medicare Certified</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="font-semibold text-foreground">Provider #: 124567</div>
                <div className="text-muted-foreground">Centers for Medicare & Medicaid</div>
                <div className="text-muted-foreground">Current certification active</div>
                <div className="text-sm text-warm-green font-semibold">Full Compliance</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 animate-scale-in delay-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-warm-green" />
                </div>
                <CardTitle className="text-xl text-foreground">Accreditations</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="text-muted-foreground">Joint Commission Accredited</div>
                <div className="text-muted-foreground">Better Business Bureau A+</div>
                <div className="text-muted-foreground">LeadingAge Member</div>
                <div className="text-sm text-accent font-semibold">All Current</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Notices */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Legal Notices
              </h2>
            </div>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Privacy Notice</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Comfort Haven Senior Living is committed to protecting the privacy and confidentiality 
                  of our residents' personal and health information. We comply with all applicable privacy 
                  laws including HIPAA (Health Insurance Portability and Accountability Act) and maintain 
                  strict protocols for handling sensitive information.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our privacy practices ensure that personal health information is used only for treatment, 
                  payment, and healthcare operations. We do not share information with third parties 
                  without proper authorization or legal requirement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Residents' Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All residents have fundamental rights that are protected by federal and state law. 
                  These rights include but are not limited to:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Right to dignified treatment and care</li>
                  <li>Right to participate in care planning decisions</li>
                  <li>Right to privacy and confidentiality</li>
                  <li>Right to voice complaints without retaliation</li>
                  <li>Right to receive visitors and communicate freely</li>
                  <li>Right to manage personal finances</li>
                  <li>Right to be free from abuse, neglect, and exploitation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contact for Complaints</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have concerns about care or treatment, please contact:
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-foreground">Facility Administrator:</div>
                    <div className="text-muted-foreground">(555) 123-4567 ext. 101</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">State Ombudsman:</div>
                    <div className="text-muted-foreground">(555) STATE-OMB</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">State Health Department:</div>
                    <div className="text-muted-foreground">(555) HEALTH-DEPT</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Emergency Procedures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Comfort Haven maintains comprehensive emergency preparedness plans approved by 
                  local and state authorities. Our facility is equipped with emergency power, 
                  communication systems, and evacuation procedures. All staff receive regular 
                  emergency response training, and we conduct mandatory drills throughout the year.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground animate-fade-in">
            <p>
              This website and its contents are for informational purposes only. 
              For specific medical advice or care decisions, please consult with our healthcare professionals.
            </p>
            <p className="mt-2">
              Last updated: January 2024 | © 2024 Comfort Haven Senior Living LLC. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Imprint;