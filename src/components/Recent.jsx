import React, { useState } from "react";
import Card from "./RecentCards";
import { CashGoIcon, CBEIcon, DashenIcon, TeleTvIcon } from "../assets";
const data = [
  {
    title: "Dashen Super App",
    category: "Fintech",
    description: "A versatile one stop shop super app.",
    downloads: "1L+",
    image: DashenIcon,
  },
  {
    title: "3 click App",
    category: "Ecommerce",
    description: "An ecommerce solution for modern shopping.",
    downloads: "1L+",
    image: DashenIcon,
  },
  {
    title: "Cash Go",
    category: "Fintech",
    description: "A powerful app for remmitance management.",
    downloads: "1L+",
    image: CashGoIcon,
  },
  {
    title: "Tele tv",
    category: "Entertainment",
    description:
      "A powerful app for entertainment specifically for the movie sector.",
    downloads: "1L+",
    image: TeleTvIcon,
  },
  {
    title: "EthioDirect",
    category: "Fintech",
    description: "A powerful app for remmitance management.",
    downloads: "1L+",
    image: CBEIcon,
  },
];

const categories = ["All", "Entertainment", "Ecommerce", "Fintech"];

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData =
    activeCategory === "All"
      ? data
      : data.filter((item) => item.category === activeCategory);

  return (
    // px-4 md:px-12
    <div className="min-h-screen bg-[#0e111a] px-12 py-10 text-white">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        My recent <span className="text-teal-400">works</span>
      </h1>

      {/* Categories scrollable bar */}
      <div className="overflow-x-auto whitespace-nowrap mb-8 pb-1 scroll-hide">
        <div className="flex gap-3 w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-all shrink-0 ${
                activeCategory === cat
                  ? "bg-teal-500 text-white"
                  : "bg-[#1a1d29] hover:bg-teal-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards horizontally scrollable */}
      <div className="overflow-x-auto scroll-hide">
        <div className="flex gap-4 min-w-max">
          {filteredData.map((item, idx) => (
            <div className="min-w-[220px]" key={idx}>
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;