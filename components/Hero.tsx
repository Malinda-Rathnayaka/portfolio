"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ParticleNetwork from "./ParticleNetwork";

const TECH_STACK = [
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Kotlin",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-[#020617] text-white overflow-hidden flex flex-col justify-center py-24 px-6 sm:px-10 z-10"
    >
      {/* Interactive Cursor Particle Network Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleNetwork />

        {/* Ambient Dark Space Blue Glows */}
        <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-sky-950/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-950/20 rounded-full blur-[150px]" />
      </div>

      {/* Hero Foreground Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Transmission Badge / Status */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] mb-4"
            >
              <span className="w-6 h-[1px] bg-cyan-400/60" />
              TRANSMISSION 01 // IT UNDERGRADUATE
            </motion.div>

            {/* Main Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-white leading-none"
            >
              MALINDA <br className="hidden sm:inline" />
              <span className="text-cyan-400">RATHNAYAKA</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-slate-300 font-semibold"
            >
              Full-Stack Developer &amp; IT Undergraduate
            </motion.p>

            {/* Subtitle / Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-xl text-slate-300/90 text-sm sm:text-base leading-relaxed font-normal"
            >
              Building modern web applications, REST APIs and practical software solutions
              with Java, Spring Boot, React and the MERN stack.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_30px_rgba(56,189,248,0.55)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                [ VIEW MY WORK ]
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400/60 text-slate-200 hover:text-white font-mono text-xs uppercase tracking-widest font-medium backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                [ DOWNLOAD RESUME ]
              </a>
            </motion.div>

            {/* Bottom Tech Stack List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5"
            >
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/90 text-slate-300 font-mono text-xs hover:border-cyan-500/40 hover:text-cyan-300 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Clean Original Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Outer Frame */}
            <div className="relative p-3 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-2xl">
              
              {/* Photo Container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950">
                <Image
                  src="/profile.jpg"
                  alt="Malinda Rathnayaka"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}