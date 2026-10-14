import React from "react";
import ServiceCard from "./ServiceCard";
import {
  CodeBracketSquareIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  Squares2X2Icon,
  ChartBarSquareIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";
import { Wrench } from "lucide-react";

const services = [
  {
    icon: <CodeBracketSquareIcon className="w-8 h-8" />,
    title: "High-Performance API Engineering",
    description:
      "Architecting clean, type-safe, and thoroughly documented RESTful and GraphQL APIs engineered to handle millions of daily requests with sub-50ms response times.",
    deliverables: [
      "RESTful, GraphQL & gRPC API design",
      "Swagger / OpenAPI 3.0 interactive documentation",
      "Strict payload validation, rate-limiting & pagination",
      "Versioning strategies & backward compatibility"
    ],
    tech: ["Go / Gin", "Node.js", "Express", "FastAPI", "OpenAPI"]
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: "Fintech Security & Transaction Integrity",
    description:
      "Engineering bank-grade security protocols, automated fraud detection heuristics, and tamper-evident transaction logs for high-stakes payment ecosystems.",
    deliverables: [
      "Zero-Trust OAuth2, JWT & RBAC implementations",
      "Automated fraud detection & anomaly triggers",
      "Immutable audit trails with cryptographic ledgers (immuDB)",
      "Strict data encryption at rest and in transit"
    ],
    tech: ["OAuth2 / JWT", "immuDB", "Encryption", "Fraud Engine"]
  },
  {
    icon: <CircleStackIcon className="w-8 h-8" />,
    title: "Database Architecture & Optimization",
    description:
      "Designing resilient relational and NoSQL schemas optimized for high write throughput, complex analytical queries, and millisecond caching.",
    deliverables: [
      "PostgreSQL & MySQL schema design and partitioning",
      "Multi-tier in-memory caching with Redis",
      "Indexing strategies & slow-query profiling",
      "ACID compliance & distributed transactions"
    ],
    tech: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"]
  },
  {
    icon: <Squares2X2Icon className="w-8 h-8" />,
    title: "Distributed Systems & Microservices",
    description:
      "Decoupling monolithic platforms into fault-tolerant, horizontally scalable microservices connected by asynchronous messaging channels.",
    deliverables: [
      "Event-driven messaging via Apache Kafka & RabbitMQ",
      "Service discovery, circuit breakers & fault tolerance",
      "Dockerized microservice containerization",
      "Idempotent event processing & dead-letter queues"
    ],
    tech: ["Apache Kafka", "RabbitMQ", "Docker", "Microservices"]
  },
  {
    icon: <CloudArrowUpIcon className="w-8 h-8" />,
    title: "DevOps, Cloud & CI/CD Pipelines",
    description:
      "Automating deployment lifecycles from git commit to production with automated tests, container registries, and zero-downtime releases.",
    deliverables: [
      "Automated GitHub Actions & Jenkins workflows",
      "Docker multi-stage builds for lean production images",
      "Kubernetes & cloud VPS deployment setup",
      "Automated database migration scripts & rollbacks"
    ],
    tech: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "AWS"]
  },
  {
    icon: <ChartBarSquareIcon className="w-8 h-8" />,
    title: "System Monitoring & Observability",
    description:
      "Implementing comprehensive logging, health probes, performance metrics, and alerting to detect and resolve system bottlenecks before users notice.",
    deliverables: [
      "Centralized structured JSON logging",
      "Prometheus & Grafana metrics dashboards",
      "Uptime monitoring & automated alerting triggers",
      "Unit & end-to-end integration test suites"
    ],
    tech: ["Prometheus", "Grafana", "Jest", "Pytest", "APM"]
  },
];

const ServicesSection = () => {
  return (
    <section id="service" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080c14]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Specialized Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Services & <span className="text-gradient-cyan">Engineering Capabilities</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl text-base sm:text-lg">
            End-to-end backend engineering, from systems design and database modeling to cloud automation and high-concurrency optimization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

