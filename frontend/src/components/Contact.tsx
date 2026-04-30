import { Mail, MapPin, Linkedin, Github, Send, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: "chandud9966@gmail.com",
      href: "mailto:chandud9966@gmail.com",
      kbd: "⌦ Compose",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/chandu-d",
      href: "https://www.linkedin.com/in/chandu-d",
      kbd: "↗ Open",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/chandud1124",
      href: "https://github.com/chandud1124",
      kbd: "↗ Open",
    },
    {
      icon: MapPin,
      label: "Based In",
      value: "Bengaluru, India · Remote-Ready",
      href: undefined,
      kbd: "GMT+5:30",
    },
  ];

  return (
    <section
      id="contact"
      className="section-container relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <motion.div
        className="absolute -top-20 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF, transparent)" }}
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />
      <motion.div
        className="absolute -bottom-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #A78BFA, transparent)" }}
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 16 }}
      />

      <div className="max-container-wide relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <div className="section-heading inline-flex flex-col items-center">
            <span className="label">// contact.connect()</span>
            <h2>
              Let's <span className="gradient-text">Build Something</span>
            </h2>
            <div className="divider" />
          </div>
          <p className="text-base lg:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Open to <span className="text-foreground font-medium">full-time</span> &amp;{" "}
            <span className="text-foreground font-medium">contract</span> roles — full-stack, DevOps,
            or cloud engineering. India &amp; global remote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left — Channel cards */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {channels.map((c, i) => {
              const Icon = c.icon;
              const Wrap = c.href ? "a" : "div";
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                >
                  <Wrap
                    href={c.href}
                    target={c.href?.startsWith("http") ? "_blank" : undefined}
                    rel={c.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="professional-card p-4 sm:p-5 flex items-center gap-4 group focus-ring transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                        {c.value}
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex font-mono text-[10px] text-muted-foreground border border-border rounded px-2 py-0.5 group-hover:border-primary/40 group-hover:text-primary transition-colors">
                      {c.kbd}
                    </span>
                    {c.href && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    )}
                  </Wrap>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right — CTA terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div className="terminal-window flex-1">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500/80" />
                <span className="terminal-dot bg-yellow-500/80" />
                <span className="terminal-dot bg-green-500/80" />
                <div className="flex-1 text-center text-xs text-gray-400 font-mono">
                  contact — zsh
                </div>
              </div>
              <div className="p-5 space-y-1.5 text-[13px] leading-relaxed font-mono">
                <div>
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-gray-300">availability --status</span>
                </div>
                <div className="text-cyan-300">&gt; ✅ OPEN · Full-Time + Contract</div>
                <div className="text-gray-400 pl-3">· Notice period: ~30 days</div>
                <div className="text-gray-400 pl-3">· Timezone: GMT+5:30 (flexible)</div>
                <div className="text-gray-400 pl-3">· Response: usually &lt; 24h</div>
                <div className="mt-3">
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-gray-300">interests --list</span>
                </div>
                <div className="text-cyan-300 pl-3">→ Full-Stack Engineering</div>
                <div className="text-cyan-300 pl-3">→ DevOps &amp; Cloud (AWS-first)</div>
                <div className="text-cyan-300 pl-3">→ Platform / SRE</div>
                <div className="text-cyan-300 pl-3">→ Applied AI &amp; IoT</div>
                <div className="flex items-center mt-2">
                  <span className="text-green-400">$</span>
                  <span className="ml-2 w-2 h-4 bg-cyan-400 animate-caret" />
                </div>
              </div>
            </div>

            <motion.a
              href="mailto:chandud9966@gmail.com?subject=Let's%20talk%20—%20Full-Stack%20%2B%20DevOps%20Engineer&body=Hi%20Chandu%2C%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20chat%20about%20..."
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-hero w-full justify-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Send a Message
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
