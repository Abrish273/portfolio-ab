import React, { useState } from "react";
import { AboutMeImg } from "../assets";
import { 
  Code2, 
  Database, 
  Server, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Zap,
  CheckCircle,
  Terminal,
  Workflow
} from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    label: "Languages & Core",
    icon: <Terminal className="w-4 h-4" />,
    skills: [
      { name: "Go (Golang)", level: "Advanced", desc: "Gin, Goroutines, Channels, High-throughput services" },
      { name: "Node.js / TypeScript", level: "Expert", desc: "Async I/O, Express, Microservices" },
      { name: "Python", level: "Proficient", desc: "FastAPI, Flask, Automation, Data pipelines" },
      { name: "SQL", level: "Advanced", desc: "Complex joins, indexing, query execution optimization" },
    ]
  },
  {
    id: "frameworks",
    label: "Frameworks & APIs",
    icon: <Code2 className="w-4 h-4" />,
    skills: [
      { name: "Gin (Go)", level: "Advanced", desc: "Ultra-fast RESTful APIs and middleware" },
      { name: "Express.js", level: "Expert", desc: "Enterprise modular API architectures" },
      { name: "FastAPI", level: "Advanced", desc: "Type-safe async Python endpoints" },
      { name: "Flask", level: "Proficient", desc: "Microservices and backend scripts" },
      { name: "RESTful & GraphQL", level: "Expert", desc: "API contract design, OpenAPI/Swagger" },
    ]
  },
  {
    id: "databases",
    label: "Databases & Caching",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "PostgreSQL", level: "Advanced", desc: "Schema design, partitions, performance tuning" },
      { name: "MongoDB", level: "Advanced", desc: "NoSQL document modeling and aggregations" },
      { name: "Redis", level: "Advanced", desc: "In-memory caching, rate limiting, pub/sub" },
      { name: "immuDB", level: "Specialist", desc: "Immutable cryptographic ledger for audit logs" },
      { name: "MySQL", level: "Proficient", desc: "Relational modeling and transaction management" },
    ]
  },
  {
    id: "distributed",
    label: "Distributed & Messaging",
    icon: <Workflow className="w-4 h-4" />,
    skills: [
      { name: "Apache Kafka", level: "Advanced", desc: "High-volume event streaming and consumers" },
      { name: "RabbitMQ", level: "Proficient", desc: "Task queues and asynchronous routing" },
      { name: "Event-Driven Microservices", level: "Advanced", desc: "Decoupled services, event sourcing" },
      { name: "System Integration", level: "Expert", desc: "Fintech payment gateways, core banking APIs" },
    ]
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    icon: <Cloud className="w-4 h-4" />,
    skills: [
      { name: "Docker", level: "Advanced", desc: "Multi-stage builds, container orchestration" },
      { name: "Kubernetes", level: "Intermediate", desc: "Pod deployments, config maps, services" },
      { name: "CI/CD Pipelines", level: "Advanced", desc: "GitHub Actions, Jenkins automated deployments" },
      { name: "Cloud Infrastructure", level: "Proficient", desc: "AWS, DigitalOcean, Linux VPS administration" },
    ]
  },
  {
    id: "security",
    label: "Security & FinTech",
    icon: <ShieldCheck className="w-4 h-4" />,
    skills: [
      { name: "OAuth2 & JWT", level: "Expert", desc: "Role-based access control (RBAC), tokens" },
      { name: "Fraud Detection", level: "Advanced", desc: "Validation rules, anomaly checks, velocity limits" },
      { name: "Financial Auditability", level: "Advanced", desc: "Double-entry bookkeeping concepts, ledger logs" },
      { name: "API Security", level: "Expert", desc: "CORS, rate limiting, payload validation, encryption" },
    ]
  }
];

const highlights = [
  {
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    title: "High Concurrency & Low Latency",
    desc: "Crafting optimized Go & Node.js services capable of handling demanding transaction volumes without bottlenecks."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    title: "Fintech Grade Security",
    desc: "Rigorous transaction validation, immutable audit trails, and zero-trust authentication protocols."
  },
  {
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    title: "Scalable Microservice Architecture",
    desc: "Designing resilient event-driven systems using Apache Kafka and containerized microservices."
  },
  {
    icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    title: "End-to-End Ownership & Mentorship",
    desc: "Guiding projects from database design and architecture docs through deployment and mentoring junior engineers."
  }
];

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("languages");

  const currentCategory = skillCategories.find(c => c.id === activeTab) || skillCategories[0];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Me & Expertise</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl text-base sm:text-lg">
            Engineering robust digital infrastructure with a focus on scale, cryptographic integrity, and maintainability.
          </p>
        </div>

        {/* Top Split: Executive Bio + Philosophy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Bio Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I am a <span className="text-white font-semibold">Senior Software Engineer & Tech Team Lead</span> based in Addis Ababa, Ethiopia, with over 3+ years of professional experience building high-availability backends, scalable REST/GraphQL APIs, and distributed systems.
            </p>
            <p>
              My background centers on <span className="text-teal-300 font-medium">Fintech transaction systems</span>, where accuracy and security are non-negotiable. I spearheaded transaction validation and fraud detection pipelines for major digital platforms, including contributions to the <span className="text-white font-semibold">Dashen Super App</span>, which processed over <span className="text-cyan-400 font-semibold">ETB 500+ Billion</span>.
            </p>
            <p>
              As a tech lead at <span className="text-white font-semibold">EagleLion System Solutions</span>, I balance architectural decisions—from distributed messaging with <span className="text-teal-300 font-medium">Kafka</span> and high-speed in-memory caching with <span className="text-teal-300 font-medium">Redis</span> to database optimization with <span className="text-teal-300 font-medium">PostgreSQL</span> and <span className="text-teal-300 font-medium">immuDB</span>—with mentoring engineering talent and enforcing CI/CD automation.
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-slate-850 border border-slate-700/80 text-teal-300 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>Distributed Systems</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-850 border border-slate-700/80 text-cyan-300 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>ETB 500B+ Fintech Scale</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-850 border border-slate-700/80 text-indigo-300 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>CI/CD & DevOps Automation</span>
              </div>
            </div>
          </div>

          {/* Highlights / Strengths (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl glass-card flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-slate-800/90 shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Interactive Skills Matrix Section */}
        <div id="skills" className="pt-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Technical <span className="text-gradient-cyan">Skill Matrix</span>
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Select a domain below to inspect specialized backend tools, databases, and architectural frameworks.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-semibold shadow-lg shadow-teal-500/20 scale-105"
                    : "bg-slate-850/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Active Skills Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
            {currentCategory.skills.map((skill, idx) => (
              <div key={idx} className="p-5 rounded-xl glass-card border border-slate-800/80 hover:border-teal-500/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-white">{skill.name}</h4>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.desc}
                  </p>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-teal-400 to-cyan-400 h-full rounded-full"
                    style={{ 
                      width: skill.level === "Expert" ? "95%" : skill.level === "Advanced" ? "88%" : skill.level === "Specialist" ? "85%" : "78%" 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;

