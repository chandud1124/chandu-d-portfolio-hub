import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "chandu3548@gmail.com",
      link: "mailto:chandu3548@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, Karnataka",
      link: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/chandu-d",
      link: "https://linkedin.com/in/chandu-d"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/chandud1124",
      link: "https://github.com/chandud1124"
    }
  ];

  return (
    <section id="contact" className="section-container relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 15
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, -50, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 12
        }}
      />

      <div className="max-container relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to collaborations, internships, or freelance opportunities in Full-Stack Development, Cloud Computing, and IoT Innovation.
            Let's connect and create something extraordinary together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.005 }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="glass-card border-primary/20 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.005 }}
            >
              <h4 className="font-semibold text-lg mb-4">Quick Response</h4>
              <p className="text-muted-foreground mb-4">
                I typically respond to messages within 24 hours. Looking forward to hearing from you!
              </p>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.005 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.005 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
