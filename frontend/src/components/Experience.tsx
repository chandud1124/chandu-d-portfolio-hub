import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: "Cloud Intern",
      company: "UptoSkills",
      period: "Feb 2025 – May 2025",
      location: "Remote",
      type: "Internship",
      description: "Designed and deployed cloud-based applications using AWS EC2, S3, and Lambda. Architected serverless solutions for optimized performance and cost reduction. Automated workflows and infrastructure for scalable deployment.",
      technologies: ["AWS EC2", "S3", "Lambda", "Cloud Architecture"],
      current: true,
      certificate: "https://drive.google.com/file/d/13RfF9JTE1Gk6VSkLuXBZNJB6fTzT6-v6/preview",
      certificateLink: "https://drive.google.com/file/d/13RfF9JTE1Gk6VSkLuXBZNJB6fTzT6-v6/view"
    },
    {
      title: "Cloud Computing Intern",
      company: "Tech Mindsparc Innovations",
      period: "Sep 2024 – Dec 2024",
      location: "Remote",
      type: "Internship",
      description: "Managed multi-cloud deployments across AWS, Azure, and GCP. Implemented DevOps automation pipelines and performance optimization. Delivered cost-effective infrastructure solutions for real-time workloads.",
      technologies: ["AWS", "Azure", "GCP", "DevOps", "Cloud Services"],
      current: false,
      certificate: "https://drive.google.com/file/d/1xztf6uo85yuCiaMPLp9Tame95simGhVV/preview",
      certificateLink: "https://drive.google.com/file/d/1xztf6uo85yuCiaMPLp9Tame95simGhVV/view"
    },
    {
      title: "AI/ML Intern",
      company: "Tech Mindsparc Innovations",
      period: "Jun 2024 – Sep 2024",
      location: "Remote",
      type: "Internship",
      description: "Built and deployed machine learning models using Python and PyTorch. Worked on emotion analysis and predictive modeling for AI applications. Conducted data preprocessing, model optimization, and performance evaluation.",
      technologies: ["Python", "Machine Learning", "Model Training", "Data Analysis"],
      current: false,
      certificate: "https://drive.google.com/file/d/1KdywdSs0Xx3VIZJfCeQmjWy4zWP0tv9t/preview",
      certificateLink: "https://drive.google.com/file/d/1KdywdSs0Xx3VIZJfCeQmjWy4zWP0tv9t/view"
    }
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
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Hands-on experience in cloud computing, full-stack development, and AI/ML implementation, 
            delivering scalable solutions and driving technological innovation across diverse projects
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.005 }}
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
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + techIdx * 0.05 }}
                      whileHover={{ scale: 1.005 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {exp.certificate && (
                  <motion.div 
                    className="mt-4 pt-4 border-t border-border"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <motion.button
                      onClick={() => window.open(exp.certificateLink || exp.certificate.replace('/preview', '/view'), '_blank')}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg text-sm font-medium transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Award className="w-4 h-4" />
                      View Certificate
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
