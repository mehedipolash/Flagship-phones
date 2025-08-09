import React from 'react';
import PhoneCard from './PhoneCard';

const PhonesContainer = ({phones}) => {
  return (
    <div className="py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {phones.map(phone => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
      {/* btn */}
      <button
        href="#_"
        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-lame-400 transition duration-300 ease-out border-2 border-lime-500 rounded-full shadow-md group cursor-pointer"
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
        <span className="absolute flex items-center justify-center w-full h-full text-green-600 transition-all duration-300 transform group-hover:translate-x-full ease text-xl">
          Search
        </span>
        <span className="relative invisible">Show all</span>
      </button>
    </div>
  );
};

export default PhonesContainer;