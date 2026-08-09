"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";
import ProjectCard, { Project } from "./ProjectCard";

// Safe Demo Placeholder SVG Data URIs (Prevents any external network or image load errors)
const DEMO_IMAGES = {
  estate:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230f172a'/><path d='M250 320 L400 180 L550 320 Z' fill='none' stroke='%2338bdf8' stroke-width='4'/><rect x='340' y='250' width='120' height='70' fill='none' stroke='%2338bdf8' stroke-width='3'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'>MERN Estate Preview</text></svg>",
  tourvana:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230f172a'/><circle cx='400' cy='220' r='80' fill='none' stroke='%2322d3ee' stroke-width='4'/><path d='M320 220 Q400 140 480 220' fill='none' stroke='%2322d3ee' stroke-width='3'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'>Tourvana Travel Preview</text></svg>",
  vehicle:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230f172a'/><rect x='280' y='180' width='240' height='100' rx='15' fill='none' stroke='%23818cf8' stroke-width='4'/><circle cx='340' cy='280' r='20' fill='%23818cf8'/><circle cx='460' cy='280' r='20' fill='%23818cf8'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'>Vehicle Diagnostic Preview</text></svg>",
  student:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230f172a'/><path d='M250 200 L400 130 L550 200 L400 270 Z' fill='none' stroke='%2334d399' stroke-width='4'/><rect x='320' y='240' width='160' height='80' fill='none' stroke='%2334d399' stroke-width='3'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'>Student System Preview</text></svg>",
  rental:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230f172a'/><rect x='330' y='140' width='140' height='220' rx='20' fill='none' stroke='%23f472b6' stroke-width='4'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'>Rental Mobile App Preview</text></svg>",
};

