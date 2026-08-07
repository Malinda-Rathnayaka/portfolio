"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

type Project = {
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  color: string;
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 md:p-8 overflow-hidden h-full"
      >
        <motion.div
          className="absolute -inset-px rounded-2xl opacity-0 pointer-events-none"
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: `radial-gradient(500px circle at 50% 0%, ${project.color}22, transparent 60%)` }}
        />
        <div className="relative flex items-start justify-between">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: project.color }}>
              {project.tag}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">{project.title}</h3>
          </div>
          <motion.div
            animate={{ rotate: hover ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0"
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </motion.div>
        </div>
        <p className="relative mt-4 text-slate-400 leading-relaxed">{project.desc}</p>
        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded-full px-3 py-1">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </Reveal>
  );
}
