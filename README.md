<div align="center">

# Chandu D — Portfolio
### Full-Stack + DevOps Engineer · Cloud-Native Developer

**Live**: [chandu-portfolio](https://github.com/chandud9966-png/chandu-d-portfolio-hub) &nbsp;·&nbsp; **Author**: [@chandud1124](https://github.com/chandud1124)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-multi--stage-2496ED?logo=docker&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-AWS-7B42BC?logo=terraform&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-S3%20%2B%20CloudFront-FF9900?logo=amazonaws&logoColor=white)

</div>

A highly professional, 2026-era portfolio that positions Chandu D as a **Full-Stack + DevOps Engineer** — equally at home writing React/TypeScript UIs, Node/FastAPI services, and Terraform-managed AWS infrastructure.

> **This repository is itself the demo.** Every feature showcased — multi-stage Docker builds, GitHub Actions CI/CD with AWS OIDC, Terraform-provisioned S3 + CloudFront, automated cache invalidation — is live in this very codebase.

---

## ✨ Highlights

- 🎯 **Futuristic, dark-first design** with cyan → violet neon, tech-grid backgrounds, animated terminals
- 🧠 **Dual-mindset narrative**: Builder (dev) + Operator (DevOps)
- 📊 **Split skills** — Full-Stack Development vs DevOps & Cloud (AWS-first)
- 🗺️ **Live Mermaid architecture diagrams** inside each project modal
- 🛰️ **"DevOps Practices Demonstrated"** section — the portfolio's own pipeline, Terraform, and Dockerfile, with real code snippets
- ⚡ **Fast & polished** — Vite, code-splitting, PWA, Sentry, GA4, a11y-friendly
- 🐳 **Prod-ready containerization** with multi-stage Dockerfile + hardened NGINX
- ☁️ **Infrastructure as Code** — Terraform modules for S3 + CloudFront + OIDC IAM
- 🔁 **Zero-secret deploys** — GitHub Actions → AWS OIDC → S3 sync + CloudFront invalidation

---

## 🗂️ Repository Structure

```
.
├── frontend/                  # React 18 + Vite + TypeScript SPA
│   ├── src/
│   │   ├── components/        # Hero, About, Skills, Projects, DevOpsPractices, ...
│   │   ├── data/projects.ts   # 6 featured projects + Mermaid diagrams
│   │   ├── pages/             # Route-level pages
│   │   └── index.css          # Design system tokens + futuristic utilities
│   ├── public/                # Static assets, resume.pdf, manifest.json
│   └── vite.config.ts
├── backend/                   # FastAPI placeholder (Mongo-ready)
│
├── Dockerfile                 # Multi-stage: node:20-alpine → nginx:1.27-alpine
├── docker/nginx.conf          # Hardened SPA-friendly NGINX config
├── docker-compose.yml         # Local dev stack
│
├── .github/
│   ├── workflows/
│   │   ├── ci-cd.yml          # Lint → Test → Build → Deploy to AWS (OIDC)
│   │   └── terraform.yml      # Plan/apply for IaC changes
│   └── dependabot.yml         # Weekly dependency updates
│
├── terraform/                 # AWS infra as code
│   ├── main.tf                # S3 + CloudFront + OAC + ACM
│   ├── iam_github_oidc.tf     # Zero long-lived keys: GitHub Actions OIDC role
│   ├── variables.tf / outputs.tf
│   └── README.md
│
└── README.md                  # (this file)
```

---

## 🧰 Tech Stack

### Frontend
- **React 18**, **TypeScript 5**, **Vite 5**
- **Tailwind CSS 3** + shadcn/ui primitives
- **Framer Motion** animations, **Mermaid.js** diagrams
- **next-themes**, **react-router-dom**, **@tanstack/react-query**
- **Sentry** error tracking + **Google Analytics 4**

### DevOps / Cloud
- **Docker** multi-stage builds, **NGINX** for static serving
- **AWS**: S3 (origin), CloudFront (CDN + TLS), ACM, IAM (OIDC)
- **Terraform** ≥ 1.5 with AWS provider 5.x
- **GitHub Actions** CI/CD with OIDC federation (no IAM user keys)
- **Dependabot** for automated dependency updates

---

## 🚀 Running Locally

### Prerequisites
- Node 20 + Yarn 1.x
- (Optional) Docker 24+ for the containerized workflow
- (Optional) Terraform 1.5+ and an AWS account for IaC

### Dev server (fast inner loop)
```bash
cd frontend
yarn install
yarn dev           # http://localhost:3000
```

### Production-like build
```bash
cd frontend
yarn build
yarn preview       # serves /dist locally
```

### Docker (production parity)
```bash
# From repo root
docker compose up --build
# → http://localhost:8080
```

The image is multi-stage and ends around **~80 MB**. `docker/nginx.conf` handles SPA fallback, long-term caching for hashed assets, gzip, and security headers.

---

## ☁️ Deploy to AWS — end-to-end

### Step 1 — Provision with Terraform (one-time)

```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars
# edit: domain_name (optional), github_repository, region
terraform init
terraform apply
```

Terraform creates:

- Private S3 bucket (versioned, SSE-S3) — origin
- CloudFront distribution (HTTP/2 & 3, gzip, SPA fallback, TLS)
- Origin Access Control (OAC) — only CloudFront can read the bucket
- (Optional) ACM certificate in `us-east-1` for your custom domain
- IAM OIDC provider + role trusted by your GitHub repo

### Step 2 — Wire up GitHub Secrets

Copy Terraform outputs into **Settings → Secrets and variables → Actions**:

| Secret | Value |
|--------|-------|
| `AWS_DEPLOY_ROLE` | `deploy_role_arn` output |
| `AWS_REGION` | e.g. `ap-south-1` |
| `S3_BUCKET` | `site_bucket` output |
| `CLOUDFRONT_DISTRIBUTION_ID` | `cloudfront_distribution_id` output |

### Step 3 — Push

```bash
git push origin main
```

The `ci-cd.yml` workflow will:

1. Install deps · lint · typecheck · build (Vite)
2. Assume the AWS role via OIDC (short-lived STS session)
3. `aws s3 sync ./dist → s3://<bucket>` with correct cache-control headers
4. `aws cloudfront create-invalidation --paths '/*'`

Deployed. Globally. In ~2 minutes. **Zero long-lived AWS keys anywhere.**

---

## 📦 Featured Projects (in the UI)

Each project card opens a modal with: problem → solution → tech stack → metrics → **live Mermaid architecture diagram** → GitHub/live links.

| # | Project | Category | Key Stack |
|---|---------|----------|-----------|
| 1 | **This Portfolio — Ship it on AWS** | DevOps | GitHub Actions + Terraform + S3 + CloudFront + OIDC |
| 2 | **Dockerized MERN on AWS ECS** | DevOps | Docker + ECR + ECS Fargate + ALB + Terraform |
| 3 | **AutoVolt — IoT Classroom Automation** | IoT | MERN + ESP32 + MQTT + Docker |
| 4 | **AI Vision Attendance System** | AI/ML | React + TensorFlow.js + WebRTC + Node |
| 5 | **ResumeGenie — AI Resume Builder** | Full-Stack | MERN + Gemini AI |
| 6 | **Live Emotion Detection** | AI/ML | YOLOv8 + DeepFace + OpenCV |

---

## 🔐 Security

- OIDC federation for GitHub Actions → AWS (no long-lived IAM user keys)
- S3 bucket is fully private; reads only through CloudFront OAC
- SSE-S3 encryption at rest
- Security headers set in NGINX (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- HTTPS-only at the edge (CloudFront `redirect-to-https`)
- Automated dependency updates via Dependabot

---

## 🧪 Observability

- **Sentry** captures runtime errors with source maps and release tagging
- **Google Analytics 4** for user-flow insights
- **CloudFront** access logs (can be enabled via Terraform)
- Hooks in place for **CloudWatch / Prometheus / Grafana** — extension point ready

---

## 🧑‍💻 Scripts

```bash
# Frontend (cd frontend)
yarn dev            # Vite dev server
yarn build          # production build → dist/
yarn preview        # serve production build
yarn lint           # ESLint
yarn type-check     # tsc --noEmit
yarn test           # Vitest in watch mode
yarn test:run       # one-shot test run
yarn test:coverage  # coverage report
```

---

## 📬 Contact

- **Email**: chandud9966@gmail.com
- **LinkedIn**: [linkedin.com/in/chandu-d](https://www.linkedin.com/in/chandu-d)
- **GitHub**: [github.com/chandud1124](https://github.com/chandud1124)

Open to **Full-Time & Contract roles** — India & global remote. Full-stack, DevOps, cloud engineering.

---

<div align="center">
Built with ❤️ in Bengaluru · Shipped via <code>GitHub Actions</code> → <code>AWS</code> · Provisioned with <code>Terraform</code>
</div>
