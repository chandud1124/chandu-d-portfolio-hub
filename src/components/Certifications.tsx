import { Award, BookOpen, Cloud, Brain, Users, Zap, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import dsaCert from "@/assets/certificates/dsa-certificate.jpg";
import cloudCert from "@/assets/certificates/cloud-certificate.jpg";
import aimlCert from "@/assets/certificates/aiml-certificate.jpg";
import systemDesignCert from "@/assets/certificates/system-design-certificate.jpg";
import communicationCert from "@/assets/certificates/communication-certificate.jpg";
import LazyImage from "@/components/ui/lazy-image";

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      icon: BookOpen,
      title: "Data Structures & Algorithms",
      issuer: "Programming Fundamentals",
      date: "2024",
      description: "Mastered advanced algorithmic techniques and data structure implementations, enabling efficient problem-solving and optimized code performance across complex computational challenges",
      skills: ["Problem Solving", "Algorithm Design", "Time Complexity", "Space Optimization"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      certificate: dsaCert
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      issuer: "AWS • Azure • GCP",
      date: "2024",
      description: "Certified expertise in multi-cloud architecture and deployment strategies, specializing in AWS, Azure, and GCP platforms with comprehensive DevOps and infrastructure automation capabilities",
      skills: ["AWS Services", "Azure Cloud", "Google Cloud", "DevOps", "Infrastructure"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      certificate: cloudCert
    },
    {
      icon: Brain,
      title: "AI/ML Fundamentals",
      issuer: "Python & Model Building",
      date: "2024",
      description: "Advanced proficiency in machine learning algorithms and Python-based model development, with expertise in data preprocessing, feature engineering, and deploying production-ready AI solutions",
      skills: ["Python", "Machine Learning", "Data Analysis", "Model Training", "AI Ethics"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      certificate: aimlCert
    },
    {
      icon: Zap,
      title: "System Design",
      issuer: "Scalable Architecture",
      date: "2024",
      description: "Large-scale system design principles and architectural patterns",
      skills: ["Scalability", "Load Balancing", "Database Design", "Microservices", "Performance"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950",
      certificate: systemDesignCert
    },
    {
      icon: Users,
      title: "Effective Communication",
      issuer: "Professional Development",
      date: "2024",
      description: "Professional communication skills for technical and non-technical audiences",
      skills: ["Technical Writing", "Presentation", "Team Collaboration", "Documentation", "Leadership"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950",
      certificate: communicationCert
    }
  ];

  return (
    <section id="certifications" className="section-container relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-dots opacity-20"></div>

      <div className="max-container relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Certifications & Training</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Demonstrated commitment to professional excellence through rigorous industry-recognized certifications 
            and continuous skill enhancement across cutting-edge technologies and methodologies
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Dialog key={cert.title}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  className="tilt-card cursor-pointer"
                >
                  <div className="professional-card border-gradient group h-full">
                    {/* Neon glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity neon-glow -z-10"></div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div 
                        className={`w-14 h-14 ${cert.bgColor} rounded-2xl flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <cert.icon className={`w-7 h-7 bg-gradient-to-br ${cert.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIdx) => (
                          <motion.span
                            key={skill}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1 + skillIdx * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Verification Badge */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="text-xs font-medium text-primary">Certified</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                          <Eye className="w-3 h-3" />
                          <span>View Certificate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <cert.icon className="w-6 h-6 text-primary" />
                    {cert.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <LazyImage
                    src={cert.certificate}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-auto rounded-lg shadow-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
                    quality={85}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="glass-card border-primary/20 max-w-xl mx-auto p-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            </motion.div>
            <h3 className="font-bold text-xl mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground">
              Always expanding my knowledge through new certifications and staying updated with the latest industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
