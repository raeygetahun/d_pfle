import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-warm-green to-warm-green/90 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-warm-green font-bold text-sm">CH</span>
              </div>
              <span className="text-xl font-bold">Comfort Haven</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Providing compassionate care and creating a true home environment 
              for seniors in our community since 1999.
            </p>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-white/80">Made with love for our residents</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-white/80 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/imprint" className="text-white/80 hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Care Services</h4>
            <ul className="space-y-2">
              <li><span className="text-white/80">Assisted Living</span></li>
              <li><span className="text-white/80">Memory Care</span></li>
              <li><span className="text-white/80">Respite Care</span></li>
              <li><span className="text-white/80">Rehabilitation</span></li>
              <li><span className="text-white/80">Wellness Programs</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-white/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-white/80">info@comforthaven.care</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span className="text-white/80">
                  123 Maple Street<br />
                  Springfield, ST 12345
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80">
            © 2024 Comfort Haven Senior Living. All rights reserved. | Licensed by the State Health Department
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;