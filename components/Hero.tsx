"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ParticleNetwork from "./ParticleNetwork";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#020617] text-white pt-24 lg:pt-0"
    >
      {/* Background Layer with Interactive Space Blue Particles */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <ParticleNetwork />

        {/* Top Glowing Cosmic Arc (Deep Blue & Sky Arc) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] sm:w-[750px] h-[180px] sm:h-[250px] bg-gradient-to-b from-blue-600 via-sky-400 to-transparent rounded-[100%] blur-[50px] opacity-75 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[90px] sm:h-[130px] bg-sky-100 rounded-[100%] blur-[25px] opacity-40 pointer-events-none" />

        {/* Deep Ambient Space Blue Glows */}
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-blue-900/30 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/3 w-[400px] h-[400px] bg-indigo-900/25 rounded-full blur-[150px] pointer-events-none" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full min-h-[100svh] flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Heading, Subtitle & Spinning Circular Badge */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center py-12 lg:py-20 z-10">
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Transforming Ideas
            </motion.span>
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block mt-2"
            >
              Into{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                Digital Reality
              </span>
            </motion.span>
          </h1>

          {/* Subtext Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-slate-300/80 text-base sm:text-lg leading-relaxed font-normal"
          >
            I&apos;m a full-stack engineer and digital architect specializing in
            building high-performance Web applications, interactive interfaces,
            and scalable digital solutions with aesthetic precision.
          </motion.p>

          {/* Circular Badge Button CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 sm:mt-12"
          >
            <button
              onClick={() => go("projects")}
              className="group relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-blue-500/30 hover:border-sky-400/80 transition-colors duration-300 bg-blue-950/20 backdrop-blur-md"
            >
              {/* Spinning Circular Text SVG */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full text-slate-300 group-hover:text-sky-300 transition-colors duration-300"
                viewBox="0 0 100 100"
              >
                <path
                  id="circlePath"
                  fill="none"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
                <text className="text-[9.5px] font-mono tracking-[0.24em] fill-current uppercase">
                  <textPath href="#circlePath" startOffset="0%">
                    • MY PROJECTS • MY PROJECTS
                  </textPath>
                </text>
              </motion.svg>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Portrait Image Frame */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-[40%] h-[50vh] sm:h-[65vh] lg:h-full lg:absolute bottom-0 right-0 flex items-end justify-center lg:justify-end pointer-events-none z-10"
        >
          <div className="relative w-full max-w-md lg:max-w-none h-full min-h-[420px] lg:min-h-[700px] flex items-end">
            <Image
              src="/my-portrait.png"
              alt="Portrait"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain object-bottom right-0 drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}