"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Orbit, ArrowRight } from "lucide-react";
import { NAV } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("About");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.toLowerCase()));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = NAV.find((n) => n.toLowerCase() === entry.target.id);
            if (match) setActive(match);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-void/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <button onClick={() => go("hero")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center group-hover:shadow-[0_0_16px_rgba(139,92,246,0.7)] transition-shadow">
            <Orbit className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-semibold tracking-wide text-sm md:text-base">AVERY&nbsp;NOVA</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
              className={`text-xs tracking-[0.15em] uppercase font-mono transition-colors relative py-2 ${
                active === item ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {item}
              {active === item && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-0 left-0 right-0 h-px bg-cyan-400" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => go("Contact")}
          className="hidden md:inline-flex items-center gap-2 text-xs font-mono tracking-wide uppercase px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all"
        >
          Say hello <ArrowRight className="w-3 h-3" />
        </button>
      </nav>
    </motion.header>
  );
}
