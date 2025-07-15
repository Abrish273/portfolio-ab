import { useState } from "react";
import { LogoIcon } from "../assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  const navItems = ["About Me", "Services", "Works", "Contact"];
  const navItemLinks = {
    "About Me": "about",
    Services: "service",
    Works: "work",
    Contact: "contact",
  };
  const handleClick = (item) => {
    setActive(item);
    setIsOpen(false); // Close mobile menu on click
  };

  const navLinkClasses = (item) =>
    `px-3 py-1 rounded transition duration-200 ${
      active === item ? "bg-teal-500" : "text-gray-300"
    } hover:bg-white/50`;

  // href="#home"
  return (
    <nav className="bg-[#1e232c] text-white border-b border-gray-700 fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex p-4 gap-4 justify-between">
            <div className="flex items-center flex-shrink-0 flex-row font-bold gap-x-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <img src={LogoIcon} className="w-9 h-10" alt="" />
              <div className="flex gap-x-2">
                <span>Abreham</span>
                <span className="text-gray-300">Tilahun</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex space-x-6 text-sm">
            {navItems.map((item) => (
              <a
                href={`#${navItemLinks[item]}`}
                key={item}
                onClick={() => handleClick(item)}
                className={navLinkClasses(item)}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen ? (
          <div className="md:hidden mt-2 space-y-2 text-sm">
            {/* {navItems.map((item) => (
              <button
                href={`#${navItemLinks[item]}`}
                key={item}
                onClick={() => handleClick(item)}
                >
                {item}
                </button>
                ))} */}
            {navItems.map((item) => (
              <a
                href={`#${navItemLinks[item]}`}
                key={item}
                onClick={() => handleClick(item)}
                className={
                  navLinkClasses(item) + " block w-full h-10 text-left"
                }
              >
                {item}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
