import { Award, BookOpen, Cloud, Brain, Users, Zap, Eye, Database } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      icon: Brain,
      title: "Microsoft AI Skills Fest – Guinness World Records Attempt",
      issuer: "Microsoft",
      date: "2025",
      description: "Participated in the Microsoft AI Skills Fest, an official Guinness World Records Attempt for the Most users to take an online multi-level Artificial Intelligence lesson in 24 hours. Contributed to a global learning initiative focused on AI skill development and digital transformation.",
      skills: ["AI Learning Fundamentals", "Global Collaboration", "Digital Skills Advancement", "Continuous Learning"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      certificateLink: "https://drive.google.com/file/d/1lh2j6DAcADqeHPlqajsstU1lphto8rsd/view"
    },
    {
      icon: Cloud,
      title: "AWS – Job Roles in the Cloud",
      issuer: "Amazon Web Services",
      date: "27/1/2025",
      description: "Gained a foundational and industry-aligned understanding of core cloud roles, including Cloud Support, Cloud Developer, Solutions Architect, SysOps, and DevOps. Completed hands-on learning covering cloud infrastructure basics, service models, deployment environments, and operational best practices.",
      skills: ["Cloud Fundamentals", "AWS Service Overview", "Infrastructure & Deployment", "Cloud Operations", "Career-Ready Cloud Roles"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      certificateLink: "https://drive.google.com/file/d/1ecDdF-ykUJL5CX6eln7RUTfhDuvA5pOn/view"
    },
    {
      icon: Brain,
      title: "Data Science, AI & Cyber Security Masterclass",
      issuer: "Prof. Gang Li, Deakin University",
      date: "13/3/2024",
      description: "Attended an intensive masterclass conducted by Prof. Gang Li (Deakin University), covering modern concepts in Data Science, Artificial Intelligence, Cybersecurity, and Privacy. Successfully completed the assessment with distinction, demonstrating strong understanding of analytical techniques, AI fundamentals, cyber-risk awareness, and data-driven decision-making.",
      skills: ["Data Science Fundamentals", "AI Concepts & Applications", "Cybersecurity Awareness", "Privacy & Safety Principles", "Analytical Thinking"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      certificateLink: "https://drive.google.com/file/d/1wlYTwIuj1q0GCNCEaq4BDleGlz-nbvTO/view"
    },
    {
      icon: Users,
      title: "Global Virtual Summit – Career & Skill Development",
      issuer: "Global Summit",
      date: "2024",
      description: "Completed the 2024 Global Summit for Career & Skill Development, demonstrating reflective learning and skill-based understanding across multiple professional growth domains. Developed competencies in leadership, creative thinking, intercultural communication, and global perspectives.",
      skills: ["Leadership & Global Mindset", "Creative Thinking", "Intercultural & Indigenous Perspectives", "Professional Communication", "Lifelong Learning Principles"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950",
      certificateLink: "https://drive.google.com/file/d/1Kb1G3lVwYtAK4YhJ-vd8D8-W7_WzoBAD/view"
    },
    {
      icon: Users,
      title: "Nationwide Webinar – Techmindsparc Innovations (AICTE Verified)",
      issuer: "Techmindsparc Innovations",
      date: "2024",
      description: "Participated in an AICTE-verified nationwide webinar conducted by Techmindsparc Innovations, gaining insights into emerging technologies, industry practices, and real-world applications. Engaged in discussions focused on innovation, practical knowledge, and current trends in the tech ecosystem.",
      skills: ["Industry Awareness", "Technology Trends", "Professional Engagement", "Applied Learning"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950",
      certificateLink: "https://drive.google.com/file/d/1wlHraQn_O2KzBXMv1ZJUER98MYpc9TdW/view"
    },
    {
      icon: BookOpen,
      title: "Advanced Python Programming – Course Completion",
      issuer: "Course Completion",
      date: "2024",
      description: "Successfully completed the Advanced Python Programming course, strengthening expertise in object-oriented programming, advanced data handling, algorithmic problem-solving, and development of efficient Python applications. Built strong foundations suitable for backend development, automation, and AI projects.",
      skills: ["Advanced Python", "OOP Concepts", "Data Handling", "Problem Solving", "Automation & Scripting"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      certificateLink: "https://drive.google.com/file/d/1KfyF0NYbK0C62ImXyYwNrW5KkCVNDimZ/view"
    },
    {
      icon: Database,
      title: "Databases for Developers: Foundations",
      issuer: "Chris Saxon",
      date: "2024",
      description: "Achieved a Certificate of Excellence for securing 93% in the Databases for Developers – Foundations course taught by Chris Saxon. Gained strong knowledge of relational database concepts, SQL fundamentals, schema design, and practical data querying essential for backend and application development.",
      skills: ["SQL Fundamentals", "Relational Database Design", "Query Optimization", "Data Modeling", "Backend Data Handling"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950",
      certificateLink: "https://drive.google.com/file/d/1rnSyCelH81veMntQrkWQcYGNZkMfD7Ub/view"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence – Course Completion",
      issuer: "Course Completion",
      date: "2024",
      description: "Completed a structured course in Artificial Intelligence, gaining strong foundational understanding of machine learning concepts, neural networks, automation principles, and real-world AI applications. Built the ability to analyze data, identify patterns, and apply AI techniques to practical problem-solving scenarios.",
      skills: ["AI Concepts", "Machine Learning Basics", "Neural Networks", "Automation Techniques", "Applied Problem Solving"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      certificateLink: "https://drive.google.com/file/d/1KmQcfftHLwD2zaP__w726_vhqBwkZRHf/view"
    },
    {
      icon: Cloud,
      title: "Cloud Computing – Course Completion",
      issuer: "Course Completion",
      date: "2024–2025",
      description: "Successfully completed an in-depth Cloud Computing course covering cloud architecture, virtualization, service models, deployment methods, and cloud operations. Developed practical skills in cloud environments, resource management, scalability, and modern infrastructure practices.",
      skills: ["Cloud Architecture Fundamentals", "Virtualization", "IaaS / PaaS / SaaS Models", "Cloud Deployment & Operations", "Scalability & Resource Management"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      certificateLink: "https://drive.google.com/file/d/1pl0REFITxVwmCKSDuMeorvgSruzzmZi1/view"
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
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.005 }}
              className="tilt-card cursor-pointer"
              onClick={() => {
                if (cert.certificateLink) {
                  window.open(cert.certificateLink, '_blank');
                }
              }}
            >
              <div className="professional-card group h-full flex flex-col">
                {/* Main content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className="w-14 h-14 bg-primary/10 dark:bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.005 }}
                      transition={{ duration: 0.6 }}
                    >
                      <cert.icon className="w-7 h-7 text-primary" />
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
                          whileHover={{ scale: 1.005 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Verification Badge - pinned to bottom */}
                <div className="mt-6 pt-4">
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
