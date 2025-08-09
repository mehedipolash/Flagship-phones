import React from 'react';

const Button = ({label,type,onClick}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-lime-400 transition duration-300 ease-out border-2 border-lime-500 rounded-full shadow-md group cursor-pointer"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease bg-lime-600">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-green-600 transition-all duration-300 transform group-hover:translate-x-full ease ">
        {label}
      </span>
      <span className="relative invisible">Search</span>
    </button>
  );
};

export default Button;