import { ExternalLink, Github, Cpu, Bot, Smartphone, Eye, Zap, Brain, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Live Emotion Detection System",
    description: "Developed an AI-powered real-time emotion recognition system using computer vision and deep learning. Detects faces from live video feeds and classifies emotions instantly — such as happy, sad, angry, or neutral — using YOLOv8 and DeepFace.",
    technologies: ["Python 3.13", "OpenCV", "YOLOv8", "DeepFace", "PyTorch", "NumPy"],
    features: [
      "Face detection with YOLOv8",
      "Emotion recognition with DeepFace",
      "Real-time overlay on live feed",
      "Multi-camera support and console logging",
      "No data storage (privacy-safe)"
    ],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop"
    ],
    icon: Brain,
    color: "from-purple-500 to-indigo-500",
    impact: "Successfully implemented real-time emotion recognition with high accuracy",
    githubUrl: "https://github.com/chandud1124/emotion_detection"
  },
  {
    title: "ResumeGenie – AI Resume Builder",
    description: "Architected a full-stack MERN web application for professional resume creation with AI-powered optimization. Includes an intelligent chatbot that helps users enhance their resumes in real-time with modern templates and smart suggestions.",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "Gemini AI"],
    features: [
      "Interactive resume builder interface",
      "AI-powered content suggestions",
      "Multiple professional templates",
      "Real-time collaboration features"
    ],
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
    ],
    icon: Bot,
    color: "from-purple-500 to-pink-500",
    impact: "Successfully served users in creating professional resumes",
    githubUrl: "https://github.com/chandud1124/resume_genie"
  },
  {
    title: "AutoVolt – Smart IoT Classroom Automation System",
    description: "Engineered a full-stack IoT automation platform for intelligent classroom control and energy management. Integrates ESP32 microcontrollers and cloud APIs to automate lights, fans, and electrical devices in real-time with AI-driven optimization.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "ESP32", "MQTT", "TailwindCSS", "Docker"],
    features: [
      "Automated control of classroom appliances",
      "Web dashboard for real-time monitoring",
      "MQTT-based device communication",
      "Admin & user roles with secure authentication",
      "AI-driven energy optimization"
    ],
    images: [
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
    ],
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    impact: "Reduced classroom energy consumption by 30%",
    githubUrl: "https://github.com/chandud1124/AutoVolt"
  },
  {
    title: "AI Vision Attendance System",
    description: "Developed a face recognition-based attendance system for educational institutions. Combines AI-powered facial recognition, secure Node.js backend, and a web dashboard to automate attendance via live camera feeds.",
    technologies: ["React (TypeScript)", "Node.js", "Express.js", "TailwindCSS", "TensorFlow.js", "BlazeFace", "WebRTC"],
    features: [
      "Real-time face detection using TensorFlow.js & BlazeFace",
      "WebRTC-based in-browser camera capture",
      "Role-based authentication (JWT, bcrypt)",
      "CRUD management for students & classrooms",
      "JSON database for lightweight storage",
      "Interactive dashboard for attendance tracking"
    ],
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop"
    ],
    icon: Eye,
    color: "from-cyan-500 to-blue-500",
    impact: "Reduced manual attendance effort by 80%",
    githubUrl: "https://github.com/chandud1124/aivision"
  }
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const navigate = useNavigate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cycle through images on hover
  const handleMouseEnter = (index: number) => {
    setHoveredProject(index);
    let currentIndex = 0;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      currentIndex = (currentIndex + 1) % projects[index].images.length;
      setCurrentImageIndex(prev => ({ ...prev, [index]: currentIndex }));
    }, 800);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 animated-dots opacity-10"></div>
      
      {/* Page Header */}
      <div className="relative z-10 pt-32 pb-16 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-screen immersive showcase of innovative applications
          </p>
        </motion.div>
      </div>

      {/* Full-Screen Project Sections */}
      <div className="relative z-10">
        {projects.map((project, index) => (
          <ProjectSection 
            key={project.title}
            project={project}
            index={index}
            isReversed={index % 2 !== 0}
            hoveredProject={hoveredProject}
            currentImageIndex={currentImageIndex[index] || 0}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-20">
        <motion.div 
          className="max-w-4xl mx-auto px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="glass-card border-primary/20 p-8 text-center">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="btn-hero" onClick={() => window.open('https://github.com/chandud1124', '_blank')}>
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View All Projects
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="btn-hero bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => navigate('/creative-work')}
                >
                  <Palette className="w-5 h-5 mr-2" />
                  View Creative & Media Work
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

type ProjectSectionProps = {
  project: typeof projects[0];
  index: number;
  isReversed: boolean;
  hoveredProject: number | null;
  currentImageIndex: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ 
  project, 
  index, 
  isReversed,
  currentImageIndex,
  onMouseEnter,
  onMouseLeave
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.9, 1, 1, 0.9]);
  const textX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    isReversed ? [100, 0, 0, -100] : [-100, 0, 0, 100]
  );
  const imageX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    isReversed ? [-100, 0, 0, 100] : [100, 0, 0, -100]
  );

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, scale }}
      className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-16"
    >
      <div className={`w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Project Details */}
        <motion.div
          style={{ x: textX }}
          className={`space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
        >
          {/* Icon & Title */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <project.icon className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <span className="text-sm text-primary font-medium tracking-wider uppercase">Project {index + 1}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">{project.title}</h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Key Features */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-foreground">Key Features:</h4>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-start gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: false }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-foreground">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIdx) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: techIdx * 0.05 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open(project.githubUrl || 'https://github.com/chandud1124', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View Code
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                onClick={() => window.open('#contact', '_self')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Image Preview */}
        <motion.div
          style={{ x: imageX }}
          className={`relative ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-lg blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
            
            {/* Image Container */}
            <div className="relative rounded-lg overflow-hidden border-2 border-primary/30 shadow-2xl backdrop-blur-sm bg-background/10">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={`${project.title} preview ${currentImageIndex + 1}`}
                className="w-full h-auto object-cover aspect-[4/3]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-medium">Hover to cycle through screenshots</p>
                  <div className="flex gap-2 mt-2">
                    {project.images.map((_, imgIdx) => (
                      <div 
                        key={imgIdx}
                        className={`w-2 h-2 rounded-full ${imgIdx === currentImageIndex ? 'bg-primary' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
