import React from "react";
import Card from "../Card/Card";

export const CardRow = (props) => {
  const { pokemonData } = props;
  
  return (
    <>
    {console.log("pokemon, ", pokemonData)}
    <div>POKEMON NAME:</div>
      <Card />
    </>
  );
};

export default CardRow;
