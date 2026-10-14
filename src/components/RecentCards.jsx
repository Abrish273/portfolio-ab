import React from "react";
import { ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

const Card = ({ 
  title, 
  category, 
  description, 
  downloads, 
  image, 
  tech = [], 
  impact,
  onOpenDetails 
}) => {
  return (
    <div 
      onClick={onOpenDetails}
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-teal-500/40 cursor-pointer transition-all duration-300 relative border border-slate-800"
    >
      {/* Top Banner / Image Area */}
      <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center p-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-slate-800 to-slate-850 flex items-center justify-center">
            <span className="text-xl font-bold font-display text-teal-400">{title}</span>
          </div>
        )}
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-teal-300">
          {category}
        </div>

        {/* Action arrow button */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-teal-500 group-hover:border-teal-400 transition-all duration-200">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
        </div>

        <div>
          {/* Key Metric / Impact Pill */}
          <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono">
            <Zap className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span className="truncate">{impact || downloads}</span>
          </div>

          {/* Tech Stack Chips */}
          {tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
              {tech.slice(0, 3).map((t, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-400 border border-slate-700/40"
                >
                  {t}
                </span>
              ))}
              {tech.length > 3 && (
                <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-500">
                  +{tech.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

