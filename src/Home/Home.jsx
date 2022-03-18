import React from "react";
import { useEffect, useState } from "react";
import CardRow from "../CardRow/CardRow";

const Home = () => {
  const [pokemonData, setPokemonData] = useState("");

  const pokemonSearch = async () => {
    const pokemon=[];
      for(let i = 1; i<= 20; i++) {
          const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
          const response = await fetch(url);
          pokemon.push(await response.json());   
      }
    setPokemonData(pokemon);
  };

  useEffect(() => {
    pokemonSearch();
  },[]);

  return (
    <>
      <div> THIS IS HOMEPAGE</div>
      <CardRow pokemonData={pokemonData} />
    </>
  );
};

export default Home;
