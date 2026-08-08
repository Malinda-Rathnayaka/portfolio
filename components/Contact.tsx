"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate dispatch transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 bg-[#020617] text-white overflow-hidden z-10"
    >
      {/* Background Layer with Interactive Cursor Particle Network */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleNetwork />

        {/* Ambient Dark Space Blue Glows */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-900/15 rounded-full blur-[140px]" />
      </div>

      {/* Main Content */}
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
          TRANSMISSION 05
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white"
        >
          Establish connection
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-slate-300/80 text-base sm:text-lg leading-relaxed font-normal"
        >
          Have a project in mind or want to collaborate? Send a signal through the matrix below.
        </motion.p>

        {/* Layout Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Directives & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            {/* Status Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-medium">
                  Status: Available for opportunities
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300/80 leading-relaxed font-normal">
                Currently open for senior engineering roles, architecture consulting, and high-impact digital solutions.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-col gap-4">
              {/* Email Link */}
              <a
                href="mailto:avery@example.com"
                className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-xs text-slate-400 block uppercase tracking-wider">
                    Direct Channel
                  </span>
                  <span className="text-white font-medium text-base group-hover:text-cyan-300 transition-colors">
                    avery@example.com
                  </span>
                </div>
              </a>

              {/* Location Badge */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-xs text-slate-400 block uppercase tracking-wider">
                    Base Station
                  </span>
                  <span className="text-white font-medium text-base">
                    San Francisco, CA (Remote Ready)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphism Transmission Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col gap-6"
            >
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-wider text-slate-300">
                  Callsign / Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Commander Shepard"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-wider text-slate-300">
                  Return Signal / Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="shepard@normandy.space"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-wider text-slate-300">
                  Transmission Payload
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your vision, timeline, or scope..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono text-sm uppercase tracking-widest font-semibold shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : submitted ? (
                  <span className="text-emerald-200">✓ Signal Received</span>
                ) : (
                  <>
                    <span>Send Transmission</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}