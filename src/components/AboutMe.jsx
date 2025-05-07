import { AboutMeImg } from "../assets";

const AboutMe = () => {
  return (
    <section className="bg-gray-900 text-white px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 w-full">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center md:text-left mb-6">
            About <span className="text-cyan-400">me</span>
          </h2>

          {/* Image shown between title and text on small screens only */}
          <div className="md:hidden mb-6 flex justify-center">
            <img
              src={AboutMeImg}
              alt="Developer Illustration"
              className="w-64 h-auto"
            />
          </div>

          {/* Text Content */}
          <ul className="space-y-3 text-base sm:text-[15px] md:text-sm leading-relaxed">
            <li>
              • I am a Software engineer with 3+ years of experience of building scalable,
              secure, and clean APIs with passion.
            </li>
            <li>• Experienced in setting up and managing CI/CD pipelines</li>
            <li>
              • Specialize in:
              <ul className="ml-6 list-disc list-inside">
                <li>Node.js, Python</li>
                <li>Express, Flask</li>
                <li>MongoDB, PostgreSQL, Redis, ImmuDB</li>
                <li>Messaging services like kafka, RabbitMQ</li>
                <li>DevOps tooling</li>
              </ul>
            </li>
            <li>
              • Domain experience in:
              <ul className="ml-6 list-disc list-inside">
                <li>Fintech</li>
                <li>Edutech</li>
                <li>E-commerce platforms</li>
              </ul>
            </li>
            <li>
              • Lifelong learner — currently exploring distributed systems and
              AI
            </li>
            <li>
              • Enjoy mentoring junior developers and writing technical blogs
            </li>
          </ul>
        </div>

        {/* Right - Image */}
        <div className="hidden md:flex flex-1 justify-center">
          <img
            src={AboutMeImg}
            alt="Developer Illustration"
            className="max-w-full w-[80%] md:w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
