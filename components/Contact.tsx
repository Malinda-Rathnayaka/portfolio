"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Send, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import NebulaField from "./NebulaField";

const SOCIALS = [
  { icon: Github, label: "Github" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <NebulaField />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-cyan-300/90 border border-cyan-400/25 rounded-full px-4 py-1.5 bg-cyan-400/5">
            Transmission 05
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white tracking-tight">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              worth launching.
            </span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg max-w-xl mx-auto">
            Open to staff-level roles, contract missions, and interesting
            problems. Send a signal and I&apos;ll respond within a day.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <form
            onSubmit={onSubmit}
            className="max-w-xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 text-left"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <Sparkles className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
                  <p className="text-white font-medium">Signal received. Talk soon.</p>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0 }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)] transition-all"
                    />
                    <input
                      required
                      type="email"
                      placeholder="you@domain.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)] transition-all"
                    />
                  </div>
                  <textarea
                    required
                    rows={4}
                    placeholder="What are we building?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)] transition-all resize-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 28px rgba(139,92,246,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-medium px-6 py-3.5 rounded-xl text-sm"
                  >
                    Send transmission <Send className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 flex items-center justify-center gap-4">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href="#"
                onClick={(e) => e.preventDefault()}
                whileHover={{ y: -4, boxShadow: "0 0 16px rgba(139,92,246,0.4)" }}
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-400/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
