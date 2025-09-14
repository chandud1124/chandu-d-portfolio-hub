import { ExternalLink, Github, Cpu, Bot, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
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
    <section id="projects" className="section-container bg-secondary/30">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Innovative solutions that showcase my technical expertise and problem-solving abilities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="professional-card animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
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
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-green-800">Impact</span>
                </div>
                <p className="text-green-700 text-sm">{project.impact}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="professional-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
            <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-4">Interested in My Work?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to discuss new projects and opportunities. 
              Let's connect and explore how we can work together!
            </p>
            <Button className="btn-hero">
              <ExternalLink className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;