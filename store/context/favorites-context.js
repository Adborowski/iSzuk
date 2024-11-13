import { createContext, useState, useEffect } from "react";

// we add keys here just for better autocompletion
// we define the values below
export const FavoritesContext = createContext({
  favoriteIds: [],
  addFavorite: (id) => {},
  removeFavorites: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  // the actual implementations of keys

  useEffect(() => {
    console.log("favIds:", favoriteIds);
  }, [favoriteIds]);

  const addFavorite = (id) => {
    setFavoriteIds((prev) => {
      if (!prev.includes(id)) {
        console.log("Added favorite: id");
        return [...prev, id];
      } else {
        console.log("Can't add favorite", id);
      }
    });
  };

  const removeFavorite = (id) => {
    console.log("Removing favorite", id);
    setFavoriteIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  const value = {
    favoriteIds: favoriteIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
