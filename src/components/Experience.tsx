import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
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
    <section id="experience" className="section-container">
      <div className="max-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Work Experience</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="professional-card animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        {exp.current && (
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                            Current
                          </span>
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
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Certifications</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="professional-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{cert}</h3>
                      <p className="text-sm text-muted-foreground">Certified Professional</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 professional-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  Always staying updated with the latest technologies and industry best practices.
                  Committed to professional growth and skill development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;