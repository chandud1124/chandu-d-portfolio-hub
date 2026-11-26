import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Radio,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "SQL", "Python"],
  },
  {
    icon: Layers3,
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Middleware", "JWT Authentication", "CRUD"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "MongoDB Atlas", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "S3", "Lambda", "IAM", "Azure", "Google Cloud", "Docker", "CI/CD", "Vercel", "Render"],
  },
  {
    icon: Radio,
    title: "IoT",
    skills: ["ESP32", "MQTT", "Arduino"],
  },
  {
    icon: BrainCircuit,
    title: "AI / ML",
    skills: ["OpenCV", "YOLOv8", "DeepFace", "TensorFlow.js", "Machine Learning"],
  },
  {
    icon: GitBranch,
    title: "Tools & Ways of Working",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Figma", "JIRA", "Power BI", "Agile / Scrum"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-container relative overflow-hidden bg-secondary/45">
      <div className="max-container-wide relative z-10" ref={ref}>
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Technical skills</p>
          <h2 className="section-title">A practical, full-stack toolkit.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Technologies from my toolkit and recent application, cloud, and connected-device work.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className="professional-card h-full p-5"
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
