import { Linkedin, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LazyImage from "@/components/ui/lazy-image";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-Stack MERN Developer | Cloud & IoT Enthusiast";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-container relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/3 to-secondary opacity-60" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <MapPin className="w-4 h-4" />
              Bengaluru, Karnataka
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              role="heading"
              aria-level={1}
            >
              Hi, I'm{" "}
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary-light animate-gradient">
                Chandu D
              </span>
            </motion.h1>
            
            <motion.div 
              className="text-xl sm:text-2xl text-muted-foreground mb-6 font-medium h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {displayText}<span className="animate-pulse">|</span>
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Results-driven MERN Developer and Cloud & IoT Enthusiast, passionate about building intelligent, scalable, and impactful digital solutions.
              Currently pursuing a Master's in Computer Applications (MCA), I specialize in full-stack web development, cloud computing, and IoT-based automation systems.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.005 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="btn-outline-hero group"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Chandu_D_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.005 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-primary hover:text-primary-dark hover:bg-primary/10"
                  onClick={() => window.open('https://linkedin.com/in/chandu-d', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Image with 3D effect */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-8 border-card shadow-2xl ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 overflow-hidden">
                <LazyImage
                  src="/chandu.jpeg"
                  alt="Chandu D - Professional Portrait"
                  className="w-full h-full object-cover"
                  priority={true}
                  sizes="(max-width: 768px) 320px, 384px"
                  quality={90}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
