import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    id: "service-1",
    title: "Frontend Engineering",
    subtitle: "High-Performance Web Applications",
    description:
      "Architecting blazing-fast, accessible, and responsive user interfaces with Next.js, React 19, TypeScript, and modern state machines. Built for speed, scale, and effortless maintainability.",
    iconName: "Monitor",
    features: [
      "Server Components & Partial Prerendering",
      "Strict TypeScript & modular component architectures",
      "Mobile-first responsive fluid layouts",
      "Sub-second Core Web Vitals (LCP, CLS, INP)",
    ],
    technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Zustand"],
    accentGradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "service-2",
    title: "Creative Development & 3D",
    subtitle: "Immersive WebGL & Spatial Interfaces",
    description:
      "Transforming ordinary websites into unforgettable interactive journeys with Three.js, React Three Fiber, custom GLSL shaders, and buttery-smooth physics-based animations.",
    iconName: "Sparkles",
    features: [
      "Interactive 3D scenes & procedural geometric art",
      "Custom GLSL vertex and fragment shaders",
      "Framer Motion & GSAP timeline orchestration",
      "Lenis smooth inertia scrolling & micro-interactions",
    ],
    technologies: ["Three.js", "React Three Fiber", "GLSL", "GSAP", "Lenis", "Framer Motion"],
    accentGradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "service-3",
    title: "Backend & Systems Architecture",
    subtitle: "Scalable Microservices & Real-Time APIs",
    description:
      "Designing resilient backends, sub-millisecond REST/GraphQL/gRPC APIs, real-time WebSocket pipelines, and automated cloud infrastructure that never goes down.",
    iconName: "Server",
    features: [
      "Microservice & event-driven architecture",
      "Distributed real-time synchronization (WebSockets, CRDTs)",
      "High-throughput Go & Node.js backends",
      "Schema-first GraphQL & type-safe tRPC APIs",
    ],
    technologies: ["Node.js", "Go", "FastAPI", "GraphQL", "WebSockets", "Docker"],
    accentGradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "service-4",
    title: "Database Architecture & Optimization",
    subtitle: "Type-Safe Data Modeling & Query Tuning",
    description:
      "Engineering robust relational and non-relational database schemas, automated migrations, high-speed Redis caching layers, and high-dimensional vector search implementations.",
    iconName: "Database",
    features: [
      "PostgreSQL schema modeling & index optimization",
      "pgvector embeddings for semantic AI search",
      "Redis distributed caching & sliding-window rate limiting",
      "Type-safe migrations with Prisma & Drizzle ORM",
    ],
    technologies: ["PostgreSQL", "Supabase", "Redis", "Prisma", "Drizzle", "pgvector"],
    accentGradient: "from-amber-500 to-orange-600",
  },
  {
    id: "service-5",
    title: "Cloud Infrastructure & DevOps",
    subtitle: "Automated CI/CD & Zero-Downtime Deployments",
    description:
      "Automating deployment lifecycles with containerization, Kubernetes orchestration, edge computing, and infrastructure as code for bulletproof reliability.",
    iconName: "Cloud",
    features: [
      "Docker containerization & multi-stage layer caching",
      "GitHub Actions automated CI/CD test gates",
      "AWS cloud services (ECS Fargate, Lambda, S3, CloudFront)",
      "Vercel Edge Network configuration & serverless functions",
    ],
    technologies: ["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions", "Terraform"],
    accentGradient: "from-sky-500 to-cyan-600",
  },
  {
    id: "service-6",
    title: "UI/UX & Design Systems",
    subtitle: "Tokenized Components & Accessibility",
    description:
      "Creating unified design languages that bridge design and engineering. Strict WCAG AAA compliance, cross-brand tokenization, and comprehensive Storybook component documentation.",
    iconName: "Palette",
    features: [
      "Comprehensive design token systems (Figma to Code)",
      "Strict WAI-ARIA accessible component primitives",
      "Seamless dark/light theme switching engines",
      "Custom micro-interactions & feedback states",
    ],
    technologies: ["Radix UI", "Tailwind CSS", "Figma", "Storybook", "WAI-ARIA"],
    accentGradient: "from-pink-500 to-rose-600",
  },
];
