import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { MdBookmarkAdd } from 'react-icons/md';
import { IoCart } from 'react-icons/io5';
import { addFavorite, addToCart, getCart } from '../utils';
import { CartContext } from '../providers/Context';
import Button from '../components/ui/Button';

const PhoneDetails = () => {
  const { setCart } = useContext(CartContext);
  const data = useLoaderData();
  const { jhankar } = useParams();
  const singlePhone = data.find(phone => phone.id === parseInt(jhankar));

  if (!singlePhone) {
    return (
      <p className="text-center py-20 text-xl font-semibold">
        Phone not found.
      </p>
    );
  }

  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone;

  const handleFavourite = () => {
    addFavorite(singlePhone);
  };

  const handleCart = () => {
    addToCart(singlePhone);
    setCart(getCart());
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full max-h-[400px] object-contain mb-8 rounded-lg shadow-lg"
      />

      {/* Title and action buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-5xl font-thin text-gray-900 mb-4 md:mb-0">
          {name}
        </h1>
        <div className="space-x-4 flex">
          <Button onClick={handleCart} label={<IoCart size={24} />} />
          <Button
            onClick={handleFavourite}
            label={<MdBookmarkAdd size={24} />}
          />
        </div>
      </div>

      {/* Description */}
      <p className="mb-8 text-lg text-gray-700 max-w-3xl">{description}</p>

      {/* Specifications grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
          <ul className="space-y-2 text-gray-800">
            <li>
              <strong>Brand:</strong> {brand}
            </li>
            <li>
              <strong>Model:</strong> {model}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Storage & Price</h2>
          <ul className="space-y-2 text-gray-800">
            {storage?.map((stor, idx) => {
              // Match price key like '256GB' in price object for this storage option
              const capacity = stor.split(' ')[0]; // e.g. "256GB"
              const storagePrice =
                price && price[capacity] ? price[capacity] : 'N/A';
              return (
                <li key={idx}>
                  <strong>{stor}:</strong> {storagePrice}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Camera Info</h2>
          <p className="text-gray-800">{camera_info}</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
