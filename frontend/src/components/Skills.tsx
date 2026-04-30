import {
  Code2, Server, Database, Palette, Cloud, Container, GitBranch, Wrench,
  ShieldCheck, Cpu, Layers, Zap, Boxes, Activity, Globe, FileCode
} from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

type Skill = { name: string; level: number };
type Group = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
};

const fullStackGroups: Group[] = [
  {
    icon: Globe,
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "TailwindCSS", level: 92 },
      { name: "Framer Motion", level: 82 },
      { name: "HTML5 / CSS3", level: 93 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 87 },
      { name: "FastAPI / Python", level: 85 },
      { name: "REST / GraphQL APIs", level: 84 },
      { name: "JWT / OAuth / bcrypt", level: 82 },
      { name: "WebSockets / MQTT", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 86 },
      { name: "MySQL / PostgreSQL", level: 84 },
      { name: "Redis (cache)", level: 70 },
      { name: "Schema Design", level: 82 },
    ],
  },
  {
    icon: Palette,
    title: "UI / UX & Tools",
    skills: [
      { name: "Figma / Design Systems", level: 78 },
      { name: "Accessibility (a11y)", level: 75 },
      { name: "Vite / Webpack", level: 82 },
      { name: "Storybook / Testing", level: 72 },
    ],
  },
];

const devOpsGroups: Group[] = [
  {
    icon: Cloud,
    title: "Cloud (AWS-First)",
    skills: [
      { name: "AWS EC2 / S3 / CloudFront", level: 86 },
      { name: "AWS ECS / Fargate / Lambda", level: 80 },
      { name: "AWS IAM / VPC / Route53", level: 78 },
      { name: "Azure & GCP (intermediate)", level: 75 },
    ],
  },
  {
    icon: Container,
    title: "Containers & Orchestration",
    skills: [
      { name: "Docker / Compose", level: 88 },
      { name: "Multi-stage builds", level: 85 },
      { name: "Kubernetes (fundamentals)", level: 72 },
      { name: "NGINX / Traefik", level: 78 },
    ],
  },
  {
    icon: GitBranch,
    title: "CI/CD & Automation",
    skills: [
      { name: "GitHub Actions", level: 88 },
      { name: "Git / GitHub / GitOps", level: 92 },
      { name: "Build & Deploy Pipelines", level: 85 },
      { name: "Automated Testing", level: 78 },
    ],
  },
  {
    icon: Wrench,
    title: "IaC & Observability",
    skills: [
      { name: "Terraform (AWS)", level: 80 },
      { name: "Linux / Bash Scripting", level: 82 },
      { name: "Sentry / CloudWatch", level: 78 },
      { name: "Prometheus / Grafana basics", level: 68 },
    ],
  },
];

const SkillGroup = ({ group, isVisible, delay = 0 }: { group: Group; isVisible: boolean; delay?: number }) => {
  const Icon = group.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
      className="professional-card group relative overflow-hidden h-full"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-semibold text-lg">{group.title}</h4>
        </div>
        <div className="space-y-3">
          {group.skills.map((s, i) => (
            <div key={s.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">{s.name}</span>
                <span className="text-[10px] font-mono text-muted-foreground">{s.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${s.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: delay + 0.15 + i * 0.06, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const techMarquee = [
  "React", "Next.js", "TypeScript", "Node.js", "FastAPI", "MongoDB", "PostgreSQL",
  "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "NGINX", "Redis",
  "Sentry", "Linux", "Bash", "Python", "TailwindCSS", "Framer Motion",
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [tab, setTab] = useState<"fullstack" | "devops">("fullstack");
  const groups = tab === "fullstack" ? fullStackGroups : devOpsGroups;

  return (
    <section id="skills" className="section-container relative overflow-hidden">
      <div className="absolute inset-0 animated-dots opacity-20 pointer-events-none" />

      <div className="max-container-wide relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <div className="section-heading inline-flex flex-col items-center">
            <span className="label">// skills.stack</span>
            <h2>
              Tech <span className="gradient-text">Arsenal</span>
            </h2>
            <div className="divider" />
          </div>
          <p className="text-base lg:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A full-spectrum toolkit — from crafting pixel-perfect UIs to provisioning cloud infrastructure as code.
          </p>
        </motion.div>

        {/* Tab switch */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <div className="relative inline-flex items-center gap-1 p-1 rounded-xl glass-card">
            {[
              { id: "fullstack", label: "Full-Stack Development", icon: Code2 },
              { id: "devops", label: "DevOps & Cloud", icon: Cloud },
            ].map((t) => {
              const active = tab === t.id;
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id as typeof tab)}
                  className={`relative z-10 px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors ${
                    active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="skill-tab-pill"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}
                  <Icon className="w-4 h-4" />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Groups grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-12">
          {groups.map((g, i) => (
            <SkillGroup key={`${tab}-${g.title}`} group={g} isVisible={isVisible} delay={i * 0.08} />
          ))}
        </div>

        {/* Tech marquee */}
        <motion.div
          className="relative overflow-hidden rounded-2xl glass-card py-5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="marquee-track font-mono text-sm text-muted-foreground">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span key={i} className="flex items-center gap-3 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
