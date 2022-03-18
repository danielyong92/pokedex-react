import React from "react";
import Card from "../Card/Card";

export const CardRow = (props) => {
  const { pokemonData } = props;
    
  return (
    <>
    {console.log("pokemon, ", pokemonData)}
    {pokemonData.map((pokemon)=> {
        console.log("single pokemon?", pokemon)
    })}
      <Card pokemonData={pokemonData[0]}/>
    </>
  );
};

export default CardRow;
