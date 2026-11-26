import { ArrowDown, ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/chandu.jpeg";

const highlights = [
  { value: "4", label: "Internships" },
  { value: "5+", label: "Apps deployed" },
  { value: "100+", label: "IoT devices" },
];

const Hero = () => (
  <section id="home" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
    <div className="absolute inset-0 tech-grid opacity-50 pointer-events-none" />
    <div className="absolute -top-32 -right-36 h-[34rem] w-[34rem] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

    <div className="max-container-wide relative z-10">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-2 text-xs font-semibold tracking-wide text-primary">
            <span className="status-dot" />
            FULL STACK · CLOUD · DEVOPS
          </div>

          <p className="mt-8 text-lg font-medium text-muted-foreground">Hello, I’m</p>
          <h1 className="mt-1 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Chandu <span className="gradient-text">D.</span>
          </h1>
          <h2 className="mt-5 max-w-2xl text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            Full Stack Developer building software for the real world.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            I build dependable web applications and connected systems across product development,
            cloud deployment, and IoT. My work includes an institute-approved classroom platform
            now controlling more than 100 devices across 10+ classrooms.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Bengaluru, India
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-hero">
              Explore my work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="/resume.pdf" download="Chandu_D_Resume.pdf" className="btn-outline-hero">
              <Download className="mr-2 h-4 w-4" />
              Download résumé
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
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
            <a href="mailto:chandu3548@gmail.com" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Let’s connect
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-border pt-6 sm:gap-6">
            {highlights.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-xl">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.5rem] bg-muted">
              <img
                src={heroImage}
                alt="Portrait of Chandu D"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Selected experience</p>
                <p className="mt-2 text-xl font-semibold">AutoVolt · IoT Classroom Automation</p>
                <p className="mt-1 text-sm text-white/75">Full-stack development · AIMS Institutes</p>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:-left-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-2xl font-bold text-primary">10+</p>
            <p className="mt-0.5 text-xs font-medium text-muted-foreground">classrooms supported</p>
          </motion.div>

          <div className="absolute -right-3 top-8 hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground shadow-lg sm:flex">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Production-minded engineering
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="mx-auto mt-16 hidden w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary md:flex"
      >
        Discover more <ArrowDown className="h-3.5 w-3.5" />
      </a>
    </div>
  </section>
);

export default Hero;
