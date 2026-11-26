export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "DevOps" | "AI/ML" | "IoT";
  technologies: string[];
  features: string[];
  architecture: string;
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  color: string;
  iconName: string;
};

export const projects: Project[] = [
  {
    id: "farmnexus",
    title: "FarmNexus",
    tagline: "Smart hydroponics management system",
    description:
      "A web dashboard for monitoring and managing hydroponic farming operations, with ESP32 sensors for environmental and water monitoring.",
    category: "IoT",
    technologies: ["React", "TypeScript", "Supabase", "ESP32", "MQTT", "Sensors"],
    features: [
      "Monitors temperature, humidity, water levels, and nutrient-related parameters",
      "Supports device management and crop operations",
      "Includes irrigation scheduling and analytics",
    ],
    architecture: `flowchart LR
    Sensors["ESP32 Sensors"] -->|MQTT| Dashboard["React + TypeScript Dashboard"]
    Dashboard --> Data["Supabase"]
    Dashboard --> Devices["Device Management"]
    Dashboard --> Crops["Crop Operations"]
    Dashboard --> Irrigation["Irrigation Scheduling"]
    Dashboard --> Analytics["Analytics"]`,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=1200&h=800&fit=crop",
    color: "from-emerald-500 to-teal-600",
    iconName: "Sprout",
  },
  {
    id: "territory-runner",
    title: "Territory Runner",
    tagline: "GPS geospatial fitness app",
    description:
      "A full-stack fitness application that uses GPS-based territory tracking to support leaderboards, team competitions, and social feeds.",
    category: "Full-Stack",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Capacitor", "Google Analytics 4"],
    features: [
      "Tracks territories using GPS and the Haversine formula",
      "Supports leaderboards, team competitions, and social feeds",
      "Packages the application for Android with Capacitor",
      "Uses Google Analytics 4 for event tracking",
    ],
    architecture: `flowchart LR
    Runner["Runner"] --> App["React + TypeScript App"]
    App --> GPS["GPS Location"]
    GPS --> Territory["Haversine Territory Tracking"]
    App --> API["Node.js + Express API"]
    API --> DB[("PostgreSQL")]
    API --> Social["Leaderboards, Teams, Social Feeds"]
    App --> Android["Capacitor Android Package"]
    App --> Analytics["Google Analytics 4"]`,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1200&h=800&fit=crop",
    color: "from-blue-500 to-indigo-600",
    iconName: "Map",
  },
  {
    id: "resume-genie",
    title: "Resume Genie",
    tagline: "AI-assisted resume builder",
    description:
      "A full-stack resume-building application with AI-assisted resume generation through the Gemini API.",
    category: "Full-Stack",
    technologies: ["React.js", "Node.js", "MongoDB Atlas", "JWT", "Gemini API", "Vercel", "REST APIs"],
    features: [
      "Creates and manages resume content",
      "Uses the Gemini API for AI-assisted generation",
      "Includes backend APIs for application features",
      "Deployed on Vercel",
    ],
    architecture: `flowchart LR
    User["User"] --> UI["React.js Frontend"]
    UI -->|REST APIs| API["Node.js Backend"]
    API --> DB[("MongoDB Atlas")]
    API --> Gemini["Gemini API"]
    API --> Auth["JWT Authentication"]`,
    githubUrl: "https://github.com/chandud1124/resume_genie",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=800&fit=crop",
    color: "from-violet-500 to-blue-600",
    iconName: "FileText",
  },
  {
    id: "digital-event",
    title: "Digital Event & Wedding Invitation Platform",
    tagline: "Responsive event websites for a client project",
    description:
      "A responsive digital invitation and event website built for a client, with a mobile-first experience and a Vercel deployment workflow.",
    category: "Full-Stack",
    technologies: ["React.js", "TypeScript", "Vite", "shadcn/ui", "Tailwind CSS", "Vercel"],
    features: [
      "Responsive, mobile-first invitation website",
      "Built with React.js, TypeScript, and Vite",
      "Customized UI using shadcn/ui and Tailwind CSS",
      "Configured Vercel deployment",
    ],
    architecture: `flowchart LR
    Visitor["Visitor"] --> Site["React + TypeScript Website"]
    Site --> UI["shadcn/ui + Tailwind CSS"]
    Site --> Build["Vite"]
    Build --> Deploy["Vercel Deployment"]`,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
    color: "from-rose-500 to-orange-500",
    iconName: "CalendarDays",
  },
];
