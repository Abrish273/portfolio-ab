import React, { useState } from "react";
import { AbrehamPdf, PhotoImg } from "../assets";
import { 
  ArrowDownTrayIcon, 
  SparklesIcon, 
  ArrowRightIcon, 
  CheckIcon, 
  ClipboardDocumentIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CircleStackIcon
} from "@heroicons/react/24/outline";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abreham.tilahun2027@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const metrics = [
    { value: "3+ Years", label: "Engineering Exp", highlight: "Senior / Lead" },
    { value: "ETB 500B+", label: "Transaction Volume", highlight: "Dashen Super App" },
    { value: "1M+", label: "App Downloads", highlight: "Across FinTech Apps" },
    { value: "99.9%", label: "Target Uptime", highlight: "Distributed Services" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text / Info Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-medium shadow-sm shadow-teal-500/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Senior Backend Roles & Consulting</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Architecting <br />
              <span className="text-gradient-cyan">
                Distributed Systems
              </span> <br />
              & Resilient APIs
            </h1>

            {/* Subtitle Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              I'm <strong className="text-white font-semibold">Abreham Tilahun</strong> — Senior Software Engineer & Tech Team Lead. 
              I specialize in high-concurrency backend services with <span className="text-teal-300 font-medium">Go</span>, <span className="text-teal-300 font-medium">Node.js</span>, and <span className="text-teal-300 font-medium">Python</span>, event-driven architectures with <span className="text-teal-300 font-medium">Kafka</span>, and financial platforms trusted with over <span className="text-cyan-300 font-semibold underline decoration-cyan-500/50 underline-offset-4">ETB 100+ Billion</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 hover:from-teal-300 hover:to-cyan-300 rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5"
              >
                <span>Let's Build Together</span>
                <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href={AbrehamPdf}
                download="Abreham_Tilahun_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <ArrowDownTrayIcon className="w-5 h-5 text-teal-400" />
                <span>Download CV</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-mono text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition-all duration-200 cursor-pointer"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-sans text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <ClipboardDocumentIcon className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-sans">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Core:</span>
              <span className="px-2.5 py-1 bg-slate-850/80 rounded-md border border-slate-800 text-teal-300">Golang</span>
              <span className="px-2.5 py-1 bg-slate-850/80 rounded-md border border-slate-800 text-cyan-300">Node.js</span>
              <span className="px-2.5 py-1 bg-slate-850/80 rounded-md border border-slate-800 text-sky-300">Python</span>
              <span className="px-2.5 py-1 bg-slate-850/80 rounded-md border border-slate-800 text-indigo-300">PostgreSQL</span>
              <span className="px-2.5 py-1 bg-slate-850/80 rounded-md border border-slate-800 text-amber-300">Kafka</span>
              <span className="px-2.5 py-1 bg-slate-850/80 rounded-md border border-slate-800 text-blue-300">Docker</span>
            </div>

          </div>

          {/* Right Profile Visual & Floating Badge (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-64 sm:w-72 md:w-80 aspect-[0.88] max-w-full">
              
              {/* Outer decorative gradient rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500/20 via-cyan-500/10 to-indigo-500/20 blur-xl"></div>
              
              <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-b from-teal-500/40 via-slate-800 to-cyan-500/20 shadow-2xl shadow-cyan-950/50">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 relative">
                  <img
                    src={PhotoImg}
                    alt="Abreham Tilahun - Senior Backend Engineer"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-xl animate-float">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">FinTech Security</div>
                  <div className="text-xs font-bold text-white">Fraud Prevention</div>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <CpuChipIcon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Architecture</div>
                  <div className="text-xs font-bold text-white">Microservices & Kafka</div>
                </div>
              </div>

              {/* Location Tag */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/10 text-[11px] text-slate-300 font-mono flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Addis Ababa, ET (UTC+3)</span>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Metrics Strip */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start p-4 rounded-2xl glass-card text-center lg:text-left">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gradient-cyan font-display">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-white mt-1">
                {metric.label}
              </span>
              <span className="text-xs text-slate-400 font-mono mt-0.5">
                {metric.highlight}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

