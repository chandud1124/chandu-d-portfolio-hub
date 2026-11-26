import { Award, BrainCircuit, Cloud, Database, FileSpreadsheet, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { ComponentType } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type CredentialArea = "Cloud" | "AI & Data" | "Other";
type Credential = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  issuer: string;
  detail: string;
  area: CredentialArea;
};

const credentials: Credential[] = [
  {
    icon: Cloud,
    title: "Job Roles in Cloud",
    issuer: "AWS Training & Certification",
    detail: "Cloud career pathways and foundational AWS knowledge.",
    area: "Cloud",
  },
  {
    icon: Database,
    title: "Databases for Developers",
    issuer: "Oracle",
    detail: "Database concepts for software development.",
    area: "AI & Data",
  },
  {
    icon: BrainCircuit,
    title: "AI Skills Fest 2025",
    issuer: "Microsoft",
    detail: "Participation in Microsoft’s AI learning initiative.",
    area: "AI & Data",
  },
  {
    icon: Terminal,
    title: "Advanced Python",
    issuer: "Tech Mindsparc",
    detail: "Advanced Python programming.",
    area: "Other",
  },
  {
    icon: FileSpreadsheet,
    title: "Advanced Excel & Power BI",
    issuer: "AIMS Institutes · 2025",
    detail: "Advanced spreadsheet and business intelligence tools.",
    area: "AI & Data",
  },
];

const filters = ["All", "Cloud", "AI & Data", "Other"] as const;
type Filter = (typeof filters)[number];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState<Filter>("All");
  const list = filter === "All" ? credentials : credentials.filter((item) => item.area === filter);

  return (
    <section id="certifications" className="section-container relative overflow-hidden bg-secondary/45">
      <div className="max-container-wide relative z-10" ref={ref}>
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Certifications</p>
          <h2 className="section-title">Learning across cloud, data, and AI.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Selected credentials and training from my résumé.
          </p>
        </motion.div>

        <div className="mt-7 flex flex-wrap gap-2" role="group" aria-label="Filter certifications">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-ring ${
                filter === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((credential, index) => (
            <motion.article
              key={credential.title}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="professional-card flex gap-4 p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <credential.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{credential.area}</p>
                <h3 className="mt-1 font-semibold leading-snug text-foreground">{credential.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{credential.issuer}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{credential.detail}</p>
                <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Award className="h-3.5 w-3.5 text-primary" />
                  Selected credential
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
