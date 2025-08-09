import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';

const PhonesContainer = ({ phones }) => {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayPhones(phones);
    } else {
      setDisplayPhones(phones.slice(0, 6));
    }
  }, [phones, showAll]);

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.length > 0 ? (
          displayPhones.map(phone => <PhoneCard key={phone.id} phone={phone} />)
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No phones found
          </p>
        )}
      </div>

      {phones.length > 6 && (
        <button
          onClick={() => {
            setShowAll(!showAll);
            if (showAll) {
              window.scrollTo(0, 400);
            }
          }}
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
            {showAll ? 'Show Less' : 'Show All'}
          </span>
          <span className="relative invisible">Show All</span>
        </button>
      )}
    </div>
  );
};

export default PhonesContainer;
