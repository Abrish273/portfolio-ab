import React from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 px-4 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg font-semibold">
          <span className="text-teal-400">Contact</span> Via Social media
        </h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="mailto:example@example.com"
            className="bg-gray-700 p-3 rounded-full hover:bg-teal-400 transition"
            aria-label="Email"
          >
            <img src={MailIcon} alt="" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-teal-400 transition"
            aria-label="LinkedIn"
          >
            <img src={LinkedInIcon} alt="" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-teal-400 transition"
            aria-label="GitHub"
          >
            <img src={GitHubIcon} alt="" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm space-y-2 md:space-y-0">
          <p>
            Copyright © {currentYear}
            <span className="text-teal-400 font-semibold">Abreham Tilahun</span>
            . All Rights Reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <span>-</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
