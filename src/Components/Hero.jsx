import React, { useState } from 'react';
import bannerImg from '../assets/banner.png';

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="py-12">
      <img
        src={bannerImg}
        alt="banner"
        className="w-full mx-auto md:max-w-md"
      />
      <div className="text-center space-y-4">
        <h1 className="font-thin text-7xl text-gray-900">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500">
          Best place to browse, search, view details, and purchase top flagship
          phones <br /> of the current time — FlagshipFaceOff
        </p>

        <form
          onSubmit={e => {
            handleSearch(e, searchText);
            setSearchText('');
          }}
          className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24"
        >
          <input
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="bg-white border-gray-300 rounded shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus-within:shadow-outline md:mr-2 lg:mb-0"
            type="text"
            placeholder="Search phone by name or brand"
          />

          <button
            type="submit"
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
            <span className="absolute flex items-center justify-center w-full h-full text-green-600 transition-all duration-300 transform group-hover:translate-x-full ease text-xl">
              Search
            </span>
            <span className="relative invisible">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
