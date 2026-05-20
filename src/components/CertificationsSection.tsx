import { Award } from "lucide-react";
import { CERTIFICATIONS } from "../data";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="space-y-8 scroll-mt-20">
      <div id="certs-heading" className="flex items-center gap-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Certifications
        </h2>
        <div id="certs-heading-line" className="h-px flex-1 bg-slate-100" />
      </div>

      <div id="certs-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div
            id={`cert-item-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}
            key={cert.name}
            className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-md transition-all duration-200"
          >
            <div id={`cert-icon-container-${cert.name.toLowerCase().replace(/\s+/g, "-")}`} className="p-2.5 bg-amber-50 rounded-xl">
              <Award size={20} className="text-amber-600" />
            </div>
            <div>
              <h4 id={`cert-name-${cert.name.toLowerCase().replace(/\s+/g, "-")}`} className="font-bold text-slate-900 text-sm leading-snug">
                {cert.name}
              </h4>
              <p id={`cert-issuer-${cert.name.toLowerCase().replace(/\s+/g, "-")}`} className="text-xs text-slate-400 mt-1 font-semibold">
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
