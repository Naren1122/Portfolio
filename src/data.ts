import { Project, Certification } from "./types";

export const NAME = "Narenn Maharjan";
export const TAGLINE = "Building high-performance, modern web experiences with a focus on clean architecture and user-centric design.";

export const PROJECTS: Project[] = [
  {
    title: "Bazaar",
    description: "Bazar is a full-featured e-commerce platform specifically designed for the Nepali market.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/Naren1122/Shopping",
  },
  {
    title: "AI Job-Preparation Platform",
    description: "A production-ready Gen AI application designed to help users bridge the gap between their current skills and their dream jobs.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    link: "https://github.com/Naren1122/Job_preparation_AI",
  },
  {
    title: "Next-Auth",
    description: "NextAuth is a comprehensive authentication solution designed for modern web applications. It provides a secure, scalable, and user-friendly authentication system with full validation, email notifications, and protected routes.",
    tech: ["TypeScript", "Next.js"],
    link: "https://github.com/Naren1122/Next-js-auth-sys",
  },
];

export const SKILLS: string[] = [
  "Web Architecture",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "UI/UX Design",
  "RESTful APIs",
  "Node.js",
  "Express.js",
  "C",
  "C++",
  "Python",
  "Agile Methodologies",
  "SQL & NoSQL Databases",
  "Git & Version Control",
  "Vercel & Netlify (Deployment)",
];

export const CERTIFICATIONS: Certification[] = [
  { name: "MERN Stack", issuer: "Broadway infoSys (24 May 2025 - 4 Aug 2025)" },
  { name: "Next.js Full Stack Development", issuer: "Udemy" },
];
