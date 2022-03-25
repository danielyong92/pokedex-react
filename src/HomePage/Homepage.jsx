import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import FavoritePage from "../Favorite/FavoritePage";
import Header from "../Header/Header";

export const Homepage = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorites = props => {
    setFavorites([...favorites, props]);
  };

  useEffect(() => {
    console.log("favorites", favorites);
  }, [favorites]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home handleFavorites={handleFavorites} />}
          />
          <Route
            path="favorite"
            element={<FavoritePage favorites={favorites} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default Homepage;
