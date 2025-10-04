import { ExternalLink, Github, Cpu, Bot, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Smart Classroom Automation System",
      description: "An innovative IoT solution for automated classroom management featuring ESP32 microcontrollers, relay controls, and web-based control panels. Integrates multiple sensors for environmental monitoring and automated responses.",
      technologies: ["IoT", "ESP32", "Web Control Panel", "Sensor Integration", "Automation"],
      features: [
        "Automated lighting and ventilation control",
        "Real-time environmental monitoring",
        "Web-based dashboard for remote control",
        "Energy optimization algorithms"
      ],
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      impact: "Reduced energy consumption by 30% and improved classroom comfort"
    },
    {
      title: "Resume Genie Web Application",
      description: "A comprehensive web application built with ReactJS and MongoDB that helps users create professional resumes. Features an integrated AI chatbot for resume optimization and career guidance.",
      technologies: ["ReactJS", "MongoDB", "AI Chatbot", "Node.js", "Express"],
      features: [
        "Interactive resume builder interface",
        "AI-powered content suggestions",
        "Multiple professional templates",
        "Real-time collaboration features"
      ],
      icon: Bot,
      color: "from-purple-500 to-pink-500",
      impact: "Helped 500+ users create professional resumes with AI assistance"
    }
  ];

  return (
    <section id="projects" className="section-container bg-secondary/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-dots opacity-20"></div>
      
      <div className="max-container relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Innovative solutions that showcase my technical expertise and problem-solving abilities
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.02,
                rotateY: hoveredIndex === index ? 2 : 0,
                rotateX: hoveredIndex === index ? 2 : 0,
              }}
              className="tilt-card"
            >
              <div className="professional-card border-gradient group relative overflow-hidden h-full">
                {/* Neon glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity neon-glow -z-10"></div>
                
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-xl">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + techIdx * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-6 p-4 glass-card border border-green-200 dark:border-green-800 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-800 dark:text-green-400">Impact</span>
                  </div>
                  <p className="text-green-700 dark:text-green-300 text-sm">{project.impact}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open('https://github.com/chandu-d', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </motion.div>
                  <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open('#contact', '_self')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="glass-card border-primary/20 max-w-2xl mx-auto p-8">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
            </motion.div>
            <h3 className="font-bold text-xl mb-4">Interested in My Work?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to discuss new projects and opportunities. 
              Let's connect and explore how we can work together!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="btn-hero">
                <ExternalLink className="w-5 h-5 mr-2" />
                View All Projects
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
