import { ArrowUpRight, Github, Globe2, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "chandu3548@gmail.com",
    href: "mailto:chandu3548@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6362691124",
    href: "tel:+916362691124",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/chandu-d",
    href: "https://www.linkedin.com/in/chandu-d",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/chandud1124",
    href: "https://github.com/chandud1124",
  },
  {
    icon: Globe2,
    label: "Website",
    value: "chandu-d-portfolio-hub.vercel.app",
    href: "https://chandu-d-portfolio-hub.vercel.app/",
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="section-container relative overflow-hidden">
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="max-container-wide relative z-10" ref={ref}>
        <motion.div
          className="grid gap-10 lg:grid-cols-2 lg:gap-16"
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">
              Have a project in mind? <span className="gradient-text">Let’s talk.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
              Reach out about a role, collaboration, or product idea. I’m happy to connect and learn more.
            </p>
            <a href="mailto:chandu3548@gmail.com" className="btn-hero mt-7">
              <Mail className="mr-2 h-4 w-4" />
              Send me an email
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Bengaluru, India
            </p>
          </div>

          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="professional-card flex items-center gap-4 p-4 sm:p-5"
                initial={{ opacity: 0, x: 12 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <contact.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium text-muted-foreground">{contact.label}</span>
                  <span className="mt-0.5 block truncate text-sm font-semibold text-foreground">{contact.value}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
