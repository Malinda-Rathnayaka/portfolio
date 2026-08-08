"use client";

import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";

const PROJECTS = [
  {
    id: "aphelion",
    category: "FLIGHT-TRACKING DASHBOARD",
    categoryColor: "text-purple-400",
    title: "Aphelion",
    description:
      "Real-time orbital telemetry visualized for satellite operators — sub-second updates across 400+ tracked objects.",
    tags: ["Next.js", "WebSockets", "D3"],
    link: "#",
  },
  {
    id: "lumen",
    category: "GENERATIVE DESIGN TOOL",
    categoryColor: "text-cyan-400",
    title: "Lumen",
    description:
      "An AI-assisted canvas for exploring gradient and lighting systems, built for product design teams.",
    tags: ["React", "WebGL", "Node"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-28 bg-[#020617] text-white overflow-hidden z-10"
    >
      {/* Background Layer with Interactive Cursor Particle Network */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleNetwork />

        {/* Dark Space Ambient Glows */}
        <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-900/15 rounded-full blur-[140px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest"
        >
          <span className="w-8 h-[1px] bg-cyan-400/60" />
          TRANSMISSION 03
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white"
        >
          Flight log
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-slate-300/80 text-base sm:text-lg leading-relaxed font-normal"
        >
          A handful of missions I&apos;ve led end to end — from architecture through to launch.
        </motion.p>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              whileHover={{ y: -6, borderColor: "rgba(56, 189, 248, 0.4)" }}
              className="group relative p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Row: Category Badge & External Link */}
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`font-mono text-xs uppercase tracking-widest ${project.categoryColor}`}
                  >
                    {project.category}
                  </span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="w-10 h-10 rounded-full border border-slate-700/80 group-hover:border-slate-500 bg-slate-800/40 hover:bg-slate-800 flex items-center justify-center transition-all duration-300"
                  >
                    {/* Native Inline SVG (Prevents dependency crash) */}
                    <svg
                      className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="text-3xl font-bold mt-4 text-white tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-300/80 text-sm sm:text-base leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 font-mono text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}