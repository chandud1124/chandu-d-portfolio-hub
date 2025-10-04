import { GraduationCap, Award, Languages } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "Master of Computer Applications",
      description: "AIMS Institutes • 2023–2025 (Ongoing)",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Award,
      title: "Focus Areas",
      subtitle: "Cloud Computing & IoT",
      description: "Specialized in AWS, Azure, GCP deployments and IoT automation systems",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Languages,
      title: "Languages",
      subtitle: "Multilingual Communication",
      description: "English, Kannada",
      color: "text-primary",
      bgColor: "bg-secondary/50"
    }
  ];

  return (
    <section id="about" className="section-container relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          x: [0, 20, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, -40, 0],
          x: [0, -30, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10,
          ease: "easeInOut"
        }}
      />

      <div className="max-container relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Motivated and detail-oriented Computer Applications student with strong foundations 
              in programming, database management, and modern software development. I'm passionate 
              about leveraging technology to solve real-world problems and creating innovative 
              solutions that make a difference.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My expertise spans across cloud computing platforms, IoT systems, and full-stack 
              web development. I thrive in collaborative environments and excel at adapting to 
              new technologies and methodologies. Always eager to learn and grow, I approach 
              every challenge with curiosity and determination.
            </p>
          </motion.div>
          
          <div className="grid gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 3,
                  rotateX: 3
                }}
                className="tilt-card"
              >
                <div className="professional-card glass-card group">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className={`w-12 h-12 ${card.bgColor} rounded-xl flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <card.icon className={`w-6 h-6 ${card.color}`} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg">{card.title}</h3>
                      <p className="text-muted-foreground text-sm">{card.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
