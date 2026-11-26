import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/35">
    <div className="max-container-wide py-8">
      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-bold tracking-tight text-foreground">
            Chandu D<span className="text-primary">.</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Full Stack Developer · Cloud · DevOps</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/chandud1124"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="social-link"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/chandu-d"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="social-link"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:chandu3548@gmail.com" aria-label="Email Chandu" className="social-link">
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Chandu D</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
