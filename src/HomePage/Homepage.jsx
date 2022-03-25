import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import FavoritePage from "../Favorite/FavoritePage";
import Header from "../Header/Header";
import { pokemonContexts } from "../Context/PokemonContext";

export const Homepage = () => {
  const [favorites, setFavorites] = useState([]);
  const [removeFavorite, setRemoveFavorite] = useState(false);

  const handleFavorites = props => {
    setFavorites([...favorites, props]);
    setRemoveFavorite(true);
  };

  useEffect(() => {
    console.log("favorites", favorites);
  }, [favorites]);

  return (
    <>
      <pokemonContexts.Provider value={{favorites}}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home handleFavorites={handleFavorites} removeFavorite={removeFavorite}/>}
            />
            <Route
              path="favorite"
              element={<FavoritePage data={favorites}/>}
            />
          </Routes>
      </pokemonContexts.Provider>
    </>
  );
};

export default Homepage;
