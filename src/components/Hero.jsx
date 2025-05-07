import React from "react";
import { AbrehamPdf, PhotoImg } from "../assets";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  return (
    <section className="h-[90vh] bg-gray-900 text-white px-4 sm:px-8 md:px-16 flex items-center justify-center">
      <div className="flex flex-col-reverse  md:py-12 md:flex-row items-center justify-around gap-4 md:gap-12 max-w-7xl w-full h-full text-center md:text-left">
        {/* Left Text Content */}
        <div className="space-y-8 w-full md:w-[60%] lg:w-[50%] max-w-xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            CREATIVE <br />
            <span className="text-cyan-400">SOFTWARE</span> <br />
            ENGINEER
          </h1>
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="#contact"
              className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 text-lg rounded-full"
            >
              Hire me
            </a>
            <a href={AbrehamPdf} download className="inline-block">
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 text-lg rounded-full flex items-center gap-2">
                Download CV
                <ArrowDownTrayIcon className="w-6 h-6" />
              </button>
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center">
          <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
            <img
              src={PhotoImg}
              alt="Profile"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
