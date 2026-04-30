import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-container-wide relative z-10 py-14">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">Chandu. D</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Full-Stack + DevOps Engineer building and shipping cloud-native apps on AWS.
              Available for full-time & contract roles — India & global remote.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/chandud1124"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/chandu-d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Contact"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#certifications", label: "Certifications" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-primary transition-colors link-hover"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Built With
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              React 18 · TypeScript · Vite · Tailwind · Framer Motion · Mermaid.js
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Shipped via{" "}
              <span className="text-primary font-mono">GitHub Actions</span> to{" "}
              <span className="text-primary font-mono">AWS S3 + CloudFront</span>{" "}
              provisioned with <span className="text-primary font-mono">Terraform</span>.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
            © {new Date().getFullYear()} Chandu. D Crafted with{" "} · All rights reserved.
          </p>
          <motion.button
            onClick={scrollTop}
            className="group inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
            whileHover={{ y: -2 }}
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
