import React from "react";
import Card from "../Card/Card";
import Grid from "@mui/material/Grid";

export const CardRow = props => {
  const { pokemonData, handleClick } = props;

  return (
    <>
      {console.log("pokemon, ", pokemonData)}
      <div>
        <Grid container>
          {pokemonData.map((pokemon, index) => (
            <Grid item md={4} direction={"column"}>
              <Card
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                image={pokemon.sprites.other.dream_world.front_default}
                key={index}
                handleClick={handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default CardRow;
