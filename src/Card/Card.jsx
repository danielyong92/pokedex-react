import { React, useState, useEffect } from "react";
import "./Card.css";
import Grid from "@mui/material/Grid";

export const Card = props => {
  const { id, name, image, type, index, handleClick } = props;
  // const [ favorites, setFavorites ] = useState([]);
  // const [ onClick, setOnClick ] = useState(false);

  // const oldArray =[];

  // const handleClick = () => {
  //   console.log("in handle click");
  //   setOnClick(true);
  // }
  
  // useEffect(() => {
  //   setFavorites(favorites => [...favorites,props]);
  //   console.log("state of favorite", favorites);
  // }, [onClick]);

  return (
    <>
      <Grid container>
        <Grid item md={4}>
          <img id="image" src={image}></img>
        </Grid>
        <div class="pokemon-stats">
          <Grid item md={5}>
            <div>Pokemon Name: {name}</div>
            <div>Id: {id}</div>
            <div>type: {type}</div>
          </Grid>
        </div>
        <Grid item md={3}>
          <button >DISLIKE</button>
          <button onClick={handleClick}>LIKE</button>
        </Grid>
      </Grid>
    </>
  );
};

export default Card;
