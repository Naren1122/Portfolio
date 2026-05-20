import { Briefcase } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="space-y-8 scroll-mt-20">
      <div id="about-heading" className="flex items-center gap-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          About Me
        </h2>
        <div id="about-heading-line" className="h-px flex-1 bg-slate-100" />
      </div>

      <div id="about-grid" className="grid md:grid-cols-2 gap-8 items-start">
        <div
          id="about-text-content"
          className="space-y-4 text-slate-600 leading-relaxed text-base font-medium"
        >
          <p>
            I am a self-driven developer focused on building scalable web
            applications and embedding them with intelligence. Specializing in
            Next.js, the MERN stack, and AI integrations, I love turning complex
            logic and data models into smooth, powerful user experiences.
          </p>
          <p>
            I believe that technology is most powerful when it's
            invisible—smooth, intuitive, and perfectly aligned with users'
            needs.
          </p>
        </div>

        <div
          id="about-stats-card"
          className="p-6 bg-slate-50/60 rounded-2xl border border-slate-100 space-y-4"
        >
          <h3
            id="about-stats-title"
            className="font-bold text-slate-900 flex items-center gap-2 text-md"
          >
            <Briefcase size={18} className="text-amber-600" />
            Learning & Projects
          </h3>
          <ul id="about-stats-list" className="grid grid-cols-2 gap-4 pt-2">
            <li
              id="stat-projects"
              className="p-4 bg-white rounded-xl border border-slate-100/50 shadow-xs"
            >
              <span className="block text-xl font-bold text-slate-900">5+</span>
              <span className="text-xs text-slate-500 font-medium font-sans">
                Personal Projects
              </span>
            </li>
            <li
              id="stat-techs"
              className="p-4 bg-white rounded-xl border border-slate-100/50 shadow-xs"
            >
              <span className="block text-xl font-bold text-slate-900">
                12+
              </span>
              <span className="text-xs text-slate-500 font-medium font-sans">
                Techs Explored
              </span>
            </li>

            <li
              id="stat-techs"
              className="p-4 bg-white rounded-xl border border-slate-100/50 shadow-xs"
            >
              <span className="block text-xl font-bold text-slate-900">
                12+
              </span>
              <span className="text-xs text-slate-500 font-medium font-sans">
                Techs Explored
              </span>
            </li>

            <li
              id="stat-techs"
              className="p-4 bg-white rounded-xl border border-slate-100/50 shadow-xs"
            >
              <span className="block text-xl font-bold text-slate-900">2</span>
              <span className="text-xs text-slate-500 font-medium font-sans">
                Certification Obtained
              </span>
            </li>

            <li
              id="stat-focus"
              className="p-4 bg-white rounded-xl border border-slate-100/50 shadow-xs"
            >
              <span className="block text-xl font-bold text-slate-900">
                100%
              </span>
              <span className="text-xs text-slate-500 font-medium font-sans">
                Learning Drive
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
