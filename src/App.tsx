import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Modal from "./components/Modal";
import { NAME } from "./data";

export default function App() {
  const [activeModal, setActiveModal] = useState<"skills" | "projects" | null>(null);

  const handleOpenModal = (type: "skills" | "projects") => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div id="top" className="min-h-screen bg-slate-50/50 flex flex-col selection:bg-amber-500/20 text-slate-800">
      {/* Navigation header */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-grow max-w-5xl mx-auto w-full px-6 pt-24 pb-16 md:pb-24 space-y-24 md:space-y-32">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* 
          Skills and Projects flow on desktop.
          These of course are hidden on mobile main flow (they are hidden via md:block inside their files)
        */}
        <SkillsSection />
        <ProjectsSection />

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Brand Footer */}
      <footer id="main-footer" className="max-w-5xl mx-auto w-full px-6 pb-12 text-center text-slate-400 text-xs font-semibold">
        <p>
          © {new Date().getFullYear()} {NAME}. All rights reserved. Built with precision and care.
        </p>
      </footer>

      {/* Dynamic Modal Viewers (Skills / Projects) for Mobile sizes */}
      <Modal
        isOpen={activeModal === "skills"}
        onClose={handleCloseModal}
        title="Technical Expertise"
      >
        <SkillsSection isMobileOnly={true} />
      </Modal>

      <Modal
        isOpen={activeModal === "projects"}
        onClose={handleCloseModal}
        title="Featured Projects"
      >
        <ProjectsSection isMobileOnly={true} />
      </Modal>
    </div>
  );
}
