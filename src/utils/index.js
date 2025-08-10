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
    return console.log('Phone already added');
  }
  favourites.push(phone);
  localStorage.setItem('favourites', JSON.stringify(favourites));
};


