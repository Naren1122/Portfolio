import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAME } from "../data";

interface NavbarProps {
  onOpenModal: (type: "skills" | "projects") => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      // Small delay to let mobile menu close animation complete
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  };

  const menuItems = [
    { label: "About Me", type: "scroll", target: "about" },
    { label: "My Projects", type: "modal", modalType: "projects" as const },
    { label: "Skills & Stack", type: "modal", modalType: "skills" as const },
    { label: "Certification", type: "scroll", target: "certifications" },
    { label: "Contact Me", type: "scroll", target: "contact" },
  ];

  return (
    <nav id="navbar" className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div id="navbar-container" className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a id="nav-brand" href="#top" onClick={(e) => handleNavLinkClick(e, "top")} className="text-xl font-bold tracking-tight text-slate-900 hover:text-slate-700 transition-colors">
          {NAME}
        </a>

        {/* Desktop Navigation */}
        <div id="desktop-links" className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a id="nav-about-desktop" href="#about" onClick={(e) => handleNavLinkClick(e, "about")} className="hover:text-amber-600 transition-colors">
            About
          </a>
          <a id="nav-skills-desktop" href="#skills" onClick={(e) => handleNavLinkClick(e, "skills")} className="hover:text-amber-600 transition-colors">
            Skills
          </a>
          <a id="nav-projects-desktop" href="#projects" onClick={(e) => handleNavLinkClick(e, "projects")} className="hover:text-amber-600 transition-colors">
            Projects
          </a>
          <a id="nav-certifications-desktop" href="#certifications" onClick={(e) => handleNavLinkClick(e, "certifications")} className="hover:text-amber-600 transition-colors">
            Certifications
          </a>
          <a id="nav-contact-desktop" href="#contact" onClick={(e) => handleNavLinkClick(e, "contact")} className="hover:text-amber-600 transition-colors">
            Contact
          </a>
          <a
            id="nav-hire-me-desktop"
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, "contact")}
            className="bg-amber-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-amber-700 transition-colors flex items-center gap-1.5"
          >
            Hire Me
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Navigation Header Actions */}
        <div id="mobile-actions" className="flex md:hidden items-center gap-3">
          {/* Hire Me - ALWAYS On top for mobile screen */}
          <a
            id="nav-hire-me-mobile-top"
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, "contact")}
            className="bg-amber-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-amber-700 transition-colors flex items-center gap-1"
          >
            Hire Me
          </a>

          {/* Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 active:bg-slate-100 rounded-lg transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-dropdown-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-slate-100 bg-white overflow-hidden shadow-lg"
          >
            <div id="mobile-menu-items" className="px-6 py-4 flex flex-col space-y-4">
              {menuItems.map((item) => {
                if (item.type === "modal" && item.modalType) {
                  return (
                    <button
                      id={`nav-item-modal-${item.modalType}`}
                      key={item.label}
                      onClick={() => {
                        setIsOpen(false);
                        onOpenModal(item.modalType);
                      }}
                      className="text-left py-2 text-base font-medium text-slate-700 hover:text-amber-600 transition-colors cursor-pointer border-b border-slate-50 last:border-0"
                    >
                      {item.label}
                    </button>
                  );
                } else if (item.type === "scroll" && item.target) {
                  return (
                    <a
                      id={`nav-item-scroll-${item.target}`}
                      key={item.label}
                      href={`#${item.target}`}
                      onClick={(e) => handleNavLinkClick(e, item.target!)}
                      className="py-2 text-base font-medium text-slate-700 hover:text-amber-600 transition-colors block border-b border-slate-50 last:border-0"
                    >
                      {item.label}
                    </a>
                  );
                }
                return null;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
