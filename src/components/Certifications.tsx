import { Award, BookOpen, Cloud, Brain, Users, Zap } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: BookOpen,
      title: "Data Structures & Algorithms",
      issuer: "Programming Fundamentals",
      date: "2024",
      description: "Comprehensive understanding of fundamental programming concepts and algorithmic thinking",
      skills: ["Problem Solving", "Algorithm Design", "Time Complexity", "Space Optimization"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      issuer: "AWS • Azure • GCP",
      date: "2024",
      description: "Multi-cloud expertise covering major cloud platforms and services",
      skills: ["AWS Services", "Azure Cloud", "Google Cloud", "DevOps", "Infrastructure"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Brain,
      title: "AI/ML Fundamentals",
      issuer: "Python & Model Building",
      date: "2024",
      description: "Machine learning foundations with hands-on experience in model development",
      skills: ["Python", "Machine Learning", "Data Analysis", "Model Training", "AI Ethics"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Zap,
      title: "System Design",
      issuer: "Scalable Architecture",
      date: "2024",
      description: "Large-scale system design principles and architectural patterns",
      skills: ["Scalability", "Load Balancing", "Database Design", "Microservices", "Performance"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Effective Communication",
      issuer: "Professional Development",
      date: "2024",
      description: "Professional communication skills for technical and non-technical audiences",
      skills: ["Technical Writing", "Presentation", "Team Collaboration", "Documentation", "Leadership"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section id="certifications" className="section-container">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Certifications & Training</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Continuous learning and skill development through specialized certifications and training programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="professional-card animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 ${cert.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className={`w-7 h-7 bg-gradient-to-br ${cert.color} bg-clip-text text-transparent`} />
                </div>
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
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Verification Badge */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="professional-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-xl mx-auto">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground">
              Always expanding my knowledge through new certifications and staying updated with the latest industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;