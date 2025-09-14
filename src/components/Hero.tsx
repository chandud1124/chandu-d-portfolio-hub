import { Mail, Linkedin, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/chandu-hero.jpg";

const Hero = () => {
  return (
    <section className="section-container bg-gradient-to-br from-background to-secondary">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Bengaluru, Karnataka
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Chandu D</span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-muted-foreground mb-6 font-medium">
              MCA Student | Aspiring Software Engineer
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Cloud & IoT Enthusiast passionate about building innovative solutions. 
              Currently pursuing Master's in Computer Applications with hands-on experience 
              in cloud platforms and modern web technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-hero">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" className="btn-outline-hero">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button variant="ghost" size="lg" className="text-primary hover:text-primary-dark">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl scale-110"></div>
              <img
                src={heroImage}
                alt="Chandu D - Professional Portrait"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-8 border-card shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;