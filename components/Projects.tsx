import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="Transmission 03"
          title="Flight log"
          subtitle="A handful of missions I've led end to end — from architecture through to launch."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
