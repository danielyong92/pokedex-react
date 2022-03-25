import React from "react";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card"

export const FavoritePage = ({favorites}) => {
//   const { favorite } = props;
  return (
    <>
      <div>THIS IS FAVORITE PAGE!!</div>
      {console.log("what is favorites", favorites)}
      <Grid container>
        {favorites.map((pokemon, index) => (
          <Grid item md={4} direction={"column"}>
            <Card
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
              image={pokemon.sprites.other.dream_world.front_default}
              key={index}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FavoritePage;
