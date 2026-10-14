import React from "react";
import { ArrowUpIcon, HeartIcon } from "@heroicons/react/24/outline";
import { LogoIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05080f] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-[#0d131f] rounded-[10px] flex items-center justify-center">
                  <img src={LogoIcon} className="w-5 h-5 object-contain" alt="Logo" />
                </div>
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                Abreham <span className="text-teal-400">Tilahun</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Senior Software Engineer & Tech Team Lead. Architecting resilient distributed systems, high-concurrency microservices, and secure fintech platforms.
            </p>

            <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available for engineering contracts & full-time senior roles</span>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-medium">
            <div className="space-y-2.5">
              <span className="text-slate-200 font-bold uppercase tracking-wider font-mono text-[11px] block">
                Navigation
              </span>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-teal-300 transition">About Me</a></li>
                <li><a href="#experience" className="hover:text-teal-300 transition">Career Experience</a></li>
                <li><a href="#skills" className="hover:text-teal-300 transition">Skill Matrix</a></li>
              </ul>
            </div>
            <div className="space-y-2.5">
              <span className="text-slate-200 font-bold uppercase tracking-wider font-mono text-[11px] block">
                Explore
              </span>
              <ul className="space-y-2">
                <li><a href="#service" className="hover:text-teal-300 transition">Services & Architecture</a></li>
                <li><a href="#work" className="hover:text-teal-300 transition">Featured Projects</a></li>
                <li><a href="#contact" className="hover:text-teal-300 transition">Contact & Inquiries</a></li>
              </ul>
            </div>
          </div>

          {/* Social Connect & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end space-y-4">
            <span className="text-slate-200 font-bold uppercase tracking-wider font-mono text-[11px]">
              Connect Online
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="mailto:abreham.tilahun2027@gmail.com"
                className="w-10 h-10 rounded-xl bg-slate-850 hover:bg-teal-500/20 border border-slate-700/80 hover:border-teal-500/50 flex items-center justify-center transition"
                aria-label="Email"
              >
                <img src={MailIcon} alt="Email" className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/abrehamtilahun2027"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-850 hover:bg-teal-500/20 border border-slate-700/80 hover:border-teal-500/50 flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <img src={LinkedInIcon} alt="LinkedIn" className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Abrish273"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-850 hover:bg-teal-500/20 border border-slate-700/80 hover:border-teal-500/50 flex items-center justify-center transition"
                aria-label="GitHub"
              >
                <img src={GitHubIcon} alt="GitHub" className="w-4 h-4" />
              </a>
              <a
                href="https://medium.com/@tilahuna13"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-850 hover:bg-teal-500/20 border border-slate-700/80 hover:border-teal-500/50 flex items-center justify-center transition text-slate-300 font-bold text-sm"
                aria-label="Medium"
              >
                M
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 hover:text-teal-300 transition pt-2 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUpIcon className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {currentYear} <span className="text-slate-300 font-medium">Abreham Tilahun</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Engineered with React 19, Tailwind CSS & Vite</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

