import { X, Github, ExternalLink, CheckCircle2, Target, Lightbulb, BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "@/data/projects";
import MermaidDiagram from "./MermaidDiagram";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  useEffect(() => {
    if (!project) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Panel */}
          <div className="relative min-h-full flex items-start justify-center p-4 sm:p-6 lg:p-10">
            <motion.div
              className="relative w-full max-w-5xl glass-card rounded-3xl overflow-hidden my-8 border-primary/20"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: "spring", damping: 24, stiffness: 280 }}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Hero */}
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-70 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="tech-badge-accent mb-3">{project.category}</span>
                  <h3 className="text-2xl sm:text-4xl font-bold mt-3 leading-tight">{project.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">{project.tagline}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="professional-card p-4 text-center">
                      <div className="text-lg sm:text-2xl font-bold gradient-text font-mono">{m.value}</div>
                      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Problem / Solution */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="professional-card p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-destructive" />
                      <h4 className="font-semibold">Problem</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="professional-card p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      <h4 className="font-semibold">Solution</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Architecture */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold">Architecture</h4>
                    <span className="font-mono text-xs text-muted-foreground">// rendered live with Mermaid</span>
                  </div>
                  <MermaidDiagram chart={project.architecture} id={`mmd-${project.id}`} />
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Key Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="font-semibold mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-hero"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hero"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live / Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
