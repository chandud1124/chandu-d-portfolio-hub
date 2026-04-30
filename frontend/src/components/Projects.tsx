import { ArrowUpRight, Github, Workflow, Container, Zap, Eye, Bot, Brain, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Workflow, Container, Zap, Eye, Bot, Brain,
};

const CATEGORIES = ["All", "Full-Stack", "DevOps", "AI/ML", "IoT"] as const;

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const navigate = useNavigate();

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-container relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none" />

      <div className="max-container-wide relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <div className="section-heading inline-flex flex-col items-center">
            <span className="label">// featured.projects</span>
            <h2>
              Built. Shipped. <span className="gradient-text">Measured.</span>
            </h2>
            <div className="divider" />
          </div>
          <p className="text-base lg:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Hybrid projects spanning full-stack development, cloud infrastructure, and applied AI —
            each with a live architecture diagram.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
        >
          {CATEGORIES.map((c) => {
            const activeCat = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-medium font-mono transition-all ${
                  activeCat
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground border border-border hover:border-primary/40"
                }`}
              >
                {activeCat && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-accent -z-10 shadow-lg shadow-primary/30"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
                {c}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((p, idx) => {
            const Icon = iconMap[p.iconName] || Workflow;
            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                onClick={() => setActive(p)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer professional-card p-0 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-50 group-hover:opacity-30 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 tech-badge-accent text-[10px]">
                    {p.category}
                  </span>

                  {/* Icon */}
                  <div className={`absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono mb-3 line-clamp-1">
                    {p.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/15">
                        {t}
                      </span>
                    ))}
                    {p.technologies.length > 4 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md text-muted-foreground">
                        +{p.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-xs font-mono text-muted-foreground">View case study</span>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      whileHover={{ rotate: 45 }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="glass-card max-w-3xl mx-auto p-6 sm:p-8 border-primary/20">
            <h3 className="text-xl font-bold mb-3">Want to see more?</h3>
            <p className="text-muted-foreground mb-5 text-sm sm:text-base">
              Explore all my repositories on GitHub — or check out my creative & media work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="btn-hero"
                onClick={() => window.open("https://github.com/chandud1124", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                All Repositories
              </Button>
              <Button
                variant="outline"
                className="btn-outline-hero"
                onClick={() => navigate("/creative-work")}
              >
                <Palette className="w-4 h-4 mr-2" />
                Creative & Media Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Projects;
