import React from "react";
import { Sparkles, CheckCircle } from "lucide-react";
import TechStackMarquee from "./TechStackMarquee";

const AboutMe = () => {
  return (
    <section id="about" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative bg-[#0b0f19]/80">
      <div className="absolute top-24 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Me & Expertise</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl text-base sm:text-lg">
            Engineering robust digital infrastructure with a focus on scale, cryptographic integrity, and maintainability.
          </p>
        </div>

        {/* Top Split: Executive Bio + Philosophy Cards */}
        <div className="grid grid-cols-1 w-full gap-10 items-center mb-20">

          {/* Bio Narrative (Full Width) */}
          <div className="w-full space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              My journey in software engineering has evolved from building backend systems to shaping technical direction, architecture, and engineering strategy. With a strong foundation in <span className="text-teal-300 font-medium">Fintech and Banking Systems</span>, I have contributed to critical financial platforms, including the <span className="text-white font-semibold">Dashen Super App</span>, which surpassed <span className="text-cyan-400 font-semibold">ETB 500+ Billion</span> in transaction volume—a milestone recognized through a Certificate of Contribution.
            </p>

            <p>
              At <span className="text-white font-semibold">EagleLion System Technology</span>, I lead backend engineering initiatives, guide architectural decisions, mentor developers, and bridge business needs with technical execution. Across, I focus on building resilient systems, improving engineering practices, and turning complex challenges into scalable solutions that deliver lasting business value.
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-slate-850 border border-slate-700/80 text-teal-300 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>Distributed Systems</span>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-slate-850 border border-slate-700/80 text-cyan-300 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>ETB 500B+ Fintech Scale</span>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-slate-850 border border-slate-700/80 text-indigo-300 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>CI/CD & DevOps Automation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Horizontal Tech Stack Marquee */}
        <TechStackMarquee />

      </div>
    </section>
  );
};

export default AboutMe;

