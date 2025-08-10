import React, { useEffect, useState } from 'react';
import PhoneCard from '../Components/PhoneCard';
import { getFavourites, removeFavourite } from '../utils';
import EmptyState from '../Components/ui/EmptyState';

const Favourites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);

  useEffect(() => {
    const savedPhones = getFavourites();
    setDisplayPhones(savedPhones);
  }, []);

  const handleDelete = id => {
    removeFavourite(id);
    setDisplayPhones(getFavourites());
  };

  if(displayPhones.length<1) return <EmptyState></EmptyState>

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.length > 0 ? (
          displayPhones.map(phone => (
            <PhoneCard
              key={phone.id}
              phone={phone}
              deletable={true}
              handleDelete={handleDelete}
            />
          ))
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
