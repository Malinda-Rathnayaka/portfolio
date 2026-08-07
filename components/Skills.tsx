"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Starfield from "./Starfield";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Starfield density={60} />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="Transmission 02"
          title="Systems on board"
          subtitle="The toolkit I rely on to take an idea from sketch to production-grade software."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.name} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 overflow-hidden transition-colors hover:border-purple-400/40"
                >
                  <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-purple-500/0 group-hover:bg-purple-500/20 blur-2xl transition-all duration-500" />
                  <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-shadow">
                    <Icon className="w-5 h-5 text-cyan-300" />
                  </div>
                  <h3 className="relative text-white font-semibold text-lg">{s.name}</h3>
                  <div className="relative mt-3 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="text-xs text-slate-400 border border-white/10 rounded-full px-2.5 py-1">
                        {it}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
