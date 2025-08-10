import React, { useEffect, useState } from 'react';
import PhoneCard from '../Components/PhoneCard';
import { getFavourites } from '../utils';

const Favourites = () => {
 const [displayPhones, setDisplayPhones] = useState([]);

 useEffect(() => {
   const savedPhones = getFavourites();
   setDisplayPhones(savedPhones);
 }, []);

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

    </div>
  );
};

export default Favourites;
