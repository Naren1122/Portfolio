import { Mail, Phone, Linkedin, MessageCircle, MessageSquare } from "lucide-react";
import { ReactNode } from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-24 border-t border-slate-100 scroll-mt-20">
      <div id="contact-banner-card" className="bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 text-center space-y-8 overflow-hidden relative shadow-lg">
        {/* Glowing visual background blobs */}
        <div id="glow-blob-top" className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div id="glow-blob-bottom" className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div id="contact-content-inner" className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 id="contact-inner-headline" className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's work together
          </h2>
          <p id="contact-inner-body" className="text-slate-400 md:text-lg font-medium">
            Have a project in mind or just want to chat? My inbox is always
            open. I'll do my best to get back to you!
          </p>

          <div id="contact-primary-actions" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              id="contact-email-btn"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=naren.14151415@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Mail size={20} className="text-amber-600" />
              Email Me
            </a>
            <a
              id="contact-call-btn"
              href="tel:+9779867064969"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all flex items-center justify-center gap-3 shadow-md border border-slate-700/50 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Phone size={20} className="text-amber-500" />
              Book a Call
            </a>
          </div>
        </div>

        {/* Dynamic connection links grid */}
        <div id="contact-links-grid" className="relative z-10 pt-12 flex flex-wrap justify-center gap-6 md:gap-12 border-t border-slate-800/80">
          <ContactLink
            id="cont-link-li"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/narenn-maharjan-010319359/"
          />
          <ContactLink
            id="cont-link-wa"
            icon={<MessageCircle size={20} />}
            label="WhatsApp"
            href="https://wa.me/+9779860468088"
          />
          <ContactLink
            id="cont-link-vib"
            icon={<MessageSquare size={20} />}
            label="Viber"
            href="viber://chat?number=+9779867064969"
          />
          <ContactLink
            id="cont-link-ph"
            icon={<Phone size={20} />}
            label="Phone"
            href="tel:+9779867064969"
          />
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  id,
  icon,
  label,
  href,
}: {
  id: string;
  icon: ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-slate-400 hover:text-white transition-all group cursor-pointer"
    >
      <span id={`${id}-icon-span`} className="group-hover:scale-110 group-hover:text-amber-500 transition-transform">
        {icon}
      </span>
      <span id={`${id}-label-span`} className="text-xs font-bold uppercase tracking-widest">
        {label}
      </span>
    </a>
  );
}
