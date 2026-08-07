"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Sparkles, ArrowDown } from "lucide-react";
import Starfield from "./Starfield";
import NebulaField from "./NebulaField";
import FloatingPlanet from "./FloatingPlanet";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Starfield density={160} />
        <NebulaField />
      </motion.div>

      <FloatingPlanet scrollYProgress={scrollYProgress} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-cyan-300/90 border border-cyan-400/25 rounded-full px-4 py-1.5 bg-cyan-400/5">
            <Sparkles className="w-3 h-3" /> Available for new missions
          </span>
        </motion.div>

        <h1 className="mt-8 text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block overflow-hidden"
          >
            Engineering
          </motion.span>
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block overflow-hidden"
          >
            beyond the{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              atmosphere.
            </span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 max-w-xl text-slate-400 text-base md:text-lg leading-relaxed"
        >
          I&apos;m Avery — a product engineer who designs and builds interfaces
          with the precision of mission-critical systems and the polish of
          a launch broadcast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(139,92,246,0.55)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => go("projects")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-medium px-6 py-3.5 rounded-full text-sm shadow-[0_0_20px_rgba(139,92,246,0.35)]"
          >
            <Rocket className="w-4 h-4" /> View my work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => go("contact")}
            className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-6 py-3.5 rounded-full text-sm hover:bg-white/5 transition-colors"
          >
            Get in touch
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </motion.div>
    </section>
  );
}
