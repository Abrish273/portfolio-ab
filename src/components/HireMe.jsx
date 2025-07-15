import { useRef } from "react";
import { GroupIcon } from "../assets";
import emailjs from "@emailjs/browser";

const HireMe = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hq65pb8", // e.g., service_abcd123
        "template_3xfv5oj", // e.g., template_xyz456
        formRef.current,
        "qLKi0ceZMRCKzvGlo" // e.g., _AbCdEfGhIjKlMn
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message.");
        }
      );
  };
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="bg-gray-900 text-white w-full max-w-5xl p-8 rounded-lg grid md:grid-cols-5 gap-8">
        {/* Left side (2 columns) */}
        <div className="flex flex-col justify-center items-center md:items-start md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
            Got a project in <span className="text-teal-400">mind?</span>
          </h1>
          <img
            src={GroupIcon}
            alt=""
            className="w-32 md:w-40 lg:w-48 max-w-full h-auto mt-4"
          />
        </div>
  
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 md:col-span-3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Email"
              required
              className="p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center space-x-2 transition"
          >
            <span>Send Message</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireMe;
