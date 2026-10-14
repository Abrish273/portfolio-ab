import React from "react";
import { Check, ArrowRight } from "lucide-react";

const ServiceCard = ({ icon, title, description, deliverables = [], tech = [] }) => {
  return (
    <div className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-teal-500/40 relative overflow-hidden">
      {/* Subtle top-right ambient accent glow */}
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all pointer-events-none" />

      <div>
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-850 border border-slate-700/80 flex items-center justify-center text-teal-400 group-hover:text-cyan-300 group-hover:scale-110 group-hover:border-teal-500/50 shadow-lg shadow-black/40 transition-all duration-300 mb-5">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-teal-300 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {description}
        </p>

        {/* Deliverables */}
        {deliverables.length > 0 && (
          <div className="space-y-2 mb-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Tech Tags */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
            {tech.map((t, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/40"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Contact Link */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 group-hover:translate-x-1 transition-all"
        >
          <span>Discuss requirements</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

