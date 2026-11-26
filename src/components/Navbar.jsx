import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { LogoIcon, AbrehamPdf } from "../assets";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Experience", to: "/experience" },
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#080c14]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3"
        : "bg-[#080c14]/50 backdrop-blur-md border-b border-white/5 py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <Link
            to="/"
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
              <span className="text-[11px] text-slate-400 font-mono tracking-wider uppercase">Senior Tech Lead.</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121a2b]/80 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10 shadow-inner shadow-black/30">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-slate-950 font-semibold bg-gradient-to-r from-teal-400 to-cyan-400 shadow-sm shadow-teal-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={AbrehamPdf}
              download="Abreham_Tilahun_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 rounded-lg transition-all duration-200 shadow-md shadow-teal-500/25 hover:shadow-teal-500/40"
            
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              <span>Download CV</span>
            </a>
            {/* <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 rounded-lg transition-all duration-200 shadow-md shadow-teal-500/25 hover:shadow-teal-500/40"
            >
              <EnvelopeIcon className="w-4 h-4" />
              <span>Hire Me</span>
            </Link> */}
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
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 border border-teal-500/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            {/* <div className="pt-2 border-t border-slate-800 flex gap-2">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl"
              >
                Hire Me
              </Link>
            </div> */}
          </div>
        )}
      </div>
    </header>
  );
}

