import { Briefcase, Calendar, MapPin, Award, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Full Stack & IoT Developer",
    company: "AIMS Institutes",
    period: "Jul 2025 – Nov 2025",
    location: "Bengaluru, Karnataka, India",
    type: "Internship",
    description:
      "Designed and deployed AutoVolt – Smart IoT Classroom Automation system for real-time device control using ESP32 microcontrollers and MQTT. Developed full-stack dashboard with React.js and Node.js for real-time monitoring of classroom lights, fans, and electrical devices. Implemented alpha testing and technical review; approved as deployment-ready by institute's technical committee. Gained hands-on experience in IoT systems, cloud-ready architecture, and collaborative project execution.",
    technologies: ["React.js", "Node.js", "ESP32", "MQTT", "IoT", "Full-Stack"],
    current: false,
    certificateLink:
      "https://drive.google.com/file/d/1_aims_certificate_link/view",
  },
  {
    title: "Cloud Intern",
    company: "UptoSkills",
    period: "Feb 2025 – May 2025",
    location: "Remote",
    type: "Internship",
    description:
      "Designed and deployed cloud-based applications using AWS EC2, S3, and Lambda. Architected serverless solutions for performance and cost. Automated workflows + infrastructure for scalable, reproducible deployments.",
    technologies: ["AWS EC2", "S3", "Lambda", "IaC", "Cloud Architecture"],
    current: false,
    certificateLink:
      "https://drive.google.com/file/d/13RfF9JTE1Gk6VSkLuXBZNJB6fTzT6-v6/view",
  },
  {
    title: "Cloud Computing Intern",
    company: "Tech Mindsparc Innovations",
    period: "Sep 2024 – Dec 2024",
    location: "Remote",
    type: "Internship",
    description:
      "Managed multi-cloud deployments across AWS, Azure, and GCP. Implemented DevOps automation pipelines and performance optimization. Delivered cost-effective infrastructure for real-time workloads.",
    technologies: ["AWS", "Azure", "GCP", "DevOps", "CI/CD"],
    current: false,
    certificateLink:
      "https://drive.google.com/file/d/1xztf6uo85yuCiaMPLp9Tame95simGhVV/view",
  },
  {
    title: "AI/ML Intern",
    company: "Tech Mindsparc Innovations",
    period: "Jun 2024 – Sep 2024",
    location: "Remote",
    type: "Internship",
    description:
      "Built and deployed ML models using Python and PyTorch. Worked on emotion analysis and predictive modeling. Conducted data preprocessing, model optimization, and performance evaluation.",
    technologies: ["Python", "PyTorch", "ML", "Model Training", "Data Analysis"],
    current: false,
    certificateLink:
      "https://drive.google.com/file/d/1KdywdSs0Xx3VIZJfCeQmjWy4zWP0tv9t/view",
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
      className="section-container relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none" />
      <motion.div
        className="absolute top-1/3 right-0 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF, transparent)" }}
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <div className="max-container-wide relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <div className="section-heading inline-flex flex-col items-center">
            <span className="label">// experience.log</span>
            <h2>
              The <span className="gradient-text">Journey</span>
            </h2>
            <div className="divider" />
          </div>
          <p className="text-base lg:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Hands-on roles across cloud engineering, DevOps automation, and applied AI.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical rail */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Node */}
                <div className="absolute left-0 sm:left-4 top-6 flex items-center justify-center">
                  <span className="absolute w-5 h-5 rounded-full bg-primary/20 animate-ping" />
                  <span className="relative w-3 h-3 rounded-full bg-primary border-2 border-background shadow-[0_0_12px_rgba(0,229,255,0.6)]" />
                </div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="professional-card p-5 sm:p-6 group"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 flex-wrap">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Briefcase className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-green-500/15 text-green-400 border border-green-500/30">
                            <span className="status-dot" />
                            current
                          </span>
                        )}
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md text-muted-foreground border border-border">
                          {exp.type}
                        </span>
                      </div>
                      <p className="font-medium text-primary">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-1.5 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.technologies.map((t) => (
                      <span key={t} className="tech-badge text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {exp.certificateLink && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-primary transition-colors group/link"
                      >
                        <Award className="w-3.5 h-3.5" />
                        view certificate
                        <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
