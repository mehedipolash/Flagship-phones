import toast from 'react-hot-toast';

// add to faourite related
export const getFavourites = () => {
  const favourites = localStorage.getItem('favourites');
  if (favourites) {
    return JSON.parse(favourites);
  } else {
    return [];
  }
};

export const addFavorite = phone => {
  const favourites = getFavourites();
  const isExists = favourites.find(p => p.id === phone.id);
  if (isExists) {
    return toast.error('Phone already added');
  }
  favourites.push(phone);
  toast.success('phone added successfully');
  localStorage.setItem('favourites', JSON.stringify(favourites));
};

export const removeFavourite = id => {
  const favourites = getFavourites();
  const remainingFavourites = favourites.filter(phone => phone.id !== id);
  localStorage.setItem('favourites', JSON.stringify(remainingFavourites));
  toast.success('Phone removed successfully!');
};
// add to cart related

export const getCart = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

export const addToCart = phone => {
  const cart = getCart();
  const isExists = cart.find(p => p.id === phone.id);
  if (isExists) {
    return toast.error('Phone already added');
  }
  cart.push(phone);
  toast.success('phone added successfully');
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeCart = id => {
  const cart = getCart();
  const remainingCart = cart.filter(phone => phone.id !== id);
  localStorage.setItem('cart', JSON.stringify(remainingCart));
};
