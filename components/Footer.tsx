import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono tracking-wide">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" /> Based on Earth, working everywhere
        </span>
        <span>© {new Date().getFullYear()} Avery Nova — All systems nominal</span>
      </div>
    </footer>
  );
}
