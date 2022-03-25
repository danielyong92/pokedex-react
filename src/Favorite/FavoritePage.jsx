import React, { useContext } from 'react';
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import { pokemonContexts } from '../Context/PokemonContext';

export const FavoritePage = ({data}) => {
  // const { favorites } = props;
  const {favorites} = useContext(pokemonContexts);
  console.log("favorites before return", favorites)
  console.log("data", data)
  return (
    <>
      <div>THIS IS FAVORITE PAGE!!</div>
      {/* {console.log("what is favorites", favorites)} */}
      <Grid container>
        {favorites.map((pokemon, index) => (
          <Grid item md={4} direction={"column"}>
            <Card
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
              image={pokemon.sprites.other.dream_world.front_default}
              key={pokemon.id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FavoritePage;
