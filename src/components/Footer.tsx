import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-border">
      <div className="max-container py-12">
        <div className="text-center">
          {/* Main Footer Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Chandu D</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              MERN Developer crafting innovative digital solutions with modern technologies. 
              Passionate about driving technological excellence and delivering impactful results.
            </p>
          </div>

          {/* Made With Love */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using</span>
            <Code className="w-4 h-4 text-primary" />
            <span>and lots of</span>
            <Coffee className="w-4 h-4 text-amber-600" />
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Chandu D. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;