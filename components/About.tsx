import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const STATS = [
  { value: "7+", label: "Years in orbit" },
  { value: "45", label: "Missions shipped" },
  { value: "12M", label: "Users reached" },
  { value: "99.9%", label: "Uptime standard" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader eyebrow="Transmission 01" title="About the pilot" />
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <Reveal className="md:col-span-3" delay={0.1}>
            <p className="text-slate-300 text-lg leading-relaxed">
              I build software the way mission control runs a launch —
              rehearsed, instrumented, and calm under pressure. Over the
              last seven years I&apos;ve led frontend architecture for fintech,
              aerospace-adjacent, and developer-tooling products, always
              chasing the same feeling: an interface so smooth the
              engineering underneath disappears.
            </p>
            <p className="mt-5 text-slate-400 leading-relaxed">
              Outside of shipping products, I write about motion design
              systems and mentor engineers moving into senior and staff
              roles. I believe the best interfaces feel inevitable —
              like they were always meant to exist.
            </p>
          </Reveal>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 hover:border-cyan-400/30 hover:bg-white/[0.05] transition-colors">
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-1 tracking-wide">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