const PROJECTS: Project[] = [
  {
    id: "mern-estate",
    number: "01",
    title: "MERN Estate",
    subtitle: "Real Estate Marketplace",
    description:
      "A full-stack real estate platform where users can browse, create, and manage property listings with real-time filters.",
    image: DEMO_IMAGES.estate,
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase"],
    caseStudy: {
      problem:
        "Finding and managing property listings can be difficult when information is scattered across different platforms.",
      solution:
        "I built a full-stack real estate platform allowing users to browse, create and manage property listings in real time with high-performance search filters.",
      roles: ["Frontend", "Backend", "Database", "Authentication", "State Management"],
      architecture: ["React", "↓", "REST API", "↓", "Express", "↓", "MongoDB"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase"],
      challenges:
        "Implementing secure image uploads, token-based authentication, and maintaining persistent application state across page reloads.",
      learned:
        "Full-stack application architecture, REST API design principles, database management, and cloud image bucket integration.",
    },
  },
  {
    id: "tourvana",
    number: "02",
    title: "Tourvana",
    subtitle: "Travel / Tourism Web Application",
    description:
      "An intuitive web application for exploring destinations, travel itineraries, and weather forecasts with REST API integrations.",
    image: DEMO_IMAGES.tourvana,
    tags: ["React", "JavaScript", "API", "CSS3"],
    caseStudy: {
      problem:
        "Travelers often struggle to find clear, centralized travel information and destination weather details before planning a trip.",
      solution:
        "Engineered an interactive travel platform that fetches real-time country details, satellite locations, and weather forecasts through third-party APIs.",
      roles: ["Frontend Development", "API Integration", "UI/UX Design"],
      architecture: ["React UI", "↓", "Fetch API", "↓", "Public Travel & Weather APIs"],
      technologies: ["React", "JavaScript", "REST APIs", "CSS3", "HTML5"],
      challenges:
        "Managing multiple asynchronous API requests and handling fallback UI states when third-party services respond slowly.",
      learned:
        "Asynchronous JavaScript handling, state management with hooks, and responsive UI layout patterns.",
    },
  },
  {
    id: "vehicle-fault-assistant",
    number: "03",
    title: "Vehicle Fault Assistant",
    subtitle: "AI Diagnostic Chatbot",
    description:
      "An AI-powered diagnostic chatbot that interprets vehicle symptoms in plain text and generates actionable troubleshooting steps using Gemini API.",
    image: DEMO_IMAGES.vehicle,
    tags: ["JavaScript", "Gemini API", "HTML5", "Bootstrap"],
    caseStudy: {
      problem:
        "Car owners often face unexpected vehicle warnings or mechanical sounds and don't know the potential cause or urgency.",
      solution:
        "Built an interactive diagnostic assistant powered by Google's Gemini API that interprets plain language fault descriptions and outputs actionable troubleshooting guidance.",
      roles: ["Frontend Developer", "AI Prompt Engineer", "API Integrator"],
      architecture: ["User Prompt", "↓", "Client API Layer", "↓", "Google Gemini API"],
      technologies: ["JavaScript", "Gemini API", "HTML5", "CSS3", "Bootstrap 5"],
      challenges:
        "Structuring system prompts effectively to ensure AI diagnostic output remains accurate, structured, and easy to read.",
      learned:
        "LLM API integration, prompt engineering techniques, and streaming/JSON response parsing in modern web applications.",
    },
  },
  {
    id: "student-management-system",
    number: "04",
    title: "Student Management System",
    subtitle: "Java Desktop / Web System",
    description:
      "A robust management system built with Java and MySQL following MVC architecture for organizing student records and academic data.",
    image: DEMO_IMAGES.student,
    tags: ["Java", "MySQL", "JDBC", "MVC"],
    caseStudy: {
      problem:
        "Educational institutions require centralized systems to organize student records and academic administrative tasks securely.",
      solution:
        "Developed a structured management system implementing strict separation of concerns through Model-View-Controller design architecture.",
      roles: ["Database Architect", "Backend Developer", "System Designer"],
      architecture: ["Java View (UI)", "↓", "Controller Logic", "↓", "MySQL Database"],
      technologies: ["Java", "MySQL", "JDBC", "MVC Architecture"],
      challenges:
        "Ensuring relational data integrity across multiple foreign keys while maintaining clean database queries.",
      learned:
        "Object-Oriented Programming (OOP) principles, relational database design, and MVC framework architectural patterns.",
    },
  },
  {
    id: "vehicle-rental-app",
    number: "05",
    title: "Vehicle Rental Mobile App",
    subtitle: "Android Mobile Application",
    description:
      "Native Android mobile application for searching available vehicles, scheduling reservation dates, and managing booking history.",
    image: DEMO_IMAGES.rental,
    tags: ["Kotlin", "Android SDK", "Firebase"],
    caseStudy: {
      problem:
        "Traditional vehicle rental workflows rely on cumbersome web interfaces or physical counters, causing slow booking experiences.",
      solution:
        "Created a mobile-first native Android app providing fast vehicle browsing, date scheduling, and reservation tracking.",
      roles: ["Mobile App Developer", "UI Designer", "Backend Integrator"],
      architecture: ["Kotlin Android UI", "↓", "Firebase Realtime DB", "↓", "Authentication"],
      technologies: ["Kotlin", "Android SDK", "Firebase", "XML Layouts"],
      challenges:
        "Designing a responsive layout across various Android screen sizes while managing real-time booking state changes.",
      learned:
        "Native Android lifecycle management, Kotlin event handling, and mobile cloud integration.",
    },
  },
];

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full py-28 bg-[#020617] text-white overflow-hidden z-10"
    >
      {/* Background Interactive Particle Network */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleNetwork />
        <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-blue-950/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-950/20 rounded-full blur-[150px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest"
        >
          <span className="w-8 h-[1px] bg-cyan-400/60" />
          
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white uppercase"
        >
          Selected Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-slate-300/80 text-base sm:text-lg leading-relaxed font-normal"
        >
          A collection of full-stack web, mobile, and AI applications built with modern software architectures.
        </motion.p>

        {/* 3-Column Visual Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenCaseStudy={(selected) => setSelectedCaseStudy(selected)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-10 text-white shadow-2xl z-10 custom-scrollbar"
            >
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close Case Study"
              >
                ✕
              </button>

              <div className="border-b border-slate-800 pb-6 mb-6">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold block">
                  CASE STUDY // PROJECT {selectedCaseStudy.number}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold mt-1 text-white">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-slate-400 text-sm font-mono mt-1">
                  {selectedCaseStudy.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
                    [ THE PROBLEM ]
                  </h4>
                  <p className="text-slate-300 text-base leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    {selectedCaseStudy.caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
                    [ THE SOLUTION ]
                  </h4>
                  <p className="text-slate-300 text-base leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    {selectedCaseStudy.caseStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
                    [ MY ROLE ]
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.caseStudy.roles.map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
                    [ ARCHITECTURE ]
                  </h4>
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center gap-2 font-mono text-sm text-cyan-300">
                    {selectedCaseStudy.caseStudy.architecture.map((step, index) => (
                      <span
                        key={index}
                        className={
                          step === "↓"
                            ? "text-slate-500 font-bold text-base"
                            : "px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 w-full sm:w-auto text-center"
                        }
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
                    [ TECHNOLOGIES ]
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.caseStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
                      CHALLENGES
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedCaseStudy.caseStudy.challenges}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
                      WHAT I LEARNED
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedCaseStudy.caseStudy.learned}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}