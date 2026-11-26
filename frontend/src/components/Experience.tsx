import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Technical Lead",
    company: "MANAS360 Mental Wellness Pvt. Ltd.",
    period: "Feb – Apr 2026",
    location: "Bengaluru",
    type: "Technical lead",
    summary:
      "Led full-stack development of a SaaS mental wellness platform, contributing to its architecture, module design, and technical implementation.",
    contributions: [
      "Built authentication, role-based access, and core product modules with React, Node.js, and PostgreSQL.",
      "Designed REST APIs connecting the frontend, backend services, and PostgreSQL data storage.",
      "Worked on cloud deployment and application configuration for production readiness.",
      "Partnered with the Founder & CEO on requirements, sprint planning, technical decisions, and feature delivery.",
    ],
    technologies: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "JWT", "Cloud Deployment"],
  },
  {
    title: "Full Stack & IoT Developer Intern",
    company: "AIMS Institutes",
    period: "Jul – Nov 2025",
    location: "Remote · Bengaluru",
    type: "Internship",
    summary:
      "Developed AutoVolt, an institute-approved classroom automation platform controlling 100+ devices across 10+ classrooms.",
    contributions: [
      "Built a React and Node.js application with REST APIs, MongoDB, and JWT-secured role-based access.",
      "Connected the dashboard and backend control services to ESP32 devices over MQTT.",
      "Applied Git, CI/CD fundamentals, and structured testing to deliver a production-ready system.",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "ESP32", "MQTT", "JWT", "CI/CD"],
  },
  {
    title: "Cloud Application Developer",
    company: "UptoSkills",
    period: "Feb – May 2025",
    location: "Remote",
    type: "Internship",
    summary:
      "Deployed three cloud-based applications on AWS and worked with core cloud services and operational practices.",
    contributions: [
      "Used scripted configuration to reduce manual infrastructure setup time by approximately 40%.",
      "Configured S3 buckets and IAM policies to apply least-privilege access.",
      "Implemented Lambda workflows for background processing and worked with monitoring and performance optimisation.",
    ],
    technologies: ["AWS EC2", "Amazon S3", "AWS Lambda", "IAM", "CI/CD"],
  },
  {
    title: "Cloud Infrastructure Developer",
    company: "Tech Mindsparc Innovations",
    period: "Sep – Dec 2024",
    location: "Remote",
    type: "Internship",
    summary:
      "Completed 10+ cloud labs across AWS, Microsoft Azure, and Google Cloud Platform.",
    contributions: [
      "Practised cloud environment configuration, access management, and resource provisioning.",
      "Explored automation fundamentals using Docker, GitHub, and DevOps workflows.",
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "GitHub"],
  },
  {
    title: "AI/ML Developer",
    company: "Tech Mindsparc Innovations",
    period: "Jun – Sep 2024",
    location: "Remote",
    type: "Internship",
    summary:
      "Built two Python-based machine learning models for emotion analysis.",
    contributions: [
      "Preprocessed data and performed exploratory analysis on datasets containing 1,000+ records.",
    ],
    technologies: ["Python", "Machine Learning", "Data Preprocessing", "EDA"],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section-container relative overflow-hidden">
      <div className="max-container-wide relative z-10" ref={ref}>
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Work grounded in delivery.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Product engineering, cloud deployments, and applied technology across internships and a technical lead role.
          </p>
        </motion.div>

        <div className="relative mt-10 max-w-4xl">
          <div className="absolute bottom-4 left-[1.05rem] top-4 w-px bg-border sm:left-[1.35rem]" />
          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.title}`}
                className="relative pl-12 sm:pl-16"
                initial={{ opacity: 0, x: -12 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <span className="absolute left-2 top-6 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-background text-primary sm:left-2.5">
                  <BriefcaseBusiness className="h-3.5 w-3.5" />
                </span>
                <div className="professional-card p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{experience.type}</p>
                      <h3 className="mt-1 text-lg font-bold text-foreground sm:text-xl">{experience.title}</h3>
                      <p className="mt-1 font-medium text-muted-foreground">{experience.company}</p>
                    </div>
                    <div className="space-y-1.5 text-xs text-muted-foreground">
                      <p className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {experience.period}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{experience.summary}</p>
                  <ul className="mt-3 space-y-2">
                    {experience.contributions.map((contribution) => (
                      <li key={contribution} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span key={technology} className="skill-chip">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
