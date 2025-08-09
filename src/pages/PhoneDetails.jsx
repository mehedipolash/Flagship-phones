import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Components/ui/Button';

const PhoneDetails = () => {
  const data = useLoaderData();
  const { jhankar } = useParams(); //jhankar is id actually from routes
  const singlePhone = data.find(phone => phone.id === parseInt(jhankar));
  console.log(singlePhone);

  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};

  return (
    <div className="w-full py-12">
      <img
        src={image}
        alt="banner"
        className="w-full mx-auto md:w-auto mb-8 "
      />
      <div className="flex justify-between">
        <h1 className="font-thin text-7xl text-gray-900">{name}</h1>
        <div>
          <Button label='Cart'></Button>
          <Button label='Favourites'></Button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
