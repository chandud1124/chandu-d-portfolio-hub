import { LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  category: "Full-Stack" | "DevOps" | "AI/ML" | "IoT";
  technologies: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  architecture: string;   // Mermaid source
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  color: string;          // Tailwind gradient e.g. "from-cyan-500 to-blue-500"
  iconName: string;
};

export const projects: Project[] = [
  {
    id: "portfolio-aws",
    title: "This Portfolio — Ship it on AWS",
    tagline: "CI/CD, Docker, Terraform, S3 + CloudFront",
    description:
      "This very portfolio ships via a fully automated GitOps pipeline. Every push to main triggers GitHub Actions: lint → typecheck → test → build → containerize → deploy static assets to AWS S3 and invalidate CloudFront — all provisioned with Terraform.",
    problem:
      "Deploying a modern React SPA the manual way is slow, error-prone, and insecure. There's no audit trail, no reproducibility, and rollbacks are painful.",
    solution:
      "A Terraform-managed AWS foundation (S3 + CloudFront + ACM + OIDC role for GitHub), a multi-stage Dockerfile for parity between local and CI, and a GitHub Actions pipeline with OIDC-federated AWS credentials. No long-lived secrets, fully reproducible, rollback in one click.",
    category: "DevOps",
    technologies: ["AWS S3", "CloudFront", "Terraform", "GitHub Actions", "Docker", "OIDC", "NGINX", "React", "Vite"],
    features: [
      "GitHub Actions CI/CD with matrix lint + test",
      "Terraform-managed S3 + CloudFront + ACM",
      "OIDC federation — zero long-lived AWS keys",
      "Multi-stage Docker build for dev/prod parity",
      "Automated CloudFront cache invalidation",
      "PR preview strategy (ready for extension)",
    ],
    metrics: [
      { label: "Deploy time", value: "~2 min" },
      { label: "Global latency (p95)", value: "<100ms" },
      { label: "Manual steps", value: "0" },
      { label: "Long-lived secrets", value: "0" },
    ],
    architecture: `flowchart LR
    Dev["👨‍💻 Developer\\nlocal commit"] -->|git push| GH["GitHub\\nRepository"]
    GH -->|trigger| GA["GitHub Actions\\nCI/CD"]
    subgraph CI ["Continuous Integration"]
      GA --> Lint["Lint + Typecheck"]
      Lint --> Test["Unit Tests"]
      Test --> Build["Vite Build"]
      Build --> Docker["Docker Image"]
    end
    subgraph CD ["Continuous Delivery"]
      Docker -->|OIDC| AWS["AWS Account"]
      AWS --> S3["S3 Bucket\\nstatic assets"]
      AWS --> CF["CloudFront CDN\\n+ ACM TLS"]
      CF --> Invalidate["Cache Invalidate"]
    end
    CF --> Users["🌐 End Users\\nGlobal"]
    subgraph IaC ["Infrastructure as Code"]
      TF["Terraform"] -.->|provision| S3
      TF -.->|provision| CF
      TF -.->|provision| AWS
    end
    classDef aws fill:#FF9900,stroke:#FF9900,color:#000
    classDef ci fill:#2088FF,stroke:#2088FF,color:#fff
    class S3,CF,AWS aws
    class GA,Lint,Test,Build,Docker ci`,
    githubUrl: "https://github.com/chandud9966-png/chandu-d-portfolio-hub",
    demoUrl: "https://github.com/chandud9966-png/chandu-d-portfolio-hub",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=800&fit=crop",
    color: "from-cyan-500 to-blue-500",
    iconName: "Workflow",
  },
  {
    id: "dockerized-mern",
    title: "Dockerized MERN on AWS ECS",
    tagline: "Production-ready MERN deployed on Fargate with Terraform",
    description:
      "A reference full-stack MERN deployment: containerized React frontend and Node/Express API, orchestrated by AWS ECS Fargate, with MongoDB Atlas, ALB, and Terraform-managed infrastructure. Zero-downtime deploys, auto-scaling, and full observability.",
    problem:
      "Most MERN apps run on a single EC2 and break at scale — no autoscaling, no HA, no rollback strategy, fragile secrets.",
    solution:
      "Split frontend and backend into Docker containers, push to ECR, run on ECS Fargate behind an Application Load Balancer, store secrets in AWS Secrets Manager, and provision the whole stack via Terraform modules. Rolling blue/green deploys via CodeDeploy.",
    category: "DevOps",
    technologies: ["React", "Node.js", "Express", "MongoDB Atlas", "Docker", "AWS ECR", "AWS ECS Fargate", "ALB", "Terraform", "Secrets Manager"],
    features: [
      "Multi-stage Docker builds (< 120MB images)",
      "ECS Fargate — no servers to manage",
      "Application Load Balancer with health checks",
      "Auto-scaling based on CPU & request count",
      "AWS Secrets Manager for env injection",
      "Terraform modules reusable across environments",
    ],
    metrics: [
      { label: "Cold deploy", value: "~5 min" },
      { label: "Zero-downtime", value: "✓ blue/green" },
      { label: "Image size", value: "~120 MB" },
      { label: "Env parity", value: "100%" },
    ],
    architecture: `flowchart TB
    Users["🌐 Users"] --> R53["Route 53"]
    R53 --> ALB["Application Load Balancer"]
    subgraph VPC ["AWS VPC"]
      subgraph Public ["Public Subnet"]
        ALB
      end
      subgraph Private ["Private Subnets"]
        ALB --> FE["ECS Task: Frontend\\nReact + NGINX"]
        ALB --> BE["ECS Task: Backend\\nNode + Express"]
        FE --> BE
      end
    end
    BE --> SM["Secrets Manager"]
    BE --> Mongo["(MongoDB Atlas)"]
    ECR["AWS ECR\\nContainer Registry"] -.->|image pull| FE
    ECR -.->|image pull| BE
    subgraph CICD ["GitHub Actions"]
      Push["git push main"] --> BuildFE["Build FE image"]
      Push --> BuildBE["Build BE image"]
      BuildFE --> PushECR["Push to ECR"]
      BuildBE --> PushECR
      PushECR --> Deploy["ecs update-service"]
    end
    Deploy -.-> FE
    Deploy -.-> BE
    TF["Terraform"] -.->|IaC| VPC
    TF -.->|IaC| ECR
    classDef aws fill:#FF9900,stroke:#FF9900,color:#000
    class ALB,ECR,SM,R53 aws`,
    githubUrl: "https://github.com/chandud1124",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&h=800&fit=crop",
    color: "from-orange-500 to-amber-500",
    iconName: "Container",
  },
  {
    id: "autovolt",
    title: "AutoVolt — Smart IoT Classroom Automation",
    tagline: "Full-stack MERN + ESP32 + MQTT with AI-driven energy optimization",
    description:
      "End-to-end IoT platform controlling classroom appliances in real time. ESP32 microcontrollers publish/subscribe over MQTT, a Node/Express backend brokers commands, and an intuitive React dashboard gives admins and users live control + telemetry.",
    problem:
      "Classroom electricity is wasted daily — lights and fans run in empty rooms, there's no visibility, and nothing ties occupancy to utility spend.",
    solution:
      "ESP32 relays controlled over MQTT (Mosquitto), live React dashboard with role-based auth (JWT), MongoDB for device state + history, Docker Compose for local stack, and a simple AI rule-engine that optimizes schedules by usage patterns.",
    category: "IoT",
    technologies: ["React", "Node.js", "Express", "MongoDB", "ESP32", "MQTT", "Mosquitto", "TailwindCSS", "Docker"],
    features: [
      "Real-time device control via MQTT",
      "Role-based auth (admin/user) with JWT",
      "Live telemetry dashboard + history",
      "AI-driven scheduling & energy optimization",
      "Dockerized stack for one-command deploy",
      "Fail-safe offline mode on each ESP32",
    ],
    metrics: [
      { label: "Energy saved", value: "~30%" },
      { label: "Devices supported", value: "50+" },
      { label: "Command latency", value: "<400ms" },
      { label: "Uptime", value: "99.5%" },
    ],
    architecture: `flowchart LR
    ESP["ESP32 Devices\\n(relays/sensors)"] <-->|MQTT| Broker["MQTT Broker\\nMosquitto"]
    Broker <--> API["Node/Express API"]
    User["👤 Admin / User"] --> UI["React Dashboard"]
    UI <-->|REST + WS| API
    API --> DB[("MongoDB")]
    API --> AI["AI Rule-Engine\\nusage-aware scheduling"]
    subgraph Docker ["Docker Compose (local/prod)"]
      UI
      API
      Broker
      DB
      AI
    end
    classDef iot fill:#10B981,stroke:#10B981,color:#fff
    classDef svc fill:#0EA5E9,stroke:#0EA5E9,color:#fff
    class ESP,Broker iot
    class UI,API,AI svc`,
    githubUrl: "https://github.com/chandud1124/AutoVolt",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&h=800&fit=crop",
    color: "from-yellow-500 to-orange-500",
    iconName: "Zap",
  },
  {
    id: "ai-vision",
    title: "AI Vision Attendance System",
    tagline: "Face-recognition attendance with TensorFlow.js + WebRTC",
    description:
      "A browser-based attendance platform that uses TensorFlow.js and BlazeFace to recognize students in real time, with a secure Node/Express API for roll management, sessions, and reports.",
    problem:
      "Manual attendance wastes ~10 minutes per class, is prone to proxy fraud, and gives no data insight.",
    solution:
      "In-browser face detection (no server round-trip), WebRTC camera access, JWT-protected APIs, and a clean React dashboard that exports attendance as CSV/PDF. Lightweight and privacy-safe — frames never leave the client for recognition.",
    category: "AI/ML",
    technologies: ["React (TS)", "TensorFlow.js", "BlazeFace", "WebRTC", "Node.js", "Express", "TailwindCSS"],
    features: [
      "In-browser face detection & recognition",
      "WebRTC camera capture (no native app needed)",
      "Role-based auth with JWT + bcrypt",
      "CRUD for students, classes, sessions",
      "Attendance export to CSV / PDF",
      "Zero frames sent to server (privacy-first)",
    ],
    metrics: [
      { label: "Manual effort saved", value: "~80%" },
      { label: "Recognition time", value: "<200ms" },
      { label: "Accuracy", value: "~95%" },
      { label: "Privacy", value: "on-device" },
    ],
    architecture: `flowchart LR
    Cam["📷 Camera\\n(WebRTC)"] --> Browser["React SPA"]
    Browser --> TF["TensorFlow.js\\n+ BlazeFace"]
    TF -->|embeddings| Match["On-device\\nMatcher"]
    Match -->|attendance event| API["Node/Express API"]
    Browser -->|login/JWT| API
    API --> DB[("Database")]
    API --> Export["CSV / PDF\\nReports"]
    classDef client fill:#A78BFA,stroke:#A78BFA,color:#fff
    classDef server fill:#0EA5E9,stroke:#0EA5E9,color:#fff
    class Cam,Browser,TF,Match client
    class API,DB,Export server`,
    githubUrl: "https://github.com/chandud1124/aivision",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop",
    color: "from-cyan-500 to-blue-500",
    iconName: "Eye",
  },
  {
    id: "resume-genie",
    title: "ResumeGenie — AI Resume Builder",
    tagline: "MERN + Gemini AI — build, optimize, and chat your resume into shape",
    description:
      "A full-stack MERN app for crafting professional resumes, augmented with an AI chatbot (Gemini) that helps users refine content, tailor for roles, and keep ATS-friendly formatting.",
    problem:
      "Resumes are hard to write, easy to get wrong, and even harder to tailor per role. Most builders are rigid templates with no intelligent guidance.",
    solution:
      "Interactive editor with multiple templates, an AI chatbot for section-by-section suggestions, real-time preview, and export to PDF. Auth, versioning, and resume history stored in MongoDB.",
    category: "Full-Stack",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "TailwindCSS", "JWT"],
    features: [
      "Multiple professional, ATS-friendly templates",
      "AI chatbot for section-level guidance",
      "Real-time preview + autosave",
      "Role-based tailoring (JD → targeted resume)",
      "One-click PDF export",
      "Resume version history",
    ],
    metrics: [
      { label: "Templates", value: "10+" },
      { label: "Avg edit time", value: "↓ 60%" },
      { label: "AI latency", value: "<2s" },
      { label: "ATS compatible", value: "✓" },
    ],
    architecture: `flowchart LR
    User["👤 User"] --> UI["React Frontend"]
    UI -->|REST + JWT| API["Node/Express API"]
    API --> DB[("MongoDB")]
    API --> Gemini["Google Gemini AI"]
    API --> PDF["PDF Generator"]
    UI -->|Live preview| UI
    Gemini -.->|suggestions| API
    classDef svc fill:#0EA5E9,stroke:#0EA5E9,color:#fff
    classDef ai fill:#A78BFA,stroke:#A78BFA,color:#fff
    class UI,API,DB,PDF svc
    class Gemini ai`,
    githubUrl: "https://github.com/chandud1124/resume_genie",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=800&fit=crop",
    color: "from-purple-500 to-pink-500",
    iconName: "Bot",
  },
  {
    id: "emotion-detection",
    title: "Live Emotion Detection System",
    tagline: "Real-time emotion recognition with YOLOv8 + DeepFace",
    description:
      "An AI-powered pipeline that detects faces in a live video feed with YOLOv8 and classifies emotions with DeepFace in real time. Privacy-first: nothing stored, everything computed on the local machine.",
    problem:
      "Emotion analytics tools are either cloud-bound (privacy risk) or heavyweight and hard to run live.",
    solution:
      "Local Python pipeline — YOLOv8 detects faces, DeepFace classifies, OpenCV overlays results on the live feed. Pluggable camera sources and console logging; no storage.",
    category: "AI/ML",
    technologies: ["Python 3.13", "OpenCV", "YOLOv8", "DeepFace", "PyTorch", "NumPy"],
    features: [
      "YOLOv8 real-time face detection",
      "DeepFace emotion classification",
      "Live video overlay",
      "Multi-camera support",
      "Console event logging",
      "No persistent storage (privacy-safe)",
    ],
    metrics: [
      { label: "FPS", value: "25+" },
      { label: "Emotions", value: "7 classes" },
      { label: "Latency", value: "<80ms" },
      { label: "Privacy", value: "local-only" },
    ],
    architecture: `flowchart LR
    Cam["📷 Webcam / IP Cam"] --> CV["OpenCV Capture"]
    CV --> YOLO["YOLOv8\\nFace Detection"]
    YOLO --> DF["DeepFace\\nEmotion Classifier"]
    DF --> Overlay["OpenCV Overlay"]
    Overlay --> Screen["Live Preview"]
    DF --> Log["Console Logger"]
    classDef ml fill:#A78BFA,stroke:#A78BFA,color:#fff
    class YOLO,DF ml`,
    githubUrl: "https://github.com/chandud1124/emotion_detection",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    color: "from-violet-500 to-indigo-500",
    iconName: "Brain",
  },
];
