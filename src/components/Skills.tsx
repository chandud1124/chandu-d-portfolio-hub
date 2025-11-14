import { 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  GitBranch, 
  Globe 
} from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "TailwindCSS", level: 88 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 80 }
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Code,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 82 },
        { name: "REST APIs", level: 85 },
        { name: "JWT", level: 80 },
        { name: "bcrypt", level: 78 }
      ],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 85 }
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 87 },
        { name: "Azure", level: 83 },
        { name: "GCP", level: 80 }
      ],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: GitBranch,
      title: "IoT & Automation",
      skills: [
        { name: "ESP32", level: 85 },
        { name: "MQTT", level: 82 },
        { name: "TensorFlow", level: 78 },
        { name: "Python", level: 88 },
        { name: "OpenCV", level: 80 }
      ],
      color: "text-muted-foreground",
      bgColor: "bg-muted"
    },
    {
      icon: Palette,
      title: "Dev Tools & Design",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 85 },
        { name: "Figma", level: 80 }
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="skills" className="section-container bg-secondary/30 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 animated-dots opacity-30"></div>
      
      <div className="max-container relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive expertise across modern technology stacks, enabling the development of 
            high-performance, scalable, and user-centric applications that meet enterprise standards
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="tilt-card h-full"
            >
              <div className="professional-card border-gradient group relative overflow-hidden h-full flex flex-col">
                {/* Neon glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity neon-glow -z-10"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`w-14 h-14 ${category.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className={`w-7 h-7 ${category.color}`} />
                  </motion.div>
                  <h3 className="font-semibold text-xl">{category.title}</h3>
                </div>
                
                <div className="space-y-3 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.5, delay: index * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
