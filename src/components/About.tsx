import { GraduationCap, Award, Languages } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Motivated and detail-oriented Computer Applications student with strong foundations 
              in programming, database management, and modern software development. I'm passionate 
              about leveraging technology to solve real-world problems and creating innovative 
              solutions that make a difference.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My expertise spans across cloud computing platforms, IoT systems, and full-stack 
              web development. I thrive in collaborative environments and excel at adapting to 
              new technologies and methodologies. Always eager to learn and grow, I approach 
              every challenge with curiosity and determination.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="professional-card animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Education</h3>
                  <p className="text-muted-foreground">Master of Computer Applications</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                AIMS Institutes • 2023–2025 (Ongoing)
              </p>
            </div>
            
            <div className="professional-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Focus Areas</h3>
                  <p className="text-muted-foreground">Cloud Computing & IoT</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Specialized in AWS, Azure, GCP deployments and IoT automation systems
              </p>
            </div>
            
            <div className="professional-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Languages className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Languages</h3>
                  <p className="text-muted-foreground">Multilingual Communication</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                English, Kannada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;