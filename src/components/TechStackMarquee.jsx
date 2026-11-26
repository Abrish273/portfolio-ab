import React from "react";

const techStack = [
  {
    name: "Go",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M1.8 10.6h4.9c-.1.4-.3.7-.6 1H1.5l.3-1zm.7-2h4.7c0 .3.1.7.2 1H2.1l.4-1zm1.5-2h3.8c.2.3.4.7.5 1H3.6l.4-1z" fill="#00ADD8" />
        <path d="M14.7 6.8c-2.6 0-4.7 1.8-4.7 4.2 0 2.3 1.9 4.1 4.5 4.1 2.7 0 4.6-1.8 4.6-4.1 0-2.4-1.9-4.2-4.4-4.2zm0 6.3c-1.1 0-1.9-.9-1.9-2.1s.8-2.2 1.9-2.2 1.9.9 1.9 2.2-.8 2.1-1.9 2.1zM8.3 11.4c-.3 1.5-1.5 2.5-3.1 2.5-1.9 0-3.2-1.3-3.2-3.1 0-1.9 1.4-3.3 3.3-3.3 1.3 0 2.4.6 2.9 1.7l-1.9.8c-.2-.4-.6-.6-1-.6-.8 0-1.3.6-1.3 1.4 0 .8.5 1.4 1.3 1.4.6 0 1-.3 1.1-.8H5.4v-1.4h3v1.4h-.1z" fill="#00ADD8" />
        <circle cx="20.8" cy="11" r="2.2" fill="#00ADD8" />
      </svg>
    )
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M12 2L3.5 6.9v10.2L12 22l8.5-4.9V6.9L12 2z" fill="#339933" fillOpacity="0.18" stroke="#339933" strokeWidth="1.6" />
        <path d="M12 6.8v10.4M8.5 9.2l7 5.6M15.5 9.2l-7 5.6" stroke="#68A063" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
        <path d="M6.5 11.5h4.8v1.4H9.7v5.6H8.1v-5.6H6.5v-1.4zm6.4 5.4c.5.3 1.1.5 1.7.5.7 0 1-.2 1-.6 0-.4-.3-.6-1.1-.9-1.2-.4-1.8-1-1.8-2 0-1.2 1-2 2.4-2 .7 0 1.3.1 1.7.4l-.4 1.3c-.4-.2-.8-.3-1.3-.3-.6 0-.9.2-.9.5 0 .4.3.6 1.1.9 1.2.4 1.8 1 1.8 2 0 1.2-.9 2-2.6 2-.8 0-1.5-.2-2-.5l.4-1.4z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E" />
        <path d="M10.7 16.5c0 1.4-.8 2.2-2.1 2.2-.7 0-1.3-.2-1.7-.6l.9-1.1c.3.3.5.4.8.4.4 0 .6-.2.6-.9v-4.7h1.5v4.7zm2.2.4c.5.3 1.1.5 1.8.5.7 0 1.1-.3 1.1-.7 0-.4-.3-.6-1.1-.9-1.2-.4-1.9-1-1.9-2 0-1.2 1-2 2.5-2 .7 0 1.3.2 1.8.4l-.5 1.3c-.4-.2-.8-.3-1.3-.3-.6 0-1 .2-1 .6 0 .4.3.6 1.2.9 1.2.4 1.9 1 1.9 2 0 1.2-1 2.1-2.7 2.1-.8 0-1.6-.2-2.2-.6l.4-1.3z" fill="#1E293B" />
      </svg>
    )
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M11.9 2.5c-2.6 0-2.4 1.1-2.4 1.1v1.2h2.5v.4H7.2S5 5 5 7.7v2.4c0 1.4 1.2 2.2 2.4 2.2h1.3v-1.7c0-1.2 1-2.2 2.3-2.2h3.2c1 0 1.8-.8 1.8-1.8V4.6c0-1.1-.9-2.1-4.1-2.1zm-1.4 1.3a.6.6 0 110 1.2.6.6 0 010-1.2z" fill="#3776AB" />
        <path d="M12.1 21.5c2.6 0 2.4-1.1 2.4-1.1v-1.2H12v-.4h4.8s2.2.2 2.2-2.5v-2.4c0-1.4-1.2-2.2-2.4-2.2h-1.3v1.7c0 1.2-1 2.2-2.3 2.2H9.8c-1 0-1.8.8-1.8 1.8v2c0 1.1.9 2.1 4.1 2.1zm1.4-1.3a.6.6 0 110-1.2.6.6 0 010 1.2z" fill="#FFD43B" />
      </svg>
    )
  },
  {
    name: "Java",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M9.5 16.5c-2 .5-1.2 1.7 1.3 1.9 2.7.2 5-.1 6-.7" stroke="#5382A1" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8.5 13.7c-1.8.5-1 1.6 1.5 1.8 2.8.2 5.4-.1 6.3-.7" stroke="#5382A1" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12.2 4c1.2 1.4-.6 2.8-.6 4.2 0 1 .7 1.7.7 1.7s-1.5-.8-1.5-2.3c0-1.5 1.4-2.4 1.4-3.6zm2.8 1.6c.9 1.1-.4 2.2-.4 3.3 0 .8.6 1.3.6 1.3s-1.2-.6-1.2-1.8c0-1.2 1-1.9 1-2.8z" fill="#ED8B00" />
        <path d="M7.5 19.3c2.5.8 6.5.8 9 0" stroke="#ED8B00" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Gin",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <circle cx="12" cy="12" r="9.5" fill="#00ADD8" fillOpacity="0.15" stroke="#00ADD8" strokeWidth="1.6" />
        <path d="M8 10h8l-4 5-4-5zm4 5v4m-2.5 0h5" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "Express.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="4" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.4" />
        <path d="M6.5 14.5l2.5-5 2.5 5M13.5 9.5l4 5m0-5l-4 5" stroke="#F8FAFC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "FastAPI",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <circle cx="12" cy="12" r="9.5" fill="#009688" />
        <path d="M12.8 6.5L8.2 13h3.6l-.6 4.5 4.6-6.5h-3.6l.6-4.5z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "Flask",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M9.5 4h5m-3.5 0v4.5L6.2 16.8A2 2 0 008 19.5h8a2 2 0 001.8-2.7L13 8.5V4" stroke="#E2E8F0" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.8 15h8.4" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M12 3.5c-4 0-7 2.5-7 6.2 0 2.6 1.5 4.8 3.6 5.6.5.2.9.6 1 1.2l.4 2.8c.1.7.7 1.2 1.4 1.2h1.2c.7 0 1.3-.5 1.4-1.2l.4-2.8c.1-.6.5-1 1-1.2 2.1-.8 3.6-3 3.6-5.6 0-3.7-3-6.2-7-6.2z" fill="#336791" fillOpacity="0.25" stroke="#4169E1" strokeWidth="1.6" />
        <circle cx="9.8" cy="9.2" r="1" fill="#60A5FA" />
        <circle cx="14.2" cy="9.2" r="1" fill="#60A5FA" />
        <path d="M12 12v5" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M12 2.5c2.8 3.1 4.5 6.3 4.5 9.6 0 3.4-1.8 6.1-4.5 7.9-2.7-1.8-4.5-4.5-4.5-7.9 0-3.3 1.7-6.5 4.5-9.6z" fill="#47A248" />
        <path d="M12 7v14.5" stroke="#A7F3D0" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Redis",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M12 4.5L3.5 8.5 12 12.5l8.5-4L12 4.5z" fill="#DC382D" />
        <path d="M3.5 12L12 16l8.5-4M3.5 15.5L12 19.5l8.5-4" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "MySQL",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <ellipse cx="12" cy="6.5" rx="7" ry="3" fill="#00758F" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="1.6" />
        <path d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" stroke="#F59E0B" strokeWidth="1.6" />
      </svg>
    )
  },
  {
    name: "immudb",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M12 3l7.5 3.5v5.8c0 4.5-3.2 8-7.5 9.2-4.3-1.2-7.5-4.7-7.5-9.2V6.5L12 3z" fill="#14B8A6" fillOpacity="0.2" stroke="#2DD4BF" strokeWidth="1.6" />
        <path d="M9.5 12l1.8 1.8 3.5-3.8" stroke="#5EEAD4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "Apache Kafka",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <circle cx="12" cy="12" r="2.6" stroke="#2DD4BF" strokeWidth="1.7" />
        <circle cx="12" cy="4.8" r="2" fill="#E2E8F0" />
        <circle cx="18.2" cy="8.5" r="2" fill="#E2E8F0" />
        <circle cx="18.2" cy="15.5" r="2" fill="#E2E8F0" />
        <circle cx="12" cy="19.2" r="2" fill="#E2E8F0" />
        <path d="M12 6.8v2.6m4.4-.1l-2.3 1.4m2.3 3.6l-2.3-1.4M12 14.6v2.6" stroke="#94A3B8" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M4 13.5h15.5c-.4 3.2-2.7 5.5-6.8 5.5-4.7 0-8.1-2.2-8.7-5.5z" fill="#2496ED" />
        <rect x="6" y="10" width="2.4" height="2.2" rx="0.4" fill="#38BDF8" />
        <rect x="9" y="10" width="2.4" height="2.2" rx="0.4" fill="#38BDF8" />
        <rect x="12" y="10" width="2.4" height="2.2" rx="0.4" fill="#38BDF8" />
        <rect x="9" y="7.2" width="2.4" height="2.2" rx="0.4" fill="#38BDF8" />
        <rect x="12" y="7.2" width="2.4" height="2.2" rx="0.4" fill="#38BDF8" />
      </svg>
    )
  },
  {
    name: "Kubernetes",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M12 2.8l7.5 3.8 1.8 8.1-5.2 6.5H7.9L2.7 14.7l1.8-8.1L12 2.8z" fill="#326CE5" fillOpacity="0.25" stroke="#326CE5" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.6" stroke="#60A5FA" strokeWidth="1.6" />
        <path d="M12 5.5v3.9m5.5.4l-3.3 1.4m2.1 5.3l-2.7-2.6m-5.2 2.6l2.7-2.6m-4.6-4.1l3.3 1.4" stroke="#93C5FD" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Jenkins",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <circle cx="12" cy="12" r="9.2" fill="#D24939" fillOpacity="0.2" stroke="#D24939" strokeWidth="1.6" />
        <circle cx="12" cy="10.2" r="3.6" fill="#FDE68A" />
        <path d="M8.5 17.5c.8-2 2.1-2.8 3.5-2.8s2.7.8 3.5 2.8" stroke="#F87171" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path d="M6.5 14.5c3.5 2.6 7.5 2.6 11 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 13.5l2.2.8-.6 2.2" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 11.2l1.6-4.4 1.6 4.4m-2.7-1.3h2.2m2.2-3.1l1 4.4 1.1-3.2 1.1 3.2 1-4.4m3.4.5c-.7-.5-1.9-.4-1.9.5 0 .9 2 .8 2 1.9 0 1-1.3 1.3-2.2.7" stroke="#F8FAFC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <rect x="4.5" y="4.5" width="15" height="15" rx="3" transform="rotate(45 12 12)" fill="#F05032" />
        <circle cx="10" cy="9.5" r="1.4" fill="#FFFFFF" />
        <circle cx="14.5" cy="12.5" r="1.4" fill="#FFFFFF" />
        <circle cx="10" cy="15" r="1.4" fill="#FFFFFF" />
        <path d="M10 10.9v2.7m.9-3.2l2.6 1.5" stroke="#FFFFFF" strokeWidth="1.4" />
      </svg>
    )
  }
];

const TechStackMarquee = () => {
  return (
    <div id="skills" className="pt-8">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Technical <span className="text-gradient-cyan">Stack & Tools</span>
        </h3>
        <p className="text-slate-400 text-sm mt-2">
          Core languages, frameworks, databases, and cloud infrastructure powering production systems.
        </p>
      </div>

      <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex items-center gap-5">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="glass-card shrink-0 flex items-center gap-4 px-6 py-4 rounded-2xl border border-slate-800/80 hover:border-teal-500/40"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center shrink-0">
                {tech.icon}
              </div>
              <span className="text-base font-semibold text-slate-100 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackMarquee;
