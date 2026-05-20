import { motion } from "motion/react";
import { SKILLS } from "../data";

interface SkillsSectionProps {
  isMobileOnly?: boolean;
}

export default function SkillsSection({ isMobileOnly = false }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className={`${isMobileOnly ? "block" : "hidden md:block scroll-mt-20"} space-y-8`}
    >
      <div id="skills-heading" className="flex items-center gap-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Technical Expertise
        </h2>
        <div id="skills-heading-line" className="h-px flex-1 bg-slate-100" />
      </div>

      <div id="skills-badges-list" className="flex flex-wrap gap-2.5">
        {SKILLS.map((skill, index) => (
          <motion.span
            id={`skill-badge-${index}`}
            key={skill}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="px-4 py-2 bg-white border border-slate-200/80 rounded-xl text-sm font-semibold text-slate-600 hover:border-amber-500 hover:text-amber-600 hover:scale-[1.02] cursor-default shadow-xs hover:shadow-md transition-all duration-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
