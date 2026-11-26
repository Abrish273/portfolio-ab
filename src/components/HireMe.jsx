import { useState, useEffect } from "react";
import { 
  MapPinIcon, 
  ClockIcon, 
  CheckIcon, 
  ClipboardDocumentIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";
import { LinkedInIcon, GitHubIcon } from "../assets";

const HireMe = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  // Live Addis Ababa time (UTC+3)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Africa/Addis_Ababa",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat([], options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abreham.tilahun2027@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="min-h-[calc(100vh-5rem)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative bg-[#080c14]/80 flex flex-col justify-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-3">
            <ChatBubbleLeftRightIcon className="w-3.5 h-3.5" />
            <span>Direct Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Got a Project or Role in <span className="text-gradient-cyan">Mind?</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl text-base sm:text-lg">
            Whether you need a high-throughput backend architecture, fraud detection integration, or a senior engineering leader, let's talk.
          </p>
        </div>

        <div className="max-w-lg mx-auto space-y-6">
          {/* Quick Status Card */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Fast Response</span>
                </div>
                <span className="text-xs font-mono text-slate-400">&lt; 24h reply</span>
              </div>

              {/* Timezone & Clock */}
              <div className="flex items-center justify-between bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <MapPinIcon className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Addis Ababa, ET</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-teal-300 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20">
                  <ClockIcon className="w-3.5 h-3.5" />
                  <span>{time || "UTC+3"}</span>
                </div>
              </div>

              {/* Email Card with 1-click copy */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Direct Email
                </label>
                <div className="flex items-center justify-between bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate pr-2">
                    abreham.tilahun2027@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1 shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="w-4 h-4 text-emerald-400" />
                        <span className="text-[11px] font-sans text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <ClipboardDocumentIcon className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                  Profiles & Articles
                </label>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/abrehamtilahun2027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-850 hover:bg-teal-500/20 border border-slate-700/80 hover:border-teal-500/40 text-slate-300 hover:text-teal-300 text-xs font-medium transition"
                  >
                    <img src={LinkedInIcon} alt="LinkedIn" className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Abrish273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-850 hover:bg-teal-500/20 border border-slate-700/80 hover:border-teal-500/40 text-slate-300 hover:text-teal-300 text-xs font-medium transition"
                  >
                    <img src={GitHubIcon} alt="GitHub" className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://medium.com/@tilahuna13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-850 hover:bg-teal-500/20 border border-slate-700/80 hover:border-teal-500/40 text-slate-300 hover:text-teal-300 text-xs font-medium transition"
                  >
                    <span className="font-bold text-sm">M</span>
                    <span>Medium</span>
                  </a>
                </div>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;

