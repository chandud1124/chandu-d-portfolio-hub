import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: "Cloud Intern",
      company: "UptoSkills",
      period: "Feb 2025 - May 2025",
      location: "Remote",
      type: "Internship",
      description: "Application deployment with AWS EC2, S3, Lambda services. Gained hands-on experience with cloud infrastructure and serverless architecture.",
      technologies: ["AWS EC2", "S3", "Lambda", "Cloud Architecture"],
      current: true
    },
    {
      title: "Cloud Computing Intern",
      company: "Tech Mindsparc Innovations",
      period: "Sep 2024 - Dec 2024",
      location: "Remote",
      type: "Internship",
      description: "Advanced AWS, Azure, and GCP deployments. Service management and optimization across multiple cloud platforms.",
      technologies: ["AWS", "Azure", "GCP", "Cloud Services", "DevOps"],
      current: false
    },
    {
      title: "AI/ML Intern",
      company: "Tech Mindsparc Innovations",
      period: "Jun 2024 - Sep 2024",
      location: "Remote", 
      type: "Internship",
      description: "Data preprocessing and machine learning model development. Worked on various AI/ML projects and gained experience in data science workflows.",
      technologies: ["Python", "Machine Learning", "Data Preprocessing", "Model Building"],
      current: false
    }
  ];

  const certifications = [
    "Data Structures & Algorithms",
    "Cloud Computing (AWS, Azure, GCP)",
    "AI/ML (Python, Model Building)",
    "System Design",
    "Effective Communication"
  ];

  return (
    <section id="experience" className="section-container relative overflow-hidden">
      {/* Parallax elements */}
      <motion.div 
        className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, 50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10
        }}
      />

      <div className="max-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Work Experience</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
            </motion.div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                  }}
                  className="tilt-card"
                >
                  <div className="professional-card glass-card group">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Briefcase className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          {exp.current && (
                            <motion.span 
                              className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            >
                              Current
                            </motion.span>
                          )}
                        </div>
                        <p className="font-medium text-primary mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.1 + techIdx * 0.05 }}
                          whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Certifications</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
            </motion.div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, rotateY: 3 }}
                  className="tilt-card"
                >
                  <div className="professional-card glass-card group">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award className="w-5 h-5 text-accent" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold">{cert}</h3>
                        <p className="text-sm text-muted-foreground">Certified Professional</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="glass-card border-primary/20 p-6">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  >
                    <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
                  <p className="text-muted-foreground text-sm">
                    Always staying updated with the latest technologies and industry best practices.
                    Committed to professional growth and skill development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
