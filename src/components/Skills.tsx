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
      title: "MERN Stack Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "XML", level: 75 },
        { name: "JavaScript", level: 88 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 }
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "C", level: 80 },
        { name: "Python", level: 88 }
      ],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 82 }
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
      title: "Version Control",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 }
      ],
      color: "text-muted-foreground",
      bgColor: "bg-muted"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: [
        { name: "Figma", level: 80 },
        { name: "WIX", level: 75 }
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="tilt-card"
            >
              <div className="professional-card border-gradient group relative overflow-hidden">
                {/* Neon glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity neon-glow -z-10"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`w-14 h-14 ${category.bgColor} rounded-2xl flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className={`w-7 h-7 ${category.color}`} />
                  </motion.div>
                  <h3 className="font-semibold text-xl">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
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
