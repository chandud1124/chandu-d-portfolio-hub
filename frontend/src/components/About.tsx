import { Code2, Rocket, Sparkles, GitBranch, Cloud, Cpu, Layers, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1400;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setDisplay(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const pillars = [
    {
      icon: Code2,
      title: "Builder",
      subtitle: "The Developer",
      description:
        "I architect and ship full-stack apps with MERN, Next.js, and FastAPI — obsessing over clean code, elegant UX, and maintainable systems.",
      skills: ["React / Next.js", "Node.js / FastAPI", "MongoDB / MySQL", "TypeScript"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Rocket,
      title: "Operator",
      subtitle: "The DevOps Engineer",
      description:
        "I containerize, automate, and deploy. From Dockerfiles to Terraform on AWS to CI/CD pipelines in GitHub Actions — I make shipping boring so the product can be exciting.",
      skills: ["AWS (EC2, S3, ECS, Lambda, CloudFront)", "Docker / Docker Compose", "Terraform / IaC", "GitHub Actions CI/CD"],
      gradient: "from-violet-500 to-fuchsia-500",
    },
  ];

  const stats = [
    { icon: Layers, value: 15, suffix: "+", label: "Projects Shipped" },
    { icon: Cloud, value: 3, suffix: "", label: "Clouds Deployed On" },
    { icon: GitBranch, value: 500, suffix: "+", label: "Commits / Year" },
    { icon: Activity, value: 99, suffix: ".9%", label: "Uptime Target" },
  ];

  return (
    <section id="about" className="section-container relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="max-container-wide relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <div className="section-heading inline-flex flex-col items-center">
            <span className="label">// about.me</span>
            <h2>
              Two Mindsets. <span className="gradient-text">One Engineer.</span>
            </h2>
            <div className="divider" />
          </div>
          <p className="text-base lg:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
            I'm a <span className="text-foreground font-semibold">cloud-native full-stack developer</span> based in
            Bengaluru, pursuing my MCA while building intelligent systems that solve real problems.
            I believe great software isn't written — it's <span className="text-primary font-semibold">delivered</span>:
            tested, containerized, observed, and shipped with confidence.
          </p>
        </motion.div>

        {/* Two pillars */}
        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              <div className="professional-card h-full relative overflow-hidden">
                {/* Corner gradient */}
                <div
                  className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${p.gradient} group-hover:opacity-40 transition-opacity`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <p.icon className="w-6 h-6" />
                    </motion.div>
                    <span className="font-mono text-xs text-muted-foreground">0{idx + 1}</span>
                  </div>

                  <div className="mb-1">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {p.subtitle}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 gradient-text">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{p.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.skills.map((s) => (
                      <span key={s} className="tech-badge">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass-card p-5 text-center relative overflow-hidden group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold gradient-text font-mono">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mindset quote */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted-foreground">
              "Write code like it's going to production tomorrow — because it is."
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
