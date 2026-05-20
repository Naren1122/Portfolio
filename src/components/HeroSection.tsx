import { motion } from "motion/react";
import { Linkedin, Github, ExternalLink } from "lucide-react";
import { TAGLINE } from "../data";

export default function HeroSection() {
  const handleScrollToProjects = () => {
    // If on mobile and Projects is hidden, we might trigger a modal, but here we can just scroll or show projects
    const mobileProjectsBtn = document.getElementById(
      "nav-item-modal-projects",
    );
    if (mobileProjectsBtn && window.innerWidth < 768) {
      mobileProjectsBtn.click();
    } else {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="hero-section"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-16 md:pt-24"
    >
      {/* Intro text */}
      <motion.div
        id="hero-intro"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <div
          id="hero-status-pill"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider"
        >
          <span
            id="hero-ping-container"
            className="relative flex h-20px w-20px"
          >
            <span
              id="hero-ping-animation"
              className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-amber-500 opacity-75"
            ></span>
            <span
              id="hero-ping-dot"
              className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-600"
            ></span>
          </span>
          Available for Hire & Projects
        </div>

        <h1
          id="hero-headline"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
        >
          Hi! I'm{" "}
          <span
            id="hero-name-span"
            className="text-amber-600 underline decoration-slate-200 underline-offset-8"
          >
            Narenn Maharjan.
          </span>
        </h1>

        <p
          id="hero-tagline"
          className="text-lg text-slate-600 max-w-xl leading-relaxed mx-auto md:mx-0 font-medium"
        >
          {TAGLINE}
        </p>

        <div
          id="hero-actions"
          className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
        >
          <button
            id="hero-view-work-btn"
            onClick={handleScrollToProjects}
            className="bg-slate-900 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-slate-800 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer shadow-md"
          >
            View My Work
            <ExternalLink
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>

          <div id="hero-social-links" className="flex items-center gap-2">
            <a
              id="hero-li-link"
              href="https://www.linkedin.com/in/narenn-maharjan-010319359/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-50 border border-slate-100 text-slate-400 hover:text-amber-600 hover:bg-white hover:border-slate-200 rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              id="hero-gh-link"
              href="https://github.com/Naren1122"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-50 border border-slate-100 text-slate-400 hover:text-amber-600 hover:bg-white hover:border-slate-200 rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-sm"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Avatar Image container */}
      <motion.div
        id="hero-avatar"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative"
      >
        <div
          id="avatar-circle-wrapper"
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-100 flex items-center justify-center group relative"
        >
          {/* Fallback elegant gradient if image is missing */}
          <div
            id="avatar-fallback-bg"
            className="absolute inset-0 bg-gradient-to-br from-amber-100 to-slate-200 opacity-40"
          />
          <img
            id="avatar-image"
            src="IMG20260520084518.jpg"
            alt="Narenn Maharjan"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div
            id="avatar-overlay-border"
            className="absolute inset-0 border-2 border-amber-500/10 rounded-full pointer-events-none"
          />
        </div>
      </motion.div>
    </section>
  );
}
