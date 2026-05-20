import { motion } from "motion/react";
import { Code2, ExternalLink } from "lucide-react";
import { PROJECTS } from "../data";

interface ProjectsSectionProps {
  isMobileOnly?: boolean;
}

export default function ProjectsSection({ isMobileOnly = false }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className={`${isMobileOnly ? "block" : "hidden md:block scroll-mt-20"} space-y-8`}
    >
      <div id="projects-heading-container" className="flex items-center gap-4 justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Featured Projects
        </h2>
        {!isMobileOnly && (
          <a
            id="projects-view-all-link"
            href="https://github.com/Naren1122"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-amber-600 hover:underline underline-offset-4 flex items-center gap-1"
          >
            View All Projects
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      <div
        id="projects-grid"
        className={`grid ${isMobileOnly ? "grid-cols-1 gap-6" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}`}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            id={`project-card-${index}`}
            key={project.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all flex flex-col h-full"
          >
            {/* Project tech accent icon container */}
            <div id={`project-icon-wrapper-${index}`} className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500/10 transition-colors">
              <Code2
                size={22}
                className="text-slate-400 group-hover:text-amber-600 transition-colors"
              />
            </div>

            <h3 id={`project-title-${index}`} className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-amber-600 transition-colors">
              {project.title}
            </h3>

            <p id={`project-desc-${index}`} className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow font-medium">
              {project.description}
            </p>

            {/* List of Technologies */}
            <div id={`project-techs-${index}`} className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Project Link */}
            <a
              id={`project-link-anchor-${index}`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors group/link mt-auto cursor-pointer"
            >
              Project link
              <ExternalLink
                size={14}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
