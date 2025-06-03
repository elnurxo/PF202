import { useState } from "react";
import FavoriteContext from "./favoriteContext";

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (book) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.find((b) => b.id == book.id)
        ? prevFavorites.filter((b) => b.id != book.id)
        : [...prevFavorites, book];
    });
  };
  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
