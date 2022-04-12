import { createContext, useState } from "react";

const FavortiesContext = createContext({
  favorties: [],
  totalFavorites: 0,
  addFavorite: (favortieMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favortieMeetup) {
    setUserFavorites((prevUserFavorties) => {
      return prevUserFavorties.concat(favortieMeetup);
    });
  }

  function removeFavortieHandler(meetupId) {
    setUserFavorites((prevUserFavorties) => {
      return prevUserFavorties.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemFavortieHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorties: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavortieHandler,
    itemIsFavorite: itemFavortieHandler,
  };

  return (
    <FavortiesContext.Provider value={context}>
      {props.children}
    </FavortiesContext.Provider>
  );
}

export default FavortiesContext;
