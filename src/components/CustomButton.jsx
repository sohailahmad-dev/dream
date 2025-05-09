// components/CustomButton.jsx
import React from "react";

const CustomButton = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-6 py-2 rounded-2xl font-bold text-lg
      bg-gradient-to-r from-white via-gray-200 to-gray-200
      text-black shadow-md
  
      hover:text-purple-900
      hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out
      flex items-center justify-center
      ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
