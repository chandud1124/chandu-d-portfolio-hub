import { Cpu, GraduationCap, Layers3, Server, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Layers3, value: "16+ months", label: "hands-on experience" },
  { icon: Workflow, value: "4", label: "internships completed" },
  { icon: Server, value: "5+", label: "applications deployed" },
  { icon: Cpu, value: "100+", label: "IoT devices connected" },
];

const education = [
  {
    degree: "Master of Computer Applications",
    abbreviation: "MCA",
    school: "AIMS Institutes · Bengaluru",
    period: "2023 – 2025",
  },
  {
    degree: "Bachelor of Science",
    abbreviation: "BSc",
    school: "Nagarjuna College of Management Studies · Chikkaballapur",
    period: "2018 – 2023",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-container relative overflow-hidden">
      <div className="max-container-wide relative z-10" ref={ref}>
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            Engineering useful products, <span className="gradient-text">end to end.</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I’m a full stack developer with production deployment experience across IoT automation,
            AI/ML systems, and cloud infrastructure. I enjoy working across the stack—from designing
            clear interfaces and reliable APIs to connecting applications with cloud services and
            physical devices.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4"
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {highlights.map((item) => (
            <div key={item.label} className="professional-card p-5">
              <item.icon className="h-5 w-5 text-primary" />
              <p className="mt-4 text-2xl font-bold tracking-tight text-foreground">{item.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <div id="education" className="mt-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="eyebrow">Education</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Academic background</h3>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {education.map((item, index) => (
              <motion.article
                key={item.abbreviation}
                className="professional-card flex gap-4 p-5 sm:p-6"
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{item.abbreviation}</p>
                  <h4 className="mt-1 font-semibold text-foreground">{item.degree}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                  <p className="mt-3 text-xs font-medium text-muted-foreground">{item.period}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Coursework includes cloud computing, web technologies, machine learning, data structures,
            databases, operating systems, and computer networks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
