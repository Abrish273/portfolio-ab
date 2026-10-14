import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon, 
  CheckIcon, 
  ClipboardDocumentIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";
import { MailIcon, LinkedInIcon, GitHubIcon } from "../assets";

const inquiryTypes = [
  "Fintech Architecture",
  "High-Scale APIs",
  "Distributed Systems",
  "Full-Time Role",
  "Consulting / Audit"
];

const HireMe = () => {
  const formRef = useRef();
  const [selectedType, setSelectedType] = useState("Fintech Architecture");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
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

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_hq65pb8",
        "template_3xfv5oj",
        formRef.current,
        "qLKi0ceZMRCKzvGlo"
      )
      .then(
        (result) => {
          setStatus("success");
          try {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
          } catch (err) {
            // ignore if confetti fails
          }
          if (formRef.current) formRef.current.reset();
        },
        (error) => {
          console.error("Error sending email:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080c14]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
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

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
              
              {/* Inquiry Type Chips */}
              <div className="mb-6">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                  Project / Engagement Scope
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        selectedType === type
                          ? "bg-teal-500 text-slate-950 font-semibold shadow-md shadow-teal-500/20"
                          : "bg-slate-850 text-slate-400 hover:text-white border border-slate-800"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Banner */}
              {status === "success" && (
                <div className="p-4 mb-6 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3 animate-in fade-in">
                  <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Message sent successfully!</strong>
                    <span>Thank you for reaching out. I'll review your project details and get back to you shortly.</span>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 mb-6 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
                  <div>
                    <strong className="block font-bold">Failed to send through form</strong>
                    <span>Please send an email directly to <a href="mailto:abreham.tilahun2027@gmail.com" className="underline font-mono">abreham.tilahun2027@gmail.com</a>.</span>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                {/* Hidden field for selected inquiry type */}
                <input type="hidden" name="project_type" value={selectedType} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-slate-500 border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="reply_to"
                      placeholder="alex@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-slate-500 border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 block">
                    Subject / Project Headline
                  </label>
                  <input
                    type="text"
                    name="subject"
                    defaultValue={`Inquiry: ${selectedType}`}
                    placeholder="Brief summary of your project or role"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-slate-500 border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 block">
                    Message & Timeline
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell me about your technical requirements, architecture scope, timeline, and current system challenges..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-slate-500 border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition text-sm resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 hover:from-teal-300 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Transmitting message...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <PaperAirplaneIcon className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HireMe;

