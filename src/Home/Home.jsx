import React from "react";
import { useEffect, useState } from "react";
import CardRow from "../CardRow/CardRow";
import Header from "../Header/Header";

const Home = (props) => {
  const { handleFavorites } = props;
  const [pokemonData, setPokemonData] = useState("");
  const [searchComplete, setSearchComplete] = useState(false);

  const pokemonSearch = async () => {
    const pokemon = [];
    for (let i = 1; i <= 15; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(url);
      pokemon.push(await response.json());
    }
    setPokemonData(pokemon);
    setSearchComplete(true);
  };

  useEffect(() => {
    pokemonSearch();
  }, []);

  return (
    <>
      {searchComplete && <CardRow pokemonData={pokemonData} handleLikeClick={handleFavorites}/>}
      <button>Load more!</button>
    </>
  );
};

export default Home;
