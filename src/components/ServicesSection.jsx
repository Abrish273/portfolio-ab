// src/components/ServicesSection.jsx
import ServiceCard from "./ServiceCard";
import {
  ShieldCheckIcon,
  CodeBracketSquareIcon,
  CircleStackIcon,
  Squares2X2Icon,
  ChartBarSquareIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    icon: <CodeBracketSquareIcon className="w-8 h-8" />,
    title: "API development",
    description:
      "Design and build secure, scalable, and well-documented RESTful and GraphQL APIs for web and mobile applications.",
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: "Authentication & Security",
    description:
      "Implement robust authentication systems using JWT, OAuth2, and best practices for securing APIs and user data.",
  },
  {
    icon: <CircleStackIcon className="w-8 h-8" />,
    title: "Database Design & Optimization",
    description:
      "Craft efficient data models with MongoDB, PostgreSQL, Redis, and InfluxDB focusing on performance, indexing, and normalization.",
  },
  {
    icon: <Squares2X2Icon className="w-8 h-8" />,
    title: "Microservice Architecture",
    description:
      "Develop distributed systems with service isolation, message queues, and container orchestration using Docker and Kubernetes.",
  },
  {
    icon: <ChartBarSquareIcon className="w-8 h-8" />,
    title: "Testing & Monitoring",
    description:
      "Write unit and integration tests with Jest or Mocha and set up monitoring using Prometheus, Grafana, or custom dashboards.",
  },
  {
    icon: <CloudArrowUpIcon className="w-8 h-8" />,
    title: "DevOps & Deployment",
    description:
      "Automate CI/CD pipelines, manage deployments using Docker, GitHub Actions, and cloud platforms like AWS or DigitalOcean.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-900 py-20 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
