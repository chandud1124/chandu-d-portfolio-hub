import { Award, BookOpen, Cloud, Brain, Users, Database, ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const FILTERS = ["All", "Cloud", "AI/ML", "Data", "Other"] as const;
type Filter = (typeof FILTERS)[number];

type Cert = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  certificateLink?: string;
  category: Exclude<Filter, "All">;
  highlight?: boolean;
};

const certifications: Cert[] = [
  {
    icon: Cloud,
    title: "AWS – Job Roles in the Cloud",
    issuer: "Amazon Web Services",
    date: "Jan 2025",
    description:
      "Foundational, industry-aligned understanding of core cloud roles — Cloud Support, Developer, Solutions Architect, SysOps, DevOps. Hands-on labs across cloud infrastructure, service models, and operational best practices.",
    skills: ["Cloud Fundamentals", "AWS Services", "Cloud Operations", "DevOps Roles"],
    certificateLink: "https://drive.google.com/file/d/1ecDdF-ykUJL5CX6eln7RUTfhDuvA5pOn/view",
    category: "Cloud",
    highlight: true,
  },
  {
    icon: Cloud,
    title: "Cloud Computing – Course Completion",
    issuer: "Course Completion",
    date: "2024 – 2025",
    description:
      "In-depth course on cloud architecture, virtualization, service models, and deployment methods. Built practical skills in cloud environments, resource management, and modern infrastructure practices.",
    skills: ["Cloud Architecture", "Virtualization", "IaaS / PaaS / SaaS", "Scalability"],
    certificateLink: "https://drive.google.com/file/d/1pl0REFITxVwmCKSDuMeorvgSruzzmZi1/view",
    category: "Cloud",
  },
  {
    icon: Brain,
    title: "Microsoft AI Skills Fest – Guinness World Records",
    issuer: "Microsoft",
    date: "2025",
    description:
      "Participated in Microsoft's official Guinness World Records attempt for the most users to take an AI lesson in 24 hours. Global learning initiative on AI fundamentals.",
    skills: ["AI Fundamentals", "Global Collaboration", "Continuous Learning"],
    certificateLink: "https://drive.google.com/file/d/1lh2j6DAcADqeHPlqajsstU1lphto8rsd/view",
    category: "AI/ML",
  },
  {
    icon: Brain,
    title: "Data Science, AI & Cyber Security Masterclass",
    issuer: "Prof. Gang Li, Deakin University",
    date: "Mar 2024",
    description:
      "Intensive masterclass covering modern Data Science, AI, Cybersecurity, and Privacy. Completed assessment with distinction.",
    skills: ["Data Science", "AI Concepts", "Cybersecurity", "Privacy"],
    certificateLink: "https://drive.google.com/file/d/1wlYTwIuj1q0GCNCEaq4BDleGlz-nbvTO/view",
    category: "AI/ML",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence – Course Completion",
    issuer: "Course Completion",
    date: "2024",
    description:
      "Structured course on machine learning concepts, neural networks, automation principles, and real-world AI applications.",
    skills: ["AI Concepts", "Machine Learning", "Neural Networks", "Automation"],
    certificateLink: "https://drive.google.com/file/d/1KmQcfftHLwD2zaP__w726_vhqBwkZRHf/view",
    category: "AI/ML",
  },
  {
    icon: Database,
    title: "Databases for Developers: Foundations",
    issuer: "Chris Saxon",
    date: "2024",
    description:
      "Certificate of Excellence (93%) on relational database concepts, SQL fundamentals, schema design, and query optimization — essential for backend development.",
    skills: ["SQL", "Schema Design", "Query Optimization", "Data Modeling"],
    certificateLink: "https://drive.google.com/file/d/1rnSyCelH81veMntQrkWQcYGNZkMfD7Ub/view",
    category: "Data",
    highlight: true,
  },
  {
    icon: BookOpen,
    title: "Advanced Python Programming",
    issuer: "Course Completion",
    date: "2024",
    description:
      "OOP, advanced data handling, algorithmic problem-solving, and efficient Python applications. Strong foundation for backend, automation, and AI.",
    skills: ["Advanced Python", "OOP", "Algorithms", "Automation"],
    certificateLink: "https://drive.google.com/file/d/1KfyF0NYbK0C62ImXyYwNrW5KkCVNDimZ/view",
    category: "Other",
  },
  {
    icon: Users,
    title: "Global Virtual Summit – Career & Skill Development",
    issuer: "Global Summit",
    date: "2024",
    description:
      "Reflective learning across professional growth domains: leadership, creative thinking, intercultural communication, and global perspectives.",
    skills: ["Leadership", "Creative Thinking", "Communication"],
    certificateLink: "https://drive.google.com/file/d/1Kb1G3lVwYtAK4YhJ-vd8D8-W7_WzoBAD/view",
    category: "Other",
  },
  {
    icon: Users,
    title: "Nationwide Webinar (AICTE Verified)",
    issuer: "Techmindsparc Innovations",
    date: "2024",
    description:
      "AICTE-verified nationwide webinar on emerging technologies, industry practices, and real-world applications.",
    skills: ["Industry Awareness", "Tech Trends", "Applied Learning"],
    certificateLink: "https://drive.google.com/file/d/1wlHraQn_O2KzBXMv1ZJUER98MYpc9TdW/view",
    category: "Other",
  },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState<Filter>("All");
  const list = filter === "All" ? certifications : certifications.filter((c) => c.category === filter);

  return (
    <section
      id="certifications"
      className="section-container relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 animated-dots opacity-20 pointer-events-none" />

      <div className="max-container-wide relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <div className="section-heading inline-flex flex-col items-center">
            <span className="label">// certifications.json</span>
            <h2>
              Credentials &amp; <span className="gradient-text">Continuous Learning</span>
            </h2>
            <div className="divider" />
          </div>
          <p className="text-base lg:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Industry-recognized credentials across cloud, AI/ML, and data — with an AWS-first focus.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
        >
          {FILTERS.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-medium font-mono transition-all focus-ring ${
                  active
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground border border-border hover:border-primary/40"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="cert-pill"
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
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.button
                key={c.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => c.certificateLink && window.open(c.certificateLink, "_blank", "noopener,noreferrer")}
                className="professional-card p-5 text-left flex flex-col h-full group focus-ring relative overflow-hidden"
              >
                {c.highlight && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-accent/15 text-accent border border-accent/30">
                    <ShieldCheck className="w-3 h-3" />
                    featured
                  </span>
                )}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0 pr-12">
                    <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{c.issuer}</p>
                    <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{c.date}</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-3 flex-1">
                  {c.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {c.skills.slice(0, 3).map((s) => (
                    <span key={s} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/15">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-primary">
                    <Award className="w-3 h-3" />
                    verified
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground group-hover:text-primary transition-colors">
                    open <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
