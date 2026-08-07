"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section id="experience" className="relative py-28 md:py-36" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader eyebrow="Transmission 04" title="Mission history" subtitle="The trajectory that got me here." />
        <div className="relative pl-10 md:pl-14">
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-white/10" />
          <motion.div
            className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-cyan-400 via-purple-400 to-fuchsia-400"
            style={{ scaleY: pathLength }}
          />
          <div className="space-y-14">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role + e.year} delay={i * 0.05} y={24}>
                <div className="relative">
                  <span className="absolute -left-10 md:-left-14 top-1.5 w-4 h-4 rounded-full bg-void border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                  <span className="text-xs font-mono tracking-widest uppercase text-cyan-300/80">{e.year}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-1.5">{e.role}</h3>
                  <p className="text-sm text-purple-300/90 mt-0.5">{e.org}</p>
                  <p className="text-slate-400 mt-2.5 leading-relaxed max-w-2xl">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
