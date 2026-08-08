"use client";

import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";

const STATS = [
  { value: "7+", label: "Years in orbit" },
  { value: "45", label: "Missions shipped" },
  { value: "12M", label: "Users reached" },
  { value: "99.9%", label: "Uptime standard" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-28 bg-[#020617] text-white overflow-hidden z-10"
    >
      {/* Interactive Cursor-Reactive Particle Background Layer */}
      <div className="absolute inset-0 z-0">
        <ParticleNetwork />

        {/* Ambient Dark Space Blue Radial Glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-sky-900/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Foreground Content */}
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
          TRANSMISSION 01
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white"
        >
          About the pilot
        </motion.h2>

        {/* Grid Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            <p>
              I build software the way mission control runs a launch — rehearsed, instrumented, and calm under pressure. Over the last seven years I&apos;ve led frontend architecture for fintech, aerospace-adjacent, and developer-tooling products, always chasing the same feeling: an interface so smooth the engineering underneath disappears.
            </p>
            <p>
              Outside of shipping products, I write about motion design systems and mentor engineers moving into senior and staff roles. I believe the best interfaces feel inevitable — like they were always meant to exist.
            </p>
          </motion.div>

          {/* Stat Cards Grid Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.5)" }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-blue-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col justify-between"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 font-mono mt-3 uppercase tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}