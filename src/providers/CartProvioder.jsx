import React, { useEffect, useState } from 'react';
import { CartContext } from './Context';
import { getCart } from '../utils';

const CartProvioder = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    //local storage e giye dekho cart er data ase kina

    setCart(getCart())
   },
    [])
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvioder;
