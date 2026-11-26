import { CashGoIcon, CBEIcon, DashenIcon, TeleTvIcon } from "../assets";

export const projectsData = [
  {
    id: "dashen",
    title: "Dashen Super App",
    category: "Fintech & Banking",
    description: "Flagship digital banking super app. Designed scalable backend integration microservices, transaction validation pipelines, and fraud prevention.",
    downloads: "1M+ Downloads",
    impact: "ETB 500B+ Transaction Volume",
    image: DashenIcon,
    tech: ["Go", "Gin", "PostgreSQL", "Redis", "Apache Kafka", "Docker"],
    modal: {
      role: "Senior Backend Engineer & Architecture Contributor",
      organization: "EagleLion System Technology",
      problem: "Massive transaction surges during peak merchant and salary settlement hours risked latency spikes, transaction timeouts, and reconciliation bottlenecks across disparate payment gateways.",
      solution: "Engineered high-throughput event-driven microservices using Go and Apache Kafka to decouple order ingestion from asynchronous settlement. Leveraged Redis distributed locks and connection pooling with PostgreSQL to guarantee zero transaction duplication.",
      impact: "Successfully scaled to support over ETB 500+ Billion in cumulative financial transaction volume with 99.9% availability, receiving an official Certificate of Contribution."
    }
  },
  {
    id: "cashgo",
    title: "CashGo Remittance Platform",
    category: "Fintech & Banking",
    description: "Cross-border remittance platform connecting international diaspora payments to local bank accounts and mobile wallets with sub-second processing.",
    downloads: "100K+ Downloads",
    impact: "Real-time Cross Border Remittance",
    image: CashGoIcon,
    tech: ["Node.js", "Express", "MongoDB", "Redis", "Double-Entry Ledger"],
    modal: {
      role: "Lead Backend Engineer",
      organization: "EagleLion System Technology",
      problem: "International money transfers required strict anti-money laundering (AML) checks, rapid currency conversion rates, and automated reconciliation across multiple partner banks.",
      solution: "Implemented an automated fraud detection engine with velocity thresholds and device fingerprinting. Designed a tamper-proof double-entry ledger architecture ensuring zero balance discrepancy.",
      impact: "Processed millions in remittances with near-instant confirmation notifications and zero fraudulent breaches."
    }
  },
  {
    id: "ethiodirect",
    title: "EthioDirect (CBE Remittance)",
    category: "Fintech & Banking",
    description: "Commercial Bank of Ethiopia's global international money transfer service enabling zero-fee money transfers directly into CBE accounts.",
    downloads: "500K+ Downloads",
    impact: "Official CBE Global Platform",
    image: CBEIcon,
    tech: ["Node.js", "PostgreSQL", "Docker", "Core Banking API", "JWT"],
    modal: {
      role: "Backend & Systems Integration Specialist",
      organization: "EagleLion System Technology",
      problem: "Interfacing modern internet-facing mobile applications with strict legacy core banking mainframe protocols without sacrificing throughput or security.",
      solution: "Engineered an API gateway facade with secure mTLS encryption, payload sanitization, automatic token rotation, and asynchronous retry queues with dead-letter processing.",
      impact: "Enabled diaspora communities worldwide to send financial support directly to CBE accounts 24/7 with ironclad cryptographic security."
    }
  },
  {
    id: "teletv",
    title: "TeleTV Entertainment Platform",
    category: "Entertainment",
    description: "High-concurrency streaming and on-demand entertainment application optimized for low-latency movie catalog browsing and secure media playback.",
    downloads: "100K+ Downloads",
    impact: "High-Concurrency Media Backend",
    image: TeleTvIcon,
    tech: ["Node.js", "Express", "MongoDB", "Redis", "CDN Integration"],
    modal: {
      role: "Backend Engineer",
      organization: "EagleLion System Technology",
      problem: "High viewer spikes during prime-time movie premieres caused database query contention and slow catalog load times.",
      solution: "Implemented multi-tiered Redis caching for movie metadata, optimized compound MongoDB indexes, and created secure tokenized streaming URL generation.",
      impact: "Cut catalog load times by 65% and maintained flawless playback performance during record-setting premiere weekends."
    }
  },
  {
    id: "threeclick",
    title: "3-Click Shop E-Commerce",
    category: "Ecommerce",
    description: "High-speed modern e-commerce platform allowing customers to discover products, apply discounts, and complete purchases in three swift taps.",
    downloads: "50K+ Downloads",
    impact: "Low-Latency Cart & Checkout",
    image: DashenIcon,
    tech: ["Python", "FastAPI", "PostgreSQL", "RabbitMQ", "Redis"],
    modal: {
      role: "Backend API Engineer",
      organization: "EagleLion System Technology",
      problem: "E-commerce conversion dropped significantly due to multi-step checkout friction and slow inventory reservation during flash sales.",
      solution: "Built asynchronous order processing with FastAPI and RabbitMQ queues. Implemented atomic Redis-based inventory locks to prevent overselling.",
      impact: "Reduced checkout execution time to under 180ms, boosting overall cart checkout conversion."
    }
  },
  {
    id: "danenergy",
    title: "Enterprise ERP & Automation Suite",
    category: "Enterprise",
    description: "Comprehensive corporate operations suite automating employee records, operational workflows, and real-time business intelligence reports.",
    downloads: "Internal Enterprise",
    impact: "Automated Corporate Operations",
    image: null,
    tech: ["Python", "Flask", "MySQL", "Docker", "Linux VPS"],
    modal: {
      role: "Backend Developer",
      organization: "Dan Energy Ltd",
      problem: "Manual spreadsheet reporting and siloed employee records led to operational delays and inconsistent financial metrics.",
      solution: "Engineered unified REST API services with automated nightly data aggregation pipelines, role-based access control (RBAC), and scheduled PDF report generation.",
      impact: "Streamlined operational visibility for executive leadership and saved over 20+ hours per week in manual reporting."
    }
  }
];
