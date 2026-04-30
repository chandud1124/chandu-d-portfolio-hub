import { Download, Github, Linkedin, MapPin, ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage from "@/assets/chandu.jpeg";

const ROLES = [
  "Full-Stack + DevOps Engineer",
  "Cloud-Native Developer",
  "AWS | Docker | Terraform | CI/CD",
  "Builder by Day. Operator by Night.",
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = isDeleting ? 35 : 70;
    const pauseEnd = 1800;
    const pauseStart = 300;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText === current) {
          setTimeout(() => setIsDeleting(true), pauseEnd);
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        } else {
          setDisplayText((prev) =>
            isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          );
        }
      },
      displayText === "" && !isDeleting ? pauseStart : speed
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIdx]);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Chandu_D_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #A78BFA, transparent 70%)" }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />

      <div className="max-container-wide w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status + location */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium">
                <span className="status-dot" />
                <span>Available for Full-Time & Contract Roles</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>Bengaluru, India · Remote-Ready</span>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.p
              className="font-mono text-sm text-primary mb-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
            >
              &gt; Hello_World.init()
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I'm{" "}
              <span className="gradient-text-hero">Chandu. D</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              className="h-10 mb-6 text-xl sm:text-2xl lg:text-3xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <span className="font-mono text-muted-foreground">{'{ '}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {displayText}
              </span>
              <span className="animate-caret text-primary">|</span>
              <span className="font-mono text-muted-foreground">{' }'}</span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I design, build, and <span className="text-foreground font-medium">ship</span> production-grade
              web applications — then automate their deployment and operations on{" "}
              <span className="text-primary font-medium">AWS</span> with{" "}
              <span className="text-accent font-medium">Docker</span>,{" "}
              <span className="text-primary font-medium">Terraform</span>, and{" "}
              <span className="text-accent font-medium">GitHub Actions</span>.
              Full-stack velocity meets DevOps rigor.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { value: "20+", label: "Projects" },
                { value: "9+", label: "Certifications" },
                { value: "3", label: "Clouds (AWS/Azure/GCP)" },
              ].map((s) => (
                <div key={s.label} className="glass-card p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button onClick={scrollToProjects} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="btn-hero">
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button onClick={downloadResume} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="btn-outline-hero">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </motion.button>
              <div className="flex items-center gap-2 ml-1">
                <a
                  href="https://github.com/chandud1124"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chandu-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: terminal + avatar */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Avatar */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Rotating ring */}
              <motion.div
                className="absolute -inset-6 rounded-full opacity-40"
                style={{
                  background: "conic-gradient(from 0deg, #00E5FF, #A78BFA, #F472B6, #00E5FF)",
                  filter: "blur(32px)",
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />
              <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-primary/40 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Chandu. D - Full-Stack + DevOps Engineer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
              {/* Floating badges around avatar */}
              <motion.div
                className="absolute -top-2 -right-4 tech-badge shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                AWS
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-4 tech-badge-accent shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              >
                Docker
              </motion.div>
              <motion.div
                className="absolute top-1/2 -left-8 tech-badge shadow-lg"
                animate={{ x: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                K8s
              </motion.div>
              <motion.div
                className="absolute top-1/3 -right-8 tech-badge-accent shadow-lg"
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
              >
                Terraform
              </motion.div>
            </motion.div>

            {/* Terminal window */}
            <motion.div
              className="terminal-window w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500/80" />
                <span className="terminal-dot bg-yellow-500/80" />
                <span className="terminal-dot bg-green-500/80" />
                <div className="flex-1 text-center text-xs text-gray-400 font-mono">
                  <Terminal className="w-3 h-3 inline mr-1" />
                  chandu@portfolio ~ %
                </div>
              </div>
              <div className="p-4 space-y-1.5 text-[13px] leading-relaxed">
                <div><span className="text-green-400">$</span> <span className="text-gray-300">whoami</span></div>
                <div className="text-cyan-300">&gt; Full-Stack + DevOps Engineer</div>
                <div><span className="text-green-400">$</span> <span className="text-gray-300">cat stack.json</span></div>
                <div className="pl-3 text-gray-300">
                  <span className="text-purple-400">{'{'}</span>
                </div>
                <div className="pl-6 text-gray-400">
                  <span className="text-cyan-300">"frontend"</span>: <span className="text-amber-300">"React, TS, Next"</span>,
                </div>
                <div className="pl-6 text-gray-400">
                  <span className="text-cyan-300">"backend"</span>: <span className="text-amber-300">"Node, FastAPI"</span>,
                </div>
                <div className="pl-6 text-gray-400">
                  <span className="text-cyan-300">"cloud"</span>: <span className="text-amber-300">"AWS, Docker, Terraform"</span>,
                </div>
                <div className="pl-6 text-gray-400">
                  <span className="text-cyan-300">"cicd"</span>: <span className="text-amber-300">"GitHub Actions"</span>
                </div>
                <div className="pl-3 text-gray-300">
                  <span className="text-purple-400">{'}'}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400">$</span>
                  <span className="ml-2 w-2 h-4 bg-cyan-400 animate-caret" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex flex-col items-center gap-2 font-mono"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
