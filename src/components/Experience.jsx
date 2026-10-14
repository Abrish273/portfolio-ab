import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar,
  CheckCircle2,
  Award
} from "lucide-react";

const experiences = [
  {
    role: "Senior Backend Engineer & Tech Team Lead",
    company: "EagleLion System Solutions",
    location: "Addis Ababa, Ethiopia",
    period: "Apr 2024 — Present",
    type: "Full-Time • On-site",
    description: "Leading backend engineering and system integrations across mission-critical fintech and entertainment solutions with high transaction volumes.",
    achievements: [
      "Architected backend microservices and automation solutions for top-tier fintech and enterprise clients.",
      "Engineered automated transaction validation and fraud detection workflows, significantly increasing operational efficiency and payment reliability.",
      "Key contributor to the Dashen Super App backend ecosystem, which surpassed ETB 100+ Billion in total transaction volume.",
      "Mentored junior engineers, established code review standards, and automated deployment pipelines with Docker and Kafka."
    ],
    tech: ["Go (Golang)", "Gin", "Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "Redis", "Kafka", "Docker", "immuDB"],
    featured: true
  },
  {
    role: "Backend Developer",
    company: "Dan Energy Ltd",
    location: "Addis Ababa, Ethiopia",
    period: "Oct 2022 — Apr 2024",
    type: "Full-Time • On-site",
    description: "Developed and maintained internal backend systems supporting corporate operations, employee management, and business intelligence reporting.",
    achievements: [
      "Built resilient backend services supporting operational workflows and real-time internal reporting.",
      "Collaborated with frontend teams and product managers to integrate backend APIs with responsive web interfaces.",
      "Resolved complex data integration challenges and enhanced database indexing for improved query performance.",
      "Assisted with onboarding junior developers with development guidelines and technical documentation."
    ],
    tech: ["Python", "Flask", "Node.js", "MySQL", "MongoDB", "REST APIs", "Git", "Docker", "Linux"],
    featured: false
  },
  {
    role: "B.Sc. in Electrical Engineering",
    company: "Bahir Dar University",
    location: "Bahir Dar, Ethiopia",
    period: "2018 — 2023",
    type: "Education",
    description: "Rigorous engineering curriculum focusing on systems engineering, embedded programming, control systems, and computational algorithms.",
    achievements: [
      "Graduated with honors in Electrical & Computer Systems Engineering.",
      "Extensive coursework in Data Structures, Algorithms, Distributed Computing, and Systems Integration."
    ],
    tech: ["Systems Engineering", "Algorithms", "Data Structures", "C/C++", "Signal Processing"],
    featured: false,
    isEducation: true
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080c14]/90">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-gradient-cyan">Leadership</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl text-base sm:text-lg">
            Proven track record of designing high-throughput backend systems, leading engineering teams, and building platforms that scale.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-32 lg:ml-40 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Dot */}
              <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                exp.featured
                  ? "bg-teal-500 border-teal-300 text-slate-950 shadow-lg shadow-teal-500/40"
                  : exp.isEducation
                  ? "bg-indigo-600 border-indigo-400 text-white"
                  : "bg-slate-800 border-slate-600 text-slate-300 group-hover:border-teal-400 group-hover:text-teal-400"
              }`}>
                {exp.isEducation ? (
                  <GraduationCap className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Experience Card */}
              <div className={`p-6 sm:p-8 rounded-2xl glass-card transition-all duration-300 ${
                exp.featured ? "border-teal-500/30 bg-[#0f172a]/70" : "bg-[#0d131f]/60"
              }`}>
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.featured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30">
                          <Award className="w-3 h-3" /> Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-teal-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  {/* Metadata pills */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800/70 hover:bg-slate-700/70 text-slate-300 hover:text-white border border-slate-700/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
