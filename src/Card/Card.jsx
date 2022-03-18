import React from "react";

export const Card = (props) => {
    const { pokemonData } = props
    const imagePath = pokemonData.sprites.front_default;
    const pokemonName = pokemonData.name;
  return(
      <>
      {console.log("pokemonData from Card", pokemonData)} 
      <img id="image" src={imagePath}></img>
      <div>Pokemon Name: {pokemonName}</div>
      </>
  )
};

export default Card;