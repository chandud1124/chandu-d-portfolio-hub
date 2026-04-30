import { Container, GitBranch, CloudCog, Activity, ShieldCheck, Gauge, Github, FileCode2, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MermaidDiagram from "./MermaidDiagram";
import { useState } from "react";

const practices = [
  {
    icon: Container,
    title: "Containerized from Day 1",
    description: "Multi-stage Dockerfile produces a lean NGINX-served production image. Docker Compose orchestrates frontend + backend + MongoDB for local dev parity.",
    snippet: `# Dockerfile - multi-stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
    language: "dockerfile",
  },
  {
    icon: GitBranch,
    title: "GitHub Actions CI/CD",
    description: "Every push runs lint, typecheck, unit tests, Vite build, and — on main — deploys static assets to AWS S3 + invalidates CloudFront via OIDC (no long-lived keys).",
    snippet: `# .github/workflows/ci-cd.yml
name: CI/CD
on:
  push: { branches: [main] }
jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: yarn }
      - run: yarn install --frozen-lockfile
      - run: yarn lint && yarn type-check
      - run: yarn build
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: \${{ secrets.AWS_DEPLOY_ROLE }}
          aws-region: ap-south-1
      - run: aws s3 sync ./dist s3://$BUCKET --delete
      - run: aws cloudfront create-invalidation
             --distribution-id $CF_ID --paths "/*"`,
    language: "yaml",
  },
  {
    icon: CloudCog,
    title: "AWS Infrastructure as Code",
    description: "All AWS resources — S3 bucket, CloudFront distribution, ACM certificate, IAM roles with OIDC trust — are defined declaratively in Terraform modules.",
    snippet: `# terraform/main.tf (excerpt)
resource "aws_s3_bucket" "site" {
  bucket = var.site_bucket
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled             = true
  default_root_object = "index.html"
  origin {
    domain_name = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id   = "s3-site"
  }
  default_cache_behavior {
    target_origin_id       = "s3-site"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
  }
  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method  = "sni-only"
  }
}`,
    language: "hcl",
  },
  {
    icon: Activity,
    title: "Observability + Error Tracking",
    description: "Sentry captures runtime errors across browsers with release + source maps. Google Analytics tracks user flows. Ready to wire to CloudWatch / Prometheus in production.",
    snippet: `// src/lib/sentry.ts
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  release: import.meta.env.VITE_APP_VERSION,
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.05,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
});`,
    language: "typescript",
  },
  {
    icon: Gauge,
    title: "Performance as a Feature",
    description: "Code-splitting via React.lazy, route-level Suspense, image optimization with sharp, tree-shaken bundles, and a PWA service worker for offline-capable loads.",
    snippet: `// vite.config.ts - manual chunking
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ["react", "react-dom"],
        ui: ["@radix-ui/react-dialog"],
      }
    }
  },
  chunkSizeWarningLimit: 1000,
}`,
    language: "typescript",
  },
  {
    icon: ShieldCheck,
    title: "Security by Default",
    description: "CSP-friendly builds, no inline secrets, HTTPS-only CloudFront, AWS OIDC federation (no IAM user keys), and automated dependency updates via Dependabot.",
    snippet: `# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule: { interval: "weekly" }
    open-pull-requests-limit: 10
    groups:
      dev-deps:
        dependency-type: "development"`,
    language: "yaml",
  },
];

const pipelineDiagram = `flowchart LR
    Dev["👨‍💻 Developer"] -->|git push| GH["GitHub\\n(source of truth)"]
    GH --> Webhook{CI Trigger}
    Webhook --> Lint["Lint + Typecheck"]
    Lint --> Test["Unit Tests"]
    Test --> Build["Vite Build"]
    Build --> Scan["Security Scan\\n(deps + image)"]
    Scan --> Artifact["Docker Image\\n+ Static Assets"]
    Artifact -->|OIDC| AWS{"AWS Account"}
    AWS --> S3["S3 Bucket"]
    AWS --> CF["CloudFront"]
    CF --> Users["🌐 Global Users"]
    TF["Terraform"] -.->|IaC| AWS
    Sentry["Sentry + GA"] <-.->|telemetry| Users
    classDef aws fill:#FF9900,stroke:#FF9900,color:#000
    classDef ci fill:#2088FF,stroke:#2088FF,color:#fff
    class S3,CF,AWS aws
    class Lint,Test,Build,Scan,Artifact ci`;

const DevOpsPractices = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeSnippet, setActiveSnippet] = useState(0);

  return (
    <section id="devops" className="section-container relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #00E5FF, transparent)" }} />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #A78BFA, transparent)" }} />

      <div className="max-container-wide relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <div className="section-heading inline-flex flex-col items-center">
            <span className="label">// devops.practices</span>
            <h2>
              This Portfolio Is a <span className="gradient-text">Live Demo</span>
            </h2>
            <div className="divider" />
          </div>
          <p className="text-base lg:text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Talk is cheap — this very site is built, tested, containerized, provisioned, and deployed to AWS using the
            practices below. Every commit flows through the same pipeline.
          </p>
        </motion.div>

        {/* Pipeline diagram */}
        <motion.div
          className="mb-14 glass-card p-4 sm:p-6 rounded-2xl border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-primary" />
              <h3 className="font-semibold">End-to-End Pipeline</h3>
            </div>
            <span className="font-mono text-xs text-muted-foreground">// rendered live with Mermaid.js</span>
          </div>
          <MermaidDiagram chart={pipelineDiagram} id="devops-pipeline" />
        </motion.div>

        {/* Grid of practice cards with code snippet viewer */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: cards */}
          <div className="space-y-3">
            {practices.map((p, i) => {
              const active = activeSnippet === i;
              const Icon = p.icon;
              return (
                <motion.button
                  key={p.title}
                  onClick={() => setActiveSnippet(i)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 2 }}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 ${
                    active
                      ? "bg-primary/10 border-primary/40 shadow-lg shadow-primary/10"
                      : "glass-card hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      active ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold mb-1">{p.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: sticky snippet viewer */}
          <motion.div
            className="lg:sticky lg:top-24 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500/80" />
                <span className="terminal-dot bg-yellow-500/80" />
                <span className="terminal-dot bg-green-500/80" />
                <div className="flex-1 text-center text-xs text-gray-400 font-mono flex items-center justify-center gap-2">
                  <FileCode2 className="w-3 h-3" />
                  {practices[activeSnippet].title}
                  <span className="text-[10px] text-gray-500">· {practices[activeSnippet].language}</span>
                </div>
              </div>
              <pre className="p-4 sm:p-5 overflow-x-auto text-[12px] sm:text-[13px] leading-relaxed text-gray-300 max-h-[500px] overflow-y-auto">
                <code>{practices[activeSnippet].snippet}</code>
              </pre>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <a
                href="https://github.com/chandud9966-png/chandu-d-portfolio-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-primary hover:text-accent transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                view in repo →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsPractices;
