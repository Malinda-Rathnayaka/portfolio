import { Code2, Palette, Server, Database, Cpu, Layers } from "lucide-react";

export const NAV = ["About", "Skills", "Projects", "Experience", "Contact"] as const;

export const SKILLS = [
  { name: "Frontend Engineering", icon: Code2, items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { name: "Interface Design", icon: Palette, items: ["Figma", "Motion Design", "Design Systems"] },
  { name: "Backend Systems", icon: Server, items: ["Node.js", "Postgres", "GraphQL", "Edge Functions"] },
  { name: "Data & Infra", icon: Database, items: ["Redis", "AWS", "Docker", "CI/CD"] },
  { name: "3D & Motion", icon: Cpu, items: ["Three.js", "WebGL", "Framer Motion", "GSAP"] },
  { name: "Architecture", icon: Layers, items: ["System Design", "Microservices", "Performance"] },
];

export const PROJECTS = [
  {
    title: "Aphelion",
    tag: "Flight-tracking dashboard",
    desc: "Real-time orbital telemetry visualized for satellite operators — sub-second updates across 400+ tracked objects.",
    stack: ["Next.js", "WebSockets", "D3"],
    color: "#8B5CF6",
  },
  {
    title: "Lumen",
    tag: "Generative design tool",
    desc: "An AI-assisted canvas for exploring gradient and lighting systems, built for product design teams.",
    stack: ["React", "WebGL", "Node"],
    color: "#22D3EE",
  },
  {
    title: "Perigee",
    tag: "Fintech analytics suite",
    desc: "Portfolio intelligence platform processing 2M+ daily events with a sub-100ms query layer.",
    stack: ["TypeScript", "Postgres", "Redis"],
    color: "#FBBF24",
  },
  {
    title: "Corvus",
    tag: "Developer platform",
    desc: "A CLI-first deployment pipeline with live build visualizations and rollback-on-anomaly.",
    stack: ["Go", "Next.js", "Docker"],
    color: "#F472B6",
  },
];

export const EXPERIENCE = [
  { year: "2024 — Now", role: "Staff Frontend Engineer", org: "Halcyon Systems", desc: "Leading the design-engineering guild; shipped the motion framework used across 12 product teams." },
  { year: "2021 — 2024", role: "Senior Product Engineer", org: "Nimbus Labs", desc: "Built the core dashboard architecture serving 80k daily active users with 99.98% uptime." },
  { year: "2019 — 2021", role: "Frontend Engineer", org: "Driftwood", desc: "Owned the design system from zero to adoption across the entire consumer app surface." },
  { year: "2017 — 2019", role: "Junior Developer", org: "Kepler Studio", desc: "Started as an intern, shipped marketing sites and internal tools for early-stage startups." },
];
