import { useState, useEffect } from "react";
import { LogoIcon, AbrehamPdf } from "../assets";
import { 
  Bars3Icon, 
  XMarkIcon, 
  ArrowDownTrayIcon, 
  SparklesIcon,
  EnvelopeIcon 
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Skills", href: "skills" },
    { name: "Services", href: "service" },
    { name: "Projects", href: "work" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = ["home", "about", "experience", "skills", "service", "work", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActive(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080c14]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActive("home");
            }}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 p-[2px] shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-all duration-300">
                <div className="w-full h-full bg-[#0d131f] rounded-[10px] flex items-center justify-center overflow-hidden">
                  <img src={LogoIcon} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300" alt="Logo" />
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#080c14] rounded-full animate-pulse"></span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-lg text-white font-display">
                <span>Abreham</span>
                <span className="text-teal-400">Tilahun</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider uppercase">Senior Backend Eng.</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121a2b]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner shadow-black/30">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white bg-gradient-to-r from-teal-500 to-cyan-500 shadow-sm shadow-teal-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={AbrehamPdf}
              download="Abreham_Tilahun_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-all duration-200 hover:text-white hover:border-slate-600 shadow-sm"
            >
              <ArrowDownTrayIcon className="w-4 h-4 text-teal-400" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 rounded-lg transition-all duration-200 shadow-md shadow-teal-500/25 hover:shadow-teal-500/40"
            >
              <EnvelopeIcon className="w-4 h-4" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={AbrehamPdf}
              download="Abreham_Tilahun_Resume.pdf"
              className="p-2 text-slate-300 hover:text-white bg-slate-850 rounded-lg border border-slate-700"
              aria-label="Download CV"
            >
              <ArrowDownTrayIcon className="w-4 h-4 text-teal-400" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-850 rounded-lg border border-slate-700 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#0d131f]/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active === item.href
                    ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 border border-teal-500/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className="w-full text-center py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

