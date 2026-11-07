import { Experience } from "@/types";

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    company: "Vanguard Labs",
    role: "Lead Creative Developer & Frontend Architect",
    period: "2023 — Present",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    description:
      "Leading technical direction for interactive web applications, WebGL/3D spatial computing interfaces, and design systems for Fortune 500 tech clients.",
    responsibilities: [
      "Architected enterprise frontends using Next.js App Router, React 19, and Tailwind CSS, reducing initial page load times by 46%.",
      "Directed the development of 3D interactive product showcases using Three.js / React Three Fiber, delivering 60 FPS performance on both desktop and mobile.",
      "Established company-wide engineering benchmarks for accessibility (WCAG 2.1 AAA) and Core Web Vitals.",
      "Mentored a team of 9 frontend and creative developers through design code reviews and architectural RFCs.",
    ],
    keyAchievements: [
      "Awarded 3x Awwwards Site of the Day and 2x FWA of the Day in 2024.",
      "Scaled client platforms to over 2.4M monthly unique visitors with zero downtime.",
      "Created an internal GLSL shader and Drei utility library reducing 3D prototyping time by 60%.",
    ],
    technologies: ["Next.js", "TypeScript", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS", "WebGPU"],
    badge: "Current Role",
  },
  {
    id: "exp-2",
    company: "Aetheria Interactive",
    role: "Senior Full Stack & Systems Engineer",
    period: "2021 — 2023",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    description:
      "Engineered real-time collaboration engines, high-throughput microservices, and distributed cloud applications for modern SaaS enterprises.",
    responsibilities: [
      "Built low-latency real-time state synchronization engines using Node.js, WebSockets, and Yjs CRDTs.",
      "Designed and implemented REST and GraphQL API services in Go and TypeScript handling 40,000 requests per second.",
      "Optimized complex PostgreSQL query execution plans and implemented Redis caching layers.",
      "Streamlined CI/CD deployment pipelines using GitHub Actions, Docker, and AWS ECS Fargate.",
    ],
    keyAchievements: [
      "Cut cloud infrastructure hosting costs by 34% through container right-sizing and edge caching.",
      "Spearheaded the migration of a legacy single-page application to Next.js with incremental static regeneration.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Go", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    id: "exp-3",
    company: "Nexus Creative Studio",
    role: "Frontend Engineer & UI/UX Specialist",
    period: "2019 — 2021",
    location: "Austin, TX",
    type: "Full-time",
    description:
      "Designed and built high-impact digital experiences, e-commerce storefronts, and marketing platforms for innovative consumer brands.",
    responsibilities: [
      "Crafted bespoke UI/UX animations and micro-interactions utilizing Framer Motion and GSAP.",
      "Developed headless commerce web applications integrated with Shopify and Stripe APIs.",
      "Collaborated closely with brand designers in Figma to translate complex design systems into production code.",
    ],
    keyAchievements: [
      "Increased checkout conversion rates by 27% through streamlined multi-step checkout UI.",
      "Contributed open-source UI animations with over 3,000 GitHub stars.",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
  },
  {
    id: "exp-4",
    company: "Synapse Digital",
    role: "Junior Web Developer",
    period: "2018 — 2019",
    location: "Seattle, WA",
    type: "Full-time",
    description:
      "Built responsive client websites, CMS integrations, and modern landing pages with strict semantic HTML, CSS, and modern JavaScript.",
    responsibilities: [
      "Developed custom themes and responsive layouts across cross-browser environments.",
      "Wrote modular, testable JavaScript and SCSS code adhering to BEM conventions.",
      "Conducted QA audits for cross-device compatibility and mobile responsiveness.",
    ],
    keyAchievements: [
      "Shipped 18 client websites on schedule with 100% client satisfaction ratings.",
    ],
    technologies: ["JavaScript", "HTML5", "SCSS", "REST APIs", "Git", "Webpack"],
  },
];
