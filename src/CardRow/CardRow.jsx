import React from "react";
import Card from "../Card/Card";

export const CardRow = (props) => {
  const { pokemonData } = props;
    
  return (
    <>
    {console.log("pokemon, ", pokemonData)}
    {pokemonData.map((pokemon,index) => 
      <Card id={pokemon.id} name={pokemon.name} type={pokemon.types[0].type.name} image={pokemon.sprites.front_default} key={index}/>
    )}
    </>
  );
};

export default CardRow;
