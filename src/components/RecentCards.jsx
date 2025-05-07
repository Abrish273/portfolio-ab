// Card.jsx
import React from "react";

const Card = ({ title, description, downloads, image }) => {
  return (
    <div className="bg-[#1a1d29] rounded-xl p-3 shadow-md text-white w-full h-full flex flex-col text-sm max-w-[220px]">
      {/* <div className="bg-[#1a1d29] rounded-2xl p-4 shadow-md text-white w-full h-full flex flex-col"> */}
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-4 w-full aspect-video object-cover"
      />
      <h3 className="text-teal-400 font-semibold text-sm mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-2 flex-grow">{description}</p>
      <p className="text-sm text-white font-medium mb-3">
        {downloads} Downloads
      </p>
      {/* <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm transition-all mt-auto">
        Check it out →
      </button> */}
    </div>
  );
};

export default Card;
