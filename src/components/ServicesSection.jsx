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
    deliverables: [
      "RESTful, GraphQL & gRPC API development",
      "API documentation with Swagger / OpenAPI",
      "Request validation, rate limiting & pagination",
      "API versioning and backward compatibility"
    ],
    tech: ["Go / Gin", "Node.js", "Express", "FastAPI", "OpenAPI"]
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: "Fintech Security & Transaction Integrity",
    deliverables: [
      "OAuth2, JWT & role-based access control",
      "Secure payment and transaction processing",
      "Fraud detection and anomaly monitoring",
      "Data encryption and audit trail management"
    ],
    tech: ["OAuth2 / JWT", "Encryption", "immuDB", "Fraud Detection"]
  },
  {
    icon: <CircleStackIcon className="w-8 h-8" />,
    title: "Database Architecture & Optimization",
    deliverables: [
      "Relational and NoSQL database design",
      "Database indexing and query optimization",
      "Redis caching and performance tuning",
      "Data consistency and transaction management"
    ],
    tech: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"]
  },
  {
    icon: <Squares2X2Icon className="w-8 h-8" />,
    title: "Distributed Systems & Microservices",
    deliverables: [
      "Microservices architecture and development",
      "Event-driven architecture and messaging",
      "Inter-service communication and integration",
      "Fault tolerance and scalable system design"
    ],
    tech: ["Apache Kafka", "RabbitMQ", "Docker", "Microservices"]
  },
  {
    icon: <CloudArrowUpIcon className="w-8 h-8" />,
    title: "DevOps, Cloud & CI/CD",
    deliverables: [
      "Automated CI/CD pipeline implementation",
      "Docker containerization and deployment",
      "Cloud and VPS infrastructure management",
      "Production deployment and release automation"
    ],
    tech: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "AWS"]
  },
  {
    icon: <ChartBarSquareIcon className="w-8 h-8" />,
    title: "System Monitoring & Observability",
    deliverables: [
      "Centralized logging and error tracking",
      "Performance monitoring and metrics dashboards",
      "System health checks and automated alerting",
      "Automated testing and quality assurance"
    ],
    tech: ["Prometheus", "Grafana", "Jest", "Pytest", "APM"]
  }
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

