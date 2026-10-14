import React, { useState } from "react";
import Card from "./RecentCards";
import { CashGoIcon, CBEIcon, DashenIcon, TeleTvIcon } from "../assets";
import { 
  FolderGit2, 
  X, 
  CheckCircle, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  Layers,
  Sparkles
} from "lucide-react";

const projectsData = [
  {
    id: "dashen",
    title: "Dashen Super App",
    category: "Fintech & Banking",
    description: "Flagship digital banking super app. Designed scalable backend integration microservices, transaction validation pipelines, and fraud prevention.",
    downloads: "1M+ Downloads",
    impact: "ETB 500B+ Transaction Volume",
    image: DashenIcon,
    tech: ["Go", "Gin", "PostgreSQL", "Redis", "Apache Kafka", "Docker"],
    modal: {
      role: "Senior Backend Engineer & Architecture Contributor",
      organization: "EagleLion System Solutions",
      problem: "Massive transaction surges during peak merchant and salary settlement hours risked latency spikes, transaction timeouts, and reconciliation bottlenecks across disparate payment gateways.",
      solution: "Engineered high-throughput event-driven microservices using Go and Apache Kafka to decouple order ingestion from asynchronous settlement. Leveraged Redis distributed locks and connection pooling with PostgreSQL to guarantee zero transaction duplication.",
      impact: "Successfully scaled to support over ETB 500+ Billion in cumulative financial transaction volume with 99.9% availability, receiving an official Certificate of Contribution."
    }
  },
  {
    id: "cashgo",
    title: "CashGo Remittance Platform",
    category: "Fintech & Banking",
    description: "Cross-border remittance platform connecting international diaspora payments to local bank accounts and mobile wallets with sub-second processing.",
    downloads: "100K+ Downloads",
    impact: "Real-time Cross Border Remittance",
    image: CashGoIcon,
    tech: ["Node.js", "Express", "MongoDB", "Redis", "Double-Entry Ledger"],
    modal: {
      role: "Lead Backend Engineer",
      organization: "EagleLion System Solutions",
      problem: "International money transfers required strict anti-money laundering (AML) checks, rapid currency conversion rates, and automated reconciliation across multiple partner banks.",
      solution: "Implemented an automated fraud detection engine with velocity thresholds and device fingerprinting. Designed a tamper-proof double-entry ledger architecture ensuring zero balance discrepancy.",
      impact: "Processed millions in remittances with near-instant confirmation notifications and zero fraudulent breaches."
    }
  },
  {
    id: "ethiodirect",
    title: "EthioDirect (CBE Remittance)",
    category: "Fintech & Banking",
    description: "Commercial Bank of Ethiopia's global international money transfer service enabling zero-fee money transfers directly into CBE accounts.",
    downloads: "500K+ Downloads",
    impact: "Official CBE Global Platform",
    image: CBEIcon,
    tech: ["Node.js", "PostgreSQL", "Docker", "Core Banking API", "JWT"],
    modal: {
      role: "Backend & Systems Integration Specialist",
      organization: "EagleLion System Solutions",
      problem: "Interfacing modern internet-facing mobile applications with strict legacy core banking mainframe protocols without sacrificing throughput or security.",
      solution: "Engineered an API gateway facade with secure mTLS encryption, payload sanitization, automatic token rotation, and asynchronous retry queues with dead-letter processing.",
      impact: "Enabled diaspora communities worldwide to send financial support directly to CBE accounts 24/7 with ironclad cryptographic security."
    }
  },
  {
    id: "teletv",
    title: "TeleTV Entertainment Platform",
    category: "Entertainment",
    description: "High-concurrency streaming and on-demand entertainment application optimized for low-latency movie catalog browsing and secure media playback.",
    downloads: "100K+ Downloads",
    impact: "High-Concurrency Media Backend",
    image: TeleTvIcon,
    tech: ["Node.js", "Express", "MongoDB", "Redis", "CDN Integration"],
    modal: {
      role: "Backend Engineer",
      organization: "EagleLion System Solutions",
      problem: "High viewer spikes during prime-time movie premieres caused database query contention and slow catalog load times.",
      solution: "Implemented multi-tiered Redis caching for movie metadata, optimized compound MongoDB indexes, and created secure tokenized streaming URL generation.",
      impact: "Cut catalog load times by 65% and maintained flawless playback performance during record-setting premiere weekends."
    }
  },
  {
    id: "threeclick",
    title: "3-Click Shop E-Commerce",
    category: "Ecommerce",
    description: "High-speed modern e-commerce platform allowing customers to discover products, apply discounts, and complete purchases in three swift taps.",
    downloads: "50K+ Downloads",
    impact: "Low-Latency Cart & Checkout",
    image: DashenIcon,
    tech: ["Python", "FastAPI", "PostgreSQL", "RabbitMQ", "Redis"],
    modal: {
      role: "Backend API Engineer",
      organization: "EagleLion System Solutions",
      problem: "E-commerce conversion dropped significantly due to multi-step checkout friction and slow inventory reservation during flash sales.",
      solution: "Built asynchronous order processing with FastAPI and RabbitMQ queues. Implemented atomic Redis-based inventory locks to prevent overselling.",
      impact: "Reduced checkout execution time to under 180ms, boosting overall cart checkout conversion."
    }
  },
  {
    id: "danenergy",
    title: "Enterprise ERP & Automation Suite",
    category: "Enterprise",
    description: "Comprehensive corporate operations suite automating employee records, operational workflows, and real-time business intelligence reports.",
    downloads: "Internal Enterprise",
    impact: "Automated Corporate Operations",
    image: null,
    tech: ["Python", "Flask", "MySQL", "Docker", "Linux VPS"],
    modal: {
      role: "Backend Developer",
      organization: "Dan Energy Ltd",
      problem: "Manual spreadsheet reporting and siloed employee records led to operational delays and inconsistent financial metrics.",
      solution: "Engineered unified REST API services with automated nightly data aggregation pipelines, role-based access control (RBAC), and scheduled PDF report generation.",
      impact: "Streamlined operational visibility for executive leadership and saved over 20+ hours per week in manual reporting."
    }
  }
];

const categories = ["All", "Fintech & Banking", "Entertainment", "Ecommerce", "Enterprise"];

const Recent = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredData =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0b0f19]">
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