import React, { useState } from 'react';
import Hero from '../Components/Hero';
import PhonesContainer from '../Components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
  // Data from loader
  const data = useLoaderData();

  // State for displayed phones
  const [phones, setPhones] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();
    const searchedPhones = data.filter(
      phone =>
        phone.name.toLowerCase().includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().includes(text.toLowerCase())
    );
    setPhones(searchedPhones);
  };

  return (
    <div>
      <Hero handleSearch={handleSearch} />
      <PhonesContainer phones={phones} />
    </div>
  );
};

export default Home;
