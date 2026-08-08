"use client";

import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";

const EXPERIENCES = [
  {
    period: "2024 — NOW",
    role: "Staff Frontend Engineer",
    company: "Halcyon Systems",
    description:
      "Leading the design-engineering guild; shipped the motion framework used across 12 product teams.",
  },
  {
    period: "2021 — 2024",
    role: "Senior UI Architect",
    company: "Orbital Dynamics",
    description:
      "Engineered high-frequency data visualization tools for mission-critical operations and real-time telemetry platforms.",
  },
  {
    period: "2019 — 2021",
    role: "Frontend Engineer",
    company: "Apex Tech",
    description:
      "Architected scalable design systems and high-performance Web applications for international enterprise clients.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-28 bg-[#020617] text-white overflow-hidden z-10"
    >
      {/* Background Layer with Interactive Cursor Particle Network */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleNetwork />

        {/* Ambient Deep Blue Radial Glows */}
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-sky-900/15 rounded-full blur-[140px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest"
        >
          <span className="w-8 h-[1px] bg-cyan-400/60" />
          TRANSMISSION 04
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white"
        >
          Mission history
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-slate-300/80 text-base sm:text-lg leading-relaxed font-normal"
        >
          The trajectory that got me here.
        </motion.p>

        {/* Timeline Container */}
        <div className="mt-16 relative pl-6 sm:pl-8 max-w-3xl">
          
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500/60 to-transparent pointer-events-none" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Orbital Node Ring Marker */}
                <div className="absolute -left-[18px] top-1.5 w-[24px] h-[24px] rounded-full border-2 border-cyan-400 bg-[#020617] shadow-[0_0_12px_rgba(34,211,238,0.6)] flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                </div>

                {/* Period Badge */}
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block font-medium">
                  {exp.period}
                </span>

                {/* Role Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 text-white tracking-tight">
                  {exp.role}
                </h3>

                {/* Company Name */}
                <h4 className="text-purple-300/90 text-sm sm:text-base font-medium mt-1">
                  {exp.company}
                </h4>

                {/* Description */}
                <p className="mt-3 text-slate-300/80 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}