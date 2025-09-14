import { 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  GitBranch, 
  Globe 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "XML", "JavaScript", "React.js", "Node.js"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "C", "Python"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "GCP"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: GitBranch,
      title: "Version Control",
      skills: ["Git", "GitHub"],
      color: "text-muted-foreground",
      bgColor: "bg-muted"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: ["Figma", "WIX"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section id="skills" className="section-container bg-secondary/30">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building 
            robust, scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="professional-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 ${category.bgColor} rounded-2xl flex items-center justify-center`}>
                  <category.icon className={`w-7 h-7 ${category.color}`} />
                </div>
                <h3 className="font-semibold text-xl">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium 
                             hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;