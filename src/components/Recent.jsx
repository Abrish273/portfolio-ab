import React, { useState } from "react";
import Card from "./RecentCards";
import { projectsData } from "../data/projects";
import { 
  FolderGit2, 
  X, 
  CheckCircle, 
  Cpu, 
  ShieldCheck, 
  TrendingUp
} from "lucide-react";

const categories = ["All", "Fintech & Banking", "Entertainment", "Ecommerce", "Enterprise"];

const Recent = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredData =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="min-h-[calc(100vh-5rem)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative bg-[#0b0f19]/80">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Production Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Systems & <span className="text-gradient-cyan">Recent Works</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl text-base sm:text-lg">
            High-impact financial platforms, distributed microservices, and enterprise backends built for scale and reliability.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-semibold shadow-lg shadow-teal-500/25 scale-105"
                  : "bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredData.map((item) => (
            <div key={item.id} className="h-full">
              <Card
                {...item}
                onOpenDetails={() => setSelectedProject(item)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Architecture Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#0f172a] border border-slate-700/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">
                {selectedProject.category} • {selectedProject.modal.organization}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-teal-300 mt-1">
                Role: {selectedProject.modal.role}
              </p>
            </div>

            {/* Impact Metric Banner */}
            <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 mb-6 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-teal-400 shrink-0" />
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">System Impact</div>
                <div className="text-sm font-bold text-white">{selectedProject.impact}</div>
              </div>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="space-y-4 mb-6 text-sm text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Engineering Challenge
                </h4>
                <p className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                  {selectedProject.modal.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Architectural Solution
                </h4>
                <p className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                  {selectedProject.modal.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Outcome & Scale
                </h4>
                <p className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                  {selectedProject.modal.impact}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 font-semibold">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800 text-teal-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom action */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Recent;